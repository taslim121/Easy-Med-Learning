import type { Metadata } from 'next';
import { siteContent } from '@/content/site-content';
import { AboutHero } from '@/components/about/about-hero';
import { InstructorStory } from '@/components/about/instructor-story';
import { TeachingApproach } from '@/components/about/teaching-approach';
import { Recognition } from '@/components/about/recognition';

export const metadata: Metadata = {
  title: siteContent.about.meta.title,
  description: siteContent.about.meta.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <InstructorStory />
      <TeachingApproach />
      <Recognition />
    </>
  );
}
