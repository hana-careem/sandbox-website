"use client";

import { useState, useRef } from 'react'
import { Linkedin, RotateCcw, Sparkles } from 'lucide-react'

const FACE_STYLE = {
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
}

export default function TeamFlipCard({ member }) {
  const [flipped, setFlipped] = useState(false)
  const isAnimating = useRef(false)
  const innerRef = useRef(null)
  const { name, role, image, linkedin, bio } = member

  const toggle = () => {
    if (isAnimating.current) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    const nextFlipped = !flipped
    setFlipped(nextFlipped)

    if (prefersReducedMotion) {
      return
    }

    if (innerRef.current) {
      isAnimating.current = true

      const startRotate = flipped ? 180 : 0
      const endRotate = nextFlipped ? 180 : 0

      const animation = innerRef.current.animate(
        [
          { transform: `rotateY(${startRotate}deg) scale(1)`, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' },
          { transform: `rotateY(${(startRotate + endRotate) / 2}deg) scale(1.07)`, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 20px rgba(124,58,237,0.15)', offset: 0.5 },
          { transform: `rotateY(${endRotate}deg) scale(1)`, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' },
        ],
        { duration: 720, easing: 'cubic-bezier(0.45, 0, 0.2, 1)', fill: 'forwards' }
      )

      animation.onfinish = () => {
        isAnimating.current = false
      }
    }
  }

  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div className="group" style={{ perspective: '1200px' }}>
      <div
        ref={innerRef}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${name}, ${role}. ${flipped ? 'Hide' : 'Show'} background`}
        onClick={toggle}
        onKeyDown={onKey}
        className="relative aspect-[3/4] w-full cursor-pointer rounded-2xl outline-none
                   focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        }}
      >
        {/* ---------- FRONT ---------- */}
        <div
          style={FACE_STYLE}
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl
                     border border-white/10 bg-[#17171d]"
        >
          <div className="relative flex-1 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* bottom fade so the caption band reads cleanly */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#17171d] to-transparent" />
          </div>

          <div className="px-4 pb-4 pt-1">
            <p className="font-['Space_Grotesk'] text-base font-medium text-white">{name}</p>
            <p className="text-sm text-white/55">{role}</p>
            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${name} on LinkedIn`}
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#14f2db]
                           transition-colors hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            ) : (
              <span className="mt-2 block h-[18px]" aria-hidden="true" />
            )}
          </div>

          {/* flip hint */}
          <span
            className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full
                       bg-black/40 text-white/70 backdrop-blur-sm transition-opacity
                       opacity-0 group-hover:opacity-100"
            aria-hidden="true"
          >
            <Sparkles className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* ---------- BACK: concise background ---------- */}
        <div
          style={{ ...FACE_STYLE, transform: 'rotateY(180deg)' }}
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border
                     border-[#7C3AED]/40 bg-[#1a1526] p-5"
        >
          <p className="font-['Space_Grotesk'] text-base font-medium text-white">{name}</p>
          <p className="mb-3 text-sm text-[#FF4D6D]">{role}</p>

          <p className="flex-1 overflow-y-auto text-sm leading-relaxed text-white/70">{bio}</p>

          <div className="mt-4 flex items-center justify-between">
            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${name} on LinkedIn`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15
                           px-3 py-1.5 text-xs text-white/80 transition-colors
                           hover:border-[#38BDF8] hover:text-[#14f2db]"
              >
                <Linkedin className="h-3.5 w-3.5" />
                Connect
              </a>
            ) : (
              <span aria-hidden="true" />
            )}
            <span className="inline-flex items-center gap-1 text-[11px] text-white/40" aria-hidden="true">
              <RotateCcw className="h-3 w-3" />
              tap to flip back
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
