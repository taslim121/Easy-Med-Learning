import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Stethoscope } from 'lucide-react';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 sm:py-32 bg-[#FAF9F6]">
      <Container size="narrow" className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17354B]/5 border border-[#17354B]/10 text-xs font-mono text-[#5A6E7D]">
          <Stethoscope className="w-3.5 h-3.5 text-[#367D78]" />
          <span>Error 404</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17354B] tracking-tight">
          Page Not Found
        </h1>

        <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed max-w-md mx-auto">
          The clinical page or resource you are looking for does not exist or has been relocated.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#17354B] text-white hover:bg-[#244C68] transition-colors font-bold text-sm shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
