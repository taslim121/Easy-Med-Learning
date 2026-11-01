'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

/**
 * MagicCard — Tactile cursor-following spotlight container.
 * Responsive: Automatically disconnects pointer tracking on touch devices for 120fps mobile scroll.
 */
export function MagicCard({
  children,
  className,
  gradientSize = 250,
  gradientColor = 'rgba(54, 125, 120, 0.12)',
  gradientOpacity = 0.85,
  gradientFrom = 'rgba(54, 125, 120, 0.35)',
  gradientTo = 'rgba(45, 212, 191, 0.25)',
  ...props
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -gradientSize, y: -gradientSize });
  const [opacity, setOpacity] = useState(0);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Only enable mouse tracking on devices with a fine pointer (mouse / trackpad)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isPointerFine || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setOpacity(gradientOpacity);
    },
    [isPointerFine, gradientOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isPointerFine) return;
    setOpacity(0);
  }, [isPointerFine]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative isolate overflow-hidden rounded-2xl border border-[#17354B]/8 bg-white transition-all duration-300',
        className
      )}
      {...props}
    >
      {/* Desktop Spotlight Layer */}
      {isPointerFine && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px -z-10 rounded-[inherit] transition-opacity duration-300 motion-reduce:hidden"
          style={{
            opacity,
            background: `radial-gradient(${gradientSize}px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
