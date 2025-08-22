import React, { ReactNode } from 'react';

interface ProductsGridProps {
  children: ReactNode;
  className?: string;
}

export function ProductsGrid({ children, className = '' }: ProductsGridProps) {
  return (
    <div className="w-full">
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}
        data-target="products-filter.productsGrid"
        style={{
          gridAutoRows: '1fr',
          alignItems: 'stretch',
          justifyItems: 'center'
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full h-full">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
