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
  backdrop19, backdrop20, backdrop21, backdrop22, backdrop23
];

// ── Bento patterns (match the wireframes) ───────────────────────────────
// Both grids use a FIXED row height (via grid-auto-rows) so single-row and
// spanning tiles coexist with no aspect-ratio/row-span conflict → no overlap.
//
// DESKTOP (3 cols, block of 11 → 4 rows). 5th tile = square spanning 2 rows,
// centre column:
//   L   L   L        row 1
//   L  BIG  L        rows 2–3 (BIG = row-span-2, centre)
//   L   ·   L
//   L   L   L        row 4
//
// MOBILE (2 cols, block of 10 → 6 rows). 5th tile = tall (row-span-2, left),
// 8th tile = wide (col-span-2):
//   S   S            rows 1–2
//   S   S
//  TALL S            rows 3–4 (TALL = row-span-2, left col)
//   ·   S
//   WIDE  (span 2)   row 5
//   S   S            row 6

// gentle edge fade that keeps each tile mostly square
const TILE_MASK = {
  WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, #000 78%, transparent 100%)',
  maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, #000 78%, transparent 100%)',
};

function CollageTile({ img, span }) {
  return (
    <div className={`relative overflow-hidden rounded-md ${span}`}>
      <img
        src={img.src || img}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30 rounded-md"
        style={TILE_MASK}
      />
    </div>
  );
}

export default function PhotoCollageBackground({ children }) {
  // Desktop: 3-col blocks of 11; the 5th tile spans 2 rows (centre square).
  const desktopTiles = Array.from({ length: 165 }).map((_, i) => ({
    img: photos[i % photos.length],
    span: i % 11 === 4 ? 'row-span-2' : '',
  }));

  // Mobile: 2-col blocks of 10; the 5th tile is tall (row-span-2), the 8th is wide (col-span-2).
  const mobileTiles = Array.from({ length: 110 }).map((_, i) => {
    const m = i % 10;
    return {
      img: photos[i % photos.length],
      span: m === 4 ? 'row-span-2' : m === 7 ? 'col-span-2' : '',
    };
  });

  return (
    <div className="relative w-full overflow-hidden">
      {/* collage backdrop — absolute, behind all content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{
          // subtle edge/corner fade to the dark background
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 90% at 50% 50%, #000 70%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 85% 90% at 50% 50%, #000 70%, transparent 100%)',
        }}
      >
        {/* MOBILE grid — 2 cols; square row height so squares are square, tall = 1:2, wide = 2:1 */}
        <div
          className="grid md:hidden w-full grid-cols-2 gap-3 p-3"
          style={{ gridAutoRows: 'calc((100vw - 2.25rem) / 2)' }}
        >
          {mobileTiles.map((t, i) => (
            <CollageTile key={i} img={t.img} span={t.span} />
          ))}
        </div>

        {/* DESKTOP grid — 3 cols; ½-column row height so single tiles are 2:1, row-span-2 = square */}
        <div
          className="hidden md:grid w-full grid-cols-3 gap-3 p-3"
          style={{ gridAutoRows: 'calc((100vw - 3rem) / 6)' }}
        >
          {desktopTiles.map((t, i) => (
            <CollageTile key={i} img={t.img} span={t.span} />
          ))}
        </div>

        {/* dark overlay so foreground text stays readable */}
        <div className="absolute inset-0 bg-[#0d0d12]/60" />
      </div>

      {/* top fade overlay to blend with hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-gradient-to-t from-transparent to-[#0d0d12] md:h-48"
      />

      {/* ALL sections that sit ON the collage.
          The collage fills this whole wrapper's height. */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
