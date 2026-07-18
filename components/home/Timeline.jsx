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
    date: '7th of September',
    title: 'Registrations Close',
    desc: 'Last call for teams to lock in their spot before the competition kicks off.',
  },
  {
    date: '2nd Week of September',
    title: 'Press Conference',
    desc: 'The official launch — Sandbox is announced to schools and media nationwide.',
  },
  {
    date: '4th week of September',
    title: 'Workshops Begin',
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

export default function Timeline() {
  const containerRef = useRef(null);
  const dotRefs = useRef([]);
  const [pathD, setPathD] = useState('');
  const [viewBox, setViewBox] = useState('0 0 0 0');
  const [rocketPos, setRocketPos] = useState(null);

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
      const tailLength = isMobile ? 50 : 70;
      const tailY = Math.max(points[0].y - tailLength, 0);

      let d = `M ${anchorX} ${tailY} L ${anchorX} ${points[0].y}`;

      for (let i = 1; i < points.length; i++) {
        d += ` L ${anchorX} ${points[i].y}`;
      }

      setPathD(d);
      setViewBox(`0 0 ${container.clientWidth} ${container.scrollHeight}`);
      setRocketPos({ x: anchorX, y: tailY });
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
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Decorative background rockets */}
      <Rocket
        size={220}
        className="absolute -top-10 -left-16 text-[#7C3AED]/5 rotate-45 pointer-events-none select-none"
      />
      <Rocket
        size={180}
        className="absolute bottom-0 -right-10 text-[#FF4D6D]/5 -rotate-12 pointer-events-none select-none"
      />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <Rocket size={22} className="text-[#7C3AED] rotate-45" />
              <span className="text-sm font-bold tracking-widest text-[#7C3AED] uppercase">The Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-coolvetica font-normal text-white mb-4">Road to the Finals</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Here's how Sandbox unfolds, from launch to the grand finale.</p>
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
                  <stop offset="0%" stopColor="#C4B5FD" stopOpacity="1" />
                  <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.5" />
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
              className="absolute -translate-x-1/2 -translate-y-1/2 -rotate-45 text-[#7C3AED] drop-shadow-[0_0_10px_rgba(124,58,237,0.6)] pointer-events-none"
            />
          )}

          <div>
            {MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
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
                      className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#7C3AED] ring-4 ring-slate-950 shadow-[0_0_14px_rgba(124,58,237,0.7)] z-10"
                    />

                    {/* Spacer (desktop only) */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card */}
                    <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                        <span className="inline-block text-xs font-bold tracking-widest text-[#7C3AED] uppercase mb-2">{item.date}</span>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
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
