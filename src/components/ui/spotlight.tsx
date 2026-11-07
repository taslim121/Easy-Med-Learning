import React from 'react';

interface SpotlightProps {
  className?: string;
  fill?: string;
}

/**
 * High-Performance Atmospheric Spotlight
 * Uses GPU-accelerated radial cone gradient instead of a 3787px SVG Gaussian filter
 * to eliminate main-thread CPU rasterization stalls and maximize Core Web Vitals (TBT/INP/FCP).
 */
export function Spotlight({ className = '', fill = '#2DD4BF' }: SpotlightProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-[1] transform-gpu will-change-transform rounded-full opacity-35 blur-[100px] sm:blur-[130px] ${className}`}
      style={{
        width: 'min(92vw, 680px)',
        height: 'min(92vw, 680px)',
        background: `radial-gradient(circle, ${fill} 0%, rgba(45, 212, 191, 0.45) 30%, rgba(54, 125, 120, 0.15) 60%, transparent 75%)`,
      }}
    />
  );
}
