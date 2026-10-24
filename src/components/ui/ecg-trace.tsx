import React from 'react';
import { cn } from '@/lib/utils';

interface EcgTraceProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  glowColor?: string;
  strokeWidth?: number;
  showTelemetryBadge?: boolean;
}

/**
 * Live Continuous ECG Telemetry Monitor
 * Always animating cardiac wave packet using pathLength normalization
 * and hardware-accelerated linear sweep keyframes.
 */
export function EcgTrace({
  className,
  color = '#D96B60',
  glowColor = '#FF6B6B',
  strokeWidth = 2.5,
  showTelemetryBadge = false,
  ...props
}: EcgTraceProps) {
  // Two full clinical P-QRS-T complexes across a 600px width
  const ecgPath =
    'M 0 30 H 40 L 50 23 L 60 30 H 78 L 84 33 L 94 6 L 104 54 L 114 26 L 120 30 H 138 L 152 18 L 166 30 H 260 L 270 23 L 280 30 H 298 L 304 33 L 314 6 L 324 54 L 334 26 L 340 30 H 358 L 372 18 L 386 30 H 480 L 490 23 L 500 30 H 518 L 524 33 L 534 6 L 544 54 L 554 26 L 560 30 H 578 L 592 18 L 606 30 H 680';

  return (
    <div className="relative w-full flex flex-col items-start gap-1.5">
      <svg
        viewBox="0 0 680 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={cn('w-full h-auto overflow-visible select-none', className)}
        {...props}
      >
        <defs>
          {/* Subtle phosphor glow filter */}
          <filter id="ecg-red-glow" x="-20%" y="-40%" width="140%" height="180%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={glowColor} floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Faint Baseline Track (Always visible in background) */}
        <path
          d={ecgPath}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-20"
        />

        {/* Always-Animating Active Live Cardiac Wave Packet */}
        <path
          d={ecgPath}
          pathLength="100"
          stroke={glowColor}
          strokeWidth={strokeWidth + 0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ecg-red-glow)"
          className="animate-ecg-pulse"
        />
      </svg>
    </div>
  );
}
