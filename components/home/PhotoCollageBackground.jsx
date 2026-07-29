"use client";
import React from 'react';

// All 23 site-backdrop images from assets/
const collageImages = [
  '/assets/Site backdrop  (1).jpeg',
  '/assets/Site backdrop  (2).jpeg',
  '/assets/Site backdrop  (3).jpeg',
  '/assets/Site backdrop  (4).jpeg',
  '/assets/Site backdrop  (5).jpeg',
  '/assets/Site backdrop  (6).jpeg',
  '/assets/Site backdrop  (7).jpeg',
  '/assets/Site backdrop  (8).jpeg',
  '/assets/Site backdrop  (9).jpeg',
  '/assets/Site backdrop  (10).jpeg',
  '/assets/Site backdrop  (11).jpeg',
  '/assets/Site backdrop  (12).jpeg',
  '/assets/Site backdrop  (13).jpeg',
  '/assets/Site backdrop  (1).jpg',
  '/assets/Site backdrop  (2).jpg',
  '/assets/Site backdrop  (3).jpg',
  '/assets/Site backdrop  (4).jpg',
  '/assets/Site backdrop  (5).jpg',
  '/assets/Site backdrop  (6).jpg',
  '/assets/Site backdrop  (7).jpg',
  '/assets/Site backdrop  (8).jpg',
  '/assets/Site backdrop  (9).jpg',
  '/assets/Site backdrop  (10).jpg',
];

export default function PhotoCollageBackground({ children }) {
  // Repeat the full set of images enough times to fill a tall content band
  // 23 images × 4 repeats = 92 tiles — plenty to cover the height
  const repeatedImages = Array.from({ length: collageImages.length * 4 }, (_, i) => collageImages[i % collageImages.length]);

  return (
    <div className="relative w-full overflow-hidden">

      {/* Collage backdrop layer — absolute, behind all content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        style={{
          // Subtle vignette: fades to transparent at outer edges/corners
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 90% at 50% 50%, #000 70%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 85% 90% at 50% 50%, #000 70%, transparent 100%)',
        }}
      >
        {/* Even grid of equal-sized tiles, ~3 cols mobile / 4 cols desktop */}
        <div className="grid h-full w-full grid-cols-3 gap-3 md:grid-cols-4 md:gap-4">
          {repeatedImages.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <img
                src={src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Dark overlay for text/card legibility */}
        <div className="absolute inset-0 bg-[#0d0d12]/75" />
      </div>

      {/* Content sits on top of the collage */}
      <div className="relative z-20 w-full">
        {children}
      </div>
    </div>
  );
}
