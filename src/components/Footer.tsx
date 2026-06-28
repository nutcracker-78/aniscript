import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-40 bg-rhizom-container border-t border-rhizom-main/10 pt-20 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="text-xs font-sans tracking-[0.2em] uppercase text-rhizom-main/50 mb-6">
              Gesamtfazit
            </div>
            <p className="font-serif text-2xl leading-relaxed text-rhizom-main mb-6">
              Die Natur besitzt einen intrinsischen Wert, der über ihre bloße instrumentelle Nutzbarkeit für den Menschen hinausgeht. Dieser Paradigmenwechsel erfordert eine radikale Neuausrichtung unserer Umweltethik.
            </p>
            <p className="font-sans text-sm text-rhizom-main/70 max-w-2xl mx-auto">
              Zukunftsausblick: Eine ökozentrische Perspektive muss rechtlich verankert werden, um langfristigen Schutz zu gewährleisten und die Dichotomie zwischen Mensch und Natur zu überwinden.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 border border-rhizom-main/10 rounded-sm shadow-sm">
            <div className="flex items-center justify-center gap-3 mb-8">
              <MessageCircle className="text-rhizom-accent" size={24} />
              <h3 className="font-serif text-xl text-rhizom-main">Diskurs & Plenum</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 border-l-2 border-rhizom-accent/50 bg-rhizom-bg">
                <p className="font-sans text-sm text-rhizom-main font-medium mb-1">Frage 1</p>
                <p className="font-sans text-sm text-rhizom-main/80">Inwiefern ist der Begriff der "Kreatur" noch zeitgemäß, wenn wir über Ökosysteme als Ganzes sprechen?</p>
              </div>
              <div className="p-4 border-l-2 border-rhizom-accent/50 bg-rhizom-bg">
                <p className="font-sans text-sm text-rhizom-main font-medium mb-1">Frage 2</p>
                <p className="font-sans text-sm text-rhizom-main/80">Wenn alles Leben intrinsischen Wert hat, wie lösen wir unausweichliche Interessenskonflikte im Naturschutz?</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
