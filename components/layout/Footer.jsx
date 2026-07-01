import React from 'react';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display tracking-tighter text-white">SANDBOX</h3>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Sri Lanka's first and largest inter-school business pitching competition, empowering the next generation of student entrepreneurs.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-[#38BDF8] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#38BDF8] transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-[#38BDF8] transition-colors">Meet the Team</Link></li>
              <li><Link href="/editions" className="hover:text-[#38BDF8] transition-colors">Past Editions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
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
