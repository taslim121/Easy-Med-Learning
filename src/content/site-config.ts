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
    introVideo: process.env.NEXT_PUBLIC_INTRO_VIDEO_URL || '',
    sampleLesson: process.env.NEXT_PUBLIC_SAMPLE_LESSON_URL || '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/easy_medlearning',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/@easymedlearnings',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || '',
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
