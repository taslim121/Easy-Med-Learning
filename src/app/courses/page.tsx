import type { Metadata } from 'next';
import { coursesPageContent } from '@/content/courses-content';
import { CoursesHero } from '@/components/courses/courses-hero';
import { HandbookShowcase } from '@/components/courses/handbook-showcase';
import { CourseSyllabus } from '@/components/courses/course-syllabus';

export const metadata: Metadata = {
  title: coursesPageContent.meta.title,
  description: coursesPageContent.meta.description,
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <CoursesHero />
      <HandbookShowcase />
      <CourseSyllabus />
    </main>
  );
}
