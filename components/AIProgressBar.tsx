'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AIProgressBarProps {
  isActive: boolean;
  duration?: number;
  onComplete?: () => void;
  className?: string;
}

const AIProgressBar: React.FC<AIProgressBarProps> = ({
  isActive,
  duration = 8000,
  onComplete,
  className = ''
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        onComplete?.();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isActive, duration, onComplete]);

  if (!isActive) return null;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative h-2 bg-obsidian-black rounded-full overflow-hidden">
        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
          className="h-full bg-warm-gold rounded-full relative"
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
      
      {/* Progress percentage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2 text-center"
      >
        <span className="text-sm text-medium-grey">
          {Math.round(progress)}% Complete
        </span>
      </motion.div>
    </div>
  );
};

export default AIProgressBar; 