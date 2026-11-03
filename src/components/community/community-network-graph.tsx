'use client';

import React, { useRef } from 'react';
import { Stethoscope, GraduationCap, Award, UserCheck, HeartPulse } from 'lucide-react';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { Ripple } from '@/components/ui/ripple';
import { EcgTrace } from '@/components/ui/ecg-trace';
import { cn } from '@/lib/utils';

interface CircleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  label: string;
  role: string;
  isCenter?: boolean;
}

const NetworkNode = React.forwardRef<HTMLDivElement, CircleProps>(
  ({ className, children, label, role, isCenter = false, ...props }, ref) => {
    return (
      <div className="flex flex-col items-center gap-1.5 z-10 select-none">
        <div
          ref={ref}
          className={cn(
            'flex items-center justify-center rounded-2xl transition-all duration-300',
            isCenter
              ? 'size-16 sm:size-20 bg-[#17354B] border-2 border-[#2DD4BF] text-white shadow-xl shadow-[#17354B]/25 hover:scale-105'
              : 'size-14 sm:size-16 bg-white/95 border border-[#17354B]/15 text-[#17354B] shadow-sm hover:border-[#367D78] hover:shadow-md hover:scale-105',
            className
          )}
          {...props}
        >
          {children}
        </div>
        <div className="text-center">
          <p
            className={cn(
              'leading-tight tracking-tight',
              isCenter
                ? 'text-xs sm:text-sm font-extrabold text-[#17354B]'
                : 'text-xs font-bold text-[#17354B]'
            )}
          >
            {label}
          </p>
          <p
            className={cn(
              'font-mono text-[10px]',
              isCenter ? 'text-[#367D78] font-bold' : 'text-[#5A6E7D]'
            )}
          >
            {role}
          </p>
        </div>
      </div>
    );
  }
);
NetworkNode.displayName = 'NetworkNode';

export function CommunityNetworkGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerDoctorRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const mentorRef = useRef<HTMLDivElement>(null);
  const internRef = useRef<HTMLDivElement>(null);
  const nurseRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[390px] sm:h-[440px] w-full max-w-lg flex-col items-center justify-between select-none py-2"
    >
      {/* Concentric clinical ripple radiating directly on the hero background */}
      <Ripple
        mainCircleSize={130}
        mainCircleOpacity={0.18}
        numCircles={5}
        className="opacity-70 pointer-events-none"
      />

      {/* Network Node Topology */}
      <div className="relative z-10 flex w-full flex-1 flex-col justify-between py-2">
        {/* Top Row: Student & Mentor */}
        <div className="flex w-full items-center justify-between px-6 sm:px-12">
          <NetworkNode
            ref={studentRef}
            label="Student"
            role="MBBS / BUMS"
          >
            <GraduationCap className="size-6 sm:size-7 text-[#367D78]" />
          </NetworkNode>

          <NetworkNode
            ref={mentorRef}
            label="Mentor"
            role="Specialist / MD"
          >
            <Award className="size-6 sm:size-7 text-[#17354B]" />
          </NetworkNode>
        </div>

        {/* Center Node: Doctor in Middle */}
        <div className="flex w-full items-center justify-center my-auto">
          <NetworkNode
            ref={centerDoctorRef}
            label="Doctor"
            role="Attending Physician"
            isCenter
          >
            <Stethoscope className="size-8 sm:size-9 text-[#2DD4BF]" />
          </NetworkNode>
        </div>

        {/* Bottom Row: Intern & Nurse */}
        <div className="flex w-full items-center justify-between px-6 sm:px-12">
          <NetworkNode
            ref={internRef}
            label="Intern"
            role="House Surgeon"
          >
            <UserCheck className="size-6 sm:size-7 text-[#367D78]" />
          </NetworkNode>

          <NetworkNode
            ref={nurseRef}
            label="Nurse"
            role="Critical Care"
          >
            <HeartPulse className="size-6 sm:size-7 text-[#17354B]" />
          </NetworkNode>
        </div>
      </div>

      {/* Animated Beams connecting Central Doctor to all Peripheral Roles */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerDoctorRef}
        toRef={studentRef}
        curvature={-25}
        duration={3.5}
        gradientStartColor="#367D78"
        gradientStopColor="#2DD4BF"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={mentorRef}
        toRef={centerDoctorRef}
        curvature={25}
        duration={4}
        gradientStartColor="#17354B"
        gradientStopColor="#367D78"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerDoctorRef}
        toRef={internRef}
        curvature={20}
        duration={3.2}
        gradientStartColor="#367D78"
        gradientStopColor="#2DD4BF"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerDoctorRef}
        toRef={nurseRef}
        curvature={-20}
        duration={3.8}
        gradientStartColor="#17354B"
        gradientStopColor="#2DD4BF"
      />
       {/* Signature Teal ECG Wave Baseline across bottom (Verbatim from PDF Page 1) */}
      <div className="w-full px-2 sm:px-4 pt-1 border-t border-[#17354B]/8">
        <EcgTrace color="#367D78" glowColor="#2DD4BF" strokeWidth={2.5} />
      </div>
    </div>
  );
}
