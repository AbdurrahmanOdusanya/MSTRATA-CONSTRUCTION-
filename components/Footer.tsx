'use client';

import {
  Instagram,
  Linkedin,
  MessageSquare,
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#070B13] text-white pt-16 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 1. Large Clean White Footer Container (Card on Dark Background) */}
      <div className="max-w-7xl mx-auto bg-white text-neutral-900 rounded-2xl border border-neutral-200/90 shadow-2xl p-6 sm:p-10 lg:p-12 relative z-10">
        {/* Main Grid: Brand & About + Quick Links + Contact Info + Follow Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand & Description Column (spans 4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Proper Brand Logo */}
            <div className="flex items-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
                className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF007B] rounded-sm transition-opacity hover:opacity-90"
                aria-label="MStrata Construction Company"
              >
                <img
                  src="/images/MSTRATA FOOTER LOGO.png"
                  alt="MStrata Construction Company"
                  className="h-10 sm:h-12 w-auto max-w-[240px] sm:max-w-[280px] object-contain object-left block"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 max-w-sm leading-relaxed">
              MStrata delivers trusted residential, commercial, and industrial construction solutions
              with quality craftsmanship and reliable service.
            </p>
          </div>

          {/* Quick Links Column (spans 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="hover:text-neutral-900 transition-colors block py-0.5 hover:translate-x-0.5 transform duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column (Replaced Services - spans 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                EMAIL
              </span>
              <a
                href="mailto:mstrataconstructionc@gmail.com"
                className="text-xs sm:text-sm font-semibold text-neutral-800 hover:text-[#FF007B] transition-colors block break-all"
              >
                mstrataconstructionc@gmail.com
              </a>
            </div>

            {/* Office Address */}
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                OFFICE ADDRESS
              </span>
              <p className="text-xs sm:text-sm font-semibold text-neutral-800">
                Mushin, Lagos, Nigeria
              </p>
            </div>

            {/* Call Us */}
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                CALL US
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-neutral-800">
                <a
                  href="tel:+2348061945604"
                  className="hover:text-[#FF007B] transition-colors"
                >
                  +234 806 194 5604
                </a>
                <span className="text-neutral-400 hidden sm:inline">&middot;</span>
                <a
                  href="https://wa.me/2347036189196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF007B] transition-colors font-medium text-neutral-600"
                >
                  07036189196 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us Column (spans 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              FOLLOW US
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
              <li>
                <a
                  href="https://www.instagram.com/mstrataconstructionc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF007B] transition-colors group"
                >
                  <div className="w-6 h-6 rounded bg-neutral-100 group-hover:bg-[#FF007B] group-hover:text-white flex items-center justify-center text-neutral-700 transition-colors">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/mstrata-construction-company/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF007B] transition-colors group"
                >
                  <div className="w-6 h-6 rounded bg-neutral-100 group-hover:bg-[#FF007B] group-hover:text-white flex items-center justify-center text-neutral-700 transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                  </div>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347036189196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF007B] transition-colors group"
                >
                  <div className="w-6 h-6 rounded bg-neutral-100 group-hover:bg-[#FF007B] group-hover:text-white flex items-center justify-center text-neutral-700 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Copyright and Regional Details (Positioned Directly Above Logo Watermark) */}
      <div className="max-w-7xl mx-auto pt-8 sm:pt-12 pb-2 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p className="font-normal text-neutral-400">
            &copy; {currentYear} MStrata Construction Company. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-neutral-400">
            <span>Mushin &middot; Lagos State &middot; Nigeria</span>
            <span>&bull;</span>
            <span>Quality &middot; Reliability &middot; Craftsmanship</span>
          </div>
        </div>
      </div>

      {/* 3. Oversized Logo Wordmark Signature Section (Last Thing in the Footer, Naturally Cropped at Bottom) */}
      <div className="w-full relative overflow-hidden select-none pointer-events-none mt-4 sm:mt-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="w-full overflow-hidden flex items-start aspect-[4.658/1]"
            style={{ aspectRatio: '4.658 / 1' }}
          >
            <img
              src="/images/MSTRATA FOOTER WATERMARK.png"
              alt="MStrata Construction Company Wordmark"
              className="w-full h-auto object-contain object-top block"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
