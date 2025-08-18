import { ReactNode } from 'react';

interface ProductsGridProps {
  children: ReactNode;
  className?: string;
}

export function ProductsGrid({ children, className = '' }: ProductsGridProps) {
  return (
    <div 
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}
      data-target="products-filter.productsGrid"
      style={{
        gridAutoRows: 'minmax(280px, auto)',
        gridTemplateRows: 'masonry'
      }}
    >
      {children}
    </div>
  );
}
