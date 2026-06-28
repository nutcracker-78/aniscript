import React from 'react';
import { StickyHeader } from './components/StickyHeader';
import { Hero } from './components/Hero';
import { CornellNode } from './components/CornellNode';
import { FloatingCallout } from './components/FloatingCallout';
import { Footer } from './components/Footer';
import { RhizomeLine } from './components/RhizomeLine';
import type { RhizomeNodeData, CalloutData } from './types';

const MOCK_NODES: RhizomeNodeData[] = [
  {
    id: 'intro',
    page: '12',
    keywords: ['🌱 Kreatur', 'Anthropozentrismus'],
    argument: 'Die traditionelle Ethik bewertet die Natur primär nach ihrem Nutzen für den Menschen.',
    explanation: 'Dieser anthropozentrische Ansatz reduziert Pflanzen und Tiere auf Ressourcen. Der Autor kritisiert, dass dadurch der moralische Status von Lebewesen ignoriert wird, die keinen direkten ökonomischen oder instrumentellen Wert besitzen.',
    example: 'Ein Wald wird nur als Holzlieferant oder CO2-Speicher betrachtet, nicht als komplexes Lebensnetz mit eigenem Existenzrecht.',
    critique: 'Dieser Punkt ist zentral, übersieht aber indigene Perspektiven, die schon lange nicht-anthropozentrisch argumentieren.'
  },
  {
    id: 'intrinsic',
    page: '24',
    keywords: ['✨ Intrinsischer Wert', 'Teleologie'],
    argument: 'Jedes Lebewesen verfolgt eigene teleologische Ziele und besitzt daher einen eigenen Wert.',
    explanation: 'Unabhängig davon, ob es Bewusstsein hat oder Schmerz empfinden kann, strebt ein Organismus nach Erhaltung und Entfaltung. Dieses Streben verleiht ihm einen intrinsischen Wert, der respektiert werden muss.',
    example: 'Eine Pflanze wendet sich dem Licht zu und heilt ihre Wunden – ein klarer Beweis für zielgerichtetes (teleologisches) Verhalten.',
  },
  {
    id: 'conclusion',
    page: '45',
    keywords: ['⚖️ Ökozentrismus', 'Moralische Pflicht'],
    argument: 'Aus dem intrinsischen Wert leitet sich eine direkte moralische Pflicht ab.',
    explanation: 'Wenn wir anerkennen, dass Natur nicht nur Objekt, sondern moralisches Subjekt ist, müssen wir unsere Handlungen radikal anpassen. Schädigung ist nur zulässig, wenn vitale menschliche Interessen absolut überwiegen.',
    critique: 'Die Definition von "vitalen Interessen" bleibt extrem vage und bietet ein großes Schlupfloch für Ausbeutung.'
  }
];

const MOCK_CALLOUTS: CalloutData[] = [
  {
    id: 'law-1',
    position: 'left',
    type: 'legal',
    title: 'Tierschutzgesetz § 1',
    content: 'Das deutsche Tierschutzgesetz schützt das Leben und Wohlbefinden des Tieres aus der Verantwortung des Menschen für das Tier als Mitgeschöpf. Niemand darf einem Tier ohne vernünftigen Grund Schmerzen, Leiden oder Schäden zufügen.'
  },
  {
    id: 'bio-1',
    position: 'right',
    type: 'biology',
    title: 'Neurobiologie',
    content: 'Neue Studien zeigen, dass auch Pflanzen auf Umweltstress mit elektrischen Signalen reagieren, was die Grenze zwischen "empfindungsfähig" und "automatisch" zunehmend verschwimmen lässt.'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-rhizom-bg font-sans text-rhizom-main overflow-x-hidden print:bg-white print:text-black">
      <StickyHeader />
      
      <main className="relative pb-20">
        <Hero />
        
        {/* The main content area where the rhizome line lives */}
        <div className="relative pt-20">
          <RhizomeLine />
          
          <CornellNode node={MOCK_NODES[0]} index={0} />
          
          <FloatingCallout callout={MOCK_CALLOUTS[0]} />
          
          <CornellNode node={MOCK_NODES[1]} index={1} />
          
          <FloatingCallout callout={MOCK_CALLOUTS[1]} />
          
          <CornellNode node={MOCK_NODES[2]} index={2} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
