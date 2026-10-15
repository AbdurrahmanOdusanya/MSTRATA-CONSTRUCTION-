'use client';

import React, { useState } from 'react';
import { ArrowUpRight, X, MapPin, Check, Layers, ExternalLink } from 'lucide-react';

interface ProjectGalleryImage {
  src: string;
  caption: string;
  stage?: string;
}

interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial';
  image: string;
  galleryImages?: ProjectGalleryImage[];
  description: string;
  details: {
    location: string;
    scope: string;
    focus: string;
    typology?: string;
  };
}

interface ProjectsSectionProps {
  onSelectProjectForQuote?: (projectTitle: string) => void;
}

export function ProjectsSection({ onSelectProjectForQuote }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'proj-byd',
      title: 'BYD Commercial Automotive Showroom',
      category: 'Commercial',
      image: '/images/BYD/BYD Finished Showroom Handover.jpg',
      galleryImages: [
        {
          src: '/images/BYD/BYD Piling Works AND Foundation Drilling.jpg',
          caption: 'Piling Works & Foundation Drilling',
          stage: 'Phase 01',
        },
        {
          src: '/images/BYD/BYD Ground Beam Formwork & Reinforcement.jpg',
          caption: 'Ground Beam Formwork & Reinforcement',
          stage: 'Phase 02',
        },
        {
          src: '/images/BYD/BYD Ground Floor Oversite Concrete Pouring.jpg',
          caption: 'Ground Floor Oversite Concrete Pouring',
          stage: 'Phase 03',
        },
        {
          src: '/images/BYD/BYD First Floor Decking & Beam Formwork Setup.jpg',
          caption: 'First Floor Decking & Beam Formwork Setup',
          stage: 'Phase 04',
        },
        {
          src: '/images/BYD/BYD Structural Frame Completion.jpg',
          caption: 'Structural Frame Completion',
          stage: 'Phase 05',
        },
        {
          src: '/images/BYD/BYD Finished Showroom Handover.jpg',
          caption: 'Finished Showroom Handover',
          stage: 'Phase 06',
        },
      ],
      description:
        'A modern multi-tier commercial showroom featuring expansive curtain wall glazing, heavy-duty industrial interlocking driveways, corporate composite façade cladding, and reinforced structural frameworks designed for high-load vehicle displays.',
      details: {
        location: 'Victoria Island / Lekki Corridor, Lagos',
        scope:
          'Ground-up commercial showroom engineering, structural framing, exterior envelope fabrication, and turn-key handover.',
        focus:
          'Deep piled subgrade stabilization, load-bearing ground beam gridlines, suspended structural floor systems, integrated curtain-wall glazing, and corporate brand architectural finishes.',
      },
    },
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
        focus: 'Brise-soleil solar shading, reinforced beam networks, endurance',
      },
    },
  ];

  const filteredProjects = projects;

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
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#FF007B]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF007B]">
                OUR PROJECTS
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
        </div>

        {/* Responsive Projects Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setActiveImage(project.image);
              }}
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
          onClick={() => {
            setSelectedProject(null);
            setActiveImage(null);
          }}
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
                onClick={() => {
                  setSelectedProject(null);
                  setActiveImage(null);
                }}
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* High-Res Image (Interactive with Gallery) */}
              <div className="rounded-md overflow-hidden aspect-[16/9] bg-neutral-950 border border-neutral-800 relative">
                <img
                  src={activeImage || selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center transition-all duration-300"
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

              {/* Technical Specifications Grid (Typology Section Removed) */}
              <div className="space-y-4 p-5 rounded-lg bg-neutral-950 border border-neutral-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                    Project Scope
                  </span>
                  <p className="text-sm text-neutral-200 leading-relaxed">{selectedProject.details.scope}</p>
                </div>
                <div className="border-t border-neutral-800/80 pt-3">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                    Engineering &amp; Design Focus
                  </span>
                  <p className="text-sm text-neutral-200 leading-relaxed">{selectedProject.details.focus}</p>
                </div>
              </div>

              {/* Chronological Construction Execution Gallery */}
              {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF007B]" />
                      <span>Project Execution &amp; Site Progress Gallery</span>
                    </h4>
                    <span className="text-[11px] text-neutral-500 font-medium">
                      {selectedProject.galleryImages.length} Milestones
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedProject.galleryImages.map((imgItem, idx) => {
                      const isCurrent = (activeImage || selectedProject.image) === imgItem.src;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImage(imgItem.src)}
                          className={`text-left group/img rounded-lg overflow-hidden border transition-all duration-200 bg-neutral-950 p-1.5 flex flex-col gap-1.5 cursor-pointer ${
                            isCurrent
                              ? 'border-[#FF007B] ring-2 ring-[#FF007B]/40 shadow-lg'
                              : 'border-neutral-800 hover:border-neutral-700'
                          }`}
                        >
                          <div className="relative aspect-[4/3] rounded overflow-hidden bg-black">
                            <img
                              src={imgItem.src}
                              alt={imgItem.caption}
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <span className="absolute top-1.5 left-1.5 bg-black/85 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded text-[#FF007B] border border-neutral-800">
                              {imgItem.stage || `Phase 0${idx + 1}`}
                            </span>
                          </div>
                          <span className="text-[11px] font-medium text-neutral-300 group-hover/img:text-white line-clamp-1 px-1">
                            {imgItem.caption}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
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
