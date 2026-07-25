"use client";

import { useState } from 'react'
import TeamFlipCard from './TeamFlipCard'
import { TEAM, CATEGORIES } from '../../data/teamData'

export default function MeetTheTeamSection() {
  const [active, setActive] = useState('all')

  const members = active === 'all' ? TEAM : TEAM.filter((m) => m.category === active)

  return (
    <section className="relative bg-black px-4 py-16 w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Soft edge blends — no sharp boundaries with adjacent sections */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2E1065]/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#7C3AED]/5 to-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#3c1c33]/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* ---------- headline ---------- */}
      <header className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm md:text-base uppercase tracking-[0.2em] text-[#14f2db]">
          The people behind Sandbox
        </p>
        <h1 className="font-coolvetica text-4xl font-normal leading-tight text-white md:text-5xl">
          Meet the team that makes
          <br />
          the <em className="italic text-[#a64d79]">magic</em> happen
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/55 md:text-base">
          The student board organising Sri Lanka&rsquo;s flagship inter-school business
          pitching competition. Tap a card to see their background.
        </p>
      </header>

      {/* ---------- filter tabs ---------- */}
      <nav
        aria-label="Filter team by department"
        className="relative z-10 mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2"
      >
        {CATEGORIES.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActive(id)}
            aria-pressed={active === id}
            className={
              'rounded-full px-4 py-1.5 text-sm transition-colors ' +
              (active === id
                ? 'bg-white text-[#0d0d12]'
                : 'text-white/55 hover:bg-white/5 hover:text-white')
            }
          >
            {label}
          </button>
        ))}
      </nav>

      {/* ---------- grid ---------- */}
      <div
        aria-label="Team members"
        className="relative z-10 mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
      >
        {members.map((m) => (
          <TeamFlipCard key={m.name + m.role} member={m} />
        ))}
      </div>

      {members.length === 0 && (
        <p className="mt-16 text-center text-sm text-white/40">
          No members in this team yet.
        </p>
      )}
    </section>
  )
}
