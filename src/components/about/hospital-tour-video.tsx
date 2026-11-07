'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { ourInstructorContent } from '@/content/our-instructor-content';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';

export function HospitalTourVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);
  const userMutedRef = useRef(false); // Tracks explicit user mute choice

  const [isMuted, setIsMuted] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  const { hospitalTour } = ourInstructorContent;

  // Strict device-based source resolution on client:
  // Mobile devices ONLY load the 2.9 MB mobile video; desktop ONLY loads the 7.9 MB desktop video.
  // There is ZERO preloading or overlapping downloads of the other device's file.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)');
    const resolveSource = () => {
      const selected = mediaQuery.matches
        ? hospitalTour.videoSrc
        : (hospitalTour.mobileVideoSrc || hospitalTour.videoSrc);
      setActiveSrc(selected);
    };

    resolveSource();
    mediaQuery.addEventListener('change', resolveSource);
    return () => mediaQuery.removeEventListener('change', resolveSource);
  }, [hospitalTour.videoSrc, hospitalTour.mobileVideoSrc]);

  const playVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video || !video.src) return;

    // 1. If user explicitly muted, always stay muted
    if (userMutedRef.current) {
      video.muted = true;
      try {
        await video.play();
        setIsMuted(true);
      } catch {
        // Fallback silently if blocked
      }
      return;
    }

    // 2. Otherwise, attempt to play with sound enabled at minimal ambient level (25%)
    video.volume = 0.25;
    try {
      video.muted = false;
      await video.play();
      setIsMuted(false);
    } catch {
      // 3. If browser blocks unmuted playback before user interaction,
      // start muted so the visual video plays, and unmute on first gesture
      try {
        video.muted = true;
        await video.play();
        setIsMuted(true);
      } catch {
        // Fallback silently if blocked
      }
    }
  }, []);

  const stopVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
  }, []);

  // When activeSrc is determined, if section is already visible, start playback
  useEffect(() => {
    if (activeSrc && isVisibleRef.current) {
      playVideo();
    }
  }, [activeSrc, playVideo]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.volume = 0.25;

    // Viewport-based observer: start video + audio when in view; stop both when off screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisibleRef.current = true;
            playVideo();
          } else {
            isVisibleRef.current = false;
            stopVideo();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    // Initial browser autoplay unblock handler:
    // Only unmutes if the user has NOT manually muted the video
    const handleInitialGesture = () => {
      const currentVideo = videoRef.current;
      if (
        currentVideo &&
        isVisibleRef.current &&
        !userMutedRef.current &&
        currentVideo.muted
      ) {
        currentVideo.muted = false;
        currentVideo.volume = 0.25;
        currentVideo.play().catch(() => {});
        setIsMuted(false);
      }
    };

    const gestures = ['pointerdown', 'touchstart', 'click', 'keydown'];
    gestures.forEach((evt) => {
      window.addEventListener(evt, handleInitialGesture, { passive: true });
    });

    // Handle tab visibility change: stop video + audio when user switches tabs
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopVideo();
      } else if (isVisibleRef.current) {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      gestures.forEach((evt) => {
        window.removeEventListener(evt, handleInitialGesture);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [playVideo, stopVideo]);

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    userMutedRef.current = nextMuted; // Explicitly remember user preference
    setIsMuted(nextMuted);

    if (!nextMuted) {
      video.volume = 0.25;
      if (video.paused && isVisibleRef.current) {
        video.play().catch(() => {});
      }
    }
  };

  return (
    <div className="w-full py-6 sm:py-10">
      {/* 1. Section Heading: Aligned within current content width */}
      <Container size="wide">
        <Reveal direction="up">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17354B] leading-tight">
              {hospitalTour.heading}
            </h2>
          </div>
        </Reveal>
      </Container>

      {/* 2. Full-Width Video: Spans complete width edge-to-edge (no card borders, no rounded corners) */}
      <div
        ref={containerRef}
        onClick={() => toggleMute()}
        className="group relative w-full aspect-video sm:aspect-[21/9] lg:aspect-[16/7] overflow-hidden bg-[#0A1622] rounded-none border-0 shadow-none cursor-pointer select-none"
      >
        {/* Continuous Ambient Background Video: dynamically bound to single device source */}
        <video
          ref={videoRef}
          src={activeSrc || undefined}
          poster={hospitalTour.posterSrc}
          playsInline
          loop
          preload="none"
          className="w-full h-full object-cover"
        />

        {/* Desktop Gradient Scrim (Hidden on mobile so mobile video remains 100% visible) */}
        <div
          aria-hidden="true"
          className="hidden sm:block pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
        />

        {/* Overlaid Controls & Desktop Description: Aligned within current content width */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <Container size="wide" className="h-full relative flex flex-col justify-between py-4 sm:py-6 lg:py-8">
            {/* Top-Left Audio Toggle (Only Control on Video) */}
            <div className="self-start pointer-events-auto">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-white text-xs font-mono border border-white/20 shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#FAF9F6]/70" />
                    <span className="text-[11px] tracking-wide font-medium">Muted (Click to unmute)</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    <span className="text-[11px] tracking-wide font-medium">Sound On</span>
                  </>
                )}
              </button>
            </div>

            {/* Desktop Description: Overlaid on Bottom of Video */}
            <div className="hidden sm:block pointer-events-none">
              <p className="max-w-3xl text-white/95 text-base lg:text-lg leading-relaxed font-normal drop-shadow-md">
                {hospitalTour.description}
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* 3. Mobile Description: Positioned below the video within current content width */}
      <Container size="wide" className="block sm:hidden">
        <div className="pt-3.5 px-0.5">
          <p className="text-sm text-[#5A6E7D] leading-relaxed font-normal">
            {hospitalTour.description}
          </p>
        </div>
      </Container>
    </div>
  );
}
