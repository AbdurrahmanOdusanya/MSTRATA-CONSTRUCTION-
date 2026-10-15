'use client';

import React from 'react';
import {
  Hammer,
  MessagesSquare,
  DraftingCompass,
  HardHat,
  Ruler,
  Handshake,
} from 'lucide-react';

export function WhyChooseUsSection() {
  const leftBenefits = [
    {
      index: '01',
      title: 'Quality Craftsmanship',
      description: 'We emphasize careful workmanship, durable structural materials, and strict attention to details that matter.',
      icon: Hammer,
    },
    {
      index: '02',
      title: 'Transparent Communication',
      description: 'We value clear conversations, honest progress updates, and mutual alignment from start to finish.',
      icon: MessagesSquare,
    },
    {
      index: '03',
      title: 'Practical Project Planning',
      description: 'We approach every build with structured attention to scope, resources, timeline sequencing, and execution.',
      icon: DraftingCompass,
    },
  ];

  const rightBenefits = [
    {
      index: '04',
      title: 'Safety & Site Responsibility',
      description: 'We prioritize disciplined on-site protocols, safe working environments, and responsible construction practices.',
      icon: HardHat,
    },
    {
      index: '05',
      title: 'Attention to Detail',
      description: 'We maintain rigorous standards at every stage, from initial foundation setting through final project handover.',
      icon: Ruler,
    },
    {
      index: '06',
      title: 'Client-Focused Approach',
      description: 'We listen to client goals and tailor structural solutions directly aligned with your property development vision.',
      icon: Handshake,
    },
  ];



  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 lg:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#FF007B]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF007B]">
              THE MSTRATA DIFFERENCE
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-black leading-tight [text-wrap:balance]">
            Built on Quality. Driven by Trust.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Every project deserves thoughtful planning, disciplined execution, and an engineering team
            that values the outcome as much as the process.
          </p>
        </div>

        {/* 3-Column Image-and-Benefits Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          {/* Left Benefits Column */}
          <div className="order-2 lg:order-1 lg:col-span-4 space-y-4 sm:space-y-5">
            {leftBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 sm:p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-[#FF007B]/50 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FF007B]/10 text-[#FF007B] flex items-center justify-center shrink-0 group-hover:bg-[#FF007B] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="font-heading font-bold text-base sm:text-lg text-neutral-900 group-hover:text-[#FF007B] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-mono font-bold text-neutral-400">
                          {item.index}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Confident Construction Engineer Focal Portrait */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center py-2 lg:py-0">
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer Subtle Architectural Accent Frame */}
              <div className="absolute -inset-2.5 rounded-[2.5rem] border border-dashed border-[#FF007B]/25 pointer-events-none -z-0" />

              {/* Architectural Backdrop Arch / Pedestal Container */}
              <div className="relative rounded-[2.25rem] bg-gradient-to-b from-neutral-100 via-neutral-100/90 to-neutral-200/90 border border-neutral-200/90 overflow-hidden shadow-2xl pt-6 sm:pt-8 px-2 sm:px-4 pb-0 flex flex-col items-center justify-end">
                {/* Architectural Blueprint Decorative Circle & Grid */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 -z-0">
                  <div className="w-72 h-72 rounded-full border border-neutral-300" />
                  <div className="absolute w-56 h-56 rounded-full border border-dashed border-[#FF007B]/40" />
                  <div className="absolute w-40 h-40 rounded-full border border-neutral-300" />
                </div>

                {/* Confident Construction Engineer Portrait (Cutout PNG) */}
                <div className="relative z-10 w-full flex justify-center items-end pb-0">
                  <img
                    src="/images/1791977003154 (2).png"
                    alt="MStrata Construction Lead Engineer on site with hardhat and architectural plans"
                    className="w-full max-w-[350px] sm:max-w-[390px] h-auto object-contain object-bottom align-bottom block drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)] select-none pointer-events-none -mb-px"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Benefits Column */}
          <div className="order-3 lg:order-3 lg:col-span-4 space-y-4 sm:space-y-5">
            {rightBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 sm:p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-[#FF007B]/50 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FF007B]/10 text-[#FF007B] flex items-center justify-center shrink-0 group-hover:bg-[#FF007B] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="font-heading font-bold text-base sm:text-lg text-neutral-900 group-hover:text-[#FF007B] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-mono font-bold text-neutral-400">
                          {item.index}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
