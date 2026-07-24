"use client";
import React, { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import Lightbox from '../ui/Lightbox';
import { Trophy } from 'lucide-react';

export default function EditionGallery({ edition }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // TODO: Add real data based on edition
  const editionData = {
    '3.0': {
      winner: "Team Alpha (Royal College)",
      stats: { schools: 150, teams: 450, pool: "Rs. 500k" },
      images: [
        { src: '/assets/placeholder.jpg', caption: 'Winning Pitch' },
        { src: '/assets/placeholder.jpg', caption: 'Judges Panel' },
        { src: '/assets/placeholder.jpg', caption: 'Crowd Reaction' },
        { src: '/assets/placeholder.jpg', caption: 'Award Ceremony' },
      ]
    },
    '2.0': {
      winner: "Team Beta (Visakha Vidyalaya)",
      stats: { schools: 80, teams: 250, pool: "Rs. 300k" },
      images: [
        { src: '/assets/placeholder.jpg', caption: 'Winning Pitch' },
        { src: '/assets/placeholder.jpg', caption: 'Judges Panel' },
        { src: '/assets/placeholder.jpg', caption: 'Crowd Reaction' },
      ]
    },
    '1.0': {
      winner: "Team Gamma (Ananda College)",
      stats: { schools: 50, teams: 150, pool: "Rs. 150k" },
      images: [
        { src: '/assets/placeholder.jpg', caption: 'Winning Pitch' },
        { src: '/assets/placeholder.jpg', caption: 'Judges Panel' },
      ]
    }
  };

  const data = editionData[edition];

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-slate-400 uppercase tracking-widest text-sm font-semibold mb-2">Grand Champion</h3>
          <div className="flex items-center gap-4">
            <Trophy size={32} className="text-[#FF4D6D]" />
            <span className="text-2xl md:text-4xl font-black font-display text-white">{data.winner}</span>
          </div>
        </div>
        <div className="flex gap-8 md:gap-16 text-center md:text-left divide-x divide-slate-800">
          <div className="pl-4">
            <div className="text-3xl font-bold text-[#38BDF8]">{data.stats.schools}</div>
            <div className="text-slate-400 text-sm">Schools</div>
          </div>
          <div className="pl-8">
            <div className="text-3xl font-bold text-[#a64d79]">{data.stats.teams}</div>
            <div className="text-slate-400 text-sm">Teams</div>
          </div>
          <div className="pl-8">
            <div className="text-3xl font-bold text-[#FF4D6D]">{data.stats.pool}</div>
            <div className="text-slate-400 text-sm">Prize Pool</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {data.images.map((img, idx) => (
          <ScrollReveal key={`${edition}-${idx}`} delay={idx * 100}>
            <div 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group bg-slate-800 border border-white/5"
              onClick={() => openLightbox(idx)}
            >
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 z-0">
                [Image]
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <span className="text-white font-medium">{img.caption}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <Lightbox 
        images={data.images}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNext={() => setCurrentIndex((currentIndex + 1) % data.images.length)}
        onPrev={() => setCurrentIndex((currentIndex - 1 + data.images.length) % data.images.length)}
      />
    </div>
  );
}
