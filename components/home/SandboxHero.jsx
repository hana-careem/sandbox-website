"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

// TODO: Replace with exact registration deadline
const REGISTRATION_DEADLINE = new Date('2026-10-15T00:00:00');

export default function SandboxHero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = REGISTRATION_DEADLINE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    const handleScroll = () => {
      if (heroRef.current) {
        // Sticky when scrolled past hero section
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setIsSticky(heroBottom < 100); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/sandbox-hero.png" // TODO: Add real hero image
            alt="Sandbox Hero Background"
            fill
            className="object-cover opacity-20 grayscale" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center w-full">
            
            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white tracking-tighter leading-[0.9] mb-6">
                <span className="block text-slate-300">THE PREMIER</span>
                <span className="block text-[#7C3AED]">BUSINESS PITCHING</span>
                <span className="block text-slate-100">COMPETITION.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                Sri Lanka's first and largest inter-school entrepreneurial battleground. Run by the APIIT Entrepreneurship Club in partnership with the Ministry of Education.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400} className="w-full flex flex-col items-center">
              {/* Large Hero Countdown */}
              <div className="mb-10 w-full max-w-2xl mx-auto border border-slate-800 rounded-3xl p-8 bg-slate-900/50 backdrop-blur-sm shadow-2xl flex flex-wrap justify-center gap-6 md:gap-12">
                {[
                  { label: 'DAYS', value: timeLeft.days },
                  { label: 'HOURS', value: timeLeft.hours },
                  { label: 'MINUTES', value: timeLeft.minutes },
                  { label: 'SECONDS', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center min-w-[70px]">
                    <span className="text-4xl md:text-6xl font-black font-display text-white tracking-tighter">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                    <span className="text-xs text-slate-500 font-bold tracking-widest mt-2">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Prominent CTA */}
              <Link 
                href="https://forms.office.com/" 
                target="_blank"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all transform hover:scale-105"
              >
                Register Your Team Now
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Sticky Compact Countdown */}
      <div 
        className={`fixed bottom-0 left-0 w-full z-40 bg-slate-950/95 border-t border-[#7C3AED]/30 backdrop-blur-lg shadow-[0_-10px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 transform ${isSticky ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-sm font-bold text-slate-300 hidden md:block">
            Registration closes in:
          </div>
          <div className="flex gap-4 md:gap-8 mx-auto md:mx-0">
            {[
              { label: 'D', value: timeLeft.days },
              { label: 'H', value: timeLeft.hours },
              { label: 'M', value: timeLeft.minutes },
              { label: 'S', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="flex items-baseline gap-1">
                <span className="text-xl font-black font-display text-white">{item.value.toString().padStart(2, '0')}</span>
                <span className="text-xs font-bold text-[#7C3AED]">{item.label}</span>
              </div>
            ))}
          </div>
          <Link 
            href="https://forms.office.com/" 
            target="_blank"
            className="hidden md:inline-flex px-4 py-1.5 text-sm font-bold rounded-full bg-white text-[#7C3AED] hover:bg-slate-200 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
