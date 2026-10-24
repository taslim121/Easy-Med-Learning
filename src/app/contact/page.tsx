import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mail } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';
import { ContactMethods } from '@/components/contact/contact-methods';
import { EnquiryForm } from '@/components/contact/enquiry-form';
import { FaqAccordion } from '@/components/contact/faq-accordion';
import { Reveal } from '@/components/motion/reveal';

export const metadata: Metadata = {
  title: siteContent.contact.meta.title,
  description: siteContent.contact.meta.description,
};

export default function ContactPage() {
  const content = siteContent.contact;

  return (
    <>
      <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 bg-clinical-grid border-b border-[#17354B]/10">
        <Container size="wide">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs font-medium text-[#5A6E7D]">
              <li>
                <Link href="/" className="hover:text-[#17354B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#5A6E7D]/60" />
              </li>
              <li className="text-[#17354B] font-semibold" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-4">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#367D78]/10 text-[#367D78] text-xs font-semibold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Clinical Enquiries</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17354B] tracking-tight leading-tight">
                {content.hero.h1}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-lg sm:text-xl text-[#5A6E7D] leading-relaxed">
                {content.hero.intro}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-24 bg-white">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <ContactMethods />
            </div>
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Accordion Section */}
      <FaqAccordion />
    </>
  );
}
