"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // Mobile about accordion
  const [scrolled, setScrolled] = useState(false);

  // Desktop hover states
  const [desktopAboutHover, setDesktopAboutHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-5xl z-50 rounded-full transition-all duration-300 ${
    scrolled 
      ? 'backdrop-blur-xl bg-slate-950/70 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-1.5 px-5' 
      : 'backdrop-blur-md bg-slate-900/40 border border-white/5 shadow-lg py-2 px-5'
  }`;

  return (
    <nav className={navClass}>
      <div className="flex justify-between items-center w-full relative">
        
        {/* Logo Left */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center" aria-label="Sandbox, Home">
            <Image
              src="/assets/sandbox-logo.png"
              alt="Sandbox"
              width={160}
              height={56}
              className="h-10 md:h-12 w-auto object-contain scale-125 md:scale-150 origin-left transition-all duration-300"
              priority
            />
          </Link>
        </div>

        {/* Mobile Center Logo (E-Club) */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:hidden flex items-center justify-center">
          <Image
            src="/assets/eclub-logo.webp"
            alt="E-Club"
            width={40}
            height={40}
            className="h-9 w-auto object-contain"
          />
        </div>
        
        {/* Nav Links Center */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-base font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setDesktopAboutHover(true)}
            onMouseLeave={() => setDesktopAboutHover(false)}
          >
            <Link
              href="/about"
              className="flex items-center text-base font-medium text-slate-300 hover:text-white transition-colors py-2"
            >
              About Us <ChevronDown size={16} className={`ml-1 transition-transform ${desktopAboutHover ? 'rotate-180' : ''}`} />
            </Link>
            <div 
              className={`absolute left-1/2 -translate-x-1/2 mt-1 w-44 rounded-2xl backdrop-blur-xl bg-slate-900/90 border border-white/10 shadow-2xl transition-all duration-200 ${desktopAboutHover ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
              <div className="p-2 flex flex-col gap-1">
                <Link href="/about" className="px-4 py-2 text-base text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors">Overview</Link>
                <Link href="/about/editions" className="px-4 py-2 text-base text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors">Past Editions</Link>
              </div>
            </div>
          </div>

          <Link href="/sponsors" className="text-base font-medium text-slate-300 hover:text-white transition-colors">Sponsors</Link>
          <Link href="/what-we-offer" className="text-base font-medium text-slate-300 hover:text-white transition-colors">What We Offer</Link>
          <Link href="/faqs" className="text-base font-medium text-slate-300 hover:text-white transition-colors">FAQs</Link>
          <Link href="/contact" className="text-base font-medium text-slate-300 hover:text-white transition-colors">Contact Us</Link>
        </div>

        {/* CTA Right */}
        <div className="flex items-center space-x-3">
          <Link 
            href="https://forms.office.com/" 
            target="_blank"
            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-all hover:scale-105 active:scale-95 focus:ring-2 focus:ring-[#7C3AED]/50 focus:outline-none shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
          >
            Register Now
          </Link>

          {/* Hamburger (Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-300 hover:text-white focus:outline-none p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div 
        className={`lg:hidden absolute top-[calc(100%+12px)] left-0 w-full backdrop-blur-2xl bg-slate-900/95 border border-white/10 rounded-3xl shadow-2xl transition-all duration-300 origin-top overflow-hidden ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="p-4 flex flex-col max-h-[80vh]">
          <div className="space-y-1 overflow-y-auto mb-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl">Home</Link>
            
            {/* Expandable About Us section */}
            <div>
              <button 
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                About Us
                {aboutOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${aboutOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 py-1 flex flex-col gap-1 border-l border-white/10 ml-6 mt-1 mb-2">
                  <Link href="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-xl">Overview</Link>
                  <Link href="/about/editions" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-xl">Past Editions</Link>
                </div>
              </div>
            </div>

            <Link href="/sponsors" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl">Sponsors</Link>
            <Link href="/what-we-offer" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl">What We Offer</Link>
            <Link href="/faqs" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl">FAQs</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl">Contact Us</Link>
          </div>
          
          <div className="pt-4 border-t border-white/10 mt-2">
            <Link 
              href="https://forms.office.com/" 
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center px-6 py-4 text-base font-bold rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-all focus:ring-2 focus:ring-[#7C3AED]/50 focus:outline-none shadow-lg"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
