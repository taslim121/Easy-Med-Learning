import React from 'react';
import { Palette, Activity, Layers, Zap } from 'lucide-react';
import { ourInstructorContent } from '@/content/our-instructor-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function TeachingApproach() {
  const content = ourInstructorContent.teachingApproach;

  const icons = [
    <Palette key="0" className="size-5 text-[#367D78]" />,
    <Activity key="1" className="size-5 text-[#17354B]" />,
    <Layers key="2" className="size-5 text-[#D96B60]" />,
    <Zap key="3" className="size-5 text-[#367D78]" />,
  ];

  return (
    <section className="pt-10 sm:pt-14 pb-14 sm:pb-20 bg-gradient-to-b from-[#FAF9F6] via-[#F4F6F8]/60 to-[#FAF9F6] border-t border-[#17354B]/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-0 left-1/4 size-[400px] rounded-full bg-[#367D78]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 size-[400px] rounded-full bg-[#2DD4BF]/5 blur-[120px]" />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
          className="mb-8 sm:mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.pillars.map((pillar, index) => (
            <Reveal key={pillar.id} direction="up" delay={index * 0.1}>
              <div className="group h-full p-6 sm:p-7 rounded-2xl bg-white border border-[#17354B]/10 shadow-xs flex flex-col justify-between hover:border-[#367D78]/40 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                {/* Header Strip with Icon, Badge & Number */}
                <div className="flex items-center justify-between pb-4 border-b border-[#17354B]/8">
                  <div className="size-11 rounded-xl bg-[#FAF9F6] border border-[#17354B]/8 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#367D78]/10 transition-all duration-300">
                    {icons[index]}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#17354B]/5 text-[#5A6E7D]">
                      {pillar.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#367D78]">
                      {pillar.number}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="pt-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#17354B] leading-snug group-hover:text-[#367D78] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-medium text-[#367D78] mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A6E7D] leading-relaxed pt-3 border-t border-[#17354B]/6">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}