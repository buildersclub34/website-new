const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Running postbuild script...');

// Ensure the out directory exists
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.log('Creating out directory...');
  fs.mkdirSync(outDir, { recursive: true });
}

// Copy public files to out directory
console.log('Copying public files...');
const publicDir = path.join(process.cwd(), 'public');
if (fs.existsSync(publicDir)) {
  const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();

    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach((childItemName) => {
        copyRecursiveSync(
          path.join(src, childItemName),
          path.join(dest, childItemName)
        );
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  };

  copyRecursiveSync(publicDir, outDir);
}

console.log('Postbuild script completed successfully!');
