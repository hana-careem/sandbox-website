"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import { ChevronRight } from 'lucide-react';
import { useHeroCta } from '../ui/HeroCtaContext';
import PartnersTicker from './PartnersTicker';

// TODO: Replace with exact registration deadline when provided
const REGISTRATION_DEADLINE = new Date('2026-09-11T23:59:59');

const Dial = ({ label, value, size = "large" }) => {
  const numClasses = size === "small"
    ? "text-3xl md:text-4xl"
    : "text-5xl md:text-7xl";

  const labelClasses = size === "small"
    ? "text-[9px] md:text-[10px] mt-0.5"
    : "text-[10px] md:text-xs mt-2";

  return (
    <div className="flex flex-col items-center">
      <span className={`font-coolvetica font-normal text-white tabular-nums leading-none ${numClasses}`}>
        {value.toString().padStart(2, '0')}
      </span>
      <span className={`font-normal text-slate-400 lowercase tracking-widest ${labelClasses}`}>
        {label}
      </span>
    </div>
  );
};

const Colon = ({ size = "large" }) => (
  <span
    className={`font-coolvetica font-normal text-slate-500 leading-none ${
      size === "small" ? "text-3xl md:text-4xl" : "text-5xl md:text-7xl"
    }`}
  >
    :
  </span>
);

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
                <span className="block text-[#9333EA] font-aubrey font-normal tracking-tight whitespace-nowrap !text-5xl md:!text-7xl lg:!text-8xl">Business Pitching</span>
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
                  href="https://forms.gle/aA7xeVSHBGGSuhs87"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold rounded-full bg-[#7C3AED]/30 backdrop-blur-md border border-white/10 hover:bg-[#7C3AED]/40 text-white transition-all duration-300 focus:ring-2 focus:ring-[#7C3AED]/50 focus:outline-none shadow-lg hover:-translate-y-0.5 active:translate-y-0 mb-12"
                >
                  <span>Register Now</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ChevronRight size={18} />
                  </span>
                </Link>
              </ScrollReveal>

              {/* Inline Hero Countdown */}
              <ScrollReveal delay={500}>
                <div className="flex justify-center items-start gap-4 md:gap-6 mt-12">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes }
                  ].map((item, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <Colon />}
                      <Dial label={item.label} value={item.value} />
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-lg md:text-xl text-slate-400 text-center mt-6 leading-relaxed">
                  Until Registrations Close!
                </p>
              </ScrollReveal>
              <PartnersTicker />
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
          <div className="flex items-start gap-3 md:gap-4 md:border-l md:border-white/10 md:pl-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hrs', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes }
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <Colon size="small" />}
                <Dial label={item.label} value={item.value} size="small" />
              </React.Fragment>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}
