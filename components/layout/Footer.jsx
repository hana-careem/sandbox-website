"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const handleDeepLink = (e, appUrl, webUrl) => {
    e.preventDefault();
    const now = Date.now();
    
    // Try to open the app
    window.location.href = appUrl;
    
    // Set a timeout to fallback to web if the app didn't open
    setTimeout(() => {
      if (Date.now() - now < 1500) {
        window.open(webUrl, '_blank', 'noopener,noreferrer');
      }
    }, 1000);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-2xl font-bold font-display tracking-tighter text-white">SANDBOX</h3>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Sri Lanka's first and largest inter-school business pitching competition, run by the APIIT Entrepreneurship Club in partnership with the Ministry of Education.
            </p>
            <div className="flex space-x-4 pt-2">
              <button 
                onClick={(e) => handleDeepLink(e, 'instagram://user?username=sandbox.apiit', 'https://instagram.com/sandbox.apiit')}
                className="text-slate-400 hover:text-[#7C3AED] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </button>
              <button 
                onClick={(e) => handleDeepLink(e, 'fb://facewebmodal/f?href=https://web.facebook.com/profile.php?id=61591366320255', 'https://web.facebook.com/profile.php?id=61591366320255')}
                className="text-slate-400 hover:text-[#7C3AED] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-[#7C3AED] transition-colors">About Sandbox</Link></li>
              <li><Link href="/sponsors" className="hover:text-[#7C3AED] transition-colors">Sponsors</Link></li>
              <li><Link href="/what-we-offer" className="hover:text-[#7C3AED] transition-colors">What We Offer</Link></li>
              <li><Link href="/faqs" className="hover:text-[#7C3AED] transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                <span>APIIT City Campus,<br/>Union Place, Colombo 02</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#7C3AED] flex-shrink-0" />
                <a href="mailto:entrepreneurship@apiit.lk" className="hover:text-white transition-colors">entrepreneurship@apiit.lk</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} APIIT Entrepreneurship Club. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for Sandbox.</p>
        </div>
      </div>
    </footer>
  );
}
