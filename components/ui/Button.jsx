"use client";
import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950";
  
  const variants = {
    primary: "bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.7)]",
    secondary: "bg-[#FF4D6D] hover:bg-[#E03A58] text-white shadow-[0_0_15px_rgba(255,77,109,0.5)]",
    outline: "border-2 border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10",
    ghost: "text-white hover:bg-white/10"
  };

  return (
    <button className={`${baseStyles} px-6 py-3 ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
