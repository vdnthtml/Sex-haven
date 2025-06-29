'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Brain } from 'lucide-react';

interface WelcomeScreenProps {
  onStartAnalysis: (videoUrl: string) => void;
}

export default function WelcomeScreen({ onStartAnalysis }: WelcomeScreenProps) {
  const [videoUrl, setVideoUrl] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateUrl = (url: string) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    const tiktokRegex = /^(https?:\/\/)?(www\.)?(tiktok\.com)\/.+/;
    const instagramRegex = /^(https?:\/\/)?(www\.)?(instagram\.com)\/.+/;
    
    return youtubeRegex.test(url) || tiktokRegex.test(url) || instagramRegex.test(url);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setVideoUrl(url);
    setIsValid(validateUrl(url));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid && videoUrl.trim()) {
      onStartAnalysis(videoUrl.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center"
    >
      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold text-pure-white mb-6">
        Welcome to Helixar. Start Crafting Viral.
      </h1>
      
      {/* Sub-headline */}
      <h2 className="text-xl md:text-2xl text-pure-white mb-12 max-w-3xl mx-auto">
        Transform any video into an intelligent blueprint for virality. Your first analysis begins now.
      </h2>
      
      {/* Contextual tip */}
      <p className="text-sm md:text-base text-medium-grey mb-6">
        Supports YouTube, TikTok, & Instagram links.
      </p>
      
      {/* Core action block */}
      <motion.div
        whileHover={{ borderColor: '#FFC700' }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="bg-obsidian-black border-2 border-dashed border-medium-grey rounded-xl p-8 md:p-12 w-full max-w-xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <Link className="w-16 h-16 text-warm-gold" />
              <Brain className="w-8 h-8 text-warm-gold absolute -bottom-2 -right-2" />
            </div>
          </div>
          
          {/* Prompt text */}
          <h3 className="text-xl md:text-2xl font-bold text-pure-white">
            Paste Video URL Here
          </h3>
          
          {/* Input field */}
          <input
            type="text"
            value={videoUrl}
            onChange={handleUrlChange}
            placeholder="https://www.youtube.com/watch?v=your-viral-video"
            className="w-full text-lg md:text-xl p-4 bg-transparent text-pure-white border-b border-medium-grey focus:border-warm-gold focus:outline-none placeholder-medium-grey"
          />
          
          {/* Primary CTA button */}
          <button
            type="submit"
            disabled={!isValid || !videoUrl.trim()}
            className="w-full px-8 py-4 text-xl font-bold rounded-lg bg-warm-gold text-deep-charcoal hover:bg-yellow-400 hover:shadow-lg hover:shadow-warm-gold/40 disabled:bg-medium-grey disabled:cursor-not-allowed disabled:shadow-none transition-all duration-200"
          >
            Analyze Video
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
} 