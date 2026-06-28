import React from 'react';
import { motion } from 'motion/react';

export function RhizomeMap() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-b border-stone/10 print:border-black/20" id="block-map">
      <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-rhizom-accent mb-16 text-center font-bold print:text-black">
        The Connected Core
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Flowchart Lines (Desktop) */}
        <div className="hidden md:block absolute top-16 bottom-16 left-1/2 w-px bg-rhizom-accent -translate-x-1/2 print:bg-black"></div>
        <div className="hidden md:block absolute top-[15%] left-1/4 right-1/4 h-px bg-rhizom-accent print:bg-black"></div>
        <div className="hidden md:block absolute top-[85%] left-1/4 right-1/4 h-px bg-rhizom-accent print:bg-black"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative z-10">
          
          {/* Node A */}
          <div className="bg-rhizom-container border-t-4 border-rhizom-accent p-6 print:bg-transparent print:border-black print:border-t-4">
            <div className="text-rhizom-accent font-sans text-[10px] uppercase tracking-widest font-bold mb-4 print:text-black">
              Node A: Menschenwürde
            </div>
            <p className="font-serif text-rhizom-main print:text-black text-lg">
              Traditional View: Tied to reason, morality, and autonomy.
            </p>
          </div>
          
          {/* Node B */}
          <div className="bg-rhizom-container border-t-4 border-rhizom-accent p-6 print:bg-transparent print:border-black print:border-t-4">
            <div className="text-rhizom-accent font-sans text-[10px] uppercase tracking-widest font-bold mb-4 print:text-black">
              Node B: Würde der Kreatur
            </div>
            <p className="font-serif text-rhizom-main print:text-black text-lg">
              Modern View: Tied to life, pain, and subjective experience.
            </p>
          </div>
        </div>
        
        {/* Central Node */}
        <div className="flex justify-center my-12 relative z-10">
          <div className="bg-rhizom-bg border-2 border-rhizom-accent p-8 max-w-sm text-center print:bg-white print:border-black">
            <div className="bg-rhizom-accent text-black font-sans text-[10px] uppercase tracking-widest font-bold px-3 py-1 inline-block mb-4 print:bg-black print:text-white">
              Central Node: Vulnerability
            </div>
            <p className="font-sans text-stone print:text-black leading-relaxed text-sm">
              BOTH concepts are defensive: they protect the weak from tyranny.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative z-10">
          
          {/* Node C */}
          <div className="bg-rhizom-container border-t-4 border-rhizom-accent p-6 print:bg-transparent print:border-black print:border-t-4">
            <div className="text-rhizom-accent font-sans text-[10px] uppercase tracking-widest font-bold mb-4 print:text-black">
              Node C: Cognitive Illusion
            </div>
            <p className="font-serif text-rhizom-main print:text-black text-lg">
              Text argument: Using our reason to exploit others devalues our own ethical status.
            </p>
          </div>
          
          {/* Node D */}
          <div className="bg-rhizom-container border-t-4 border-rhizom-accent p-6 print:bg-transparent print:border-black print:border-t-4">
            <div className="text-rhizom-accent font-sans text-[10px] uppercase tracking-widest font-bold mb-4 print:text-black">
              Node D: Coalition of Life
            </div>
            <p className="font-serif text-rhizom-main print:text-black text-lg">
              Conclusion: True human dignity is proven ONLY when we extend protection to the creature.
            </p>
          </div>
        </div>
        
        {/* Connection text between C and D */}
        <div className="hidden md:flex absolute bottom-[15%] left-1/2 -translate-x-1/2 bg-rhizom-bg px-4 z-20 items-center justify-center print:bg-white">
          <span className="text-[10px] font-sans uppercase tracking-widest text-rhizom-accent print:text-black font-bold">
            ◄ Shared Ground ►
          </span>
        </div>
      </div>
    </section>
  );
}
