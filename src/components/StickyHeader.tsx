import { motion, useScroll, useSpring } from 'motion/react';
import React from 'react';

export function StickyHeader() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rhizom-bg/80 backdrop-blur-sm print:hidden">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="font-serif text-lg text-rhizom-main tracking-wide">
          Die Analyse
        </h1>
        <div className="text-sm font-sans text-rhizom-main/60 tracking-widest uppercase">
          Lese-Modus
        </div>
      </div>
      {/* The Progress Vine */}
      <motion.div
        className="h-[2px] bg-rhizom-main origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}
