import React from 'react';
import { Palette, Activity, GitFork, Clock } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function TeachingApproach() {
  const content = siteContent.about.teachingApproach;

  const icons = [
    <Palette key="0" className="w-6 h-6 text-[#367D78]" />,
    <Activity key="1" className="w-6 h-6 text-[#17354B]" />,
    <GitFork key="2" className="w-6 h-6 text-[#D96B60]" />,
    <Clock key="3" className="w-6 h-6 text-[#367D78]" />,
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F6F4EE] border-t border-[#17354B]/10">
      <Container size="wide">
        <SectionHeading
          eyebrow="Pedagogical Pillars"
          title={content.title}
          description="Every concept is translated into an actionable clinical framework that works in high-pressure emergency and ward settings."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {content.points.map((point, index) => (
            <Reveal key={point} direction="up" delay={index * 0.1}>
              <div className="h-full p-6 rounded-2xl bg-white border border-[#17354B]/10 shadow-sm flex flex-col justify-between hover:border-[#367D78]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#F6F4EE] flex items-center justify-center mb-6">
                  {icons[index]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#17354B] leading-snug">
                    {point}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
