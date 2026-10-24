import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-8 sm:mb-12',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#367D78] mb-2 sm:mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17354B] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#5A6E7D] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
