'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, Award, CheckCircle2, Truck, Layers, HeartPulse } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { coursesPageContent } from '@/content/courses-content';
import { BorderBeam } from '@/components/magicui/border-beam';
import { MagicCard } from '@/components/magicui/magic-card';
import { BlurFade } from '@/components/magicui/blur-fade';

export function HandbookShowcase() {
  const { handbook } = coursesPageContent;

  const featureIcons = [
    <Layers key="0" className="w-5 h-5 text-[#2DD4BF]" />,
    <Award key="1" className="w-5 h-5 text-amber-500" />,
    <HeartPulse key="2" className="w-5 h-5 text-[#D96B78]" />,
    <CheckCircle2 key="3" className="w-5 h-5 text-[#367D78]" />,
    <Truck key="4" className="w-5 h-5 text-emerald-500" />,
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#17354B]/10 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#2DD4BF]/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Physical Handbook Cover Display with BorderBeam */}
          <div className="lg:col-span-5 flex justify-center">
            <BlurFade delay={0.1} yOffset={12}>
              <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
                {/* Ambient Backlight */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#2DD4BF]/20 via-[#367D78]/20 to-[#17354B]/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Book Card Container with BorderBeam */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#0F2332]">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={handbook.image.src}
                      alt={handbook.image.alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 340px, 380px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Magic UI BorderBeam */}
                    <BorderBeam
                      duration={8}
                      colorFrom="#2DD4BF"
                      colorTo="#5EEAD4"
                      borderWidth={2}
                    />

                    {/* Subtle Overlay Tag */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-white border border-white/20 shadow-md">
                        <BookOpen className="w-3.5 h-3.5 text-[#2DD4BF]" />
                        Official Printed Edition
                      </span>
                    </div>

                    {/* Bottom Gradient for Contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A1622] via-[#0A1622]/60 to-transparent pointer-events-none" />
                  </div>

                  {/* Book Bottom Caption */}
                  <div className="p-4 bg-[#0A1622] border-t border-white/10 text-center">
                    <p className="text-xs font-mono text-[#5EEAD4] font-semibold">
                      Absolute Guide to ECG Interpretation
                    </p>
                    <p className="text-[11px] font-mono text-[#5A6E7D] mt-0.5">
                      Provided with the ECG Course upon launch &bull; Shipped to you
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Column: Author, Mentor & Handbook Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <BlurFade delay={0.15} yOffset={10}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#367D78]/10 text-[#367D78] text-xs font-mono font-semibold tracking-wider uppercase border border-[#367D78]/20">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{handbook.badge}</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} yOffset={10}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17354B] tracking-tight">
                {handbook.title}
              </h2>
            </BlurFade>

            {/* Academic Credentials Box */}
            <BlurFade delay={0.25} yOffset={10}>
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#17354B]/10 shadow-sm space-y-2">
                <div className="flex items-center justify-between border-b border-[#17354B]/10 pb-2.5">
                  <div>
                    <span className="text-[10px] font-mono text-[#5A6E7D] uppercase tracking-wider block">
                      Author & Clinician
                    </span>
                    <span className="text-base font-bold text-[#17354B]">
                      {handbook.author}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#2DD4BF]/15 text-[#17354B] font-mono text-xs font-semibold">
                    {handbook.developmentTime}
                  </span>
                </div>
                <div className="pt-1">
                  <span className="text-[10px] font-mono text-[#5A6E7D] uppercase tracking-wider block">
                    Academic Guidance & Mentorship
                  </span>
                  <span className="text-sm font-semibold text-[#367D78]">
                    {handbook.guidance}
                  </span>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} yOffset={10}>
              <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed">
                {handbook.subtitle}
              </p>
            </BlurFade>

            {/* Feature Highlights Grid */}
            <BlurFade delay={0.35} yOffset={12}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {handbook.features.map((feature, idx) => (
                  <MagicCard
                    key={idx}
                    gradientColor="rgba(45, 212, 191, 0.12)"
                    className="p-4 rounded-xl border border-[#17354B]/10 bg-white/80 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#FAF9F6] border border-[#17354B]/10 shrink-0">
                        {featureIcons[idx % featureIcons.length]}
                      </div>
                      <p className="text-xs sm:text-sm text-[#17354B] font-medium leading-snug">
                        {feature}
                      </p>
                    </div>
                  </MagicCard>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </Container>
    </section>
  );
}
