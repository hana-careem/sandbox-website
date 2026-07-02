"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function PartnerUp() {
  return (
    <section className="py-24 bg-slate-900/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-6">
            Partner With <span className="text-[#7C3AED]">Sandbox</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Gain unparalleled access to Sri Lanka's brightest young minds. Align your brand with youth empowerment, innovation, and entrepreneurship. Endorsing Sandbox connects you directly with the next generation of leaders from over 150 schools nationwide.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex px-8 py-4 text-lg font-bold rounded-full bg-white text-[#7C3AED] hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
          >
            Become a Partner
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
