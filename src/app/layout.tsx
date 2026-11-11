import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/content/site-config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp';
import { PageRails } from '@/components/layout/page-rails';
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.urls.site || 'https://easymedlearning.com'),
  title: {
    default: 'EasyMedLearning | Learn ECG Interpretation Online with Dr. Wasim Adil Khan',
    template: '%s | EasyMedLearning',
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  keywords: [
    // Brand & Platform Queries
    'EasyMedLearning',
    'easymedlearning',
    'Easy Med Learning',
    'easymedlearning.com',
   
    'EasyMed',
    'Easy Med',
    // Instructor Queries
    'Dr Wasim Adil Khan',
    'Dr Wasim Adil Khan ECG',
    'Dr Wasim Khan',
    'Dr Wasim ECG',
    'Dr Wasim Adil Khan lectures',
    // High-Intent Search Phrases
    'ECG Made Easy',
    'ECG Made Easy online course',
    'ECG Made Easy in Hindi',
    'ECG Made Easy Hinglish',
    'ECG interpretation course',
    'learn ECG online',
    'ECG course India',
    'ECG reading step by step',
    // Book & Course Curriculum
    'Absolute Guide to ECG Interpretation',
    'ECG handbook Dr Wasim',
    'ECG companion handbook',
    'ECG interpretation book India',
    // Target Audience & Education
    'ECG for MBBS students',
    'ECG course for junior doctors',
    'ECG interpretation for medical students',
    'ECG learning for nurses and paramedics',
    'clinical ECG interpretation',
    '12 lead ECG course',
    'arrhythmia interpretation',
    'cardiology course online India',
    'Hinglish medical video lectures',
    // Seminars & Workshops
    'Bharti Vidyapeeth ECG masterclass',
    'Kashmir ECG workshops',
  ],
  authors: [{ name: 'Dr. Wasim Adil Khan' }],
  creator: 'EasyMedLearning',
  publisher: 'EasyMedLearning',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.urls.site,
    siteName: 'EasyMedLearning',
    title: 'EasyMedLearning | ECG Made Easy & Interpretation Course by Dr. Wasim Adil Khan',
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.urls.site}/images/logo-horizontal.webp`,
        width: 1200,
        height: 630,
        alt: 'EasyMedLearning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyMedLearning | ECG Made Easy & Interpretation Course by Dr. Wasim Adil Khan',
    description: siteConfig.description,
    images: [`${siteConfig.urls.site}/images/logo-horizontal.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = siteConfig.urls.site || 'https://easymedlearning.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${siteUrl}/#organization`,
        name: 'EasyMedLearning',
        alternateName: [
          'Easy Med Learning',
          'easymedlearning',
          'ECG Made Easy by Dr. Wasim Adil Khan',
        ],
        url: siteUrl,
        logo: `${siteUrl}/images/logo-horizontal.webp`,
        description: siteConfig.description,
        founder: {
          '@type': 'Person',
          name: 'Dr. Wasim Adil Khan',
          jobTitle: 'Physician & Medical Educator',
        },
        knowsAbout: [
          'Electrocardiography',
          'ECG Interpretation',
          '12-Lead ECG Analysis',
          'Cardiology Education',
          'Clinical Medicine',
        ],
        sameAs: [
          siteConfig.urls.instagram,
          siteConfig.urls.youtube,
        ].filter(Boolean),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'EasyMedLearning',
        alternateName: 'Easy Med Learning | ECG Made Easy',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Course',
        '@id': `${siteUrl}/courses#course`,
        name: 'Absolute Guide to ECG Interpretation (ECG Made Easy)',
        description:
          'Comprehensive 51-chapter ECG interpretation course with video lectures and companion printed handbook by Dr. Wasim Adil Khan.',
        provider: {
          '@id': `${siteUrl}/#organization`,
        },
        instructor: {
          '@type': 'Person',
          name: 'Dr. Wasim Adil Khan',
        },
        inLanguage: ['hi', 'en'],
        courseCode: 'EML-ECG-01',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          startDate: '2026-11-15',
        },
      },
    ],
  };

  return (
    <html
      lang="en-IN"
      className={cn("scroll-smooth", plusJakartaSans.variable, jetbrainsMono.variable, "font-sans")}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#17354B] antialiased">
        {/* Skip to main content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#17354B] text-white px-4 py-2 rounded-md shadow-lg outline-none"
        >
          Skip to main content
        </a>

        <PageRails>
          <SiteHeader />
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
          <SiteFooter />
          <FloatingWhatsApp />
        </PageRails>
      </body>
    </html>
  );
}
