import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Guidelines() {
  const guidelines = [
    "Open to all Sri Lankan schools",
    "Team-based submission",
    "Live pitch rounds",
    "Judged by entrepreneurs",
    "Fair & transparent judging",
    "Government endorsed"
  ];

  return (
    <section className="py-20 bg-[#1A1A1D]">
      <div className="container max-w-5xl mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Block */}
          <div className="flex-1">
            <p className="text-[#14F3DB] font-medium tracking-widest uppercase mb-4 text-sm">
              Competition Guidelines
            </p>
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6 tracking-tight">
              How to Compete & Win
            </h2>
            <p className="text-slate-300 text-lg font-inter leading-relaxed mb-8">
              Open to all schools in Sri Lanka. Teams brainstorm and pitch a business idea, judged on originality, feasibility, and presentation by leading entrepreneurs.
            </p>
            
            <a 
              href="https://sandbox.apiit.lk/rule-regulations/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#14F3DB] hover:bg-[#11d1bd] text-[#1A1A1D] px-8 py-4 rounded-full font-bold font-inter transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,243,219,0.3)] hover:-translate-y-0.5 group"
            >
              View Full Rules & Regulations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Checklist Block */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="bg-[#3B1C32] p-8 md:p-10 rounded-3xl border border-[#6A1E55] shadow-2xl">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {guidelines.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#14F3DB]" />
                    </div>
                    <span className="text-white font-inter text-lg font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
