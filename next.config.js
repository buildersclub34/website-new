/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
    optimizePackageImports: ['react-icons']
  },
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  reactStrictMode: true,
  
  // Server-side rendering configuration
  output: 'standalone',
  images: {
    domains: ['localhost'], // Add your image domains here
  },
  
  // Environment variables that should be exposed to the browser
  env: {
    // Public environment variables
    NEXT_PUBLIC_ADMIN_EMAIL: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    NEXT_PUBLIC_ADMIN_PASSWORD: process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || (process.env.NODE_ENV === 'production' ? undefined : 'your-secret-key-here'),
    
    // Add other public environment variables here
  },
  
  // Enable server actions
  experimental: {
    serverActions: true,
    optimizePackageImports: ['react-icons']
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';",
          },
        ],
      },
    ];
  },
  
  // Image optimization for static export
  images: {
    unoptimized: true,
    domains: [
      'cdn.prod.website-files.com',
      'thebuildersclub.me',
      'localhost',
    ],
  },
  
  // Build optimizations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  
  // Webpack configuration
  webpack: (config) => {
    // Add any custom webpack configurations here
    return config;
  },
  
  // Enable static HTML export with App Router
  trailingSlash: true,
};

module.exports = nextConfig;
