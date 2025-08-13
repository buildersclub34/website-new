#!/bin/bash
set -e

echo "--- Starting Vercel Build ---"

# Install dependencies
echo "--- Installing Dependencies ---"
npm install

# Generate Prisma client
echo "--- Generating Prisma Client ---"
npx prisma generate --debug

# Run the build
echo "--- Running Next.js Build ---"
npm run build

echo "--- Build Complete ---"
