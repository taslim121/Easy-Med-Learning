import React from 'react';
import { CheckCircle2, Clock, HelpCircle, PackageCheck, Sparkles } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/motion/reveal';

export function IncludedPlanned() {
  const { offerings } = siteContent.courses;

  return (
    <section className="py-16 sm:py-24 bg-[#F6F4EE] border-t border-[#17354B]/10">
      <Container size="wide">
        <SectionHeading
          eyebrow="Transparent Course Structure"
          title={offerings.title}
          description="Clear distinctions between what is included in the initial release and what is planned for subsequent phases."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Column 1: Included at Launch */}
          <Reveal direction="up" delay={0.1}>
            <div className="h-full p-8 rounded-3xl bg-white border-2 border-[#367D78]/30 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#17354B]/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#367D78]/10 text-[#367D78]">
                      <PackageCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#17354B]">
                        {offerings.includedTitle}
                      </h3>
                      <p className="text-xs text-[#5A6E7D]">
                        Available in the core course package
                      </p>
                    </div>
                  </div>
                  <Badge variant="teal">Included</Badge>
                </div>

                <div className="divide-y divide-[#17354B]/5 mt-4">
                  {offerings.includedItems.map((item) => (
                    <div key={item.title} className="py-4 flex items-start gap-3.5">
                      <CheckCircle2 className="w-5 h-5 text-[#367D78] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-base font-bold text-[#17354B]">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#5A6E7D] mt-0.5 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#17354B]/10 text-xs text-[#367D78] font-medium">
                Physical printed book delivered to your postal address (no PDF version).
              </div>
            </div>
          </Reveal>

          {/* Column 2: Planned for Future Phases */}
          <Reveal direction="up" delay={0.2}>
            <div className="h-full p-8 rounded-3xl bg-white/70 border border-[#17354B]/15 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#17354B]/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#17354B]/5 text-[#5A6E7D]">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#17354B]">
                        {offerings.plannedTitle}
                      </h3>
                      <p className="text-xs text-[#5A6E7D]">
                        Scheduled for upcoming development phases
                      </p>
                    </div>
                  </div>
                  <Badge variant="neutral">Planned</Badge>
                </div>

                <div className="divide-y divide-[#17354B]/5 mt-4">
                  {offerings.plannedItems.map((item) => (
                    <div key={item.title} className="py-4 flex items-start gap-3.5">
                      <Clock className="w-5 h-5 text-[#5A6E7D]/70 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-base font-bold text-[#17354B]">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#5A6E7D] mt-0.5 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#17354B]/10 text-xs text-[#5A6E7D]">
                Certificate and live session formats are subject to founder confirmation prior to release.
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
