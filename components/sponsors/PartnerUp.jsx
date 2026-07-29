"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function PartnerUp() {
  return (
    <section id="become-a-partner" className="relative overflow-hidden pt-40 pb-20 bg-[linear-gradient(180deg,#2A1523_0%,#3c1c33_50%,#2A1523_100%)]">
      {/* Soft plum glows for depth — matches AboutSandbox */}
      <div className="absolute top-[12%] left-[8%] w-[400px] h-[400px] bg-[#7A3D68] rounded-full filter blur-[90px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-[12%] right-[8%] w-[450px] h-[450px] bg-[#A87196] rounded-full filter blur-[90px] opacity-30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="rounded-[2.5rem] border border-[rgba(183,155,221,0.28)] bg-[rgba(122,79,176,0.10)] backdrop-blur-sm px-6 py-16 md:px-16">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-coolvetica font-normal text-white mb-6">
            Partner With <span className="text-[#a64d79]">Sand<span className="font-resolve font-light">box</span></span>
          </h2>
          <p className="text-lg text-[#C6B9E0] mb-10 leading-relaxed">
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
