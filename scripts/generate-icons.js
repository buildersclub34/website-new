const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

// Ensure the public/icons directory exists
const iconsDir = path.join(process.cwd(), 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Sizes for the icons
const sizes = [192, 512];

// Create a simple icon with text
async function generateIcons() {
  for (const size of sizes) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Fill background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size, size);
    
    // Add text
    ctx.fillStyle = '#FFD700';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const fontSize = size / 4;
    ctx.font = `bold ${fontSize}px Arial`;
    
    // Split text into two lines
    ctx.fillText('BUILDERS', size / 2, size / 2 - fontSize / 2);
    ctx.fillText('CLUB', size / 2, size / 2 + fontSize / 2);
    
    // Save the icon
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(iconsDir, `icon-${size}x${size}.png`), buffer);
  }
  
  console.log('Icons generated successfully!');
}

generateIcons().catch(console.error);
