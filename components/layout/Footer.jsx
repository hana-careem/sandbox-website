"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const LI_WEB_URL = "https://www.linkedin.com/in/entrepreneurship-club-of-apiit-788313287";
const LI_APP_URL = "linkedin://in/entrepreneurship-club-of-apiit-788313287";

export default function Footer() {
  const handleDeepLink = (e, appUrl, webUrl) => {
    e.preventDefault();
    const now = Date.now();
    window.location.href = appUrl;
    setTimeout(() => {
      if (Date.now() - now < 1500) {
        window.open(webUrl, '_blank', 'noopener,noreferrer');
      }
    }, 1000);
  };

  const handleLinkedIn = (e) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return;
    e.preventDefault();
    window.location.href = LI_APP_URL;
    const timer = setTimeout(() => {
      window.open(LI_WEB_URL, '_blank', 'noopener,noreferrer');
    }, 800);
    const cancel = () => {
      clearTimeout(timer);
      window.removeEventListener('pagehide', cancel);
      document.removeEventListener('visibilitychange', cancel);
    };
    window.addEventListener('pagehide', cancel, { once: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancel();
    }, { once: true });
  };

  return (
    <footer className="bg-slate-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* ── Brand column: Club logo leads, APIIT secondary ── */}
          <div className="space-y-5 md:col-span-2">
            {/* Primary: E-Club logo */}
            <Link href="/" aria-label="Entrepreneurship Club of APIIT, Home">
              <Image
                src="/assets/eclub-logo.png"
                alt="Entrepreneurship Club of APIIT"
                width={270}
                height={75}
                className="h-[72px] w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm">The inter-school business pitching competition.</p>

            {/* Secondary: APIIT institutional backing */}
            <div className="flex items-center gap-5 pt-1">
              <span className="text-xs text-slate-400 shrink-0">An initiative of</span>
              {/* brightness-0 invert renders the logo white on our dark background */}
              <Image
                src="/assets/apiit-logo.png"
                alt="APIIT"
                width={120}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="text-slate-500 text-xs max-w-sm leading-relaxed">
              Sri Lanka's first and largest inter-school business pitching competition, run by the APIIT Entrepreneurship Club in partnership with the Ministry of Education.
            </p>

            {/* Social icons */}
            <div className="flex space-x-4 pt-1">
              <button
                onClick={(e) => handleDeepLink(e, 'instagram://user?username=sandbox.lk', 'https://www.instagram.com/sandbox.lk')}
                className="text-slate-400 hover:text-[#7C3AED] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </button>
              <button
                onClick={(e) => handleDeepLink(e, 'fb://facewebmodal/f?href=https://web.facebook.com/profile.php?id=61591366320255', 'https://web.facebook.com/profile.php?id=61591366320255')}
                className="text-slate-400 hover:text-[#7C3AED] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </button>
              <a
                href={LI_WEB_URL}
                aria-label="LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
                onClick={handleLinkedIn}
                className="text-slate-400 hover:text-[#7C3AED] transition-colors"
              >
                <Linkedin size={22} />
              </a>
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
                <span>Entrepreneurship Club, Asia Pacific Institute of Information Technology,<br/>No. 388 Union Place, Colombo 02, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#7C3AED] flex-shrink-0" />
                <a href="mailto:eclub@apiit.lk" className="hover:text-white transition-colors">eclub@apiit.lk</a>
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
