import React from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { CommunityFaqAccordion } from '@/components/community/community-faq-accordion';
import { communityPageContent } from '@/content/community-content';

export function CommunityFaq() {
  const { faq } = communityPageContent;
  const { eyebrow, title } = faq;

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-[#17354B]/10 relative">
      <Container size="wide">
        {/* Section Heading (Verbatim from PDF Page 6) */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          align="center"
        />

        {/* 8 Accordion Items */}
        <div className="max-w-3xl mx-auto mt-12 sm:mt-16">
          <CommunityFaqAccordion />
        </div>
      </Container>
    </section>
  );
}