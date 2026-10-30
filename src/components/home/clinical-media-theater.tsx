'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Volume2,
  VolumeX,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/content/site-config';
import { getFeaturedSeminar } from '@/content/seminars';

// Static data extraction for zero-reallocation performance
const seminar = getFeaturedSeminar();
const bookReel = siteConfig.reels.bookReveal;
const launchReel = siteConfig.reels.courseLaunchIntro;

interface StoryPoint {
  title: string;
  desc: string;
}

interface StoryItem {
  indexLabel: string;
  navLabel: string;
  badge: string;
  badgeIcon: React.ElementType;
  title: string;
  subtitle: string;
  videoSrc: string;
  poster: string;
  cardBorderTop: string;
  badgeBg: string;
  pointIcon: React.ElementType;
  pointIconColor: string;
  mobilePointIconColor: string;
  missionIconColor: string;
  missionBg: string;
  missionBorder: string;
  desktopTeaserTag: string;
  points: StoryPoint[];
  mission: string;
  footerTag: string;
  cta: {
    label: string;
    href: string;
  };
}

// 3 Verified Authentic Stories (Strict Zero Content Invention)
const STORIES: StoryItem[] = [
  {
    indexLabel: '01 / 03',
    navLabel: '01 Launch Announcement',
    badge: 'Flagship Masterclass Announcement',
    badgeIcon: Sparkles,
    title: 'The Complete ECG Course is Coming Soon!',
    subtitle: 'Are you ready to understand ECG from basic to advanced level? Launching in November 2026.',
    videoSrc: launchReel.videoSrc,
    poster: launchReel.thumbnail,
    cardBorderTop: 'border-t-[#367D78]',
    badgeBg: 'bg-[#367D78]/10 text-[#367D78] border border-[#367D78]/20 md:bg-[#367D78]/10 md:text-[#367D78]',
    pointIcon: CheckCircle2,
    pointIconColor: 'text-[#367D78]',
    mobilePointIconColor: 'text-[#7DE2D1]',
    missionIconColor: 'text-[#367D78]',
    missionBg: 'bg-[#367D78]/8',
    missionBorder: 'border-[#367D78]/20',
    desktopTeaserTag: '01 / Launch Teaser',
    points: [
      {
        title: 'Step-by-Step Learning',
        desc: 'Learn ECG from the very basics and gradually progress to advanced clinical concepts.',
      },
      {
        title: 'Exclusive Self-Designed Images',
        desc: 'Specially designed visuals you will not find anywhere else on the internet, created specifically for this course.',
      },
      {
        title: 'Easy-to-Understand Teaching',
        desc: 'Complex concepts explained in simple language with a practical clinical approach.',
      },
      {
        title: 'Teaching Experience',
        desc: 'Built on direct teaching experience and understanding student difficulties.',
      },
    ],
    mission: 'Our mission: To make ECG simple and easy for every medical student and healthcare professional.',
    footerTag: 'Tentative Launch: 15 November 2026',
    cta: {
      label: 'Explore Complete Syllabus',
      href: '/courses',
    },
  },
  {
    indexLabel: '02 / 03',
    navLabel: '02 Companion Book',
    badge: 'Physical Companion Textbook',
    badgeIcon: BookOpen,
    title: 'Absolute Guide to ECG Interpretation',
    subtitle: 'Printed reference companion manual delivered directly to your postal address across India.',
    videoSrc: bookReel.videoSrc,
    poster: bookReel.thumbnail,
    cardBorderTop: 'border-t-[#17354B]',
    badgeBg: 'bg-[#17354B]/10 text-[#17354B] border border-[#17354B]/20 md:bg-[#17354B]/10 md:text-[#17354B]',
    pointIcon: CheckCircle2,
    pointIconColor: 'text-[#17354B]',
    mobilePointIconColor: 'text-cyan-300',
    missionIconColor: 'text-[#17354B]',
    missionBg: 'bg-[#17354B]/8',
    missionBorder: 'border-[#17354B]/20',
    desktopTeaserTag: '02 / Companion Book',
    points: [
      {
        title: 'Full-Colour Physical Textbook',
        desc: 'Permanent, spiral-bound reference manual shipped to your address with original vector conduction diagrams.',
      },
      {
        title: 'No PDF Compromise',
        desc: 'Real physical reference manual designed for bedside study and quick clinical desk access.',
      },
      {
        title: 'Doorstep Postal Dispatch',
        desc: 'Secure postal shipping included with your masterclass enrollment across India.',
      },
      {
        title: 'Aligned with Video Curriculum',
        desc: 'Chapter-for-chapter sync with Dr. Wasim Adil Khan’s structured video lectures on Learnyst.',
      },
    ],
    mission: 'Designed to give medical learners a tangible reference companion they can highlight and carry on hospital ward rounds.',
    footerTag: 'Doorstep Delivery Across India',
    cta: {
      label: 'View Book & Curriculum',
      href: '/courses',
    },
  },
  {
    indexLabel: '03 / 03',
    navLabel: '03 Institutional Seminar',
    badge: 'Institutional Milestone',
    badgeIcon: GraduationCap,
    title: 'A Proud Milestone in Our ECG Teaching Journey!',
    subtitle: 'Guest Lecture on ECG Interpretation at Bharati Vidyapeeth Homoeopathic Medical College, Pune.',
    videoSrc: seminar.videoUrl,
    poster: '/images/seminars/bharti-vidyapeeth-poster.jpg',
    cardBorderTop: 'border-t-[#D96B60]',
    badgeBg: 'bg-[#D96B60]/10 text-[#D96B60] border border-[#D96B60]/20 md:bg-[#D96B60]/10 md:text-[#D96B60]',
    pointIcon: Award,
    pointIconColor: 'text-[#D96B60]',
    mobilePointIconColor: 'text-rose-300',
    missionIconColor: 'text-[#D96B60]',
    missionBg: 'bg-[#D96B60]/8',
    missionBorder: 'border-[#D96B60]/20',
    desktopTeaserTag: '03 / Seminar',
    points: [
      {
        title: 'Institutional Felicitation',
        desc: 'Honoured and felicitated by Principal, Prof. Dr. Anita S. Patil, in recognition of the academic session.',
      },
      {
        title: 'Student Certificate Ceremony',
        desc: 'Certificate distribution ceremony conducted for attending medical students.',
      },
      {
        title: 'Self-Designed Visuals in Action',
        desc: 'Teaching electrophysiology vector loops and 12-lead interpretation on digital board.',
      },
      {
        title: 'Demystifying Complex Concepts',
        desc: 'Seeing students appreciate our teaching approach and connect with clinical patterns.',
      },
    ],
    mission: seminar.mission,
    footerTag: 'Principal Prof. Dr. Anita S. Patil Felicitation',
    cta: {
      label: 'Read Full Seminar Post',
      href: `/seminars/${seminar.slug}`,
    },
  },
];

