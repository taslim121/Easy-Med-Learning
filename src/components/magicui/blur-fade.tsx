'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inViewMargin?: string;
  blur?: string;
}

/**
 * BlurFade — Progressive blur and upward elevation entrance.
 * Pure GPU-accelerated CSS transition with IntersectionObserver trigger.
 * Built with reduced-motion fallback and zero layout shift.
 */
export function BlurFade({
  children,
  className,
  duration = 0.5,
  delay = 0,
  yOffset = 14,
  inViewMargin = '60px',
  blur = '6px',
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, show immediately without blur/movement
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: inViewMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [inViewMargin]);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
      className={cn(
        'transform-gpu transition-all ease-out motion-reduce:transform-none motion-reduce:filter-none motion-reduce:opacity-100',
        isInView
          ? 'opacity-100 translate-y-0 filter-none'
          : `opacity-0 translate-y-[${yOffset}px] blur-[${blur}]`,
        className
      )}
    >
      {children}
    </div>
  );
}
