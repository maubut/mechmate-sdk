// sdk/scripts/copy-schemas.mjs
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const API_SCHEMAS_PATH =
  "/home/maubut/projects/mechmate/mechmate-api/src/api-schemas";
const SDK_SCHEMAS_PATH =
  "/home/maubut/projects/mechmate/mechmate-sdk/src/api-schemas";

async function copySchemas() {
  try {
    // Ensure SDK schemas directory exists
    await fs.mkdir(SDK_SCHEMAS_PATH, { recursive: true });

    // Read all files from API schemas directory
    const files = await fs.readdir(API_SCHEMAS_PATH);

    console.log("Found schema files:", files);

    // Copy each schema file
    for (const file of files) {
      if (file.endsWith(".ts")) {
        const sourcePath = path.join(API_SCHEMAS_PATH, file);
        const destPath = path.join(SDK_SCHEMAS_PATH, file);

        const content = await fs.readFile(sourcePath, "utf8");

        const newContent = `/**
 * Schema duplicated from API (${sourcePath})
 * Last updated: ${new Date().toISOString()}
 * Update this file when API schema changes
 */

${content}`;

        await fs.writeFile(destPath, newContent);
        console.log(`Copied ${file} to SDK schemas`);
      }
    }

    console.log("Schema copy complete!");
  } catch (error) {
    console.error("Error copying schemas:", error);
    process.exit(1);
  }
}

copySchemas();
