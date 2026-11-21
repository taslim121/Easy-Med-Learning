'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, BookOpen, Award, Clock, ArrowRight, Tag } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { coursesPageContent } from '@/content/courses-content';
import { siteConfig } from '@/content/site-config';
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

      <Container size="wide" className="relative z-10">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#367D78]/10 border border-[#367D78]/25 text-[#17354B] text-xs font-mono font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>🎉 Now Live & Enrolling • Flagship Medical Masterclass</span>
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
                <span>Companion Printed Book</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#17354B]/10 shadow-xs text-xs font-mono text-[#17354B]">
                <BookOpen className="w-3.5 h-3.5 text-[#D96B60]" />
                <span>Video Course + Printed Book</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#17354B]/10 shadow-xs text-xs font-mono text-[#17354B]">
                <Clock className="w-3.5 h-3.5 text-[#367D78]" />
                <span>7 Years Clinical R&D</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#17354B]/10 shadow-xs text-xs font-mono text-[#17354B]">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Lead Physician Mentored</span>
              </div>
            </div>
          </BlurFade>

          {/* Launch Pricing Test Banner (Simple & Easily Removable / Toggleable) */}
          {coursesPageContent.pricing?.showTestBanner && (
            <BlurFade delay={0.32} yOffset={10}>
              <div className="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-r from-white via-emerald-50/30 to-white border border-emerald-500/30 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 my-1">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-600/10 text-emerald-700 text-[11px] font-mono font-bold uppercase tracking-wider border border-emerald-600/20">
                      <Tag className="w-3 h-3 text-emerald-600" />
                      {coursesPageContent.pricing.badge}
                    </span>
                    <span className="text-xs text-[#5A6E7D] font-medium">
                      • {coursesPageContent.pricing.condition}
                    </span>
                  </div>
                  <p className="text-xs text-[#5A6E7D] leading-relaxed">
                    {coursesPageContent.pricing.note}
                  </p>
                </div>

                <div className="flex items-baseline gap-2.5 sm:text-right shrink-0">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#17354B] tracking-tight">
                    {coursesPageContent.pricing.offerPrice}
                  </span>
                  <span className="text-sm sm:text-base text-[#5A6E7D] line-through font-medium">
                    {coursesPageContent.pricing.regularPrice}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                    {coursesPageContent.pricing.savings}
                  </span>
                </div>
              </div>
            </BlurFade>
          )}

          {/* Direct Enrollment CTA to Learnyst in Same Tab */}
          <BlurFade delay={0.35} yOffset={10}>
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={siteConfig.urls.learnystCourse}
                target="_self"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#17354B] hover:bg-[#244C68] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#17354B]/20 hover:shadow-xl transition-all active:scale-[0.98]"
              >
                <span>Enroll in Course Now</span>
                <ArrowRight className="w-4 h-4 text-[#2DD4BF]" />
              </a>

              <a
                href="#syllabus"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-[#5A6E7D] hover:text-[#17354B] transition-colors"
              >
                <span>Browse Course Syllabus ↓</span>
              </a>
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  );
}
