'use client';

import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Layers, X } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { coursesPageContent } from '@/content/courses-content';
import { BlurFade } from '@/components/magicui/blur-fade';
import { MagicCard } from '@/components/magicui/magic-card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function CourseSyllabus() {
  const { syllabus } = coursesPageContent;
  const [searchQuery, setSearchQuery] = useState('');

  // Filter chapters based on search query only (strictly 1 to 52, zero artificial categories)
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
      className="py-16 sm:py-20 lg:py-24 bg-[#F4F6F8] border-b border-[#17354B]/10 relative scroll-mt-20"
    >
      <Container>
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
                placeholder='Search 52 chapters... e.g. "Heart Blocks", "CAD", "T Wave", "Vectors"'
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
              <span>Chapters 01 – 52 in Sequential Order</span>
              <span>
                Showing <strong className="text-[#17354B]">{filteredChapters.length}</strong> of {syllabus.totalChapters}
              </span>
            </div>
          </div>
        </BlurFade>

        {/* Shadcn ScrollArea Container for 52 Chapters */}
        <div className="max-w-4xl mx-auto">
          <div className="p-3 sm:p-5 rounded-2xl bg-white border border-[#17354B]/15 shadow-sm">
            {filteredChapters.length === 0 ? (
              <div className="text-center py-12 px-4">
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
              <ScrollArea className="h-[460px] sm:h-[520px] pr-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pb-2">
                  {filteredChapters.map((chapter) => {
                    const formattedNum =
                      chapter.number < 10 ? `0${chapter.number}` : `${chapter.number}`;

                    return (
                      <MagicCard
                        key={chapter.number}
                        gradientColor="rgba(45, 212, 191, 0.08)"
                        className="p-3 rounded-xl border border-[#17354B]/10 bg-[#FAF9F6] hover:bg-white shadow-xs hover:border-[#2DD4BF]/40 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {/* Monospace Serial Badge */}
                          <span className="w-8 h-8 rounded-lg bg-[#17354B]/5 text-[#17354B] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-[#17354B]/10">
                            {formattedNum}
                          </span>

                          {/* Chapter Title */}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-semibold text-[#17354B] truncate">
                              {chapter.title}
                            </p>
                            <span className="text-[10px] font-mono text-[#5A6E7D]">
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
        </div>
      </Container>
    </section>
  );
}
