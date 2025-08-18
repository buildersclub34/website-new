import { ProductsSection } from '@/components/products/ProductsSection';

// This is a server component that fetches initial data
async function getInitialProducts() {
  try {
    // In a real app, you might fetch initial data here for SSR/SSG
    // For now, we'll let the client-side fetch handle everything
    return [];
  } catch (error) {
    console.error('Error fetching initial products:', error);
    return [];
  }
}

export default async function ProductsPage() {
  // Fetch initial data on the server
  const initialProducts = await getInitialProducts();

  return <ProductsSection initialProducts={initialProducts} />;
}
