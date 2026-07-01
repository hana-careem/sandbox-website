import React from 'react';

export default function PartnerBanner() {
  // TODO: Add real partner logos
  const partners = [
    { name: "Ministry of Education", placeholder: "Ministry Logo" },
    { name: "APIIT", placeholder: "APIIT Logo" },
    { name: "Sponsor 1", placeholder: "Sponsor Logo" },
    { name: "Sponsor 2", placeholder: "Sponsor Logo" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h3 className="text-center text-slate-400 uppercase tracking-widest text-sm font-semibold mb-8">In Partnership With</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, idx) => (
            <div key={idx} className="h-12 flex items-center justify-center font-bold text-slate-800 text-xl">
              {/* Replace with next/image when assets are available */}
              [{partner.placeholder}]
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
