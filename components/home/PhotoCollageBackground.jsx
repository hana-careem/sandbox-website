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

// Build the mosaic: photo tiles with some intentional blank cells (null) mixed in.
// `null` = an empty cell (dark background shows through), same size as a photo tile.
const collage = [
  photos[0], null,      photos[1], photos[2],
  photos[3], photos[4], null,      photos[5],
  null,      photos[6], photos[7], null,
  photos[8], null,      photos[9], photos[10],
  photos[11], photos[12], null,    photos[13],
  null,      photos[14], photos[15], null,
  photos[16], null,     photos[17], photos[18],
  photos[19], photos[20], null,    photos[21],
  null,      photos[22], photos[0], null,
];

export default function PhotoCollageBackground({ children }) {
  // Repeat the pattern enough times to fill the FULL band height (down to the footer).
  // 6 repeats of 36 items is 216 items. Grid is 4 items wide. 216/4 = 54 rows. That should be plenty.
  const repeatedCollage = Array.from({ length: collage.length * 6 }).map((_, i) => collage[i % collage.length]);

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
        {/* desktop = 3 per row (fewer/larger tiles), mobile = 2 per row, null = intentional blank cell */}
        <div className="grid h-full w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 p-4">
          {repeatedCollage.map((img, i) => (
            img ? (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={img.src || img}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-15 rounded-2xl"
                  loading="lazy"
                  style={{
                    // soft "floating" edges: photo fades out at the rim into the dark bg
                    WebkitMaskImage:
                      'radial-gradient(ellipse 80% 80% at 50% 50%, #000 55%, transparent 100%)',
                    maskImage:
                      'radial-gradient(ellipse 80% 80% at 50% 50%, #000 55%, transparent 100%)',
                  }}
                />
              </div>
            ) : (
              <div key={i} aria-hidden className="relative aspect-[4/3]" />
            )
          ))}
        </div>
        {/* dark overlay so foreground text stays readable */}
        <div className="absolute inset-0 bg-[#0d0d12]/50" />
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
