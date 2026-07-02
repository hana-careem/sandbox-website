"use client";
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { BookOpen, Users, TrendingUp, Presentation, Briefcase, Award } from 'lucide-react';

const OFFERINGS_DATA = [
  {
    title: "Expert Workshops",
    description: "Learn the fundamentals of business planning, financial forecasting, and effective pitching directly from industry veterans.",
    icon: <BookOpen className="w-8 h-8 text-[#7C3AED]" />
  },
  {
    title: "Networking Opportunities",
    description: "Connect with like-minded student entrepreneurs from over 150 schools across the nation.",
    icon: <Users className="w-8 h-8 text-[#7C3AED]" />
  },
  {
    title: "Investor Exposure",
    description: "Pitch your ideas to a panel of real-world investors, CEOs, and business leaders who are looking for the next big thing.",
    icon: <TrendingUp className="w-8 h-8 text-[#7C3AED]" />
  },
  {
    title: "Pitching Mastery",
    description: "Develop the confidence and public speaking skills necessary to command a room and sell your vision.",
    icon: <Presentation className="w-8 h-8 text-[#7C3AED]" />
  },
  {
    title: "Career Building",
    description: "Enhance your resume and university applications with verifiable entrepreneurial experience.",
    icon: <Briefcase className="w-8 h-8 text-[#7C3AED]" />
  },
  {
    title: "Mentorship",
    description: "Receive personalized guidance and feedback from assigned mentors throughout the competition lifecycle.",
    icon: <Award className="w-8 h-8 text-[#7C3AED]" />
  }
];

export default function OfferingsGrid() {
  return (
    <section className="pt-40 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black font-display text-white tracking-tighter mb-6">
              WHAT WE <span className="text-[#7C3AED]">OFFER</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Sandbox isn't just a competition; it's an accelerator for student potential. Here's what you gain by participating.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERINGS_DATA.map((offering, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up">
              <div className="bg-slate-900/50 border border-white/5 p-8 rounded-2xl hover:border-[#7C3AED]/50 transition-colors h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6">
                  {offering.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{offering.title}</h3>
                <p className="text-slate-400 leading-relaxed flex-1">
                  {offering.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
