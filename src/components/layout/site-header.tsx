'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { MobileNavigation } from './mobile-navigation';

export function SiteHeader() {
  const pathname = usePathname();
  const hasCourseUrl = Boolean(siteConfig.urls.learnystCourse);
  const brand = siteConfig.branding;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#17354B]/10 transition-colors">
      <Container size="wide">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Official Brand Logo / Wordmark (Config-driven, zero hardcoded values) */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#367D78] rounded-md py-1"
          >
            <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
              <Image
                src={brand.logoMark}
                alt={brand.name}
                width={36}
                height={36}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#17354B] leading-none">
                {brand.prefix}<span className="text-[#D96B78]">{brand.accent}</span>{brand.suffix}
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#5A6E7D] mt-0.5 hidden xs:block">
                {brand.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium px-3.5 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-[#17354B] font-semibold bg-[#17354B]/5'
                      : 'text-[#5A6E7D] hover:text-[#17354B] hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              {hasCourseUrl ? (
                <Button
                  href={siteConfig.urls.learnystCourse}
                  isExternal
                  variant="primary"
                  size="sm"
                >
                  <span>{siteContent.header.primaryCtaLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-70" />
                </Button>
              ) : (
                <span className="text-xs font-medium text-[#5A6E7D] bg-[#17354B]/5 px-3 py-1.5 rounded-md border border-[#17354B]/10">
                  {siteContent.header.primaryCtaPendingText}
                </span>
              )}
            </div>

            <MobileNavigation />
          </div>
        </div>
      </Container>
    </header>
  );
}
