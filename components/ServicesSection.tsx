'use client';

import React from 'react';
import {
  HardHat,
  Home,
  Building2,
  CalendarCheck,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService: _onSelectService }: ServicesSectionProps) {
  const services = [
    {
      number: '01',
      title: 'General Construction',
      description:
        'Building construction services focused on quality execution, practical planning, and dependable project delivery.',
      icon: HardHat,
    },
    {
      number: '02',
      title: 'Residential Construction',
      description:
        'Construction solutions for homes and residential developments, with attention to functionality, comfort, and finish quality.',
      icon: Home,
    },
    {
      number: '03',
      title: 'Commercial Construction',
      description:
        'Building solutions for commercial spaces, offices, and business environments.',
      icon: Building2,
    },
    {
      number: '04',
      title: 'Project Management',
      description:
        'Project coordination, scheduling, execution oversight, and communication throughout the construction process.',
      icon: CalendarCheck,
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-neutral-100/70 text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#FF007B]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF007B]">
                WHAT WE DO
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-black leading-tight [text-wrap:balance]">
              Construction Solutions From Concept to Completion.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-xl">
              Explore construction services designed to support your project from initial planning
              through execution and handover.
            </p>
          </div>
        </div>

        {/* 4 Services Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0 || index === 2;

            return (
              <div
                key={item.number}
                className={`relative p-8 rounded-lg border transition-all duration-300 flex flex-col group ${
                  isFeatured
                    ? 'bg-neutral-900 border-neutral-800 text-white shadow-xl hover:border-[#FF007B]/60'
                    : 'bg-white border-neutral-200/90 text-neutral-900 shadow-xs hover:border-[#FF007B] hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Bar: Icon and Clean Editorial Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded flex items-center justify-center transition-colors ${
                        isFeatured
                          ? 'bg-[#FF007B] text-white'
                          : 'bg-neutral-100 text-black group-hover:bg-[#FF007B] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`font-heading font-bold text-lg tracking-wider ${
                        isFeatured ? 'text-neutral-500' : 'text-neutral-400'
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`font-heading font-bold text-xl mb-3 tracking-tight group-hover:text-[#FF007B] transition-colors ${
                      isFeatured ? 'text-white' : 'text-black'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isFeatured ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
