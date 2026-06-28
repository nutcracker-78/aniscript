import React from 'react';

export function RhizomeLine() {
  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-rhizom-main/15 -translate-x-1/2 z-0 hidden md:block" aria-hidden="true">
      {/* Decorative root nodes */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-rhizom-main/20"></div>
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-rhizom-main/20"></div>
      <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-rhizom-main/20"></div>
      <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-rhizom-main/20"></div>
    </div>
  );
}
