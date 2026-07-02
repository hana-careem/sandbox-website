"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../ui/Modal';
import ScrollReveal from '../ui/ScrollReveal';
import { Mail } from 'lucide-react';

// TODO: Replace with real team data
const TEAM_DATA = {
  "Leadership": [
    { name: "Placeholder Name", role: "President", image: "/assets/placeholder.jpg", bio: "TODO: bio.", email: "test@apiit.lk" }
  ],
  "Marketing & Outreach": [
    { name: "Placeholder Name", role: "Head of Marketing", image: "/assets/placeholder.jpg", bio: "TODO: bio.", email: "test@apiit.lk" }
  ],
  "Design & Branding": [
    { name: "Placeholder Name", role: "Head of Design", image: "/assets/placeholder.jpg", bio: "TODO: bio.", email: "test@apiit.lk" }
  ],
  "Sponsorship & Partnerships": [],
  "Logistics & Operations": [],
  "Technology & Digital": [],
  "PR & Media": [],
  "Senior Advisors": []
};

export default function TeamGrid() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="py-24 bg-slate-950 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {Object.entries(TEAM_DATA).map(([department, members], idx) => {
          if (members.length === 0) return null; // Skip empty departments for now
          
          return (
            <div key={idx} className="mb-20">
              <ScrollReveal>
                <h2 className="text-3xl font-bold font-display text-white mb-8 border-b border-white/10 pb-4">
                  {department}
                </h2>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {members.map((member, i) => (
                  <ScrollReveal key={i} delay={i * 100} direction="up">
                    <div 
                      className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-900/50 border border-white/5 hover:border-[#7C3AED]/50 transition-all duration-300"
                      onClick={() => setSelectedMember(member)}
                    >
                      <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#7C3AED] transition-colors">{member.name}</h3>
                        <p className="text-slate-400 text-sm">{member.role}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
        {selectedMember && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="relative w-full md:w-1/3 aspect-square rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
              <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold font-display text-white mb-2">{selectedMember.name}</h3>
              <p className="text-[#7C3AED] font-medium mb-6">{selectedMember.role}</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                {selectedMember.bio}
              </p>
              <a href={`mailto:${selectedMember.email}`} className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                <Mail size={16} className="mr-2" /> Contact {selectedMember.name.split(' ')[0]}
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
