import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  GraduationCap,
  Calendar,
  ArrowRight,
  Award,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { getAllSeminars } from '@/content/seminars';

export const metadata: Metadata = {
  title: 'Institutional ECG Seminars & Workshops',
  description:
    'Guest lectures on ECG interpretation at medical colleges by Dr. Wasim Adil Khan.',
};

export default function SeminarsPage() {
  const seminars = getAllSeminars();

  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F6]">
      <Container size="wide">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#5A6E7D]">
            <Link href="/" className="hover:text-[#17354B] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#367D78] font-semibold">Institutional Seminars</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17354B] font-editorial leading-[1.15]">
            Milestones in Our ECG Teaching Journey
          </h1>

          <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed">
            Delivering guest lectures on ECG interpretation at medical colleges to simplify concepts for students.
          </p>
        </div>

        {/* Seminars List */}
        <div className="space-y-8">
          {seminars.map((seminar) => (
            <div
              key={seminar.id}
              className="group rounded-3xl bg-white border border-[#17354B]/10 overflow-hidden shadow-lg shadow-[#17354B]/5 hover:border-[#367D78]/30 transition-all p-5 sm:p-7"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Visual Image Column (Clean Contained Image - No Badges or Overlays) */}
                <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
                  <Link
                    href={`/seminars/${seminar.slug}`}
                    className="relative w-full max-w-[320px] aspect-[1/1] rounded-2xl overflow-hidden bg-[#17354B]/5 shadow-md ring-1 ring-[#17354B]/10 block group-hover:shadow-lg transition-all duration-300"
                  >
                    {seminar.imageUrl ? (
                      <Image
                        src={seminar.imageUrl}
                        alt={seminar.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#17354B]/5 text-[#5A6E7D]">
                        <Award className="w-12 h-12 text-[#367D78]/40" />
                      </div>
                    )}
                  </Link>
                </div>

                {/* Content Column */}
                <div className="md:col-span-7 lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#367D78]">
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span>{seminar.badge} • {seminar.institution}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#17354B] font-editorial leading-snug">
                    <Link href={`/seminars/${seminar.slug}`} className="hover:text-[#367D78] transition-colors">
                      {seminar.title}
                    </Link>
                  </h2>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-[#5A6E7D]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#367D78]" />
                      {seminar.eventDate}
                    </span>
                    {seminar.felicitatedBy && (
                      <>
                        <span>•</span>
                        <span>Felicitated by {seminar.felicitatedBy}</span>
                      </>
                    )}
                  </div>

                  <p className="text-sm text-[#5A6E7D] leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {seminar.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/seminars/${seminar.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#17354B] hover:text-[#367D78] group/link"
                    >
                      <span>Read Full Post &amp; Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </Container>
    </div>
  );
}
