'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

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
    name: 'Sarah Mitchell',
    role: 'CEO, TechStart',
    initials: 'SM',
    backgroundColor: '#FFD700',
    textColor: '#000000',
    quote: 'Their web development expertise transformed our online presence. The modern design and seamless functionality exceeded our expectations completely.'
  },
  {
    id: 2,
    name: 'Emma Thompson',
    role: 'Business Owner',
    initials: 'ET',
    backgroundColor: '#FFA500',
    textColor: '#FFFFFF',
    quote: 'Outstanding web development service! They transformed our outdated site into a modern, fast-loading platform that our customers love.'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'E-commerce Manager',
    initials: 'DC',
    backgroundColor: '#FF6347',
    textColor: '#FFFFFF',
    quote: 'The e-commerce platform they built increased our online sales by 300%. Their attention to detail and UX expertise is remarkable.'
  },
  {
    id: 4,
    name: 'Lisa Johnson',
    role: 'Project Manager',
    initials: 'LJ',
    backgroundColor: '#4682B4',
    textColor: '#FFFFFF',
    quote: 'Professional, reliable, and incredibly talented team. They delivered our project on time and within budget. Highly recommend their services!'
  },
  {
    id: 5,
    name: 'Rachel Green',
    role: 'CTO, InnovateLab',
    initials: 'RG',
    backgroundColor: '#9370DB',
    textColor: '#FFFFFF',
    quote: 'Their custom web application streamlined our business processes. The clean code and scalable architecture impressed our entire technical team.'
  },
  {
    id: 6,
    name: 'Michael Brown',
    role: 'Marketing Director',
    initials: 'MB',
    backgroundColor: '#20B2AA',
    textColor: '#FFFFFF',
    quote: 'The digital marketing tools they implemented helped us reach 3x more customers and improved our conversion rates significantly.'
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
        <SectionHeader
          title="What Our Clients Say"
          gradientText="Say"
          subtitle="Hear from our satisfied clients about their experience working with us."
        />

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
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <div 
                    className="relative h-12 w-12 rounded-full flex-shrink-0 flex items-center justify-center text-lg font-bold"
                    style={{
                      backgroundColor: testimonial.backgroundColor,
                      color: testimonial.textColor
                    }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-yellow-500 text-xs">{testimonial.role}</div>
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
