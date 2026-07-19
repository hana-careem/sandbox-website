"use client";
import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';

const PAST_PARTNERS = [
  { name: 'ATA', logo: '/assets/ATA-logo.png' },
  { name: 'Black Canvas', logo: '/assets/Black-Canvas-logo.png' },
  { name: 'CEA', logo: '/assets/CEA-logo.png' },
  { name: 'Hi-Tech', logo: '/assets/hi-tech-logo.png' },
  { name: 'JKOA', logo: '/assets/JKOA-logo.png' },
  { name: 'KVK', logo: '/assets/KVK-logo.jpeg' },
  { name: 'Life Vision', logo: '/assets/life-vision-logo.jpeg' },
  { name: 'SAB', logo: '/assets/sab-logo.png' },
  { name: 'Sampath', logo: '/assets/sampath-logo.jpeg' },
  { name: 'Sasnaka', logo: '/assets/sasnaka-logo.png' },
  { name: 'Unilever', logo: '/assets/unilever-logo.png' },
  { name: 'Veerakesari', logo: '/assets/veerakesari-logo.png' },
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

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {PAST_PARTNERS.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 60} direction="up">
              <div className="aspect-[3/2] bg-slate-900 border border-white/5 rounded-xl flex items-center justify-center p-6 hover:border-[#7C3AED]/50 transition-colors">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
