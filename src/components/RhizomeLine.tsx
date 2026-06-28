import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export function RhizomeLine() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-24 -translate-x-1/2 z-0 hidden md:block print:hidden" aria-hidden="true">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Faded background path */}
        <path
          d="M 50 0 C 80 150 20 300 50 500 C 80 700 20 850 50 1000"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          className="text-rhizom-main/10"
        />
        {/* Animated foreground path */}
        <motion.path
          d="M 50 0 C 80 150 20 300 50 500 C 80 700 20 850 50 1000"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="text-rhizom-main/40"
          style={{ pathLength }}
        />
      </svg>
      {/* Decorative root nodes */}
      <div className="absolute top-[10%] left-[65%] -translate-x-1/2 w-2 h-2 rounded-full bg-rhizom-main/20"></div>
      <div className="absolute top-[35%] left-[30%] -translate-x-1/2 w-2 h-2 rounded-full bg-rhizom-main/20"></div>
      <div className="absolute top-[65%] left-[70%] -translate-x-1/2 w-2 h-2 rounded-full bg-rhizom-main/20"></div>
      <div className="absolute top-[90%] left-[35%] -translate-x-1/2 w-2 h-2 rounded-full bg-rhizom-main/20"></div>
    </div>
  );
}
