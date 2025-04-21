// ./copy-schemas.ts
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import { execSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Using relative paths from the script location
const API_SCHEMAS_PATH = path.resolve(
  __dirname,
  "../../mechmate-api/src/api-schemas"
);
const SDK_SCHEMAS_PATH = path.resolve(__dirname, "../src/api-schemas");
const API_PRISMA_SCHEMA_PATH = path.resolve(
  __dirname,
  "../../mechmate-api/prisma/schema.prisma"
);
const SDK_PRISMA_SCHEMA_PATH = path.resolve(
  __dirname,
  "../prisma/schema.prisma"
);

function normalizeContent(content: string): string {
  return content
    .replace(/\/\*\*[\s\S]*?\*\/\n*/m, "")
    .replace(/\r\n/g, "\n")
    .trim();
}

async function getFileContent(filePath: string): Promise<string | null> {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

async function needsUpdate(
  srcPath: string,
  destPath: string
): Promise<boolean> {
  console.log(`\nComparing files:\n  Source: ${srcPath}\n  Dest: ${destPath}`);
  const [srcContent, destContent] = await Promise.all([
    getFileContent(srcPath),
    getFileContent(destPath),
  ]);
  if (!destContent) {
    console.log("  → Destination file does not exist");
    return true;
  }
  const normalizedSrcContent = normalizeContent(srcContent!);
  const normalizedDestContent = normalizeContent(destContent);
  const contentsMatch = normalizedSrcContent === normalizedDestContent;
  if (!contentsMatch) {
    console.log("  → Contents differ (excluding timestamp)");
    console.log("\nNormalized Source Content:");
    console.log("------------------------");
    console.log(normalizedSrcContent);
    console.log("\nNormalized Dest Content:");
    console.log("------------------------");
    console.log(normalizedDestContent);
    console.log(
      "\nSource content hash:",
      crypto.createHash("md5").update(normalizedSrcContent).digest("hex")
    );
    console.log(
      "Dest content hash:",
      crypto.createHash("md5").update(normalizedDestContent).digest("hex")
    );
  } else {
    console.log("  → Contents match (excluding timestamp)");
  }
  return !contentsMatch;
}

async function copyDirectory(
  sourcePath: string,
  destPath: string
): Promise<void> {
  await fs.mkdir(destPath, { recursive: true });
  const entries = await fs.readdir(sourcePath, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(sourcePath, entry.name);
    const destFilePath = path.join(destPath, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destFilePath);
    } else if (entry.isFile() && entry.name.endsWith(".ts")) {
      const shouldUpdate = await needsUpdate(srcPath, destFilePath);
      if (shouldUpdate) {
        const content = await fs.readFile(srcPath, "utf8");
        const newContent = `/**
 * Schema duplicated from API (${srcPath})
 * Last updated: ${new Date().toISOString()}
 * Update this file when API schema changes
 */

${content}`;
        await fs.writeFile(destFilePath, newContent);
        console.log(`✓ Updated: ${path.relative(process.cwd(), destFilePath)}`);
      } else {
        console.log(
          `⚡ Skipped: ${path.relative(process.cwd(), destFilePath)} (no changes)`
        );
      }
    }
  }
}

async function copyPrismaSchema(): Promise<void> {
  console.log(
    `\nCopying Prisma schema:\n  Source: ${API_PRISMA_SCHEMA_PATH}\n  To: ${SDK_PRISMA_SCHEMA_PATH}`
  );
  await fs.mkdir(path.dirname(SDK_PRISMA_SCHEMA_PATH), { recursive: true });
  const shouldUpdate = await needsUpdate(
    API_PRISMA_SCHEMA_PATH,
    SDK_PRISMA_SCHEMA_PATH
  );
  if (shouldUpdate) {
    let content = await fs.readFile(API_PRISMA_SCHEMA_PATH, "utf8");
    content = content.replace(/generator\s+zod\s*\{[\s\S]*?\}\n*/g, "");
    const newContent = `// Schema duplicated from API (${API_PRISMA_SCHEMA_PATH})
// Last updated: ${new Date().toISOString()}
// Update this file when API schema changes

${content}`;
    await fs.writeFile(SDK_PRISMA_SCHEMA_PATH, newContent);
    console.log(
      `✓ Updated: ${path.relative(process.cwd(), SDK_PRISMA_SCHEMA_PATH)}`
    );

    // Run prisma generate
    console.log("\nGenerating Prisma client...");
    try {
      execSync("pnpm prisma generate", { stdio: "inherit" });
      console.log("✓ Prisma client generated successfully");
    } catch (error) {
      console.error("Error generating Prisma client:", error);
      throw error;
    }
  } else {
    console.log(
      `⚡ Skipped: ${path.relative(process.cwd(), SDK_PRISMA_SCHEMA_PATH)} (no changes)`
    );
  }
}

async function copySchemas(): Promise<void> {
  try {
    console.log("\nStarting schema copy...");
    console.log(
      `Zod Schemas:\n  From: ${API_SCHEMAS_PATH}\n  To: ${SDK_SCHEMAS_PATH}`
    );
    console.log(
      `Prisma Schema:\n  From: ${API_PRISMA_SCHEMA_PATH}\n  To: ${SDK_PRISMA_SCHEMA_PATH}`
    );
    await fs.mkdir(SDK_SCHEMAS_PATH, { recursive: true });
    await copyDirectory(API_SCHEMAS_PATH, SDK_SCHEMAS_PATH);
    await copyPrismaSchema();
    console.log("\nSchema copy complete!");
  } catch (error) {
    console.error("\nError copying schemas:", error);
    process.exit(1);
  }
}

copySchemas();
