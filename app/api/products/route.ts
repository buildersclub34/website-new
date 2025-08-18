import { NextResponse } from 'next/server';
import { Product } from '@/components/products/ProductCard';

// Mock data - in a real app, this would come from a database
const mockProducts: Product[] = [
  {
    id: 'notion',
    name: 'Notion',
    logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/j5avtsi9fmcbxnl3sf7cnak600zg',
    description: 'Organize teamwork and increase productivity',
    usedBy: '10,238',
    deal: '6 months free on the Business plan with Unlimited AI',
    savings: '$12,000',
    dealLink: '/notion#notion-coupon-1000',
    tags: ['Collaboration', 'Task Management', 'Productivity']
  },
  {
    id: 'apollo-io',
    name: 'Apollo.io',
    logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/4dk4vgqcb6zd5weh0afogwg77iox',
    description: 'Sales Intelligence and Engagement Platform',
    usedBy: '2,366',
    deal: '50% off the annual Basic or Professional plan for 1 year (Up to 5 seats)',
    savings: '$3,000',
    dealLink: '/apollo-io#apollo-io-promocode-3000',
    isSecretPick: true,
    tags: ['Prospecting', 'AI Sales', 'Lead Management']
  },
  {
    id: 'stripe',
    name: 'Stripe',
    logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/0hiu8hhbwq3u94n8u4o77p0ibgvm',
    description: 'Manage your online payments',
    usedBy: '4,152',
    deal: 'Waived Stripe fees on your next $20,000 in payment processing',
    savings: '$500',
    dealLink: '/stripe#stripe-coupon',
    isPremium: true,
    tags: ['E-Commerce', 'Payments', 'Fintech']
  },
  {
    id: 'make',
    name: 'Make',
    logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/cdkedczs1bt3ixi5mtkz2f76ds8e',
    description: 'A no-code AI platform for limitless automation',
    usedBy: '6,296',
    deal: '12 months free on Teams plan',
    savings: '$636',
    dealLink: '/make#make-coupon',
    isPremium: true,
    tags: ['Automation', 'No-Code', 'Workflows']
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Get query parameters
  const search = searchParams.get('search')?.toLowerCase() || '';
  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'popular';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = 10; // Items per page
  
  // Filter products
  let filteredProducts = mockProducts.filter(product => {
    const searchLower = search.toLowerCase();
    const categoryLower = category.toLowerCase();
    const productTags = product.tags || [];
    
    // Search filter
    const matchesSearch = 
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      productTags.some((tag: string) => tag.toLowerCase().includes(searchLower));
    
    // Category filter
    const matchesCategory = 
      category === 'all' || 
      productTags.some((tag: string) => tag.toLowerCase() === categoryLower);
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort products
  filteredProducts.sort((a, b) => {
    switch (sort) {
      case 'newest':
        // In a real app, you'd sort by date added
        return a.name.localeCompare(b.name);
      case 'savings':
        // Extract numeric value from savings string
        const aSavings = parseInt(a.savings.replace(/[^0-9]/g, ''), 10);
        const bSavings = parseInt(b.savings.replace(/[^0-9]/g, ''), 10);
        return bSavings - aSavings;
      case 'popular':
      default:
        // Sort by number of users (remove commas and convert to number)
        const aUsers = parseInt(a.usedBy.replace(/,/g, ''), 10);
        const bUsers = parseInt(b.usedBy.replace(/,/g, ''), 10);
        return bUsers - aUsers;
    }
  });
  
  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(0, endIndex);
  const hasMore = endIndex < filteredProducts.length;
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json({
    products: paginatedProducts,
    hasMore,
    total: filteredProducts.length,
    page,
    limit
  });
}
