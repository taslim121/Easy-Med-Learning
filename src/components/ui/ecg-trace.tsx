import React from 'react';
import { cn } from '@/lib/utils';

interface EcgTraceProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  strokeWidth?: number;
}

export function EcgTrace({
  className,
  color = '#D96B60',
  strokeWidth = 2,
  ...props
}: EcgTraceProps) {
  return (
    <svg
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn('w-full h-auto max-w-[240px]', className)}
      {...props}
    >
      <path
        d="M0 30 H70 L80 20 L90 30 L100 30 L106 10 L115 50 L124 22 L132 30 H160 L170 25 L180 30 H300"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-90"
      />
    </svg>
  );
}
