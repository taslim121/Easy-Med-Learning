import React from 'react';
import {
  MessageSquare,
  Stethoscope,
  Award,
  BookOpen,
  Orbit,
  Presentation,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { EcgTrace } from '@/components/ui/ecg-trace';
import { communityPageContent } from '@/content/community-content';

export function CommunityCapabilities() {
  const { capabilities } = communityPageContent;
  const { eyebrow, title, items } = capabilities;

  const caseItem = items.find((i) => i.title === 'Case discussions') || items[0];
  const askItem = items.find((i) => i.title === 'Ask a professional') || items[1];
  const mentorItem = items.find((i) => i.title === 'Mentorship') || items[2];
  const resourcesItem = items.find((i) => i.title === 'Learning resources') || items[5];
  const circlesItem = items.find((i) => i.title === 'Specialty circles') || items[3];
  const seminarsItem = items.find((i) => i.title === 'Seminars and live sessions') || items[4];

  const bentoCards = [
    // Row 1: Case discussions (2 cols) + Ask a professional (1 col) = 3 cols
    {
      name: caseItem.title,
      description: caseItem.description,
      className: 'col-span-3 lg:col-span-2',
      href: '#apply-form',
      cta: 'Explore Case Discussions',
      Icon: MessageSquare,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#367D78]/15 via-[#2DD4BF]/10 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]">
          <div className="absolute top-6 right-6 opacity-15 text-[#367D78]">
            <MessageSquare className="size-36" />
          </div>
          <div className="absolute top-8 right-0 w-80 opacity-25">
            <EcgTrace color="#367D78" glowColor="#2DD4BF" strokeWidth={2} />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#367D78]/10 text-[#367D78] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#367D78]/20">
            {caseItem.statusBadge}
          </div>
        </div>
      ),
    },
    {
      name: askItem.title,
      description: askItem.description,
      className: 'col-span-3 lg:col-span-1',
      href: '#apply-form',
      cta: 'Ask a Physician',
      Icon: Stethoscope,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#17354B]/10 via-[#367D78]/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#17354B]">
            <Stethoscope className="size-28" />
          </div>
          <div className="absolute top-6 left-6 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#367D78]/10 text-[#367D78] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#367D78]/20">
            <span className="size-2 rounded-full bg-[#367D78] animate-pulse" />
            {askItem.statusBadge}
          </div>
        </div>
      ),
    },
    // Row 2: Mentorship (1 col) + Learning resources (2 cols) = 3 cols
    {
      name: mentorItem.title,
      description: mentorItem.description,
      className: 'col-span-3 lg:col-span-1',
      href: '#apply-form',
      cta: 'Explore Mentorship',
      Icon: Award,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#367D78]/10 via-[#2DD4BF]/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#367D78]">
            <Award className="size-28" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#5A6E7D]/10 text-[#5A6E7D] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#5A6E7D]/20">
            {mentorItem.statusBadge}
          </div>
        </div>
      ),
    },
    {
      name: resourcesItem.title,
      description: resourcesItem.description,
      className: 'col-span-3 lg:col-span-2',
      href: '/courses',
      cta: 'Follow Resources',
      Icon: BookOpen,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/15 via-[#367D78]/10 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]">
          <div className="absolute top-6 right-6 opacity-15 text-[#2DD4BF]">
            <BookOpen className="size-36" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#367D78]/10 text-[#367D78] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#367D78]/20">
            {resourcesItem.statusBadge}
          </div>
        </div>
      ),
    },
    // Row 3: Specialty circles (1 col) + Seminars and live sessions (2 cols) = 3 cols
    {
      name: circlesItem.title,
      description: circlesItem.description,
      className: 'col-span-3 lg:col-span-1',
      href: '#apply-form',
      cta: 'View Clinical Circles',
      Icon: Orbit,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#17354B]/10 via-[#367D78]/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#17354B]">
            <Orbit className="size-28" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#5A6E7D]/10 text-[#5A6E7D] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#5A6E7D]/20">
            {circlesItem.statusBadge}
          </div>
        </div>
      ),
    },
    {
      name: seminarsItem.title,
      description: seminarsItem.description,
      className: 'col-span-3 lg:col-span-2',
      href: '#apply-form',
      cta: 'Join Teaching Sessions',
      Icon: Presentation,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#D96B60]/10 via-[#367D78]/5 to-transparent transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none">
          <div className="absolute top-6 right-6 opacity-15 text-[#D96B60]">
            <Presentation className="size-36" />
          </div>
          <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-[#5A6E7D]/10 text-[#5A6E7D] text-[11px] font-mono font-semibold tracking-wider uppercase border border-[#5A6E7D]/20">
            {seminarsItem.statusBadge}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-[#17354B]/10 relative overflow-hidden"
      aria-label="Community Features"
    >
      <Container size="wide" className="max-w-7xl 2xl:max-w-[1400px]">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            align="center"
          />
        </div>

        {/* Official Magic UI Bento Grid - Matching Homepage Physics */}
        <BentoGrid>
          {bentoCards.map((card) => (
            <BentoCard
              key={card.name}
              name={card.name}
              description={card.description}
              Icon={card.Icon}
              href={card.href}
              cta={card.cta}
              className={card.className}
              background={card.background}
            />
          ))}
        </BentoGrid>
      </Container>
    </section>
  );
}