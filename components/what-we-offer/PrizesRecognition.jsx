import React from 'react';
import { Trophy } from 'lucide-react';

export default function PrizesRecognition() {
  return (
    <section id="prizes-recognition" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 md:px-16 ring-1 ring-white/5 shadow-[0_0_90px_rgba(147,51,234,0.08)]">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#3B0764]/50 to-[#701A5A]/40" />
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-coolvetica font-normal text-white tracking-normal mb-6">
                PRIZES & <span className="text-[#9333EA]">RECOGNITION</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Compete for glory, school pride, and the resources to turn your idea into reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
              {/* Hero card: Sandbox Shield */}
              <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden bg-gradient-to-br from-[#3B0764]/70 to-[#701A5A]/60 border border-[#9333EA]/40 p-8 rounded-3xl hover:border-[#9333EA]/70 transition-colors flex flex-col items-center text-center shadow-[0_0_120px_rgba(147,51,234,0.35)]">
                <div className="w-full flex-1 min-h-[16rem] overflow-hidden rounded-2xl ring-1 ring-[#9333EA]/40 mb-8 shadow-[0_0_60px_rgba(147,51,234,0.4)]">
                  <img src="https://placehold.co/900x700" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black font-display text-white mb-4 tracking-tight">
                  Sandbox Shield
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg max-w-sm">
                  The ultimate honor, presented to the winning team to take back to their school.
                </p>
              </div>

              {/* Cash Prizes */}
              <div className="sm:col-span-2 lg:col-span-2 bg-slate-950/60 border border-[#9333EA]/30 p-8 rounded-2xl hover:border-[#9333EA]/60 transition-colors flex flex-col text-center items-center">
                <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                  <Trophy className="w-7 h-7 text-[#9333EA]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Cash Prizes</h3>
                {/* TODO: exact cash amounts to be announced */}
                <p className="text-3xl md:text-4xl font-black text-[#9333EA] tracking-tight mb-3">TBA</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Significant cash prizes awarded to the top 3 teams to help kickstart their business ventures.
                </p>
              </div>

              {/* Special Awards */}
              <div className="lg:col-span-1 bg-slate-950/60 border border-white/5 p-6 rounded-2xl hover:border-[#9333EA]/50 transition-colors flex flex-col text-center items-center">
                <div className="w-full overflow-hidden rounded-xl mb-4">
                  <img src="https://placehold.co/500x500" alt="" className="w-full h-48 md:h-56 object-cover" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Special Awards</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Recognition for Best Presentation, Most Innovative Idea, and Best Sustainability Impact.
                </p>
              </div>

              {/* Certificates */}
              <div className="lg:col-span-1 bg-slate-950/60 border border-white/5 p-6 rounded-2xl hover:border-[#9333EA]/50 transition-colors flex flex-col text-center items-center">
                <div className="w-full overflow-hidden rounded-xl mb-4">
                  <img src="https://placehold.co/500x500" alt="" className="w-full h-48 md:h-56 object-cover" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Certificates</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Every student who participates receives an official certificate of participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
