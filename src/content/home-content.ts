/**
 * EasyMedLearning — Homepage Content Source of Truth
 * Strict Zero Content Invention — Derived 100% from Founder-Supplied Briefs
 */

export interface HeroContent {
  eyebrow: string;
  heading: string;
  description: string;
  launchAnnouncement: {
    kicker: string;
    title: string;
    description: string;
  };
  ctas: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
  supportingMicrocopy: string;
  educator: {
    name: string;
    role: string;
    portraitSrc: string;
    badgeText: string;
  };
}

export interface CoursePillar {
  title: string;
  description: string;
}

export interface CourseLaunchContent {
  badge: string;
  sectionHeading: string;
  sectionSubtitle: string;
  courseTitle: string;
  courseLead: string;
  pillarsHeading: string;
  pillars: CoursePillar[];
  mission: string;
  cta: {
    label: string;
    href: string;
  };
  video: {
    heading: string;
    description: string;
    youtubeId: string;
    youtubeUrl: string;
    embedUrl: string;
    localFallbackSrc: string;
    posterSrc: string;
  };
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: 'Video' | 'MessagesSquare' | 'PlaySquare' | 'BookOpen' | 'Bell' | 'ShieldCheck' | 'Sparkles' | 'Smartphone' | 'Clock';
}

export interface FeaturesContent {
  sectionHeading: string;
  sectionSubtitle: string;
  cards: FeatureCard[];
}

export interface ContactContent {
  heading: string;
  description: string;
  form: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
    successMessage: string;
  };
}

export interface FooterContent {
  brandStatement: string;
  navLinks: Array<{ label: string; href: string }>;
  policyLinks: Array<{ label: string; href: string }>;
  copyright: string;
}

export interface HomeContent {
  meta: {
    title: string;
    description: string;
  };
  hero: HeroContent;
  courseLaunch: CourseLaunchContent;
  features: FeaturesContent;
  contact: ContactContent;
  footer: FooterContent;
}

