"use client";
import React from 'react';

const ECLUB_URL = process.env.NEXT_PUBLIC_ECLUB_URL || "https://eclub.apiit.lk";

export default function BackToEclub() {
  return (
    <div className="absolute top-[85px] md:top-[100px] left-[16px] z-40">
      <a 
        href="#"
        onClick={(e) => e.preventDefault()}
        aria-label="Back to E-Club"
        className="
          group inline-flex items-center gap-[10px]
          py-[8px] pr-[18px] pl-[10px] max-[480px]:p-[9px]
          rounded-full bg-[rgba(16,16,31,0.72)] border border-[rgba(255,255,255,0.12)] backdrop-blur-[12px]
          shadow-[0_6px_24px_rgba(0,0,0,0.45)]
          text-[#f5f5fa] text-[14px] font-semibold no-underline
          transition-all duration-[180ms] ease-out
          hover:-translate-y-[1px] hover:bg-[rgba(20,30,34,0.9)] hover:border-[#a64d79]/60
          focus-visible:outline-2 focus-visible:outline focus-visible:outline-[#a64d79] focus-visible:outline-offset-2
          motion-reduce:transition-none motion-reduce:hover:transform-none
        "
      >
        <span 
          aria-hidden="true" 
          className="
            text-[#a64d79] text-[17px] leading-none 
            transition-transform duration-[180ms] ease-out
            group-hover:-translate-x-[3px]
            motion-reduce:transition-none motion-reduce:group-hover:transform-none
          "
        >
          ‹
        </span>
        <span className="w-[34px] h-[34px] shrink-0 rounded-full grid place-items-center bg-white overflow-hidden">
          <img 
            src="/assets/eclub-logo.png" 
            alt="E-Club" 
            className="w-[24px] h-[24px] block object-cover object-left" 
          />
        </span>
        <span className="whitespace-nowrap leading-[1.15] max-[480px]:hidden">
          <small className="block text-[10px] font-semibold tracking-[1.4px] uppercase text-[#6f6f88] mb-[1px] max-[820px]:hidden">
            Back to
          </small>
          <b className="font-bold">E-Club</b>
        </span>
      </a>
    </div>
  );
}
