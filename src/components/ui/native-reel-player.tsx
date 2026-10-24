'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/icons';
import { siteConfig } from '@/content/site-config';

interface NativeReelPlayerProps {
  videoSrc: string;
  posterSrc?: string;
  title: string;
  subtitle?: string;
  instagramUrl?: string;
  className?: string;
}

export function NativeReelPlayer({
  videoSrc,
  posterSrc,
  title,
  subtitle,
  instagramUrl = siteConfig.urls.instagram,
  className = '',
}: NativeReelPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt automatic playback
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch(() => {
          // Autoplay policy prevented playback until user interaction
          setIsPlaying(false);
        });
    }
  }, [videoSrc]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      className={`relative rounded-3xl overflow-hidden bg-black shadow-2xl shadow-[#17354B]/20 border border-[#17354B]/15 group cursor-pointer aspect-[9/16] max-h-[580px] w-full max-w-[360px] mx-auto ${className}`}
      onClick={togglePlay}
    >
      {/* HTML5 Native Video Loop (Absolute Inset to Prevent Layout Shift) */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
      />

      {/* Subtle Top & Bottom Gradient Scrims for Controls Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40 pointer-events-none" />

      {/* Top Floating Badge: Instagram & Title */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20 pointer-events-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono font-medium text-white border border-white/15">
          <InstagramIcon className="w-3.5 h-3.5 text-[#D96B60]" />
          @easy_medlearning
        </span>

        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label="View on Instagram"
            className="p-1.5 rounded-full bg-black/50 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Center Play/Pause Indicator (Shown when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-[#17354B]/90 text-white flex items-center justify-center shadow-xl border border-white/20">
            <Play className="w-7 h-7 ml-1 fill-white" />
          </div>
        </div>
      )}

      {/* Bottom Control Bar */}
      <div className="absolute bottom-4 inset-x-4 z-20 flex items-end justify-between pointer-events-auto">
        <div className="space-y-0.5 text-left max-w-[210px]">
          {subtitle && (
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#4A9E98]">
              {subtitle}
            </p>
          )}
          <h4 className="text-sm font-bold text-white leading-tight drop-shadow">
            {title}
          </h4>
        </div>

        {/* Audio Unmute / Mute Toggle Button */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-mono flex items-center gap-1.5 border border-white/25 transition-all shadow-lg active:scale-95"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-white/80" />
              <span>Unmute</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#4A9E98] animate-pulse" />
              <span className="text-[#4A9E98] font-bold">Sound On</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
