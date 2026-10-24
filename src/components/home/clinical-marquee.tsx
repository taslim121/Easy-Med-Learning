import React from 'react';

/**
 * Clinical Scope Marquee
 * Inspired by Vault Fintech's institutional compliance ticker.
 * Runs at a calm 40s rate showing core electrophysiology curriculum topics.
 */
export function ClinicalMarquee() {
  const topics = [
    'Conduction System Electrophysiology',
    'Hexaxial Axis Calculation',
    'AV Block Localization',
    'Acute Coronary Syndromes & STEMI',
    'Tachyarrhythmia Algorithms',
    'Bundle Branch Blocks',
    'Electrolyte Disturbances',
    'Emergency 12-Lead Interpretation',
    'Physical Companion Book (All-India Delivery)',
    'Hinglish Video Modules',
  ];

  return (
    <div
      aria-label="Clinical Curriculum Scope"
      className="w-full py-4 border-y border-[#17354B]/10 bg-[#FAF9F6] overflow-hidden select-none mask-marquee"
    >
      <div className="animate-marquee gap-8 items-center text-xs font-mono uppercase tracking-[0.2em] text-[#17354B]/80 font-medium">
        {[...topics, ...topics].map((topic, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span className="hover:text-[#17354B] transition-colors cursor-default">
              {topic}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#367D78]/50" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
