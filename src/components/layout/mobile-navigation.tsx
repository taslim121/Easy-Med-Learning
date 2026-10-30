'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ExternalLink, BookOpen, MonitorPlay, ChevronRight, Award } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { siteContent } from '@/content/site-content';
import { Button } from '@/components/ui/button';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const brand = siteConfig.branding;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll cleanly and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen]);

  const hasCourseUrl = Boolean(siteConfig.urls.learnystCourse);

  const menuContent = (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-[100] bg-[#FAF9F6] flex flex-col overflow-hidden animate-in fade-in duration-200"
    >
      {/* Top Header Bar inside Menu */}
      <div className="flex h-16 sm:h-20 items-center justify-between px-6 border-b border-[#17354B]/10 bg-[#FAF9F6] shrink-0">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
            <Image
              src={brand.logoMark}
              alt={brand.name}
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#17354B] leading-none">
              {brand.prefix}<span className="text-[#D96B78]">{brand.accent}</span>{brand.suffix}
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-[#5A6E7D] mt-0.5">
              {brand.mobileSubtitle}
            </span>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
          className="w-11 h-11 rounded-xl bg-[#17354B]/5 hover:bg-[#17354B]/10 active:bg-[#17354B]/15 flex items-center justify-center text-[#17354B] transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Dedicated Scrollable Body (Guarantees 100% Scroll Access on All Devices) */}
      <div className="flex-1 overflow-y-auto overscroll-contain p-6 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#17354B]/10 text-xs font-mono text-[#5A6E7D]">
          <span className="uppercase tracking-widest text-[#367D78] font-semibold">
            Curriculum &amp; Navigation
          </span>
          <span>Dr. Wasim Adil Khan</span>
        </div>

        {/* Primary Navigation Links with Large Touch Targets */}
        <nav className="flex flex-col space-y-2.5" aria-label="Mobile Navigation Links">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between text-xl font-bold py-4 px-4 rounded-2xl transition-all ${
                  isActive
                    ? 'bg-[#17354B] text-white shadow-md'
                    : 'text-[#17354B] hover:bg-[#17354B]/5 active:bg-[#17354B]/10'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight
                  className={`w-5 h-5 ${isActive ? 'text-[#2DD4BF]' : 'text-[#5A6E7D]/40'}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Quick Clinical Feature Links */}
        <div className="pt-2 space-y-3">
          <Link
            href="/courses#sample-lessons"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#17354B]/10 shadow-sm hover:border-[#367D78]/30 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-[#367D78]/10 text-[#367D78] shrink-0">
              <MonitorPlay className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#17354B]">Watch Lecture Previews</div>
              <div className="text-xs text-[#5A6E7D]">Free Hinglish sample lessons by Dr. Wasim</div>
            </div>
          </Link>

          <Link
            href="/seminars/bharti-vidyapeeth-ecg-masterclass"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#17354B]/10 shadow-sm hover:border-[#367D78]/30 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-[#D96B78]/10 text-[#D96B78] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#17354B]">Institutional Seminars</div>
              <div className="text-xs text-[#5A6E7D]">Bharati Vidyapeeth Medical College lecture &amp; certificates</div>
            </div>
          </Link>
        </div>

        {/* Bottom CTA Block (Inside Scrollable Area to Avoid Any Cut-Off) */}
        <div className="pt-4 pb-16 border-t border-[#17354B]/10 space-y-4">
          {hasCourseUrl ? (
            <Button
              href={siteConfig.urls.learnystCourse}
              isExternal
              variant="primary"
              size="lg"
              className="w-full justify-center bg-[#17354B] text-white py-4 text-base font-bold shadow-lg"
            >
              <span>{siteContent.header.primaryCtaLabel}</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </Button>
          ) : (
            <Button
              href="/courses"
              onClick={() => setIsOpen(false)}
              variant="primary"
              size="lg"
              className="w-full justify-center bg-[#17354B] text-white py-4 text-base font-bold shadow-lg"
            >
              <span>Explore Course Curriculum</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}

          <div className="text-center font-mono text-xs text-[#5A6E7D] space-y-1">
            <p>Tentative Course Launch: 15 November 2026</p>
            <p className="text-[11px] text-[#5A6E7D]/70">EasyMedLearning &bull; en-IN</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      {/* Menu Hamburger Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Open navigation menu"
        className="w-11 h-11 rounded-xl text-[#17354B] hover:bg-[#17354B]/5 active:bg-[#17354B]/10 flex items-center justify-center transition-colors cursor-pointer"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Render via Portal directly to body to bypass backdrop-filter containing block bug */}
      {mounted && isOpen && createPortal(menuContent, document.body)}
    </div>
  );
}
