'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { Product, ProductCard } from './ProductCard';
import { ProductsGrid } from './ProductsGrid';

type ProductsSectionProps = {
  initialProducts?: Product[];
};

export function ProductsSection({ initialProducts = [] }: ProductsSectionProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(!initialProducts.length);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    sort: 'popular',
  });

  // Fetch products with filters and pagination
  const fetchProducts = useCallback(async (reset = false) => {
    try {
      const currentPage = reset ? 1 : page;
      const query = new URLSearchParams({
        ...filters,
        page: currentPage.toString(),
      }).toString();

      const response = await fetch(`/api/products?${query}`);
      const data = await response.json();

      if (reset) {
        setProducts(data.products);
      } else {
        setProducts(prev => [...prev, ...data.products]);
      }
      
      setHasMore(data.hasMore);
      setPage(currentPage + 1);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  // Initial load
  useEffect(() => {
    if (!initialProducts.length) {
      fetchProducts(true);
    }
  }, [initialProducts.length, fetchProducts]);

  // Handle filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [filters, fetchProducts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      search: e.target.value,
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({
      ...prev,
      category: e.target.value,
    }));
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({
      ...prev,
      sort: e.target.value,
    }));
  };

  if (loading && !products.length) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-gray-900/80 rounded-2xl -m-4 z-0" />
      <div className="relative z-10">
        <div className="mb-8 bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50 shadow-2xl shadow-black/30">
          <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                value={filters.search}
                onChange={handleSearch}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-700 rounded-lg leading-5 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all duration-200 sm:text-sm backdrop-blur-sm"
                placeholder="Search tools and services..."
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300 font-medium">Filter by:</span>
            <div className="relative">
              <select 
                value={filters.category}
                onChange={handleCategoryChange}
                className="appearance-none block w-full pl-3 pr-10 py-2.5 text-base border border-gray-700 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all duration-200 sm:text-sm backdrop-blur-sm"
              >
              <option value="all">All Categories</option>
              <option value="productivity">Productivity</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
            <div className="relative">
              <select 
                value={filters.sort}
                onChange={handleSort}
                className="appearance-none block w-full pl-3 pr-10 py-2.5 text-base border border-gray-700 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all duration-200 sm:text-sm backdrop-blur-sm"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="savings">Highest Savings</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="relative mt-8">
          <div className="absolute -inset-4 -m-2 bg-gradient-to-r from-yellow-500/5 to-purple-500/5 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 shadow-2xl shadow-black/30">
            <ProductsGrid>
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </ProductsGrid>

            {hasMore && (
              <div className="mt-12 text-center">
                <button 
                  onClick={() => fetchProducts()}
                  disabled={loading}
                  className="inline-flex items-center px-6 py-3 border-2 border-yellow-500 text-base font-medium rounded-md shadow-sm text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200 disabled:opacity-50 hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  {loading ? 'Loading...' : 'Load More Deals'}
                  {!loading && (
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
