"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled ? 'backdrop-blur-md bg-slate-950/80 border-b border-white/10 shadow-xl py-2' : 'bg-transparent py-4'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center">
            {/* Club logo — primary brand, links to home. Min 40px tappable area on mobile */}
            <Link href="/" className="flex items-center mr-8 py-1" aria-label="Entrepreneurship Club of APIIT, Home">
              <Image
                src="/assets/E-club logo.png"
                alt="Entrepreneurship Club of APIIT"
                width={200}
                height={56}
                className="h-11 md:h-14 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
            <div className="relative group">
              <button 
                className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                About Us <ChevronDown size={16} className="ml-1" />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-48 rounded-xl backdrop-blur-md bg-slate-900/95 border border-white/10 shadow-2xl transition-all duration-200 ${aboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <div className="py-2">
                  <Link href="/about" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">Overview</Link>
                  <Link href="/about/editions" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">Past Editions</Link>
                </div>
              </div>
            </div>
            <Link href="/sponsors" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sponsors</Link>
            <Link href="/what-we-offer" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">What We Offer</Link>
            <Link href="/faqs" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">FAQs</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact Us</Link>
          </div>

          {/* Right Actions: Register (Always Visible) & Hamburger (Mobile Only) */}
          <div className="flex items-center space-x-4">
            <Link 
              href="https://forms.office.com/" 
              target="_blank"
              className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-2.5 text-sm font-bold rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all"
            >
              Register Now
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-slate-300 hover:text-white focus:outline-none p-1"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute w-full backdrop-blur-lg bg-slate-950/95 border-b border-white/10 transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'}`}>
        <div className="px-4 space-y-1 overflow-y-auto max-h-[80vh]">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">Home</Link>
          <div className="space-y-1 pb-2 border-b border-white/10">
            <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">About Us</div>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">Overview</Link>
            <Link href="/about/editions" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">Past Editions</Link>
          </div>
          <Link href="/sponsors" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">Sponsors</Link>
          <Link href="/what-we-offer" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">What We Offer</Link>
          <Link href="/faqs" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">FAQs</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
