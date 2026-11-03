'use client';

import React, { useRef } from 'react';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { Ripple } from '@/components/ui/ripple';
import { EcgTrace } from '@/components/ui/ecg-trace';
import { cn } from '@/lib/utils';

interface NodeCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  isPrimary?: boolean;
}

const GraphNode = React.forwardRef<HTMLDivElement, NodeCircleProps>(
  ({ className, label, isPrimary = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center rounded-full transition-all duration-300 select-none cursor-default z-20',
          isPrimary
            ? 'size-20 sm:size-24 border-[3px] border-[#17354B] bg-[#E6F4F2] text-[#17354B] font-extrabold text-base sm:text-lg shadow-md hover:scale-105'
            : 'size-16 sm:size-20 border-[2.5px] border-[#367D78] bg-white text-[#17354B] font-bold text-sm sm:text-base shadow-sm hover:border-[#17354B] hover:scale-105',
          className
        )}
        {...props}
      >
        <span className="tracking-tight">{label}</span>
      </div>
    );
  }
);
GraphNode.displayName = 'GraphNode';

export function CommunityNetworkGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const doctorRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const mentorRef = useRef<HTMLDivElement>(null);
  const internRef = useRef<HTMLDivElement>(null);
  const nurseRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg h-[420px] sm:h-[460px] flex flex-col justify-between items-center select-none overflow-hidden"
    >
      {/* Background Concentric Ripple centered on Doctor */}
      <Ripple
        mainCircleSize={110}
        mainCircleOpacity={0.16}
        numCircles={5}
        className="opacity-60 pointer-events-none"
      />

      {/* 5 Clinical Nodes Positioned Exactly like PDF Page 1 */}
      <div className="relative w-full h-[340px] sm:h-[370px]">
        
        {/* Top-Center Hub: DOCTOR */}
        <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-20">
          <GraphNode
            ref={doctorRef}
            label="Doctor"
            isPrimary
          />
        </div>

        {/* Mid-Left: STUDENT */}
        <div className="absolute top-[32%] sm:top-[34%] left-2 sm:left-6 z-20">
          <GraphNode
            ref={studentRef}
            label="Student"
          />
        </div>

        {/* Mid-Right: MENTOR */}
        <div className="absolute top-[32%] sm:top-[34%] right-2 sm:right-6 z-20">
          <GraphNode
            ref={mentorRef}
            label="Mentor"
          />
        </div>

        {/* Bottom-Left: INTERN */}
        <div className="absolute bottom-4 sm:bottom-6 left-[18%] sm:left-[22%] z-20">
          <GraphNode
            ref={internRef}
            label="Intern"
          />
        </div>

        {/* Bottom-Right: NURSE */}
        <div className="absolute bottom-4 sm:bottom-6 right-[18%] sm:right-[22%] z-20">
          <GraphNode
            ref={nurseRef}
            label="Nurse"
          />
        </div>

        {/* Magic UI Animated Beams connecting the exact 7 topology vectors */}
        {/* Vector 1: Doctor ↔ Student */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={doctorRef}
          toRef={studentRef}
          curvature={0}
          pathColor="#17354B"
          pathOpacity={0.25}
          pathWidth={2}
          duration={3.5}
          gradientStartColor="#367D78"
          gradientStopColor="#2DD4BF"
        />

        {/* Vector 2: Doctor ↔ Mentor */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={doctorRef}
          toRef={mentorRef}
          curvature={0}
          pathColor="#17354B"
          pathOpacity={0.25}
          pathWidth={2}
          duration={3.8}
          gradientStartColor="#17354B"
          gradientStopColor="#367D78"
        />

        {/* Vector 3: Doctor ↔ Intern */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={doctorRef}
          toRef={internRef}
          curvature={0}
          pathColor="#17354B"
          pathOpacity={0.2}
          pathWidth={2}
          duration={4.2}
          gradientStartColor="#367D78"
          gradientStopColor="#2DD4BF"
        />

        {/* Vector 4: Doctor ↔ Nurse */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={doctorRef}
          toRef={nurseRef}
          curvature={0}
          pathColor="#17354B"
          pathOpacity={0.2}
          pathWidth={2}
          duration={4.0}
          gradientStartColor="#17354B"
          gradientStopColor="#2DD4BF"
        />

        {/* Vector 5: Student ↔ Intern */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={studentRef}
          toRef={internRef}
          curvature={0}
          pathColor="#367D78"
          pathOpacity={0.25}
          pathWidth={2}
          duration={3.2}
          gradientStartColor="#367D78"
          gradientStopColor="#2DD4BF"
        />

        {/* Vector 6: Intern ↔ Nurse */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={internRef}
          toRef={nurseRef}
          curvature={0}
          pathColor="#367D78"
          pathOpacity={0.25}
          pathWidth={2}
          duration={3.6}
          gradientStartColor="#367D78"
          gradientStopColor="#2DD4BF"
        />

        {/* Vector 7: Mentor ↔ Nurse */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={mentorRef}
          toRef={nurseRef}
          curvature={0}
          pathColor="#367D78"
          pathOpacity={0.25}
          pathWidth={2}
          duration={3.4}
          gradientStartColor="#17354B"
          gradientStopColor="#367D78"
        />
      </div>

      {/* Signature Teal ECG Wave Baseline across bottom (Verbatim from PDF Page 1) */}
      <div className="w-full px-2 sm:px-4 pt-1 border-t border-[#17354B]/8">
        <EcgTrace color="#367D78" glowColor="#2DD4BF" strokeWidth={2.5} />
      </div>
    </div>
  );
}