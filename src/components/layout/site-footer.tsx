import React from 'react';
import Link from 'next/link';
import { Activity, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from '@/components/ui/icons';
import { siteConfig } from '@/content/site-config';
import { siteContent } from '@/content/site-content';
import { Container } from '@/components/ui/container';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const hasWhatsApp = Boolean(siteConfig.urls.whatsapp);

  return (
    <footer className="w-full bg-[#0A1622] text-[#FAF9F6] border-t border-white/10 pt-16 pb-12">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-[#367D78] rounded-md inline-flex"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <Activity className="w-4 h-4 text-[#2DD4BF]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Easy<span className="text-[#2DD4BF]">Med</span>Learning
              </span>
            </Link>
            <p className="text-sm text-[#FAF9F6]/70 max-w-sm leading-relaxed">
              {siteContent.footer.tagline}
            </p>
            <p className="text-xs font-mono text-[#FAF9F6]/50">
              Instructor: Dr. Wasim Adil Khan (BUMS, PGDEMS)
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2DD4BF]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#FAF9F6]/75 hover:text-white transition-colors focus-visible:outline-1 focus-visible:outline-[#367D78] rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2DD4BF]">
              Follow & Connect
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow EasyMedLearning on Instagram (opens in new tab)"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#367D78] flex items-center justify-center transition-colors text-white focus-visible:outline-2 focus-visible:outline-[#367D78]"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href={siteConfig.urls.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit EasyMedLearning on YouTube (opens in new tab)"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#D96B60] flex items-center justify-center transition-colors text-white focus-visible:outline-2 focus-visible:outline-[#367D78]"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>

              {hasWhatsApp ? (
                <a
                  href={siteConfig.urls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with EasyMedLearning on WhatsApp (opens in new tab)"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-emerald-600 flex items-center justify-center transition-colors text-white focus-visible:outline-2 focus-visible:outline-[#367D78]"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              ) : (
                <span
                  title="WhatsApp channel pending final business number"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/30 cursor-not-allowed"
                  aria-hidden="true"
                >
                  <MessageCircle className="w-5 h-5" />
                </span>
              )}
            </div>
            <p className="text-xs text-[#F6F4EE]/50">
              Check handles with founder before official broadcast.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6F4EE]/60">
          <p>
            &copy; {currentYear} {siteConfig.name}. {siteContent.footer.rightsReserved}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#F6F4EE]/40" title="Legal documentation pending owner review">
              Privacy Policy (Pending Review)
            </span>
            <span>&middot;</span>
            <span className="text-[#F6F4EE]/40" title="Legal documentation pending owner review">
              Terms & Conditions (Pending Review)
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
