"use client";
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Trophy, Medal, Star, Award } from 'lucide-react';

export default function PrizesRecognition() {
  const prizes = [
    {
      title: "Cash Prizes",
      // TODO: exact cash amounts to be announced
      description: "Significant cash prizes awarded to the top 3 teams to help kickstart their business ventures.",
      icon: <Trophy className="w-8 h-8 text-[#9333EA]" />
    },
    {
      title: "The Sandbox Shield",
      description: "The ultimate honor, presented to the winning team to take back to their school.",
      icon: <Medal className="w-8 h-8 text-[#9333EA]" />
    },
    {
      title: "Special Awards",
      description: "Recognition for Best Presentation, Most Innovative Idea, and Best Sustainability Impact.",
      icon: <Star className="w-8 h-8 text-[#9333EA]" />
    },
    {
      title: "Certificates",
      description: "Every student who participates receives an official certificate of participation.",
      icon: <Award className="w-8 h-8 text-[#9333EA]" />
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
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
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tighter mb-6">
                  PRIZES & <span className="text-[#9333EA]">RECOGNITION</span>
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Compete for glory, school pride, and the resources to turn your idea into reality.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {prizes.map((prize, idx) => (
                <ScrollReveal key={idx} delay={idx * 100} direction="up">
                  <div className="bg-slate-950/60 border border-white/5 p-8 rounded-2xl hover:border-[#9333EA]/50 transition-colors h-full flex flex-col text-center items-center">
                    <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mb-6">
                      {prize.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{prize.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1">
                      {prize.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
