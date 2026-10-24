import React from 'react';
import Link from 'next/link';
import { ChevronRight, Stethoscope } from 'lucide-react';
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

        <div className="max-w-3xl space-y-4">
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
            <p className="text-lg sm:text-xl text-[#5A6E7D] leading-relaxed">
              {content.tagline}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
