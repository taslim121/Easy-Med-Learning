'use client';

import React, { useState } from 'react';
import { ArrowRight, BookOpen, Video, Stethoscope, CheckCircle2 } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { siteConfig } from '@/content/site-config';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';
import { NativeReelPlayer } from '@/components/ui/native-reel-player';

export function CourseExperience() {
  const content = siteContent.home.experience;
  const bookReel = siteConfig.reels.bookReveal;
  const introReel = siteConfig.reels.courseLaunchIntro;
  const [activeReelKey, setActiveReelKey] = useState<'book' | 'teaser'>('book');

  const currentReel = activeReelKey === 'book' ? bookReel : introReel;

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-[#17354B]/10 overflow-hidden">
      <Container size="wide">
        {/* Section Header with Monospace Clinical Eyebrow */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#367D78] font-semibold mb-3">
            Multimodal Medical Pedagogy
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17354B] leading-[1.12] mb-4">
            Bridging complex electrophysiology with{' '}
            <em className="font-editorial italic font-normal text-[#367D78]">bedside clinical practice.</em>
          </h2>
          <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed">
            {content.intro}
          </p>
        </div>

        {/* Quiet Bento Layout: Sticky Video Stage + Fluid Editorial Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Floating Reel Stage */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal direction="up">
              <div className="space-y-4">
                <NativeReelPlayer
                  key={activeReelKey}
                  videoSrc={currentReel.videoSrc}
                  posterSrc={currentReel.thumbnail}
                  title={currentReel.title}
                  subtitle={currentReel.subtitle}
                  instagramUrl={currentReel.url}
                />

                {/* Minimal Multi-Reel Switcher Dock */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveReelKey('book')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      activeReelKey === 'book'
                        ? 'bg-[#17354B] text-white shadow-sm font-semibold'
                        : 'bg-[#17354B]/5 text-[#5A6E7D] hover:text-[#17354B]'
                    }`}
                  >
                    📖 Book Reveal {activeReelKey === 'book' ? '(Playing)' : ''}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveReelKey('teaser')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      activeReelKey === 'teaser'
                        ? 'bg-[#17354B] text-white shadow-sm font-semibold'
                        : 'bg-[#17354B]/5 text-[#5A6E7D] hover:text-[#17354B]'
                    }`}
                  >
                    🚀 Course Launch (Nov 2026) {activeReelKey === 'teaser' ? '(Playing)' : ''}
                  </button>
                </div>

                {/* Physical Companion Dispatch Assurance */}
                <div className="text-center pt-2 space-y-1">
                  <p className="text-xs font-semibold text-[#17354B]">
                    Delivered directly to your postal address across India
                  </p>
                  <p className="text-[11px] font-mono text-[#5A6E7D]">
                    Physical printed reference manual &bull; No PDF version
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Unboxed Editorial Feature Flow (No Boxy Card Soup) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Core Pedagogy Points */}
            <div className="space-y-3 pb-6">
              {content.points.map((point) => (
                <div key={point} className="flex items-start gap-3.5">
                  <div className="mt-1 p-1 rounded-full bg-[#367D78]/15 text-[#367D78] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-base sm:text-lg text-[#17354B] font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Editorial Features with Hairline Dividers (Vault & Apple Style) */}
            <div className="border-t border-[#17354B]/10 divide-y divide-[#17354B]/10 pt-4">
              {/* Feature 1: Physical Book */}
              <div className="py-8 first:pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-[#367D78] uppercase tracking-wider font-semibold">
                    01 &bull; Physical Companion Book
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#17354B] mb-2 tracking-tight">
                  Tangible Study Manual with Original Clinical Diagrams
                </h3>
                <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed">
                  A high-production printed companion featuring full-colour anatomical conduction illustrations, calibrated ECG grid paper exercises, and emergency diagnostic algorithms you can mark and carry on ward rounds.
                </p>
              </div>

              {/* Feature 2: Structured Video Modules */}
              <div className="py-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-[#17354B] uppercase tracking-wider font-semibold">
                    02 &bull; Video Lectures in Hinglish
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#17354B] mb-2 tracking-tight">
                  Foundations to Complex Arrhythmias
                </h3>
                <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed">
                  Step-by-step visual modules explaining cardiac electrophysiology, hexaxial lead placement, ischemic patterns, and bundle branch blocks in intuitive, natural Hinglish without rote memorization.
                </p>
              </div>

              {/* Feature 3: Bedside Readiness */}
              <div className="py-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-[#D96B60] uppercase tracking-wider font-semibold">
                    03 &bull; Clinical Bedside Confidence
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#17354B] mb-2 tracking-tight">
                  Real Hospital Case Studies &amp; Night-Shift Protocols
                </h3>
                <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed">
                  Gain the decisiveness required when interpreting an emergency 12-lead ECG under pressure. Differentiate subtle STEMI equivalents, localized ischemia, and life-threatening tachycardias.
                </p>
              </div>
            </div>

            {/* Course Scope Action */}
            <div className="pt-4">
              <Button href="/courses" variant="primary" size="lg">
                <span>View Full Curriculum &amp; Modules</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