export const homeContent: HomeContent = {
  meta: {
    title: 'Easy Med Learning | ECG Made Easy & Medical Video Lectures',
    description:
      'Master clinical ECG interpretation and essential medical topics with Dr. Wasim Adil Khan. Structured video lectures, hand-crafted vector diagrams, and simplified clinical teaching.',
  },

  // =========================================================================
  // SECTION 01: Hero / Main Banner
  // =========================================================================
  hero: {
    eyebrow: 'Official Launch Announcement',
    heading: 'Learn with Easy Med Learning.',
    description:
      'Your journey towards smarter medical learning starts here. Explore high-quality, structured courses, learn from experienced educators, and get the learning resources you need — including professionally designed physical books delivered to your doorstep.',
    launchAnnouncement: {
      kicker: 'NOW INTRODUCING OUR FIRST COURSE',
      title: 'ECG Made Easy',
      description:
        'Learn to understand, interpret, and approach ECGs with greater clarity and confidence.',
    },
    ctas: {
      primary: {
        label: 'Join Our Community',
        href: '/contact',
      },
      secondary: {
        label: 'Explore Courses',
        href: '/courses',
      },
    },
    supportingMicrocopy: 'Learn together. Grow together. Make learning easier.',
    educator: {
      name: 'Dr. Wasim Adil Khan',
      role: 'Lead Medical Educator & Clinician',
      portraitSrc: '/images/instructor-hero.jpg',
      badgeText: 'Lead Clinical Educator',
    },
  },

  // =========================================================================
  // SECTION 02: Introducing Our Medical Courses (ECG Launch Showcase)
  // =========================================================================
  courseLaunch: {
    badge: 'NOW INTRODUCING OUR FIRST COURSE',
    sectionHeading: 'Medical Learning, Made Easier.',
    sectionSubtitle:
      'Explore structured medical courses designed to simplify complex concepts and make learning more effective.',
    courseTitle: 'The Complete ECG Course is Coming Soon!',
    courseLead:
      'Are you ready to understand ECG from basic to advanced level? We are bringing you a complete course designed to make ECG interpretation simple, easy, and understandable for every medical student and healthcare professional.',
    pillarsHeading: 'What Makes Our Course Special?',
    pillars: [
      {
        title: 'Step-by-Step Learning',
        description:
          'Learn ECG from the very basics of cardiac conduction and gradually progress to confident advanced rhythm and ischemia interpretation.',
      },
      {
        title: 'Exclusive Self-Designed Images',
        description:
          'Specially created illustrations you will not find anywhere else on the internet, crafted specifically to make complex cardiac vectors intuitive.',
      },
      {
        title: 'Easy-to-Understand Teaching',
        description:
          'Intimidating clinical concepts demystified in clear, conversational Hinglish without rote memorization.',
      },
      {
        title: 'Teaching Experience',
        description:
          'Built upon direct teaching experience with medical college students and understanding the real difficulties learners face.',
      },
    ],
    mission:
      'Our Mission: To make ECG simple and easy for everyone. We want you to understand the concepts, build diagnostic confidence, and master ECG interpretation bedside.',
    cta: {
      label: 'Explore the ECG Course',
      href: '/courses',
    },
    video: {
      heading: 'Get to Know Your Course',
      description:
        'Discover what the course offers, meet your lead educator, and explore how our structured learning approach can help you understand ECGs step by step.',
      youtubeId: 'KAgfYFO-qK8',
      youtubeUrl: 'https://youtube.com/shorts/KAgfYFO-qK8',
      embedUrl: 'https://www.youtube-nocookie.com/embed/KAgfYFO-qK8',
      localFallbackSrc: '/videos/course-intro-launch.mp4',
      posterSrc: '/images/reels/course-intro-poster.webp',
    },
  },

  // =========================================================================
  // SECTION 03: What Makes Easy Med Learning Different?
  // =========================================================================
  features: {
    sectionHeading: 'Everything You Need to Learn Better.',
    sectionSubtitle:
      'More than just video lectures. We bring together structured teaching, valuable learning resources, and a supportive learning environment to make your educational journey easier.',
    cards: [
      {
        id: 'live-classes',
        title: 'Live Interactive Classes',
        description:
          'Learn directly from educators through engaging live teaching sessions.',
        iconName: 'Video',
      },
      {
        id: 'forums',
        title: 'Student Discussion Forums',
        description:
          'Connect with fellow learners, discuss concepts, and learn together.',
        iconName: 'MessagesSquare',
      },
      {
        id: 'video-lectures',
        title: 'Structured Video Lectures',
        description:
          'Learn complex topics through organized, easy-to-follow video lessons.',
        iconName: 'PlaySquare',
      },
      {
        id: 'physical-books',
        title: 'Physical Books Delivered to You',
        description:
          'Get carefully designed printed learning material delivered straight to your doorstep.',
        iconName: 'BookOpen',
      },
      {
        id: 'alerts',
        title: 'Alerts & Notifications',
        description:
          'Stay updated with important announcements, class schedules, and learning updates.',
        iconName: 'Bell',
      },
      {
        id: 'trusted-content',
        title: 'Trusted Learning Content',
        description:
          'Learn through thoughtfully prepared educational content and structured resources.',
        iconName: 'ShieldCheck',
      },
      {
        id: 'affordable-pricing',
        title: 'Affordable Fee Structure',
        description:
          'Quality learning opportunities with student-friendly course pricing.',
        iconName: 'Sparkles',
      },
      {
        id: 'mobile-learning',
        title: 'Mobile-Friendly Learning',
        description:
          'Access your learning videos conveniently through your mobile device.',
        iconName: 'Smartphone',
      },
      {
        id: 'anytime-anywhere',
        title: 'Learn Anytime, Anywhere',
        description:
          'Revisit your recorded lectures and study at a pace that works for you.',
        iconName: 'Clock',
      },
    ],
  },

  // =========================================================================
  // SECTION 04: Contact Us (Focused Direct Form, Zero Unnecessary Badges)
  // =========================================================================
  contact: {
    heading: "We're Here to Help You Learn Better.",
    description:
      "Have questions about our courses, learning resources, or enrollment process? We'd love to hear from you. Reach out to our team and we'll be happy to assist you.",
    form: {
      title: 'Send a Direct Message',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Email Address',
      phonePlaceholder: 'Phone Number',
      messagePlaceholder: 'Your Message',
      submitLabel: 'Send Message',
      submittingLabel: 'Sending...',
      successMessage:
        "Thank you. Your message has been received and our team will get back to you shortly.",
    },
  },

  // =========================================================================
  // SECTION 05: Footer
  // =========================================================================
  footer: {
    brandStatement:
      'Easy Med Learning – Making learning simpler, smarter, and more accessible.',
    navLinks: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Courses', href: '/courses' },
      { label: 'Community', href: '/contact' },
      { label: 'Contact Us', href: '/contact' },
    ],
    policyLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Refund Policy', href: '/refunds' },
    ],
    copyright: '© 2026 EasyMedLearning. All rights reserved.',
  },
};
