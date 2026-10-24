import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Brain, Stethoscope, Compass } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function WhyLearnEcg() {
  const content = siteContent.home.whyLearn;

  const comparison = [
    {
      conventional: 'Memorizing arbitrary millimeter criteria and voltage charts',
      easymed: 'Understanding vector electrophysiology so the waveform explains itself',
    },
    {
      conventional: 'Panic and hesitation when handed an emergency 12-lead on night call',
      easymed: 'A calm, repeatable 5-step triage framework (Rate, Rhythm, Axis, Blocks, Infarct)',
    },
    {
      conventional: 'Disconnected PDF slides that get lost in your smartphone downloads',
      easymed: 'A durable, full-colour physical companion book to annotate and carry on rounds',
    },
    {
      conventional: 'Academic lectures loaded with excessive jargon and theoretical physics',
      easymed: 'Clear, clinician-led Hinglish explanations focused 100% on patient survival',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white relative border-b border-[#17354B]/10 overflow-hidden">
      <Container size="wide">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <SectionHeading
            eyebrow="Pedagogical Transformation"
            title="Why Most Healthcare Students Struggle with ECGs — And How We Fix It."
            description="Traditional medical education treats ECG interpretation as a memorization drill. EasyMedLearning re-engineers it as a clinical reflex based on cardiac electrophysiology."
          />
        </div>

        {/* Dynamic Before vs. After Editorial Transformation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: The Conventional Struggle */}
          <div className="lg:col-span-6 flex">
            <Reveal direction="up" className="w-full flex-1 flex flex-col">
              <div className="w-full flex-1 rounded-3xl p-8 sm:p-10 bg-[#FAF9F6] border border-[#17354B]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="p-2 rounded-full bg-[#D96B60]/10 text-[#D96B60]">
                      <AlertCircle className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#D96B60] font-bold">
                      The Conventional Method
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#17354B] tracking-tight mb-6">
                    Rote memorization creates hesitation at the bedside.
                  </h3>

                  <div className="space-y-4">
                    {comparison.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 text-sm text-[#5A6E7D]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D96B60]/60 mt-2 shrink-0" />
                        <span className="leading-relaxed">{item.conventional}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-[#17354B]/10 font-mono text-xs text-[#5A6E7D]">
                  Outcome: High exam anxiety &bull; Low night-shift confidence
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: The EasyMedLearning Standard (Glowing Accent) */}
          <div className="lg:col-span-6 flex">
            <Reveal direction="up" delay={0.1} className="w-full flex-1 flex flex-col">
              <div className="w-full flex-1 rounded-3xl p-8 sm:p-10 bg-[#0A1622] text-white border border-[#2DD4BF]/25 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#2DD4BF]/15 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="p-2 rounded-full bg-[#2DD4BF]/15 text-[#2DD4BF]">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2DD4BF] font-bold">
                      The EasyMedLearning Method
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight mb-6">
                    First-principles mastery breeds calm emergency competence.
                  </h3>

                  <div className="space-y-4">
                    {comparison.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 text-sm text-[#94A3B8]">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] mt-0.5 shrink-0" />
                        <span className="leading-relaxed text-white/90 font-medium">{item.easymed}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10 font-mono text-xs text-[#2DD4BF] flex items-center justify-between">
                  <span>Outcome: Decisive emergency interpretation</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
