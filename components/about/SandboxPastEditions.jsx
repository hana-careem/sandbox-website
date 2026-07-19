"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Wrench, Users, Flag, Trophy, Target, ChevronUp, ChevronDown, Camera } from "lucide-react";
import PastTeamsSection from "./PastTeamsSection";
import { PAST_TEAMS } from "../../data/teamData";

const editions = {
  "2.0": {
    label: "Sandbox 2.0",
    year: "2025",
    subtitle: "Here's how it's structured, start to finish.",
    winner: {
      school: "St. Joseph's College, Negombo",
      wonText: "won Sandbox 2.0, taking home",
      prize: "cash prize amount",
      prizeTodo: true,
      is2_0: true
    },
    theme: "Community Concerns",
    stages: [
      { title: "Workshop",       icon: "Wrench", desc: "Hands-on sessions across three cities to sharpen ideas before the pitch.", photos: Array(10).fill(null) },
      { title: "Preliminaries",  icon: "Users",  desc: "The top 50 teams face off to determine who advances.", photos: Array(10).fill(null) },
      { title: "Semifinals",     icon: "Flag",   desc: "The competition narrows down to the very best ideas.", photos: Array(10).fill(null) },
      { title: "Grand Final",    icon: "Trophy", desc: "The ultimate showdown in front of industry judges.", photos: Array(10).fill(null) },
    ],
  },
  "1.0": {
    label: "Sandbox 1.0",
    year: "2024",
    subtitle: "Wrapped, here's how it played out.",
    winner: {
      school: "winning school",
      schoolTodo: true,
      wonText: "won Sandbox 1.0",
      prize: "cash prize amount",
      prizeTodo: true,
      is1_0: true
    },
    theme: "Sustainability",
    stages: [
      { title: "Workshop",           icon: "Wrench", desc: "The very first Sandbox workshop.", photos: Array(10).fill(null) },
      { title: "Preliminary Rounds", icon: "Users",  desc: "Early stage pitches to test the waters.", photos: Array(10).fill(null) },
      { title: "Semifinals",         icon: "Flag",   desc: "Refining the concepts for the big stage.", photos: Array(10).fill(null) },
      { title: "Finals",             icon: "Trophy", desc: "The inaugural grand finale.", photos: Array(10).fill(null) },
    ],
  },
};

const iconMap = {
  Wrench: Wrench,
  Users: Users,
  Flag: Flag,
  Trophy: Trophy,
};

