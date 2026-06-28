import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ChevronDown } from 'lucide-react';

function PlenumQuestion({ question, content, num }: { question: string, content: string, num: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-stone/10 bg-rhizom-bg print:bg-transparent print:border-black">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-rhizom-container transition-colors print:hover:bg-transparent"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 bg-rhizom-accent inline-block print:bg-black"></span>
            <p className="font-sans text-xs tracking-widest uppercase text-stone font-medium print:text-black">Frage {String(num).padStart(2, '0')}</p>
          </div>
          <p className="font-sans text-sm text-rhizom-main font-medium print:text-black">{question}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="print:hidden text-rhizom-accent"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="print:!h-auto print:!opacity-100"
          >
            <div className="p-6 pt-0 border-t border-stone/5 bg-rhizom-bg print:border-none print:p-4 print:bg-transparent">
              <p className="text-[10px] uppercase tracking-widest text-rhizom-accent mb-3 font-medium print:text-black">Mögliche Argumente</p>
              <p className="font-sans text-sm text-stone leading-relaxed print:text-black">
                {content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Fallback for print to always show content */}
      <div className="hidden print:block p-4 pt-0">
        <p className="text-[10px] uppercase tracking-widest text-black mb-2 font-medium">Mögliche Argumente</p>
        <p className="font-sans text-sm text-black leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="block-footer" className="mt-40 bg-rhizom-container print:bg-transparent print:border-t-4 print:border-black border-t border-rhizom-accent pt-20 pb-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-rhizom-accent print:bg-black"></div>
      
      <div className="max-w-5xl mx-auto pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-rhizom-accent mb-6 flex items-center gap-3 print:text-black">
                <span className="w-6 h-[1px] bg-rhizom-accent print:bg-black"></span>
                Gesamtfazit
              </div>
              <p className="font-serif text-2xl leading-relaxed text-rhizom-main mb-6 print:text-black">
                Die Natur besitzt einen intrinsischen Wert, der über ihre bloße instrumentelle Nutzbarkeit für den Menschen hinausgeht.
              </p>
              <p className="font-sans text-sm text-stone leading-relaxed print:text-black">
                Zukunftsausblick: Eine ökozentrische Perspektive muss rechtlich verankert werden, um langfristigen Schutz zu gewährleisten und die Dichotomie zwischen Mensch und Natur zu überwinden.
              </p>
            </div>
            
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:ml-auto print:hidden">
              <div className="absolute inset-0 bg-rhizom-accent translate-x-4 -translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&q=80&w=800"
                alt="Forest canopy"
                className="relative w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="bg-rhizom-bg p-8 md:p-12 shadow-2xl print:shadow-none print:bg-transparent print:border print:border-black">
            <div className="flex flex-col items-center justify-center gap-5 mb-12 text-center">
              <div className="w-12 h-12 bg-rhizom-accent text-black flex items-center justify-center print:bg-transparent print:border print:border-black">
                <MessageSquare size={20} />
              </div>
              <h3 className="font-serif text-3xl text-rhizom-main print:text-black">Diskurs & Plenum</h3>
            </div>
            
            <div className="space-y-4">
              <PlenumQuestion 
                num={1}
                question='Inwiefern ist der Begriff der "Kreatur" noch zeitgemäß, wenn wir über Ökosysteme als Ganzes sprechen?'
                content='Pro: Er betont die individuelle Leidensfähigkeit und den Schöpfungsgedanken, was emotional greifbar ist. Contra: Er ist zu fokussiert auf höhere Tiere und schließt komplexe Systeme (Wälder, Flüsse) sprachlich aus, was einer holistischen Öko-Ethik widerspricht.'
              />
              <PlenumQuestion 
                num={2}
                question='Wenn alles Leben intrinsischen Wert hat, wie lösen wir unausweichliche Interessenskonflikte im Naturschutz?'
                content='Lösungsansatz: Hierarchisierung von vitalen (z.B. Nahrung, Überleben) gegenüber nicht-vitalen Interessen (z.B. Luxus, Sport). Ein Ökosystem oder eine Art hat im Konfliktfall oft Vorrang vor dem nicht-vitalen Interesse eines einzelnen Akteurs.'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
