import React from 'react';
import { Stethoscope, GraduationCap, CheckCircle2, HeartPulse } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { DotPattern } from '@/components/ui/dot-pattern';
import { communityPageContent } from '@/content/community-content';

export function TwoWaysToTakePart() {
  const { twoWaysToTakePart } = communityPageContent;
  const { doctors, students, footnote, eyebrow, title } = twoWaysToTakePart;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#17354B]/10 relative overflow-hidden">
      {/* Background Micro Dot Accent */}
      <DotPattern
        width={32}
        height={32}
        cx={2}
        cy={2}
        cr={1}
        className="text-[#17354B]/15 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
      />

      <Container size="wide" className="relative z-10 max-w-7xl 2xl:max-w-[1400px]">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          align="center"
        />

        {/* Open-Ended Full-Width Editorial Split (Zero Boxy Enclosure) */}
        <div className="mt-14 sm:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
            
            {/* Desktop Central Vertical Hairline Divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#17354B]/15 to-transparent -translate-x-1/2" />

            {/* Pathway 1: Doctors & Practising Professionals */}
            <div className="flex flex-col justify-between space-y-8 lg:pr-10">
              <div className="space-y-6">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-[#17354B]/10">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-xl bg-[#367D78]/10 text-[#367D78] flex items-center justify-center border border-[#367D78]/20 shadow-xs">
                      <Stethoscope className="size-5" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#367D78]">
                      {doctors.audienceTag}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#5A6E7D]">Pathway 01</span>
                </div>

                {/* Pathway Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17354B] tracking-tight">
                  {doctors.title}
                </h3>

                {/* Open Bullet Rows with subtle bottom hairlines */}
                <ul className="space-y-4 pt-2">
                  {doctors.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3.5 pb-4 border-b border-[#17354B]/6 text-sm sm:text-base text-[#17354B]/90 leading-relaxed last:border-b-0"
                    >
                      <CheckCircle2 className="size-5 text-[#367D78] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pathway Footer Tag */}
              <div className="pt-4 border-t border-[#17354B]/10 flex items-center justify-between text-xs font-mono text-[#5A6E7D]">
                <span>Peer Consultation</span>
                <span className="text-[#367D78] font-semibold">Senior Clinical Exchange</span>
              </div>
            </div>

            {/* Pathway 2: Medical Students & Early Learners */}
            <div className="flex flex-col justify-between space-y-8 lg:pl-10 pt-10 lg:pt-0 border-t lg:border-t-0 border-[#17354B]/10">
              <div className="space-y-6">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-[#17354B]/10">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-xl bg-[#17354B]/10 text-[#17354B] flex items-center justify-center border border-[#17354B]/20 shadow-xs">
                      <GraduationCap className="size-5" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#17354B]">
                      {students.audienceTag}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#5A6E7D]">Pathway 02</span>
                </div>

                {/* Pathway Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17354B] tracking-tight">
                  {students.title}
                </h3>

                {/* Open Bullet Rows with subtle bottom hairlines */}
                <ul className="space-y-4 pt-2">
                  {students.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3.5 pb-4 border-b border-[#17354B]/6 text-sm sm:text-base text-[#17354B]/90 leading-relaxed last:border-b-0"
                    >
                      <CheckCircle2 className="size-5 text-[#2DD4BF] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pathway Footer Tag */}
              <div className="pt-4 border-t border-[#17354B]/10 flex items-center justify-between text-xs font-mono text-[#5A6E7D]">
                <span>Mentorship &amp; Reasoning</span>
                <span className="text-[#17354B] font-semibold">Early Clinical Foundation</span>
              </div>
            </div>

          </div>
        </div>

        {/* Clean Open Footnote (No Prototype Box, No Confirmation Badge) */}
        <div className="mt-14 pt-8 border-t border-[#17354B]/10 max-w-3xl mx-auto flex items-center justify-center gap-2.5 text-center text-xs sm:text-sm font-medium text-[#5A6E7D]">
          <HeartPulse className="size-4 text-[#D96B60] shrink-0" />
          <span>{footnote}</span>
        </div>
      </Container>
    </section>
  );
}