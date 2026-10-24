import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function CourseOverview() {
  const content = siteContent.courses.overview;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container size="wide">
        <div className="max-w-4xl mx-auto space-y-8">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="Curriculum Scope"
              title={content.title}
              description={content.description}
            />

            <div className="p-4 rounded-xl bg-[#367D78]/10 border border-[#367D78]/20 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#367D78] shrink-0" />
              <p className="text-sm font-semibold text-[#17354B]">
                {content.eligibility}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
