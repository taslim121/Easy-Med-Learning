/**
 * EasyMedLearning - Institutional Seminars & Milestones
 * Authentic Content Source of Truth - Exactly as provided by founder
 * Zero exaggeration, zero extra images, native video delivery.
 */

export interface SeminarPost {
  id: string;
  slug: string;
  title: string;
  badge: string;
  institution: string;
  felicitatedBy: string;
  eventDate: string;
  summary: string;
  paragraphs: string[];
  mission: string;
  differentiators: Array<{
    title: string;
    description: string;
  }>;
  conclusion: string;
  closingCall: string;
  videoUrl: string;
  featured: boolean;
}

export const seminarsData: SeminarPost[] = [
  {
    id: 'bharti-vidyapeeth-ecg-masterclass',
    slug: 'bharti-vidyapeeth-ecg-masterclass',
    title: 'A Proud Milestone in Our ECG Teaching Journey!',
    badge: 'Guest Lecture & Felicitation',
    institution: 'Bharti Vidyapeeth Homoeopathic Medical College',
    felicitatedBy: 'Prof. Dr. Anita S. Patil, Principal',
    eventDate: 'October 2026',
    summary:
      'I had the privilege of delivering a Guest Lecture on ECG Interpretation at Bharti Vidyapeeth Homoeopathic Medical College, where I taught students how to understand ECG concepts in a simple and easy-to-follow way.',
    paragraphs: [
      'I had the privilege of delivering a Guest Lecture on ECG Interpretation at Bharti Vidyapeeth Homoeopathic Medical College, where I taught students how to understand ECG concepts in a simple and easy-to-follow way.',
      'I’m truly honoured to have been felicitated by the Principal, Prof. Dr. Anita S. Patil, in recognition of this session. We also conducted a small certificate distribution ceremony for the students who attended the ECG lecture. Seeing students appreciate our teaching and connect with the concepts made this moment even more special! ❤️',
    ],
    mission:
      'Our mission is simple: To make ECG easy to understand and help every medical student become confident in ECG interpretation.',
    differentiators: [
      {
        title: 'Self-designed diagrams and illustrations',
        description:
          'Created by us to simplify complex ECG concepts. These are our original educational visuals, designed specifically for our teaching approach and not available elsewhere on the internet.',
      },
      {
        title: 'Experience-based teaching',
        description:
          'Focuses on building concepts step by step, from the basics of the heart to confident ECG interpretation.',
      },
      {
        title: 'Simple explanations',
        description:
          'Explanations that make even difficult ECG topics easier to understand.',
      },
    ],
    conclusion:
      'This is more than just an ECG course. It’s our effort to make ECG learning accessible, practical, and less intimidating for every medical student.',
    closingCall:
      'We are just getting started. Join us on this journey to master ECG, one concept at a time!',
    videoUrl: '/videos/seminars/bharti-vidyapeeth-lecture.mp4',
    featured: true,
  },
];

export function getAllSeminars(): SeminarPost[] {
  return seminarsData;
}

export function getFeaturedSeminar(): SeminarPost {
  return seminarsData[0];
}

export function getSeminarBySlug(slug: string): SeminarPost | undefined {
  return seminarsData.find((s) => s.slug === slug);
}
