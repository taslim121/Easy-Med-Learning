import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'teal' | 'navy' | 'coral' | 'neutral' | 'outline';
}

export function Badge({
  children,
  variant = 'teal',
  className,
  ...props
}: BadgeProps) {
  const variants = {
    teal: 'bg-[#367D78]/10 text-[#367D78] border-[#367D78]/20',
    navy: 'bg-[#17354B]/10 text-[#17354B] border-[#17354B]/20',
    coral: 'bg-[#D96B60]/10 text-[#BD5349] border-[#D96B60]/20',
    neutral: 'bg-black/5 text-[#5A6E7D] border-black/10',
    outline: 'bg-transparent text-[#17354B] border-[#17354B]/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide select-none',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
