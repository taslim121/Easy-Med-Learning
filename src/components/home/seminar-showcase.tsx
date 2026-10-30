'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { getFeaturedSeminar } from '@/content/seminars';

export function SeminarShowcase() {
  const seminar = getFeaturedSeminar();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Guarantee instant autoplay on mount without any thumbnail blocking
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback if browser blocks unmuted/autoplay
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section
      className="relative w-full py-16 sm:py-24 bg-[#0F2332] text-[#FAF9F6] border-b border-white/10 overflow-hidden"
      aria-label="Institutional Milestone"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Direct Autoplaying Video (No Thumbnail Image) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={togglePlay}
              className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/15 cursor-pointer group"
            >
              {/* Native Video Playing Automatically (No Poster Thumbnail) */}
              <video
                ref={videoRef}
                src={seminar.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />

              {/* Top Status Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-black/60 backdrop-blur-md text-[#2DD4BF] border border-[#2DD4BF]/30 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                  Live Seminar Video
                </span>
                <span className="text-[11px] font-mono text-white/80 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                  Bharti Vidyapeeth
                </span>
              </div>

              {/* Sound Toggle Button (Bottom-Right) */}
              <div className="absolute bottom-4 right-4 z-20">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono text-white hover:bg-black/90 transition-colors shadow-lg border border-white/15"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-[#D96B78]" />
                      <span>Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-[#2DD4BF]" />
                      <span>Sound On</span>
                    </>
                  )}
                </button>
              </div>

              {/* Pause/Play Minimal Indicator (Bottom-Left) */}
              <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                <span className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 inline-flex items-center justify-center">
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs font-mono text-white/60 text-center">
              Tap video to pause / resume
            </p>
          </div>

          {/* Right Column: Exact Founder Milestone Narrative (No Exaggeration) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#2DD4BF]/15 text-[#2DD4BF] border border-[#2DD4BF]/30">
                <GraduationCap className="w-3.5 h-3.5" />
                {seminar.badge}
              </span>
              <span className="text-xs font-mono text-white/60">
                {seminar.institution}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-editorial leading-[1.15]">
                {seminar.title}
              </h2>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                {seminar.paragraphs[0]}
              </p>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                {seminar.paragraphs[1]}
              </p>
            </div>

            {/* Mission Statement */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2DD4BF] font-semibold">
                <Sparkles className="w-4 h-4" />
                Our Mission
              </div>
              <p className="text-sm font-medium text-white/90">
                {seminar.mission}
              </p>
            </div>

            {/* What Makes Our ECG Course Different (Exact Founder Points) */}
            <div className="pt-2 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-white/50">
                💡 What makes our ECG course different?
              </div>
              <div className="space-y-2.5">
                {seminar.differentiators.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-white font-semibold">{item.title}: </strong>
                      <span className="text-white/75">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/seminars/${seminar.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2DD4BF] text-[#0A1622] font-bold text-sm hover:bg-[#34e2cd] transition-all shadow-md"
              >
                <span>Read Full Seminar Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/10"
              >
                <span>Explore ECG Course</span>
              </Link>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
