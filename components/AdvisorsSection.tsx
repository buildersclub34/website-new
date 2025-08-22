'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { advisors } from '@/data/advisors';
import AdvisorCard, { getAdvisorColor } from './ui/AdvisorCard';

// Import the Advisor type from the data file
import type { Advisor } from '@/data/advisors';

// Define the advisor data with proper type
const advisorData: Advisor[] = [...advisors];

// Auto-scrolling animation component
const AutoScrollAdvisors = ({ advisors: advisorList }: { advisors: Advisor[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // Auto-scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkScrollPosition = () => {
      if (!container) return;
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    };

    // Initial check
    checkScrollPosition();

    // Auto-scroll
    const autoScroll = () => {
      if (isPaused || isDragging) return;
      
      const container = containerRef.current;
      if (!container) return;

      const maxScroll = container.scrollWidth / 2; // Only scroll through half since we duplicate the items
      const scrollSpeed = 0.3; // Slower scroll speed
      
      if (container.scrollLeft >= maxScroll - 1) {
        // Reset to start if we've reached the end
        container.scrollTo({
          left: 0,
          behavior: 'auto',
        });
      } else {
        // Otherwise, keep scrolling
        container.scrollBy({
          left: scrollSpeed,
          behavior: 'auto',
        });
      }
      
      requestAnimationFrame(autoScroll);
    };

    // Start auto-scrolling
    let animationFrameId = requestAnimationFrame(autoScroll);

    // Add event listeners
    container.addEventListener('scroll', checkScrollPosition);
    container.addEventListener('mouseenter', () => setIsPaused(true));
    container.addEventListener('mouseleave', () => setIsPaused(false));

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('scroll', checkScrollPosition);
      container.removeEventListener('mouseenter', () => setIsPaused(true));
      container.removeEventListener('mouseleave', () => setIsPaused(false));
    };
  }, [isPaused, isDragging]);

  // Handle drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const container = containerRef.current;
    if (!container) return;
    
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Manual scroll buttons
  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    
    const scrollAmount = direction === 'left' ? -400 : 400;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <div 
        ref={containerRef}
        className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        <div className="flex space-x-6">
          {advisorList.map((advisor) => (
            <AdvisorCardWrapper key={advisor.id} advisor={advisor} />
          ))}
          {/* Duplicate items for infinite scroll effect */}
          {advisorList.map((advisor) => (
            <AdvisorCardWrapper key={`duplicate-${advisor.id}`} advisor={advisor} />
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={() => scroll('left')}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm border border-gray-800 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 z-20 ${
          !showLeftButton ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm border border-gray-800 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 z-20 ${
          !showRightButton ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

// Individual Advisor Card Wrapper for AutoScroll
const AdvisorCardWrapper = ({ advisor }: { advisor: Advisor }) => (
  <div className="w-[300px] flex-shrink-0">
    <AdvisorCard advisor={advisor} />
  </div>
);

export default function AdvisorsSection() {
  // Filter to show only the first 8 advisors for the section
  const featuredAdvisors = advisors.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <SectionHeader
            title="Meet Our Esteemed"
            highlightedText="Advisors"
            description="Learn from and connect with industry leaders and domain experts from top companies"
            badgeText="Expert Network"
            align="center"
            titleClassName="text-3xl md:text-4xl lg:text-5xl"
          />
        </div>

        {/* Auto-scrolling advisors section */}
        <AutoScrollAdvisors advisors={featuredAdvisors} />

        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Build Something Extraordinary?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Connect with our network of industry experts and get the guidance you need to take your venture to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/advisors" 
              className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Explore All Advisors</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link 
              href="/circle#join" 
              className="relative px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400/10 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Become an Advisor</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
