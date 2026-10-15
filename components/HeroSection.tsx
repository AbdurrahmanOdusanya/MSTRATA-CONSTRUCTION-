'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-white pt-[76px] sm:pt-[82px] lg:pt-[88px] pb-10 sm:pb-14 lg:pb-16 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* High-Resolution Hero Card Container with White Space Around and Underneath */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative rounded-[16px] border border-neutral-200/90 shadow-sm overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center bg-black text-white p-6 sm:p-10 md:p-14 lg:p-20">
          {/* Background Architectural Photography (Static, No Animation) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/images/hero_construction_lagos_1791823192443.jpg"
              alt="MStrata Construction Company site in Lagos Nigeria"
              className="w-full h-full object-cover object-center"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Subtle dark gradient overlay to keep text legible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50 lg:to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
            {/* Architectural subtle grid lines */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>



          {/* Hero Content */}
          <div className="relative z-20 max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-3xl space-y-6 sm:space-y-8 py-4 sm:py-6">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#FF007B]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF007B]">
                BUILDING WITH PURPOSE
              </span>
            </div>

            {/* Main Headline (Avant Garde font, strict containment, no orphan words) */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] [text-wrap:balance]">
              We Build More Than Structures.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-400">
                We Build Confidence.
              </span>
            </h1>

            {/* Supporting Text (DM Sans) */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
              MStrata Construction Company delivers dependable construction solutions through quality
              craftsmanship, thoughtful planning, and a commitment to lasting results.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 active:scale-[0.98] border border-white/20 hover:border-white/40 transition-all rounded backdrop-blur-sm group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF007B]"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
