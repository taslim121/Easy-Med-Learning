'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface BorderBeamProps {
  className?: string;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

/**
 * BorderBeam — High-Visibility GPU-Composited Animated Border Tracer
 * Compatible with 100% of browsers (Chrome, Safari, Firefox, iOS, Android).
 * Uses dual WebKit + CSS mask exclusion so the glowing beam traces the perimeter flawlessly.
 */
export function BorderBeam({
  className,
  duration = 8,
  borderWidth = 2,
  colorFrom = '#2DD4BF',
  colorTo = '#367D78',
}: BorderBeamProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        padding: `${borderWidth}px`,
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
      }}
      className={cn(
        'pointer-events-none absolute inset-0 size-full rounded-[inherit] overflow-hidden z-20',
        className
      )}
    >
      <div
        style={{
          animationDuration: `${duration}s`,
          background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 35deg, ${colorTo} 70deg, transparent 95deg, transparent 360deg)`,
        }}
        className="absolute -inset-[150%] animate-spin-around motion-reduce:hidden"
      />
    </div>
  );
}
