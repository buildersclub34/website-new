'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const usePassiveScroll = (ref: React.RefObject<HTMLDivElement | null>, callback: () => void) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const options: AddEventListenerOptions = { passive: true };
    const handleScroll = () => callback();

    element.addEventListener('scroll', handleScroll, options);
    return () => {
      element.removeEventListener('scroll', handleScroll, options);
    };
  }, [ref, callback]);
};

// Function to generate initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

const testimonials = [
  {
    id: 1,
    name: 'Vivek Prashanth',
    role: 'COO, Livquik',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/03/vivek-prashanth-150x150.png',
    quote: 'The Builders Circle has been pivotal in helping us find the right advisors for our US GTM strategy. The connections and insights from the community have been invaluable. I\'ve also made some great friends here, which has made the journey even more rewarding. Plus, I\'ve had the opportunity to attend events I wouldn\'t have considered if I were part of a different community. It\'s more than just a network — it\'s a strategic and supportive ecosystem that opens doors and drives real growth.'
  },
  {
    id: 2,
    name: 'Sumit Rastogi',
    role: 'Cofounder, Artinci',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/03/Sumit-Rastogi-150x150.png',
    quote: 'The Builders Circle has been a game-changer for me as a founder. It\'s an incredible community where I can truly lean on other founders for support and insights. Rohan is now running my marketing, and Amit is managing my LinkedIn — all thanks to the connections I made here. The knowledge and strategies I\'ve gained have been instrumental in running my business more effectively. It even helped me close my funding round in under three weeks!'
  },
  {
    id: 3,
    name: 'Amit Mishra',
    role: 'CEO, Dazeinfo',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/03/Amit-150x150.png',
    quote: 'The Builders Circle is an incredibly curated gathering that consistently delivers value. I\'ve secured two new accounts through the connections I made here. Every month, I meet growth-stage founders and professionals who are carefully selected, which ensures meaningful and insightful conversations. The best part is that it\'s focused on growth-stage businesses — no early-stage noise — allowing for deep, strategic discussions.'
  },
  {
    id: 4,
    name: 'Debarya Dutta',
    role: 'Cofounder, Upraised',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/03/Debarya-Dutta-150x150.png',
    quote: 'The Builders Circle is a powerhouse for business growth and cross-business opportunities. It\'s not just about networking — it\'s about connecting with the right people who can drive high growth in enterprises. The brainstorming sessions are incredibly valuable, with circle members acting as a reliable sounding board for ideas.'
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>(0);
  const lastScrollTop = useRef<number>(0);
  const scrollSpeed = 0.5; // pixels per frame

  const scrollContent = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    lastScrollTop.current = (lastScrollTop.current + scrollSpeed) % (content.offsetHeight / 2);
    container.scrollTop = lastScrollTop.current;
    animationFrameId.current = requestAnimationFrame(scrollContent);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Duplicate the content for seamless looping
    content.innerHTML = content.innerHTML + content.innerHTML;

    // Start the animation
    animationFrameId.current = requestAnimationFrame(scrollContent);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [scrollContent]);

  // Use passive event listeners for better performance
  usePassiveScroll(containerRef, () => {
    // Handle scroll events here if needed
  });

  // Optimized hover handling
  const handleMouseEnter = useCallback(() => {
    cancelAnimationFrame(animationFrameId.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    animationFrameId.current = requestAnimationFrame(scrollContent);
  }, [scrollContent]);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-black text-white mb-4 text-4xl md:text-5xl">
            What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFA500]">Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">Hear from our community members about their experience with The Builders Circle.</p>
        </div>

        <div 
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mt-16 h-[600px] overflow-hidden relative"
          style={{
            contentVisibility: 'auto',
            contain: 'paint layout style',
          }}
        >
          <div 
            ref={contentRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="p-6 rounded-2xl border border-gray-800 bg-gray-900 shadow-lg shadow-yellow-500/5 hover:shadow-yellow-500/10 transition-all duration-300 hover:border-yellow-500/50 min-h-[250px] flex flex-col"
              >
                <div className="flex-1">
                  <div className="text-yellow-400 mb-4">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2 0L9.2 30H0L10 0H15.2ZM40 0L34 30H24.8L34.8 0H40Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300 italic text-sm leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center mt-auto">
                  <div className="h-12 w-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center overflow-hidden mr-4 flex-shrink-0">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
