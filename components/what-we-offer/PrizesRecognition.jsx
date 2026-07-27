import React from 'react';
import { Trophy } from 'lucide-react';

export default function PrizesRecognition() {
  return (
    <section id="prizes-recognition" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 md:px-16 ring-1 ring-white/5 shadow-[0_0_90px_rgba(147,51,234,0.08)]">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#3B0764]/50 to-[#701A5A]/40" />
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-coolvetica font-normal text-white tracking-normal mb-6">
                PRIZES & <span className="text-[#a64d79]">RECOGNITION</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Compete for glory, school pride, and the resources to turn your idea into reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
              {/* Hero card: Sandbox Shield */}
              <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden bg-gradient-to-br from-[#3B0764]/70 to-[#701A5A]/60 border border-[#9333EA]/40 p-8 rounded-3xl hover:border-[#9333EA]/70 transition-colors flex flex-col items-center text-center shadow-[0_0_120px_rgba(147,51,234,0.35)]">
                <div className="w-full flex-1 min-h-[16rem] overflow-hidden rounded-2xl ring-1 ring-[#9333EA]/40 mb-8 shadow-[0_0_60px_rgba(147,51,234,0.4)]">
                  <img src="/assets/Sandbox shield.jpg" alt="Sandbox Shield" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black font-display text-white mb-4 tracking-tight">
                  Sandbox Shield
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg max-w-sm">
                  The ultimate honor, presented to the winning team to take back to their school.
                </p>
              </div>

              {/* Cash Prizes */}
              <div className="sm:col-span-2 lg:col-span-2 flex flex-col items-center justify-center text-center">
                <div className="relative mt-8">
                  {/* Medal */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#a64d79] to-[#691e56] ring-4 ring-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(166,77,121,0.6)]">
                    <Trophy className="w-9 h-9 text-white" />
                  </div>

                  {/* Stamp */}
                  <div
                    className="relative w-56 h-72 md:w-64 md:h-80 -rotate-6 flex flex-col items-center justify-center pt-8 px-4 bg-gradient-to-b from-[#a64d79] via-[#9333EA] to-[#3B0764] shadow-[0_10px_40px_rgba(147,51,234,0.45)]"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 16.6667% 6%, 33.3333% 0%, 50% 6%, 66.6667% 0%, 83.3333% 6%, 100% 0%, 94% 16.6667%, 100% 33.3333%, 94% 50%, 100% 66.6667%, 94% 83.3333%, 100% 100%, 83.3333% 94%, 66.6667% 100%, 50% 94%, 33.3333% 100%, 16.6667% 94%, 0% 100%, 6% 83.3333%, 0% 66.6667%, 6% 50%, 0% 33.3333%, 6% 16.6667%, 0% 0%)",
                    }}
                  >
                    {/* Folded corner */}
                    <div
                      className="absolute bottom-0 left-0 w-9 h-9"
                      style={{
                        clipPath: 'polygon(0% 100%, 100% 100%, 0% 0%)',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.35))',
                        boxShadow: '2px -2px 8px rgba(0,0,0,0.35)',
                      }}
                    />

                    <span className="text-white/90 text-sm font-bold tracking-[0.2em]">GRAND PRIZE</span>
                    <span className="mt-2 text-white text-6xl md:text-7xl font-black tracking-tight leading-none">
                      100K
                    </span>
                    <span className="mt-4 text-white/80 text-xs font-semibold tracking-[0.25em] text-center px-2">
                      WINNER TAKES ALL
                    </span>
                  </div>
                </div>

                <p className="mt-10 text-sm text-slate-400 leading-relaxed max-w-xs">
                  Awarded to the winning team to help kickstart their business venture.
                </p>
              </div>

              {/* Special Awards */}
              <div className="lg:col-span-1 bg-slate-950/60 border border-white/5 p-6 rounded-2xl hover:border-[#9333EA]/50 transition-colors flex flex-col text-center items-center">
                <div className="w-full overflow-hidden rounded-xl mb-4">
                  <img src="/assets/What we offer trophy .jpg" alt="Special Awards" className="w-full h-48 md:h-56 object-cover" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Special Awards</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Recognition for Best Presentation, Most Innovative Idea, and Best Sustainability Impact.
                </p>
              </div>

              {/* Certificates */}
              <div className="lg:col-span-1 bg-slate-950/60 border border-white/5 p-6 rounded-2xl hover:border-[#9333EA]/50 transition-colors flex flex-col text-center items-center">
                <div className="w-full overflow-hidden rounded-xl mb-4">
                  <img src="/assets/What we offer certs).jpg" alt="Certificates" className="w-full h-48 md:h-56 object-cover" />
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
