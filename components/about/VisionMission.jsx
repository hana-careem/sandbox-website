import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Eye, Target } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10 h-full">
              <Eye size={48} className="text-[#38BDF8] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be the premier launchpad for student entrepreneurs in Sri Lanka, creating a generation of innovators ready to solve tomorrow's challenges.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10 h-full">
              <Target size={48} className="text-[#7C3AED] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To equip students with the skills, mentorship, and resources needed to transform their creative ideas into viable, scalable business models through nationwide competition.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
