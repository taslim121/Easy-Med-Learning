import React from 'react';
import { Users, GraduationCap, Stethoscope, HeartPulse, UserCheck, BookOpen } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function AudienceList() {
  const content = siteContent.courses.audience;

  const icons = [
    <GraduationCap key="0" className="w-5 h-5 text-[#367D78]" />,
    <Stethoscope key="1" className="w-5 h-5 text-[#17354B]" />,
    <HeartPulse key="2" className="w-5 h-5 text-[#D96B60]" />,
    <UserCheck key="3" className="w-5 h-5 text-[#367D78]" />,
    <BookOpen key="4" className="w-5 h-5 text-[#17354B]" />,
    <Users key="5" className="w-5 h-5 text-[#D96B60]" />,
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#17354B]/10">
      <Container size="wide">
        <SectionHeading
          eyebrow="Target Audience"
          title={content.title}
          description="Structured to provide value across every stage of medical training and clinical workflow."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {content.groups.map((group, idx) => (
            <Reveal key={group} direction="up" delay={idx * 0.08}>
              <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#17354B]/10 flex items-center gap-4 hover:border-[#367D78]/30 transition-all">
                <div className="p-3 rounded-xl bg-white shadow-sm shrink-0">
                  {icons[idx]}
                </div>
                <h3 className="text-base font-bold text-[#17354B]">
                  {group}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
