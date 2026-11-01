'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * ShimmerButton — Tactile interactive button with smooth perimeter light sheen.
 * Pure GPU CSS animation with zero main-thread overhead.
 */
export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#2DD4BF',
      shimmerSize = '0.08em',
      shimmerDuration = '3.5s',
      borderRadius = '0.75rem',
      background = '#17354B',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            '--spread': '90deg',
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': shimmerSize,
            '--bg': background,
          } as React.CSSProperties
        }
        className={cn(
          'group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden',
          'rounded-[var(--radius)] border border-white/15 px-6 py-3.5 font-bold text-white',
          'bg-[var(--bg)] shadow-lg shadow-[#17354B]/20',
          'transform-gpu transition-all duration-200 ease-out active:scale-[0.98]',
          className
        )}
        {...props}
      >
        {/* Shimmer spark container */}
        <div className="absolute inset-0 -z-30 overflow-visible [container-type:size] blur-[2px] pointer-events-none motion-reduce:hidden">
          <div className="absolute inset-0 aspect-square h-[100cqh] animate-shimmer-slide">
            <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </div>

        {/* Subtle Highlight Reflection */}
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_-4px_8px_rgba(255,255,255,0.12)] transition-all group-hover:shadow-[inset_0_-4px_12px_rgba(255,255,255,0.22)] pointer-events-none" />

        {/* Backdrop cutout to shape inner padding */}
        <div className="absolute inset-[var(--cut)] -z-20 rounded-[inherit] bg-[var(--bg)] pointer-events-none" />
      </button>
    );
  }
);

ShimmerButton.displayName = 'ShimmerButton';
