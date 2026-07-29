"use client";
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import PastSponsorsMarquee from '../PastSponsorsMarquee';

// ─── All 12 past partners, logos served from public/assets/ ──────────────────
// ⚠️  KVK, Life Vision, and Sampath logos are JPEGs — they may show white boxes
//     on the dark background. Ask the Media team to re-export them as transparent PNGs.
const PAST_PARTNERS = [
  { name: 'Awakening Training Academy',         logo: '/assets/ATA-logo.png' },
  { name: 'Black Canvas',                       logo: '/assets/Black-Canvas-logo.png', box: 'black', tight: true },
  { name: 'Central Environmental Authority',    logo: '/assets/CEA-logo.png', box: 'white', tight: true },
  { name: 'Hi-Tech Lanka',                            logo: '/assets/hi-tech-logo.png', box: 'black', tight: true },
  { name: 'Decent Trust Holding',                             logo: '/assets/decent-logo.jpg' },
  { name: 'Department of Wildlife Conservation',logo: '/assets/DWC-logo.jpg', box: 'white' },
  { name: 'Hunters',                            logo: '/assets/hunters-logo.jpg' },
  { name: 'John Keells Office Automation',      logo: '/assets/JKOA-logo.png', box: 'white' },
  { name: 'KVK Enterprises',                    logo: '/assets/KVK-logo.jpeg' },          // ⚠️ JPEG — needs transparent PNG
  { name: 'Life Vision',                        logo: '/assets/life-vision-logo.jpeg' },   // ⚠️ JPEG — needs transparent PNG
  { name: 'SAB',                                logo: '/assets/sab-logo.png' },
  { name: 'Sampath Bank',                       logo: '/assets/sampath-logo.jpg', box: 'white', tight: true },       // ⚠️ JPEG — needs transparent PNG
  { name: 'National Savings Bank',              logo: '/assets/NSB-logo.png' },
  { name: 'Playdium',                           logo: '/assets/playdium-logo.png', box: 'white' },
  { name: 'Sasnaka Sansada Foundation',         logo: '/assets/sasnaka-logo.jpg', box: 'white', tight: true },
  { name: 'Unilever',                           logo: '/assets/unilever-logo.png', box: 'white', tight: true },
  { name: 'Veerakesari',                        logo: '/assets/veerakesari-logo.png', box: 'white', tight: true },
  { name: 'The Sunday Times',                       logo: '/assets/sunday-logo.jpg', box: 'white', tight: true },
  { name: 'Wijeya Newspapers',                  logo: '/assets/wijeya-logo.jpg' },
];

export default function PastPartners() {
  return (
    <section id="past-sponsors" className="py-20 bg-[linear-gradient(180deg,#2A1523_0%,#3c1c33_50%,#2A1523_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-coolvetica font-normal text-white text-center mb-12">
            Past <span className="text-[#a64d79]">Partners</span>
          </h2>
        </ScrollReveal>

        {/* Alternating-direction marquee — replaces the old static grid */}
        <PastSponsorsMarquee sponsors={PAST_PARTNERS} perRow={7} />
      </div>
    </section>
  );
}
