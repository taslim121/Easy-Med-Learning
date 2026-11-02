'use client';

import React from 'react';
import {
  Video,
  MessagesSquare,
  PlaySquare,
  BookOpen,
  Bell,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Clock,
  LucideIcon,
} from 'lucide-react';
import { homeContent } from '@/content/home-content';
import { Container } from '@/components/ui/container';
import { BlurFade } from '@/components/magicui/blur-fade';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { EcgTrace } from '@/components/ui/ecg-trace';

const iconMap: Record<string, LucideIcon> = {
  Video,
  MessagesSquare,
  PlaySquare,
  BookOpen,
  Bell,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Clock,
};

export function FeaturesGrid() {
  const { features } = homeContent;

  // Features structured following the official Magic UI Bento Grid pattern.
  // Explicitly ordered to pack 3 columns per row without ANY unfilled gaps:
  // Row 1: physical-books (2 cols) + live-classes (1 col) = 3 cols
  // Row 2: forums (1 col) + video-lectures (2 cols) = 3 cols
  // Row 3: trusted-content (1 col) + affordable-pricing (1 col) + mobile-learning (1 col) = 3 cols
  // Row 4: anytime-anywhere (2 cols) + alerts (1 col) = 3 cols
  const bentoFeatures = [
    {
      id: 'physical-books',
      className: 'col-span-3 lg:col-span-2',
      href: '/courses#syllabus',
      cta: 'Explore Handbook',
      badge: 'Hardcopy Included',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#367D78]/15 via-[#2DD4BF]/10 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]">
          <div className="absolute top-6 right-6 opacity-15 text-[#367D78]">
            <BookOpen className="w-36 h-36" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#367D78]/10 text-[#367D78] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#367D78]/20">
            Hardcopy Included
          </div>
        </div>
      ),
    },
    {
      id: 'live-classes',
      className: 'col-span-3 lg:col-span-1',
      href: '/contact',
      cta: 'Inquire on Sessions',
      badge: 'Interactive Sessions',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#17354B]/10 via-[#367D78]/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#17354B]">
            <Video className="w-28 h-28" />
          </div>
          <div className="absolute top-6 left-6 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 text-[11px] font-mono font-semibold tracking-wider uppercase border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Interactive Sessions
          </div>
        </div>
      ),
    },
    {
      id: 'forums',
      className: 'col-span-3 lg:col-span-1',
      href: '/contact',
      cta: 'Join Community',
      badge: 'Peer Discussion',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#367D78]/10 via-[#2DD4BF]/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#367D78]">
            <MessagesSquare className="w-28 h-28" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#367D78]/10 text-[#367D78] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#367D78]/20">
            Peer Discussion
          </div>
        </div>
      ),
    },
    {
      id: 'video-lectures',
      className: 'col-span-3 lg:col-span-2',
      href: '/courses#syllabus',
      cta: 'View Syllabus',
      badge: 'Structured Curriculum',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#17354B]/15 via-[#367D78]/10 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]">
          <div className="absolute top-8 right-0 w-80 opacity-25">
            <EcgTrace color="#367D78" glowColor="#2DD4BF" strokeWidth={2} />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#17354B]/10 text-[#17354B] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#17354B]/20">
            Structured Curriculum
          </div>
        </div>
      ),
    },
    {
      id: 'trusted-content',
      className: 'col-span-3 lg:col-span-1',
      href: '/about',
      cta: 'About Educator',
      badge: 'Verified Teaching',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#367D78]/10 via-emerald-500/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#367D78]">
            <ShieldCheck className="w-28 h-28" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 text-[11px] font-mono font-semibold tracking-wider uppercase border border-emerald-500/20">
            Verified Teaching
          </div>
        </div>
      ),
    },
    {
      id: 'affordable-pricing',
      className: 'col-span-3 lg:col-span-1',
      href: '/contact',
      cta: 'Pricing Details',
      badge: 'Student Friendly',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#D96B60]/10 via-[#D96B60]/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#D96B60]">
            <Sparkles className="w-28 h-28" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#D96B60]/10 text-[#D96B60] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#D96B60]/20">
            Student Friendly
          </div>
        </div>
      ),
    },
    {
      id: 'mobile-learning',
      className: 'col-span-3 lg:col-span-1',
      href: '/courses',
      cta: 'Device Support',
      badge: 'Any Device',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/10 via-[#367D78]/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#2DD4BF]">
            <Smartphone className="w-28 h-28" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#2DD4BF]/10 text-[#248277] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#2DD4BF]/20">
            Any Device
          </div>
        </div>
      ),
    },
    {
      id: 'anytime-anywhere',
      className: 'col-span-3 lg:col-span-2',
      href: '/courses',
      cta: 'Study Anywhere',
      badge: 'Self-Paced Access',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#367D78]/15 via-[#2DD4BF]/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#367D78]">
            <Clock className="w-32 h-32" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#367D78]/10 text-[#367D78] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#367D78]/20">
            Self-Paced Access
          </div>
        </div>
      ),
    },
    {
      id: 'alerts',
      className: 'col-span-3 lg:col-span-1',
      href: '/contact',
      cta: 'Get Updates',
      badge: 'Instant Updates',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#17354B]/10 via-[#367D78]/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#17354B]">
            <Bell className="w-28 h-28" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#17354B]/10 text-[#17354B] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#17354B]/20">
            Instant Updates
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-[#FAF9F6] text-[#17354B] border-b border-[#17354B]/10 relative overflow-hidden"
      aria-label="What Makes Easy Med Learning Different"
    >
      <Container size="wide" className="max-w-7xl 2xl:max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <BlurFade delay={0.05} yOffset={-8}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#17354B]/5 text-[#17354B] border border-[#17354B]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#367D78]" />
              Platform Inclusions &amp; Delivery
            </span>
          </BlurFade>

          <BlurFade delay={0.12} yOffset={10}>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17354B] font-editorial leading-tight">
              {features.sectionHeading}
            </h2>
          </BlurFade>

          <BlurFade delay={0.18} yOffset={10}>
            <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed">
              {features.sectionSubtitle}
            </p>
          </BlurFade>
        </div>

        {/* Official Magic UI Bento Grid - Rendered in exact 3-column row sequence with zero holes */}
        <BentoGrid>
          {bentoFeatures.map((config) => {
            const card = features.cards.find((c) => c.id === config.id);
            if (!card) return null;
            const Icon = iconMap[card.iconName] || Sparkles;

            return (
              <BentoCard
                key={card.id}
                name={card.title}
                description={card.description}
                Icon={Icon}
                href={config.href}
                cta={config.cta}
                className={config.className}
                background={config.background}
              />
            );
          })}
        </BentoGrid>
      </Container>
    </section>
  );
}
