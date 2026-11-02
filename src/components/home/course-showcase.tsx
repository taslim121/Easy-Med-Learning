'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Play,
  Layers,
  Palette,
  MessageSquareQuote,
  GraduationCap,
} from 'lucide-react';
import { homeContent } from '@/content/home-content';
import { Container } from '@/components/ui/container';
import { BlurFade } from '@/components/magicui/blur-fade';
import { BorderBeam } from '@/components/magicui/border-beam';
import { MagicCard } from '@/components/magicui/magic-card';
import { Floating3DParticles } from '@/components/magicui/floating-3d-particles';
import { Text3DFlip } from '@/components/magicui/text-3d-flip';

const pillarMeta = [
  {
    step: '01',
    category: 'Stepwise Progression',
    Icon: Layers,
    badgeColor: 'bg-[#367D78]/10 text-[#367D78] border-[#367D78]/20',
  },
  {
    step: '02',
    category: 'Original Artwork',
    Icon: Palette,
    badgeColor: 'bg-[#2DD4BF]/15 text-[#1D6A64] border-[#2DD4BF]/30',
  },
  {
    step: '03',
    category: 'Conversational Clarity',
    Icon: MessageSquareQuote,
    badgeColor: 'bg-[#D96B60]/10 text-[#C24D42] border-[#D96B60]/20',
  },
  {
    step: '04',
    category: 'Bedside Pedagogy',
    Icon: GraduationCap,
    badgeColor: 'bg-[#17354B]/10 text-[#17354B] border-[#17354B]/20',
  },
];

export function CourseShowcase() {
  const { courseLaunch } = homeContent;

  return (
    <section
      className="pt-16 sm:pt-24 pb-16 sm:pb-24 bg-[#FAF9F6] text-[#17354B] border-b border-[#17354B]/10 relative overflow-hidden"
      aria-label="Course Introduction"
    >
      {/* Section Header */}
      <Container size="wide" className="max-w-7xl 2xl:max-w-[1440px] mb-10 sm:mb-14">
        <div className="max-w-3xl space-y-3">
          <BlurFade delay={0.05} yOffset={-8}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#367D78]/10 text-[#367D78] border border-[#367D78]/20">
              <Sparkles className="w-3.5 h-3.5" />
              {courseLaunch.badge}
            </span>
          </BlurFade>

          <BlurFade delay={0.12} yOffset={10}>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17354B] font-editorial leading-tight">
              {courseLaunch.sectionHeading}
            </h2>
          </BlurFade>

          <BlurFade delay={0.18} yOffset={10}>
            <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed">
              {courseLaunch.sectionSubtitle}
            </p>
          </BlurFade>
        </div>
      </Container>

      {/* Open-Ended Full-Width Showcase — White Background Touching Screen Sides */}
      <div className="relative w-full bg-white border-y border-[#17354B]/10 shadow-[0_20px_50px_-12px_rgba(23,53,75,0.06)] overflow-hidden py-10 sm:py-14 lg:py-16">
        
        {/* Generous Floating 3D Bubbles / Particles Spanning Edge-to-Edge */}
        <Floating3DParticles
          quantity={340}
          color="#367D78"
          size={5.5}
          opacity={0.3}
          drift={0.7}
          depth={0.5}
        />

        {/* Ambient BorderBeam around Open-Ended Container */}
        <BorderBeam
          duration={10}
          colorFrom="#2DD4BF"
          colorTo="#367D78"
          borderWidth={2}
        />

        <Container size="wide" className="relative z-10 max-w-7xl 2xl:max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Course Narrative & The 4 Special Pillars */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#367D78]">
                  Flagship Masterclass
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17354B] font-editorial tracking-tight leading-tight">
                  {courseLaunch.courseTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed">
                  {courseLaunch.courseLead}
                </p>
              </div>

              {/* Pillars Subheading & Tactile Feature Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm sm:text-base font-bold text-[#17354B] uppercase tracking-wider font-mono">
                  {courseLaunch.pillarsHeading}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {courseLaunch.pillars.map((pillar, idx) => {
                    const meta = pillarMeta[idx] || pillarMeta[0];
                    const Icon = meta.Icon;

                    return (
                      <MagicCard
                        key={idx}
                        gradientColor="rgba(54, 125, 120, 0.14)"
                        gradientSize={220}
                        className="relative p-4 sm:p-5 rounded-2xl bg-[#FAF9F6]/90 border border-[#17354B]/10 hover:border-[#367D78]/40 transition-all duration-300 shadow-sm flex flex-col justify-between group overflow-hidden"
                      >
                        {/* Subtle Clinical Watermark Icon in Top-Right */}
                        <div className="absolute top-3 right-3 opacity-10 text-[#17354B] group-hover:opacity-20 group-hover:scale-110 transition-all duration-300 pointer-events-none">
                          <Icon className="w-12 h-12" />
                        </div>

                        <div className="space-y-2 relative z-10">
                          {/* Step Badge */}
                          <div className="flex items-center justify-between">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase border ${meta.badgeColor}`}>
                              <span className="opacity-60">{meta.step}</span>
                              <span>&bull;</span>
                              <span>{meta.category}</span>
                            </span>
                          </div>

                          {/* 3D Flip Interactive Title */}
                          <div className="pt-1">
                            <Text3DFlip
                              as="h5"
                              className="text-sm sm:text-base font-bold text-[#17354B] tracking-tight"
                              rotateDirection="right"
                              staggerDuration={0.03}
                            >
                              {pillar.title}
                            </Text3DFlip>
                          </div>

                          {/* Pillar Description */}
                          <p className="text-xs sm:text-[13px] text-[#5A6E7D] leading-relaxed pt-0.5">
                            {pillar.description}
                          </p>
                        </div>
                      </MagicCard>
                    );
                  })}
                </div>
              </div>

              {/* Mission Statement Callout */}
              <div className="p-4 rounded-xl bg-[#367D78]/8 border border-[#367D78]/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#367D78] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#17354B] leading-relaxed font-medium">
                  {courseLaunch.mission}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href={courseLaunch.cta.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#17354B] hover:bg-[#244C68] text-white font-bold text-sm sm:text-base shadow-md transition-all active:scale-[0.98] hover:shadow-lg"
                >
                  <span>{courseLaunch.cta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Column: Embedded YouTube Short & Video Introduction */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[340px] space-y-3">
                
                <div className="space-y-1 text-center lg:text-left">
                  <h4 className="text-lg font-bold text-[#17354B] font-editorial flex items-center justify-center lg:justify-start gap-2">
                    <Play className="w-4 h-4 text-[#367D78] fill-[#367D78]" />
                    {courseLaunch.video.heading}
                  </h4>
                  <p className="text-xs text-[#5A6E7D] leading-relaxed">
                    {courseLaunch.video.description}
                  </p>
                </div>

                {/* 9:16 Video Bezel with Subtle Medical Ambient Backlight */}
                <div className="relative group/player">
                  {/* Ambient Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-t from-[#367D78]/25 to-[#2DD4BF]/15 rounded-3xl blur-xl opacity-60 group-hover/player:opacity-90 transition-opacity pointer-events-none -z-10" />

                  <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-[#17354B]/20 ring-1 ring-white/10">
                    <iframe
                      src={courseLaunch.video.embedUrl}
                      title="Easy Med Learning Course Introduction"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-[#5A6E7D]">
                    Official Course Launch Video &bull; Dr. Wasim Adil Khan
                  </span>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
