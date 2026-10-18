'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Floating Actions"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-[9999] pointer-events-auto flex flex-col items-center gap-3"
    >
      {/* Floating WhatsApp Quick Button - Icon-only button with no text */}
      <a
        href="https://wa.me/2348061945604"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MStrata Construction Company on WhatsApp"
        title="Chat on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:shadow-[#25D366]/65 border-2 border-white/80 active:scale-95 hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer relative"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
        {/* Subtle active status pulse dot */}
        <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
      </a>

      {/* Back to Top Button */}
      {showScroll && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="w-10 h-10 rounded-full bg-neutral-900/95 hover:bg-[#FF007B] text-white border border-neutral-700/80 hover:border-[#FF007B] flex items-center justify-center shadow-lg active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF007B] cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}
    </aside>
  );
}
