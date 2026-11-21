'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { Marquee } from '@/components/ui/marquee';

export function TopAnnouncementBar() {
  const { announcement } = siteConfig;

  if (!announcement.enabled) {
    return null;
  }

  return (
    <aside
      aria-label="Course Launch Announcement"
      className="relative z-50 w-full bg-[#102434] text-white border-b border-[#2DD4BF]/20 shadow-xs h-9 sm:h-10 flex items-center overflow-hidden select-none"
    >
      {/* Magic UI Continuous Moving Marquee linking directly to Course Portal in Same Tab */}
      <div className="flex-1 overflow-hidden">
        <Marquee
          pauseOnHover
          repeat={4}
          className="py-0 gap-8 sm:gap-12 [--duration:28s]"
        >
          <a
            href={announcement.courseHref}
            target="_self"
            className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium hover:text-[#2DD4BF] transition-colors whitespace-nowrap cursor-pointer group py-1"
          >
            {/* Event Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#2DD4BF]/15 text-[#2DD4BF] border border-[#2DD4BF]/30">
              <Sparkles className="w-3 h-3 text-[#2DD4BF] animate-pulse" />
              {announcement.badge}
            </span>

            {/* Event Title */}
            <span className="font-semibold text-white group-hover:text-[#2DD4BF] transition-colors">
              {announcement.title}
            </span>

            {/* Subtitle / Details */}
            <span className="text-white/70 hidden sm:inline">
              • {announcement.subtitle}
            </span>

            {/* Interactive Call to Action */}
            <span className="text-[#2DD4BF] font-semibold inline-flex items-center gap-1 text-xs group-hover:translate-x-0.5 transition-transform ml-1">
              <span>{announcement.ctaText}</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>
        </Marquee>
      </div>
    </aside>
  );
}
