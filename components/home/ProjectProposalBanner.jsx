"use client";
import React from 'react';

/* ──────────────────────────────────────────────────────────────────────────────
 * PROJECT_PROPOSAL_URL — drop in the real link here.
 * Both buttons point here for now; if the secondary should be a direct PDF,
 * just change the href on the Download button and add `download`.
 * ──────────────────────────────────────────────────────────────────────────── */
export const PROJECT_PROPOSAL_URL = "#project-proposal";

export default function ProjectProposalBanner() {
  return (
    <section
      id="project-proposal-banner"
      className="relative z-10 bg-transparent py-[clamp(60px,10vw,100px)]"
    >
      <div className="container max-w-5xl mx-auto px-4">

        {/* ── Glass card ── */}
        <div className="proposal-card">

          {/* Pink sheen overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[inherit] pointer-events-none"
            style={{
              background:
                'linear-gradient(115deg, rgba(255,255,255,0.10) 0%, transparent 32%, transparent 68%, rgba(230,0,126,0.10) 100%)',
            }}
          />

          {/* Left — text */}
          <div className="proposal-text">
            <h2 className="font-poppins font-bold text-[clamp(1.3rem,2.6vw,1.7rem)] tracking-[-0.01em] text-white mb-1.5 leading-tight">
              Project Proposal
            </h2>
            <p className="text-purple-200/80 text-[1rem] leading-[1.55] max-w-[52ch] m-0">
              Everything you need to know about Sandbox, The vision, format, and impact.
              Read the full proposal before your team registers.
            </p>
          </div>

          {/* Right — actions */}
          <div className="proposal-actions">
            {/* Primary CTA */}
            <a
              href={PROJECT_PROPOSAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="proposal-btn-primary group"
            >
              {/* Document icon */}
              <svg
                aria-hidden="true"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              View the Project Proposal
            </a>

            {/* Secondary — ghost glass */}
            <a
              href={PROJECT_PROPOSAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="proposal-btn-secondary group"
            >
              {/* Download icon */}
              <svg
                aria-hidden="true"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .proposal-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 34px clamp(24px, 4vw, 44px);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.07);
          -webkit-backdrop-filter: blur(14px);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow:
            0 24px 60px -24px rgba(0, 0, 0, 0.55),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
        }

        .proposal-text {
          flex: 1 1 auto;
          min-width: 0;
        }

        .proposal-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        /* ── Primary button (pink gradient CTA) ── */
        .proposal-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 26px;
          border-radius: 999px;
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          font-size: 0.92rem;
          color: #fff;
          white-space: nowrap;
          text-decoration: none;
          background: linear-gradient(135deg, #ff1e93, #e6007e);
          box-shadow: 0 8px 26px -10px #e6007e;
          transition:
            transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.25s ease;
        }
        .proposal-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px -10px #e6007e;
        }
        .proposal-btn-primary:focus-visible {
          outline: 2px solid #ff1e93;
          outline-offset: 3px;
        }

        /* ── Secondary button (glass ghost) ── */
        .proposal-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 26px;
          border-radius: 999px;
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          font-size: 0.92rem;
          color: #e2d5f0;
          white-space: nowrap;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.22);
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
          transition:
            transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.25s ease,
            border-color 0.25s ease;
        }
        .proposal-btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(255, 255, 255, 0.35);
        }
        .proposal-btn-secondary:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: 3px;
        }

        /* ── Responsive ≤720px ── */
        @media (max-width: 720px) {
          .proposal-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
            padding: 28px 24px;
            -webkit-backdrop-filter: blur(6px);
            backdrop-filter: blur(6px);
            background: rgba(21, 10, 27, 0.85);
          }
          .proposal-actions {
            flex-direction: column;
            width: 100%;
          }
          .proposal-btn-primary,
          .proposal-btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .proposal-btn-primary,
          .proposal-btn-secondary {
            transition: none !important;
          }
          .proposal-btn-primary:hover,
          .proposal-btn-secondary:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
