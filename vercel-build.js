const { execSync } = require('child_process');

console.log('Starting Vercel build...');

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install --production=false', { stdio: 'inherit' });

  // Run build
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
