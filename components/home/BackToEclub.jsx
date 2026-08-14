import React from 'react';

const ECLUB_URL = process.env.NEXT_PUBLIC_ECLUB_URL || "https://eclub.apiit.lk";

export default function BackToEclub() {
  return (
    <div className="pt-[14px] px-[16px] pb-0">
      <a 
        href={ECLUB_URL} 
        aria-label="Back to E-Club"
        className="
          group static inline-flex items-center gap-[9px]
          py-[6px] pr-[15px] pl-[7px] max-[480px]:p-[7px]
          rounded-full bg-[rgba(16,16,31,0.72)] border border-[rgba(255,255,255,0.12)] backdrop-blur-[12px]
          shadow-[0_6px_24px_rgba(0,0,0,0.45)]
          text-[#f5f5fa] text-[13px] font-semibold no-underline
          transition-all duration-[180ms] ease-out
          hover:-translate-y-[1px] hover:bg-[rgba(20,30,34,0.9)] hover:border-[rgba(53,183,196,0.6)]
          focus-visible:outline-2 focus-visible:outline focus-visible:outline-[#35b7c4] focus-visible:outline-offset-2
          motion-reduce:transition-none motion-reduce:hover:transform-none
        "
      >
        <span 
          aria-hidden="true" 
          className="
            text-[#35b7c4] text-[15px] leading-none 
            transition-transform duration-[180ms] ease-out
            group-hover:-translate-x-[3px]
            motion-reduce:transition-none motion-reduce:group-hover:transform-none
          "
        >
          ‹
        </span>
        <span className="w-[30px] h-[30px] shrink-0 rounded-full grid place-items-center bg-white overflow-hidden">
          <img 
            src="/assets/eclub-logo.png" 
            alt="E-Club" 
            className="w-[22px] h-[22px] block object-cover object-left" 
          />
        </span>
        <span className="whitespace-nowrap leading-[1.15] max-[480px]:hidden">
          <small className="block text-[9px] font-semibold tracking-[1.4px] uppercase text-[#6f6f88] mb-[1px] max-[820px]:hidden">
            Back to
          </small>
          <b className="font-bold">E-Club</b>
        </span>
      </a>
    </div>
  );
}
