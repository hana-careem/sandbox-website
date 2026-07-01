import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function TeamCTA() {
  return (
    <section className="py-24 bg-[#7C3AED] text-center">
      <div className="container max-w-3xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-6">Meet the Minds Behind Sandbox</h2>
          <p className="text-white/80 text-lg mb-10">
            Sandbox is organized by a dedicated team of APIIT students passionate about entrepreneurship.
          </p>
          <Link 
            href="/team" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-[#7C3AED] hover:bg-slate-100 shadow-xl transition-all"
          >
            Meet the Team
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
