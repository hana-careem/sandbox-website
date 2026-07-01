"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';
import Lightbox from '../ui/Lightbox';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // TODO: Add real gallery images
  const images = [
    { src: '/assets/placeholder.jpg', alt: 'Sandbox 2.0 Finale', caption: 'Sandbox 2.0 Grand Finale' },
    { src: '/assets/placeholder.jpg', alt: 'Mentorship Session', caption: 'One-on-one mentorship session' },
    { src: '/assets/placeholder.jpg', alt: 'Winning Team', caption: 'The reigning champions' },
    { src: '/assets/placeholder.jpg', alt: 'Judges Panel', caption: 'Our esteemed panel of judges' },
  ];

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  return (
    <section className="py-24 bg-slate-950">
      <div className="container max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-4">A Glimpse Inside</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Experience the energy and innovation from past Sandbox editions.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div 
                className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(idx)}
              >
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500 z-0">
                  [Placeholder]
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.caption}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Lightbox 
        images={images}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNext={() => setCurrentIndex((currentIndex + 1) % images.length)}
        onPrev={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
      />
    </section>
  );
}
