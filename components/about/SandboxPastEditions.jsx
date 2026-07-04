"use client";

import React, { useState } from "react";
import { Wrench, Users, Trophy, Flag, ChevronDown } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────
// PAGE_INTRO is the one-time framing paragraph for the whole page.
// Every claim below is sourced from sandbox.apiit.lk, eclub.apiit.lk,
// and a Sunday Times (Sri Lanka) report on the 2025 edition.
//
// Per-edition `meta` holds the winning school and cash prize.
// Unfilled fields render a visible TODO tag instead of guessed copy.
const PAGE_INTRO =
  "Held every year in Colombo, Sandbox is Sri Lanka's first-ever inter-school " +
  "business pitching competition, run by the Entrepreneurship Club of APIIT in " +
  "partnership with the Ministry of Education. It launched in September 2024, " +
  "open to government, private, and international schools alike. By its second " +
  "edition in 2025, the competition had grown to 38 participating schools and 50 " +
  "competing teams, with the strongest ideas advancing through a workshop and " +
  "preliminary round to a live grand finale in front of a panel of industry judges.";

const SANDBOX_VERSIONS = [
  {
    id: "2.0",
    year: "2025",
    status: "upcoming",
    meta: {
      winningSchool: "St. Joseph's College, Negombo", // confirmed — Sunday Times, 30 Nov 2025
      prize: null, // cash amount not published — TODO if you have the figure
    },
    stages: [
      {
        name: "Workshop",
        image: "", // TODO: import from ../assets/ once real photo exists
        description:
          "Hands-on sessions across three cities to sharpen ideas before the pitch.",
      },
      {
        name: "Preliminaries",
        image: "", // TODO: import from ../assets/ once real photo exists
        description:
          "Teams pitch to a panel; the strongest ideas advance to the semifinal.",
      },
      {
        name: "Semifinals",
        image: "", // TODO: import from ../assets/ once real photo exists
        description:
          "A tougher panel and a narrower field as teams fight for a final spot.",
      },
      {
        name: "Grand Final",
        image: "", // TODO: import from ../assets/ once real photo exists
        description: "The last teams standing pitch live for the win.",
      },
    ],
  },
  {
    id: "1.0",
    year: "2024",
    status: "completed",
    meta: {
      winningSchool: null, // not found in public sources — TODO, verify with the E-club
      prize: null, // TODO
    },
    stages: [
      {
        name: "Workshop",
        image: "", // TODO: import from ../assets/ once real photo exists
        description: "The very first Sandbox workshop.",
      },
      {
        name: "Preliminary Rounds",
        image: "", // TODO: import from ../assets/ once real photo exists
        description: "Early-stage pitching to a small judging panel.",
      },
      {
        name: "Semifinals",
        image: "", // TODO: import from ../assets/ once real photo exists
        description:
          "A tougher panel and a narrower field as teams fought for a final spot.",
      },
      {
        name: "Finals",
        image: "", // TODO: import from ../assets/ once real photo exists
        description: "The debut Sandbox finale.",
      },
    ],
  },
];

const ICONS_BY_NAME = {
  Workshop: Wrench,
  Preliminaries: Users,
  "Preliminary Rounds": Users,
  Semifinals: Flag,
  Finals: Trophy,
  "Grand Final": Trophy,
};

// ── Small shared bits ─────────────────────────────────────────────────
function TodoTag() {
  return (
    <span className="rounded border border-amber-400/40 bg-amber-400/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-amber-300 align-middle">
      TODO
    </span>
  );
}

function TodoText({ children }) {
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5">
      <span className="italic text-slate-600">{children}</span>
      <TodoTag />
    </span>
  );
}

// Uses a placeholder box when no image is provided.
// TODO: When real photos arrive, set image to an imported asset path, e.g.:
//   import workshopPhoto from '../assets/sandbox-2025-workshop.jpg'
//   then pass it as image={workshopPhoto} in the data above.
function StagePhoto({ image, name }) {
  if (image) {
    return (
      // next/image requires known dimensions or fill — using a plain img here
      // since stage photos are optional/dynamic. Swap to next/image with fill
      // once images are confirmed and dimensions are known.
      <img
        src={image}
        alt={name}
        className="mb-3 h-40 w-full rounded-xl object-cover"
      />
    );
  }
  return (
    <div className="mb-3 flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-800/40">
      <span className="text-xs uppercase tracking-wide text-slate-500">
        Photo placeholder — {name}
      </span>
    </div>
  );
}

