import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Award,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { getAllSeminars, getSeminarBySlug } from '@/content/seminars';

interface SeminarPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const seminars = getAllSeminars();
  return seminars.map((seminar) => ({
    slug: seminar.slug,
  }));
}

export async function generateMetadata({ params }: SeminarPageProps): Promise<Metadata> {
  const { slug } = await params;
  const seminar = getSeminarBySlug(slug);

  if (!seminar) {
    return {
      title: 'Seminar Not Found',
    };
  }

  return {
    title: `${seminar.title} | EasyMedLearning`,
    description: seminar.summary,
  };
}

export default async function SeminarDetailPage({ params }: SeminarPageProps) {
  const { slug } = await params;
  const seminar = getSeminarBySlug(slug);

  if (!seminar) {
    notFound();
  }

  const videos = seminar.youtubeVideos || [];

  return (
    <article className="py-12 sm:py-20 bg-[#FAF9F6]">
      <Container size="wide">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/seminars"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#5A6E7D] hover:text-[#17354B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Seminars</span>
          </Link>

          <span className="text-xs font-mono text-[#367D78] bg-[#367D78]/10 px-3 py-1 rounded-full font-semibold">
            {seminar.badge}
          </span>
        </div>

        {/* Title Header */}
        <header className="max-w-4xl space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-mono text-[#5A6E7D]">
            <span className="flex items-center gap-1.5 text-[#367D78]">
              <Calendar className="w-4 h-4" />
              {seminar.eventDate}
            </span>
            <span>•</span>
            <span className="text-[#17354B] font-semibold">{seminar.institution}</span>
            {seminar.felicitatedBy && (
              <>
                <span>•</span>
                <span>Felicitated by {seminar.felicitatedBy}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17354B] font-editorial leading-[1.15]">
            {seminar.title}
          </h1>
        </header>

        {/* Media & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14 pb-14 border-b border-[#17354B]/10">
          
          {/* Left Column: Video(s) or Single Featured Image if no videos */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-6">
            {videos.length > 0 ? (
              videos.map((vid, idx) => (
                <div
                  key={idx}
                  className="relative w-full max-w-[350px] aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-2xl ring-1 ring-[#17354B]/10"
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${vid}?rel=0&modestbranding=1`}
                    title={`${seminar.title} video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
              ))
            ) : seminar.imageUrl ? (
              <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-3xl overflow-hidden bg-[#17354B]/5 border border-[#17354B]/10 shadow-xl">
                <Image
                  src={seminar.imageUrl}
                  alt={seminar.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 380px"
                  className="object-contain p-2"
                  priority
                />
              </div>
            ) : (
              <div className="w-full max-w-[350px] aspect-[9/16] rounded-3xl bg-[#17354B]/5 flex items-center justify-center text-[#5A6E7D]">
                <Award className="w-16 h-16 text-[#367D78]/30" />
              </div>
            )}
          </div>

          {/* Right Column: Authentic Description Text & Contained Photos */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-base sm:text-lg text-[#17354B] leading-relaxed">
              {seminar.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Event Photographs (Only when there are videos on the left AND photos available) */}
            {Boolean(videos.length > 0 && (seminar.imageUrl || seminar.insideImageUrl)) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {seminar.imageUrl && (
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#17354B]/5 border border-[#17354B]/10 shadow-sm">
                    <Image
                      src={seminar.imageUrl}
                      alt={seminar.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="object-contain p-2"
                    />
                  </div>
                )}
                {seminar.insideImageUrl && (
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#17354B]/5 border border-[#17354B]/10 shadow-sm">
                    <Image
                      src={seminar.insideImageUrl}
                      alt={seminar.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="object-contain p-2"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Mission Statement */}
            <div className="p-5 rounded-2xl bg-white border border-[#17354B]/10 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#367D78] font-bold">
                <Sparkles className="w-4 h-4" />
                ✨ But this is just the beginning!
              </div>
              <p className="text-sm sm:text-base font-medium text-[#17354B]">
                {seminar.mission}
              </p>
            </div>

            {/* What Makes Our ECG Course Different */}
            <div className="p-6 rounded-3xl bg-white border border-[#17354B]/10 shadow-sm space-y-4">
              <div className="text-sm font-bold text-[#17354B]">
                💡 What makes our ECG course different?
              </div>

              <div className="space-y-3.5">
                {seminar.differentiators.map((diff, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#367D78] shrink-0 mt-0.5" />
                    <div>
                      <h2 className="text-sm font-bold text-[#17354B]">{diff.title}</h2>
                      <p className="text-xs sm:text-sm text-[#5A6E7D] mt-0.5 leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Statements */}
            <div className="space-y-3 text-sm sm:text-base text-[#17354B]/90 leading-relaxed">
              <p>{seminar.conclusion}</p>
              <p className="font-semibold text-[#17354B] flex items-center gap-1.5">
                <span>🚀 {seminar.closingCall}</span>
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#17354B] text-white font-bold text-sm hover:bg-[#244C68] transition-colors shadow-md"
              >
                <span>Explore the Complete ECG Course</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

      </Container>
    </article>
  );
}
