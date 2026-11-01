import type { Metadata } from 'next';
import { homeContent } from '@/content/home-content';
import { HomeHero } from '@/components/home/home-hero';
import { CourseShowcase } from '@/components/home/course-showcase';
import { FeaturesGrid } from '@/components/home/features-grid';
import { HomeContact } from '@/components/home/home-contact';

export const metadata: Metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CourseShowcase />
      <FeaturesGrid />
      <HomeContact />
    </>
  );
}
