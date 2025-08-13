"use client";

import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  size: number;
  left: number;
  top: number;
  rotate: number;
  duration: number;
  delay: number;
  x: [number, number, number];
  y: [number, number, number];
}

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1]);

  useEffect(() => {
    setMounted(true);
    
    // Generate random values for floating elements
    const newElements: FloatingElement[] = Array(8).fill(0).map((_, i) => {
      const x1 = (Math.random() - 0.5) * 200;
      const y1 = (Math.random() - 0.5) * 200;
      
      return {
        id: i,
        size: 100 + Math.random() * 200,
        left: Math.random() * 100,
        top: Math.random() * 100,
        rotate: Math.random() * 360,
        duration: 20 + Math.random() * 20,
        delay: Math.random() * 5,
        x: [0, x1, 0] as [number, number, number],
        y: [0, y1, 0] as [number, number, number]
      };
    });
    
    setElements(newElements);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundSize: '60px 60px',
          backgroundImage: 'linear-gradient(to right, rgba(234, 179, 8, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(234, 179, 8, 0.1) 1px, transparent 1px)',
          opacity: 0.2
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-black to-amber-500/5"
        style={{ opacity }}
      />
      
      {/* Floating elements */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-2xl border border-yellow-400/20"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.left}%`,
            top: `${element.top}%`,
            rotate: element.rotate,
            y: y
          }}
          animate={{
            x: element.x,
            y: element.y,
            rotate: element.rotate + 360,
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
