/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  // Configure path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
      '@/components': path.join(__dirname, 'components'),
      '@/data': path.join(__dirname, 'data'),
      '@/app': path.join(__dirname, 'app')
    };
    return config;
  },
  // Disable static HTML export temporarily
  // output: 'export',
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Optimize images for static export
  images: {
    unoptimized: true,
    domains: [
      'cdn.prod.website-files.com',
      'thebuildersclub.me',
      'vercel.app',
      'buildersclub-*.vercel.app'
    ],
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://thebuildersclub.me',
  },
  
  // Build optimizations
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Enable static HTML export with proper routing
  trailingSlash: true,
  
  // Disable TypeScript type checking during build (faster builds)
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Enable static HTML export with App Router
  trailingSlash: true,
};

export default nextConfig;
