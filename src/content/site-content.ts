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
    tagline: 'Making Medical learning simple and practical for healthcare professionals.',
    rightsReserved: 'All rights reserved.',
    legalNote: 'Legal pages (Privacy Policy & Terms) are subject to owner legal review prior to final publication.',
  },

  // Our Instructor Page (/our-instructor)
  about: {
    meta: {
      title: 'Our Instructor - Dr. Wasim Adil Khan | EasyMedLearning',
      description:
        'Meet Dr. Wasim Adil Khan, Physician, hospital administrator, and ECG educator passionate about making ECG interpretation simple and practical.',
    },
    breadcrumb: 'Home > Our Instructor',
    breadcrumbLabel: 'Our Instructor',
    hero: {
      roleTag: 'Medical Educator & Physician',
      h1: 'About Dr. Wasim Adil Khan',
      tagline:
        'Physician. Educator. Hospital administrator. Passionate about making ECG interpretation simple and practical for every medical learner.',
      degrees: 'BUMS, PGDEMS',
      currentRole: 'Managing Director, National Hospital, Pune',
      doctorName: 'Dr. Wasim Adil Khan',
      imageSrc: '/images/instructor-hero.webp',
      imageAlt: 'Dr. Wasim Adil Khan',
    },
    story: {
      eyebrow: 'Background & Clinical Leadership',
      title: 'My Journey',
      paragraphs: [
        'I am Dr. Wasim Adil Khan, with a Bachelor of Unani Medicine and Surgery (BUMS) and a Post Graduate Diploma in Emergency Medical Services (PGDEMS). I am Managing Director of National Hospital, Pune, which has two branches. I have 15 years of clinical experience, including one year in the ICU, and for 13 of those years I have also served as Managing Director. For the past five years, I have conducted seminars and guest lectures on ECG interpretation across India, including Kashmir.',
      ],
    },
    whyTeach: {
      eyebrow: 'The Turning Point',
      title: 'Why I Teach ECG',
      paragraphs: [
        'While studying and practising medicine, I realised how much I enjoyed ECG interpretation. When I explained ECG topics to my friends, they understood them more easily. That encouraged me to start teaching ECG to others.',
      ],
    },
    hospitalTour: {
      eyebrow: 'Clinical Leadership & Environment',
      heading: 'A Look Inside National Hospital, Pune',
      description:
        'Take a short cinematic tour of National Hospital, Pune, the hospital I lead as Managing Director. See the spaces where care happens every day and the environment that shaped how I practise and teach.',
      videoSrc: '/videos/national-hospital-tour.mp4',
      mobileVideoSrc: '/videos/national-hospital-tour-mobile.mp4',
      posterSrc: '/videos/national-hospital-tour-poster.webp',
      badges: [
        { label: 'Leadership', value: 'Managing Director (13+ Years)' },
        { label: 'Facilities', value: '2 Branches in Pune' },
      ],
    },
    problemToSolve: {
      eyebrow: 'The Learning Gap in Medical Education',
      title: 'The Problem I Want to Solve',
      paragraphs: [
        'Many students, professionals and educators find ECG interpretation difficult. As a student, I struggled to interpret ECGs too. I searched for structured study material and practical courses, but most available resources were theory-heavy reference books. These are hard to learn from, for students and professionals alike, and this is a common challenge across the medical field.',
      ],
    },
    teachingApproach: {
      eyebrow: 'Pedagogical Pillars',
      title: 'My Teaching Approach',
      description:
        'Every concept is translated into an actionable clinical framework that works in high-pressure emergency and ward settings.',
      pillars: [
        {
          id: 'illustrations',
          number: '01',
          title: 'Original Illustrations',
          subtitle: 'Original illustrations for better understanding',
          description:
            'Self-designed clinical diagrams specifically created to clarify complex vector mechanics without confusing textbook clutter.',
          badge: 'Visual Clarity',
        },
        {
          id: 'case-studies',
          number: '02',
          title: 'Practical Scenarios',
          subtitle: 'Practical scenarios and case studies',
          description:
            'Real-world ward and ICU clinical cases that test diagnostic logic and link waveforms directly to patient condition.',
          badge: 'Bedside Action',
        },
        {
          id: 'explanations',
          number: '03',
          title: 'Step-by-Step Logic',
          subtitle: 'Step-by-step explanations',
          description:
            'A structured pedagogical progression from foundational cardiac vectors to confident arrhythmia recognition.',
          badge: 'Structured Method',
        },
        {
          id: 'decision-making',
          number: '04',
          title: 'Real-Time Decisions',
          subtitle: 'A focus on real-time decision-making',
          description:
            'Developing rapid diagnostic reflex and triage confidence essential for high-pressure emergency and acute care.',
          badge: 'Clinical Reflex',
        },
      ],
      points: [
        'Original illustrations for better understanding',
        'Practical scenarios and case studies',
        'Step-by-step explanations',
        'A focus on real-time decision-making',
      ],
    },
    recognition: {
      eyebrow: 'Credentials & Service',
      title: 'Recognition and Contributions',
      description:
        'Verified clinical continuing education and frontline emergency service recognition.',
      awards: [
        {
          id: 'ada-cert',
          badgeTag: 'Clinical Continuing Education',
          category: 'ADA • USA',
          title: 'American Diabetes Association',
          description:
            'Completed the Diabetes India Study & Health Awareness (DISHA) program certified by Dr. Richard E Pratley, MD.',
          imageSrc: '/images/awards/american-diabetes-association-cert.webp',
          imageAlt:
            'American Diabetes Association Certificate awarded to Dr. Wasim Adil Khan',
          footerTag: 'Verified Credential',
          footerDetail: 'Dr. Richard E Pratley, MD',
        },
        {
          id: 'covid-warriors',
          badgeTag: 'Pandemic Frontline Service',
          category: '2020–2021',
          title: 'Corona Warrior Recognition',
          description:
            'Awarded by Kausar Baug Welfare Foundation (Kondhwa) in appreciation of COVID-19 frontline healthcare service along with the hospital team.',
          imageSrc: '/images/awards/covid-warriors-award.webp',
          imageAlt:
            'Covid Warriors Award Plaque presented to Dr. Waseem Khan',
          footerTag: 'Verified Plaque Inscription',
          footerDetail: 'Kausar Baug Welfare Foundation',
        },
      ],
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
          status: 'Awarded by Kausar Baug Welfare Foundation (2020–21).',
        },
      ],
    },
    cta: {
      title: 'Ready to strengthen your ECG interpretation skills?',
      buttonText: 'View the ECG Course',
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
      title: 'Contact Us...',
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
        degree: {
          label: 'Degree / Qualification',
          placeholder: 'e.g. MBBS, MD,BUMS , Student',
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