function StagePhotoCarousel({ photos, stageTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!photos || photos.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos, isPaused]);

  if (!photos || photos.length === 0) {
    return (
      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/5 bg-[#0F0F16] flex items-center justify-center mt-6 mb-4">
        <span className="text-xs text-slate-500 uppercase tracking-widest">
          PHOTO PLACEHOLDER — {stageTitle.toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full mt-6 mb-4">
      <div 
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0F] group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Slides */}
        {photos.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={src} 
                alt={`${stageTitle} slide ${idx + 1}`} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#0F0F16]">
                <Camera size={28} className="text-slate-600" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-600 text-center px-4">
                  PHOTO PLACEHOLDER — {stageTitle.toUpperCase()} #{idx + 1}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots Indicator under the frame */}
      {photos.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-[#7C3AED] w-3" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function StageCard({ stage, isOpen, onToggle }) {
  const IconComponent = iconMap[stage.icon];
  
  return (
    <div className="relative pl-12 sm:pl-16">
      {/* Icon Node */}
      <div className={`absolute left-0 top-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full border bg-[#0A0A0F] flex items-center justify-center z-10 transition-colors duration-300 ${isOpen ? 'border-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.4)] text-[#7C3AED]' : 'border-white/10 text-slate-500'}`}>
        <IconComponent size={16} />
      </div>

      {/* Card */}
      <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-[#0B0B14] border-white/10 shadow-lg' : 'bg-[#0B0B14]/50 border-white/5 hover:bg-[#0B0B14]/80'}`}>
        <button 
          onClick={onToggle}
          className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left focus:outline-none"
        >
          <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-white' : 'text-slate-300'}`}>{stage.title}</span>
          {isOpen ? <ChevronUp className="text-slate-400 flex-shrink-0" size={20} /> : <ChevronDown className="text-slate-500 flex-shrink-0" size={20} />}
        </button>

        {/* Body */}
        <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/5">
              {/* 10-Photo Carousel */}
              <StagePhotoCarousel photos={stage.photos} stageTitle={stage.title} />
              
              {/* Stage description */}
              <p className="text-slate-400 text-sm">{stage.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SandboxPastEditions() {
  const searchParams = useSearchParams();
  const editionParam = searchParams.get("edition");
  
  const [activeEdition, setActiveEdition] = useState("2.0");
  const data = editions[activeEdition];
  
  const [openStageIdx, setOpenStageIdx] = useState(0);

  useEffect(() => {
    if (editionParam === "1.0" || editionParam === "2.0") {
      setActiveEdition(editionParam);
      setOpenStageIdx(0);
    }
  }, [editionParam]);

  const toggleStage = (idx) => {
    setOpenStageIdx(openStageIdx === idx ? -1 : idx);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white pt-36 pb-24 px-4 sm:px-6 font-sans">
      <div className="mx-auto max-w-3xl">
        
        {/* A. Intro / hero block */}
        <div className="mb-14">
          <p className="text-[#7C3AED] uppercase font-bold text-xs tracking-[0.2em] mb-4">Past Editions</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-white mb-6 tracking-tight">Where Sandbox has been.</h1>
          <p className="text-slate-400 leading-relaxed">
            Held every year in Colombo, Sandbox is Sri Lanka's first-ever inter-school business pitching competition, run by the Entrepreneurship Club of APIIT in partnership with the Ministry of Education. It launched in September 2024, open to government, private, and international schools alike. By its second edition in 2025, the competition had grown to 38 participating schools and 50 competing teams, with the strongest ideas advancing through a workshop and preliminary round to a live grand finale in front of a panel of industry judges.
          </p>
        </div>

        {/* B. Edition toggle (pills) */}
        <div className="flex gap-3 mb-16">
          {["2.0", "1.0"].map(ver => (
            <button
              key={ver}
              onClick={() => {
                setActiveEdition(ver);
                setOpenStageIdx(0); // reset accordion when switching tabs
              }}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                activeEdition === ver 
                  ? 'bg-slate-100 text-[#0A0A0F] shadow-md' 
                  : 'bg-slate-800/40 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Sandbox {ver}
            </button>
          ))}
        </div>

        {/* C. Selected edition header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight mb-3">
            <span className="text-white">{data.label} </span>
            <span className="text-[#7C3AED]">({data.year})</span>
          </h2>
          <p className="text-slate-400 text-lg">{data.subtitle}</p>
        </div>

        {/* D. WINNER block */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={18} className="text-[#F59E0B]" />
            <span className="text-[#F59E0B] uppercase font-bold tracking-[0.15em] text-xs">Winner</span>
          </div>
          
          <div className="text-2xl md:text-3xl font-medium leading-snug">
            {data.winner.is2_0 && (
              <p>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-[#7C3AED]">{data.winner.school}</span>
                <span className="text-white"> {data.winner.wonText} </span>
                <span className="italic text-slate-500">{data.winner.prize}</span>
                {data.winner.prizeTodo && <span className="inline-block align-middle ml-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-slate-800/80 text-slate-400 rounded border border-white/5">TODO</span>}
              </p>
            )}
            
            {data.winner.is1_0 && (
              <div className="space-y-2">
                <p>
                  <span className="italic text-slate-500">{data.winner.school}</span>
                  {data.winner.schoolTodo && <span className="inline-block align-middle ml-2 mr-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-slate-800/80 text-slate-400 rounded border border-white/5">TODO</span>}
                  <span className="text-white"> {data.winner.wonText}</span>
                </p>
                <p>
                  <span className="italic text-slate-500">{data.winner.prize}</span>
                  {data.winner.prizeTodo && <span className="inline-block align-middle ml-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-slate-800/80 text-slate-400 rounded border border-white/5">TODO</span>}
                </p>
              </div>
            )}
          </div>
        </div>

        <hr className="border-t border-white/5 mb-10" />

        {/* E. THEME block */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Target size={18} className="text-[#38BDF8]" />
            <span className="text-[#38BDF8] uppercase font-bold tracking-[0.15em] text-xs">Theme</span>
          </div>
          <p className="text-2xl md:text-3xl italic text-violet-200">"{data.theme}"</p>
        </div>

        <hr className="border-t border-white/5 mb-12" />

        {/* F. Stage timeline (vertical accordion) */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[15px] sm:left-[19px] top-6 bottom-6 w-px bg-white/10 z-0"></div>
          
          <div className="space-y-6">
            {data.stages.map((stage, idx) => (
              <StageCard 
                key={idx} 
                stage={stage} 
                isOpen={openStageIdx === idx} 
                onToggle={() => toggleStage(idx)} 
              />
            ))}
          </div>
        </div>

        {/* G. Meet the teams section for active edition */}
        {PAST_TEAMS.filter(t => t.edition === `Sandbox ${activeEdition}`).length > 0 && (
          <div className="mt-16">
            <PastTeamsSection 
              teams={PAST_TEAMS.filter(t => t.edition === `Sandbox ${activeEdition}`)} 
              hideHeader={true} 
            />
          </div>
        )}

      </div>
    </div>
  );
}
