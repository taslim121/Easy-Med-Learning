import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, UserCheck, ShieldAlert, Ban, HeartHandshake, Stethoscope } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { communityPageContent } from '@/content/community-content';

export function FounderAndStandards() {
  const { founder } = communityPageContent;
  const { eyebrow, title, bio, ctaText, ctaHref, standards } = founder;

  const standardIcons = [
    <UserCheck key="0" className="size-5 text-[#367D78]" />,
    <ShieldAlert key="1" className="size-5 text-[#2DD4BF]" />,
    <Ban key="2" className="size-5 text-[#D96B60]" />,
    <HeartHandshake key="3" className="size-5 text-[#367D78]" />,
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#17354B]/10 relative">
      <Container size="wide">
        
        {/* Upper Segment: Open-Ended Founder Editorial Profile (Zero Boxy Enclosure) */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Portrait & Badge */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[260px] sm:max-w-[300px]">
                <div className="aspect-square rounded-3xl p-2.5 shadow-xl border border-[#17354B]/15 bg-[#17354B] relative overflow-hidden">
                  <Image
                    src="/images/instructor-hero.webp"
                    alt="Dr. Wasim Adil Khan"
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A1622] via-[#0A1622]/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-base font-bold">Dr. Wasim Adil Khan</p>
                    <p className="text-xs text-[#2DD4BF] font-mono">BUMS, PGDEMS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Vision & Verbatim Narrative */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#367D78]/10 text-[#367D78] text-xs font-mono font-semibold uppercase tracking-wider border border-[#367D78]/20">
                <Stethoscope className="size-3.5" />
                <span>{eyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17354B] tracking-tight">
                {title}
              </h2>

              <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed font-normal">
                {bio}
              </p>

              {/* Action Link */}
              <div className="pt-2">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#367D78] hover:text-[#17354B] transition-colors group"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Lower Segment: 4 Community Standards (Open Full-Width Ribbon) */}
        <div className="mt-16 sm:mt-20 max-w-6xl mx-auto pt-10 border-t border-[#17354B]/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#17354B]/10">
            {standards.map((item, idx) => (
              <div
                key={item.title}
                className={`flex flex-col justify-between pt-6 sm:pt-0 ${
                  idx > 0 ? 'lg:pl-8' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="size-11 rounded-xl bg-[#FAF9F6] border border-[#17354B]/8 flex items-center justify-center shadow-xs">
                    {standardIcons[idx]}
                  </div>
                  
                  <h3 className="text-base font-bold text-[#17354B]">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#5A6E7D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}