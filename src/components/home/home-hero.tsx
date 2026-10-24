import React from 'react';
import { ExternalLink, Play, Calendar, UserCheck, Stethoscope } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { EcgTrace } from '@/components/ui/ecg-trace';
import { Reveal } from '@/components/motion/reveal';

export function HomeHero() {
  const content = siteContent.home.hero;
  const hasCourseUrl = Boolean(siteConfig.urls.learnystCourse);
  const hasIntroVideo = Boolean(siteConfig.urls.introVideo);

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 bg-clinical-grid">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#367D78]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Offer & Value */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#367D78]/10 border border-[#367D78]/20 text-[#367D78] text-xs font-semibold tracking-wide uppercase">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>{content.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17354B] leading-[1.12]">
                {content.h1}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-lg sm:text-xl text-[#5A6E7D] leading-relaxed max-w-2xl font-normal">
                {content.supportingText}
              </p>
            </Reveal>

            {/* CTAs and Launch Notice */}
            <Reveal direction="up" delay={0.3}>
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  {hasCourseUrl ? (
                    <Button
                      href={siteConfig.urls.learnystCourse}
                      isExternal
                      variant="primary"
                      size="lg"
                      className="shadow-md"
                    >
                      <span>{content.primaryCta}</span>
                      <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                    </Button>
                  ) : (
                    <div className="inline-flex items-center px-4 py-3 rounded-lg bg-[#17354B]/5 border border-[#17354B]/15 text-[#17354B] text-sm font-medium">
                      <span>{content.primaryCta} — Details coming soon</span>
                    </div>
                  )}

                  {hasIntroVideo && (
                    <Button
                      href={siteConfig.urls.introVideo}
                      isExternal
                      variant="outline"
                      size="lg"
                    >
                      <Play className="w-4 h-4 mr-1 text-[#367D78]" />
                      <span>{content.secondaryCta}</span>
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-[#5A6E7D]">
                  <Calendar className="w-3.5 h-3.5 text-[#D96B60]" />
                  <span>{content.tentativeLaunchNotice}</span>
                </div>
              </div>
            </Reveal>

            {/* Abstract ECG pulse motif */}
            <Reveal direction="none" delay={0.4}>
              <div className="pt-2">
                <EcgTrace className="h-7 text-[#D96B60]" strokeWidth={2.2} />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Instructor Portrait & Clinical Authority Card */}
          <div className="lg:col-span-5">
            <Reveal direction="left" delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Designed Clinical Placeholder Card */}
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#17354B] to-[#244C68] p-8 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/10">
                  {/* Subtle background motif */}
                  <div className="absolute inset-0 opacity-10 bg-clinical-grid" />
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#367D78]/30 rounded-full blur-2xl" />

                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-medium backdrop-blur-sm">
                      <UserCheck className="w-3.5 h-3.5 text-[#4A9E98]" />
                      Clinician & Educator
                    </span>
                    <span className="text-xs text-white/60 font-mono">Pune, India</span>
                  </div>

                  {/* Middle Center Graphic / Placeholder */}
                  <div className="relative z-10 my-auto text-center py-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-4 shadow-inner">
                      <Stethoscope className="w-10 h-10 text-[#4A9E98]" />
                    </div>
                    <div className="text-xl font-bold tracking-tight text-white">
                      Dr. Wasim Adil Khan
                    </div>
                    <div className="text-xs text-[#4A9E98] font-medium tracking-wide mt-1">
                      BUMS, PGDEMS
                    </div>
                    <p className="text-xs text-white/70 max-w-xs mx-auto mt-2 leading-relaxed">
                      Managing Director, National Hospital, Pune &bull; 15 Years Clinical Experience
                    </p>
                  </div>

                  {/* Bottom Stats Strip */}
                  <div className="relative z-10 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">15+ Yrs</div>
                      <div className="text-[11px] text-white/60">Clinical Practice</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">5 Yrs</div>
                      <div className="text-[11px] text-white/60">ECG Seminars</div>
                    </div>
                  </div>
                </div>

                {/* Sub-caption clarifying placeholder for owner replacement */}
                <div className="mt-3 text-center">
                  <span className="text-[11px] text-[#5A6E7D]">
                    {content.instructorPortraitAlt} &bull; Photo asset placeholder
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
