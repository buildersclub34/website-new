'use client';

import { useEffect, useState, useRef } from 'react';

// Counter Component with Animation
interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const animateValue = (start: number, end: number, duration: number): void => {
    const range = end - start;
    const minFrameTime = 30; // 30fps
    const steps = Math.ceil(duration / minFrameTime);
    const increment = range / steps;
    let current = start;
    let step = 0;

    const timer = setInterval(() => {
      current += increment;
      step++;
      
      if (step >= steps) {
        current = end;
        clearInterval(timer);
      }
      
      setCount(Math.floor(current));
    }, minFrameTime);
  };

  useEffect(() => {
    const currentRef = counterRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateValue(0, value, 2000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, hasAnimated]);

  return (
    <div ref={counterRef} className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
      <div className="relative bg-black/80 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 h-full">
        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-white/80 text-sm md:text-base font-medium">
          {label}
        </div>
      </div>
    </div>
  );
};

interface MousePosition {
  x: number;
  y: number;
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Handle animations
  useEffect(() => {
    // Set visibility to true after component mounts with a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            // Unobserve after animation is applied
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is in view
      }
    );
    
    // Store the current ref value in a variable
    const currentStatsRef = statsRef.current;
    
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }
    
    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
      // Reset scroll behavior
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Builders Club</h1>
          <p className="text-xl mb-8">Building the future, one line of code at a time</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a 
              href="https://nas.io/tbc"
              target="_blank"
              rel="noopener noreferrer"
              className="neopop-btn neopop-primary"
            >
              Join the Club
            </a>
            <a 
              href="https://www.youtube.com/@thebuildersclub"
              target="_blank"
              rel="noopener noreferrer"
              className="neopop-btn neopop-secondary"
            >
              Watch on YouTube
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <AnimatedCounter value={75} label="Builders" suffix="K+" />
            <AnimatedCounter value={250} label="Events" suffix="+" />
            <AnimatedCounter value={20} label="Enablers" suffix="+" />
            <AnimatedCounter value={100} label="Investors" suffix="+" />
          </div>

          {/* Stats */}
          <div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto opacity-0"
          >
            {[
              { value: "10K+", label: "Community Members" },
              { value: "500+", label: "Startups Helped" },
              { value: "$100M+", label: "Funding Raised" },
              { value: "50+", label: "Countries" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* NeoPop Theme Variables - Gold & Black */
        :root {
          --neopop-primary: #FFD700; /* Gold */
          --neopop-secondary: #000000; /* Black */
          --neopop-accent: #FFC000; /* Darker Gold */
          --neopop-dark: #121212; /* Dark Gray */
          --neopop-light: #FFFFFF; /* White */
        }

        /* NeoPop Button Styles - Gold & Black */
        .neopop-btn {
          position: relative;
          padding: 14px 32px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          border: 3px solid var(--neopop-secondary);
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.15s ease;
          transform: translate(-4px, -4px);
          will-change: transform, box-shadow;
          box-shadow: 6px 6px 0 0 var(--neopop-secondary),
                    8px 8px 0 0 var(--neopop-primary);
        }

        .neopop-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 0 var(--neopop-secondary),
                    6px 6px 0 0 var(--neopop-primary);
        }

        .neopop-btn:active {
          transform: translate(0, 0);
          box-shadow: 2px 2px 0 0 var(--neopop-secondary);
        }

        .neopop-primary {
          background: var(--neopop-primary);
          color: var(--neopop-secondary);
          border-color: var(--neopop-secondary);
        }

        .neopop-secondary {
          background: var(--neopop-secondary);
          color: var(--neopop-primary);
          border-color: var(--neopop-primary);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
