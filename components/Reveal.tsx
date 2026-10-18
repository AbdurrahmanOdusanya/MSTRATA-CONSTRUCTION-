'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface RevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  direction = 'up',
  distance = 24,
  className = '',
  once = true,
  ...props
}: RevealProps) {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      case 'none':
      default:
        return { opacity: 0, scale: 0.98 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once, margin: '0px 0px -40px 0px', amount: 0.1 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth, sharp, premium cubic-bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
