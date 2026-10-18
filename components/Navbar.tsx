'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/' + href;
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/90 py-3 shadow-md'
          : 'bg-white/90 backdrop-blur-md border-b border-neutral-200/70 py-3.5 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between md:justify-center">
          {/* Centralized Container for Desktop & Tablet (Logo + Nav Links + Contact Us CTA) */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-5 lg:gap-8 xl:gap-10">
            {/* Brand Logo using MSTRATA FOOTER LOGO.png */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center group whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF007B] rounded"
              aria-label="MStrata Construction Company Home"
            >
              <img
                src="/images/MSTRATA FOOTER LOGO.png"
                alt="MStrata Construction Company"
                className="h-8 sm:h-9 md:h-9 lg:h-10 w-auto max-w-[170px] sm:max-w-[210px] md:max-w-[230px] lg:max-w-[260px] object-contain group-hover:scale-[1.02] transition-transform"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Subtle Vertical Divider between Centralized Logo and Links on Desktop/Tablet */}
            <div className="hidden md:block w-px h-6 bg-neutral-200" />

            {/* Centralized Navigation Links for Tablet & Desktop */}
            <nav
              className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8 text-xs sm:text-sm font-semibold tracking-wide text-neutral-700"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="whitespace-nowrap hover:text-[#FF007B] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF007B] rounded-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF007B] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Centralized Desktop/Tablet Contact Us CTA Button */}
            <div className="hidden md:flex items-center ml-1 lg:ml-2">
              <button
                type="button"
                onClick={() => handleNavClick('#contact')}
                className="inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF007B] hover:bg-[#E0006C] active:scale-[0.98] transition-all rounded shadow-md shadow-[#FF007B]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF007B]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile Right Menu Toggle (Only on < md, no duplicate Contact CTA) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF007B]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-neutral-900" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Only on < md) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-neutral-200 px-5 pt-4 pb-6 mt-3 space-y-4 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col items-center space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-neutral-800 hover:text-[#FF007B] py-2 w-full text-center border-b border-neutral-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            {/* Single Prominent Mobile Contact CTA Button */}
            <button
              type="button"
              onClick={() => handleNavClick('#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF007B] hover:bg-[#E0006C] active:scale-[0.98] transition-all rounded shadow-md shadow-[#FF007B]/25"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-neutral-700 font-medium">
              <a
                href="tel:+2347036189196"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 rounded text-neutral-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF007B]" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/2348061945604"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 rounded text-neutral-800 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FF007B]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
