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
      icon: <Trophy className="w-8 h-8 text-[#FF4D6D]" />
    },
    {
      title: "The Sandbox Shield",
      description: "The ultimate honor, presented to the winning team to take back to their school.",
      icon: <Medal className="w-8 h-8 text-[#FF4D6D]" />
    },
    {
      title: "Special Awards",
      description: "Recognition for Best Presentation, Most Innovative Idea, and Best Sustainability Impact.",
      icon: <Star className="w-8 h-8 text-[#FF4D6D]" />
    },
    {
      title: "Certificates",
      description: "Every student who participates receives an official certificate of participation.",
      icon: <Award className="w-8 h-8 text-[#FF4D6D]" />
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tighter mb-6">
              PRIZES & <span className="text-[#FF4D6D]">RECOGNITION</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Compete for glory, school pride, and the resources to turn your idea into reality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up">
              <div className="bg-slate-950 border border-white/5 p-8 rounded-2xl hover:border-[#FF4D6D]/50 transition-colors h-full flex flex-col text-center items-center">
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
    </section>
  );
}
