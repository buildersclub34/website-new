const fs = require('fs');
const path = require('path');

const uiDir = path.join(__dirname, 'components', 'ui');

// Update imports in UI components
fs.readdirSync(uiDir).forEach(file => {
  if ((file.endsWith('.tsx') || file.endsWith('.ts')) && file !== 'utils.ts') {
    const filePath = path.join(uiDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update import path to point to the new location
    content = content.replace(
      /from ['"]..\/..\/lib\/utils['"]/g, 
      'from "./lib/utils"'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log('Updated import paths in UI components');
