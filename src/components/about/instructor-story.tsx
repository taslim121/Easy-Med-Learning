import React from 'react';
import { ourInstructorContent } from '@/content/our-instructor-content';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { DotPattern } from '@/components/ui/dot-pattern';
import { HospitalTourVideo } from '@/components/about/hospital-tour-video';

export function InstructorStory() {
  const { story, whyTeach, problemToSolve } = ourInstructorContent;

  return (
    <section className="pt-16 sm:pt-20 bg-white relative overflow-hidden">
      {/* Top Two Sections Side-by-Side: My Journey (60% width) and Why I Teach ECG (40% width) */}
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Card: My Journey (60% width) */}
          <div className="lg:col-span-3 flex flex-col">
            <Reveal direction="up" className="h-full flex flex-col">
              <div className="h-full flex flex-col">
                {/* Eyebrow & Title */}
                <div className="mb-4 sm:mb-5">
                  <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#367D78] mb-1.5 sm:mb-2">
                    {story.eyebrow}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17354B] leading-tight">
                    {story.title}
                  </h2>
                </div>

                {/* Clean Editorial Panel with Left Border Only (No rounded enclosing box) */}
                <div className="flex-1 flex flex-col justify-center border-l-3 border-[#367D78] pl-5 sm:pl-6 py-4 sm:py-5 pr-4 sm:pr-6 bg-[#FAF9F6]/80 rounded-r-xl">
                  <div className="space-y-3">
                    {story.paragraphs.map((para, i) => (
                      <p key={i} className="text-base sm:text-lg text-[#17354B]/90 leading-relaxed font-normal">
                        &ldquo;{para}&rdquo;
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Card: Why I Teach ECG (40% width) */}
          <div className="lg:col-span-2 flex flex-col">
            <Reveal direction="up" delay={0.1} className="h-full flex flex-col">
              <div className="h-full flex flex-col">
                {/* Eyebrow & Title */}
                <div className="mb-4 sm:mb-5">
                  <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#D96B60] mb-1.5 sm:mb-2">
                    {whyTeach.eyebrow}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17354B] leading-tight">
                    {whyTeach.title}
                  </h2>
                </div>

                {/* Clean Editorial Panel with Left Border Only (No rounded enclosing box) */}
                <div className="flex-1 flex flex-col justify-center border-l-3 border-[#D96B60] pl-5 sm:pl-6 py-4 sm:py-5 pr-4 sm:pr-6 bg-[#FAF9F6]/80 rounded-r-xl">
                  <div className="space-y-3">
                    {whyTeach.paragraphs.map((para, i) => (
                      <p key={i} className="text-base sm:text-lg text-[#17354B]/90 leading-relaxed font-normal">
                        &ldquo;{para}&rdquo;
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </Container>

      {/* Hospital Video Showcase: Full-Bleed Video with Contained Header & Controls */}
      <HospitalTourVideo />

      {/* Section 3: The Problem I Want to Solve (Dotted Pattern, Refined Weight & Balanced Spacing) */}
      <Container size="wide">
        <div className="pt-10 sm:pt-12 pb-2 sm:pb-3 border-t border-[#17354B]/10 relative overflow-hidden">
          {/* Background Clinical Dot Pattern - Properly Aligned to Container */}
          <DotPattern
            width={24}
            height={24}
            cx={2}
            cy={2}
            cr={1.4}
            className="text-[#367D78]/35 opacity-70 [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_85%)]"
          />

          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[380px] rounded-full bg-[#367D78]/8 blur-[100px]" />

          {/* Content Container */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <Reveal direction="up">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#17354B] tracking-tight leading-snug">
                {problemToSolve.title}
              </h3>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <div className="space-y-4 text-base sm:text-lg text-[#5A6E7D] leading-relaxed pt-1">
                {problemToSolve.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}