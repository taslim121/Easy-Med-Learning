'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function ScrollArea({ children, className, ...props }: ScrollAreaProps) {
  return (
    <div
      className={cn(
        'relative overflow-y-auto overscroll-contain focus:outline-none',
        // Custom clinical scrollbar styling
        '[&::-webkit-scrollbar]:w-2',
        '[&::-webkit-scrollbar-track]:bg-[#17354B]/5',
        '[&::-webkit-scrollbar-track]:rounded-full',
        '[&::-webkit-scrollbar-thumb]:bg-[#17354B]/20',
        '[&::-webkit-scrollbar-thumb]:rounded-full',
        'hover:[&::-webkit-scrollbar-thumb]:bg-[#367D78]/50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
