const { execSync } = require('child_process');
const fs = require('fs');

console.log('Starting Vercel build...');

// 1. Install dependencies
console.log('Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to install dependencies:', error);
  process.exit(1);
}

// 2. Generate Prisma client
console.log('Generating Prisma client...');
try {
  execSync('npx prisma generate', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to generate Prisma client:', error);
  process.exit(1);}

// 3. Run the build
console.log('Running Next.js build...');
try {
  execSync('next build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
