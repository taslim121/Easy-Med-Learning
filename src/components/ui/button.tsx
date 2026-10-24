import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'coral';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, isExternal, children, disabled, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none';

    const variants = {
      primary:
        'bg-[#17354B] text-white hover:bg-[#244C68] shadow-sm hover:shadow active:scale-[0.99] focus-visible:outline-[#367D78]',
      secondary:
        'bg-[#367D78] text-white hover:bg-[#275D59] shadow-sm hover:shadow active:scale-[0.99] focus-visible:outline-[#17354B]',
      coral:
        'bg-[#D96B60] text-white hover:bg-[#BD5349] shadow-sm hover:shadow active:scale-[0.99] focus-visible:outline-[#D96B60]',
      outline:
        'border border-[#17354B]/20 bg-transparent text-[#17354B] hover:bg-[#17354B]/5 hover:border-[#17354B]/40 active:scale-[0.99] focus-visible:outline-[#17354B]',
      ghost:
        'bg-transparent text-[#17354B] hover:bg-[#17354B]/5 active:scale-[0.99] focus-visible:outline-[#367D78]',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
