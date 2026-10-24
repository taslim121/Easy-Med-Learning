import React from 'react';
import Link from 'next/link';
import { Award, Building2, Stethoscope, ArrowRight, UserCheck } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

export function InstructorPreview() {
  const content = siteContent.home.instructorPreview;

  const statIcons = [
    <Stethoscope key="0" className="w-5 h-5 text-[#367D78]" />,
    <Building2 key="1" className="w-5 h-5 text-[#17354B]" />,
    <Award key="2" className="w-5 h-5 text-[#D96B60]" />,
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F6F4EE]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Credentials & Bio Summary */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal direction="up">
              <SectionHeading
                eyebrow="Clinical Leadership &amp; Pedagogy"
                title={content.title}
                description={content.intro}
              />

              <div className="space-y-6 pt-2">
                {content.credentials.map((cred, idx) => (
                  <div
                    key={cred.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#17354B]/10 shadow-sm"
                  >
                    <div className="p-3 rounded-lg bg-[#F6F4EE] border border-[#17354B]/5 shrink-0">
                      {statIcons[idx]}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-[#17354B]">
                          {cred.value}
                        </span>
                        <span className="text-sm font-semibold text-[#367D78]">
                          {cred.label}
                        </span>
                      </div>
                      <p className="text-sm text-[#5A6E7D] mt-1 leading-relaxed">
                        {cred.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href={content.ctaHref} variant="primary" size="md">
                  <span>{content.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Seated Clinic Portrait Placeholder */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <div className="relative mx-auto max-w-sm">
                <div className="aspect-[4/5] rounded-2xl bg-white border border-[#17354B]/15 shadow-xl p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#367D78]/5 rounded-bl-full pointer-events-none" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs font-semibold text-[#367D78] uppercase tracking-wider">
                      Instructor Profile
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#17354B]/5 text-[11px] font-mono text-[#17354B]">
                      National Hospital, Pune
                    </span>
                  </div>

                  <div className="my-auto py-8 text-center relative z-10">
                    <div className="w-24 h-24 mx-auto rounded-full bg-[#17354B]/5 border-2 border-[#17354B]/15 flex items-center justify-center mb-4 text-[#17354B]">
                      <UserCheck className="w-12 h-12 text-[#367D78]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#17354B]">
                      Dr. Wasim Adil Khan
                    </h3>
                    <p className="text-xs font-medium text-[#367D78] mt-1">
                      BUMS, PGDEMS
                    </p>
                    <p className="text-xs text-[#5A6E7D] mt-2 max-w-xs mx-auto">
                      Managing Director &bull; Two Hospital Branches &bull; Critical Care &amp; ICU Foundation
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#17354B]/10 text-center relative z-10">
                    <p className="text-[11px] text-[#5A6E7D]">
                      {content.imageAlt} &bull; Image placeholder
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
