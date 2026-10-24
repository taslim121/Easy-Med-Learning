import React from 'react';
import { BookOpen, Languages, Layers, ShieldCheck } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';

export function LearningHighlights() {
  const highlights = siteContent.home.highlights;

  const iconMap: Record<string, React.ReactNode> = {
    'medical-focused': <ShieldCheck className="w-6 h-6 text-[#367D78]" />,
    'book-video': <BookOpen className="w-6 h-6 text-[#17354B]" />,
    hinglish: <Languages className="w-6 h-6 text-[#D96B60]" />,
    'practical-cases': <Layers className="w-6 h-6 text-[#367D78]" />,
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-[#17354B]/10">
      <Container size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, idx) => (
            <Reveal key={item.id} direction="up" delay={idx * 0.1}>
              <div className="flex flex-col p-6 rounded-xl bg-[#F6F4EE]/60 border border-[#17354B]/10 hover:border-[#367D78]/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4 border border-[#17354B]/5">
                  {iconMap[item.id]}
                </div>
                <h3 className="text-base font-bold text-[#17354B] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5A6E7D] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