// ── Winner announcement ───────────────────────────────────────────────
// One plain-language sentence: which school won and their cash prize.
function WinnerAnnouncement({ meta, editionLabel }) {
  return (
    <div className="mb-10 border-b border-slate-800 pb-8">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
        <Trophy size={14} />
        Winner
      </div>
      <p className="max-w-2xl text-2xl font-bold font-display leading-snug text-white md:text-3xl">
        {meta.winningSchool ? (
          <span className="text-violet-300">{meta.winningSchool}</span>
        ) : (
          <TodoText>winning school</TodoText>
        )}{" "}
        <span className="font-medium text-slate-300">
          won {editionLabel}
          {meta.prize || meta.winningSchool ? ", taking home " : " "}
        </span>
        {meta.prize ? (
          <span className="text-white">{meta.prize}</span>
        ) : (
          <TodoText>cash prize amount</TodoText>
        )}
        {meta.prize && (
          <span className="font-medium text-slate-300"> in cash.</span>
        )}
      </p>
    </div>
  );
}

export default function SandboxPastEditions() {
  const [activeId, setActiveId] = useState("2.0");
  const [openStage, setOpenStage] = useState(0);

  const active = SANDBOX_VERSIONS.find((v) => v.id === activeId);

  function selectVersion(id) {
    setActiveId(id);
    setOpenStage(0); // always land back on stage 1 when switching versions
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white md:px-16">
      {/* Ambient glow, top-left */}
      <div
        className="pointer-events-none fixed left-0 top-0 h-[420px] w-[620px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(124,58,237,0.35), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        {/* ── Page framing ─────────────────────────────────────────── */}
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-400">
          Past Editions
        </p>
        <h1 className="mb-5 text-4xl font-extrabold font-display tracking-tight md:text-5xl">
          Where Sandbox has been.
        </h1>
        <p className="mb-12 max-w-2xl text-base leading-relaxed text-slate-400">
          {PAGE_INTRO}
        </p>

        {/* ── Segmented control ─────────────────────────────────────── */}
        <div className="mb-10 flex flex-wrap gap-3">
          {SANDBOX_VERSIONS.map((v) => {
            const isActive = v.id === activeId;
            return (
              <button
                key={v.id}
                onClick={() => selectVersion(v.id)}
                className={
                  "rounded-full px-6 py-3 text-sm font-bold transition-colors " +
                  (isActive
                    ? "bg-white text-slate-900"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200")
                }
                style={
                  isActive
                    ? { boxShadow: "0 0 24px 2px rgba(255,255,255,0.35)" }
                    : undefined
                }
              >
                Sandbox {v.id}
              </button>
            );
          })}
        </div>

        {/* ── Edition title ──────────────────────────────────────────── */}
        <h2 className="mb-2 text-3xl font-extrabold font-display tracking-tight md:text-4xl">
          Sandbox {active.id}{" "}
          <span className="text-violet-500">({active.year})</span>
        </h2>
        <p className="mb-8 text-slate-400">
          {active.status === "completed"
            ? "Wrapped — here's how it played out."
            : "Here's how it's structured, start to finish."}
        </p>

        {/* ── Winner announcement: school + cash prize ──────────────── */}
        <WinnerAnnouncement
          meta={active.meta}
          editionLabel={`Sandbox ${active.id}`}
        />

        {/* ── Timeline ───────────────────────────────────────────────── */}
        <div className="relative">
          {active.stages.map((stage, i) => {
            const Icon = ICONS_BY_NAME[stage.name] || Users;
            const isOpen = openStage === i;
            const isLast = i === active.stages.length - 1;
            const isDone = active.status === "completed";

            return (
              <div key={stage.name} className="relative flex gap-5">
                {/* connector column */}
                <div className="flex flex-col items-center">
                  <div
                    className={
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-colors " +
                      (isDone
                        ? "border-violet-500 bg-violet-500/20 text-violet-300"
                        : isOpen
                        ? "border-violet-500 bg-violet-500/10 text-violet-300"
                        : "border-slate-700 bg-slate-900 text-slate-500")
                    }
                  >
                    <Icon size={18} />
                  </div>
                  {!isLast && (
                    <div
                      className={
                        "w-px flex-1 " +
                        (isDone ? "bg-violet-500/40" : "bg-slate-800")
                      }
                      style={{ minHeight: 24 }}
                    />
                  )}
                </div>

                {/* stage card */}
                <button
                  onClick={() => setOpenStage(isOpen ? -1 : i)}
                  className={
                    "mb-6 flex-1 rounded-2xl border px-5 py-4 text-left transition-colors " +
                    (isOpen
                      ? "border-violet-500/40 bg-slate-900"
                      : "border-slate-800 bg-slate-900/60 hover:border-slate-700")
                  }
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold">{stage.name}</span>
                    <ChevronDown
                      size={18}
                      className={
                        "shrink-0 text-slate-500 transition-transform " +
                        (isOpen ? "rotate-180" : "")
                      }
                    />
                  </div>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? 320 : 0 }}
                  >
                    <div className="mt-3 border-t border-slate-800 pt-3">
                      <StagePhoto image={stage.image} name={stage.name} />
                      <p className="text-sm text-slate-300">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
