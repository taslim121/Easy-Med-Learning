'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, AlertCircle } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function FaqAccordion() {
  const { faq } = siteContent.contact;
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F6F4EE] border-t border-[#17354B]/10">
      <Container size="wide">
        <SectionHeading
          eyebrow="Common Inquiries"
          title={faq.title}
          description={faq.intro}
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-4 mt-12">
          {faq.items.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} direction="up" delay={idx * 0.08}>
                <div className="rounded-2xl bg-white border border-[#17354B]/10 shadow-sm overflow-hidden transition-all">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F6F4EE]/50 transition-colors focus-visible:outline-2 focus-visible:outline-[#367D78]"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#17354B]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#367D78] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#5A6E7D] leading-relaxed border-t border-[#17354B]/5"
                    >
                      <p>{item.answer}</p>
                      {'isPending' in item && item.isPending && (
                        <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-700 font-medium bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>Status: Pending founder confirmation</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
