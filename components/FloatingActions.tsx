'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';

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
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Floating WhatsApp Quick Button */}
      <a
        href="https://wa.me/2347036189196"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MStrata Construction on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group relative"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-14 bg-black/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md">
          Chat on WhatsApp
        </span>
      </a>

      {/* Back to Top Button */}
      {showScroll && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="w-10 h-10 rounded-full bg-black/90 text-white border border-neutral-700 flex items-center justify-center shadow-lg hover:bg-[#FF007B] hover:border-[#FF007B] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF007B] cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
