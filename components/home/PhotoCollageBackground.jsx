"use client";
import React from 'react';

const collageItems = [
  // Pattern mixing spans and gaps to create a bento grid with empty spaces
  // Desktop: 6 cols
  { src: '/assets/Site backdrop  (1).jpeg', span: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' },
  { type: 'gap', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (2).jpeg', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1' },
  { type: 'gap', span: 'hidden md:block md:col-span-1 md:row-span-2' },
  { src: '/assets/Site backdrop  (3).jpeg', span: 'col-span-2 row-span-1 md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (4).jpeg', span: 'col-span-1 row-span-2 md:col-span-2 md:row-span-2' },
  
  { type: 'gap', span: 'hidden md:block md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (5).jpeg', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-2' },
  { src: '/assets/Site backdrop  (1).jpg', span: 'col-span-2 row-span-1 md:col-span-2 md:row-span-1' },
  { type: 'gap', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1' },
  { src: '/assets/Site backdrop  (6).jpeg', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },

  { src: '/assets/Site backdrop  (2).jpg', span: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' },
  { type: 'gap', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (7).jpeg', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1' },
  { src: '/assets/Site backdrop  (3).jpg', span: 'col-span-2 row-span-1 md:col-span-1 md:row-span-2' },
  
  { type: 'gap', span: 'hidden md:block md:col-span-2 md:row-span-1' },
  { src: '/assets/Site backdrop  (8).jpeg', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (4).jpg', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2' },
  
  { src: '/assets/Site backdrop  (9).jpeg', span: 'col-span-2 row-span-1 md:col-span-1 md:row-span-1' },
  { type: 'gap', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-2' },
  { src: '/assets/Site backdrop  (10).jpeg', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1' },
  { type: 'gap', span: 'hidden md:block md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (5).jpg', span: 'col-span-2 row-span-2 md:col-span-1 md:row-span-2' },

  { src: '/assets/Site backdrop  (11).jpeg', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2' },
  { type: 'gap', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (6).jpg', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { type: 'gap', span: 'hidden md:block md:col-span-2 md:row-span-1' },

  { src: '/assets/Site backdrop  (12).jpeg', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (7).jpg', span: 'col-span-2 row-span-1 md:col-span-2 md:row-span-2' },
  { type: 'gap', span: 'hidden md:block md:col-span-1 md:row-span-2' },
  { src: '/assets/Site backdrop  (8).jpg', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1' },
  
  { type: 'gap', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (13).jpeg', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (9).jpg', span: 'col-span-2 row-span-1 md:col-span-2 md:row-span-1' },
  { type: 'gap', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
  { src: '/assets/Site backdrop  (10).jpg', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
];

export default function PhotoCollageBackground({ children }) {
  return (
    <div className="relative w-full bg-[linear-gradient(180deg,#120810_0%,#170a13_45%,#1d0d18_100%)] overflow-hidden">
      
      {/* Photo Grid Layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[120px] md:auto-rows-[160px] gap-1">
          {collageItems.map((item, idx) => {
            if (item.type === 'gap') {
              return <div key={`gap-${idx}`} className={`${item.span} bg-transparent`}></div>;
            }
            return (
              <div key={`img-${idx}`} className={`${item.span} relative overflow-hidden group`}>
                <img
                  src={item.src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-[#0a051e] mix-blend-multiply opacity-80"></div>
              </div>
            );
          })}
          {/* Fill remaining space if the content is longer than the grid items */}
          <div className="col-span-full row-span-4 bg-transparent"></div>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 w-full">
        {children}
      </div>
    </div>
  );
}
