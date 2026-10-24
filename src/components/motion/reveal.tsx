'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || direction === 'none') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const el = elementRef.current;
    if (!el) return;

    let initialX = 0;
    let initialY = 0;

    if (direction === 'up') initialY = 24;
    if (direction === 'down') initialY = -24;
    if (direction === 'left') initialX = 24;
    if (direction === 'right') initialX = -24;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: initialX,
          y: initialY,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [delay, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
