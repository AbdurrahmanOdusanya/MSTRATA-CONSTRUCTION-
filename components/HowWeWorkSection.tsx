'use client';

import React from 'react';
import { Compass, DraftingCompass, Building, CheckCircle2, ArrowRight } from 'lucide-react';

export function HowWeWorkSection() {
  const steps = [
    {
      number: '01',
      phase: 'DISCOVER',
      title: 'Consultation & Discovery',
      description:
        'We begin by understanding your goals, project requirements, site considerations, and expectations.',
      details: [
        'Site review & client goals alignment',
        'Requirements & functional brief assessment',
        'Initial timeline & scope considerations',
      ],
      icon: Compass,
    },
    {
      number: '02',
      phase: 'PLAN',
      title: 'Practical Project Planning',
      description:
        'We develop a practical project approach that considers scope, materials, scheduling, coordination, and the intended outcome.',
      details: [
        'Resource & material logistics planning',
        'Milestone scheduling & phase sequencing',
        'Site preparation & contractor coordination',
      ],
      icon: DraftingCompass,
    },
    {
      number: '03',
      phase: 'BUILD & DELIVER',
      title: 'Execution & Quality Delivery',
      description:
        'We move into execution, maintain communication throughout the process, and focus on quality at each stage through project completion.',
      details: [
        'Disciplined on-site construction oversight',
        'Regular milestone progress communication',
        'Rigorous quality checks through final inspection & handover',
      ],
      icon: Building,
    },
  ];

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-we-work" className="py-24 lg:py-32 bg-neutral-100/60 text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#FF007B]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF007B]">
              OUR PROCESS
            </span>
            <span className="w-8 h-[2px] bg-[#FF007B]" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-black leading-tight [text-wrap:balance]">
            A Clear Process. A Better Building Experience.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed [text-wrap:balance]">
            We believe successful construction starts with understanding the vision, planning
            carefully, and executing each stage with attention to detail.
          </p>
        </div>

        {/* Step-by-Step 3 Stages Layout (Buildora Reference inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle connecting line across desktop */}
          <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-[2px] bg-neutral-300 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isMiddle = idx === 1;

            return (
              <div
                key={step.number}
                className={`relative z-10 p-8 rounded-lg border transition-all duration-300 flex flex-col justify-between group ${
                  isMiddle
                    ? 'bg-neutral-900 border-neutral-800 text-white shadow-xl'
                    : 'bg-white border-neutral-200 text-neutral-900 shadow-xs hover:border-[#FF007B]'
                }`}
              >
                <div>
                  {/* Top Badge: Number and Phase */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded flex items-center justify-center font-heading font-extrabold text-2xl transition-transform group-hover:scale-105 ${
                        isMiddle
                          ? 'bg-[#FF007B] text-white shadow-md'
                          : 'bg-neutral-100 text-black group-hover:bg-[#FF007B] group-hover:text-white'
                      }`}
                    >
                      {step.number}
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isMiddle ? 'text-[#FF007B]' : 'text-neutral-500'
                      }`}
                    >
                      {step.phase}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`font-heading font-bold text-xl mb-3 tracking-tight ${
                      isMiddle ? 'text-white' : 'text-black'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isMiddle ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 pt-4 border-t border-neutral-200/50 mb-6">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isMiddle ? 'text-[#FF007B]' : 'text-[#FF007B]'
                          }`}
                        />
                        <span className={isMiddle ? 'text-neutral-300' : 'text-neutral-600'}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom indicator */}
                <div
                  className={`pt-4 border-t text-[11px] font-semibold tracking-wider uppercase flex items-center justify-between ${
                    isMiddle ? 'border-neutral-800 text-neutral-400' : 'border-neutral-100 text-neutral-500'
                  }`}
                >
                  <span>Stage {step.number} of 03</span>
                  <span className="text-[#FF007B]">&bull;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#FF007B] transition-colors rounded cursor-pointer shadow-md"
          >
            <span>Ready to Start Stage 01? Contact MStrata</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
