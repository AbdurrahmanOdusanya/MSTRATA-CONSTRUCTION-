'use client';

import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 lg:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#FF007B]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF007B]">
              ABOUT MSTRATA
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-black leading-tight [text-wrap:balance]">
            Building With Purpose.{' '}
            <span className="text-neutral-500">Creating Lasting Value.</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Written Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-5 text-neutral-600 text-base sm:text-lg leading-relaxed">
              <p>
                MStrata Construction Company is committed to delivering quality construction solutions
                through careful planning, skilled execution, and attention to detail. We approach every
                project with a focus on structural integrity, practical design, efficient coordination,
                and lasting value.
              </p>
              <p>
                From the earliest planning stages to project completion, our goal is to help clients
                transform their ideas into well-executed spaces through dependable service and a
                commitment to quality.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Photography */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative Pink Corner Outline */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-[#FF007B] rounded-tr-lg -z-0 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-neutral-300 rounded-bl-lg -z-0 pointer-events-none" />

              <div className="relative z-10 rounded-lg overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100 aspect-[4/3] group">
                <img
                  src="/images/MSTRATA Team Planning Construction Project.jpg"
                  alt="MStrata team planning construction project"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
