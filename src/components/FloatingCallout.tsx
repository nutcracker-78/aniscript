import React from 'react';
import { motion } from 'motion/react';
import { Info, BookOpen, Scale, Leaf } from 'lucide-react';
import type { CalloutData } from '../types';

export function FloatingCallout({ callout }: { callout: CalloutData }) {
  const getIcon = () => {
    switch (callout.type) {
      case 'biology': return <Leaf size={14} className="text-rhizom-main/60" />;
      case 'legal': return <Scale size={14} className="text-rhizom-main/60" />;
      case 'history': return <BookOpen size={14} className="text-rhizom-main/60" />;
      default: return <Info size={14} className="text-rhizom-main/60" />;
    }
  };

  const alignClass = callout.position === 'left' 
    ? 'md:mr-auto md:ml-0 md:pr-[55%]' 
    : 'md:ml-auto md:mr-0 md:pl-[55%]';

  return (
    <div className={`floating-callout w-full max-w-6xl mx-auto px-6 mb-16 z-20 relative ${alignClass}`}>
      <motion.div 
        initial={{ opacity: 0, x: callout.position === 'left' ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className={`bg-white border border-rhizom-main/10 p-5 rounded-sm shadow-sm inline-block max-w-sm`}
      >
        <div className="flex items-center gap-2 mb-2 border-b border-rhizom-main/5 pb-2">
          {getIcon()}
          <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-rhizom-main/60">
            {callout.title}
          </span>
        </div>
        <p className="font-sans text-xs leading-relaxed text-rhizom-main/80">
          {callout.content}
        </p>
      </motion.div>
    </div>
  );
}
