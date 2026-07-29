"use client";
import React, { useLayoutEffect, useRef, useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Rocket } from 'lucide-react';

const MILESTONES = [
  {
    date: '7th of July',
    title: 'Registrations Open',
    desc: 'Schools nationwide can now sign up their teams for this year\'s Sandbox.',
  },
  {
    date: '11th of September',
    title: 'Registrations Close',
    desc: 'Last call for teams to lock in their spot before the competition kicks off.',
  },
  {
    date: '4th week of September',
    title: 'Workshops',
    desc: 'Engaging and interactive workshops held in Colombo, Kandy, and Galle to aid participants in their preparation.',
  },
  {
    date: '2nd Week of October',
    title: 'Preliminaries',
    desc: 'Teams pitch their ideas as the competition kicks into gear.',
  },
  {
    date: '4th Week of October',
    title: 'Semi-Finals',
    desc: 'The strongest teams battle it out for a place in the grand finale.',
  },
  {
    date: 'November 23rd',
    title: 'Grand Finals',
    desc: 'The top teams face off live for the title and the prize pool.',
  },
];

// The first 4 milestones sit on the photo collage (transparent bg).
// The last 2 sit on the original pink bg.
const SPLIT_INDEX = 4;

export default function Timeline() {
  const containerRef = useRef(null);
  const dotRefs = useRef([]);
  const lowerBgRef = useRef(null);
  const [pathD, setPathD] = useState('');
  const [viewBox, setViewBox] = useState('0 0 0 0');
  const [rocketPos, setRocketPos] = useState(null);
  const [lowerTop, setLowerTop] = useState(null);

  useLayoutEffect(() => {
    const getRelativeOffset = (el, ancestor) => {
      let top = 0;
      let left = 0;
      let node = el;
      while (node && node !== ancestor) {
        top += node.offsetTop;
        left += node.offsetLeft;
        node = node.offsetParent;
      }
      return { top, left };
    };

    const recalculate = () => {
      const container = containerRef.current;
      const dots = dotRefs.current.filter(Boolean);
      if (!container || dots.length === 0) return;

      const isMobile = window.innerWidth < 768;
      const points = dots.map((el) => {
        const { top, left } = getRelativeOffset(el, container);
        return {
          x: left,
          y: isMobile ? top + el.offsetHeight / 2 : top,
        };
      });

      const anchorX = points[0].x;
      const tailLength = isMobile ? 85 : 135;
      const tailY = Math.max(points[0].y - tailLength, 0);

      let d = `M ${anchorX} ${tailY} L ${anchorX} ${points[0].y}`;

      for (let i = 1; i < points.length; i++) {
        d += ` L ${anchorX} ${points[i].y}`;
      }

      setPathD(d);
      setViewBox(`0 0 ${container.clientWidth} ${container.scrollHeight}`);
      setRocketPos({ x: anchorX, y: tailY });

      // Calculate where the lower pink background should start
      // We put the split midway between Preliminaries (idx 3) and Semi-Finals (idx 4)
      if (dots[SPLIT_INDEX]) {
        const splitDot = dots[SPLIT_INDEX];
        const { top: splitTop } = getRelativeOffset(splitDot, container);
        // Start the pink bg a bit above the Semi-Finals dot
        const offset = isMobile ? 60 : 40;
        setLowerTop(splitTop - offset);
      }
    };

    recalculate();

    const resizeObserver = new ResizeObserver(() => recalculate());
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    window.addEventListener('resize', recalculate);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', recalculate);
    };
  }, []);

  return (
    <section className="relative pt-10 pb-24 overflow-hidden">
      {/* ── Lower pink bg (Semi-Finals + Grand Finals zone only) ── */}
      {lowerTop !== null && (
        <div
          ref={lowerBgRef}
          data-sticky-bar="light"
          className="absolute left-0 right-0 bottom-0 bg-[#EBD7E6] z-0"
          style={{ top: lowerTop }}
        >
          {/* Smooth gradient transition from transparent/dark to pink */}
          <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#EBD7E6]" />
        </div>
      )}

      {/* Decorative background rockets — only visible in the pink lower zone */}
      <Rocket
        size={180}
        className="absolute bottom-0 -right-10 text-[#FF4D6D]/5 -rotate-12 pointer-events-none select-none z-0"
      />
      <Rocket
        size={160}
        className="absolute top-2/3 right-4 md:right-1/3 text-[#D4537E]/[0.06] rotate-[15deg] pointer-events-none select-none z-0"
      />
      <Rocket
        size={130}
        className="absolute bottom-16 left-10 md:left-1/4 text-[#D4537E]/[0.06] -rotate-[35deg] pointer-events-none select-none z-0"
      />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <Rocket size={22} className="text-[#F3EEFB] rotate-45" />
              <span className="text-sm font-bold tracking-widest text-[#F3EEFB] uppercase">The Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-coolvetica font-normal text-white mb-4">Road to the Finals</h2>
            <p className="text-[#C6B9E0] max-w-2xl mx-auto text-lg">Here&apos;s how Sandbox unfolds, from launch to the grand finale.</p>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="relative pt-16">
          {/* Wavy flight-path line, traced through the real dot positions */}
          {pathD && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox={viewBox}
              fill="none"
            >
              <defs>
                <linearGradient id="timeline-flight-path" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4537E" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4537E" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <path
                d={pathD}
                stroke="url(#timeline-flight-path)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}

          {/* Launch rocket riding the line */}
          {rocketPos && (
            <Rocket
              size={26}
              style={{ left: rocketPos.x, top: rocketPos.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 -rotate-45 text-[#D4537E] drop-shadow-[0_0_10px_rgba(212,83,126,0.6)] pointer-events-none"
            />
          )}

          <div>
            {MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isUpper = idx < SPLIT_INDEX;

              // Upper cards (on collage) use translucent dark style
              // Lower cards (on pink) use the original white/pink card style
              const cardBg = isUpper
                ? 'bg-slate-950/40 backdrop-blur-md border-white/10 ring-1 ring-white/5'
                : `${isEven ? 'bg-white' : 'bg-[#FBEEF3]'} ring-1 ring-black/5`;

              const cardShadow = isUpper
                ? 'shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]'
                : 'shadow-[0_8px_24px_rgba(212,83,126,0.10)] hover:shadow-[0_12px_32px_rgba(212,83,126,0.18)]';

              const dateColor = isUpper ? 'text-[#FF8FAB]' : 'text-[#D4537E]';
              const titleColor = isUpper ? 'text-white' : 'text-slate-900';
              const descColor = isUpper ? 'text-slate-300' : 'text-slate-600';

              return (
                <ScrollReveal
                  key={item.title}
                  direction={isEven ? 'right' : 'left'}
                  delay={idx * 120}
                >
                  <div className={`relative flex items-start md:items-center mb-28 md:mb-12 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <span
                      ref={(el) => (dotRefs.current[idx] = el)}
                      className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#D4537E] shadow-[0_0_14px_rgba(212,83,126,0.6)] z-10"
                    />

                    {/* Spacer (desktop only) */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card */}
                    <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className={`relative rounded-2xl p-6 border-t-2 border-[#D4537E] ${cardBg} ${cardShadow} transition-all duration-300 hover:-translate-y-0.5`}>
                        <span className={`inline-block text-xs font-bold tracking-widest ${dateColor} uppercase mb-2`}>{item.date}</span>
                        <h3 className={`text-xl font-bold ${titleColor} mb-2`}>{item.title}</h3>
                        <p className={`${descColor} leading-relaxed`}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