export function ClinicalMediaTheater() {
  // Only 1 minimal state: isMuted for speaker button icon rendering
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // References
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const indicatorRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Active step & mute state refs: strictly direct DOM control, zero React re-renders during scroll
  const activeStepRef = useRef<number>(0);
  const isMutedRef = useRef<boolean>(true);

  // Helper to pause all videos and update offscreen indicators
  const pauseAllVideos = useCallback(() => {
    activeStepRef.current = -1;
    videoRefs.current.forEach((v) => {
      if (v) {
        v.pause();
        v.muted = true;
      }
    });
    indicatorRefs.current.forEach((el) => {
      if (!el) return;
      el.className =
        'px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl transition-all duration-300 font-semibold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap bg-[#17354B]/5 text-[#5A6E7D]';
      const dot = el.querySelector<HTMLSpanElement>('.indicator-dot');
      if (dot) dot.className = 'indicator-dot w-1.5 h-1.5 rounded-full transition-colors duration-300 bg-[#5A6E7D]/40';
    });
  }, []);

  // Guarded step updater: plays active video and stops inactive ones with zero duplicate instances
  const updateActiveStep = useCallback((newStep: number) => {
    if (activeStepRef.current === newStep) return;
    activeStepRef.current = newStep;

    // 1. Play active video, pause and mute inactive ones
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx === newStep) {
        v.muted = isMutedRef.current;
        const p = v.play();
        if (p !== undefined) p.catch(() => {});
      } else {
        v.pause();
        v.muted = true;
      }
    });

    // 2. Direct DOM update for indicator pills (zero React component re-render)
    indicatorRefs.current.forEach((el, idx) => {
      if (!el) return;
      const dot = el.querySelector<HTMLSpanElement>('.indicator-dot');
      if (idx === newStep) {
        el.className =
          'px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl transition-all duration-300 font-semibold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap bg-[#17354B] text-white shadow-sm ring-2 ring-[#367D78]/30';
        if (dot) dot.className = 'indicator-dot w-1.5 h-1.5 rounded-full transition-colors duration-300 bg-[#367D78]';
      } else {
        el.className =
          'px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl transition-all duration-300 font-semibold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap bg-[#17354B]/5 text-[#5A6E7D]';
        if (dot) dot.className = 'indicator-dot w-1.5 h-1.5 rounded-full transition-colors duration-300 bg-[#5A6E7D]/40';
      }
    });
  }, []);

  // GSAP Pinned Stacked Cards Animation: Exactly ONCE on mount, zero re-initialization
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const stage = stageRef.current;
    const card0 = cardRefs.current[0];
    const card1 = cardRefs.current[1];
    const card2 = cardRefs.current[2];

    if (!stage || !card0 || !card1 || !card2) return;

    const ctx = gsap.context(() => {
      // Set initial card states with GPU hardware acceleration
      gsap.set(card0, { y: '0%', scale: 1, opacity: 1, zIndex: 10, force3D: true });
      gsap.set(card1, { y: '110%', scale: 1, opacity: 1, zIndex: 20, force3D: true });
      gsap.set(card2, { y: '110%', scale: 1, opacity: 1, zIndex: 30, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          pin: stage,
          start: 'top top',
          end: '+=300%', // 3 viewports for relaxed reading & viewing
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 0,
          onEnter: () => updateActiveStep(0),
          onEnterBack: () => updateActiveStep(2),
          onLeave: () => pauseAllVideos(),
          onLeaveBack: () => pauseAllVideos(),
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.35) {
              updateActiveStep(0);
            } else if (progress < 0.77) {
              updateActiveStep(1);
            } else {
              updateActiveStep(2);
            }
          },
        },
      });

      // -----------------------------------------------------------
      // TIMELINE ORCHESTRATION WITH LINEAR PHYSICS & EXPLICIT DWELL ZONES
      // -----------------------------------------------------------
      // Phase 0: Card 1 DWELL HOLD (0.00 -> 0.25)

      // Phase 1: Card 2 RISES UP from bottom (0.25 -> 0.45)
      tl.to(
        card1,
        {
          y: '0%',
          ease: 'none',
          duration: 0.2,
          force3D: true,
        },
        0.25
      );

      tl.to(
        card0,
        {
          scale: 0.95,
          opacity: 0.35,
          y: '-14px',
          ease: 'none',
          duration: 0.2,
          force3D: true,
        },
        0.25
      );

      // Phase 2: Card 2 DWELL HOLD (0.45 -> 0.68)

      // Phase 3: Card 3 RISES UP from bottom (0.68 -> 0.88)
      tl.to(
        card2,
        {
          y: '0%',
          ease: 'none',
          duration: 0.2,
          force3D: true,
        },
        0.68
      );

      tl.to(
        card1,
        {
          scale: 0.95,
          opacity: 0.35,
          y: '-14px',
          ease: 'none',
          duration: 0.2,
          force3D: true,
        },
        0.68
      );

      // Phase 4: Card 3 DWELL HOLD (0.88 -> 1.00)
      tl.to({}, { duration: 0.12 }, 0.88);
    }, stageRef);

    return () => {
      ctx.revert();
    };
  }, [pauseAllVideos, updateActiveStep]);

  // Synchronous mute toggle without any useEffect overhead
  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      isMutedRef.current = next;
      videoRefs.current.forEach((v, idx) => {
        if (v && idx === activeStepRef.current) {
          v.muted = next;
          if (!next && v.paused) {
            const p = v.play();
            if (p !== undefined) p.catch(() => {});
          }
        }
      });
      return next;
    });
  };

  return (
    <div className="relative w-full bg-[#FAF9F6] border-b border-[#17354B]/10">
      {/* Pinned Stage Container: Outer unpinned wrapper keeps React 19 tree hierarchy pristine */}
      <section
        ref={stageRef}
        style={{ overflowAnchor: 'none' }}
        className="relative w-full h-screen min-h-[580px] py-3 sm:py-5 md:py-8 lg:py-10 flex flex-col justify-center"
        aria-label="Clinical Media Pinned Stage"
      >
        <Container size="wide">
          
          {/* Section Header with Live Stage Indicator */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-3 sm:mb-5 pb-2.5 sm:pb-3 border-b border-[#17354B]/10">
            <div className="space-y-0.5 sm:space-y-1 max-w-xl">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#367D78] font-semibold">
                Clinical Pedagogy &amp; Media Stage
              </span>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#17354B] font-editorial leading-tight">
                Our Teaching, Companion Book &amp; Seminars in Motion
              </h2>
            </div>

            {/* Stage Indicator Pills (Controlled via direct DOM refs without triggering React re-renders) */}
            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs shrink-0 overflow-x-auto pb-0.5 sm:pb-0">
              {STORIES.map((st, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    indicatorRefs.current[i] = el;
                  }}
                  className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl transition-all duration-300 font-semibold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                    i === 0
                      ? 'bg-[#17354B] text-white shadow-sm ring-2 ring-[#367D78]/30'
                      : 'bg-[#17354B]/5 text-[#5A6E7D]'
                  }`}
                >
                  <span
                    className={`indicator-dot w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      i === 0 ? 'bg-[#367D78]' : 'bg-[#5A6E7D]/40'
                    }`}
                  />
                  <span className="hidden sm:inline">{st.navLabel}</span>
                  <span className="sm:hidden">{st.indexLabel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Deck Stage: Sized to fit 100% within mobile and desktop viewports without cutoffs */}
          <div className="relative w-full h-[76dvh] min-h-[460px] max-h-[580px] md:h-[620px] md:max-h-[660px] overflow-hidden">
            {STORIES.map((story, i) => {
              const BadgeIcon = story.badgeIcon;
              const PointIcon = story.pointIcon;

              return (
                <div
                  key={i}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  style={{ willChange: 'transform, opacity', transform: 'translate3d(0, 0, 0)' }}
                  className={`absolute inset-0 w-full h-full rounded-3xl bg-white text-[#17354B] border border-[#17354B]/10 border-t-4 ${story.cardBorderTop} shadow-[0_20px_50px_-12px_rgba(23,53,75,0.15)] overflow-hidden`}
                >
                  <div className="relative w-full h-full flex flex-col justify-between md:flex-row md:items-stretch overflow-hidden">
                    
                    {/* Narrative Slot (Overlays video on mobile, left column on desktop) */}
                    <div className="relative z-10 w-full h-full md:w-[56%] lg:w-[58%] flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-8 pointer-events-auto bg-transparent md:bg-white">
                      
                      {/* Top Group: Badge & Clickable Mute Toggle */}
                      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold backdrop-blur-md md:backdrop-blur-none ${story.badgeBg}`}>
                            <BadgeIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                            {story.badge}
                          </span>

                          {/* Mobile Mute / Unmute Button (Replaces step count, 100% touch-responsive & clickable) */}
                          <button
                            type="button"
                            onClick={toggleMute}
                            className="flex md:hidden items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer z-30"
                            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                          >
                            {isMuted ? (
                              <>
                                <VolumeX className="w-3.5 h-3.5 text-white/90" />
                                <span className="text-[10px] font-mono font-semibold">Unmute</span>
                              </>
                            ) : (
                              <>
                                <Volume2 className="w-3.5 h-3.5 text-[#7DE2D1]" />
                                <span className="text-[10px] font-mono font-semibold text-[#7DE2D1]">Sound On</span>
                              </>
                            )}
                          </button>
                        </div>

                        <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tight font-editorial text-white md:text-[#17354B] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] md:drop-shadow-none [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)] md:[text-shadow:none]">
                          {story.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs md:text-sm text-white md:text-[#5A6E7D] leading-relaxed line-clamp-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] md:drop-shadow-none [text-shadow:_0_1px_8px_rgba(0,0,0,0.95)] md:[text-shadow:none]">
                          {story.subtitle}
                        </p>
                      </div>

                      {/* Desktop Middle Section (Hidden on mobile so the center video is completely clear & unobstructed) */}
                      <div className="hidden md:flex flex-col gap-2.5 lg:gap-3 my-auto">
                        {/* Desktop 4 Points Grid */}
                        <div className="grid grid-cols-2 gap-2.5">
                          {story.points.map((pt, index) => (
                            <div
                              key={index}
                              className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#17354B]/8 space-y-0.5"
                            >
                              <div className="flex items-center gap-1.5 text-xs font-bold text-[#17354B]">
                                <PointIcon className={`w-3.5 h-3.5 ${story.pointIconColor} shrink-0`} />
                                <span>{pt.title}</span>
                              </div>
                              <p className="text-[11px] text-[#5A6E7D] leading-relaxed pl-5 line-clamp-2">
                                {pt.desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Mission Box */}
                        <div className={`p-2.5 sm:p-3 rounded-xl ${story.missionBg} border ${story.missionBorder} flex items-start gap-2.5`}>
                          <ShieldCheck className={`w-4 h-4 ${story.missionIconColor} shrink-0 mt-0.5`} />
                          <p className="text-xs text-[#17354B] leading-relaxed font-medium">
                            {story.mission}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Group: Mobile Check Pills + Action Bar (Grouped strictly at the bottom) */}
                      <div className="space-y-2 md:space-y-0 pt-2 md:border-t md:border-[#17354B]/10">
                        {/* Mobile 2 Compact Check Pills: Positioned at bottom right above the action bar */}
                        <div className="flex md:hidden flex-wrap gap-1.5">
                          {story.points.slice(0, 2).map((pt, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[10px] text-white font-medium shadow-md"
                            >
                              <PointIcon className={`w-3 h-3 ${story.mobilePointIconColor} shrink-0`} />
                              {pt.title}
                            </span>
                          ))}
                        </div>

                        {/* Action Bar */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <span className="text-[10px] sm:text-xs font-mono text-white md:text-[#5A6E7D] drop-shadow md:drop-shadow-none">
                            {story.footerTag}
                          </span>
                          <Link
                            href={story.cta.href}
                            className="inline-flex items-center justify-center gap-2 py-2 px-4 sm:py-2.5 sm:px-5 rounded-xl bg-[#17354B] hover:bg-[#244C68] text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
                          >
                            <span>{story.cta.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                    </div>

                    {/* Single Universal Video Slot (Full-bleed backdrop on mobile, full-height right column on desktop) */}
                    <div className="absolute inset-0 w-full h-full z-0 md:relative md:inset-auto md:w-[44%] lg:w-[42%] md:h-full md:border-l md:border-[#17354B]/10 overflow-hidden bg-black">
                      <video
                        ref={(el) => {
                          videoRefs.current[i] = el;
                        }}
                        src={story.videoSrc}
                        poster={story.poster}
                        playsInline
                        loop
                        preload="metadata"
                        muted={isMuted}
                        className="w-full h-full object-cover object-center"
                      />
                      
                      {/* Desktop Unmute Button (Top-right of the video bezel) */}
                      <button
                        type="button"
                        onClick={toggleMute}
                        className="hidden md:flex absolute top-3.5 right-3.5 p-2 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-all shadow-md z-20 cursor-pointer"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#367D78]" />}
                      </button>

                      <div className="hidden md:block absolute bottom-3.5 left-3.5 px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md text-xs font-mono text-white/95 border border-white/15 z-20 shadow-md">
                        {story.desktopTeaserTag}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </Container>
      </section>
    </div>
  );
}
