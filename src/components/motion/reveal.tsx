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

/**
 * Layout-Safe Scroll Reveal
 * Prevents horizontal layout shifts by eliminating horizontal translation on grids.
 * Uses subtle vertical ease and preserves full container height.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || direction === 'none') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const el = elementRef.current;
    if (!el) return;

    // Use gentle vertical elevation (12px) without horizontal shifts
    let initialY = 0;
    if (direction === 'up') initialY = 14;
    if (direction === 'down') initialY = -14;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: initialY,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
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
