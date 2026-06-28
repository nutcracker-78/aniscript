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
    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden md:block print:hidden" aria-hidden="true">
      {/* Background tracking line */}
      <div className="w-full h-full bg-stone/10" />
      
      {/* Animated scroll progress line */}
      <motion.div 
        className="absolute top-0 left-0 w-full bg-rhizom-accent origin-top"
        style={{ scaleY: pathLength, height: '100%' }}
      />
      
      {/* Geometric nodes marking sections (absolute positions are rough estimates) */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-3 h-3 bg-rhizom-bg border-2 border-rhizom-accent"></div>
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-3 h-3 bg-rhizom-bg border-2 border-rhizom-accent"></div>
      <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-3 h-3 bg-rhizom-bg border-2 border-rhizom-accent"></div>
    </div>
  );
}
