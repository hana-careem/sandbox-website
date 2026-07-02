"use client";
import React, { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { ChevronDown } from 'lucide-react';

// TODO: Replace with real FAQ data
const FAQ_DATA = [
  {
    question: "Who can participate in Sandbox?",
    answer: "Sandbox is open to all school students across Sri Lanka, including government, private, and international schools."
  },
  {
    question: "How many members can be in a team?",
    answer: "TODO: Specify team size limits (e.g., Teams can consist of 2 to 4 members from the same school)."
  },
  {
    question: "Is there a registration fee?",
    answer: "TODO: Specify if there is a registration fee."
  },
  {
    question: "What is the deadline for registration?",
    answer: "TODO: Specify the exact deadline date and time."
  },
  {
    question: "Do we need a prototype to pitch?",
    answer: "TODO: Clarify whether prototypes are mandatory or optional."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0); 

  return (
    <section className="pt-40 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black font-display text-white tracking-tighter mb-6">
              FREQUENTLY ASKED <span className="text-[#7C3AED]">QUESTIONS</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about participating in Sri Lanka's largest inter-school pitching competition.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 50} direction="up">
                <div className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-[#7C3AED] bg-slate-900' : 'border-white/10 bg-slate-950 hover:border-white/20'}`}>
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <span className="text-lg font-bold text-white text-left pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#7C3AED]' : ''}`} 
                      size={24} 
                    />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
