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
              {/* Prominent CTA */}
              <Link 
                href="https://forms.office.com/" 
                target="_blank"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all transform hover:scale-105 mb-12"
              >
                Register Your Team Now
              </Link>

              {/* Inline Hero Countdown (Static/Subdued) */}
              <div className="flex justify-center items-center gap-4 md:gap-8 px-6 md:px-10 py-4 md:py-6 rounded-2xl bg-gradient-to-r from-[#4C1D95]/30 to-[#D946EF]/30 border border-white/10 backdrop-blur-sm">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center min-w-[60px]">
                    <span className="text-3xl md:text-5xl font-bold font-display text-white tabular-nums opacity-90">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-widest mt-1 md:mt-2">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Sticky Compact Countdown & CTA */}
      <div 
        className={`fixed bottom-0 left-0 w-full z-40 bg-gradient-to-r from-[#4C1D95] to-[#D946EF] transition-transform duration-500 transform ${isSticky ? 'translate-y-0' : 'translate-y-full'} shadow-[0_-10px_30px_rgba(76,29,149,0.2)]`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-row items-center justify-between">
          
          {/* Ticking Numbers */}
          <div className="flex gap-4 md:gap-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hrs', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Sec', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-black font-display text-white tabular-nums">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-widest mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Sticky Register Button */}
          <Link 
            href="https://forms.office.com/" 
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-bold rounded-full text-white bg-[#FF4D6D] hover:bg-[#E11D48] shadow-[0_4px_14px_rgba(255,77,109,0.3)] transition-colors"
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
    </>
  );
}
