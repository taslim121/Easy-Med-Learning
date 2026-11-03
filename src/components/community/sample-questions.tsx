import React from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { SampleQuestionsMarquee } from '@/components/community/sample-questions-marquee';
import { communityPageContent } from '@/content/community-content';

export function SampleQuestions() {
  const { sampleQuestions } = communityPageContent;
  const { eyebrow, title, sublabel } = sampleQuestions;

  return (
    <section className="py-16 sm:py-24 bg-[#F4F6F8] border-b border-[#17354B]/10 relative overflow-hidden">
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={sublabel}
          align="center"
        />

        {/* Dynamic Horizontal Marquee */}
        <div className="mt-10 sm:mt-12">
          <SampleQuestionsMarquee />
        </div>
      </Container>
    </section>
  );
}