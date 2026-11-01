'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ExternalLink, ChevronRight, Award, Sparkles, BookOpen } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { siteContent } from '@/content/site-content';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const brand = siteConfig.branding;
  const hasCourseUrl = Boolean(siteConfig.urls.learnystCourse);

  // Automatically close sheet when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        {/* Trigger Hamburger Button */}
        <SheetTrigger
          aria-label="Open mobile menu"
          className="w-11 h-11 rounded-xl text-[#17354B] hover:bg-[#17354B]/5 active:bg-[#17354B]/10 flex items-center justify-center transition-colors"
        >
          <Menu className="w-6 h-6" />
        </SheetTrigger>

        {/* Sliding Sheet Drawer */}
        <SheetContent side="right" className="flex flex-col">
          
          {/* Drawer Header */}
          <div className="flex h-16 sm:h-20 items-center justify-between px-6 border-b border-[#17354B]/10 bg-[#FAF9F6] shrink-0">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5"
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
                <span className="text-lg font-bold tracking-tight text-[#17354B] leading-none">
                  {brand.prefix}<span className="text-[#D96B78]">{brand.accent}</span>{brand.suffix}
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#5A6E7D] mt-0.5">
                  {brand.mobileSubtitle}
                </span>
              </div>
            </Link>

            <SheetClose
              aria-label="Close navigation menu"
              className="w-10 h-10 rounded-xl bg-[#17354B]/5 hover:bg-[#17354B]/10 active:bg-[#17354B]/15 flex items-center justify-center text-[#17354B] transition-colors"
            >
              <X className="w-5 h-5" />
            </SheetClose>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-6 space-y-6">
            
            {/* Curriculum Label */}
            <div className="flex items-center justify-between pb-2 border-b border-[#17354B]/10 text-xs font-mono text-[#5A6E7D]">
              <span className="uppercase tracking-widest text-[#367D78] font-bold">
                Navigation
              </span>
              <span>Dr. Wasim Adil Khan</span>
            </div>

            {/* Staggered Navigation Links with BlurFade */}
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation Links">
              {siteConfig.navigation.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <BlurFade key={item.href} delay={0.03 * idx} yOffset={6}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between text-base sm:text-lg font-bold py-3 px-4 rounded-xl transition-all ${
                        isActive
                          ? 'bg-[#17354B] text-white shadow-md'
                          : 'text-[#17354B] hover:bg-[#17354B]/5 active:bg-[#17354B]/10'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${isActive ? 'text-[#2DD4BF]' : 'text-[#5A6E7D]/40'}`}
                      />
                    </Link>
                  </BlurFade>
                );
              })}
            </nav>

            {/* Verified Clinical Feature Cards */}
            <div className="pt-2 space-y-3">
              <BlurFade delay={0.2} yOffset={6}>
                <Link
                  href="/courses"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-[#17354B]/10 shadow-sm hover:border-[#367D78]/30 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#367D78]/10 text-[#367D78] group-hover:bg-[#367D78] group-hover:text-white transition-colors shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#17354B]">
                      The Complete ECG Course
                    </div>
                    <div className="text-[11px] text-[#5A6E7D]">
                      Coming Soon • Basic to Advanced
                    </div>
                  </div>
                </Link>
              </BlurFade>

              <BlurFade delay={0.24} yOffset={6}>
                <Link
                  href="/seminars/bharti-vidyapeeth-ecg-masterclass"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-[#17354B]/10 shadow-sm hover:border-[#367D78]/30 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#D96B78]/10 text-[#D96B78] group-hover:bg-[#D96B78] group-hover:text-white transition-colors shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#17354B]">
                      Institutional Seminars
                    </div>
                    <div className="text-[11px] text-[#5A6E7D]">
                      Bharati Vidyapeeth Medical College Lecture
                    </div>
                  </div>
                </Link>
              </BlurFade>
            </div>

            {/* Bottom Primary CTA Action with ShimmerButton */}
            <div className="pt-4 pb-12 border-t border-[#17354B]/10 space-y-4">
              <BlurFade delay={0.28} yOffset={6}>
                {hasCourseUrl ? (
                  <Link
                    href={siteConfig.urls.learnystCourse}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <ShimmerButton
                      background="#17354B"
                      shimmerColor="#2DD4BF"
                      className="w-full text-white py-3.5 text-sm font-bold shadow-lg"
                    >
                      <span>{siteContent.header.primaryCtaLabel}</span>
                      <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                    </ShimmerButton>
                  </Link>
                ) : (
                  <Link
                    href="/courses"
                    onClick={() => setOpen(false)}
                    className="block w-full"
                  >
                    <ShimmerButton
                      background="#17354B"
                      shimmerColor="#2DD4BF"
                      className="w-full text-white py-3.5 text-sm font-bold shadow-lg"
                    >
                      <Sparkles className="w-4 h-4 text-[#2DD4BF]" />
                      <span>Explore Course Curriculum</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </ShimmerButton>
                  </Link>
                )}
              </BlurFade>

              <div className="text-center font-mono text-[11px] text-[#5A6E7D] space-y-0.5">
                <p>EasyMedLearning &bull; en-IN</p>
                <p className="text-[10px] text-[#5A6E7D]/70">Master ECG interpretation bedside</p>
              </div>
            </div>

          </div>

        </SheetContent>
      </Sheet>
    </div>
  );
}
