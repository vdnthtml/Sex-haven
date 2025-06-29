'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { createAnalysis, updateAnalysis } from '@/lib/firestore';
import { analyzeVideo } from '@/lib/api';
import { useRouter } from 'next/navigation';
import AIProgressBar from '@/components/AIProgressBar';
import EnhancedButton from '@/components/EnhancedButton';

interface ProcessingScreenProps {
  videoUrl: string;
  onComplete: (blueprintId: string) => void;
  onError: (error: string) => void;
}

const loadingMessages = [
  "Analyzing style DNA...",
  "Extracting virality triggers...",
  "Crafting your blueprint...",
  "Optimizing for impact..."
];

export default function ProcessingScreen({ videoUrl, onComplete, onError }: ProcessingScreenProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const [analysisId, setAnalysisId] = useState<string | null>(null);
  
  const { user, setMessage } = useAuth();
  const router = useRouter();

  // Cycle through loading messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Perform AI analysis
  useEffect(() => {
    const performAnalysis = async () => {
      if (!user) {
        setError('User not authenticated');
        onError('User not authenticated');
        return;
      }

      try {
        // Create analysis record in Firestore
        const newAnalysisId = await createAnalysis(user.uid, videoUrl);
        setAnalysisId(newAnalysisId);

        // Call Gemini API
        const result = await analyzeVideo(videoUrl);

        // Update analysis with results
        await updateAnalysis(user.uid, newAnalysisId, {
          status: 'completed',
          humanBlueprint: result.humanBlueprint,
          machineBlueprint: result.machineBlueprint
        });

        setMessage('Analysis complete!', 'success');
        onComplete(newAnalysisId);
        
        // Navigate to blueprint viewer
        router.push(`/app/blueprints/${newAnalysisId}`);
      } catch (err: any) {
        console.error('Analysis error:', err);
        const errorMessage = err.message || 'Analysis failed. Please try again.';
        setError(errorMessage);
        onError(errorMessage);
        
        // Update analysis status to failed
        if (analysisId && user) {
          await updateAnalysis(user.uid, analysisId, {
            status: 'failed',
            error: errorMessage
          });
        }
      }
    };

    performAnalysis();
  }, [user, videoUrl, onComplete, onError, setMessage, router, analysisId]);

  const handleRetry = async () => {
    setError(null);
    setIsRetrying(true);
    
    try {
      if (user && analysisId) {
        // Reset analysis status
        await updateAnalysis(user.uid, analysisId, {
          status: 'processing',
          error: undefined
        });
        
        // Retry the analysis
        const result = await analyzeVideo(videoUrl);

        await updateAnalysis(user.uid, analysisId, {
          status: 'completed',
          humanBlueprint: result.humanBlueprint,
          machineBlueprint: result.machineBlueprint
        });

        setMessage('Analysis complete!', 'success');
        onComplete(analysisId);
        router.push(`/app/blueprints/${analysisId}`);
      }
    } catch (err: any) {
      setError(err.message || 'Retry failed');
      if (user && analysisId) {
        await updateAnalysis(user.uid, analysisId, {
          status: 'failed',
          error: err.message
        });
      }
    } finally {
      setIsRetrying(false);
    }
  };

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="bg-obsidian-black border border-alert-red rounded-xl p-8 md:p-12 w-full max-w-xl mx-auto">
          <div className="text-alert-red text-6xl mb-6">⚠️</div>
          <h2 className="text-2xl md:text-3xl font-semibold text-pure-white mb-4">
            Analysis Failed
          </h2>
          <p className="text-medium-grey mb-8">
            {error}
          </p>
          <EnhancedButton
            onClick={handleRetry}
            disabled={isRetrying}
            variant="primary"
            size="lg"
            className="w-full md:w-auto"
          >
            {isRetrying ? 'Retrying...' : 'Try Again'}
          </EnhancedButton>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-deep-charcoal flex items-center justify-center overflow-hidden">
      {/* Animated background with noise texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-obsidian-black to-deep-charcoal"></div>
        <div className="absolute inset-0 bg-noise-texture animate-noise-texture"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-warm-gold rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        {/* Loading messages */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentMessageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-pure-white"
            >
              {loadingMessages[currentMessageIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Loading spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 mx-auto mb-8"
        >
          <Loader2 className="w-full h-full text-warm-gold" />
        </motion.div>

        {/* Enhanced Progress Bar */}
        <div className="w-full max-w-md mx-auto">
          <AIProgressBar
            isActive={!error}
            duration={8000}
            className="mb-4"
          />
          <p className="text-medium-grey text-sm">
            Processing your video...
          </p>
        </div>
      </motion.div>
    </div>
  );
} 