'use client';

import React from 'react';
import { MessageSquareQuote, Stethoscope, HeartPulse, HelpCircle } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';
import { communityPageContent } from '@/content/community-content';

export function SampleQuestionsMarquee() {
  const { sampleQuestions } = communityPageContent;
  const { questions } = sampleQuestions;

  const categories = [
    { label: 'Cardiology Case Inquiry', icon: HeartPulse, color: 'text-[#D96B60]', bg: 'bg-[#D96B60]/10', border: 'border-[#D96B60]/20' },
    { label: 'Infectious Disease Protocol', icon: Stethoscope, color: 'text-[#367D78]', bg: 'bg-[#367D78]/10', border: 'border-[#367D78]/20' },
    { label: 'Pharmacotherapy & Renal Pearls', icon: HelpCircle, color: 'text-[#17354B]', bg: 'bg-[#17354B]/10', border: 'border-[#17354B]/20' },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Edge gradient masks for seamless fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F4F6F8] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#F4F6F8] z-10" />

      <Marquee pauseOnHover className="[--duration:32s] py-2">
        {questions.map((question, idx) => {
          const category = categories[idx % categories.length];
          const CategoryIcon = category.icon;

          return (
            <div
              key={idx}
              className="relative w-[360px] sm:w-[420px] shrink-0 rounded-2xl border border-[#17354B]/10 bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(23,53,75,0.04)] hover:shadow-[0_10px_30px_rgba(23,53,75,0.08)] hover:border-[#367D78]/30 transition-all flex flex-col justify-between select-none"
            >
              <div className="space-y-3">
                {/* Category Pill */}
                <div className="flex items-center justify-between">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold ${category.bg} ${category.color} ${category.border} border`}>
                    <CategoryIcon className="size-3.5" />
                    <span>{category.label}</span>
                  </div>
                  <MessageSquareQuote className="size-5 text-[#367D78]/40" />
                </div>

                {/* Verbatim Question Text */}
                <blockquote className="text-base sm:text-lg font-bold text-[#17354B] leading-snug tracking-tight">
                  {question}
                </blockquote>
              </div>

              {/* Discussion Pill Footer */}
              <div className="mt-5 pt-3 border-t border-[#17354B]/8 flex items-center justify-between text-[11px] font-mono text-[#5A6E7D]">
                <span>Student Inquiry 0{idx + 1}</span>
                <span className="font-semibold text-[#367D78]">Peer Discussion</span>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}