'use client';

import { useEffect, useRef, useCallback, memo } from 'react';
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
    name: 'Amit Mishra',
    role: 'Cofounder, The Builders Club',
    initials: 'AM',
    backgroundColor: '#FFD700',
    textColor: '#000000',
    quote: 'The Builders Club has been instrumental in connecting us with top talent and resources. The community support and networking opportunities are unparalleled in the industry.'
  },
  {
    id: 2,
    name: 'Karthik Naidu',
    role: 'Founder & CEO, SYS',
    initials: 'KN',
    backgroundColor: '#FFA500',
    textColor: '#FFFFFF',
    quote: 'As a founder, the insights and connections I\'ve gained through The Builders Club have been invaluable. The platform truly understands what builders need to scale.'
  },
  {
    id: 3,
    name: 'Shuchi Gunwant',
    role: 'Partner, 6C',
    initials: 'SG',
    backgroundColor: '#FF6347',
    textColor: '#FFFFFF',
    quote: 'The quality of discussions and the level of expertise within The Builders Circle is exceptional. It\'s become my go-to community for meaningful tech conversations.'
  },
  {
    id: 4,
    name: 'Monika Jain',
    role: 'Co-Founder, Presto',
    initials: 'MJ',
    backgroundColor: '#4682B4',
    textColor: '#FFFFFF',
    quote: 'The Builders Club has helped us find the right talent and partners to accelerate our growth. The community\'s collaborative spirit is truly remarkable.'
  },
  {
    id: 5,
    name: 'Mayank Prasoon',
    role: 'Founder, Davido',
    initials: 'MP',
    backgroundColor: '#9370DB',
    textColor: '#FFFFFF',
    quote: 'Being part of this community has opened doors we didn\'t know existed. The Builders Club is more than a network—it\'s a movement of like-minded innovators.'
  },
  {
    id: 6,
    name: 'Darshan Bathija',
    role: 'Founder & CEO, Tomillo',
    initials: 'DB',
    backgroundColor: '#20B2AA',
    textColor: '#FFFFFF',
    quote: 'The mentorship and guidance I\'ve received through The Builders Club have been game-changing for our startup. The community\'s willingness to help is incredible.'
  },
  {
    id: 7,
    name: 'Kishan Sanghani',
    role: 'Co-Founder, Red Pluto',
    initials: 'KS',
    backgroundColor: '#FF69B4',
    textColor: '#FFFFFF',
    quote: 'The Builders Club\'s events and workshops have provided us with actionable insights that directly impacted our business growth.'
  },
  {
    id: 8,
    name: 'Anmol Mahajan',
    role: 'Founder, Roadprime',
    initials: 'AM',
    backgroundColor: '#8A2BE2',
    textColor: '#FFFFFF',
    quote: 'What sets The Builders Club apart is the genuine willingness of members to help each other succeed. It\'s rare to find such a supportive community.'
  },
  {
    id: 9,
    name: 'Arpit Agrawal',
    role: 'CEO, Angoori',
    initials: 'AA',
    backgroundColor: '#32CD32',
    textColor: '#000000',
    quote: 'The connections we\'ve made through The Builders Club have led to meaningful partnerships that have significantly accelerated our growth trajectory.'
  },
  {
    id: 10,
    name: 'Nithin Prakash',
    role: 'Co-Founder, Cupi',
    initials: 'NP',
    backgroundColor: '#FF4500',
    textColor: '#FFFFFF',
    quote: 'The Builders Club\'s focus on real, actionable insights makes it an invaluable resource for any serious entrepreneur in the tech space.'
  },
  {
    id: 11,
    name: 'Sanjana Tripuramallu',
    role: 'Founder, Cosmos',
    initials: 'ST',
    backgroundColor: '#9400D3',
    textColor: '#FFFFFF',
    quote: 'As a female founder, I\'ve found The Builders Club to be an incredibly supportive and empowering community.'
  },
  {
    id: 12,
    name: 'Syed Imran',
    role: 'Founder, Fillokart',
    initials: 'SI',
    backgroundColor: '#00BFFF',
    textColor: '#000000',
    quote: 'The Builders Club has been instrumental in helping us scale our operations. The strategic insights and connections have been worth every moment.'
  }
];

