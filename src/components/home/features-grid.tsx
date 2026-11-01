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
import { Reveal } from '@/components/motion/reveal';

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

  return (
    <section
      className="py-16 sm:py-24 bg-white text-[#17354B] border-b border-[#17354B]/10 relative overflow-hidden"
      aria-label="What Makes Easy Med Learning Different"
    >
      <Container size="wide">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <Reveal direction="down">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#17354B]/5 text-[#17354B] border border-[#17354B]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#367D78]" />
              Platform Inclusions &amp; Delivery
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17354B] font-editorial leading-tight">
              {features.sectionHeading}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed">
              {features.sectionSubtitle}
            </p>
          </Reveal>
        </div>

        {/* 3x3 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.cards.map((card, idx) => {
            const Icon = iconMap[card.iconName] || Sparkles;

            return (
              <Reveal key={card.id} direction="up" delay={0.05 * idx}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#FAF9F6] border border-[#17354B]/8 hover:border-[#367D78]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    {/* Icon Box */}
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#17354B]/10 flex items-center justify-center text-[#367D78] shadow-sm group-hover:scale-110 group-hover:bg-[#367D78] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Card Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#17354B] tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5A6E7D] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
