"use client";

import { useState } from 'react'
import { Linkedin, RotateCcw } from 'lucide-react'

const FACE_STYLE = {
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
}

export default function TeamFlipCard({ member }) {
  const [flipped, setFlipped] = useState(false)
  const { name, role, image, linkedin, education } = member

  const toggle = () => {
    setFlipped(!flipped)
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
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${name}, ${role}. ${flipped ? 'Hide' : 'Show'} background`}
        onClick={toggle}
        onKeyDown={onKey}
        className={`relative aspect-[3/5] md:aspect-[3/4] w-full cursor-pointer rounded-2xl outline-none
                   focus-visible:ring-2 focus-visible:ring-[#7C3AED] transition-transform duration-300 ${
                     flipped ? '[transform:rotateY(180deg)]' : ''
                   }`}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        }}
      >
        {/* ---------- FRONT ---------- */}
        <div
          style={FACE_STYLE}
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl
                     border border-white/10 bg-white/[0.05] backdrop-blur-md"
        >
          <div className="relative flex-1 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: member.objectPosition || '50% 20%' }}
            />
            {/* bottom fade so the caption band reads cleanly — hidden on mobile to avoid covering faces */}
            <div className="hidden md:block absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#2a1130] to-transparent" />
          </div>

          {/* On mobile the caption is a fixed-height flex column: name + role stay
              top-aligned (so every card's name starts at the same level across the
              row, role directly underneath — no gap) and the LinkedIn link is pushed
              to the bottom with mt-auto, so links line up along the card's base. The
              leftover space sits between the role and the link. Desktop stays natural. */}
          <div className="flex flex-col px-4 pt-1 pb-4 min-h-[7.25rem] md:min-h-0">
            <p className="font-['Space_Grotesk'] text-base font-medium text-white">{name}</p>
            <p className="text-sm text-white/55">{role}</p>
            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${name} on LinkedIn`}
                className="mt-auto md:mt-2 inline-flex items-center gap-1.5 text-xs text-[#14f2db]
                           transition-colors hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            ) : (
              <span className="mt-auto md:mt-2 block h-[18px]" aria-hidden="true" />
            )}
          </div>

        </div>

        {/* ---------- BACK: concise background ---------- */}
        <div
          style={{ ...FACE_STYLE, transform: 'rotateY(180deg)' }}
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border
                     border-[#7C3AED]/40 bg-[#1a1526] p-5"
        >
          <p className="font-['Space_Grotesk'] text-base font-medium text-white">{name}</p>
          <p className="text-sm text-[#FF4D6D]">{role}</p>
          {education && <p className="mb-3 text-xs text-[#14f2db]/80">{education}</p>}
          {!education && <div className="mb-3" />}

          <div className="flex-1" />

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
