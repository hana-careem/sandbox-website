"use client";
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import PastSponsorsMarquee from '../PastSponsorsMarquee';

// ─── All 12 past partners, logos served from public/assets/ ──────────────────
// ⚠️  KVK, Life Vision, and Sampath logos are JPEGs — they may show white boxes
//     on the dark background. Ask the Media team to re-export them as transparent PNGs.
const PAST_PARTNERS = [
  { name: 'ATA',          logo: '/assets/ATA-logo.png' },
  { name: 'Black Canvas', logo: '/assets/Black-Canvas-logo.png' },
  { name: 'CEA',          logo: '/assets/CEA-logo.png' },
  { name: 'Hi-Tech',      logo: '/assets/hi-tech-logo.png' },
  { name: 'JKOA',         logo: '/assets/JKOA-logo.png' },
  { name: 'KVK',          logo: '/assets/KVK-logo.jpeg' },          // ⚠️ JPEG — needs transparent PNG
  { name: 'Life Vision',  logo: '/assets/life-vision-logo.jpeg' },   // ⚠️ JPEG — needs transparent PNG
  { name: 'SAB',          logo: '/assets/sab-logo.png' },
  { name: 'Sampath',      logo: '/assets/sampath-logo.jpeg' },       // ⚠️ JPEG — needs transparent PNG
  { name: 'Sasnaka',      logo: '/assets/sasnaka-logo.png' },
  { name: 'Unilever',     logo: '/assets/unilever-logo.png' },
  { name: 'Veerakesari',  logo: '/assets/veerakesari-logo.png' },
];

export default function PastPartners() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-coolvetica font-normal text-white text-center mb-12">
            Past <span className="text-[#7C3AED]">Partners</span>
          </h2>
        </ScrollReveal>

        {/* Alternating-direction marquee — replaces the old static grid */}
        <PastSponsorsMarquee sponsors={PAST_PARTNERS} perRow={4} />
      </div>
    </section>
  );
}
