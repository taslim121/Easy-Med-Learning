import React from 'react';
import { Presentation, GraduationCap, AlertCircle, Quote } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function InstructorStory() {
  const { story, whyTeach, problemToSolve } = siteContent.about;

  return (
    <div className="py-16 sm:py-24 space-y-20 bg-white">
      <Container size="wide">
        {/* Section 1: My Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up">
              <SectionHeading
                eyebrow="Background &amp; Clinical Leadership"
                title={story.title}
              />
              <div className="space-y-4 text-base sm:text-lg text-[#17354B]/90 leading-relaxed font-normal">
                {story.paragraphs.map((para, i) => (
                  <p key={i} className="border-l-2 border-[#367D78] pl-4 italic bg-[#F6F4EE]/40 py-2 rounded-r">
                    &ldquo;{para}&rdquo;
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="left">
              {/* Seminar Teaching Photo Placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-[#17354B] p-6 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span className="font-semibold text-[#4A9E98]">National Masterclasses</span>
                  <span>Jammu &amp; Kashmir to Pune</span>
                </div>
                <div className="my-auto text-center py-4">
                  <Presentation className="w-12 h-12 mx-auto text-[#4A9E98] mb-3" />
                  <p className="text-sm font-semibold text-white">5 Years of ECG Seminars</p>
                  <p className="text-xs text-white/70 mt-1 max-w-xs mx-auto">
                    Training clinicians, resident doctors, and healthcare professionals nationwide.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-center">
                  <p className="text-[11px] text-white/50">{story.imageAlt}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Section 2: Why I Teach ECG */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 border-t border-[#17354B]/10">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal direction="right">
              {/* ECG Screen Presentation Placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#244C68] to-[#17354B] p-6 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span className="font-semibold text-[#D96B60]">Pedagogical Spark</span>
                  <span>Peer Mentorship</span>
                </div>
                <div className="my-auto text-center py-4">
                  <GraduationCap className="w-12 h-12 mx-auto text-[#D96B60] mb-3" />
                  <p className="text-sm font-semibold text-white">Simplifying Complex Waveforms</p>
                  <p className="text-xs text-white/70 mt-1 max-w-xs mx-auto">
                    Transforming abstract electrophysiology into intuitive bedside decisions.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-center">
                  <p className="text-[11px] text-white/50">{whyTeach.imageAlt}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <Reveal direction="up">
              <SectionHeading
                eyebrow="The Turning Point"
                title={whyTeach.title}
              />
              <div className="space-y-4 text-base sm:text-lg text-[#17354B]/90 leading-relaxed font-normal">
                {whyTeach.paragraphs.map((para, i) => (
                  <p key={i} className="border-l-2 border-[#D96B60] pl-4 italic bg-[#F6F4EE]/40 py-2 rounded-r">
                    &ldquo;{para}&rdquo;
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Section 3: The Problem I Want to Solve */}
        <div className="pt-16 border-t border-[#17354B]/10">
          <Reveal direction="up">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#F6F4EE] border border-[#17354B]/10 relative overflow-hidden">
              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#17354B]">
                  <AlertCircle className="w-4 h-4 text-[#D96B60]" />
                  <span>The Learning Gap in Medical Education</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#17354B]">
                  {problemToSolve.title}
                </h3>
                <div className="space-y-4 text-base sm:text-lg text-[#5A6E7D] leading-relaxed">
                  {problemToSolve.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
