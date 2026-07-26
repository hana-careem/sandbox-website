'use client'

// PastSponsorsMarquee.jsx
// Drop into: src/components/PastSponsorsMarquee.jsx  (Next.js App Router — client component)
//
// "Past Sponsors / Past Partners" band. Logos are split into rows that scroll in
// ALTERNATING directions: row 1 → right, row 2 → left, row 3 → right, and so on.
// Continuous, seamless loop (each row's content is duplicated so there's no gap).

import { useMemo } from 'react'

function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

function Logo({ s }) {
  return (
    <div className="mx-4 flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5">
      {s.logo ? (
        <img
          src={typeof s.logo === 'string' ? s.logo : s.logo?.src}
          alt={s.name}
          className="max-h-9 w-auto object-contain opacity-80"
        />
      ) : (
        <span className="whitespace-nowrap text-sm font-semibold text-white/50">{s.name}</span>
      )}
    </div>
  )
}

function Row({ items, reverse, duration }) {
  // Duplicate the row so the loop is seamless (translateX(-50%) lands on a copy).
  const doubled = [...items, ...items]
  return (
    <div className="group relative flex overflow-hidden">
      <div
        className="flex w-max animate-sbx-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {doubled.map((s, i) => (
          <Logo key={i} s={s} />
        ))}
      </div>
    </div>
  )
}

export default function PastSponsorsMarquee({
  sponsors = [],
  perRow = 4,
  baseDuration = 28, // seconds for one full loop; wider rows read best a touch slower
}) {
  const rows = useMemo(() => chunk(sponsors, perRow), [sponsors, perRow])

  if (rows.length === 0) return null

  return (
    <section className="w-full py-12" aria-label="Past sponsors">
      {/* Scoped keyframes — no global CSS file, no new dependency. */}
      <style>{`
        @keyframes sbx-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-sbx-marquee {
          animation-name: sbx-marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div className="flex flex-col gap-4">
        {rows.map((items, r) => (
          <Row
            key={r}
            items={items}
            reverse={r % 2 === 1} /* row 0 → left-moving (normal), row 1 → right, alternating */
            duration={baseDuration + r * 4}
          />
        ))}
      </div>
    </section>
  )
}
