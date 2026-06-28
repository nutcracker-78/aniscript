import React from 'react';
import { motion } from 'motion/react';
import type { RhizomeNodeData } from '../types';

interface CornellNodeProps {
  node: RhizomeNodeData;
  index: number;
}

export function CornellNode({ node, index }: CornellNodeProps) {
  return (
    <section 
      id={`block-${node.id}`} 
      data-page={node.page}
      className="cornell-node relative w-full max-w-6xl mx-auto px-6 mb-32 z-10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
      >
        {/* Left Offshoot: Keywords & Page */}
        <div className="md:col-span-3 node-keywords pt-2 md:text-right flex flex-col md:items-end order-2 md:order-1">
          {node.page && (
            <div className="text-xs font-sans text-rhizom-main/50 mb-3 border-b border-rhizom-main/20 inline-block pb-1">
              S. {node.page}
            </div>
          )}
          <ul className="flex flex-col gap-2">
            {node.keywords.map((kw, i) => (
              <li key={i} className="text-sm font-sans text-rhizom-main/80 font-medium tracking-wide">
                {kw}
              </li>
            ))}
          </ul>
        </div>

        {/* Central Core: Main Argument */}
        <div className="md:col-span-6 node-content bg-rhizom-container p-8 md:p-10 rounded-sm shadow-sm order-1 md:order-2 border border-rhizom-main/5">
          <div className="space-y-6">
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-rhizom-main/40 mb-2">
                Argument
              </div>
              <p className="font-serif text-lg leading-relaxed text-rhizom-main">
                {node.argument}
              </p>
            </div>
            
            <div className="w-full h-px bg-rhizom-main/10"></div>
            
            <div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-rhizom-main/40 mb-2">
                Erklärung
              </div>
              <p className="font-sans text-sm leading-relaxed text-rhizom-main/90 line-clamp-6">
                {node.explanation}
              </p>
            </div>

            {node.example && (
              <>
                <div className="w-full h-px bg-rhizom-main/10"></div>
                <div>
                  <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-rhizom-main/40 mb-2">
                    Beispiel
                  </div>
                  <p className="font-sans text-sm italic leading-relaxed text-rhizom-main/80 line-clamp-6">
                    {node.example}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Offshoot: Critique */}
        <div className="md:col-span-3 node-critique order-3 pt-6 md:pt-0">
          {node.critique && (
            <div className="p-5 border-l-2 border-rhizom-accent/80 bg-rhizom-bg relative">
              <div className="absolute -left-[1.5px] top-6 w-3 h-3 bg-rhizom-bg border-2 border-rhizom-accent rounded-full -translate-x-1/2"></div>
              <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-rhizom-accent mb-2 font-medium">
                Kritik / Notiz
              </div>
              <p className="font-sans text-sm leading-relaxed text-rhizom-main/80">
                {node.critique}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
