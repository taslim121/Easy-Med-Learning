import React from 'react';
import { BookOpen, Languages, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';

export function LearningHighlights() {
  const highlights = siteContent.home.highlights;

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] relative border-b border-[#17354B]/10">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#367D78] font-semibold mb-3">
            Architected for Clinical Retention
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17354B] tracking-tight leading-[1.12]">
            Everything required to interpret 12-lead ECGs with{' '}
            <em className="font-editorial italic font-normal text-[#367D78]">unshakable certainty.</em>
          </h2>
        </div>

        {/* Aceternity Bento Grid Layout (Locked Height Flex Rows · Zero Layout Shift) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Tile 1: Primary Anchor - The Physical Reference Manual (7 cols) */}
          <div className="lg:col-span-7 flex">
            <Reveal direction="up" className="w-full flex-1 flex flex-col">
              <div className="w-full flex-1 rounded-3xl p-8 sm:p-10 bg-white border border-[#17354B]/10 shadow-sm hover:shadow-xl hover:border-[#367D78]/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#367D78]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17354B]/5 text-xs font-mono font-medium text-[#17354B]">
                      <BookOpen className="w-3.5 h-3.5 text-[#367D78]" />
                      MODALITY 01 &bull; TANGIBLE REFERENCE
                    </span>
                    <span className="font-mono text-xs text-[#5A6E7D]">DISPATCHED ACROSS INDIA</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#17354B] tracking-tight mb-4">
                    Full-Colour Physical Companion Book
                  </h3>
                  <p className="text-base text-[#5A6E7D] leading-relaxed max-w-xl">
                    No flimsy PDFs. A permanent, spiral-bound reference manual shipped to your address across India, featuring original vector conduction pathways, annotated clinical rhythm strips, and emergency diagnostic trees.
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-[#17354B]/10 flex flex-wrap items-center gap-4 text-xs font-mono text-[#17354B]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#367D78]" /> Full-Colour Diagrams
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#367D78]" /> Postal Delivery
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#367D78]" /> Ward-Ready Format
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Tile 2: Hinglish Pedagogy (5 cols) */}
          <div className="lg:col-span-5 flex">
            <Reveal direction="up" delay={0.08} className="w-full flex-1 flex flex-col">
              <div className="w-full flex-1 rounded-3xl p-8 sm:p-10 bg-white border border-[#17354B]/10 shadow-sm hover:shadow-xl hover:border-[#D96B60]/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D96B60]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D96B60]/10 text-xs font-mono font-medium text-[#D96B60]">
                      <Languages className="w-3.5 h-3.5" />
                      MODALITY 02 &bull; PEDAGOGY
                    </span>
                    <span className="font-mono text-xs text-[#5A6E7D]">HINGLISH</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#17354B] tracking-tight mb-4">
                    Intuitive Natural Hinglish
                  </h3>
                  <p className="text-base text-[#5A6E7D] leading-relaxed">
                    Designed for Indian healthcare professionals and students. Complex vectors, electrophysiology, and axis deviation explained in straightforward language that stays in your memory during exams and emergencies.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#17354B]/10 text-xs font-mono text-[#5A6E7D]">
                  Zero jargon barriers &bull; Built for bedside recall
                </div>
              </div>
            </Reveal>
          </div>

          {/* Tile 3: Bedside Clinical Cases (5 cols) */}
          <div className="lg:col-span-5 flex">
            <Reveal direction="up" delay={0.12} className="w-full flex-1 flex flex-col">
              <div className="w-full flex-1 rounded-3xl p-8 sm:p-10 bg-white border border-[#17354B]/10 shadow-sm hover:shadow-xl hover:border-[#367D78]/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#367D78]/10 text-xs font-mono font-medium text-[#367D78]">
                      <Layers className="w-3.5 h-3.5" />
                      MODALITY 03 &bull; CLINICAL CASES
                    </span>
                    <span className="font-mono text-xs text-[#5A6E7D]">EMERGENCY TRIAGE</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#17354B] tracking-tight mb-4">
                    Real Emergency 12-Lead Cases
                  </h3>
                  <p className="text-base text-[#5A6E7D] leading-relaxed">
                    Learn to systematically isolate STEMI equivalents, acute bundle branch blocks, life-threatening ventricular tachycardias, and subtle ischemic changes under pressure.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#17354B]/10 text-xs font-mono text-[#367D78] font-semibold">
                  Night-Shift Decision Frameworks
                </div>
              </div>
            </Reveal>
          </div>

          {/* Tile 4: Verified Clinician Mentorship (7 cols) */}
          <div className="lg:col-span-7 flex">
            <Reveal direction="up" delay={0.16} className="w-full flex-1 flex flex-col">
              <div className="w-full flex-1 rounded-3xl p-8 sm:p-10 bg-[#0A1622] text-white border border-white/10 shadow-xl hover:border-[#2DD4BF]/40 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#2DD4BF]/15 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-medium text-[#2DD4BF]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      FACULTY &bull; CLINICAL LEADERSHIP
                    </span>
                    <span className="font-mono text-xs text-[#94A3B8]">PUNE, INDIA</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                    Mentorship by Dr. Wasim Adil Khan
                  </h3>
                  <p className="text-base text-[#94A3B8] leading-relaxed max-w-xl">
                    Learn directly from an active clinician. Managing Director at National Hospital, Pune, with BUMS, PGDEMS, and 15+ years of bedside cardiology experience teaching thousands of medical students.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs font-mono text-[#2DD4BF]">
                    <span>15+ Years Experience</span>
                    <span>&bull;</span>
                    <span>Managing Director</span>
                  </div>
                  <span className="text-xs font-mono text-white/60">Verified Clinician &bull; No Marketing Fluff</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
