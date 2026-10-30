import React from 'react';
import { Sparkles, Stethoscope, Activity, Pill, ShieldAlert } from 'lucide-react';
import { Container } from '@/components/ui/container';

export function FutureSpecialtiesRoadmap() {
  const futureDisciplines = [
    {
      title: 'Emergency Medical Services & Resuscitation',
      code: 'EMS-ADV',
      badge: 'In Curriculum Research',
      description:
        'Advanced airway management, clinical shock protocols, and acute emergency algorithms led by Dr. Wasim Adil Khan (PGDEMS).',
      icon: Activity,
    },
    {
      title: 'ICU & Mechanical Ventilation Essentials',
      code: 'ICU-VENT',
      badge: 'Future Specialty',
      description:
        'Arterial blood gas (ABG) clinical interpretation, ventilator waveforms, and hemodynamic monitoring for intensive care trainees.',
      icon: Stethoscope,
    },
    {
      title: 'Applied Clinical Pharmacology in Practice',
      code: 'PHARM-CLI',
      badge: 'Future Specialty',
      description:
        'Bedside drug dosages, emergency infusions, and therapeutic mechanisms demystified for clinical rotations.',
      icon: Pill,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#17354B]/10">
      <Container size="wide">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-[#367D78] bg-[#367D78]/10">
            <Sparkles className="w-3.5 h-3.5" />
            Platform Vision &amp; Clinical Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17354B] font-editorial">
            Upcoming Clinical Specialties Roadmap
          </h2>
          <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed">
            EasyMedLearning is built as a long-term clinical education platform. While our immediate focus is entirely on perfecting the flagship ECG Masterclass, these subsequent disciplines are planned for development.
          </p>
        </div>

        {/* Future Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futureDisciplines.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#17354B]/10 shadow-sm space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#17354B]/5 flex items-center justify-center text-[#17354B]">
                      <Icon className="w-5 h-5 text-[#367D78]" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#17354B]/5 text-[#5A6E7D]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#17354B] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A6E7D] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#17354B]/5 flex items-center justify-between text-[11px] font-mono text-[#5A6E7D]">
                  <span>Track ID: {item.code}</span>
                  <span className="text-[#367D78] font-medium">In Research</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Production Transparency Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#17354B]/5 border border-[#17354B]/10 text-xs sm:text-sm text-[#5A6E7D] flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-[#367D78] shrink-0" />
          <span>
            <strong className="text-[#17354B]">Zero False Pre-Orders:</strong> Only the *Absolute Guide to ECG Interpretation* is currently open for launch preparation. Future disciplines will be announced only when video curriculum and textbooks pass rigorous clinical peer review.
          </span>
        </div>

      </Container>
    </section>
  );
}
