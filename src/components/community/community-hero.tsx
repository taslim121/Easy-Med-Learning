import React from 'react';
import Link from 'next/link';
import { ChevronRight, Users, ArrowDown, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { DotPattern } from '@/components/ui/dot-pattern';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { CommunityNetworkGraph } from '@/components/community/community-network-graph';
import { communityPageContent } from '@/content/community-content';

export function CommunityHero() {
  const { breadcrumb, hero } = communityPageContent;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-[#FAF9F6] via-[#F4F6F8] to-[#FAF9F6] border-b border-[#17354B]/10">
      {/* Background Clinical Dot Matrix with Radial Gradient Mask */}
      <DotPattern
        width={24}
        height={24}
        cx={2}
        cy={2}
        cr={1.2}
        className="text-[#367D78]/30 opacity-60 [mask-image:radial-gradient(ellipse_at_center,white_35%,transparent_80%)]"
      />

      {/* Subtle Ambient Radial Glow */}
      <div className="pointer-events-none absolute top-1/4 -right-20 size-[450px] rounded-full bg-[#367D78]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 -left-20 size-[380px] rounded-full bg-[#2DD4BF]/8 blur-[110px]" />

      <Container size="wide" className="relative z-10">
        {/* Compact Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono text-[#5A6E7D] mb-6">
          <Link
            href="/"
            className="hover:text-[#17354B] transition-colors flex items-center gap-1"
          >
            {breadcrumb.home}
          </Link>
          <ChevronRight className="size-3.5 text-[#5A6E7D]/60" />
          <span className="text-[#17354B] font-semibold" aria-current="page">
            {breadcrumb.current}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Narrative & Action Suite */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Community Eyebrow Pill with AnimatedShinyText */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#367D78]/25 text-[#367D78] text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
              <Users className="size-3.5 text-[#367D78]" />
              <AnimatedShinyText className="inline font-bold text-[#17354B]">
                {hero.eyebrow}
              </AnimatedShinyText>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#17354B] tracking-[-0.03em] leading-[1.14]">
              {hero.title}
            </h1>

            {/* Lead Narrative Description */}
            <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed max-w-2xl font-normal">
              {hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link href="#apply-form" className="inline-block">
                <ShimmerButton
                  background="#17354B"
                  shimmerColor="#2DD4BF"
                  borderRadius="0.75rem"
                  className="text-white hover:bg-[#20445E] shadow-lg shadow-[#17354B]/15 font-bold text-sm sm:text-base px-6 py-3.5"
                >
                  <Users className="size-4 text-[#2DD4BF] mr-2 inline" />
                  <span>{hero.primaryCta}</span>
                </ShimmerButton>
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#17354B]/20 bg-white text-[#17354B] hover:bg-[#17354B]/5 font-bold text-sm sm:text-base shadow-xs transition-all hover:border-[#17354B]/35"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowDown className="size-4 text-[#367D78]" />
              </Link>
            </div>

            {/* Trust Note */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[#5A6E7D]">
              <ShieldCheck className="size-4 text-[#367D78] shrink-0" />
              <span>{hero.trustNote}</span>
            </div>

          </div>

          {/* Right Column: Interactive Clinical Peer Network Topology */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <CommunityNetworkGraph />
          </div>

        </div>
      </Container>
    </section>
  );
}