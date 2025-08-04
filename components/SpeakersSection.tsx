'use client';

import { SectionHeader } from './ui/SectionHeader';
import { SpeakerCard } from './SpeakerCard';
import { useEffect, useRef, useMemo, useState } from 'react';
import Image from 'next/image';

// Fallback image for when speaker images fail to load
const FALLBACK_IMAGE = 'https://placehold.co/400x600/000000/ffffff?text=Speaker+Image';

interface Speaker {
  name: string;
  title: string;
  company: string;
  image: string;
  companyLogo?: string;
}

const speakers: Speaker[] = [
  {
    name: 'Samit Khanna',
    title: 'Co-Founder and Partner',
    company: 'Signal Ventures',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Samit-Khanna-1.webp',
  },
  {
    name: 'Anand Datta',
    title: 'Partner',
    company: 'Nexus Venture Partners',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Anand-Dutta-1.webp',
  },
  {
    name: 'Sohail Khan',
    title: 'Founder',
    company: 'The Builders Club',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Sohail-1-1.webp',
  },
  {
    name: 'Mayuresh Raut',
    title: 'Co-Founder & Managing Partner',
    company: 'Seafund',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Mayures.webp',
  },
  {
    name: 'Tejas Pandit',
    title: 'Product Engineering Leader',
    company: 'Dell Technologies',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/tejas-Pandit-Dell-.webp',
  },
  {
    name: 'Subhash Choudhary',
    title: 'Co-Founder & CTO',
    company: 'Dukaan',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Subhash-Choudhary-Dukaan.webp',
  },
  {
    name: 'Shreya Bhatnagar',
    title: 'Principal Associate',
    company: 'Anthill Ventures',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Shreya-Bhatnagar-Anthill-Ventures-1.webp',
  },
  {
    name: 'Rishi Batra',
    title: 'Founder & COO',
    company: 'Twid',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Rishi-Batra-TWID-2.webp',
  },
  {
    name: 'Ravi Raghav',
    title: 'Founder & CEO',
    company: 'LaundroKart',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Raghav-1.webp',
  },
  {
    name: 'Nivedan Rathi',
    title: 'Founder',
    company: 'Future & AI',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Nivedan-HG-rs-1.webp',
  },
  {
    name: 'Murali Krishna Gunturu',
    title: 'Principal',
    company: 'Inflexor Ventures',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Murli.webp',
  },
  {
    name: 'Manish Johari',
    title: 'Consulting Director',
    company: 'Maple Capital Advisors',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Manish-Johari-Maple-Advisors-1.webp',
  },
  {
    name: 'Kulmani Rana',
    title: 'CEO',
    company: 'Fibonacci X',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/kulmani-1.webp',
  },
  {
    name: 'Gopal Krishna Panda',
    title: 'Founder & CEO',
    company: 'Weezy',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Gopal-1.webp',
  },
  {
    name: 'Arjun Vaidya',
    title: 'Co-Founder',
    company: 'V3 Ventures',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Arjun-Vaidya-V3-Ventures-1.png',
  },
  {
    name: 'Ankush Sabharwal',
    title: 'Founder',
    company: 'BharatGPT.ai',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Ankush-Sabharwal-1.webp',
  },
  {
    name: 'Aniket Bajpai',
    title: 'Co-Founder',
    company: 'LimeChat',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Aniket-1.webp',
  },
  {
    name: 'Amit Kumar',
    title: 'Founder & CEO',
    company: 'Cashify',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Amit-Kumar-Cashify-1.webp',
  },
  {
    name: 'Amit Lakhotia',
    title: 'Founder & CEO',
    company: 'PARK+',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Amit-Lakhotia-Park-1.webp',
  },
  {
    name: 'Ankur Warikoo',
    title: 'Founder',
    company: 'WebVeda',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Ankur-Warikoo-1.webp',
  },
  {
    name: 'Anuj Rathi',
    title: 'CEO',
    company: 'Zivame',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Anuj-Rathi-Zivame-1.webp',
  },
  {
    name: 'Ashish Kashyap',
    title: 'Founder & CEO',
    company: 'IndMoney',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Ashish-Kashyap-IndMoney-1.webp',
  },
  {
    name: 'Gaurav Munjal',
    title: 'Co-Founder & CEO',
    company: 'Unacademy',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Gaurav-Munjal-Unacademy-1.webp',
  },
  {
    name: 'Summit All Speakers',
    title: 'All Speakers',
    company: 'Builders Club',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Summit-all-Speakers-for-Website_-BG.webp',
  }
];

