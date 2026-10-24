import React from 'react';
import Image from 'next/image';
import { Award, Building2, Stethoscope, ArrowRight } from 'lucide-react';
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
    <section className="py-20 lg:py-28 bg-[#FAFAF8] relative border-b border-[#17354B]/10">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Credentials & Bio Summary */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal direction="up">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#367D78] font-semibold mb-3">
                  Clinical Leadership &amp; Pedagogy
                </p>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17354B] tracking-tight leading-[1.12] mb-4">
                  Learn directly from an active clinician and{' '}
                  <em className="font-editorial italic font-normal text-[#367D78]">medical educator.</em>
                </h2>
                <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed">
                  {content.intro}
                </p>
              </div>

              {/* Unboxed Editorial Credentials with Hairline Dividers */}
              <div className="divide-y divide-[#17354B]/10 border-y border-[#17354B]/10 my-8">
                {content.credentials.map((cred, idx) => (
                  <div
                    key={cred.label}
                    className="py-5 flex items-start gap-4 group"
                  >
                    <div className="p-2.5 rounded-full bg-[#17354B]/5 group-hover:bg-[#367D78]/10 transition-colors shrink-0 mt-0.5">
                      {statIcons[idx]}
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-lg font-bold text-[#17354B]">
                          {cred.value}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#367D78] font-semibold">
                          &bull; {cred.label}
                        </span>
                      </div>
                      <p className="text-sm text-[#5A6E7D] leading-relaxed">
                        {cred.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Button href={content.ctaHref} variant="primary" size="lg">
                  <span>{content.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Instructor Portrait Frame */}
          <div className="lg:col-span-5">
            <Reveal direction="up" delay={0.1}>
              <div className="relative mx-auto max-w-sm">
                <div className="aspect-[4/5] rounded-3xl bg-[#17354B] border border-[#17354B]/15 shadow-2xl shadow-[#17354B]/20 flex flex-col justify-end relative overflow-hidden">
                  {/* Instructor Photo (100% Bright, Clean, No Top Overlay) */}
                  <Image
                    src="/images/instructor-hero.jpg"
                    alt={content.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top"
                  />

                  {/* Subtle Bottom Scrim Only (Under Name & Qualifications) */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0F2332] via-[#0F2332]/75 to-transparent pointer-events-none" />

                  {/* Bottom Instructor Details */}
                  <div className="relative z-10 text-white p-6 space-y-1">
                    <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                      Dr. Wasim Adil Khan
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#4A9E98] font-medium">
                      BUMS &bull; PGDEMS (Pune)
                    </p>
                    <p className="text-xs text-white/80">
                      Clinician, Author &amp; Managing Director
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
