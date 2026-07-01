import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function RegisterCTA() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#FF4D6D]/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join students from across the nation to pitch your game-changing ideas, win amazing prizes, and kickstart your entrepreneurial journey.
          </p>
          <Link 
            href="https://forms.office.com/" 
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-slate-950 hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all group"
          >
            Register Your Team
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
