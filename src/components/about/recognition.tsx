import React from 'react';
import { Award, BookCheck, ExternalLink, AlertCircle } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { siteConfig } from '@/content/site-config';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

export function Recognition() {
  const content = siteContent.about.recognition;
  const cta = siteContent.about.cta;
  const hasCourseUrl = Boolean(siteConfig.urls.learnystCourse);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#17354B]/10">
      <Container size="wide">
        <SectionHeading
          eyebrow="Credentials &amp; Service"
          title={content.title}
          description="Authoring reference material and serving on the frontline of public health administration."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {/* Item 1: Book Authorship */}
          <Reveal direction="up" delay={0.1}>
            <div className="h-full p-8 rounded-2xl bg-[#F6F4EE] border border-[#17354B]/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#367D78] mb-4">
                  <BookCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#17354B] mb-2">
                  {content.items[0].title}
                </h3>
                <p className="text-sm text-[#5A6E7D] leading-relaxed">
                  {content.items[0].description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#17354B]/10 text-xs font-medium text-[#367D78]">
                Delivered in print with the course
              </div>
            </div>
          </Reveal>

          {/* Item 2: Corona Warrior Recognition */}
          <Reveal direction="up" delay={0.2}>
            <div className="h-full p-8 rounded-2xl bg-[#F6F4EE] border border-[#17354B]/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#D96B60] mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#17354B] mb-2">
                  {content.items[1].title}
                </h3>
                <p className="text-sm text-[#5A6E7D] leading-relaxed">
                  {content.items[1].description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#17354B]/10 flex items-center gap-1.5 text-xs text-[#5A6E7D]">
                <AlertCircle className="w-3.5 h-3.5 text-[#D96B60] shrink-0" />
                <span>Awarding body &amp; year pending founder confirmation</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Modest Course CTA */}
        <div className="mt-16 text-center">
          <Reveal direction="up" delay={0.3}>
            <div className="p-8 rounded-2xl bg-[#17354B] text-white max-w-2xl mx-auto shadow-lg space-y-4">
              <h3 className="text-xl font-bold">{cta.title}</h3>
              <div>
                {hasCourseUrl ? (
                  <Button
                    href={siteConfig.urls.learnystCourse}
                    isExternal
                    variant="coral"
                    size="md"
                  >
                    <span>{cta.buttonText}</span>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                  </Button>
                ) : (
                  <div className="inline-block text-xs font-medium text-white/70 bg-white/10 px-4 py-2 rounded-lg">
                    {siteContent.header.primaryCtaPendingText}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
