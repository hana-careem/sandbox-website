"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function PartnerUp() {
  return (
    <section id="become-a-partner" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/10 px-6 py-16 md:px-16 ring-1 ring-white/5 shadow-[0_0_90px_rgba(56,189,248,0.08)]">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-coolvetica font-normal text-white mb-6">
            Partner With <span className="text-[#a64d79]">Sand<span className="font-resolve font-light">box</span></span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Gain unparalleled access to Sri Lanka's brightest young minds. Align your brand with youth empowerment, innovation, and entrepreneurship. Endorsing Sandbox connects you directly with the next generation of leaders from over 150 schools nationwide.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex px-8 py-4 text-lg font-bold rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white transition-all focus:ring-2 focus:ring-white/50 focus:outline-none shadow-lg min-h-[44px]"
          >
            Become a Partner
          </Link>
        </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
