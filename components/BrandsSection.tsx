'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const brands = [
  {
    name: 'Intel',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/52-1.png',
  },
  {
    name: 'Netcore',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/53-1.png',
  },
  {
    name: 'Dell',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/54-1.png',
  },
  {
    name: 'Bluesmart',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/55-1.png',
  },
  {
    name: 'ixigo',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/56-1.png',
  },
  {
    name: 'HSBC',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/57-1.png',
  },
  {
    name: 'DBS',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/58-1.png',
  },
  {
    name: 'Ditto',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/64-1.png',
  },
  {
    name: 'Web Engage',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/65-1.png',
  },
  {
    name: 'Boncos',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/104.png',
  },
  {
    name: 'Yoga Bar',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/110.webp',
  },
  {
    name: 'GO Desi',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/108.png',
  },
  {
    name: 'Vultr',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/107.png',
  },
  {
    name: 'WeWork',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/106.png',
  },
  {
    name: 'Ai sensy',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/105.png',
  },
  {
    name: 'Easydiner',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/99.png',
  },
  {
    name: 'Partner Logos',
    logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Partner-Logos.png',
  },
];

export default function BrandsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    // Duplicate the brand items for infinite scrolling
    const scrollerInner = scrollerRef.current;
    const scrollerContent = Array.from(scrollerInner.children);
    
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 mb-12">
        <SectionHeader 
          title="Brands We've"
          highlightedText="Worked With"
          description="Trusted by leading companies and innovative startups worldwide"
          badgeText="Partners"
        />
      </div>

      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden"
      >
        <div 
          ref={scrollerRef}
          className="flex items-center gap-12 w-max whitespace-nowrap relative w-full overflow-hidden"
          style={{
            animation: 'scroll 30s linear infinite',
          }}
        >
          <div 
            ref={scrollerRef}
            className="flex items-center gap-12 w-max whitespace-nowrap"
            style={{
              animation: 'scroll 30s linear infinite',
            }}
          >
            {brands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className="flex flex-col items-center justify-center group"
              >
                <div className="w-32 h-24 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-[#FFD700]/50 transition-all duration-300 p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain p-2 transition-all duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100px, 128px"
                      unoptimized
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://via.placeholder.com/150/1a1a1a/ffffff?text=${encodeURIComponent(brand.name)}`;
                      }}
                    />
                  </div>
                </div>
                <span className="mt-3 text-white/70 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
      `}</style>
    </section>
  );
}
