'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { siteContent } from '@/content/site-content';
import { Button } from '@/components/ui/button';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const hasCourseUrl = Boolean(siteConfig.urls.learnystCourse);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="p-2 rounded-lg text-[#17354B] hover:bg-[#17354B]/5 focus-visible:outline-2 focus-visible:outline-[#367D78]"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[65px] z-50 bg-[#F6F4EE]/98 backdrop-blur-md px-6 py-8 flex flex-col justify-between border-t border-[#17354B]/10 overflow-y-auto"
        >
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xl font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#17354B] text-white font-semibold'
                      : 'text-[#17354B] hover:bg-[#17354B]/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#17354B]/10 flex flex-col gap-4">
            {hasCourseUrl ? (
              <Button
                href={siteConfig.urls.learnystCourse}
                isExternal
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                <span>{siteContent.header.primaryCtaLabel}</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </Button>
            ) : (
              <div className="text-center p-3 rounded-lg bg-[#17354B]/5 text-xs text-[#5A6E7D]">
                {siteContent.header.primaryCtaPendingText}
              </div>
            )}

            <p className="text-xs text-center text-[#5A6E7D]">
              {siteConfig.tagline}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
