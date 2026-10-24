'use client';

import React, { useState } from 'react';
import { Play, ExternalLink, Video, CheckCircle2, MonitorPlay } from 'lucide-react';
import { YouTubeIcon } from '@/components/ui/icons';
import { siteConfig } from '@/content/site-config';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function SampleLesson() {
  const lectures = siteConfig.previewLectures;
  const [activeLectureIdx, setActiveLectureIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentLecture = lectures[activeLectureIdx] || lectures[0];

  const handleSelectLecture = (idx: number) => {
    setActiveLectureIdx(idx);
    setIsPlaying(true);
  };

  return (
    <section id="sample-lessons" className="py-20 lg:py-28 bg-[#FAFAF8] relative border-b border-[#17354B]/10">
      <Container size="wide">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="Student Lecture Previews"
            title="Watch Sample Lectures by Dr. Wasim Adil Khan"
            description="Experience the clinical teaching style, visual clarity, and Hinglish explanations firsthand before course enrolment."
          />
        </div>

        {/* Cinematic Theater Viewport (Apple / Aceternity Style) */}
        <Reveal direction="up">
          <div className="max-w-5xl mx-auto">
            {/* Minimalist Lecture Selector Tabs (Pill Navigation) */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {lectures.map((lec, idx) => {
                const isActive = activeLectureIdx === idx;
                return (
                  <button
                    key={lec.id}
                    type="button"
                    onClick={() => handleSelectLecture(idx)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#17354B] text-white shadow-md'
                        : 'bg-white border border-[#17354B]/10 text-[#5A6E7D] hover:text-[#17354B] hover:border-[#17354B]/20'
                    }`}
                  >
                    <MonitorPlay className={`w-3.5 h-3.5 ${isActive ? 'text-[#4A9E98]' : 'text-[#5A6E7D]'}`} />
                    <span>Lecture {idx + 1}: {idx === 0 ? 'Conduction System' : 'Rhythm & Pattern'}</span>
                  </button>
                );
              })}
            </div>

            {/* Cinematic 16:9 Screen */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl shadow-[#17354B]/15 border border-[#17354B]/15">
              {isPlaying ? (
                <iframe
                  src={`${currentLecture.embedUrl}?autoplay=1&rel=0`}
                  title={currentLecture.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-br from-[#17354B] to-[#0F2332]">
                  {/* YouTube Thumbnail Backdrop */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 hover:scale-105"
                    style={{
                      backgroundImage: `url(https://img.youtube.com/vi/${currentLecture.id}/hqdefault.jpg)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Play Button */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label={`Play ${currentLecture.title}`}
                    className="relative z-10 w-20 h-20 rounded-full bg-[#D96B60] hover:bg-[#BD5349] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-white cursor-pointer group"
                  >
                    <Play className="w-8 h-8 ml-1 fill-white text-white" />
                  </button>

                  <div className="relative z-10 mt-5 space-y-1">
                    <p className="text-sm font-semibold text-white drop-shadow">
                      {currentLecture.title}
                    </p>
                    <p className="text-xs text-white/80 font-mono">
                      Hinglish Audio &bull; Full Clinical Walkthrough
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Lecture Details Bar (Unboxed Hairline Row) */}
            <div className="mt-6 pt-6 border-t border-[#17354B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#367D78] font-semibold">
                  Active Preview &bull; {currentLecture.id}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#17354B]">
                  {currentLecture.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A6E7D]">
                  {currentLecture.description}
                </p>
              </div>

              <a
                href={currentLecture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#17354B]/15 text-xs font-mono text-[#17354B] hover:bg-white transition-colors shrink-0 self-start sm:self-auto"
              >
                <YouTubeIcon className="w-4 h-4 text-[#D96B60]" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3 text-[#5A6E7D]" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
