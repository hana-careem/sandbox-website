import React from 'react';
import { Landmark } from 'lucide-react';
import Image from 'next/image';

export default function OfficialPartnership() {
  return (
    <section className="py-20 bg-[#3B1C32] border-y border-[#6A1E55]">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        
        <p className="text-[#14F3DB] font-medium tracking-widest uppercase mb-4 text-sm">
          Official Partnership
        </p>
        
        <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white mb-8 tracking-tight">
          In Partnership with the Ministry of Education
        </h2>
        
        <div className="bg-[#1A1A1D] rounded-3xl p-8 md:p-12 border border-[#6A1E55] shadow-xl max-w-3xl mx-auto">
          {/* Logo / Icon Lockup */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-20 h-20 bg-[#3B1C32] rounded-full flex items-center justify-center mb-6 border border-[#6A1E55] shadow-[0_0_20px_rgba(20,243,219,0.15)]">
               <Landmark className="w-10 h-10 text-[#14F3DB]" />
            </div>
            <h3 className="text-2xl font-space-grotesk font-bold text-white tracking-wide uppercase">
              Ministry of Education
            </h3>
            <p className="text-[#A64D79] tracking-widest uppercase text-sm mt-2">
              Sri Lanka
            </p>
          </div>

          <p className="text-slate-200 text-lg md:text-xl font-inter leading-relaxed max-w-2xl mx-auto">
            Backed by the Sri Lankan government to ensure every young person — regardless of school type or background — has equal access to entrepreneurial education.
          </p>
        </div>
      </div>
    </section>
  );
}
