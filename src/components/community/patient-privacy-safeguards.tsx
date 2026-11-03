import React from 'react';
import Link from 'next/link';
import { Lock, AlertTriangle, FileWarning, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { BorderBeam } from '@/components/magicui/border-beam';
import { communityPageContent } from '@/content/community-content';

export function PatientPrivacySafeguards() {
  const { privacyRules } = communityPageContent;
  const { eyebrow, title, description, rules, enforcementNotice, guidelinesLinkText } = privacyRules;

  return (
    <section className="py-16 sm:py-24 bg-[#0A1622] text-white relative overflow-hidden">
      {/* Ambient Deep Teal Background Aura */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-[#367D78]/15 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 bg-clinical-grid-dark opacity-25" />

      <Container size="wide" className="relative z-10 max-w-7xl 2xl:max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-[#99F6E4] text-xs font-mono font-semibold tracking-wider uppercase">
            <Lock className="size-3.5 text-[#2DD4BF]" />
            <span>{eyebrow}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto font-normal">
            {description}
          </p>
        </div>

        {/* Master Clinical Trust Charter with BorderBeam */}
        <div className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-[#17354B]/95 to-[#0F2332]/98 border border-white/15 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* BorderBeam Perimeter Tracer */}
          <BorderBeam
            duration={9}
            colorFrom="#2DD4BF"
            colorTo="#5EEAD4"
            borderWidth={2}
          />

          {/* Open 2-Column Checklist (No Nested Mini-Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {rules.map((rule, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 pb-4 border-b border-white/10"
              >
                <div className="size-7 rounded-lg bg-[#2DD4BF]/20 text-[#2DD4BF] flex items-center justify-center shrink-0 mt-0.5 border border-[#2DD4BF]/30">
                  <Check className="size-3.5 stroke-[2.5]" />
                </div>
                <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-normal">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Enforcement Banner */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FCA5A5] font-medium">
              <AlertTriangle className="size-4 text-[#EF4444] shrink-0" />
              <span>{enforcementNotice}</span>
            </div>

            <Link
              href="#apply-form"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#2DD4BF] hover:text-[#5EEAD4] font-semibold underline underline-offset-4 transition-colors"
            >
              <FileWarning className="size-3.5" />
              <span>{guidelinesLinkText}</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}