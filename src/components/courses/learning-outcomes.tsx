import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function LearningOutcomes() {
  const content = siteContent.courses.learningOutcomes;

  return (
    <section className="py-16 sm:py-24 bg-[#F6F4EE] border-t border-[#17354B]/10">
      <Container size="wide">
        <SectionHeading
          eyebrow="Clinical Objectives"
          title={content.title}
          description="Clear diagnostic outcomes focused on practical pattern recognition and bedside confidence."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {content.outcomes.map((item, idx) => (
            <Reveal key={item.text} direction="up" delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-white border border-[#17354B]/10 shadow-sm flex items-start gap-4 h-full">
                <div className="mt-0.5 p-1 rounded-full bg-[#367D78]/15 text-[#367D78] shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-semibold text-[#17354B]">
                    {item.text}
                  </p>
                  {!item.confirmed && item.note && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-amber-700 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.note}</span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
