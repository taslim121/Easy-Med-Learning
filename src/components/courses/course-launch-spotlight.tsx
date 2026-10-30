'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/content/site-config';

export function CourseLaunchSpotlight() {
  const introReel = siteConfig.reels.courseLaunchIntro;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !videoRef.current.muted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#0A1622] text-[#FAF9F6] border-b border-white/10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D96B78]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official Launch Announcement Video */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/15 group">
              <video
                ref={videoRef}
                src={introReel.videoSrc}
                poster={introReel.thumbnail}
                playsInline
                preload="metadata"
                loop
                muted={isMuted}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-black/60 backdrop-blur-md text-[#2DD4BF] border border-[#2DD4BF]/30 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                  Official Launch Teaser
                </span>
                <span className="text-[11px] font-mono text-white/80 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                  Nov 2026
                </span>
              </div>

              {/* Center Play Overlay Trigger */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Play course introduction video"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-[#0F2332] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
                >
                  <Play className="w-7 h-7 fill-[#0F2332] ml-1" />
                </button>
              )}

              {/* Lower Controls Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                  className="flex items-center gap-1.5 px-3 h-9 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-white hover:bg-black/80 transition-colors cursor-pointer"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-[#D96B78]" />
                      <span className="text-[11px]">Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-[#2DD4BF]" />
                      <span className="text-[11px]">Sound On</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="mt-3 text-xs font-mono text-white/60 text-center">
              Watch Dr. Wasim introduce the Complete ECG Course
            </p>
          </div>

          {/* Right Column: Founder's Verified Announcement Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide bg-[#2DD4BF]/15 text-[#2DD4BF] border border-[#2DD4BF]/30">
                <Sparkles className="w-4 h-4" />
                Coming Soon
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-white/80 bg-white/5 border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-[#D96B78]" />
                Target Launch: November 2026
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-editorial leading-[1.15]">
                The Complete ECG Course is Coming Soon!
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Are you ready to understand ECG from basic to advanced level? We are bringing you a complete course designed to make ECG interpretation simple, easy, and understandable for every medical student and healthcare professional.
              </p>
            </div>

            {/* What Makes Our Course Special Grid */}
            <div className="pt-2 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#2DD4BF] font-semibold">
                What Makes Our Course Special?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Step-by-Step Learning</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Learn ECG from the very basics of cardiac conduction and gradually progress to confident advanced rhythm and ischemia interpretation.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Exclusive Self-Designed Images</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Specially created illustrations you will not find anywhere else on the internet, crafted specifically to make complex cardiac vectors intuitive.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Easy-to-Understand Teaching</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Intimidating clinical concepts demystified in clear, conversational Hinglish without rote memorization.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Teaching Experience</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Built upon direct teaching experience with medical college students and understanding the real difficulties learners face.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="p-4 rounded-2xl bg-[#17354B]/40 border border-white/10 text-xs sm:text-sm text-white/80 leading-relaxed flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#2DD4BF] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">Our Mission: </span>
                To make ECG simple and easy for everyone. We want you to understand the concepts, build diagnostic confidence, and master ECG interpretation bedside.
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
