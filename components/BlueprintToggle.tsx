'use client';

import { motion } from 'framer-motion';

interface BlueprintToggleProps {
  currentView: 'human' | 'machine';
  onToggle: (view: 'human' | 'machine') => void;
}

export default function BlueprintToggle({ currentView, onToggle }: BlueprintToggleProps) {
  return (
    <div className="flex border border-warm-gold rounded-lg overflow-hidden">
      <button
        onClick={() => onToggle('human')}
        className={`px-6 py-3 font-semibold transition-colors duration-200 rounded-l-lg ${
          currentView === 'human'
            ? 'bg-warm-gold/20 text-pure-white'
            : 'bg-transparent text-pure-white hover:bg-warm-gold/10'
        }`}
      >
        Human Blueprint
      </button>
      <button
        onClick={() => onToggle('machine')}
        className={`px-6 py-3 font-semibold transition-colors duration-200 rounded-r-lg ${
          currentView === 'machine'
            ? 'bg-warm-gold/20 text-pure-white'
            : 'bg-transparent text-pure-white hover:bg-warm-gold/10'
        }`}
      >
        Machine Blueprint
      </button>
    </div>
  );
} 