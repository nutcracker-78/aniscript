import React from 'react';
import { StickyHeader } from './components/StickyHeader';
import { Hero } from './components/Hero';
import { RhizomeMap } from './components/RhizomeMap';
import { CornellNode } from './components/CornellNode';
import { Footer } from './components/Footer';
import type { RhizomeNodeData } from './types';

const MOCK_NODES: RhizomeNodeData[] = [
  {
    id: 'synapse-1',
    page: '12',
    keywords: ['Deconstruction'],
    argument: 'If dignity requires rational speech, then infants or vulnerable humans would lose it.',
    explanation: 'The author attacks the standard Kantian paradigm. Therefore, the foundation of dignity must be vulnerability, not intellect.',
    critique: 'This radically shifts the ethical baseline from cognitive output to capacity for suffering.'
  },
  {
    id: 'synapse-2',
    page: '24',
    keywords: ['The Paradox'],
    argument: 'The moment humans claim unique dignity to exploit animals, they act without dignity.',
    explanation: 'The text highlights a beautiful paradox—Menschenwürde requires us to respect the Würde der Kreatur to remain authentic.',
    critique: 'A powerful rhetorical move: weaponizing human exceptionalism against itself.'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-rhizom-bg font-sans text-rhizom-main overflow-x-hidden print:bg-white print:text-black">
      <StickyHeader />
      
      <main className="relative pb-20">
        <Hero />
        
        <RhizomeMap />
        
        <div className="relative pt-24">
          
          <CornellNode node={MOCK_NODES[0]} index={0} />
          
          <CornellNode node={MOCK_NODES[1]} index={1} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
