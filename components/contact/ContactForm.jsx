"use client";
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Mail, MapPin, Phone } from 'lucide-react';

const ADDRESS = 'Asia Pacific Institute of Information Technology, No. 388 Union Place, Colombo 02, Sri Lanka';

export default function ContactForm() {
  const handleAddressClick = (e) => {
    e.preventDefault();
    const q = encodeURIComponent(ADDRESS);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const url = isIOS
      ? `https://maps.apple.com/?q=${q}`
      : `https://www.google.com/maps/search/?api=1&query=${q}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      className="pt-32 pb-24 min-h-screen"
      style={{
        background:
          'radial-gradient(720px 620px at 12% 12%, rgba(122,61,104,0.42) 0%, rgba(122,61,104,0) 60%), radial-gradient(780px 680px at 88% 88%, rgba(168,113,150,0.30) 0%, rgba(168,113,150,0) 60%), linear-gradient(180deg, #2A1523 0%, #3c1c33 50%, #2A1523 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-coolvetica font-normal text-white tracking-normal mb-6">
              CONTACT <span className="text-[#a64d79]">US</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have questions about Sandbox? Want to partner with us? Reach out and our team will get back to you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left" className="min-w-0">
            <div className="bg-[rgba(122,79,176,0.10)] backdrop-blur-sm p-8 rounded-3xl border border-[rgba(183,155,221,0.28)] h-full">
              <h3 className="text-2xl font-bold text-white mb-8 font-display">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#a64d79]/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-6 h-6 text-[#a64d79]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Location</h4>
                    <a href="#" onClick={handleAddressClick} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Entrepreneurship Club, Asia Pacific Institute of Information Technology,<br/>No. 388 Union Place, Colombo 02, Sri Lanka</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#a64d79]/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-6 h-6 text-[#a64d79]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <a href="mailto:Sandbox@apiit.lk" className="text-slate-400 hover:text-white transition-colors">
                      Sandbox@apiit.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#a64d79]/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-6 h-6 text-[#a64d79]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <a href="tel:+94777683333" className="text-slate-400 hover:text-white transition-colors">
                      077 768 3333
                    </a>
                    <p className="text-slate-400 text-base mt-2">Tyanna Franchesca Avory</p>
                    <p className="text-slate-400 text-sm">Secretary</p>
                  </div>
                </div>


              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={200} className="min-w-0">
            <form className="bg-[rgba(122,79,176,0.10)] backdrop-blur-sm p-8 rounded-3xl border border-[rgba(183,155,221,0.28)] shadow-2xl h-full">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[rgba(21,9,16,0.5)] border border-[rgba(183,155,221,0.20)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a64d79] transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[rgba(21,9,16,0.5)] border border-[rgba(183,155,221,0.20)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a64d79] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-[rgba(21,9,16,0.5)] border border-[rgba(183,155,221,0.20)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a64d79] transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button 
                  type="button"
                  className="w-full py-4 rounded-full bg-[#a64d79]/30 backdrop-blur-md border border-white/10 hover:bg-[#a64d79]/40 text-white font-bold transition-all focus:ring-2 focus:ring-[#a64d79]/50 focus:outline-none min-h-[44px] shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
