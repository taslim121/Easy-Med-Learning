/**
 * EasyMedLearning - Content Source of Truth
 * Derived strictly from 02_CONTENT_SOURCE_OF_TRUTH.md
 * British English spelling applied throughout (enrol, realised, practising).
 * Hinglish used for course language.
 * No prices, no waitlist mentions, no invented credentials or testimonials.
 */

export const siteContent = {
  // Shared Site Header & Footer
  header: {
    brandName: 'EasyMedLearning',
    primaryCtaLabel: 'View the ECG Course',
    primaryCtaPendingText: 'Course details coming soon',
  },

  footer: {
    tagline: 'Making ECG learning simple and practical for medical professionals.',
    rightsReserved: 'All rights reserved.',
    legalNote: 'Legal pages (Privacy Policy & Terms) are subject to owner legal review prior to final publication.',
  },

  // Home Page (/)
  home: {
    meta: {
      title: 'EasyMedLearning | Clinical Medical Platform & ECG Masterclass',
      description:
        'Master ECG interpretation with structured video lectures, original self-designed diagrams, and companion textbook by Dr. Wasim Adil Khan.',
    },
    hero: {
      eyebrow: 'Clinical Medical Education Platform • Flagship Masterclass',
      h1: 'Learn ECG Interpretation with Clarity, Confidence and Real-World Practice',
      supportingText:
        'Learn from Dr. Wasim Adil Khan through structured video lectures, original illustrations, case-based teaching and his book.',
      primaryCta: 'View the ECG Course',
      secondaryCta: 'Watch Introduction',
      tentativeLaunchNotice: 'Expected launch: 15 November 2026 (tentative)',
      instructorPortraitAlt: 'Dr. Wasim Adil Khan, ECG educator and clinician',
    },
    highlights: [
      {
        id: 'medical-focused',
        title: 'Medical-Focused Learning',
        description: 'Tailored specifically for medical learners, students, and healthcare practitioners.',
      },
      {
        id: 'book-video',
        title: 'Book + Video Course',
        description: 'Printed companion reference book paired with comprehensive video lectures.',
      },
      {
        id: 'hinglish',
        title: 'Hinglish Explanations',
        description: 'Clear, natural explanations in Hinglish, with an English edition coming soon.',
      },
      {
        id: 'practical-cases',
        title: 'Practical Cases & Scenarios',
        description: 'Case-based instruction focused on bedside decision-making and pattern recognition.',
      },
    ],
    whyLearn: {
      title: 'Why Learn ECG with EasyMedLearning?',
      intro:
        'ECG interpretation can be challenging. We make it simpler with structured lessons, practical examples and clear explanations.',
      points: [
        {
          title: 'Concepts Made Simple',
          description: 'Original illustrations and clear explanations designed to unpack complex electrophysiology.',
        },
        {
          title: 'Practical Approach',
          description: 'Case studies and real-world scenarios for deeper clinical understanding at the bedside.',
        },
        {
          title: 'Structured Learning',
          description: 'Step-by-step modules systematically guiding you from core basics to advanced clinical topics.',
        },
        {
          title: 'Learn in Hinglish',
          description: 'Lessons explained in simple Hinglish, with an English version coming soon.',
        },
      ],
    },
    experience: {
      title: 'A Complete ECG Learning Experience',
      intro:
        'Video lectures and a companion book for a stronger understanding of ECG interpretation.',
      points: [
        'Video lectures covering key concepts',
        'A companion book for structured learning',
        'Practical examples and case discussions',
      ],
      bookAlt: 'Absolute Guide to ECG Interpretation book cover',
    },
    instructorPreview: {
      title: 'Meet Your Instructor',
      intro:
        'Learn from Dr. Wasim Adil Khan (BUMS, PGDEMS), an experienced clinician, hospital administrator and ECG educator.',
      credentials: [
        {
          value: '15 Years',
          label: 'Clinical Experience',
          detail: 'Comprehensive medical practice, including 1 year in the intensive care unit (ICU).',
        },
        {
          value: '13 Years',
          label: 'Managing Director',
          detail: 'Steering clinical administration and operations at National Hospital, Pune (two branches).',
        },
        {
          value: '5 Years',
          label: 'ECG Masterclasses',
          detail: 'Seminars and guest lectures delivered to medical practitioners across India, including Kashmir.',
        },
      ],
      ctaText: 'Learn More About Dr. Wasim',
      ctaHref: '/about',
      imageAlt: 'Dr. Wasim Adil Khan seated in a clinic',
    },
  },

  // About Page (/about)
  about: {
    meta: {
      title: 'About Dr. Wasim Adil Khan | ECG Educator, Pune',
      description:
        'Meet Dr. Wasim Adil Khan, clinician and ECG educator, and learn why he created EasyMedLearning to make ECG interpretation simple and practical.',
    },
    breadcrumb: 'Home > About',
    hero: {
      h1: 'About Dr. Wasim Adil Khan',
      tagline:
        'Clinician. Educator. Hospital administrator. Passionate about making ECG interpretation simple and practical for every medical learner.',
    },
    story: {
      title: 'My Journey',
      paragraphs: [
        'I am Dr. Wasim Adil Khan, with a Bachelor of Unani Medicine and Surgery (BUMS) and a Post Graduate Diploma in Emergency Medical Services (PGDEMS). I am Managing Director of National Hospital, Pune, which has two branches. I have 15 years of clinical experience, including one year in the ICU, and for 13 of those years I have also served as Managing Director. For the past five years, I have conducted seminars and guest lectures on ECG interpretation across India, including Kashmir.',
      ],
      imageAlt: 'Dr. Wasim Adil Khan teaching ECG interpretation at a seminar',
    },
    whyTeach: {
      title: 'Why I Teach ECG',
      paragraphs: [
        'While studying and practising medicine, I realised how much I enjoyed ECG interpretation. When I explained ECG topics to my friends, they understood them more easily. That encouraged me to start teaching ECG to others.',
      ],
      imageAlt: 'Dr. Wasim Adil Khan explaining an ECG on a presentation screen',
    },
    problemToSolve: {
      title: 'The Problem I Want to Solve',
      paragraphs: [
        'Many students, professionals and educators find ECG interpretation difficult. As a student, I struggled to interpret ECGs too. I searched for structured study material and practical courses, but most available resources were theory-heavy reference books. These are hard to learn from, for students and professionals alike, and this is a common challenge across the medical field.',
      ],
    },
    teachingApproach: {
      title: 'My Teaching Approach',
      points: [
        'Original illustrations for better understanding',
        'Practical scenarios and case studies',
        'Step-by-step explanations',
        'A focus on real-time decision-making',
      ],
    },
    recognition: {
      title: 'Recognition and Contributions',
      items: [
        {
          title: 'Author and Editor',
          description:
            'Author and editor of "Absolute Guide to ECG Interpretation" featuring original clinical illustrations.',
        },
        {
          title: 'Corona Warrior Recognition',
          description:
            'Recognised as a Corona Warrior, along with the hospital team.',
          status: 'Pending founder confirmation for awarding body and award year.',
        },
      ],
    },
    cta: {
      title: 'Ready to strengthen your ECG interpretation skills?',
      buttonText: 'View the ECG Course',
    },
  },

  // Courses Page (/courses)
  courses: {
    meta: {
      title: 'ECG Interpretation Course in Hinglish | EasyMedLearning',
      description:
        'Absolute Guide to ECG Interpretation: video lectures, case studies and a printed companion book. Tentative launch date: 15 November 2026.',
    },
    breadcrumb: 'Home > Courses',
    hero: {
      h1: 'Absolute Guide to ECG Interpretation',
      tagline:
        'A complete learning experience with video lectures, practical examples and a companion book.',
      tags: ['ECG', 'Book + Video', 'Hinglish (English version coming soon)'],
      statusNotice: 'Course Status: Partially recorded. Tentative launch: 15 November 2026.',
      bookImageAlt: 'Absolute Guide to ECG Interpretation book by Dr. Wasim Adil Khan',
      primaryCta: 'View the ECG Course',
      secondaryCta: 'Watch Sample Lesson',
    },
    overview: {
      title: 'Course Overview',
      description:
        'This course is designed for medical students, beginners, working professionals, nursing students, paramedics, physiotherapists, pharmacists and exam candidates who want to understand ECG interpretation in a simple, practical way. It is based on the book Absolute Guide to ECG Interpretation and combines structured video lectures, case studies and practice exercises.',
      eligibility: 'Learners should be from the medical field.',
    },
    learningOutcomes: {
      title: 'What You Will Learn',
      outcomes: [
        {
          text: 'Interpret ECGs with greater confidence',
          confirmed: true,
        },
        {
          text: 'Learn through practical cases and scenarios',
          confirmed: true,
        },
        {
          text: 'Develop a structured approach to ECG interpretation',
          confirmed: true,
        },
        {
          text: 'Understand how coronary artery territories relate to ECG leads',
          confirmed: false,
          note: 'Pending founder confirmation',
        },
      ],
    },
    audience: {
      title: 'Who Is This Course For?',
      groups: [
        'Medical students (beginners)',
        'Working professionals',
        'Nursing students',
        'Paramedics, physiotherapists and pharmacists',
        'Exam candidates',
        'Other medical learners',
      ],
    },
    offerings: {
      title: 'What We Offer in the ECG Course',
      includedTitle: 'Included at Launch',
      includedDescription:
        'Delivered as part of the core course experience upon official launch.',
      includedItems: [
        {
          title: 'Structured Video Lectures',
          detail: 'Comprehensive modules covering key diagnostic concepts step-by-step.',
        },
        {
          title: 'Printed Companion Book',
          detail:
            'Physical reference guide delivered directly to your address (no PDF version).',
        },
        {
          title: 'Practical Examples',
          detail: 'Real-world clinical examples illustrating ECG patterns clearly.',
        },
        {
          title: 'Case Studies',
          detail: 'In-depth case discussions reflecting daily bedside dilemmas.',
        },
        {
          title: 'Hinglish Explanations',
          detail: 'Engaging, conversational Hinglish delivery that makes complex theory click.',
        },
      ],
      plannedTitle: 'Planned for Future Phases',
      plannedDescription:
        'Planned enhancements currently in development or scheduled for subsequent releases.',
      plannedItems: [
        {
          title: 'Live Classes',
          detail: 'Interactive sessions directly with Dr. Wasim Adil Khan.',
        },
        {
          title: 'Doubt-Clearing Sessions',
          detail: 'Dedicated clinical Q&A discussions.',
        },
        {
          title: 'Practice Exercises & Assignments',
          detail: 'Systematic drills to test your diagnostic accuracy.',
        },
        {
          title: 'Test Series',
          detail: 'Timed evaluation modules for exam candidates.',
        },
        {
          title: 'Certificate from EasyMedLearning',
          detail: 'Planned — conditions and requirements pending founder confirmation.',
        },
        {
          title: 'Community Access',
          detail: 'Collaborative peer discussion platform for medical learners.',
        },
        {
          title: 'English Version',
          detail: 'Full course edition recorded in English for broader clinical reach.',
        },
      ],
    },
    sampleLesson: {
      title: 'Sample Lesson',
      text: 'Watch a sample lesson to see the teaching style and course format.',
      actionLabel: 'Watch Sample Lesson',
      notice:
        'The sample lesson video player will activate as soon as the verified lesson asset is published.',
    },
  },

  // Contact Page (/contact)
  contact: {
    meta: {
      title: 'Contact EasyMedLearning | ECG Course Enquiries',
      description:
        'Questions about the ECG course, book or launch? Send an enquiry or follow EasyMedLearning on Instagram and YouTube.',
    },
    breadcrumb: 'Home > Contact',
    hero: {
      h1: 'Get in Touch',
      intro:
        "Have a question about the course, book or upcoming launch? We'd be happy to hear from you.",
    },
    methods: [
      {
        channel: 'Instagram',
        handle: '@easy_medlearning',
        url: 'https://www.instagram.com/easy_medlearning',
        description: 'Follow for updates and short educational content.',
        ariaLabel: 'Follow EasyMedLearning on Instagram (opens in new tab)',
      },
      {
        channel: 'YouTube',
        handle: '@easymedlearnings',
        url: 'https://youtube.com/@easymedlearnings',
        description: 'Watch introductory and sample videos.',
        ariaLabel: 'Visit EasyMedLearning on YouTube (opens in new tab)',
      },
      {
        channel: 'WhatsApp',
        description: 'Chat directly on WhatsApp regarding course queries.',
        ariaLabel: 'Chat with EasyMedLearning on WhatsApp',
        pendingNotice: 'WhatsApp business channel active upon final number configuration.',
      },
    ],
    form: {
      title: 'Send Us a Message',
      intro: "Fill in the form and we'll get back to you.",
      fields: {
        name: {
          label: 'Your Name',
          placeholder: 'Dr. / Mr. / Ms. Full Name',
          required: true,
        },
        email: {
          label: 'Your Email',
          placeholder: 'doctor@example.com',
          required: true,
        },
        phone: {
          label: 'Phone Number',
          placeholder: '+91 98765 43210 (Optional)',
          required: false,
        },
        message: {
          label: 'Your Message',
          placeholder: 'How can we help you regarding the ECG course or companion book?',
          required: true,
        },
      },
      submitButton: 'Send Message',
      submittingButton: 'Sending Message...',
      successMessage:
        "Thank you. Your message has been sent and we'll get back to you soon.",
      errorMessage:
        'Unable to send message at this moment. Please try again later or reach out via our social channels.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      intro: 'Find quick answers to common questions.',
      items: [
        {
          id: 'faq-1',
          question: 'When will the course launch?',
          answer:
            'The tentative launch date is 15 November 2026. Check the course page or our Learnyst destination for current course availability updates.',
        },
        {
          id: 'faq-2',
          question: 'Who can enrol in the course?',
          answer:
            'Learners from the medical field, including medical students, nursing students, paramedics, physiotherapists, pharmacists and working professionals.',
        },
        {
          id: 'faq-3',
          question: 'Will the course be in Hinglish, English or both?',
          answer:
            'The course is currently available in Hinglish (a mix of Hindi and English). An English version will follow.',
        },
        {
          id: 'faq-4',
          question: 'Will I receive a certificate?',
          answer:
            'Certificate availability and conditions are currently planned and pending founder confirmation.',
          isPending: true,
        },
        {
          id: 'faq-5',
          question: 'How will I receive the book?',
          answer:
            'A printed copy will be delivered to the address you provide. A PDF version is not available.',
        },
        {
          id: 'faq-6',
          question: 'How can I stay updated?',
          answer:
            'Follow EasyMedLearning on Instagram and YouTube for course announcements and clinical previews.',
        },
      ],
    },
  },
} as const;
