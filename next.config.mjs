/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export
  output: 'export',
  
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
