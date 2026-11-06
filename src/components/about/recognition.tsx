import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ourInstructorContent } from '@/content/our-instructor-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function Recognition() {
  const content = ourInstructorContent.recognition;

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#17354B]/10 relative overflow-hidden">
      <Container size="wide">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />

        {/* Open-Ended 2-Column Editorial Split with Central Vertical Hairline Divider */}
        <div className="mt-14 sm:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
            {/* Desktop Central Vertical Hairline Divider (Matching Community Page) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#17354B]/15 to-transparent -translate-x-1/2" />

            {content.awards.map((award, index) => {
              const isFirst = index === 0;
              return (
                <div
                  key={award.id}
                  className={`flex flex-col justify-between space-y-6 ${
                    isFirst
                      ? 'lg:pr-10'
                      : 'lg:pl-10 pt-10 lg:pt-0 border-t lg:border-t-0 border-[#17354B]/10'
                  }`}
                >
                  <Reveal direction="up" delay={0.1 * (index + 1)}>
                    <div className="space-y-5">
                      {/* Header Strip */}
                      <div className="flex items-center justify-between pb-4 border-b border-[#17354B]/10">
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-11 rounded-xl flex items-center justify-center border shadow-xs ${
                              isFirst
                                ? 'bg-[#367D78]/10 text-[#367D78] border-[#367D78]/20'
                                : 'bg-[#D96B60]/10 text-[#D96B60] border-[#D96B60]/20'
                            }`}
                          >
                            {isFirst ? (
                              <ShieldCheck className="size-5" />
                            ) : (
                              <Award className="size-5" />
                            )}
                          </div>
                          <span
                            className={`text-xs font-mono font-bold uppercase tracking-wider ${
                              isFirst ? 'text-[#367D78]' : 'text-[#D96B60]'
                            }`}
                          >
                            {award.badgeTag}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-[#5A6E7D]">
                          {award.category}
                        </span>
                      </div>

                      {/* Photo Frame */}
                      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#17354B]/12 bg-[#FAF9F6] shadow-sm group">
                        <Image
                          src={award.imageSrc}
                          alt={award.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2 pt-1">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17354B] tracking-tight">
                          {award.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {/* Award Footer Tag */}
                  <div className="pt-4 border-t border-[#17354B]/10 flex items-center justify-between text-xs font-mono text-[#5A6E7D]">
                    <span className="flex items-center gap-1.5 text-[#367D78] font-semibold">
                      <CheckCircle2 className="size-3.5" />
                      {award.footerTag}
                    </span>
                    <span>{award.footerDetail}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
