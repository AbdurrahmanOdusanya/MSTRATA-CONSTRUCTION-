'use client';

import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Instagram,
  Linkedin,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import { Reveal } from './Reveal';

interface ContactSectionProps {
  initialService?: string;
  initialProjectNote?: string;
}

export function ContactSection({
  initialService = '',
  initialProjectNote = '',
}: ContactSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('General Construction');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    phone: string;
    service: string;
    location: string;
    details: string;
  } | null>(null);

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [prevProps, setPrevProps] = useState({ initialService, initialProjectNote });

  if (initialService !== prevProps.initialService || initialProjectNote !== prevProps.initialProjectNote) {
    setPrevProps({ initialService, initialProjectNote });
    if (initialService) {
      setService(initialService);
    }
    if (initialProjectNote) {
      setDetails((prev) =>
        prev ? `${prev}\n[Interested in: ${initialProjectNote}]` : `[Interested in: ${initialProjectNote}]`
      );
    }
  }

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!phone.trim()) errs.phone = 'Please provide a valid phone number.';
    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!details.trim()) {
      errs.details = 'Please describe your project scope or questions.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppUrl = (customData?: {
    name: string;
    email: string;
    phone: string;
    service: string;
    location: string;
    details: string;
  }) => {
    const data = customData || {
      name: fullName,
      email,
      phone,
      service,
      location,
      details,
    };

    const text = `Hello MStrata Construction Company, I would like to make an enquiry:
• Name: ${data.name || 'Not specified'}
• Phone: ${data.phone || 'Not specified'}
• Email: ${data.email || 'Not specified'}
• Service: ${data.service}
• Location: ${data.location || 'Lagos, Nigeria'}
• Project Details: ${data.details || 'General project inquiry'}`;

    return `https://wa.me/2348061945604?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend validation & preparation
    setTimeout(() => {
      setSubmittedData({
        name: fullName,
        email,
        phone,
        service,
        location: location || 'Lagos, Nigeria',
        details,
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleDirectWhatsAppClick = () => {
    const url = generateWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal direction="up" distance={24} duration={0.65} className="space-y-4 mb-16 lg:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#FF007B]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF007B]">
              LET&apos;S BUILD SOMETHING GREAT
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-black leading-tight [text-wrap:balance]">
            Have a Project in Mind? Let&apos;s Talk.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed [text-wrap:balance]">
            Tell us about your construction plans, and let&apos;s start a conversation about bringing
            your vision to life.
          </p>
        </Reveal>

        {/* Two-Column Grid: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Cards & Direct Channels */}
          <Reveal direction="up" distance={28} delay={0.1} duration={0.7} className="lg:col-span-5 space-y-8">
            {/* Company Card */}
            <div className="p-8 rounded-lg bg-neutral-900 text-white border border-neutral-800 shadow-xl space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF007B] block mb-1">
                  OFFICIAL CONTACT DETAILS
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  MStrata Construction Company
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Building with purpose. Creating lasting value.
                </p>
              </div>

              <div className="space-y-5 pt-2 border-t border-neutral-800">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#FF007B] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 block">
                      Operational Headquarters
                    </span>
                    <span className="text-sm font-semibold text-white">Mushin, Lagos, Nigeria</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center justify-between group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-[#FF007B]/10 border border-[#FF007B]/30 flex items-center justify-center text-[#FF007B] shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 block">
                        WhatsApp Enquiry
                      </span>
                      <a
                        href="https://wa.me/2348061945604"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-[#FF007B] transition-colors"
                      >
                        +234 806 194 5604
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/2348061945604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#FF007B] text-white rounded hover:bg-[#E0006C] transition-colors"
                  >
                    Chat
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#FF007B] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 block">
                        Direct Phone / Call
                      </span>
                      <a
                        href="tel:+2347036189196"
                        className="text-sm font-semibold text-white hover:text-[#FF007B] transition-colors"
                      >
                        +234 703 618 9196
                      </a>
                    </div>
                  </div>
                  <a
                    href="tel:+2347036189196"
                    className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#FF007B] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate max-w-[200px] sm:max-w-[260px]">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 block">
                        Direct Email
                      </span>
                      <a
                        href="mailto:mstrataconstructionc@gmail.com"
                        className="text-sm font-semibold text-white hover:text-[#FF007B] transition-colors truncate block"
                      >
                        mstrataconstructionc@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('mstrataconstructionc@gmail.com', 'email')}
                    className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-white/5 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <CheckCircle className="w-4 h-4 text-[#FF007B]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-800 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                  Connect On Social Media
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/mstrataconstructionc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-neutral-800 hover:bg-[#FF007B] hover:text-white text-neutral-200 rounded transition-all text-xs font-semibold"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/mstrata-construction-company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-neutral-800 hover:bg-[#FF007B] hover:text-white text-neutral-200 rounded transition-all text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Accessible Contact Form */}
          <Reveal direction="up" distance={28} delay={0.2} duration={0.7} className="lg:col-span-7">
            <div className="bg-white border border-neutral-200/90 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="font-heading font-bold text-2xl text-black mb-2">
                Project Enquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mb-6">
                Fill in your project requirements below. Our team reviews all incoming enquiries promptly.
              </p>

              {submittedData ? (
                /* Success State with WhatsApp and Email Confirmation */
                <div className="p-6 rounded-lg bg-neutral-50 border border-[#FF007B]/30 space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 text-emerald-600">
                    <CheckCircle className="w-6 h-6 text-[#FF007B]" />
                    <h4 className="font-heading font-bold text-lg text-black">
                      Enquiry Prepared Successfully!
                    </h4>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Thank you, <strong className="text-black">{submittedData.name}</strong>. Your
                    project enquiry for{' '}
                    <strong className="text-black">{submittedData.service}</strong> in{' '}
                    <strong className="text-black">{submittedData.location}</strong> has been
                    compiled.
                  </p>

                  <div className="p-4 rounded bg-white border border-neutral-200 text-xs text-neutral-700 space-y-1.5 font-mono">
                    <div>
                      <strong>Contact:</strong> {submittedData.phone} &middot; {submittedData.email}
                    </div>
                    <div>
                      <strong>Scope:</strong> {submittedData.details}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={generateWhatsAppUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF007B] hover:bg-[#E0006C] rounded transition-colors text-center shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Transmit via WhatsApp Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-700 bg-neutral-200 hover:bg-neutral-300 rounded transition-colors"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Full Name <span className="text-[#FF007B]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Adebayo Ogunlesi"
                        className={`w-full px-4 py-3 rounded border text-sm text-neutral-900 bg-neutral-50/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                            : 'border-neutral-300 focus:border-[#FF007B] focus:ring-1 focus:ring-[#FF007B]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Email Address <span className="text-[#FF007B]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@company.ng"
                        className={`w-full px-4 py-3 rounded border text-sm text-neutral-900 bg-neutral-50/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                            : 'border-neutral-300 focus:border-[#FF007B] focus:ring-1 focus:ring-[#FF007B]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Required Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Phone Number <span className="text-[#FF007B]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 08012345678"
                        className={`w-full px-4 py-3 rounded border text-sm text-neutral-900 bg-neutral-50/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                            : 'border-neutral-300 focus:border-[#FF007B] focus:ring-1 focus:ring-[#FF007B]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Service Required <span className="text-[#FF007B]">*</span>
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded border border-neutral-300 text-sm text-neutral-900 bg-neutral-50/50 focus:bg-white focus:outline-none focus:border-[#FF007B] focus:ring-1 focus:ring-[#FF007B] transition-colors"
                      >
                        <option value="General Construction">01. General Construction</option>
                        <option value="Residential Construction">02. Residential Construction</option>
                        <option value="Commercial Construction">03. Commercial Construction</option>
                        <option value="Project Management">04. Project Management</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                    >
                      Project Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Mushin, Lekki Phase 1, Ikeja, Victoria Island, Lagos"
                      className="w-full px-4 py-3 rounded border border-neutral-300 text-sm text-neutral-900 bg-neutral-50/50 focus:bg-white focus:outline-none focus:border-[#FF007B] focus:ring-1 focus:ring-[#FF007B] transition-colors"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label
                      htmlFor="details"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                    >
                      Project Details <span className="text-[#FF007B]">*</span>
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Describe your site status, intended project timeline, structural scope, or specific requirements..."
                      className={`w-full px-4 py-3 rounded border text-sm text-neutral-900 bg-neutral-50/50 focus:bg-white focus:outline-none transition-colors ${
                        errors.details
                          ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                          : 'border-neutral-300 focus:border-[#FF007B] focus:ring-1 focus:ring-[#FF007B]'
                      }`}
                    />
                    {errors.details && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF007B] hover:bg-[#E0006C] active:scale-[0.99] rounded transition-all cursor-pointer shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Project Enquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectWhatsAppClick}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:scale-[0.99] rounded transition-all cursor-pointer border border-neutral-300"
                    >
                      <MessageSquare className="w-4 h-4 text-[#FF007B]" />
                      <span>Send Via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
