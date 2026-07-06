import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Rocket } from 'lucide-react';

const MILESTONES = [
  {
    date: '2nd Week Sep',
    title: 'Press Conference',
    desc: 'The official launch — Sandbox is announced to schools and media nationwide.',
  },
  {
    date: 'End Sep',
    title: 'Workshops Begin',
    desc: 'Galle (school venue), Kandy (Kandy APIIT), and Colombo (may run 2 days).',
  },
  {
    date: '2nd Week Oct',
    title: 'Preliminaries',
    desc: 'Teams pitch their ideas as the competition kicks into gear.',
  },
  {
    date: 'Last Week Oct',
    title: 'Semi-Finals',
    desc: 'The strongest teams battle it out for a place in the grand finale.',
  },
  {
    date: '2nd–3rd Week Nov',
    title: 'Grand Finals',
    desc: 'The top teams face off live for the title and the prize pool.',
  },
];

export default function Timeline() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Decorative background rockets */}
      <Rocket
        size={220}
        className="absolute -top-10 -left-16 text-[#7C3AED]/5 rotate-45 pointer-events-none select-none"
      />
      <Rocket
        size={180}
        className="absolute bottom-0 -right-10 text-[#FF4D6D]/5 -rotate-12 pointer-events-none select-none"
      />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <Rocket size={22} className="text-[#7C3AED] rotate-45" />
              <span className="text-sm font-bold tracking-widest text-[#7C3AED] uppercase">The Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-4">Road to the Finals</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Here's how Sandbox unfolds, from launch to the grand finale.</p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-500 to-transparent md:-translate-x-1/2" />

          {/* Launch rocket riding the line */}
          <Rocket
            size={26}
            className="absolute left-4 md:left-1/2 -top-8 -translate-x-1/2 -rotate-90 text-[#7C3AED] drop-shadow-[0_0_10px_rgba(124,58,237,0.6)] pointer-events-none"
          />

          <div>
            {MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollReveal
                  key={item.title}
                  direction={isEven ? 'right' : 'left'}
                  delay={idx * 120}
                >
                  <div className={`relative flex items-start md:items-center mb-12 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <span className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#7C3AED] ring-4 ring-slate-950 shadow-[0_0_14px_rgba(124,58,237,0.7)] z-10" />

                    {/* Spacer (desktop only) */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card */}
                    <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                        <span className="inline-block text-xs font-bold tracking-widest text-[#7C3AED] uppercase mb-2">{item.date}</span>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
