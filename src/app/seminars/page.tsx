import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { getAllSeminars } from '@/content/seminars';

export const metadata: Metadata = {
  title: 'Institutional Seminars & Milestones | EasyMedLearning',
  description:
    'Guest lectures on ECG interpretation at medical colleges by Dr. Wasim Adil Khan.',
};

export default function SeminarsPage() {
  const seminars = getAllSeminars();

  return (
    <div className="py-16 sm:py-24 bg-[#FAF9F6]">
      <Container size="wide">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#5A6E7D]">
            <Link href="/" className="hover:text-[#17354B] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#367D78] font-semibold">Institutional Seminars</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#17354B] font-editorial leading-[1.15]">
            Milestones in Our ECG Teaching Journey
          </h1>

          <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed">
            Delivering guest lectures on ECG interpretation at medical colleges to simplify concepts for students.
          </p>
        </div>

        {/* Seminars List */}
        <div className="space-y-12">
          {seminars.map((seminar) => (
            <div
              key={seminar.id}
              className="rounded-3xl bg-white border border-[#17354B]/10 overflow-hidden shadow-xl shadow-[#17354B]/5 hover:border-[#367D78]/30 transition-all p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Autoplaying Video Column (No Thumbnail) */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-xl">
                    <video
                      src={seminar.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/60 backdrop-blur-md text-[#2DD4BF]">
                      Live Seminar Video
                    </div>
                  </div>
                </div>

                {/* Content Column (Exact Founder Text) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#367D78]">
                    <GraduationCap className="w-4 h-4" />
                    <span>{seminar.badge} • {seminar.institution}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17354B] font-editorial">
                    <Link href={`/seminars/${seminar.slug}`} className="hover:text-[#367D78] transition-colors">
                      {seminar.title}
                    </Link>
                  </h2>

                  <div className="space-y-3 text-sm sm:text-base text-[#5A6E7D] leading-relaxed">
                    <p>{seminar.paragraphs[0]}</p>
                    <p>{seminar.paragraphs[1]}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#17354B]/10 space-y-1 text-xs sm:text-sm">
                    <span className="font-semibold text-[#17354B]">Our Mission: </span>
                    <span className="text-[#5A6E7D]">{seminar.mission}</span>
                  </div>

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
