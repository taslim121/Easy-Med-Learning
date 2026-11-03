import type { Metadata } from 'next';
import { communityPageContent } from '@/content/community-content';
import { CommunityHero } from '@/components/community/community-hero';
import { TwoWaysToTakePart } from '@/components/community/two-ways-to-take-part';
import { CommunityCapabilities } from '@/components/community/community-capabilities';
import { CommunityHowItWorks } from '@/components/community/community-how-it-works';
import { PatientPrivacySafeguards } from '@/components/community/patient-privacy-safeguards';
import { SampleQuestions } from '@/components/community/sample-questions';
import { FounderAndStandards } from '@/components/community/founder-and-standards';
import { CommunityFaq } from '@/components/community/community-faq';
import { CommunityApplicationForm } from '@/components/community/community-application-form';

export const metadata: Metadata = {
  title: communityPageContent.meta.title,
  description: communityPageContent.meta.description,
};

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CommunityHero />
      <TwoWaysToTakePart />
      <CommunityCapabilities />
      <CommunityHowItWorks />
      <PatientPrivacySafeguards />
      <SampleQuestions />
      <FounderAndStandards />
      <CommunityFaq />
      <CommunityApplicationForm />
    </div>
  );
}
