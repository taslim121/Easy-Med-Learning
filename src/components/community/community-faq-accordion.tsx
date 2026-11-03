'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { communityPageContent } from '@/content/community-content';

export function CommunityFaqAccordion() {
  const { faq } = communityPageContent;
  const { items } = faq;

  return (
    <Accordion
      defaultValue={['faq-who-can-join']}
      className="w-full space-y-4"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="rounded-2xl bg-white border border-[#17354B]/10 px-5 sm:px-6 shadow-[0_2px_10px_rgba(23,53,75,0.03)] hover:shadow-[0_6px_20px_rgba(23,53,75,0.06)] transition-all overflow-hidden not-last:border-b-0"
        >
          <AccordionTrigger className="py-5 text-left text-base sm:text-lg font-bold text-[#17354B] hover:no-underline hover:text-[#367D78] focus-visible:ring-0">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 pt-2 text-sm sm:text-base text-[#5A6E7D] leading-relaxed border-t border-[#17354B]/8">
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}