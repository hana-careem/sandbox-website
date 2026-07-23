"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

// lucide-react ships no TikTok brand icon — inline SVG glyph, currentColor so
// it inherits the same hover colour as every other icon in the social row.
function TikTokIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.79a4.86 4.86 0 0 1-1.02-.1z" />
    </svg>
  );
}

const LI_WEB_URL = "https://www.linkedin.com/in/entrepreneurship-club-of-apiit-788313287";
const LI_APP_URL = "linkedin://in/entrepreneurship-club-of-apiit-788313287";
const ADDRESS = 'Asia Pacific Institute of Information Technology, No. 388 Union Place, Colombo 02, Sri Lanka';

export default function Footer() {
  const handleAddressClick = (e) => {
    e.preventDefault();
    const q = encodeURIComponent(ADDRESS);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const url = isIOS
      ? `https://maps.apple.com/?q=${q}`
      : `https://www.google.com/maps/search/?api=1&query=${q}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* ── Brand column: APIIT logo leads, E-Club secondary ── */}
          <div className="space-y-5 md:col-span-2">
            {/* Primary: APIIT logo (now top) */}
            <Link href="/" aria-label="APIIT, Home">
              <Image
                src="/assets/apiit-logo.png"
                alt="APIIT"
                width={270}
                height={75}
                className="h-[72px] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm">The inter-school business pitching competition.</p>

            {/* Secondary: E-Club in "An initiative of" slot */}
            <div className="flex items-center gap-5 pt-1">
              <span className="text-xs text-slate-400 shrink-0">An initiative of</span>
              <Image
                src="/assets/eclub-logo.png"
                alt="APIIT Entrepreneurship Club"
                width={160}
                height={53}
                className="h-14 w-auto object-contain"
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
              <a
                href="https://www.tiktok.com/@sandbox.lk"
                aria-label="Sandbox on TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#7C3AED] transition-colors"
              >
                <TikTokIcon size={22} />
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
                <a href="#" onClick={handleAddressClick} className="hover:text-white transition-colors cursor-pointer">Entrepreneurship Club, Asia Pacific Institute of Information Technology,<br/>No. 388 Union Place, Colombo 02, Sri Lanka</a>
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
