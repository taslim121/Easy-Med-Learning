import React from 'react';
import { CheckCircle2, BookOpen, Video, FileText, ArrowRight } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { siteConfig } from '@/content/site-config';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

export function CourseExperience() {
  const content = siteContent.home.experience;

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#17354B]/10 overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Book Artwork / Physical Companion Placeholder */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal direction="right">
              <div className="relative mx-auto max-w-sm">
                {/* 3D-styled editorial book cover card */}
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-tr from-[#17354B] via-[#244C68] to-[#367D78] p-8 text-white shadow-2xl flex flex-col justify-between border-4 border-white/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D96B60]/20 rounded-full blur-2xl" />
                  
                  {/* Book header */}
                  <div className="space-y-1 relative z-10">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-[#D96B60] font-semibold">
                      Physical Reference Companion
                    </span>
                    <div className="h-0.5 w-12 bg-[#D96B60]" />
                  </div>

                  {/* Book Title */}
                  <div className="my-auto space-y-3 relative z-10 text-center py-6">
                    <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-2">
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold tracking-tight text-white leading-tight">
                      Absolute Guide to ECG Interpretation
                    </h3>
                    <p className="text-xs text-white/80 font-sans">
                      With Original Clinical Illustrations &amp; Case Scenarios
                    </p>
                  </div>

                  {/* Book Author */}
                  <div className="pt-4 border-t border-white/20 relative z-10 text-center">
                    <p className="text-xs uppercase tracking-wider text-white/60">Author</p>
                    <p className="text-sm font-semibold text-white">Dr. Wasim Adil Khan</p>
                    <p className="text-[11px] text-[#4A9E98]">BUMS, PGDEMS</p>
                  </div>
                </div>

                {/* Companion details caption */}
                <div className="mt-4 text-center space-y-1">
                  <p className="text-xs font-medium text-[#17354B]">
                    Delivered directly to your postal address
                  </p>
                  <p className="text-[11px] text-[#5A6E7D]">
                    Printed physical book only &bull; No PDF version
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Experience Details */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <Reveal direction="left">
              <SectionHeading
                eyebrow="Multimodal Medical Pedagogy"
                title={content.title}
                description={content.intro}
              />

              <div className="space-y-4 pt-2">
                {content.points.map((point) => (
                  <div key={point} className="flex items-start gap-3.5">
                    <div className="mt-1 p-1 rounded-full bg-[#367D78]/15 text-[#367D78] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg text-[#17354B] font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Multimodal feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-xl bg-[#F6F4EE] border border-[#17354B]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Video className="w-5 h-5 text-[#367D78]" />
                    <span className="text-sm font-bold text-[#17354B]">Structured Video Modules</span>
                  </div>
                  <p className="text-xs text-[#5A6E7D] leading-relaxed">
                    Step-by-step visual explanations breaking down rate, rhythm, axis, and ischemia.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F6F4EE] border border-[#17354B]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-[#17354B]" />
                    <span className="text-sm font-bold text-[#17354B]">Printed Study Companion</span>
                  </div>
                  <p className="text-xs text-[#5A6E7D] leading-relaxed">
                    A durable, tangible study manual to annotate and consult during clinical rotations.
                  </p>
                </div>
              </div>

              {/* Course Page Link */}
              <div className="pt-4">
                <Button href="/courses" variant="outline" size="md">
                  <span>Explore Course Modules &amp; Scope</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
