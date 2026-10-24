import React from 'react';
import { Play, Video, ExternalLink, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

export function SampleLesson() {
  const content = siteContent.courses.sampleLesson;
  const hasSampleLesson = Boolean(siteConfig.urls.sampleLesson);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#17354B]/10">
      <Container size="wide">
        <Reveal direction="up">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#17354B] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4A9E98]">
                  Lecture Preview
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {content.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {content.text}
                </p>
                
                <div className="pt-2">
                  {hasSampleLesson ? (
                    <Button
                      href={siteConfig.urls.sampleLesson}
                      isExternal
                      variant="coral"
                      size="md"
                    >
                      <Play className="w-4 h-4 mr-1 text-white" />
                      <span>{content.actionLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                    </Button>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 text-xs text-white/70 border border-white/15">
                      <AlertCircle className="w-4 h-4 text-[#4A9E98]" />
                      <span>{content.notice}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Player Placeholder Graphic */}
              <div className="md:col-span-4">
                <div className="aspect-video rounded-xl bg-white/10 border border-white/20 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2 shadow-inner">
                    <Video className="w-6 h-6 text-[#4A9E98]" />
                  </div>
                  <span className="text-xs font-medium text-white/90">Clinical Module Preview</span>
                  <span className="text-[10px] text-white/50 mt-1">Hinglish Audio &bull; High Definition</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
