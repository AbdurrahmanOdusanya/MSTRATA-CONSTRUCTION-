'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>('General Construction');
  const [projectNote, setProjectNote] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const handleSelectProjectForQuote = (projectTitle: string) => {
    setProjectNote(projectTitle);
    if (projectTitle.toLowerCase().includes('residential')) {
      setSelectedService('Residential Construction');
    } else if (projectTitle.toLowerCase().includes('commercial')) {
      setSelectedService('Commercial Construction');
    } else {
      setSelectedService('General Construction');
    }
  };

  const handleQuoteClick = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#FF007B] selection:text-white">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Page Flow (Exact Core Sections Requested) */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 5. Projects Section (Dark architectural section with filters & modal) */}
        <ProjectsSection onSelectProjectForQuote={handleSelectProjectForQuote} />

        {/* 6. Contact Section (With direct WhatsApp and honest form) */}
        <ContactSection
          initialService={selectedService}
          initialProjectNote={projectNote}
        />
      </main>

      {/* 8. Footer Section (Dark architectural footer with watermark) */}
      <Footer />

      {/* Floating Action Controls */}
      <FloatingActions />
    </div>
  );
}
