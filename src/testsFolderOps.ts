import fs from "fs";
import path from "path";

// Check if the tests folder exists, if not create it
(async () => {
  const testsFolderPath = path.resolve(__dirname, "../../../../../tests");
  if (!fs.existsSync(testsFolderPath)) {
    fs.mkdirSync(testsFolderPath);
    console.log(`Created tests folder at ${testsFolderPath}`);
  }
})();
