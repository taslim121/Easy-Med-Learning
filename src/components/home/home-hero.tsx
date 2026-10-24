'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Play, Calendar, Stethoscope, BookOpen, Sparkles, Activity } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { EcgTrace } from '@/components/ui/ecg-trace';
import { Reveal } from '@/components/motion/reveal';
import { Spotlight } from '@/components/ui/spotlight';

export function HomeHero() {
  const content = siteContent.home.hero;
  const hasCourseUrl = Boolean(siteConfig.urls.learnystCourse);
  const hasIntroVideo = Boolean(siteConfig.urls.introVideo);

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-32 bg-[#0A1622] text-white">
      {/* Aceternity Spotlight & Ambient Clinical Lighting */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#2DD4BF" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#367D78]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-clinical-grid-dark opacity-35 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Monumental Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Live Status Pill */}
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md text-xs font-mono tracking-wider text-[#99F6E4]">
                <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" aria-hidden="true" />
                <span className="uppercase font-semibold">TENTATIVE LAUNCH: 15 NOVEMBER 2026</span>
                <span className="text-white/40">&bull;</span>
                <span className="text-white/80">HINGLISH COURSE</span>
              </div>
            </Reveal>

            {/* Monumental Headline (Griffin 72px Scale + Vault Editorial Italic) */}
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-[-0.035em] text-white leading-[1.08]">
                Master ECG Interpretation with{' '}
                <em className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#5EEAD4] to-white not-italic">
                  Bedside Confidence.
                </em>
              </h1>
            </Reveal>

            {/* Refined Supporting Narrative */}
            <Reveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
                Bridge the gap between confusing waveforms and real patient care. Step-by-step video modules in natural Hinglish, accompanied by a durable, full-colour printed textbook delivered directly across India.
              </p>
            </Reveal>

            {/* High-Impact Action Suite */}
            <Reveal direction="up" delay={0.3}>
              <div className="space-y-5 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    href="/courses"
                    variant="primary"
                    size="lg"
                    className="bg-[#2DD4BF] text-[#0A1622] hover:bg-[#5EEAD4] font-bold px-7 shadow-lg shadow-[#2DD4BF]/20 transition-all hover:scale-105"
                  >
                    <span>Explore Course Curriculum</span>
                  </Button>

                  {hasIntroVideo && (
                    <Button
                      href={siteConfig.urls.introVideo}
                      isExternal
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                    >
                      <Play className="w-4 h-4 mr-2 text-[#2DD4BF] fill-[#2DD4BF]" />
                      <span>Watch Preview Lecture</span>
                    </Button>
                  )}
                </div>

                {/* Clinical Telemetry Metadata Strip */}
                <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#94A3B8]">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    <span>Physical Book Included (No PDF)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    <span>12-Lead Emergency Case Scenarios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D96B60]" />
                    <span>Zero Rote Memorization</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Dr. Wasim Adil Khan Authority Centerpiece */}
          <div className="lg:col-span-5">
            <Reveal direction="up" delay={0.15}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Ambient Glow Aura behind Portrait */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2DD4BF]/20 to-[#367D78]/10 rounded-3xl blur-2xl -z-10 transform scale-95" />

                {/* Portrait Container with Sleek Glassmorphism */}
                <div className="aspect-[4/5] rounded-3xl p-6 text-white flex flex-col justify-end shadow-2xl relative overflow-hidden border border-white/15 bg-gradient-to-b from-[#17354B]/80 to-[#0A1622]/95 backdrop-blur-md">
                  {/* Doctor Photograph: 100% Bright, Clean Studio Lighting */}
                  <Image
                    src="/images/instructor-hero.jpg"
                    alt="Dr. Wasim Adil Khan - Clinician and Medical Educator"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-cover object-top"
                  />

                  {/* Subtle Lower Third Vignette for Readability */}
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A1622] via-[#0A1622]/80 to-transparent pointer-events-none" />

                  {/* Floating Live Indicator Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-white border border-white/20">
                      <Stethoscope className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      Senior Medical Educator
                    </span>
                  </div>

                  {/* Bottom Credentials & Verification */}
                  <div className="relative z-10 space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow">
                        Dr. Wasim Adil Khan
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF] font-semibold mt-0.5">
                        BUMS &bull; PGDEMS (Pune)
                      </p>
                      <p className="text-xs text-white/80 mt-1 leading-relaxed">
                        Managing Director, National Hospital, Pune &bull; 15 Years Bedside Cardiology Experience
                      </p>
                    </div>

                    {/* Quick Stats Pill Rail */}
                    <div className="pt-2 border-t border-white/15 grid grid-cols-2 gap-3 text-center">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl py-2 border border-white/10">
                        <div className="text-lg font-bold font-mono text-white">15+ Yrs</div>
                        <div className="text-[10px] text-white/70 uppercase tracking-wider">Clinical Practice</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl py-2 border border-white/10">
                        <div className="text-lg font-bold font-mono text-[#2DD4BF]">5+ Yrs</div>
                        <div className="text-[10px] text-white/70 uppercase tracking-wider">ECG Workshops</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtitle Caption */}
                <div className="mt-3 text-center">
                  <span className="text-xs font-mono text-[#64748B]">
                    Dr. Wasim Adil Khan &bull; Managing Director &amp; Lead Faculty
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Live ECG Rhythm Trace Sweeping at Section Base (Always Animating) */}
        <div className="pt-10 sm:pt-14 border-t border-white/10 mt-10 sm:mt-14">
          <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-2 uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-[#FF6B6B] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#FF4D4D] animate-ping" />
                Live Lead II Telemetry
              </span>
              <span className="text-white/30">&bull;</span>
              <span className="text-white/80">72 BPM Normal Sinus Rhythm</span>
            </div>
            <span className="hidden sm:inline text-white/40 font-mono text-[11px]">Calibrated Paper 25mm/s &bull; Continuous Sweep</span>
          </div>
          <EcgTrace
            color="#D96B60"
            glowColor="#FF6B6B"
            strokeWidth={2.5}
            className="h-12 w-full text-[#D96B60]"
          />
        </div>
      </Container>
    </section>
  );
}
