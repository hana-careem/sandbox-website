"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';

// TODO: Replace with exact event date
const EVENT_DATE = new Date('2026-10-15T00:00:00');

export default function SandboxHero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = EVENT_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-950">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/sandbox-hero-bg.jpg" // TODO: Add real hero image to public/assets/
          alt="Sandbox Hero Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-xl mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></span>
              <span className="text-sm font-medium text-white tracking-wide uppercase">Registrations Open</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white tracking-tighter leading-[0.9] mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">THE PREMIER</span>
              <span className="block text-[#38BDF8]">BUSINESS PITCHING</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#FF4D6D]">COMPETITION.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Sri Lanka's first and largest inter-school entrepreneurial battleground. Brought to you by the APIIT Entrepreneurship Club and the Ministry of Education.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            {/* Glassmorphism Timer Panel */}
            <div className="backdrop-blur-lg bg-slate-900/40 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl max-w-3xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINUTES', value: timeLeft.minutes },
                { label: 'SECONDS', value: timeLeft.seconds }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[80px]">
                  <span className="text-4xl md:text-6xl font-black font-display text-white tracking-tighter">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs md:text-sm text-slate-400 font-medium tracking-widest mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
