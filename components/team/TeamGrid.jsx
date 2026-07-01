"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';
import Modal from '../ui/Modal';
import { Linkedin, Mail } from 'lucide-react';

export default function TeamGrid() {
  const [selectedMember, setSelectedMember] = useState(null);

  // TODO: Add real team members and photos
  const team = [
    {
      id: 1,
      name: "John Doe",
      role: "Chairperson",
      department: "Executive",
      bio: "Final year business student with a passion for startups.",
      image: "/assets/placeholder-person.jpg",
      linkedin: "#",
      email: "john@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Vice Chairperson",
      department: "Executive",
      bio: "Leading the operations and logistics for Sandbox 3.0.",
      image: "/assets/placeholder-person.jpg",
      linkedin: "#",
      email: "jane@example.com"
    },
    {
      id: 3,
      name: "Sam Wilson",
      role: "Head of Marketing",
      department: "Marketing",
      bio: "Creative mind behind the Sandbox brand identity.",
      image: "/assets/placeholder-person.jpg",
      linkedin: "#",
      email: "sam@example.com"
    }
  ];

  const departments = [...new Set(team.map(m => m.department))];

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5 min-h-screen">
      <div className="container max-w-7xl mx-auto px-4">
        
        {departments.map((dept, deptIdx) => (
          <div key={deptIdx} className="mb-20 last:mb-0">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-black font-display text-[#38BDF8] mb-8 border-b border-white/10 pb-4">{dept} Team</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {team.filter(m => m.department === dept).map((member, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div 
                    className="group cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-800 border border-white/10">
                      {/* Image placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                        [Photo]
                      </div>
                      <div className="absolute inset-0 bg-[#7C3AED]/0 group-hover:bg-[#7C3AED]/20 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">{member.name}</h3>
                    <p className="text-slate-400 text-sm font-medium">{member.role}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
        
      </div>

      <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
        {selectedMember && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-800">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  [Photo]
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h3>
              <p className="text-[#38BDF8] font-medium text-lg mb-6">{selectedMember.role}</p>
              <p className="text-slate-300 mb-8 leading-relaxed">{selectedMember.bio}</p>
              
              <div className="flex gap-4">
                {selectedMember.linkedin && (
                  <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#7C3AED] flex items-center justify-center text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
                {selectedMember.email && (
                  <a href={`mailto:${selectedMember.email}`} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#FF4D6D] flex items-center justify-center text-white transition-colors">
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
