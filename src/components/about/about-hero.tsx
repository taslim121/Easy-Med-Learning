import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Stethoscope, UserCheck } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';

export function AboutHero() {
  const content = siteContent.about.hero;

  return (
    <section className="pt-10 pb-12 sm:pt-16 sm:pb-16 bg-clinical-grid border-b border-[#17354B]/10">
      <Container size="wide">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs font-medium text-[#5A6E7D]">
            <li>
              <Link href="/" className="hover:text-[#17354B] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-[#5A6E7D]/60" />
            </li>
            <li className="text-[#17354B] font-semibold" aria-current="page">
              About
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#367D78]/10 text-[#367D78] text-xs font-semibold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Medical Educator &amp; Clinician</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17354B] tracking-tight leading-tight">
                {content.h1}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-lg sm:text-xl text-[#5A6E7D] leading-relaxed max-w-2xl">
                {content.tagline}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#5A6E7D] font-medium">
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#367D78]" />
                  BUMS, PGDEMS
                </span>
                <span>&bull;</span>
                <span>Managing Director, National Hospital, Pune</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal direction="left" delay={0.2}>
              <div className="relative mx-auto max-w-[280px] lg:max-w-none">
                <div className="aspect-square rounded-2xl p-4 shadow-xl border border-[#17354B]/15 bg-[#17354B] relative overflow-hidden">
                  <Image
                    src="/images/instructor-hero.jpg"
                    alt="Dr. Wasim Adil Khan"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F2332]/90 via-[#0F2332]/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-sm font-bold">Dr. Wasim Adil Khan</p>
                    <p className="text-[11px] text-[#4A9E98]">BUMS, PGDEMS</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
