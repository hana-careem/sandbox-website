'use client'

import { useState, useEffect, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Fisher–Yates sample: pick `n` random items from an array (stable for one mount).
function sample(arr, n) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a.slice(0, Math.min(n, a.length))
}

export default function AboutEditionSlideshow({
  images = [],
  label = 'Sandbox',
  count = 8, // show about 8 pics
  interval = 2000, // slide every 2 seconds
}) {
  // Sample once per mount so the set is random but doesn't reshuffle on every render.
  const pics = useMemo(() => sample(images, count), [images, count])
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  // Manual nav via the side arrows (wraps around).
  const go = (dir) => setI((prev) => (prev + dir + pics.length) % pics.length)

  useEffect(() => {
    if (paused || pics.length <= 1) return
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return // respect reduced-motion: hold on the first slide

    const id = setInterval(() => {
      setI((prev) => (prev + 1) % pics.length)
    }, interval)
    return () => clearInterval(id)
  }, [paused, pics.length, interval])

  if (pics.length === 0) {
    // Nothing imported yet — keep the layout from breaking (project placeholder rule).
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/40">
        {label} photos coming soon
      </div>
    )
  }

  return (
    <div
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label={`${label} photo gallery`}
    >
      {pics.map((src, idx) => (
        // Cross-fade + gentle slide. All slides stacked; only the active one is visible.
        <img
          key={idx}
          src={typeof src === 'string' ? src : src?.src /* next/image static import shape */}
          alt={`${label} — photo ${idx + 1}`}
          loading={idx === 0 ? 'eager' : 'lazy'}
          className={
            'absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ' +
            (idx === i
              ? 'translate-x-0 opacity-100'
              : idx === (i - 1 + pics.length) % pics.length
                ? '-translate-x-4 opacity-0'
                : 'translate-x-4 opacity-0')
          }
        />
      ))}

      {/* subtle dark gradient so any caption/label stays legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* side arrows — previous / next */}
      {pics.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/40 text-white/80 backdrop-blur-sm transition hover:bg-black/70 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/40 text-white/80 backdrop-blur-sm transition hover:bg-black/70 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* progress dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {pics.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to photo ${idx + 1}`}
            className={
              'h-1.5 rounded-full transition-all ' +
              (idx === i ? 'w-5 bg-[#38BDF8]' : 'w-1.5 bg-white/40 hover:bg-white/70')
            }
          />
        ))}
      </div>
    </div>
  )
}
