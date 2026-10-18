'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  X,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import { allProjects, ProjectItem } from '@/lib/projectsData';
import { Reveal } from './Reveal';

interface ProjectsSectionProps {
  onSelectProjectForQuote?: (projectTitle: string) => void;
}

export function ProjectsSection({ onSelectProjectForQuote }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [fullscreenGalleryIndex, setFullscreenGalleryIndex] = useState<number | null>(null);

  // Exactly 4 featured project cards for the home page project section
  const displayedProjects = allProjects.slice(0, 4);

  const handleEnquireSimilar = (title: string) => {
    setSelectedProject(null);
    setFullscreenGalleryIndex(null);
    if (onSelectProjectForQuote) {
      onSelectProjectForQuote(title);
    }
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Gallery Navigation Handlers
  const currentGallery = selectedProject?.galleryImages || [];

  const handlePrevGalleryImage = useCallback(() => {
    setFullscreenGalleryIndex((prev) => {
      if (prev === null || currentGallery.length === 0) return null;
      return prev > 0 ? prev - 1 : currentGallery.length - 1;
    });
  }, [currentGallery.length]);

  const handleNextGalleryImage = useCallback(() => {
    setFullscreenGalleryIndex((prev) => {
      if (prev === null || currentGallery.length === 0) return null;
      return prev < currentGallery.length - 1 ? prev + 1 : 0;
    });
  }, [currentGallery.length]);

  // Keyboard navigation for fullscreen carousel
  useEffect(() => {
    if (fullscreenGalleryIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNextGalleryImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevGalleryImage();
      } else if (e.key === 'Escape') {
        setFullscreenGalleryIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenGalleryIndex, handleNextGalleryImage, handlePrevGalleryImage]);

  // Touch swipe support for mobile and tablet
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNextGalleryImage();
    } else if (distance < -minSwipeDistance) {
      handlePrevGalleryImage();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal direction="up" distance={24} duration={0.65} className="mb-12 lg:mb-16 max-w-2xl">
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
        </Reveal>

        {/* Responsive Projects Gallery (Top 4 Featured Projects on Home) with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => (
            <Reveal
              key={project.id}
              direction="up"
              distance={28}
              delay={idx * 0.1}
              duration={0.65}
              className="h-full"
            >
              <div
                onClick={() => {
                  setSelectedProject(project);
                  setFullscreenGalleryIndex(null);
                }}
                className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-[#FF007B] transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  {/* Project Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
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
                  <span className="text-[11px] text-neutral-400 font-normal truncate max-w-[150px] text-right">
                    {project.details.location}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Explore All Projects Link Button */}
        <Reveal direction="up" distance={20} delay={0.2} duration={0.6} className="mt-12 sm:mt-16 text-center flex flex-col items-center justify-center gap-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-xl bg-[#FF007B] hover:bg-[#E0006C] border border-[#FF007B] text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-[#FF007B]/30 hover:shadow-2xl hover:shadow-[#FF007B]/50 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>Explore Our Projects</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
          <p className="text-xs text-neutral-400">
            View full portfolio with all completed &amp; ongoing building projects across Lagos
          </p>
        </Reveal>
      </div>

      {/* Elegant Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => {
            setSelectedProject(null);
            setFullscreenGalleryIndex(null);
          }}
        >
          <div
            className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden shadow-2xl text-white max-h-[92vh] flex flex-col"
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
                  setFullscreenGalleryIndex(null);
                }}
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* High-Res Main Showcase Image (Strictly Main Project Image Only) */}
              <div className="rounded-lg overflow-hidden aspect-[16/9] bg-neutral-950 border border-neutral-800 relative shadow-inner">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-neutral-700/80 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#FF007B]" />
                  <span>Main Project Showcase</span>
                </div>
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
                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-neutral-800">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FF007B]" />
                        <span>Project Execution &amp; Site Progress Gallery</span>
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Click any phase card to inspect in full-screen interactive carousel
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-800/90 text-neutral-300 w-fit">
                      {selectedProject.galleryImages.length} Milestones
                    </span>
                  </div>

                  {/* Larger Phase Image Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                    {selectedProject.galleryImages.map((imgItem, idx) => (
                      <div
                        key={idx}
                        onClick={() => setFullscreenGalleryIndex(idx)}
                        className="group/img text-left rounded-xl overflow-hidden border border-neutral-800 hover:border-[#FF007B] transition-all duration-300 bg-neutral-950 p-3 sm:p-3.5 flex flex-col gap-3 cursor-pointer shadow-md hover:shadow-xl hover:shadow-[#FF007B]/10 hover:-translate-y-0.5"
                      >
                        {/* High-Impact Big Image Preview */}
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-neutral-900">
                          <img
                            src={imgItem.src}
                            alt={imgItem.caption}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover/img:opacity-20 transition-opacity" />
                          <span className="absolute top-2.5 left-2.5 bg-black/85 backdrop-blur-sm text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded text-[#FF007B] border border-neutral-700/80 shadow-md">
                            {imgItem.stage || `Phase 0${idx + 1}`}
                          </span>
                          <span className="absolute bottom-2.5 right-2.5 bg-black/85 backdrop-blur-sm text-xs font-semibold text-white px-2.5 py-1 rounded flex items-center gap-1.5 opacity-90 group-hover/img:opacity-100 transition-opacity border border-neutral-700/80 shadow-md">
                            <Maximize2 className="w-3.5 h-3.5 text-[#FF007B]" />
                            <span>View Fullscreen</span>
                          </span>
                        </div>

                        {/* Title and Stage Meta */}
                        <div className="space-y-1 px-1">
                          <h5 className="text-sm sm:text-base font-bold text-white group-hover/img:text-[#FF007B] transition-colors leading-snug">
                            {imgItem.caption}
                          </h5>
                          <div className="flex items-center justify-between text-xs text-neutral-400 pt-0.5">
                            <span>Stage {idx + 1} of {selectedProject.galleryImages?.length}</span>
                            <span className="text-[#FF007B] text-[11px] font-medium flex items-center gap-1">
                              Tap to open carousel &rarr;
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
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

      {/* Fullscreen Interactive Carousel Lightbox */}
      {selectedProject && fullscreenGalleryIndex !== null && selectedProject.galleryImages && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setFullscreenGalleryIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Info, Progress & Close Button */}
          <div
            className="flex items-center justify-between gap-4 px-3 sm:px-5 py-2.5 border-b border-neutral-800/80 bg-neutral-950/70 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="bg-[#FF007B] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded shrink-0">
                {selectedProject.galleryImages[fullscreenGalleryIndex].stage || `Phase 0${fullscreenGalleryIndex + 1}`}
              </span>
              <div className="truncate">
                <h4 className="text-sm sm:text-base font-bold text-white truncate">
                  {selectedProject.galleryImages[fullscreenGalleryIndex].caption}
                </h4>
                <p className="text-[11px] sm:text-xs text-neutral-400 truncate">
                  {selectedProject.title} &middot; Milestone {fullscreenGalleryIndex + 1} of {selectedProject.galleryImages.length}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden sm:inline-block text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                {fullscreenGalleryIndex + 1} / {selectedProject.galleryImages.length}
              </span>
              <button
                type="button"
                onClick={() => setFullscreenGalleryIndex(null)}
                className="p-2 sm:p-2.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close fullscreen gallery"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Main Carousel Display Area */}
          <div
            className="relative flex-1 flex items-center justify-center py-2 sm:py-4 px-2 sm:px-14 my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Image Arrow */}
            <button
              type="button"
              onClick={handlePrevGalleryImage}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3.5 rounded-full bg-neutral-900/90 hover:bg-[#FF007B] text-white border border-neutral-700/80 hover:border-[#FF007B] transition-all shadow-xl hover:scale-105 cursor-pointer backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Current Active Image in Full Scale */}
            <div className="relative max-h-[64vh] sm:max-h-[72vh] md:max-h-[76vh] max-w-full flex items-center justify-center">
              <img
                src={selectedProject.galleryImages[fullscreenGalleryIndex].src}
                alt={selectedProject.galleryImages[fullscreenGalleryIndex].caption}
                className="max-h-[64vh] sm:max-h-[72vh] md:max-h-[76vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-neutral-800"
              />
            </div>

            {/* Next Image Arrow */}
            <button
              type="button"
              onClick={handleNextGalleryImage}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3.5 rounded-full bg-neutral-900/90 hover:bg-[#FF007B] text-white border border-neutral-700/80 hover:border-[#FF007B] transition-all shadow-xl hover:scale-105 cursor-pointer backdrop-blur-md"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom Controls: Thumbnail Bar + Swipe Hint */}
          <div
            className="flex flex-col items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 border-t border-neutral-800/80 bg-neutral-950/70 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Thumbnail previews for fast jumping */}
            <div className="flex items-center gap-2.5 overflow-x-auto max-w-full py-1 px-1 scrollbar-thin">
              {selectedProject.galleryImages.map((thumb, tIdx) => {
                const isActive = tIdx === fullscreenGalleryIndex;
                return (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => setFullscreenGalleryIndex(tIdx)}
                    className={`relative rounded-md overflow-hidden flex-shrink-0 transition-all cursor-pointer ${
                      isActive
                        ? 'ring-2 ring-[#FF007B] border-[#FF007B] scale-105 shadow-md shadow-[#FF007B]/30'
                        : 'border border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-600'
                    }`}
                  >
                    <img
                      src={thumb.src}
                      alt={thumb.caption}
                      className="w-14 h-10 sm:w-18 sm:h-12 object-cover"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[8px] sm:text-[9px] text-center text-white font-mono leading-tight py-0.5 truncate">
                      {thumb.stage || `0${tIdx + 1}`}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Hints */}
            <div className="flex items-center justify-between w-full text-[11px] text-neutral-400 px-2">
              <span className="hidden sm:inline">Use &larr; / &rarr; keys or side arrows to navigate &middot; Esc to close</span>
              <span className="sm:hidden mx-auto text-neutral-400">Swipe left/right or tap arrows to view milestones</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
