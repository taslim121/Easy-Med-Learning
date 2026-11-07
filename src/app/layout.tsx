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
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  keywords: [
    'EasyMedLearning',
    'Easy Med Learning',
    'Dr Wasim Adil Khan',
    'ECG interpretation',
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
    siteName: 'EasyMedLearning',
    title: 'EasyMedLearning | Learn ECG Interpretation Online with Dr. Wasim Adil Khan',
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
    title: 'EasyMedLearning | Learn ECG Interpretation Online with Dr. Wasim Adil Khan',
    description: siteConfig.description,
    images: [`${siteConfig.urls.site}/images/logo-horizontal.webp`],
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
  const siteUrl = siteConfig.urls.site || 'https://easymedlearning.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'EasyMedLearning',
    alternateName: ['Easy Med Learning', 'easymedlearning'],
    url: siteUrl,
    logo: `${siteUrl}/images/logo-horizontal.webp`,
    description: siteConfig.description,
    founder: {
      '@type': 'Person',
      name: 'Dr. Wasim Adil Khan',
    },
    sameAs: [
      siteConfig.urls.instagram,
      siteConfig.urls.youtube,
    ].filter(Boolean),
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
