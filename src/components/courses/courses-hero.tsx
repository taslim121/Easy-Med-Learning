'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, BookOpen, Award, Clock } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { coursesPageContent } from '@/content/courses-content';
import { EcgTrace } from '@/components/ui/ecg-trace';
import { BlurFade } from '@/components/magicui/blur-fade';

export function CoursesHero() {
  const { breadcrumb, hero } = coursesPageContent;

  return (
    <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F4F6F8] to-[#FAF9F6] border-b border-[#17354B]/10">
      {/* Background Clinical Grid */}
      <div className="absolute inset-0 bg-clinical-grid opacity-35 pointer-events-none" />

      {/* Simple Official Red/Coral Heart Rate Wave Moving in Background */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none opacity-25 sm:opacity-35 overflow-hidden">
        <EcgTrace color="#D96B60" glowColor="#FF6B6B" strokeWidth={2} />
      </div>

      <Container className="relative z-10">
        {/* Compact Breadcrumb */}
        <BlurFade delay={0.05} yOffset={6}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono text-[#5A6E7D] mb-6">
            <Link
              href="/"
              className="hover:text-[#17354B] transition-colors flex items-center gap-1"
            >
              {breadcrumb.home}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5A6E7D]/60" />
            <span className="text-[#17354B] font-semibold" aria-current="page">
              {breadcrumb.current}
            </span>
          </nav>
        </BlurFade>

        {/* Clean, Focused Header Content (Single Centered/Spacious Column) */}
        <div className="max-w-3xl space-y-5">
          <BlurFade delay={0.1} yOffset={8}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17354B]/5 border border-[#17354B]/15 text-[#17354B] text-xs font-mono font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>Launching Soon &bull; Flagship Medical Masterclass</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.15} yOffset={10}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17354B] tracking-tight leading-[1.15]">
              {hero.title}
            </h1>
          </BlurFade>

          <BlurFade delay={0.2} yOffset={10}>
            <p className="text-lg sm:text-xl font-medium text-[#367D78]">
              {hero.subtitle}
            </p>
          </BlurFade>

          <BlurFade delay={0.25} yOffset={10}>
            <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed max-w-2xl">
              {hero.description}
            </p>
          </BlurFade>

          {/* Clinical Specifications Badges */}
          <BlurFade delay={0.3} yOffset={10}>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#17354B]/10 shadow-xs text-xs font-mono text-[#17354B]">
                <BookOpen className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span>{coursesPageContent.syllabus.totalChapters} Chapters</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#17354B]/10 shadow-xs text-xs font-mono text-[#17354B]">
                <BookOpen className="w-3.5 h-3.5 text-[#D96B60]" />
                <span>Physical Handbook Included</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#17354B]/10 shadow-xs text-xs font-mono text-[#17354B]">
                <Clock className="w-3.5 h-3.5 text-[#367D78]" />
                <span>7 Years Clinical R&D</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#17354B]/10 shadow-xs text-xs font-mono text-[#17354B]">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Lead Clinician Mentored</span>
              </div>
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  );
}
