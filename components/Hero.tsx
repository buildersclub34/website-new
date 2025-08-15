'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import NeoPopButton from './ui/NeoPopButton';
import SectionHeader from './SectionHeader';

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
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Handle mouse move effect and animations
  useEffect(() => {
    // Set visibility to true after component mounts with a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Mouse move effect with throttling for better performance
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle the mouse move updates
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);
    
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
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
      // Reset scroll behavior
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
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

        /* Video Background */
        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .video-bg video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
          z-index: 1;
        }



        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, 20px); }
          50% { transform: translate(0, 40px); }
          75% { transform: translate(-20px, 20px); }
        }

        /* Typography */
        .neon-text {
          letter-spacing: 1px;
        }
      `}</style>
      


      <section 
        className="relative min-h-screen bg-black text-white overflow-hidden pt-20 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {/* Video Background */}
        <div className="video-bg">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/BG hero.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center mt-24 sm:mt-32 md:mt-40 lg:mt-48">
            {/* Main Heading */}
            <div className="text-center mb-8 sm:mb-12 max-w-5xl mx-auto">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight sm:leading-tight md:leading-none mb-4">
                Empowering Business Leaders, <span className="text-yellow-400">Everywhere!</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg text-gray-300 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-4">
                Join a global network of CXOs, founders, working professionals, and investors shaping tomorrow&apos;s business
              </p>
            </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 z-10 w-full">
            <NeoPopButton
              as="link"
              href="https://nas.io/tbc"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Join the Club
            </NeoPopButton>
            <NeoPopButton
              as="link"
              href="https://www.youtube.com/@thebuildersclub"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch on YouTube
            </NeoPopButton>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-12">
            <a 
              href="https://www.linkedin.com/company/thebuildersclub" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-[#FFD700] transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                <path 
                  fillRule="evenodd" 
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/inthebuildersclub/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-[#FFD700] transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                <path 
                  fillRule="evenodd" 
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.352-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.352.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.884-.3-1.878-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" 
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a 
              href="https://x.com/thebuildersc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-[#FFD700] transition-all duration-300 transform hover:scale-110"
              aria-label="X (Twitter)"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/thebuildersclub1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-[#FFD700] transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                <path 
                  fillRule="evenodd" 
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Animated Metrics */}
          <div className="w-full max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 lg:gap-6">
              <AnimatedCounter value={75} label="Business Leaders" suffix="K+" />
              <AnimatedCounter value={250} label="Events" suffix="+" />
              <AnimatedCounter value={20} label="Industry Experts" suffix="+" />
              <AnimatedCounter value={100} label="Investors" suffix="+" />
              <AnimatedCounter value={500} label="Businesses Empowered" suffix="+" />
            </div>
          </div>

          {/* Stats */}
          <div 
            ref={statsRef}
            className="w-full max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 opacity-0"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 lg:gap-6">
              {[
                { value: "75K+", label: "Business Leaders" },
                { value: "250+", label: "Events" },
                { value: "20+", label: "Industry Experts" },
                { value: "100+", label: "Investors" },
                { value: "500+", label: "Businesses Empowered" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group px-2 py-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-105">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider px-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
    </>
  );
}