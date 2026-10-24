import React from 'react';

/**
 * Vault-style Architectural Page Rails
 * Two 1px vertical hairlines that mark the centered content column across the site,
 * providing structural discipline and eliminating the need for boxy cards.
 */
export function PageRails({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen bg-[#FAF9F6] text-[#17354B]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full h-full flex justify-between border-x border-[#17354B]/[0.06]" />
      </div>
      <div className="relative z-20 flex flex-col min-h-screen">{children}</div>
    </div>
  );
}
