"use client";
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="pt-40 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black font-display text-white tracking-tighter mb-6">
              CONTACT <span className="text-[#7C3AED]">US</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have questions about Sandbox? Want to partner with us? Reach out and our team will get back to you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 h-full">
              <h3 className="text-2xl font-bold text-white mb-8 font-display">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Location</h4>
                    <p className="text-slate-400">APIIT City Campus,<br/>Union Place, Colombo 02</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <a href="mailto:entrepreneurship@apiit.lk" className="text-slate-400 hover:text-white transition-colors">
                      entrepreneurship@apiit.lk
                    </a>
                  </div>
                </div>

                {/* TODO: Add real phone numbers */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-slate-400">TODO: Phone Number 1</p>
                    <p className="text-slate-400">TODO: Phone Number 2</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={200}>
            <form className="bg-slate-900 p-8 rounded-3xl border border-white/5 shadow-2xl h-full">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button 
                  type="button"
                  className="w-full py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold transition-colors"
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
