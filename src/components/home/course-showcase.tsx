'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Play,
} from 'lucide-react';
import { homeContent } from '@/content/home-content';
import { Container } from '@/components/ui/container';
import { BlurFade } from '@/components/magicui/blur-fade';
import { BorderBeam } from '@/components/magicui/border-beam';
import { MagicCard } from '@/components/magicui/magic-card';

export function CourseShowcase() {
  const { courseLaunch } = homeContent;

  return (
    <section
      className="py-16 sm:py-24 bg-[#FAF9F6] text-[#17354B] border-b border-[#17354B]/10 relative overflow-hidden"
      aria-label="Course Introduction"
    >
      <Container size="wide">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
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

        {/* Featured Course Showcase Box with BorderBeam */}
        <BlurFade delay={0.24} yOffset={12}>
          <div className="relative rounded-3xl bg-white border border-[#17354B]/10 shadow-[0_20px_50px_-12px_rgba(23,53,75,0.08)] overflow-hidden">
            
            {/* Ambient BorderBeam around Flagship Container */}
            <BorderBeam
              duration={9}
              colorFrom="#2DD4BF"
              colorTo="#367D78"
              borderWidth={2}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 items-center">
              
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

                {/* Pillars Subheading & 2x2 MagicCard Grid */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm sm:text-base font-bold text-[#17354B] uppercase tracking-wider font-mono">
                    {courseLaunch.pillarsHeading}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {courseLaunch.pillars.map((pillar, idx) => (
                      <MagicCard
                        key={idx}
                        gradientColor="rgba(54, 125, 120, 0.12)"
                        gradientSize={200}
                        className="p-3.5 rounded-xl bg-[#FAF9F6]/80 border border-[#17354B]/8 space-y-1 hover:border-[#367D78]/30 transition-colors shadow-sm"
                      >
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#17354B]">
                          <CheckCircle2 className="w-4 h-4 text-[#367D78] shrink-0" />
                          <span>{pillar.title}</span>
                        </div>
                        <p className="text-xs text-[#5A6E7D] leading-relaxed pl-6">
                          {pillar.description}
                        </p>
                      </MagicCard>
                    ))}
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
          </div>
        </BlurFade>

      </Container>
    </section>
  );
}
