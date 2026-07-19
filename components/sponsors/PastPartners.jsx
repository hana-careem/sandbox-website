"use client";
import React from 'react';
import { ImageIcon } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

// TODO: Replace placeholder cards with actual past partner logos
const PAST_PARTNERS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: `Partner ${i + 1}`,
}));

export default function PastPartners() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-coolvetica font-normal text-white text-center mb-12">
            Past <span className="text-[#7C3AED]">Partners</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {PAST_PARTNERS.map((partner, i) => (
            <ScrollReveal key={partner.id} delay={i * 60} direction="up">
              <div className="aspect-[3/2] bg-slate-900 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-1.5 p-4 hover:border-[#7C3AED]/50 transition-colors">
                <ImageIcon className="w-6 h-6 text-slate-600" />
                <span className="text-[10px] text-slate-600">{partner.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
