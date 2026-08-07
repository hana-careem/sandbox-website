"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';

const MARKS = {
  ring:   <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.4"/></svg>,
  dot:    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="currentColor"/></svg>,
  tri:    <svg viewBox="0 0 24 24" fill="none"><path d="M12 4l8 15H4L12 4z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/></svg>,
  sq:     <svg viewBox="0 0 24 24" fill="none"><rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.4"/></svg>,
  spark:  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8"/></svg>,
  hex:    <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7.5 4.5v9L12 21l-7.5-4.5v-9L12 3z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/></svg>,
};

export const EDITIONS = {
  "Sandbox 1.0": [
    { name: "Host & Organiser", partners: [
      { name: "APIIT", sub: "Inspire love for learning", img: "/assets/apiit-logo.png" },
      { name: "Entrepreneurship Club", sub: "of APIIT", img: "/assets/eclub-logo.png" },
    ]},
    { name: "Banking Partner", partners: [
      { name: "Sampath Bank", bold: "Sampath", img: "/assets/sampath-logo.jpg" },
    ]},
    { name: "Learning Partner", partners: [
      { name: "Unilever", sub: "Sri Lanka", img: "/assets/unilever-logo.png" },
      { name: "Sasnaka Sansada", sub: "Foundation", img: "/assets/sasnaka-logo.jpg" },
    ]},
    { name: "Associate Partner", partners: [
      { name: "KVK", sub: "Enterprises", img: "/assets/KVK-logo.jpeg" },
    ]},
    { name: "Advocacy Partner", partners: [
      { name: "Central Environmental", sub: "Authority", img: "/assets/CEA-logo.png" },
    ]},
    { name: "Print & Online Media Partner", partners: [
      { name: "Virakesari", sub: "Since 1930", img: "/assets/veerakesari-logo.png" },
    ]},
    { name: "Photography Partner", partners: [
      { name: "Black Canvas", sub: "Photography", img: "/assets/Black-Canvas-logo.png" },
    ]},
  ],
  "Sandbox 2.0": [
    { name: "Title Sponsor", partners: [
      { name: "JKOA", sub: "Office Automation", img: "/assets/JKOA-logo.png" },
      { name: "Riotouch", sub: "Interactive Displays", mark: "sq" },
    ]},
    { name: "Gold Sponsor", partners: [
      { name: "Sampath Auto", sub: "& Trading" },
      { name: "Helpyou.lk", bold: "Help" },
      { name: "Life Vision", bold: "Life", img: "/assets/life-vision-logo.jpeg" },
      { name: "Hi Tech Lanka", bold: "Hi Tech", img: "/assets/hi-tech-logo.png" },
      { name: "Hunters", img: "/assets/hunters-logo.jpg" },
      { name: "SAB", img: "/assets/sab-logo.png" },
      { name: "Decent Trust", sub: "Colombo", img: "/assets/decent-logo.jpg" },
    ]},
    { name: "Bronze Sponsor", partners: [
      { name: "Playdium", sub: "Play · Eat · Repeat", img: "/assets/playdium-logo.png" },
      { name: "Awakening", sub: "Training Academy", img: "/assets/ATA-logo.png" },
    ]},
    { name: "Banking Sponsor", partners: [
      { name: "NSB", sub: "National Savings Bank", img: "/assets/NSB-logo.png" },
    ]},
    { name: "AV Advertisement Sponsor", partners: [
      { name: "Sampath Bank", bold: "Sampath", img: "/assets/sampath-logo.jpg" },
    ]},
    { name: "Print Media Sponsor", partners: [
      { name: "The Sunday Times", bold: "Sunday", img: "/assets/sunday-logo.jpg" },
    ]},
    { name: "Photography Partner", partners: [
      { name: "Black Canvas", sub: "Photography", img: "/assets/Black-Canvas-logo.png" },
    ]},
    { name: "Host & Organiser", partners: [
      { name: "APIIT", sub: "Inspire love for learning", img: "/assets/apiit-logo.png" },
      { name: "Entrepreneurship Club", sub: "of APIIT", img: "/assets/eclub-logo.png" },
    ]},
  ],
};

