"use client";
import React from 'react';

// Import all 23 site-backdrop images from public/assets/
import backdrop1 from '../../public/assets/Site backdrop  (1).jpeg';
import backdrop2 from '../../public/assets/Site backdrop  (2).jpeg';
import backdrop3 from '../../public/assets/Site backdrop  (3).jpeg';
import backdrop4 from '../../public/assets/Site backdrop  (4).jpeg';
import backdrop5 from '../../public/assets/Site backdrop  (5).jpeg';
import backdrop6 from '../../public/assets/Site backdrop  (6).jpeg';
import backdrop7 from '../../public/assets/Site backdrop  (7).jpeg';
import backdrop8 from '../../public/assets/Site backdrop  (8).jpeg';
import backdrop9 from '../../public/assets/Site backdrop  (9).jpeg';
import backdrop10 from '../../public/assets/Site backdrop  (10).jpeg';
import backdrop11 from '../../public/assets/Site backdrop  (11).jpeg';
import backdrop12 from '../../public/assets/Site backdrop  (12).jpeg';
import backdrop13 from '../../public/assets/Site backdrop  (13).jpeg';
import backdrop14 from '../../public/assets/Site backdrop  (1).jpg';
import backdrop15 from '../../public/assets/Site backdrop  (2).jpg';
import backdrop16 from '../../public/assets/Site backdrop  (3).jpg';
import backdrop17 from '../../public/assets/Site backdrop  (4).jpg';
import backdrop18 from '../../public/assets/Site backdrop  (5).jpg';
import backdrop19 from '../../public/assets/Site backdrop  (6).jpg';
import backdrop20 from '../../public/assets/Site backdrop  (7).jpg';
import backdrop21 from '../../public/assets/Site backdrop  (8).jpg';
import backdrop22 from '../../public/assets/Site backdrop  (9).jpg';
import backdrop23 from '../../public/assets/Site backdrop  (10).jpg';

const photos = [
  backdrop1, backdrop2, backdrop3, backdrop4, backdrop5, backdrop6,
  backdrop7, backdrop8, backdrop9, backdrop10, backdrop11, backdrop12,
  backdrop13, backdrop14, backdrop15, backdrop16, backdrop17, backdrop18,
  backdrop19, backdrop20, backdrop21, backdrop22, backdrop23,
];

export default function PhotoCollageBackground({ children }) {
  // Build a long repeating list of photos to fill the full band height.
  // 10 repeats × 23 photos = 230 tiles. At 3 per row ≈ 77 rows — plenty of coverage.
  const tiles = Array.from({ length: photos.length * 10 }, (_, i) => photos[i % photos.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* ── Collage backdrop ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Tight 3-column grid of square/portrait tiles, small even gaps, no blanks */}
        <div className="grid h-full w-full grid-cols-2 gap-[3px] md:grid-cols-3 md:gap-[4px]">
          {tiles.map((img, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden">
              <img
                src={img.src || img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Dark overlay — reduced to ~42% so photos are clearly visible */}
        <div className="absolute inset-0 bg-[#0d0d12]/[0.42]" />
      </div>

      {/* ── Top fade: blend collage into hero above ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 md:h-48"
        style={{
          background: 'linear-gradient(to bottom, #0d0d12 0%, transparent 100%)',
        }}
      />

      {/* ── Bottom fade: collage fades to solid navy footer colour ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 md:h-64"
        style={{
          background: 'linear-gradient(to top, #0a0a1a 0%, transparent 100%)',
        }}
      />

      {/* ── Content sections rendered on top of the collage ── */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
