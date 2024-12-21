import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Using relative paths from the script location
const API_SCHEMAS_PATH = path.resolve(
  __dirname,
  "../../mechmate-api/src/api-schemas"
);
const SDK_SCHEMAS_PATH = path.resolve(__dirname, "../src/api-schemas");

function normalizeContent(content: string): string {
  // Remove the entire header comment block and normalize whitespace
  return content
    .replace(/\/\*\*[\s\S]*?\*\/\n*/m, "") // Remove entire JSDoc comment block
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

  // Get both file contents
  const [srcContent, destContent] = await Promise.all([
    getFileContent(srcPath),
    getFileContent(destPath),
  ]);

  // If destination doesn't exist, needs update
  if (!destContent) {
    console.log("  → Destination file does not exist");
    return true;
  }

  // Normalize both contents
  const normalizedSrcContent = normalizeContent(srcContent!);
  const normalizedDestContent = normalizeContent(destContent);

  // Compare normalized contents
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
  // Create destination directory
  await fs.mkdir(destPath, { recursive: true });

  // Read source directory
  const entries = await fs.readdir(sourcePath, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(sourcePath, entry.name);
    const destFilePath = path.join(destPath, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectories
      await copyDirectory(srcPath, destFilePath);
    } else if (entry.isFile() && entry.name.endsWith(".ts")) {
      // Check if file needs to be updated
      const shouldUpdate = await needsUpdate(srcPath, destFilePath);

      if (shouldUpdate) {
        // Read and process TypeScript files
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
          `⚡ Skipped: ${path.relative(
            process.cwd(),
            destFilePath
          )} (no changes)`
        );
      }
    }
  }
}

async function copySchemas(): Promise<void> {
  try {
    console.log("\nStarting schema copy...");
    console.log(`From: ${API_SCHEMAS_PATH}`);
    console.log(`To: ${SDK_SCHEMAS_PATH}`);

    // Ensure SDK schemas directory exists
    await fs.mkdir(SDK_SCHEMAS_PATH, { recursive: true });

    // Copy changed files
    await copyDirectory(API_SCHEMAS_PATH, SDK_SCHEMAS_PATH);

    console.log("\nSchema copy complete!");
  } catch (error) {
    console.error("\nError copying schemas:", error);
    process.exit(1);
  }
}

copySchemas();
