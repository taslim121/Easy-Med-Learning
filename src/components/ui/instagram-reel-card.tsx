'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ExternalLink, X, BookOpen } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

interface ReelData {
  id: string;
  url: string;
  embedUrl: string;
  title: string;
  subtitle?: string;
  description?: string;
  thumbnail?: string;
}

interface InstagramReelCardProps {
  reel: ReelData;
  className?: string;
}

export function InstagramReelCard({ reel, className = '' }: InstagramReelCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`rounded-3xl bg-[#17354B] border border-white/15 shadow-2xl overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* 9:16 Vertical Video / Poster Container */}
      <div className="relative aspect-[9/16] w-full max-h-[520px] bg-black overflow-hidden flex items-center justify-center">
        {isPlaying ? (
          <div className="relative w-full h-full flex flex-col">
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={reel.embedUrl}
              title={reel.title}
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col justify-between p-6">
            {/* Reel Thumbnail Poster */}
            {reel.thumbnail ? (
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover object-center brightness-90 hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-[#17354B] to-[#0F2332]" />
            )}

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2332] via-[#0F2332]/30 to-[#0F2332]/60 pointer-events-none" />

            {/* Top Reel Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                <InstagramIcon className="w-3.5 h-3.5 text-[#D96B60]" />
                Book Reveal Reel
              </span>
              <span className="text-[11px] font-mono text-white/70 bg-black/40 px-2 py-0.5 rounded">
                @easy_medlearning
              </span>
            </div>

            {/* Center Play Button */}
            <div className="relative z-10 my-auto text-center py-4">
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={`Play ${reel.title}`}
                className="w-16 h-16 rounded-full bg-[#D96B60] hover:bg-[#BD5349] text-white flex items-center justify-center mx-auto shadow-2xl transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-white cursor-pointer group"
              >
                <Play className="w-7 h-7 ml-1 fill-white text-white" />
              </button>
              <p className="text-xs font-medium text-white/90 mt-3 drop-shadow">
                Click to Watch Book Reveal
              </p>
            </div>

            {/* Bottom Title & Author */}
            <div className="relative z-10 space-y-1">
              {reel.subtitle && (
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#4A9E98]">
                  {reel.subtitle}
                </p>
              )}
              <h4 className="text-base font-bold text-white leading-snug drop-shadow-sm">
                {reel.title}
              </h4>
              <p className="text-xs text-white/75">By Dr. Wasim Adil Khan</p>
            </div>
          </div>
        )}
      </div>

      {/* External Action Bar */}
      <div className="p-4 bg-[#0F2332] border-t border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-white/70">
          <BookOpen className="w-4 h-4 text-[#367D78]" />
          <span>Printed Physical Copy</span>
        </div>

        <a
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A9E98] hover:text-white transition-colors"
        >
          <span>Instagram</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
