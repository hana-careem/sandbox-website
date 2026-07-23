"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useHeroCta } from '../ui/HeroCtaContext';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/what-we-offer', label: 'What We Offer' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact Us' },
]

// Solid, fully-opaque violet pill — reuse your existing Register button classes here
// if you already have one; the important part is that it never goes translucent.
const REGISTER_CLASSES =
  'inline-flex items-center gap-1.5 rounded-full bg-[#7C3AED] px-4 py-2 text-sm ' +
  'font-medium text-white shadow-[0_0_20px_-4px_rgba(124,58,237,0.6)] ' +
  'hover:bg-[#6D28D9] transition-colors'

export default function Navbar({ showNavCta: showNavCtaProp }) {
  const ctx = useHeroCta();
  const pathname = usePathname();
  const showNavCta = showNavCtaProp ?? (pathname !== '/' || !ctx.heroCtaVisible);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const onPointerDown = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    const onScroll = () => setMenuOpen(false)
    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('scroll', onScroll)
    }
  }, [menuOpen])

  const [aboutOpen, setAboutOpen] = useState(false);        // mobile accordion
  const [desktopAboutHover, setDesktopAboutHover] = useState(false); // desktop hover
  const [sponsorsOpen, setSponsorsOpen] = useState(false);
  const [desktopSponsorsHover, setDesktopSponsorsHover] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      {/* ---------------- DESKTOP: floating pill ---------------- */}
      <nav
        className="pointer-events-auto hidden h-[60px] w-[1100px] max-w-[95vw] items-center
                   rounded-full border border-white/10 bg-[#141414]/70 px-5
                   backdrop-blur-xl md:flex"
        aria-label="Primary"
      >
        {/* LEFT: brand */}
        <Link href="/" className="flex items-center gap-6" aria-label="Sandbox home">
          <img src="/assets/sandbox-logo.png" alt="Sandbox" className="h-12 w-auto scale-150 origin-left" />
          <span className="h-10 w-px bg-white/15 ml-2" />
          <img src="/assets/eclub-logo.png" alt="APIIT E-Club" className="h-12 w-auto scale-150 origin-left ml-2 mr-48 opacity-90" />
        </Link>

        {/* CENTER: all links */}
        <ul className="mx-auto flex items-center gap-2">
          <li>
            <Link
              href="/"
              className={
                'whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ' +
                (pathname === '/' ? 'text-white' : 'text-white/60 hover:text-white')
              }
            >
              Home
            </Link>
          </li>

          {/* About Us with hover dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDesktopAboutHover(true)}
            onMouseLeave={() => setDesktopAboutHover(false)}
          >
            <Link
              href="/about"
              className={
                'whitespace-nowrap flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ' +
                (pathname.startsWith('/about') ? 'text-white' : 'text-white/60 hover:text-white')
              }
            >
              About Us
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${desktopAboutHover ? 'rotate-180' : ''}`}
              />
            </Link>

            {/* Dropdown */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-44 rounded-2xl
                         backdrop-blur-xl bg-[#141414]/95 border border-white/10 shadow-2xl
                         transition-all duration-200 ${
                desktopAboutHover
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="p-2 flex flex-col gap-1">
                <Link
                  href="/about"
                  className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="/about/editions"
                  className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  Past Editions
                </Link>
                <Link
                  href="/about/team"
                  className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </li>

          {/* Sponsors with hover dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDesktopSponsorsHover(true)}
            onMouseLeave={() => setDesktopSponsorsHover(false)}
          >
            <Link
              href="/sponsors"
              className={
                'whitespace-nowrap flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ' +
                (pathname.startsWith('/sponsors') ? 'text-white' : 'text-white/60 hover:text-white')
              }
            >
              Sponsors
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${desktopSponsorsHover ? 'rotate-180' : ''}`}
              />
            </Link>

            {/* Dropdown */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-44 rounded-2xl
                         backdrop-blur-xl bg-[#141414]/95 border border-white/10 shadow-2xl
                         transition-all duration-200 ${
                desktopSponsorsHover
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="p-2 flex flex-col gap-1">
                <Link
                  href="/sponsors"
                  className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  Our Sponsors
                </Link>
                <Link
                  href="/sponsors#become-a-partner"
                  className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  Partner Up
                </Link>
                <Link
                  href="/sponsors#past-sponsors"
                  className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  Past Sponsors
                </Link>
              </div>
            </div>
          </li>

          {LINKS.filter(l => l.to !== '/').map(({ to, label }) => {
            const isActive = pathname === to;
            return (
              <li key={to}>
                <Link
                  href={to}
                  className={
                    'whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ' +
                    (isActive ? 'text-white' : 'text-white/60 hover:text-white')
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Register slot */}
        <div
          aria-hidden={!showNavCta}
          className={
            'flex items-center overflow-visible transition-all duration-500 ' +
            'ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
            (showNavCta ? 'ml-2 w-[148px]' : 'ml-0 w-0') +
            ' motion-reduce:transition-none'
          }
        >
          <a
            href="https://forms.gle/aA7xeVSHBGGSuhs87"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={showNavCta ? 0 : -1}
            className={
              REGISTER_CLASSES +
              ' whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
              (showNavCta
                ? 'translate-x-0 scale-100 opacity-100 pointer-events-auto'
                : 'translate-x-8 scale-90 opacity-0 pointer-events-none') +
              ' motion-reduce:translate-x-0 motion-reduce:scale-100 motion-reduce:transition-opacity'
            }
          >
            Register Now
          </a>
        </div>
      </nav>

      {/* ---------------- MOBILE: three-zone bar ---------------- */}
      <div ref={mobileRef} className="pointer-events-auto w-full max-w-[420px] md:hidden">
        <nav
          className="flex h-[52px] items-center justify-between rounded-full border
                     border-white/10 bg-[#141414]/80 px-4 backdrop-blur-xl"
          aria-label="Primary"
        >
          <Link href="/" aria-label="Sandbox home">
            <img src="/assets/sandbox-logo.png" alt="Sandbox" className="h-10 w-auto scale-150 origin-left" />
          </Link>

          <img src="/assets/eclub-logo.png" alt="APIIT E-Club" className="h-10 w-auto scale-150 opacity-90" />

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="grid h-8 w-8 place-items-center rounded-full text-white/80 hover:text-white"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* slide-down menu */}
        <div
          className={
            'mt-2 origin-top overflow-hidden rounded-3xl border border-white/10 ' +
            'bg-[#141414]/90 backdrop-blur-xl transition-all duration-300 ' +
            (menuOpen ? 'max-h-[520px] opacity-100' : 'pointer-events-none max-h-0 opacity-0')
          }
        >
          <ul className="flex flex-col p-3">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={
                  'block rounded-2xl px-4 py-3 text-base transition-colors ' +
                  (pathname === '/' ? 'bg-white/5 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white')
                }
              >
                Home
              </Link>
            </li>

            {/* About Us accordion */}
            <li>
              <button
                type="button"
                onClick={() => setAboutOpen((o) => !o)}
                className={
                  'w-full flex items-center justify-between rounded-2xl px-4 py-3 text-base transition-colors ' +
                  (pathname.startsWith('/about')
                    ? 'bg-white/5 text-white'
                    : 'text-white/70 hover:bg-white/5 hover:text-white')
                }
              >
                About Us
                {aboutOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  aboutOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 py-1 flex flex-col gap-1 border-l border-white/10 ml-6 mt-1 mb-2">
                  <Link
                    href="/about"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/about/editions"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    Past Editions
                  </Link>
                  <Link
                    href="/about/team"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    Meet the Team
                  </Link>
                </div>
              </div>
            </li>

            {/* Sponsors accordion */}
            <li>
              <button
                type="button"
                onClick={() => setSponsorsOpen((o) => !o)}
                className={
                  'w-full flex items-center justify-between rounded-2xl px-4 py-3 text-base transition-colors ' +
                  (pathname.startsWith('/sponsors')
                    ? 'bg-white/5 text-white'
                    : 'text-white/70 hover:bg-white/5 hover:text-white')
                }
              >
                Sponsors
                {sponsorsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  sponsorsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 py-1 flex flex-col gap-1 border-l border-white/10 ml-6 mt-1 mb-2">
                  <Link
                    href="/sponsors"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    Our Sponsors
                  </Link>
                  <Link
                    href="/sponsors#become-a-partner"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    Partner Up
                  </Link>
                  <Link
                    href="/sponsors#past-sponsors"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    Past Sponsors
                  </Link>
                </div>
              </div>
            </li>

            {LINKS.filter(l => l.to !== '/').map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <li key={to}>
                  <Link
                    href={to}
                    onClick={() => setMenuOpen(false)}
                    className={
                      'block rounded-2xl px-4 py-3 text-base transition-colors ' +
                      (isActive ? 'bg-white/5 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white')
                    }
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

            <li className="mt-2 px-1 pb-1">
              <a
                href="https://forms.gle/aA7xeVSHBGGSuhs87"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={REGISTER_CLASSES + ' w-full justify-center py-3'}
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
