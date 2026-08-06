"use client";
import React, { useState, useEffect, useRef } from 'react';

const MARKS = {
  ring:   <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.4"/></svg>,
  dot:    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="currentColor"/></svg>,
  tri:    <svg viewBox="0 0 24 24" fill="none"><path d="M12 4l8 15H4L12 4z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/></svg>,
  sq:     <svg viewBox="0 0 24 24" fill="none"><rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.4"/></svg>,
  spark:  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8"/></svg>,
  hex:    <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7.5 4.5v9L12 21l-7.5-4.5v-9L12 3z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/></svg>,
};

const EDITIONS = {
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
      { name: "KVI", sub: "Enterprises", img: "/assets/KVK-logo.jpeg" },
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

function slug(s){ 
  return s.toLowerCase().replace(/[^a-z0-9]+/g,'-'); 
}

function Wordmark({ p }) {
  if (p.img) {
    return (
      <img 
        src={p.img} 
        alt={p.name} 
        style={{
          maxHeight: '46px', 
          maxWidth: '80%', 
          objectFit: 'contain', 
          filter: 'grayscale(1) brightness(1.6)', 
          opacity: 0.9 
        }} 
      />
    );
  }

  let nameContent = p.name;
  if (p.bold) {
    const rest = p.name.slice(p.bold.length);
    nameContent = (
      <>
        <b>{p.bold}</b>{rest}
      </>
    );
  }

  return (
    <div className="wordmark">
      {p.mark && <span className="mark">{MARKS[p.mark]}</span>}
      <span className="name">{nameContent}</span>
      {p.sub && <span className="sub">{p.sub}</span>}
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
  const spyRef = useRef(null);

  // Handle year switch animation
  const handleYearSelect = (y) => {
    if (y === activeYear) return;
    setIsSwitching(true);
    setTimeout(() => {
      setActiveYear(y);
      setIsSwitching(false);
    }, 340);
  };

  // Move thumb pill for year switch
  useEffect(() => {
    if (yearsRef.current && thumbRef.current) {
      const activeBtn = yearsRef.current.querySelector('.year-pill.active');
      if (activeBtn) {
        thumbRef.current.style.width = activeBtn.offsetWidth + 'px';
        thumbRef.current.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
        thumbRef.current.classList.add('moving');
        setTimeout(() => {
          if (thumbRef.current) thumbRef.current.classList.remove('moving');
        }, 560);
      }
    }
  }, [activeYear]);

  // Setup scroll reveal & spy when activeYear changes
  useEffect(() => {
    if (isSwitching) return;
    
    // Set up scroll reveal for cards
    if (observerRef.current) observerRef.current.disconnect();
    
    const cards = contentRef.current?.querySelectorAll('.logo-card');
    if (cards) {
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

    // Set up scroll spy for tiers
    if (spyRef.current) spyRef.current.disconnect();
    
    const tierEls = contentRef.current?.querySelectorAll('.tier-block');
    if (tierEls) {
      spyRef.current = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActiveTier(e.target.id);
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      
      tierEls.forEach(t => spyRef.current.observe(t));
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (spyRef.current) spyRef.current.disconnect();
    };
  }, [activeYear, isSwitching]);

  // Move indicator when activeTier changes
  useEffect(() => {
    if (navRef.current && indicatorRef.current) {
      const activeLink = navRef.current.querySelector('.tier-link.active');
      if (!activeLink || window.innerWidth <= 820) {
        indicatorRef.current.style.opacity = 0;
        return;
      }
      indicatorRef.current.style.opacity = 1;
      indicatorRef.current.style.height = activeLink.offsetHeight * 0.62 + 'px';
      indicatorRef.current.style.transform = `translateY(${activeLink.offsetTop + activeLink.offsetHeight * 0.19}px)`;
    }
  }, [activeTier, activeYear, isSwitching]);

  // Update indicator on resize
  useEffect(() => {
    const handleResize = () => {
      setActiveTier(prev => {
        // Trigger a re-render of the effect above
        return prev;
      });
      // Force trigger indicator update
      if (navRef.current && indicatorRef.current) {
        const activeLink = navRef.current.querySelector('.tier-link.active');
        if (!activeLink || window.innerWidth <= 820) {
          indicatorRef.current.style.opacity = 0;
        } else {
          indicatorRef.current.style.opacity = 1;
          indicatorRef.current.style.height = activeLink.offsetHeight * 0.62 + 'px';
          indicatorRef.current.style.transform = `translateY(${activeLink.offsetTop + activeLink.offsetHeight * 0.19}px)`;
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tiers = EDITIONS[activeYear] || [];

  return (
    <section className="bg-[var(--bg)] text-[var(--text)] font-sans relative" style={{ 
      '--bg': '#000000',
      '--card': '#0e0e0e',
      '--card-hover': '#171717',
      '--line': 'rgba(255, 255, 255, 0.07)',
      '--line-strong': 'rgba(255, 255, 255, 0.14)',
      '--text': '#ffffff',
      '--muted': '#8b8b8f',
      '--muted-2': '#5c5c60',
      '--pink': '#e6007e',
      '--pink-2': '#ff1e93',
      '--radius': '16px',
      '--sidebar-w': '230px',
      '--maxw': '1200px',
      '--ease': 'cubic-bezier(0.22, 1, 0.36, 1)'
    }}>
      
      <div className="years" ref={yearsRef}>
        <div className="year-switch">
          <span className="year-thumb" ref={thumbRef}></span>
          {years.map(y => (
            <button 
              key={y}
              className={`year-pill ${y === activeYear ? 'active' : ''}`} 
              onClick={() => handleYearSelect(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className={`layout ${isSwitching ? 'switching' : ''}`}>
          
          <aside className="sidebar">
            <div className="sidebar-inner">
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
          
          <main className="content" ref={contentRef}>
            {tiers.map(t => (
              <section className="tier-block" id={slug(t.name)} key={t.name}>
                <div className="tier-head">
                  <h2>{t.name}</h2>
                  <span className="count">{t.partners.length}</span>
                </div>
                <div className="logo-grid">
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
        .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 clamp(20px, 5vw, 40px); }

        /* ---------- year selector ---------- */
        .years {
          position: sticky; top: 71px; z-index: 40;
          display: flex; justify-content: center;
          padding: 22px 0 26px; margin-top: 8px;
          background: linear-gradient(180deg, #000 58%, rgba(0,0,0,0));
        }
        .year-switch {
          position: relative; display: inline-flex; padding: 5px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.09);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(8px);
        }
        .year-thumb {
          position: absolute; top: 5px; left: 0; height: calc(100% - 10px);
          border-radius: 999px;
          background: #f7f4f1;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.75);
          transition: transform .55s cubic-bezier(.6, 0, .2, 1),
                      width .55s cubic-bezier(.6, 0, .2, 1),
                      box-shadow .5s ease;
          z-index: 0; will-change: transform, width;
        }
        .year-thumb.moving { box-shadow: 0 6px 22px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.75); }
        .year-pill {
          position: relative; z-index: 1;
          font-family: "Poppins", sans-serif; font-weight: 600; font-size: 15px;
          color: #c9c4cf; background: transparent; border: none;
          border-radius: 999px; padding: 9px 26px; cursor: pointer;
          transition: color .5s var(--ease);
        }
        .year-pill:hover { color: #ffffff; }
        .year-pill.active { color: #1b1420; font-weight: 700; }

        /* ---------- layout grid ---------- */
        .layout {
          display: grid;
          grid-template-columns: var(--sidebar-w) 1fr;
          gap: clamp(28px, 5vw, 68px);
          padding-bottom: 120px;
        }

        /* ---------- sidebar ---------- */
        .sidebar { position: relative; }
        .sidebar-inner { position: sticky; top: 150px; }
        .tier-nav { position: relative; padding-left: 20px; }
        .tier-indicator {
          position: absolute; left: 0; top: 0;
          width: 2px; height: 30px; border-radius: 2px;
          background: linear-gradient(var(--pink-2), var(--pink));
          box-shadow: 0 0 14px var(--pink);
          transition: transform .35s var(--ease), height .35s var(--ease), opacity .25s;
        }
        .tier-link {
          position: relative;
          display: block; width: 100%; text-align: left; background: none; border: none;
          font-family: "Inter", sans-serif; font-size: 15px; color: var(--muted);
          padding: 16px 0; cursor: pointer;
          transition: color .25s, padding-left .25s var(--ease);
        }
        .tier-link::after {
          content: ""; position: absolute; left: 0; bottom: 0;
          width: 150px; max-width: 68%; height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,.16), rgba(255,255,255,0));
          transition: opacity .25s;
        }
        .tier-link:last-child::after { display: none; }
        .tier-link:hover { color: #cfcfd2; }
        .tier-link.active { color: #fff; font-weight: 600; padding-left: 4px; }

        /* ---------- content ---------- */
        .content { min-width: 0; }
        .tier-block { padding-top: 8px; margin-bottom: 56px; scroll-margin-top: 160px; }
        .tier-head { display: flex; align-items: baseline; gap: 14px; margin-bottom: 22px; }
        .tier-head h2 {
          font-family: "Poppins", sans-serif; font-weight: 600; font-size: clamp(20px, 3vw, 27px);
          letter-spacing: -0.01em; margin: 0; color: white;
        }
        .tier-head .count {
          font-size: 12px; color: var(--muted-2); font-family: "Poppins", sans-serif; font-weight: 500;
          border: 1px solid var(--line); border-radius: 999px; padding: 3px 10px;
        }

        .logo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 14px;
        }
        .logo-card {
          position: relative;
          aspect-ratio: 16 / 10;
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          display: grid; place-items: center;
          padding: 22px;
          overflow: hidden;
          opacity: 0; transform: translateY(22px);
          transition: background .3s, border-color .3s, transform .3s var(--ease);
        }
        :global(.logo-card.in) { animation: rise .6s var(--ease) forwards; }
        @keyframes rise { to { opacity: 1; transform: translateY(0); } }
        .logo-card::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit;
          background: radial-gradient(120% 120% at 50% 0%, rgba(230,0,126,.10), transparent 60%);
          opacity: 0; transition: opacity .3s;
        }
        .logo-card:hover {
          background: var(--card-hover);
          border-color: var(--line-strong);
          transform: translateY(-4px);
        }
        .logo-card:hover::after { opacity: 1; }

        :global(.wordmark) { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px; }
        :global(.wordmark .mark) { width: 30px; height: 30px; color: #cfcfd2; transition: color .3s; }
        :global(.wordmark .name) {
          font-family: "Poppins", sans-serif; font-weight: 600; font-size: clamp(15px, 2.4vw, 19px);
          color: #cbcbce; letter-spacing: -0.01em; transition: color .3s;
          line-height: 1.1;
        }
        :global(.wordmark .name b) { font-weight: 700; color: #fff; }
        :global(.wordmark .sub) {
          font-size: 9px; letter-spacing: .24em; text-transform: uppercase;
          color: var(--muted-2); transition: color .3s;
        }
        .logo-card:hover :global(.name), .logo-card:hover :global(.mark) { color: #fff; }
        .logo-card:hover :global(.sub) { color: var(--muted); }

        /* fade for year switch */
        .layout.switching .content, .layout.switching .sidebar-inner { opacity: 0; transform: translateY(10px); }
        .layout .content, .layout .sidebar-inner { transition: opacity .4s var(--ease), transform .4s var(--ease); }

        /* ---------- responsive ---------- */
        @media (max-width: 820px) {
          .years { top: 63px; }
          .layout { grid-template-columns: 1fr; gap: 8px; }
          .sidebar { position: sticky; top: 118px; z-index: 30; margin: 0 -20px; }
          .sidebar-inner { position: static; background: rgba(0,0,0,.85); backdrop-filter: blur(10px); padding: 10px 20px; border-bottom: 1px solid var(--line); }
          .tier-nav { display: flex; gap: 4px; overflow-x: auto; padding-left: 0; scrollbar-width: none; }
          .tier-nav::-webkit-scrollbar { display: none; }
          .tier-indicator { display: none; }
          .tier-link {
            white-space: nowrap; border-bottom: none; padding: 8px 14px;
            border: 1px solid var(--line); border-radius: 999px; font-size: 13px;
          }
          .tier-link::after { display: none; }
          .tier-link.active { border-color: var(--pink); padding-left: 14px; background: rgba(230,0,126,.12); }
          .content { padding-top: 12px; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; scroll-behavior: auto; }
          .logo-card { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
