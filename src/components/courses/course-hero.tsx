import React from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, ExternalLink, Play } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/motion/reveal';
import { NativeReelPlayer } from '@/components/ui/native-reel-player';

export function CourseHero() {
  const content = siteContent.courses.hero;
  const bookReel = siteConfig.reels.bookReveal;
  const hasCourseUrl = Boolean(siteConfig.urls.learnystCourse);
  const hasSampleLesson = Boolean(siteConfig.urls.sampleLesson);

  return (
    <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 bg-clinical-grid border-b border-[#17354B]/10">
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
              Courses
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Course Headline & Offer */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="down">
              <div className="flex flex-wrap items-center gap-2">
                {content.tags.map((tag) => (
                  <Badge key={tag} variant="teal">
                    {tag}
                  </Badge>
                ))}
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

            {/* Launch Status Card */}
            <Reveal direction="up" delay={0.25}>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 text-amber-900">
                <Calendar className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold">Course Status:</span> {siteConfig.course.status}.{' '}
                  <span className="font-bold">Tentative launch:</span> {siteConfig.course.tentativeLaunchDate}.
                </div>
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {hasCourseUrl ? (
                  <Button
                    href={siteConfig.urls.learnystCourse}
                    isExternal
                    variant="primary"
                    size="lg"
                  >
                    <span>{content.primaryCta}</span>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                  </Button>
                ) : (
                  <div className="inline-flex items-center px-4 py-3 rounded-lg bg-[#17354B]/5 border border-[#17354B]/15 text-[#17354B] text-sm font-medium">
                    <span>{content.primaryCta} — Details coming soon</span>
                  </div>
                )}

                {hasSampleLesson && (
                  <Button
                    href="#sample-lessons"
                    variant="outline"
                    size="lg"
                  >
                    <Play className="w-4 h-4 mr-1 text-[#367D78]" />
                    <span>{content.secondaryCta}</span>
                  </Button>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Physical Book Reveal Reel */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <div className="relative mx-auto max-w-sm">
                <NativeReelPlayer
                  videoSrc="/videos/book-reveal.mp4"
                  posterSrc="/images/instagram_reel_thumb.jpg"
                  title={bookReel.title}
                  subtitle={bookReel.subtitle}
                  instagramUrl={bookReel.url}
                />

                <div className="mt-3 text-center space-y-1">
                  <p className="text-xs font-semibold text-[#17354B]">
                    Absolute Guide to ECG Interpretation
                  </p>
                  <p className="text-[11px] font-mono text-[#5A6E7D]">
                    Physical companion book delivered to your postal address (no PDF)
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
