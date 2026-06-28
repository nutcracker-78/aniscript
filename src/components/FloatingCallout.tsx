import React from 'react';
import { motion } from 'motion/react';
import { Info, BookOpen, Scale, Leaf } from 'lucide-react';
import type { CalloutData } from '../types';

export function FloatingCallout({ callout }: { callout: CalloutData }) {
  const getIcon = () => {
    switch (callout.type) {
      case 'biology': return <Leaf size={14} className="text-black" />;
      case 'legal': return <Scale size={14} className="text-black" />;
      case 'history': return <BookOpen size={14} className="text-black" />;
      default: return <Info size={14} className="text-black" />;
    }
  };

  const alignClass = callout.position === 'left' 
    ? 'md:mr-auto md:ml-0 md:pr-[55%] print:m-0 print:p-0' 
    : 'md:ml-auto md:mr-0 md:pl-[55%] print:m-0 print:p-0';

  return (
    <div className={`floating-callout w-full max-w-6xl mx-auto px-6 mb-16 z-20 relative ${alignClass}`}>
      <motion.div 
        initial={{ opacity: 0, x: callout.position === 'left' ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className={`bg-rhizom-container border-t-4 border-rhizom-accent p-6 shadow-2xl inline-block max-w-sm print:block print:max-w-full print:shadow-none print:bg-transparent print:border-black print:border-t`}
      >
        <div className="flex items-center gap-3 mb-4 border-b border-stone/10 pb-4 print:border-black/20">
          <div className="w-6 h-6 bg-rhizom-accent text-black flex items-center justify-center print:bg-black print:text-white">
            {getIcon()}
          </div>
          <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-stone print:text-black font-medium">
            {callout.title}
          </span>
        </div>
        <p className="font-sans text-xs leading-relaxed text-stone print:text-black">
          {callout.content}
        </p>
      </motion.div>
    </div>
  );
}
