'use client';

import React from 'react';
import { PulsatingButton } from '@/components/ui/pulsating-button';
import { WhatsAppIcon } from '@/components/ui/icons';
import { siteConfig } from '@/content/site-config';

/**
 * Floating WhatsApp Action Button
 * Fixed in bottom-right corner across all routes using Magic UI Pulsating Button.
 * Directly launches the verified WhatsApp chat channel.
 */
export function FloatingWhatsApp() {
  const whatsappUrl = siteConfig.urls.whatsapp || 'https://wa.me/message/7TEIZRAIMHNZK1';

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Quick WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-50 print:hidden"
    >
      <div className="relative group flex items-center">
        {/* Desktop Hover Tooltip */}
        <span
          className="hidden md:flex pointer-events-none absolute right-full mr-3 items-center gap-1.5 whitespace-nowrap rounded-xl bg-[#0A1622]/95 text-white text-xs font-medium px-3.5 py-2 shadow-xl border border-white/10 backdrop-blur-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
          aria-hidden="true"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          Connect on WhatsApp
        </span>

        {/* Official Magic UI Pulsating Button */}
        <PulsatingButton
          onClick={handleClick}
          pulseColor="rgba(37, 211, 102, 0.6)"
          duration="1.8s"
          distance="12px"
          aria-label="Chat with EasyMedLearning on WhatsApp (opens in new tab)"
          title="Chat with Dr. Wasim Adil Khan & our team on WhatsApp"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0 bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:bg-[#20ba59] hover:shadow-2xl hover:shadow-[#25D366]/60 hover:scale-105 active:scale-95 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
        >
          <WhatsAppIcon className="w-7 h-7 text-white drop-shadow-sm" />
        </PulsatingButton>
      </div>
    </aside>
  );
}
