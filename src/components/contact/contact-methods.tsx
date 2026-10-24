import React from 'react';
import { MessageCircle, ExternalLink, AlertCircle } from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from '@/components/ui/icons';
import { siteConfig } from '@/content/site-config';
import { siteContent } from '@/content/site-content';
import { Reveal } from '@/components/motion/reveal';

export function ContactMethods() {
  const content = siteContent.contact;
  const hasWhatsApp = Boolean(siteConfig.urls.whatsapp);

  return (
    <div className="space-y-6">
      <Reveal direction="up">
        <h2 className="text-xl font-bold text-[#17354B] mb-4">
          Connect Online
        </h2>
        <p className="text-sm text-[#5A6E7D] mb-6">
          Reach out through our verified clinical channels or follow for instructional updates.
        </p>

        <div className="space-y-4">
          {/* Instagram */}
          <a
            href={siteConfig.urls.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow EasyMedLearning on Instagram (opens in new tab)"
            className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#17354B]/10 hover:border-[#367D78]/30 shadow-sm transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#17354B]/5 flex items-center justify-center text-[#17354B] group-hover:bg-[#367D78] group-hover:text-white transition-colors shrink-0">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#17354B] text-base group-hover:text-[#367D78] transition-colors">
                  Instagram
                </span>
                <ExternalLink className="w-4 h-4 text-[#5A6E7D] opacity-60 group-hover:opacity-100" />
              </div>
              <p className="text-xs text-[#367D78] font-mono mt-0.5">@easy_medlearning</p>
              <p className="text-xs text-[#5A6E7D] mt-1">
                Follow for updates and short educational content.
              </p>
            </div>
          </a>

          {/* YouTube */}
          <a
            href={siteConfig.urls.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit EasyMedLearning on YouTube (opens in new tab)"
            className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#17354B]/10 hover:border-[#D96B60]/30 shadow-sm transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#17354B]/5 flex items-center justify-center text-[#17354B] group-hover:bg-[#D96B60] group-hover:text-white transition-colors shrink-0">
              <YouTubeIcon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#17354B] text-base group-hover:text-[#D96B60] transition-colors">
                  YouTube
                </span>
                <ExternalLink className="w-4 h-4 text-[#5A6E7D] opacity-60 group-hover:opacity-100" />
              </div>
              <p className="text-xs text-[#D96B60] font-mono mt-0.5">@easymedlearnings</p>
              <p className="text-xs text-[#5A6E7D] mt-1">
                Watch introductory and sample videos.
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          {hasWhatsApp ? (
            <a
              href={siteConfig.urls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with EasyMedLearning on WhatsApp"
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#17354B]/10 hover:border-emerald-600/30 shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#17354B]/5 flex items-center justify-center text-[#17354B] group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#17354B] text-base group-hover:text-emerald-700 transition-colors">
                    Chat on WhatsApp
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#5A6E7D] opacity-60" />
                </div>
                <p className="text-xs text-[#5A6E7D] mt-1">
                  Send a message for course enquiries.
                </p>
              </div>
            </a>
          ) : (
            <div className="p-5 rounded-2xl bg-[#F6F4EE] border border-[#17354B]/10 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-[#5A6E7D] shrink-0 mt-0.5" />
              <div className="text-xs text-[#5A6E7D]">
                <span className="font-semibold text-[#17354B]">WhatsApp Support:</span> Dedicated business channel will activate once the confirmed 10-digit number is provisioned.
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}
