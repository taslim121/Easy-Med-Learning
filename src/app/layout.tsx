import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/content/site-config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { PageRails } from '@/components/layout/page-rails';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.urls.site || 'https://easymedlearning.com'),
  title: {
    default: 'Learn ECG Interpretation Online | EasyMedLearning',
    template: '%s | EasyMedLearning',
  },
  description: siteConfig.description,
  keywords: [
    'ECG interpretation course',
    'learn ECG online',
    'ECG course for medical students',
    'ECG in Hinglish',
    'Dr Wasim Adil Khan ECG',
    'Absolute Guide to ECG Interpretation',
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
    siteName: siteConfig.name,
    title: 'Learn ECG Interpretation Online | EasyMedLearning',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn ECG Interpretation Online | EasyMedLearning',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    url: siteConfig.urls.site,
    description: siteConfig.description,
    founder: {
      '@type': 'Person',
      name: 'Dr. Wasim Adil Khan',
      jobTitle: 'Managing Director & Medical Educator',
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Bachelor of Unani Medicine and Surgery (BUMS)' },
        { '@type': 'EducationalOrganization', name: 'Post Graduate Diploma in Emergency Medical Services (PGDEMS)' },
      ],
    },
    sameAs: [
      siteConfig.urls.instagram,
      siteConfig.urls.youtube,
    ],
  };

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
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
        </PageRails>
      </body>
    </html>
  );
}
