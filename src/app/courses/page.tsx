import type { Metadata } from 'next';
import { siteContent } from '@/content/site-content';
import { CourseHero } from '@/components/courses/course-hero';
import { CourseLaunchSpotlight } from '@/components/courses/course-launch-spotlight';
import { CourseOverview } from '@/components/courses/course-overview';
import { LearningOutcomes } from '@/components/courses/learning-outcomes';
import { AudienceList } from '@/components/courses/audience-list';
import { IncludedPlanned } from '@/components/courses/included-planned';
import { SampleLesson } from '@/components/courses/sample-lesson';
import { FutureSpecialtiesRoadmap } from '@/components/courses/future-specialties-roadmap';

export const metadata: Metadata = {
  title: siteContent.courses.meta.title,
  description: siteContent.courses.meta.description,
};

export default function CoursesPage() {
  return (
    <>
      <CourseHero />
      <CourseLaunchSpotlight />
      <CourseOverview />
      <LearningOutcomes />
      <AudienceList />
      <IncludedPlanned />
      <SampleLesson />
      <FutureSpecialtiesRoadmap />
    </>
  );
}
