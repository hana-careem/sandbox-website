"use client";

import Image from 'next/image';

const COLLAGE_IMAGES = [
  '/assets/Site backdrop  (1).jpg',
  '/assets/Site backdrop  (3).jpg',
  '/assets/Site backdrop  (5).jpg',
  '/assets/Site backdrop  (7).jpg',
  '/assets/Site backdrop  (9).jpg',
  '/assets/Site backdrop  (10).jpg',
];

function CollageTile({ src, style = {} }) {
  return (
    <div className="relative overflow-hidden rounded-2xl" style={style}>
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 25vw"
        aria-hidden="true"
      />
      {/* Dark overlay — identical to the hero banner treatment */}
      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950/60" />
    </div>
  );
}

export default function PhotoCollageBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* ── Desktop bento grid (4 cols × 6 rows) ── */}
      <div
        className="hidden md:grid gap-3 p-4 w-full h-full"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(6, 1fr)',
        }}
      >
        {/* Large top-left (2×2) */}
        <CollageTile src={COLLAGE_IMAGES[0]} style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }} />
        {/* gap at col3 row1 — pink shows */}
        {/* Small top-right */}
        <CollageTile src={COLLAGE_IMAGES[1]} style={{ gridColumn: '4 / 5', gridRow: '1 / 2' }} />
        {/* Tall middle */}
        <CollageTile src={COLLAGE_IMAGES[2]} style={{ gridColumn: '3 / 4', gridRow: '2 / 4' }} />
        {/* Tall center-left */}
        <CollageTile src={COLLAGE_IMAGES[3]} style={{ gridColumn: '2 / 3', gridRow: '3 / 5' }} />
        {/* Wide bottom-left */}
        <CollageTile src={COLLAGE_IMAGES[4]} style={{ gridColumn: '1 / 3', gridRow: '5 / 6' }} />
        {/* Tall bottom-right */}
        <CollageTile src={COLLAGE_IMAGES[5]} style={{ gridColumn: '4 / 5', gridRow: '4 / 6' }} />
      </div>

      {/* ── Mobile 2-column stacked grid ── */}
      <div
        className="md:hidden grid gap-2 p-3 w-full h-full"
        style={{
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(8, 1fr)',
        }}
      >
        {/* Photo, gap, gap, photo — checkerboard rhythm */}
        <CollageTile src={COLLAGE_IMAGES[0]} style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }} />
        {/* gap col2 rows 1-2: pink gradient shows through */}
        <CollageTile src={COLLAGE_IMAGES[1]} style={{ gridColumn: '2 / 3', gridRow: '2 / 3' }} />
        {/* gap col1 row 3 */}
        <CollageTile src={COLLAGE_IMAGES[2]} style={{ gridColumn: '2 / 3', gridRow: '3 / 5' }} />
        <CollageTile src={COLLAGE_IMAGES[3]} style={{ gridColumn: '1 / 2', gridRow: '4 / 5' }} />
        {/* gap row 5 */}
        <CollageTile src={COLLAGE_IMAGES[4]} style={{ gridColumn: '1 / 3', gridRow: '6 / 7' }} />
        <CollageTile src={COLLAGE_IMAGES[5]} style={{ gridColumn: '1 / 3', gridRow: '7 / 8' }} />
      </div>
    </div>
  );
}
