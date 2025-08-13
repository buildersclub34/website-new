// This script ensures Prisma client is generated before the Next.js build starts
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Generating Prisma client...');
try {
  // Run prisma generate
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  // Verify the client was generated
  const clientPath = path.join(__dirname, '..', 'node_modules', '.prisma', 'client');
  if (!fs.existsSync(clientPath)) {
    console.error('Prisma client was not generated successfully!');
    process.exit(1);
  }
  
  console.log('Prisma client generated successfully!');
} catch (error) {
  console.error('Failed to generate Prisma client:', error);
  process.exit(1);
}
