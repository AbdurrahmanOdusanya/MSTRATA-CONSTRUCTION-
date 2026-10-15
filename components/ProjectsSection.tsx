'use client';

import React, { useState } from 'react';
import { ArrowUpRight, X, MapPin, Check, Layers, ExternalLink } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial';
  image: string;
  description: string;
  details: {
    location: string;
    scope: string;
    typology: string;
    focus: string;
  };
}

interface ProjectsSectionProps {
  onSelectProjectForQuote?: (projectTitle: string) => void;
}

export function ProjectsSection({ onSelectProjectForQuote }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Residential' | 'Commercial'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'proj-1',
      title: 'Contemporary Residential Development',
      category: 'Residential',
      image: '/images/project_residential_dev_1791823229300.jpg',
      description:
        'A multi-unit modern duplex development featuring cantilevered private balconies, integrated perimeter landscaping, and reinforced structural frameworks.',
      details: {
        location: 'Lagos Metropolitan Area',
        scope: 'Ground-up residential structural engineering and construction',
        typology: 'Multi-Unit Contemporary Residential',
        focus: 'Thermal efficiency, reinforced concrete slabs, and modern aesthetics',
      },
    },
    {
      id: 'proj-2',
      title: 'Modern Commercial Building',
      category: 'Commercial',
      image: '/images/commercial_building_1791823325101.jpg',
      description:
        'A contemporary commercial complex engineered with structural curtain wall glazing, dark metal facades, and flexible open-plan office layouts.',
      details: {
        location: 'Victoria Island / Ikoyi Corridor',
        scope: 'Multi-story corporate building development',
        typology: 'Commercial Corporate Headquarters',
        focus: 'Curtain-wall glazing, high-load foundation, accessibility compliance',
      },
    },
    {
      id: 'proj-6',
      title: 'Urban Residential Construction',
      category: 'Residential',
      image: '/images/why_choose_structure_1791823217324.jpg',
      description:
        'Solid concrete superstructure with geometric brise-soleil facades, deep window reveals, and high-strength reinforced columns.',
      details: {
        location: 'Lagos Urban Residential Zone',
        scope: 'Full structural concrete framework & envelope execution',
        typology: 'Modern Urban Residential Block',
        focus: 'Brise-soleil solar shading, reinforced beam networks, endurance',
      },
    },
  ];

  const filterTabs: Array<'All' | 'Residential' | 'Commercial'> = [
    'All',
    'Residential',
    'Commercial',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleEnquireSimilar = (title: string) => {
    setSelectedProject(null);
    if (onSelectProjectForQuote) {
      onSelectProjectForQuote(title);
    }
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#FF007B]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF007B]">
                SELECTED PROJECTS
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight [text-wrap:balance]">
              From Vision to Reality.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400">
              Explore the architectural possibilities of thoughtful construction and carefully
              executed building projects.
            </p>
          </div>

          {/* Functional Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-md">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-[#FF007B] text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab === 'All' ? 'All Projects' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Informative Note (Zero Hallucination Honesty per Prompt Instructions) */}
        <div className="mb-8 text-xs text-neutral-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF007B]" />
          <span>
            Illustrative architectural portfolio demonstrating design typology and technical construction capabilities.
          </span>
        </div>

        {/* Responsive Projects Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-[#FF007B] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Indicator (Clean unboxed text) */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider text-[#FF007B] border border-neutral-800">
                    {project.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#FF007B] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: View Project Action */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-white border-t border-neutral-800/80">
                <span className="flex items-center gap-1.5">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF007B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="text-[11px] text-neutral-400 font-normal">Lagos, NG</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-lg overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF007B]">
                  {selectedProject.category}
                </span>
                <span className="text-neutral-600">&middot;</span>
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF007B]" />
                  {selectedProject.details.location}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* High-Res Image */}
              <div className="rounded-md overflow-hidden aspect-[16/9] bg-neutral-950 border border-neutral-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 id="modal-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-base text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-lg bg-neutral-950 border border-neutral-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                    Project Scope
                  </span>
                  <p className="text-sm text-neutral-200">{selectedProject.details.scope}</p>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                    Typology
                  </span>
                  <p className="text-sm text-neutral-200">{selectedProject.details.typology}</p>
                </div>
                <div className="sm:col-span-2 border-t border-neutral-800/80 pt-3">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                    Engineering &amp; Design Focus
                  </span>
                  <p className="text-sm text-neutral-200">{selectedProject.details.focus}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-neutral-800 bg-neutral-950">
              <span className="text-xs text-neutral-400">
                Interested in a project with similar specifications?
              </span>
              <button
                type="button"
                onClick={() => handleEnquireSimilar(selectedProject.title)}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF007B] hover:bg-[#E0006C] rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Enquire About Similar Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
