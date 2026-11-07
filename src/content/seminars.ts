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
  felicitatedBy?: string;
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
  imageUrl: string;
  insideImageUrl?: string;
  youtubeVideos?: string[];
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
    imageUrl: '/images/seminars/bharti-vidyapeeth-cert-ceremony.webp',
    insideImageUrl: '/images/seminars/bharti-vidyapeeth-lecture-session.webp',
    youtubeVideos: ['43U6LpWF1MM', 'x30aZ85cU8M'],
    featured: true,
  },
  {
    id: 'kashmir-ecg-workshops',
    slug: 'kashmir-ecg-workshops',
    title: 'ECG Workshops in Kashmir | A Journey of Teaching & Learning',
    badge: 'ECG Workshops',
    institution: 'Kashmir Institute of Medical Sciences & Technology and Govt. Unani Medical College, Nawabagh, Ganderbal',
    eventDate: 'Kashmir',
    summary:
      'A memorable experience of sharing knowledge, simplifying ECG, and connecting with future healthcare professionals in the beautiful valley of Kashmir!',
    paragraphs: [
      'A memorable experience of sharing knowledge, simplifying ECG, and connecting with future healthcare professionals in the beautiful valley of Kashmir!',
      'We had the wonderful opportunity to conduct ECG Workshops for medical students at Kashmir Institute of Medical Sciences and Technology and Govt. Unani Medical College, Nawabagh, Ganderbal.',
      'These workshops were all about making ECG interpretation simple, practical, and interesting. Interacting with students, explaining complex concepts, and seeing their enthusiasm towards learning ECG made this experience truly special.',
    ],
    mission:
      'Our course is built around a simple mission — to make ECG easy for every medical student. Our goal is not just to teach ECG, but to help every student develop the confidence to interpret ECGs independently.',
    differentiators: [
      {
        title: 'Self-designed images and diagrams',
        description:
          'Simplify complex ECG concepts and are uniquely created by us.',
      },
      {
        title: 'Experience-based teaching',
        description:
          'With step-by-step explanations.',
      },
      {
        title: 'A concept-oriented approach',
        description:
          'Helps students understand ECG rather than simply memorise it.',
      },
    ],
    conclusion:
      'From classrooms to workshops, we are taking one step closer to our mission.',
    closingCall:
      'This is just the beginning. The journey of making ECG simple and accessible continues!',
    imageUrl: '/images/seminars/kashmir-ecg-workshops.webp',
    insideImageUrl: '',
    youtubeVideos: [],
    featured: false,
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
