'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Sparkles, ArrowRight, Calendar } from 'lucide-react';

export function WorkshopFlyerModal() {
  const [isOpen, setIsOpen] = useState(true);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* =====================================================================
          1. FULL-SCREEN FLYER MODAL (Pops on every refresh / open state)
          ===================================================================== */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Free ECG Seminar and Course Launch Flyer"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative max-h-[92vh] max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close flyer"
              title="Close flyer"
              className="absolute top-2 right-2 sm:-top-3 sm:-right-3 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#102434]/95 text-white hover:bg-[#17354B] border border-white/40 sm:border-2 shadow-2xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Clean Flyer Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/seminar-flyer-mobile.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/images/seminar-flyer.webp"
                  type="image/webp"
                />
                <img
                  src="/images/seminar-flyer.webp"
                  alt="Free Seminar on ECG by Dr. Wasim Adil - Master ECG Course Launch at Inamdar Hospital, Pune on Sunday, 22 November 2026"
                  className="w-auto h-auto max-h-[88vh] sm:max-h-[90vh] object-contain block"
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          2. FLOATING BAR ABOVE WHATSAPP (Course page only, visible when modal closed)
          ===================================================================== */}
      {!isOpen && (
        <aside
          aria-label="Re-open Free ECG Seminar Flyer"
          className="fixed z-40 print:hidden bottom-[84px] right-5 sm:bottom-28 sm:right-10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
        >
          {/* Desktop Preview Card (≥768px) */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="group relative flex items-center gap-3 w-[270px] h-[82px] p-2.5 rounded-2xl bg-[#102434] text-white border border-[#2DD4BF]/40 hover:border-[#2DD4BF] shadow-2xl shadow-[#102434]/60 cursor-pointer transform-gpu hover:scale-[1.02] active:scale-[0.98] transition-all text-left select-none focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]"
            >
              {/* Miniature Flyer Thumbnail */}
              <div className="relative w-12 h-full rounded-lg overflow-hidden border border-white/20 bg-black shrink-0 shadow-sm">
                <Image
                  src="/images/seminar-flyer-mobile.webp"
                  alt="Free ECG Seminar Flyer"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              {/* Banner Details */}
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#2DD4BF] shrink-0 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2DD4BF] truncate">
                    22 Nov · Pune
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white tracking-tight truncate leading-tight mt-0.5 group-hover:text-[#2DD4BF] transition-colors">
                  Offline Seminar
                </h4>
                <span className="text-[10px] font-medium text-white/70 group-hover:text-[#2DD4BF] flex items-center gap-1 mt-0.5 transition-colors">
                  <span>Tap to View Full Screen</span>
                  <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </button>
          </div>

          {/* Mobile Pill (<768px) */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Offline Seminar"
              className="relative flex items-center gap-2 pl-2.5 pr-3.5 py-2 rounded-full bg-[#102434] text-white border-2 border-[#2DD4BF]/50 shadow-xl shadow-[#102434]/50 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] select-none text-left"
            >
              <div className="w-7 h-7 rounded-full bg-[#2DD4BF]/20 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 text-[#2DD4BF]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2DD4BF] leading-none">
                  22 Nov Pune
                </span>
                <span className="text-xs font-bold text-white leading-tight mt-0.5">
                  Offline Seminar
                </span>
              </div>
              <ArrowRight className="w-3 h-3 text-[#2DD4BF] ml-0.5 shrink-0" />
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
