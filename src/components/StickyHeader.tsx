import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const TOC_ITEMS = [
  { id: 'block-hero', label: '01. Im Kontext' },
  { id: 'block-map', label: '02. The Connected Core' },
  { id: 'block-synapse-1', label: '03. Synapse 1: Deconstruction' },
  { id: 'block-synapse-2', label: '04. Synapse 2: The Paradox' },
  { id: 'block-footer', label: '05. Fazit & Diskurs' },
];

export function StickyHeader() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [tocOpen, setTocOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setTocOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rhizom-bg/95 border-b border-stone/10 print:hidden">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-rhizom-accent flex items-center justify-center">
            <span className="font-serif font-bold text-black text-sm">NG</span>
          </div>
          <span className="font-sans text-[10px] uppercase tracking-widest text-stone hidden sm:block">
            Editorial Analysis
          </span>
        </div>
        
        <div className="flex items-center gap-6 relative">
          
          <button 
            onClick={() => setTocOpen(!tocOpen)}
            className="flex items-center gap-3 text-[10px] font-sans text-rhizom-main hover:text-rhizom-accent transition-colors uppercase tracking-widest"
          >
            <span className="hidden sm:inline">Inhaltsverzeichnis</span>
            {tocOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          
          <AnimatePresence>
            {tocOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full right-0 mt-4 w-72 bg-rhizom-container border border-stone/10 shadow-2xl"
              >
                <ul className="py-2">
                  {TOC_ITEMS.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className="w-full text-left px-6 py-4 text-xs font-sans text-stone hover:bg-rhizom-bg hover:text-rhizom-main hover:border-l-4 hover:border-rhizom-accent transition-all border-l-4 border-transparent flex items-center justify-between group"
                      >
                        {item.label}
                        <span className="text-rhizom-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* The Progress Vine */}
      <motion.div
        className="h-[2px] bg-rhizom-accent origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}
