import type { Metadata } from 'next';
import { ourInstructorContent } from '@/content/our-instructor-content';
import { AboutHero } from '@/components/about/about-hero';
import { InstructorStory } from '@/components/about/instructor-story';
import { TeachingApproach } from '@/components/about/teaching-approach';
import { Recognition } from '@/components/about/recognition';

export const metadata: Metadata = {
  title: ourInstructorContent.meta.title,
  description: ourInstructorContent.meta.description,
};

export default function OurInstructorPage() {
  return (
    <>
      <AboutHero />
      <InstructorStory />
      <TeachingApproach />
      <Recognition />
    </>
  );
}