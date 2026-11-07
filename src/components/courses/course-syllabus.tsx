'use client';

import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Layers, X } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { coursesPageContent } from '@/content/courses-content';
import { BlurFade } from '@/components/magicui/blur-fade';
import { MagicCard } from '@/components/magicui/magic-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Floating3DParticles } from '@/components/magicui/floating-3d-particles';

export function CourseSyllabus() {
  const { syllabus } = coursesPageContent;
  const [searchQuery, setSearchQuery] = useState('');

  // Filter chapters based on search query only (strictly 1 to 51, zero artificial categories)
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) {
      return syllabus.chapters;
    }

    const q = searchQuery.toLowerCase().trim();
    return syllabus.chapters.filter(
      (ch) =>
        ch.title.toLowerCase().includes(q) ||
        ch.number.toString().includes(q) ||
        `chapter ${ch.number}`.includes(q)
    );
  }, [syllabus.chapters, searchQuery]);

  return (
    <section
      id="syllabus"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF9F6] via-[#F4F6F8] to-[#FAF9F6] border-b border-[#17354B]/10 relative overflow-hidden scroll-mt-20"
    >
      {/* Floating 3D Particles Ambient Backdrop - High Visibility & Deep 3D Motion */}
      <Floating3DParticles
        className="absolute inset-0 pointer-events-none"
        quantity={700}
        color="#2DD4BF"
        size={6}
        opacity={0.52}
        drift={0.45}
        depth={0.8}
      />

      {/* Subtle Ambient Radial Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-[#2DD4BF]/8 blur-[140px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8 sm:mb-10">
          <BlurFade delay={0.05} yOffset={8}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17354B]/5 text-[#17354B] text-xs font-mono font-semibold tracking-wider uppercase border border-[#17354B]/15">
              <Layers className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>{syllabus.badge}</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} yOffset={10}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17354B] tracking-tight">
              {syllabus.title}
            </h2>
          </BlurFade>

          <BlurFade delay={0.15} yOffset={10}>
            <p className="text-sm sm:text-base text-[#5A6E7D]">
              {syllabus.subtitle}
            </p>
          </BlurFade>
        </div>

        {/* Search Bar Container */}
        <BlurFade delay={0.2} yOffset={10}>
          <div className="max-w-4xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6E7D]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${syllabus.totalChapters} chapters... e.g. "Heart Blocks", "CAD", "T Wave", "Vectors"`}
                className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white border border-[#17354B]/15 text-[#17354B] placeholder:text-[#5A6E7D]/60 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/50 focus:border-[#2DD4BF] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-md text-[#5A6E7D] hover:text-[#17354B] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 px-1 text-xs font-mono text-[#5A6E7D]">
              <span>Chapters 01 – {syllabus.totalChapters < 10 ? `0${syllabus.totalChapters}` : syllabus.totalChapters} in Sequential Order</span>
              <span>
                Showing <strong className="text-[#17354B]">{filteredChapters.length}</strong> of {syllabus.totalChapters}
              </span>
            </div>
          </div>
        </BlurFade>

        {/* Shadcn ScrollArea Container for 51 Chapters (Open Floating Cards Layout) */}
        <div className="max-w-4xl mx-auto">
          {filteredChapters.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-2xl bg-white border border-[#17354B]/15 shadow-sm">
              <BookOpen className="w-8 h-8 text-[#5A6E7D] mx-auto mb-2 opacity-50" />
              <p className="text-sm font-semibold text-[#17354B]">
                No chapters match &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-xs text-[#5A6E7D] mt-1">
                Try searching for terms like &ldquo;Hypertrophy&rdquo;, &ldquo;Ischemia&rdquo;, or &ldquo;Vectors&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-1.5 rounded-lg bg-[#17354B] text-white text-xs font-mono font-semibold"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <ScrollArea className="h-[480px] sm:h-[540px] pr-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-3">
                {filteredChapters.map((chapter) => {
                  const formattedNum =
                    chapter.number < 10 ? `0${chapter.number}` : `${chapter.number}`;

                  return (
                    <MagicCard
                      key={chapter.number}
                      gradientColor="rgba(45, 212, 191, 0.14)"
                      className="p-3.5 sm:p-4 rounded-xl border border-[#17354B]/12 bg-white/95 hover:bg-white shadow-xs hover:border-[#2DD4BF]/50 hover:shadow-md transition-all duration-200 min-h-[68px] flex flex-col justify-center"
                    >
                      <div className="flex items-start gap-3">
                        {/* Monospace Serial Badge */}
                        <span className="size-8 rounded-lg bg-[#17354B]/5 text-[#17354B] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-[#17354B]/10 mt-0.5">
                          {formattedNum}
                        </span>

                        {/* Chapter Title & Number (No truncation, full visibility) */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-[13px] font-semibold text-[#17354B] leading-snug break-words">
                            {chapter.title}
                          </p>
                          <span className="text-[10px] font-mono text-[#5A6E7D] block mt-0.5">
                            Chapter {formattedNum}
                          </span>
                        </div>
                      </div>
                    </MagicCard>
                  );
                })}
              </div>
            </ScrollArea>
          )}
        </div>
      </Container>
    </section>
  );
}