export function SpeakersSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
  
  // Handle image load errors
  const handleImageError = (speakerName: string) => {
    setLoadedImages(prev => ({ ...prev, [speakerName]: false }));
  };

  // Handle successful image loads
  const handleImageLoad = (speakerName: string) => {
    setLoadedImages(prev => ({ ...prev, [speakerName]: true }));
  };

  // Memoize the duplicated speakers array for performance
  const duplicatedSpeakers = useMemo(() => [...speakers, ...speakers, ...speakers], []);

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Featured"
          highlightedText="Speakers"
          description="Learn from and network with some of the brightest minds in the technology industry."
          badgeText="Speakers"
          align="center"
          className="mb-12"
          titleClassName="text-3xl md:text-5xl"
          descriptionClassName="text-lg text-gray-300 mt-4 max-w-3xl mx-auto"
        />
        
        <div className="relative w-full py-8 overflow-hidden">
          {/* First row - left to right */}
          <div className="flex gap-6 w-max mb-6 will-change-transform" style={{ animation: 'marquee 80s linear infinite' }}>
            {duplicatedSpeakers.slice(0, Math.ceil(duplicatedSpeakers.length / 2)).map((speaker, index) => (
              <div key={`first-${index}`} className="w-48 sm:w-56 md:w-64 flex-shrink-0 group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    {(!(speaker.name in loadedImages) || loadedImages[speaker.name]) ? (
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{
                          objectPosition: 'center 25%',
                          transform: 'scale(1.12)'
                        }}
                        priority={index < 6}
                        quality={85}
                        loading={index > 12 ? 'lazy' : 'eager'}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        onError={() => handleImageError(speaker.name)}
                        onLoad={() => handleImageLoad(speaker.name)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <span className="text-white text-sm p-2 text-center">{speaker.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{speaker.name}</h3>
                    <p className="text-yellow-400 text-sm">{speaker.title}</p>
                    <p className="text-gray-300 text-sm">{speaker.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row - right to left */}
          <div className="flex gap-6 w-max will-change-transform" style={{ animation: 'marquee-reverse 80s linear infinite' }}>
            {duplicatedSpeakers.slice(Math.ceil(duplicatedSpeakers.length / 2)).map((speaker, index) => (
              <div key={`second-${index}`} className="w-48 sm:w-56 md:w-64 flex-shrink-0 group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    {(!(speaker.name in loadedImages) || loadedImages[speaker.name]) ? (
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{
                          objectPosition: 'center 35%',
                          transform: 'scale(1.08)'
                        }}
                        priority={index < 6}
                        quality={85}
                        loading={index > 12 ? 'lazy' : 'eager'}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        onError={() => handleImageError(speaker.name)}
                        onLoad={() => handleImageLoad(speaker.name)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <span className="text-white text-sm p-2 text-center">{speaker.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{speaker.name}</h3>
                    <p className="text-yellow-400 text-sm">{speaker.title}</p>
                    <p className="text-gray-300 text-sm">{speaker.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1.5rem)); }
          }
          
          @keyframes marquee-reverse {
            0% { transform: translateX(calc(-50% - 1.5rem)); }
            100% { transform: translateX(0); }
          }
          
          @media (max-width: 768px) {
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 1.5rem)); }
            }
            
            @keyframes marquee-reverse {
              0% { transform: translateX(calc(-50% - 1.5rem)); }
              100% { transform: translateX(0); }
            }
          }
        `}</style>
      </div>
    </section>
  );
}
