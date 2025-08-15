'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NeoPopStickyButtonProps {
  /**
   * The URL to navigate to when the button is clicked
   */
  href: string;
  /**
   * The text to display on the button
   * @default "Join the Community"
   */
  label?: string;
  /**
   * Show the button only after scrolling a certain number of pixels
   * @default 100
   */
  showAfterScroll?: number;
  /**
   * Show the notification dot
   * @default true
   */
  showNotificationDot?: boolean;
  /**
   * Custom class name for the button container
   */
  className?: string;
}

/**
 * A sticky button component with enhanced NeoPop styling
 * Designed to be used as a persistent CTA at the bottom of the viewport on mobile
 */
const NeoPopStickyButton = ({
  href = "/circle",
  label = "Join the Community",
  showAfterScroll = 100,
  showNotificationDot = true,
  className = "",
}: NeoPopStickyButtonProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > showAfterScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div 
          className={`fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4 md:hidden ${className}`}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        >
          <div 
            className="w-full max-w-md relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 3D Shadow Effect */}
            <motion.div 
              className="absolute inset-0 bg-yellow-600 rounded-lg -z-10"
              animate={{
                y: isHovered ? 4 : 6,
                x: isHovered ? 4 : 6,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            />
            
            {/* Main Button */}
            <Link href={href} className="block">
              <motion.div 
                className={[
                  'relative w-full py-4 px-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400',
                  'text-black font-bold text-lg rounded-lg',
                  'border-2 border-b-4 border-r-4 border-yellow-500',
                  'flex items-center justify-center gap-3',
                  'transition-all duration-150 ease-in-out',
                  'active:translate-x-0 active:translate-y-0 active:shadow-none',
                  'transform -translate-x-1 -translate-y-1',
                  'hover:-translate-y-0.5 hover:translate-x-0.5',
                  isHovered 
                    ? 'shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)]' 
                    : 'shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)]'
                ].join(' ')}
                whileTap={{ 
                  scale: 0.98,
                  y: 0,
                  x: 0,
                  boxShadow: '0 0 0 0 rgba(0,0,0,0.5)'
                }}
              >
                {/* Icon with subtle animation */}
                <motion.div 
                  className="bg-black/10 p-2 rounded-lg"
                  animate={{
                    rotate: isHovered ? [0, 5, -5, 0] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-5 h-5 text-black" />
                </motion.div>
                
                {/* Text */}
                <span className="font-bold text-black">{label}</span>
                
                {/* Animated arrow */}
                <motion.div
                  animate={{
                    x: isHovered ? [0, 4, 0] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <ArrowRight className="w-5 h-5 text-black" />
                </motion.div>
                
                {/* Subtle shine effect on hover */}
                {isHovered && (
                  <motion.div 
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>
            </Link>
            
            {/* Notification dot */}
            {showNotificationDot && (
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-200 rounded-full border-2 border-yellow-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NeoPopStickyButton;