const useColumnAnimation = (direction: 'up' | 'down' = 'up', speed: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>(0);
  const scrollPosition = useRef<number>(0);
  const scrollSpeed = speed * (direction === 'up' ? 1 : -1);

  const scrollContent = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    scrollPosition.current = (scrollPosition.current + scrollSpeed) % (content.offsetHeight / 2);
    if (scrollPosition.current < 0) {
      scrollPosition.current = content.offsetHeight / 2 + scrollPosition.current;
    }
    container.scrollTop = scrollPosition.current;
    animationFrameId.current = requestAnimationFrame(scrollContent);
  }, [scrollSpeed]);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Duplicate the content for seamless looping
    const contentElement = content;
    if (contentElement.children.length <= testimonials.length) {
      const clone = contentElement.cloneNode(true);
      contentElement.parentNode?.appendChild(clone);
    }

    // Start the animation
    animationFrameId.current = requestAnimationFrame(scrollContent);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [scrollContent]);

  const handleMouseEnter = useCallback(() => {
    cancelAnimationFrame(animationFrameId.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    animationFrameId.current = requestAnimationFrame(scrollContent);
  }, [scrollContent]);

  return { containerRef, contentRef, handleMouseEnter, handleMouseLeave };
};

export default function Testimonials() {
  // First column - scroll up at normal speed
  const col1 = useColumnAnimation('up', 0.5);
  // Second column - scroll down at slightly faster speed
  const col2 = useColumnAnimation('down', 0.7);
  // Third column - scroll up at slower speed
  const col3 = useColumnAnimation('up', 0.3);

  // Split testimonials into three columns
  const column1 = testimonials.filter((_, i) => i % 3 === 0);
  const column2 = testimonials.filter((_, i) => i % 3 === 1);
  const column3 = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Clients"
          highlightedText="Say"
          description="Hear from our satisfied clients about their experience working with us."
          badgeText="Testimonials"
          className="mb-12"
        />

        <div className="mt-16 flex flex-col md:flex-row gap-6 px-4">
          {/* Column 1 - Scrolls Up */}
          <div 
            ref={col1.containerRef}
            onMouseEnter={col1.handleMouseEnter}
            onMouseLeave={col1.handleMouseLeave}
            className="h-[600px] overflow-hidden relative w-full md:w-1/3"
          >
            <div ref={col1.contentRef} className="space-y-6">
              {[...column1, ...column1].map((testimonial, idx) => (
                <TestimonialCard key={`col1-${testimonial.id}-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Column 2 - Scrolls Down */}
          <div 
            ref={col2.containerRef}
            onMouseEnter={col2.handleMouseEnter}
            onMouseLeave={col2.handleMouseLeave}
            className="h-[600px] overflow-hidden relative w-full md:w-1/3"
          >
            <div ref={col2.contentRef} className="space-y-6">
              {[...column2, ...column2].map((testimonial, idx) => (
                <TestimonialCard key={`col2-${testimonial.id}-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Column 3 - Scrolls Up (slower) */}
          <div 
            ref={col3.containerRef}
            onMouseEnter={col3.handleMouseEnter}
            onMouseLeave={col3.handleMouseLeave}
            className="h-[600px] overflow-hidden relative w-full md:w-1/3"
          >
            <div ref={col3.contentRef} className="space-y-6">
              {[...column3, ...column3].map((testimonial, idx) => (
                <TestimonialCard key={`col3-${testimonial.id}-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = memo(({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900 shadow-lg shadow-yellow-500/5 hover:shadow-yellow-500/10 transition-all duration-300 hover:border-yellow-500/50 min-h-[250px] flex flex-col">
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
));

TestimonialCard.displayName = 'TestimonialCard';
