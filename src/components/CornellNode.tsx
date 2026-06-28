import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Square } from 'lucide-react';
import type { RhizomeNodeData } from '../types';

interface CornellNodeProps {
  node: RhizomeNodeData;
  index: number;
}

export function CornellNode({ node, index }: CornellNodeProps) {
  const [isRead, setIsRead] = useState(false);

  return (
    <section 
      id={`block-${node.id}`} 
      data-page={node.page}
      className="cornell-node relative w-full max-w-6xl mx-auto px-6 mb-24 z-10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start print:flex print:flex-col print:gap-4 print:mb-12"
      >
        {/* Left Sidebar: Type & Context */}
        <div className="md:col-span-4 pt-2 flex flex-col order-1 print:order-1 print:text-left print:items-start">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-rhizom-accent print:bg-black"></div>
            <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-rhizom-main font-bold print:text-black">
              Synapse {index + 1}
            </div>
          </div>
          
          <div className="bg-rhizom-accent text-black font-sans text-[10px] uppercase tracking-widest font-bold px-3 py-1 inline-block mb-6 self-start print:bg-black print:text-white">
            {node.keywords[0] || 'Analysis'}
          </div>

          <div className="text-sm font-sans text-stone leading-relaxed print:text-black">
            {node.critique}
          </div>
          
          {node.page && (
             <div className="mt-6 text-[10px] font-sans tracking-widest text-stone uppercase font-bold print:text-black border-t border-stone/20 pt-4 print:border-black/20">
               Ref: S. {node.page}
             </div>
          )}
        </div>

        {/* Central Core: Main Argument */}
        <div className={`md:col-span-8 node-content bg-rhizom-container p-8 md:p-12 order-2 border-l-4 print:order-2 print:bg-transparent print:border-black print:p-6 transition-all duration-500 relative ${isRead ? 'border-rhizom-accent bg-rhizom-container/40' : 'border-stone/20'}`}>
          
          <button 
            onClick={() => setIsRead(!isRead)}
            className={`absolute -top-3 -left-[18px] w-8 h-8 flex items-center justify-center transition-all duration-300 print:hidden z-10 ${isRead ? 'bg-rhizom-accent text-black' : 'bg-rhizom-bg border border-stone/30 text-stone hover:text-rhizom-accent hover:border-rhizom-accent'}`}
            title="Als gelesen markieren"
          >
            <Square size={12} className={isRead ? 'fill-current' : ''} />
          </button>

          <div className="space-y-8">
            <div>
              <p className="font-serif text-2xl md:text-3xl leading-snug text-rhizom-main print:text-black">
                {node.argument}
              </p>
            </div>
            
            <div className="w-full h-px bg-stone/10 print:bg-black/20"></div>
            
            <div>
              <p className="font-sans text-base leading-relaxed text-stone print:text-black">
                {node.explanation}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
