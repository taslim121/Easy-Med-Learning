import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Stethoscope, Users } from 'lucide-react';
import { homeContent } from '@/content/home-content';
import { Container } from '@/components/ui/container';
import { Spotlight } from '@/components/ui/spotlight';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-28 bg-[#0A1622] text-white">
      {/* Ambient Lighting & Background Grid */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#2DD4BF" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#367D78]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-clinical-grid-dark opacity-35 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Platform Narrative, Launch Box & CTAs (Immediate Static Paint for 95+ Core Web Vitals) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Main Platform Headline with Modern Clean Sans Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-extrabold tracking-[-0.035em] text-white leading-[1.12] font-sans">
              Beyond Learning.{' '}
              <span className="block sm:inline">Together in Practice.{' '}</span>
              <span className="inline-block mt-1 sm:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#5EEAD4] to-white">
                With EasyMedLearning
              </span>
            </h1>

            {/* Platform Supporting Narrative */}
            <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              {hero.description}
            </p>

            {/* Flagship Course Launch Announcement Banner Box */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#17354B]/80 to-[#102434]/80 border border-[#2DD4BF]/25 shadow-lg backdrop-blur-md space-y-1.5 overflow-hidden">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#2DD4BF]">
                  {hero.launchAnnouncement.kicker}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {hero.launchAnnouncement.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {hero.launchAnnouncement.description}
              </p>
            </div>

            {/* Action Suite & Micro-Copy */}
            <div className="space-y-4 pt-1">
              <div className="flex flex-wrap items-center gap-3.5">
                <Link href={hero.ctas.primary.href} className="inline-block">
                  <ShimmerButton
                    background="#2DD4BF"
                    shimmerColor="#FFFFFF"
                    borderRadius="0.75rem"
                    className="text-[#0A1622] hover:bg-[#5EEAD4] shadow-lg shadow-[#2DD4BF]/20 font-bold text-sm sm:text-base px-6 py-3.5"
                  >
                    <Users className="w-4 h-4 text-[#0A1622]" />
                    <span>{hero.ctas.primary.label}</span>
                  </ShimmerButton>
                </Link>

                <Link
                  href={hero.ctas.secondary.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 font-bold text-sm sm:text-base backdrop-blur-sm transition-all hover:border-white/40"
                >
                  <span>{hero.ctas.secondary.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Supporting Line Below CTA */}
              <p className="text-xs sm:text-sm font-mono text-[#64748B] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/60 shrink-0" />
                <span>{hero.supportingMicrocopy}</span>
              </p>
            </div>

          </div>

          {/* Right Column: Lead Educator Portrait & Credentials */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient Glow Aura behind Portrait */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2DD4BF]/20 to-[#367D78]/10 rounded-3xl blur-2xl -z-10 transform scale-95" />

              {/* Portrait Container with Sleek Glassmorphism & BorderBeam */}
              <div className="aspect-[4/5] rounded-3xl p-6 text-white flex flex-col justify-end shadow-2xl relative overflow-hidden border border-white/15 bg-gradient-to-b from-[#17354B]/80 to-[#0A1622]/95 backdrop-blur-md group">
                
                {/* Doctor Photograph (Responsive Dynamic Art Direction: Full-HD on Desktop, Ultra-Light on Mobile) */}
                <picture className="absolute inset-0 w-full h-full">
                  <source
                    media="(min-width: 768px)"
                    srcSet={hero.educator.portraitSrc}
                  />
                  <img
                    src={hero.educator.portraitMobileSrc}
                    alt={hero.educator.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                {/* High-Performance BorderBeam Tracer */}
                <BorderBeam
                  duration={7}
                  colorFrom="#2DD4BF"
                  colorTo="#5EEAD4"
                  borderWidth={2}
                />

                {/* Lower Third Vignette for Readability */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0A1622] via-[#0A1622]/85 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-white border border-white/20 shadow-sm">
                    <Stethoscope className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    {hero.educator.badgeText}
                  </span>
                </div>

                {/* Bottom Identity Card */}
                <div className="relative z-10 space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow">
                    {hero.educator.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF] font-semibold">
                    {hero.educator.role}
                  </p>
                </div>
              </div>

              {/* Subtitle Caption */}
              <div className="mt-2.5 text-center">
                <span className="text-xs font-mono text-[#64748B]">
                  {hero.educator.name} &bull; {hero.educator.role}
                </span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
