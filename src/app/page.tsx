import type { Metadata } from 'next';
import { siteContent } from '@/content/site-content';
import { HomeHero } from '@/components/home/home-hero';
import { ClinicalMarquee } from '@/components/home/clinical-marquee';
import { LearningHighlights } from '@/components/home/learning-highlights';
import { WhyLearnEcg } from '@/components/home/why-learn-ecg';
import { CourseExperience } from '@/components/home/course-experience';
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
      <LearningHighlights />
      <WhyLearnEcg />
      <CourseExperience />
      <InstructorPreview />
    </>
  );
}
