/**
 * EasyMedLearning - Central Site Configuration
 * All external URLs, social destinations, and launch readiness states
 * are managed here as the single source of truth.
 */

export const siteConfig = {
  name: 'EasyMedLearning',
  tagline: 'Making ECG learning simple and practical for medical professionals.',
  description:
    'Learn ECG interpretation with video lectures, case studies and a book by Dr. Wasim Adil Khan. Hinglish course with a tentative launch date of 15 November 2026.',
  locale: 'en-IN',
  
  // External destinations (environment configurable)
  urls: {
    site: process.env.NEXT_PUBLIC_SITE_URL || 'https://easymedlearning.com',
    learnystCourse: process.env.NEXT_PUBLIC_LEARNYST_COURSE_URL || '',
    introVideo: process.env.NEXT_PUBLIC_INTRO_VIDEO_URL || 'https://www.youtube.com/watch?v=foITCgV8NlE',
    sampleLesson: process.env.NEXT_PUBLIC_SAMPLE_LESSON_URL || 'https://www.youtube.com/watch?v=foITCgV8NlE',
    sampleLesson2: 'https://www.youtube.com/watch?v=s4s_qoVXxNM',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/easy_medlearning',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/@easymedlearnings',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || '',
  },

  // Student lecture previews for authentic course evaluation
  previewLectures: [
    {
      id: 'foITCgV8NlE',
      title: 'ECG Interpretation Lecture 1: Core Concepts & Conduction System',
      description:
        'Dr. Wasim Adil Khan explains foundational electrophysiology, cellular mechanisms, and waveform basics in clear Hinglish.',
      url: 'https://www.youtube.com/watch?v=foITCgV8NlE',
      embedUrl: 'https://www.youtube-nocookie.com/embed/foITCgV8NlE',
    },
    {
      id: 's4s_qoVXxNM',
      title: 'ECG Interpretation Lecture 2: Clinical Rhythm & Pattern Analysis',
      description:
        'Practical step-by-step ECG analysis and clinical case scenarios designed for bedside confidence.',
      url: 'https://www.youtube.com/watch?v=s4s_qoVXxNM',
      embedUrl: 'https://www.youtube-nocookie.com/embed/s4s_qoVXxNM',
    },
  ],

  // Book & Course Reveal Reels (Instagram / Social Previews)
  reels: {
    bookReveal: {
      id: 'Dd22lyVI9eo',
      url: 'https://www.instagram.com/reel/Dd22lyVI9eo/',
      embedUrl: 'https://www.instagram.com/reel/Dd22lyVI9eo/embed/',
      title: 'Physical Companion Book Reveal',
      subtitle: 'Absolute Guide to ECG Interpretation',
      description:
        'Dr. Wasim Adil Khan unveils the physical companion reference book, featuring original clinical illustrations and practical case breakdowns.',
      thumbnail: '/images/instagram_reel_thumb.jpg',
    },
    upcoming: [] as Array<{
      id: string;
      url: string;
      embedUrl: string;
      title: string;
      description: string;
      thumbnail?: string;
    }>,
  },

  // Course launch status
  course: {
    title: 'Absolute Guide to ECG Interpretation',
    status: 'Partially recorded',
    tentativeLaunchDate: '15 November 2026',
    language: 'Hinglish (a mix of Hindi and English)',
    languageNote: 'English version will follow',
    format: 'Printed book delivered to learner address + structured video lectures',
  },

  // Navigation
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Contact', href: '/contact' },
  ],

  // Launch blockers checklist (tracked in code for developer/owner clarity)
  launchBlockers: [
    'Learnyst course destination URL (NEXT_PUBLIC_LEARNYST_COURSE_URL)',
    'Verified 10-digit WhatsApp business number (NEXT_PUBLIC_WHATSAPP_URL)',
    'Corona Warrior awarding body and award year',
    'Certificate availability and conditions confirmation',
    'Coronary artery territories learning outcome confirmation',
    'Verification of Instagram and YouTube handles with founder',
    'Approved legal copy for Privacy Policy and Terms & Conditions',
    'Approved instructor photographs (portrait, seated, teaching)',
    'Approved introduction video URL',
    'Actual book cover and permission-cleared ECG illustrations',
    'Approved sample lesson URL',
    'Approved logo SVG / transparent PNG',
  ],
} as const;
