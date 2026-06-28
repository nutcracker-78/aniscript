import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <>
      {/* Top Cross-Reference Bar */}
      <div className="w-full bg-rhizom-accent py-2 px-6 mt-16 print:mt-0 print:bg-black print:text-white">
        <div className="max-w-7xl mx-auto flex items-center gap-4 text-[10px] font-sans font-bold text-black uppercase tracking-widest overflow-x-auto whitespace-nowrap">
          <span className="shrink-0 bg-black text-white px-2 py-0.5 print:bg-white print:text-black">Siehe auch:</span>
          <span className="font-medium">Kantian Ethics (Categorical Imperative) • Biocentrism • Animal Welfare Act • Deep Ecology • Albert Schweitzer (Reverence for Life)</span>
        </div>
      </div>

      <section 
        id="block-hero" 
        data-page="hero"
        className="px-6 pt-16 pb-24 max-w-7xl mx-auto border-b border-stone/10 print:border-black/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Sidebar: Im Kontext */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 border-l-2 border-rhizom-accent pl-6 print:border-black print:border-l-4"
          >
            <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-rhizom-accent mb-6 font-bold print:text-black">
              Im Kontext [cite: 1]
            </div>
            
            <h3 className="font-serif text-2xl text-rhizom-main mb-8 print:text-black">
              FOKUS: Die Würdedebatte
            </h3>
            
            <div className="space-y-8">
              <div>
                <div className="text-[10px] font-sans tracking-widest uppercase text-stone mb-4 border-b border-stone/20 pb-2 print:text-black print:border-black/20 font-bold">
                  Historische Wurzeln (Früher)
                </div>
                <ul className="space-y-4">
                  <li className="font-sans text-sm text-stone print:text-black leading-relaxed">
                    <span className="text-rhizom-accent font-bold print:text-black mr-2">1785:</span>
                    Kant defines dignity based strictly on human reason.
                  </li>
                  <li className="font-sans text-sm text-stone print:text-black leading-relaxed">
                    <span className="text-rhizom-accent font-bold print:text-black mr-2">1975:</span>
                    Peter Singer publishes 'Animal Liberation', introducing pathocentrism.
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="text-[10px] font-sans tracking-widest uppercase text-stone mb-4 border-b border-stone/20 pb-2 print:text-black print:border-black/20 font-bold">
                  Moderne Diskurse (Später)
                </div>
                <ul className="space-y-4">
                  <li className="font-sans text-sm text-stone print:text-black leading-relaxed">
                    <span className="text-rhizom-accent font-bold print:text-black mr-2">1992:</span>
                    Switzerland becomes first to protect "Würde der Kreatur" in its constitution.
                  </li>
                  <li className="font-sans text-sm text-stone print:text-black leading-relaxed">
                    <span className="text-rhizom-accent font-bold print:text-black mr-2">2020s:</span>
                    Legal personhood granted to rivers and ecosystems worldwide.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Main Content Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-8"
          >
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] text-rhizom-main mb-6 uppercase tracking-tight print:text-black">
              Nichts lebt für sich allein
            </h2>
            <p className="font-sans text-sm text-rhizom-accent mb-12 uppercase tracking-[0.2em] font-bold print:text-black">
              Das Netzwerk von Vernunft & Sentienz
            </p>
            
            <div className="font-serif text-lg leading-relaxed text-stone print:text-black relative">
              <span className="float-left text-7xl leading-[0.8] pr-4 pt-2 text-rhizom-main font-bold print:text-black">A</span>
              s traditional frameworks fracture, the text reveals that human dignity cannot exist in an ecological vacuum. By elevating our rational superiority, we paradoxically isolate ourselves from the very fabric of life that sustains our moral existence. The debate around the "Würde der Kreatur" (dignity of the creature) forces us to confront this isolation.
            </div>
            
            {/* Interactive Pull-Quote */}
            <div className="mt-16 p-8 border border-rhizom-accent bg-rhizom-container/30 print:border-black print:bg-transparent relative group transition-colors duration-500 hover:bg-rhizom-accent/5">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-rhizom-accent flex items-center justify-center print:bg-black">
                <span className="text-black font-serif text-2xl leading-none pt-2 print:text-white">"</span>
              </div>
              <p className="font-serif text-2xl md:text-3xl leading-snug text-rhizom-main text-center group-hover:text-rhizom-accent transition-colors duration-500 print:text-black print:group-hover:text-black">
                Die Missachtung der kreatürlichen Würde ist der moralische Bankrott der menschlichen Vernunft.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
