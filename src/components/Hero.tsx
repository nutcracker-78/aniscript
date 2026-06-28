import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section 
      id="block-hero" 
      data-page="hero"
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-20 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-xs font-sans tracking-[0.2em] uppercase text-rhizom-main/60 mb-6">
          Die Quintessenz
        </div>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-rhizom-main mb-8">
          Der menschliche moralische Status der Natur beruht auf intrinsischem Wert, nicht auf bloßem Nutzen.
        </h2>
        <div className="w-12 h-[1px] bg-rhizom-main/30 mx-auto"></div>
      </motion.div>
    </section>
  );
}
