"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import { ChevronRight } from 'lucide-react';
import { useHeroCta } from '../ui/HeroCtaContext';

// TODO: Replace with exact registration deadline when provided
const REGISTRATION_DEADLINE = new Date('2026-10-15T00:00:00');

const Dial = ({ label, value, max, instanceId, size = "large" }) => {
  const radius = size === "small" ? 20 : 38;
  const strokeW = size === "small" ? 4 : 8;
  const circumference = 2 * Math.PI * radius;
  const ticks = 40;
  const tickSpacing = circumference / ticks;
  const dashArray = `2 ${tickSpacing - 2}`;
  
  // Progress depletes as time passes (value goes down to 0)
  const progress = value / max; 
  const offset = circumference - (progress * circumference);

  const containerClasses = size === "small" 
    ? "w-12 h-12 md:w-14 md:h-14 mb-1" 
    : "w-20 h-20 md:w-24 md:h-24 mb-2 md:mb-3 shadow-[0_0_15px_rgba(0,0,0,0.3)] bg-slate-900/60";

  const numClasses = size === "small"
    ? "text-lg md:text-xl"
    : "text-2xl md:text-4xl";

  const labelClasses = size === "small"
    ? "text-[9px] md:text-[10px]"
    : "text-[10px] md:text-xs";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative flex items-center justify-center rounded-full ${containerClasses}`}>
        <svg className="w-full h-full -rotate-90 absolute inset-0" viewBox="0 0 100 100">
          <defs>
            <mask id={`tick-mask-${instanceId}-${label}`}>
              <circle cx="50" cy="50" r={radius} fill="transparent" stroke="white" strokeWidth={strokeW + 4} strokeDasharray={dashArray} />
            </mask>
          </defs>
          <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#1e293b" strokeWidth={strokeW} mask={`url(#tick-mask-${instanceId}-${label})`} />
          <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#7C3AED" strokeWidth={strokeW}
            strokeDasharray={circumference} strokeDashoffset={offset} 
            mask={`url(#tick-mask-${instanceId}-${label})`} 
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <span className={`absolute font-bold font-display text-white tabular-nums ${numClasses}`}>
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className={`font-bold text-slate-400 uppercase tracking-widest ${labelClasses}`}>
        {label}
      </span>
    </div>
  );
};

export default function SandboxHero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);
  const heroCtaRef = useRef(null);
  const { setHeroCtaVisible } = useHeroCta();

  // IntersectionObserver to track when the hero CTA scrolls out of view
  useEffect(() => {
    const el = heroCtaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroCtaVisible(entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setHeroCtaVisible]);

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

  const daysLeft = Math.max(0, Math.ceil((REGISTRATION_DEADLINE.getTime() - Date.now()) / 86400000));

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/home-hero.jpg"
            alt="Sandbox Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center w-full">
            
            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white tracking-tighter leading-[0.9] mb-6">
                <span className="block text-slate-300 font-coolvetica italic font-normal tracking-wide !text-5xl md:!text-7xl lg:!text-8xl">THE PREMIER</span>
                <span className="block text-[#9333EA] font-arthead font-normal tracking-tight whitespace-nowrap !text-5xl md:!text-7xl lg:!text-8xl">BUSINESS PITCHING</span>
                <span className="block text-slate-100 font-coolvetica italic font-normal tracking-wide !text-5xl md:!text-7xl lg:!text-8xl">COMPETITION.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Sri Lanka's first inter-school business pitching competition, where ideas take flight.
              </p>
            </ScrollReveal>

            <div className="w-full flex flex-col items-center">
              {/* Prominent CTA */}
              <ScrollReveal delay={400} immediate>
                <Link
                  ref={heroCtaRef}
                  href="https://forms.office.com/"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold rounded-full bg-[#7C3AED]/30 backdrop-blur-md border border-white/10 hover:bg-[#7C3AED]/40 text-white transition-all duration-300 focus:ring-2 focus:ring-[#7C3AED]/50 focus:outline-none shadow-lg hover:-translate-y-0.5 active:translate-y-0 mb-12"
                >
                  <span>Register Now</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ChevronRight size={18} />
                  </span>
                </Link>
              </ScrollReveal>

              {/* Inline Hero Countdown (Radial Dials) */}
              <ScrollReveal delay={500}>
                <div className="flex justify-center items-center gap-4 md:gap-8">
                  {[
                    // TODO: Set max days to the total duration of the countdown once start date is known
                    { label: 'Days', value: timeLeft.days, max: 30 },
                    { label: 'Hours', value: timeLeft.hours, max: 24 },
                    { label: 'Minutes', value: timeLeft.minutes, max: 60 }
                  ].map((item, idx) => (
                    <Dial key={idx} label={item.label} value={item.value} max={item.max} instanceId="inline" />
                  ))}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Sticky Compact Countdown & CTA */}
      <div 
        className={`fixed bottom-0 left-0 w-full z-40 bg-slate-950/40 backdrop-blur-2xl border-t border-white/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] transition-transform duration-500 transform ${isSticky ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-row items-center justify-center gap-6">

          <div className="hidden md:flex flex-col items-end">
             <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Registrations close in</span>
          </div>

          {/* Ticking Numbers */}
          <div className="flex gap-4 md:gap-8 md:border-l md:border-white/10 md:pl-6">
            {[
              // TODO: Set max days to the total duration of the countdown once start date is known
              { label: 'Days', value: timeLeft.days, max: 30 },
              { label: 'Hrs', value: timeLeft.hours, max: 24 },
              { label: 'Min', value: timeLeft.minutes, max: 60 }
            ].map((item, idx) => (
              <Dial key={idx} label={item.label} value={item.value} max={item.max} instanceId="sticky" size="small" />
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}