function slug(s) { 
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-'); 
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function Wordmark({ p }) {
  if (p.img) {
    return (
      <img 
        src={p.img} 
        alt={p.name} 
        className="object-contain"
        style={{
          maxHeight: '52px', 
          maxWidth: '80%', 
          opacity: 0.9 
        }} 
      />
    );
  }

  let nameContent = p.name;
  if (p.bold) {
    const rest = p.name.slice(p.bold.length);
    nameContent = <><b className="font-bold text-white">{p.bold}</b>{rest}</>;
  }

  return (
    <div className="flex flex-col items-center gap-2 text-center wordmark-wrap">
      {p.mark && <span className="w-[30px] h-[30px] text-slate-300 transition-colors mark-svg">{MARKS[p.mark]}</span>}
      <span className="font-poppins font-semibold text-[clamp(15px,2.4vw,19px)] text-slate-200 tracking-[-0.01em] leading-[1.1] transition-colors name-text">
        {nameContent}
      </span>
      {p.sub && <span className="text-[9px] tracking-[0.24em] uppercase text-slate-400 transition-colors sub-text">{p.sub}</span>}
    </div>
  );
}

export default function PastPartners() {
  const years = Object.keys(EDITIONS);
  const [activeYear, setActiveYear] = useState(years[years.length - 1]);
  const [activeTier, setActiveTier] = useState('');
  const [isSwitching, setIsSwitching] = useState(false);
  
  const contentRef = useRef(null);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const thumbRef = useRef(null);
  const yearsRef = useRef(null);
  
  const observerRef = useRef(null);

  // Position thumb perfectly
  const updateThumbPosition = () => {
    if (yearsRef.current && thumbRef.current) {
      const activeBtn = yearsRef.current.querySelector('.year-pill[aria-pressed="true"]');
      if (activeBtn) {
        thumbRef.current.style.width = activeBtn.offsetWidth + 'px';
        thumbRef.current.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
      }
    }
  };

  // Position indicator smoothly
  const updateIndicatorPosition = () => {
    if (navRef.current && indicatorRef.current) {
      const activeLink = navRef.current.querySelector('.tier-link.active');
      if (!activeLink || window.innerWidth <= 820) {
        indicatorRef.current.style.opacity = '0';
      } else {
        indicatorRef.current.style.opacity = '1';
        indicatorRef.current.style.height = (activeLink.offsetHeight * 0.62) + 'px';
        const topOffset = activeLink.offsetTop + (activeLink.offsetHeight * 0.19);
        indicatorRef.current.style.transform = `translateY(${topOffset}px)`;
      }
    }
  };

  // Handle year switch with spring and glow
  const handleYearSelect = (y) => {
    if (y === activeYear) return;
    
    if (thumbRef.current) {
      thumbRef.current.classList.add('moving');
      setTimeout(() => {
        if (thumbRef.current) thumbRef.current.classList.remove('moving');
      }, 560);
    }
    
    setIsSwitching(true);
    setTimeout(() => {
      setActiveYear(y);
      setIsSwitching(false);
    }, 340);
  };

  // Recompute thumb sizes whenever year changes or fonts load
  useIsomorphicLayoutEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(updateThumbPosition));
    if (document.fonts) {
      document.fonts.ready.then(() => {
        requestAnimationFrame(() => requestAnimationFrame(updateThumbPosition));
      });
    }
  }, [activeYear]);

  // Setup scroll spy (exact logic requested) and scroll reveals
  useEffect(() => {
    if (isSwitching) return;
    
    // Intersection observer for logo card reveals
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      if (observerRef.current) observerRef.current.disconnect();
      const cards = contentRef.current?.querySelectorAll('.logo-card');
      if (cards && cards.length > 0) {
        observerRef.current = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              const card = e.target;
              const idx = Array.from(card.parentElement.children).indexOf(card);
              card.style.animationDelay = (idx * 55) + 'ms';
              card.classList.add('in');
              observerRef.current.unobserve(card);
            }
          });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
        cards.forEach(c => observerRef.current.observe(c));
      }
    } else {
      // reduced motion: just show them immediately
      const cards = contentRef.current?.querySelectorAll('.logo-card');
      cards?.forEach(c => c.classList.add('in-instant'));
    }

    // Passive scroll listener for Tier indicator
    let ticking = false;
    const tierEls = contentRef.current?.querySelectorAll('.tier-block');
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (tierEls && tierEls.length > 0) {
            const focusLine = window.innerHeight * 0.38;
            let currentTier = tierEls[0].id; // fallback to first
            let minDiff = Infinity;
            
            for (let i = 0; i < tierEls.length; i++) {
              const rect = tierEls[i].getBoundingClientRect();
              if (rect.top <= focusLine) {
                const diff = focusLine - rect.top;
                if (diff < minDiff) {
                  minDiff = diff;
                  currentTier = tierEls[i].id;
                }
              }
            }
            setActiveTier(currentTier);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once to initialize
    onScroll();

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [activeYear, isSwitching]);

  // Sync indicator when active tier changes
  useIsomorphicLayoutEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(updateIndicatorPosition));
  }, [activeTier, activeYear, isSwitching]);

  // Global resize listener
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          updateThumbPosition();
          updateIndicatorPosition();
        }));
      }, 50);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tiers = EDITIONS[activeYear] || [];

  return (
    <section 
      id="past-sponsors"
      className="pb-20 relative bg-slate-950 font-sans" 
    >
      
      {/* 1. Section Header */}
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,40px)] pt-20 text-center relative z-10">
        <span className="inline-block font-poppins font-semibold text-[12px] tracking-[0.32em] text-[#e6007e] uppercase mb-4">
          Our Partners
        </span>
        <h2 className="font-poppins font-bold text-[clamp(38px,7vw,76px)] leading-[1.02] tracking-[-0.02em] text-white">
          Sandbox <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ff1e93]">Sponsors</span>
        </h2>
        <p className="text-slate-400 max-w-[560px] mx-auto mt-4 text-[clamp(15px,2vw,17px)]">
          The organisations that powered Sri Lanka's biggest inter-school business pitching competition. Meet the partners who stood with {activeYear}.
        </p>
      </div>

      {/* 2. Edition Toggle */}
      <div className="years sticky top-[71px] z-40" ref={yearsRef}>
        <div className="year-switch">
          <span className="year-thumb" ref={thumbRef}></span>
          {years.map(y => (
            <button 
              key={y}
              className={`year-pill ${y === activeYear ? 'active' : ''}`} 
              aria-pressed={y === activeYear}
              onClick={() => handleYearSelect(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Layout: Sidebar + Grid */}
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,40px)]">
        <div className={`layout ${isSwitching ? 'switching' : ''}`}>
          
          <aside className="sidebar">
            <div className="sidebar-inner sticky top-[150px]">
              <nav className="tier-nav" ref={navRef}>
                <div className="tier-indicator" ref={indicatorRef}></div>
                {tiers.map((t, i) => {
                  const targetId = slug(t.name);
                  return (
                    <button 
                      key={t.name}
                      className={`tier-link ${activeTier === targetId || (i === 0 && !activeTier) ? 'active' : ''}`}
                      onClick={() => {
                        const el = document.getElementById(targetId);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      {t.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>
          
          <main className="content min-w-0" ref={contentRef}>
            {tiers.map(t => (
              <section className="tier-block scroll-mt-[160px] pt-2 mb-14" id={slug(t.name)} key={t.name}>
                <div className="flex items-baseline gap-[14px] mb-[22px]">
                  <h3 className="text-white m-0 font-poppins font-semibold text-[clamp(20px,3vw,27px)] tracking-[-0.01em]">
                    {t.name}
                  </h3>
                  <span className="text-[12px] text-slate-400 font-poppins font-medium border border-slate-700/50 rounded-full px-2.5 py-0.5">
                    {t.partners.length}
                  </span>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[14px]">
                  {t.partners.map((p, i) => (
                    <div className="logo-card" key={i}>
                      <Wordmark p={p} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </main>
          
        </div>
      </div>

      <style jsx>{`
        .years {
          display: flex; justify-content: center;
          padding: 30px 0 26px; margin-top: 8px;
          background: linear-gradient(180deg, rgba(2,6,23,1) 30%, rgba(2,6,23,0.85) 75%, rgba(2,6,23,0) 100%);
        }
        .year-switch {
          position: relative; display: inline-flex; padding: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.10);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
        }
        .year-thumb {
          position: absolute; top: 6px; left: 0; height: calc(100% - 12px);
          border-radius: 999px;
          background: linear-gradient(135deg, #fff, #f4eef1);
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.75);
          transition: transform 0.5s cubic-bezier(.34, 1.56, .5, 1),
                      width 0.5s cubic-bezier(.34, 1.56, .5, 1),
                      box-shadow 0.5s ease;
          z-index: 0; will-change: transform, width;
        }
        .year-thumb.moving { 
          box-shadow: 0 8px 26px rgba(230,0,126,0.35), inset 0 1px 0 rgba(255, 255, 255, 0.75); 
        }
        .year-pill {
          position: relative; z-index: 1;
          font-family: "Poppins", sans-serif; font-weight: 600; font-size: 15px;
          color: #cbc3d2; background: transparent; border: none;
          border-radius: 999px; padding: 10px 30px; cursor: pointer; white-space: nowrap;
          transition: color .4s cubic-bezier(.22, 1, .36, 1);
        }
        .year-pill:hover { color: #ffffff; }
        .year-pill.active { color: #1b1420; font-weight: 700; }

        .layout {
          display: grid;
          grid-template-columns: 230px 1fr;
          gap: clamp(28px, 5vw, 68px);
          padding-bottom: 120px;
        }

        .sidebar { position: relative; }
        .tier-nav { position: relative; padding-left: 20px; }
        .tier-indicator {
          position: absolute; left: 0; top: 0;
          width: 3px; height: 30px; border-radius: 3px;
          background: linear-gradient(#ff1e93, #e6007e);
          box-shadow: 0 0 16px #e6007e;
          transition: transform 0.45s cubic-bezier(.4, 0, .1, 1), height 0.45s cubic-bezier(.4, 0, .1, 1), opacity .25s;
        }
        .tier-link {
          position: relative;
          display: block; width: 100%; text-align: left; background: none; border: none;
          font-family: "Inter", sans-serif; font-size: 15px; color: #94a3b8; /* slate-400 */
          padding: 16px 0; cursor: pointer;
          transition: color .25s, padding-left .25s cubic-bezier(.22, 1, .36, 1);
        }
        .tier-link::after {
          content: ""; position: absolute; left: 0; bottom: 0;
          width: 150px; max-width: 68%; height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,.16), rgba(255,255,255,0));
          transition: opacity .25s;
        }
        .tier-link:last-child::after { display: none; }
        .tier-link:hover, .tier-link:focus-visible { color: #ffffff; outline: none; }
        .tier-link.active { color: #fff; font-weight: 600; padding-left: 4px; }

        .logo-card {
          position: relative;
          aspect-ratio: 16 / 10;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          display: grid; place-items: center;
          padding: 22px;
          overflow: hidden;
          opacity: 0; transform: translateY(22px);
          transition: background .3s, border-color .3s, transform .3s cubic-bezier(.22, 1, .36, 1);
        }
        :global(.logo-card.in) { animation: rise .6s cubic-bezier(.22, 1, .36, 1) forwards; }
        :global(.logo-card.in-instant) { opacity: 1; transform: translateY(0); transition: none; }
        
        @keyframes rise { to { opacity: 1; transform: translateY(0); } }
        
        .logo-card::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit;
          background: radial-gradient(120% 120% at 50% 0%, rgba(230,0,126,.10), transparent 60%);
          opacity: 0; transition: opacity .3s; pointer-events: none;
        }
        .logo-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-4px);
        }
        .logo-card:hover::after { opacity: 1; }

        .logo-card:hover :global(.name-text), .logo-card:hover :global(.mark-svg) { color: #fff; }
        .logo-card:hover :global(.sub-text) { color: #cbd5e1; /* slate-300 */ }

        .layout.switching .content, .layout.switching .sidebar-inner { opacity: 0; transform: translateY(10px); }
        .layout .content, .layout .sidebar-inner { transition: opacity .4s cubic-bezier(.22, 1, .36, 1), transform .4s cubic-bezier(.22, 1, .36, 1); }

        @media (max-width: 820px) {
          .years { top: 63px; }
          .layout { grid-template-columns: 1fr; gap: 8px; }
          .sidebar-inner { 
            position: sticky; top: 125px; z-index: 30; margin: 0 -20px; 
            background: rgba(2,6,23,0.85); backdrop-filter: blur(10px); 
            padding: 10px 20px; border-bottom: 1px solid rgba(255,255,255,0.1); 
          }
          .tier-nav { display: flex; gap: 4px; overflow-x: auto; padding-left: 0; scrollbar-width: none; }
          .tier-nav::-webkit-scrollbar { display: none; }
          .tier-indicator { display: none; }
          .tier-link {
            white-space: nowrap; border-bottom: none; padding: 8px 14px;
            border: 1px solid rgba(255,255,255,0.1); border-radius: 999px; font-size: 13px;
          }
          .tier-link::after { display: none; }
          .tier-link.active { border-color: #e6007e; background: rgba(230,0,126,.12); padding-left: 14px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .year-thumb { transition: none !important; }
          .tier-indicator { transition: none !important; }
          html { scroll-behavior: auto !important; }
        }
      `}</style>
    </section>
  );
}
