import type { Metadata } from 'next';
import { siteContent } from '@/content/site-content';
import { HomeHero } from '@/components/home/home-hero';
import { ClinicalMarquee } from '@/components/home/clinical-marquee';
import { ClinicalMediaTheater } from '@/components/home/clinical-media-theater';
import { LearningHighlights } from '@/components/home/learning-highlights';
import { WhyLearnEcg } from '@/components/home/why-learn-ecg';
import { InstructorPreview } from '@/components/home/instructor-preview';

export const metadata: Metadata = {
  title: siteContent.home.meta.title,
  description: siteContent.home.meta.description,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ClinicalMarquee />
      <ClinicalMediaTheater />
      <LearningHighlights />
      <WhyLearnEcg />
      <InstructorPreview />
    </>
  );
}
