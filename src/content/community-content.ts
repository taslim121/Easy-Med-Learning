/**
 * ============================================================================
 * EASYMEDLEARNING — COMMUNITY CONTENT SOURCE OF TRUTH
 * ============================================================================
 * Derived strictly and completely from the 8-page specification PDF:
 * "EasyMedLearning Community Page" (/Users/taslim/Downloads/community page.pdf)
 * ============================================================================
 */

export interface CommunityFeature {
  status: 'launch' | 'planned';
  statusBadge: string;
  title: string;
  description: string;
}

export interface CommunityFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CommunityContent {
  meta: {
    title: string;
    description: string;
  };
  breadcrumb: {
    home: string;
    current: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trustNote: string;
    trustNoteConfirmation: string;
    networkNodes: Array<{
      id: string;
      label: string;
      role: string;
      isPrimary?: boolean;
    }>;
  };
  twoWaysToTakePart: {
    eyebrow: string;
    title: string;
    doctors: {
      title: string;
      audienceTag: string;
      points: string[];
    };
    students: {
      title: string;
      audienceTag: string;
      points: string[];
    };
    footnote: string;
    footnoteConfirmation: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    items: CommunityFeature[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  privacyRules: {
    eyebrow: string;
    title: string;
    description: string;
    rules: string[];
    enforcementNotice: string;
    guidelinesLinkText: string;
  };
  sampleQuestions: {
    eyebrow: string;
    title: string;
    sublabel: string;
    questions: string[];
  };
  founder: {
    eyebrow: string;
    title: string;
    bio: string;
    optionalQuoteNote: string;
    ctaText: string;
    ctaHref: string;
    standards: Array<{
      title: string;
      description: string;
      confirmationNote?: string;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: CommunityFaqItem[];
  };
  form: {
    title: string;
    subtitle: string;
    fields: {
      fullName: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      role: {
        label: string;
        placeholder: string;
        options: string[];
      };
      institution: { label: string; placeholder: string };
      specialty: { label: string; placeholder: string };
      goals: { label: string; placeholder: string };
    };
    checkboxes: {
      guidelines: string;
      privacy: string;
      updates: string;
    };
    submitButton: string;
    successMessage: {
      title: string;
      description: string;
    };
  };
}

export const communityPageContent: CommunityContent = {
  meta: {
    title: 'EasyMedLearning Community | Learn, Connect and Grow With Medical Professionals',
    description:
      'A professional medical network where doctors discuss clinical questions with colleagues and medical students get guidance from people in practice. Membership by application.',
  },
  breadcrumb: {
    home: 'Home',
    current: 'Community',
  },
  hero: {
    eyebrow: 'EasyMedLearning Community',
    title: 'Learn, Connect and Grow With Medical Professionals',
    description:
      'A professional network where doctors discuss clinical questions with colleagues and medical students get guidance from people already in practice. Membership is by application.',
    primaryCta: 'Apply to Join',
    secondaryCta: 'See How It Works',
    trustNote: 'Founded by Dr. Wasim Adil Khan . Every application is reviewed.',
    trustNoteConfirmation: '',
    networkNodes: [
      { id: 'doctor', label: 'Doctor', role: 'Practising Physician', isPrimary: true },
      { id: 'student', label: 'Student', role: 'Medical Student' },
      { id: 'mentor', label: 'Mentor', role: 'Senior Consultant' },
      { id: 'intern', label: 'Intern', role: 'Clinical Intern' },
      { id: 'nurse', label: 'Nurse', role: 'Healthcare Professional' },
    ],
  },
  twoWaysToTakePart: {
    eyebrow: 'Two Audiences, One Network',
    title: 'One community, two ways to take part',
    doctors: {
      title: 'For doctors and practising professionals',
      audienceTag: 'Physicians & Specialists',
      points: [
        'Discuss clinical questions with colleagues across specialties',
        'Ask for a second opinion on a de-identified case',
        'Share what you have learned in practice',
        'Mentor the next generation of learners',
      ],
    },
    students: {
      title: 'For medical students and early learners',
      audienceTag: 'Students & Interns',
      points: [
        'Ask practising professionals for guidance',
        'See how Physicians reason through real, de-identified cases',
        'Get study and career advice',
        'Meet mentors beyond your own college',
      ],
    },
    footnote: 'Nurses, paramedics, physiotherapists and pharmacists are welcome too.',
    footnoteConfirmation: '',
  },
  capabilities: {
    eyebrow: 'Platform Capabilities',
    title: 'What you can do here',
    items: [
      {
        status: 'launch',
        statusBadge: 'At launch',
        title: 'Case discussions',
        description:
          'Post a de-identified clinical question and hear how colleagues would approach it.',
      },
      {
        status: 'launch',
        statusBadge: 'At launch',
        title: 'Ask a professional',
        description: 'Students post a question and practising professionals reply.',
      },
      {
        status: 'planned',
        statusBadge: 'Planned',
        title: 'Mentorship',
        description: 'Match with a mentor for guidance on studies and career.',
      },
      {
        status: 'planned',
        statusBadge: 'Planned',
        title: 'Specialty circles',
        description: 'Smaller groups for cardiology, emergency medicine, internal medicine and more.',
      },
      {
        status: 'planned',
        statusBadge: 'Planned',
        title: 'Seminars and live sessions',
        description: 'Join teaching sessions with Dr. Wasim and guest speakers.',
      },
      {
        status: 'launch',
        statusBadge: 'At launch',
        title: 'Learning resources',
        description: 'Follow ECG tips, case explainers and course updates.',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'Application & Onboarding',
    title: 'HOW IT WORKS',
    steps: [
      {
        number: '1',
        title: 'Apply',
        description: 'Fill in a short form. It takes about two minutes.',
      },
      {
        number: '2',
        title: 'Get reviewed',
        description:
          'We check your registration or student details. We aim to reply within 2–3 working days.',
      },
      {
        number: '3',
        title: 'Join',
        description: 'Once approved, you receive your access link and a welcome guide.',
      },
      {
        number: '4',
        title: 'Take part',
        description: 'Read the guidelines, introduce yourself and start learning with others.',
      },
    ],
  },
  privacyRules: {
    eyebrow: 'Clinical Governance & Medical Ethics',
    title: 'Patient privacy comes first',
    description:
      'Medicine runs on trust. Every member helps protect it. These rules apply to every discussion:',
    rules: [
      "Never share a patient's name, phone number, address, ID numbers, hospital number or face photo.",
      'Remove or hide identifying details from reports, scans and ECGs before you post.',
      'Share only what you need to ask the question.',
      'Get the patient\'s consent where your professional rules require it.',
      'Use the community for learning and peer support. It does not replace examining a patient, and it is not for emergencies.',
      'Do not use the community to attract patients or advertise a practice.',
    ],
    enforcementNotice: 'Members who break these rules are removed.',
    guidelinesLinkText: '',
  },
  sampleQuestions: {
    eyebrow: 'Discussion Preview',
    title: 'Questions students can ask',
    sublabel: 'Examples only. These are not real posts.',
    questions: [
      '“How do I decide what to check first when an ECG looks abnormal?”',
      '“What should I focus on during my internship?”',
      '“How do I prepare for a residency interview?”',
    ],
  },
  founder: {
    eyebrow: 'Founder Vision',
    title: 'Built by a practising Physician',
    bio: 'Dr. Wasim Adil Khan has 15 years of clinical experience and has taught ECG in seminars across India for five years. He started EasyMedLearning to make medical learning simple, and he wants this community to be where students find guidance and colleagues find support.',
    optionalQuoteNote: '',
    ctaText: "Read Dr. Wasim's Story",
    ctaHref: '/our-instructor',
    standards: [
      {
        title: 'Reviewed members',
        description: 'Every application is checked.',
      },
      {
        title: 'Moderated discussions',
        description: 'Admins remove unsafe or off-topic posts.',
      },
      {
        title: 'No promotion',
        description: 'No advertising and no patient recruitment.',
      },
      {
        title: 'Respect for all',
        description: 'Students and senior doctors speak as colleagues.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently Asked Questions',
    title: 'Frequently asked questions',
    items: [
      {
        id: 'faq-who-can-join',
        question: 'Who can join?',
        answer:
          'The EasyMedLearning community is open to doctors, practising professionals, medical students (MBBS / AYUSH), clinical interns, residents, and allied healthcare professionals including nurses, paramedics, physiotherapists, and pharmacists upon application verification.',
      },
      {
        id: 'faq-membership-free',
        question: 'Is membership free?',
        answer:
          'Yes, membership to the peer learning community is free. Every applicant goes through a brief professional review to maintain high standards of clinical discourse.',
      },
      {
        id: 'faq-patient-report',
        question: "Can I share my patient's report or scan?",
        answer:
          'You may only share strictly de-identified case materials. All patient personal data (names, phone numbers, hospital ID numbers, dates of birth, geographic tags, and facial photos) must be completely removed or blacked out before posting.',
      },
      {
        id: 'faq-patients-join',
        question: 'Can patients join?',
        answer:
          'No. EasyMedLearning is strictly an educational peer network for healthcare practitioners, doctors in training, and medical students. It is not an open patient forum or telemedicine service.',
      },
      {
        id: 'faq-emergency-advice',
        question: 'Is this a place for emergency advice?',
        answer:
          'No. The community is strictly for reflective educational discussion, pattern recognition, and peer mentorship. It must never be used for acute, real-time bedside emergencies or live critical decisions.',
      },
      {
        id: 'faq-where-it-runs',
        question: 'Where does the community run?',
        answer:
          'The community is hosted on a private, dedicated peer platform. Once your application is reviewed and approved, you receive an invitation link and onboarding guide directly via email.',
      },
      {
        id: 'faq-review-duration',
        question: 'How long does review take?',
        answer:
          'Our clinical administrative team reviews student credentials and medical registration details. We aim to reply within standard working days once submitted.',
      },
      {
        id: 'faq-course-mandatory',
        question: 'Do I need to buy the ECG course to join?',
        answer:
          'No. Participation in the peer community is completely independent of course purchases. While our ECG courses provide structured video training and companion textbooks, the community is open to all qualified learners.',
      },
    ],
  },
  form: {
    title: 'Be part of a community that makes medicine easier',
    subtitle:
      'Apply today and help build a respectful, practical network of learners and professionals.',
    fields: {
      fullName: {
        label: 'Full name',
        placeholder: 'e.g. Dr. Ayesha Patel or Rohan Sharma',
      },
      email: {
        label: 'Email',
        placeholder: 'you@hospital.org or student@college.edu',
      },
      phone: {
        label: 'Phone number',
        placeholder: '+91 98765 43210',
      },
      role: {
        label: 'I am a',
        placeholder: 'Choose one',
        options: [
          'Doctor / Practising Consultant',
          'Resident Doctor (MD / MS / DNB)',
          'Medical Intern',
          'Medical Student (MBBS / Undergraduate)',
          'AYUSH Practitioner / Student (BUMS / BAMS / BHMS)',
          'Nursing Professional / Nursing Student',
          'Paramedic / Physiotherapist / Pharmacist',
          'Other Healthcare Learner / Educator',
        ],
      },
      institution: {
        label: 'College or hospital',
        placeholder: 'Name of hospital, medical college, or clinic',
      },
      specialty: {
        label: 'Specialty or area of interest (optional)',
        placeholder: 'e.g. Cardiology, Emergency Medicine, Internal Medicine',
      },
      goals: {
        label: 'What would you like from the community? (optional)',
        placeholder: 'e.g. ECG case discussions, mentorship, exam prep, clinical case reasoning',
      },
    },
    checkboxes: {
      guidelines: 'I have read and agree to the Community Guidelines.',
      privacy:
        'I agree that EasyMedLearning may use these details to verify my application.',
      updates:
        'I agree to receive community-related updates and announcements from EasyMedLearnings through WhatsApp.',
    },
    submitButton: 'Apply to Join',
    successMessage: {
      title: 'Application Submitted Successfully',
      description:
        'Thank you for applying to the EasyMedLearning Community. Our clinical team reviews each application carefully. You will receive an email confirmation and onboarding link once your details are verified.',
    },
  },
};
