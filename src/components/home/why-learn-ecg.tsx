import React from 'react';
import { Lightbulb, Stethoscope, Compass, MessageSquare } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/motion/reveal';

export function WhyLearnEcg() {
  const content = siteContent.home.whyLearn;

  const icons = [
    <Lightbulb key="0" className="w-6 h-6 text-[#367D78]" />,
    <Stethoscope key="1" className="w-6 h-6 text-[#17354B]" />,
    <Compass key="2" className="w-6 h-6 text-[#D96B60]" />,
    <MessageSquare key="3" className="w-6 h-6 text-[#367D78]" />,
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F6F4EE]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Pedagogical Philosophy"
          title={content.title}
          description={content.intro}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12">
          {content.points.map((point, index) => (
            <Reveal key={point.title} direction="up" delay={index * 0.1}>
              <div className="p-8 rounded-2xl bg-white border border-[#17354B]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F6F4EE] border border-[#17354B]/5 shrink-0">
                    {icons[index]}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#17354B]">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
