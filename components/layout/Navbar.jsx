"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

  const navClass = `fixed top-0 w-full z-40 transition-all duration-300 ${
    scrolled ? 'backdrop-blur-md bg-slate-950/70 border-b border-white/10 shadow-xl py-3' : 'bg-transparent py-5'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold font-display tracking-tighter text-white">
              SANDBOX
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                About Us <ChevronDown size={16} className="ml-1" />
              </button>
              
              {/* Dropdown */}
              <div 
                className={`absolute left-0 mt-2 w-48 rounded-xl backdrop-blur-md bg-slate-900/90 border border-white/10 shadow-2xl transition-all duration-200 ${aboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <div className="py-2">
                  <Link href="/about" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                    Overview
                  </Link>
                  <Link href="/team" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                    Meet the Team
                  </Link>
                  <Link href="/editions" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                    Past Editions
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              href="https://forms.office.com/" 
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all"
            >
              Register Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full backdrop-blur-lg bg-slate-950/95 border-b border-white/10 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          <Link href="/" className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">
            Home
          </Link>
          <div className="space-y-1 pl-3">
            <div className="px-3 py-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">About Us</div>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">
              Overview
            </Link>
            <Link href="/team" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">
              Meet the Team
            </Link>
            <Link href="/editions" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">
              Past Editions
            </Link>
          </div>
          <Link href="https://forms.office.com/" target="_blank" className="block mt-4 px-3 py-3 text-center text-base font-medium text-white bg-[#7C3AED] rounded-lg">
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
