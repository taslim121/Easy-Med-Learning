import React from 'react';
import { FileCheck, Search, KeyRound, MessageSquareShare } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { communityPageContent } from '@/content/community-content';

export function CommunityHowItWorks() {
  const { howItWorks } = communityPageContent;
  const { eyebrow, title, steps } = howItWorks;

  const stepIcons = [
    <FileCheck key="0" className="size-5 text-[#367D78]" />,
    <Search key="1" className="size-5 text-[#2DD4BF]" />,
    <KeyRound key="2" className="size-5 text-[#17354B]" />,
    <MessageSquareShare key="3" className="size-5 text-[#D96B60]" />,
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-[#17354B]/10 scroll-mt-20 relative overflow-hidden">
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          align="center"
        />

        {/* Connected Horizontal Timeline Rail (Zero Box Enclosure) */}
        <div className="mt-14 sm:mt-20">
          <div className="relative">
            {/* The Horizontal Connected Track Line */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#367D78]/25 via-[#2DD4BF]/30 to-[#367D78]/25 -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
              {steps.map((step, index) => {
                const isVerification = step.number === '2';

                return (
                  <div
                    key={step.number}
                    className="relative flex flex-col justify-between pt-2 group"
                  >
                    {/* Top Station Circular Checkpoint Node */}
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="size-14 rounded-full bg-white border-2 border-[#17354B]/15 text-[#17354B] flex items-center justify-center font-mono font-extrabold text-base shadow-sm ring-4 ring-[#FAF9F6] group-hover:border-[#367D78] group-hover:ring-[#367D78]/20 transition-all">
                        0{step.number}
                      </div>
                      <div className="size-10 rounded-full bg-[#FAF9F6] border border-[#17354B]/10 flex items-center justify-center shadow-xs">
                        {stepIcons[index]}
                      </div>
                    </div>

                    {/* Step Title & Verbatim Description */}
                    <div className="space-y-2.5">
                      <h3 className="text-xl font-extrabold text-[#17354B] tracking-tight group-hover:text-[#367D78] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#5A6E7D] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Open Footer Stage Indicator */}
                    <div className="mt-6 pt-3 border-t border-[#17354B]/8 flex items-center justify-between text-[11px] font-mono text-[#5A6E7D]">
                      <span>Stage 0{step.number}</span>
                      {isVerification ? (
                        <span className="font-semibold text-[#367D78]">Credential Verification</span>
                      ) : (
                        <span className="font-semibold text-[#367D78]">Verified Step</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}