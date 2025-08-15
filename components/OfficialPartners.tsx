'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Rocket, ArrowRight } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import NeoPopButton from './ui/NeoPopButton';

// Partner data with logo URLs and names
const partners = [
  { id: 1, name: 'Partner 1', logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/65-2.png' },
  { id: 2, name: 'Partner 2', logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/87.png' },
  { id: 3, name: 'Partner 3', logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/86.png' },
  { id: 4, name: 'Partner 4', logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/76.png' },
  { id: 5, name: 'Partner 5', logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/88.png' },
  { id: 6, name: 'Partner 6', logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/59-1.png' },
  { id: 7, name: 'Partner 7', logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/92.png' },
  { id: 8, name: 'Partner 8', logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/91.png' },
  { id: 9, name: 'Partner 9', logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/77.png' },
  { id: 10, name: 'Partner 10', logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/78.png' },
];

export default function OfficialPartners() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <SectionHeader
            title="Trusted By"
            highlightedText="Industry Leaders"
            description="We're proud to collaborate with visionary companies who share our passion for innovation and excellence."
            badgeText="Our Network"
            align="center"
            titleClassName="text-3xl md:text-4xl lg:text-5xl"
          />
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.id}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl p-6 flex items-center justify-center h-40 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 border border-gray-800/50 hover:border-yellow-400/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33.33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <NeoPopButton 
            as="link"
            href="#contact"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-lg py-3 px-8 group"
          >
            <span className="flex items-center">
              Become a Partner
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </NeoPopButton>
        </div>
      </div>
    </section>
  );
}
