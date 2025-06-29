'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { analyzeVideo } from '@/lib/api';
import { createAnalysis, updateAnalysis } from '@/lib/firestore';
import { useAuth } from '@/lib/auth';
import EnhancedInput from '@/components/EnhancedInput';
import EnhancedButton from '@/components/EnhancedButton';
import AIProgressBar from '@/components/AIProgressBar';
import MessageBox from '@/components/MessageBox';

export default function NewAnalysisPage() {
  const [videoUrl, setVideoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'info' | 'success' | 'error' | 'warning' } | null>(null);
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!videoUrl.trim()) {
      setMessage({ text: 'Please enter a video URL', type: 'error' });
      return;
    }

    if (!user) {
      setMessage({ text: 'Please log in to analyze videos', type: 'error' });
      return;
    }

    setIsAnalyzing(true);
    setMessage({ text: 'Starting analysis...', type: 'info' });

    try {
      // Create analysis record
      const analysisId = await createAnalysis(user.uid, videoUrl.trim());

      // Analyze video
      const result = await analyzeVideo({
        videoUrl: videoUrl.trim(),
        userId: user.uid
      });

      // Update analysis with results
      await updateAnalysis(user.uid, analysisId, {
        status: 'completed',
        humanBlueprint: result.humanBlueprint,
        machineBlueprint: result.machineBlueprint
      });

      setMessage({ text: 'Analysis completed successfully!', type: 'success' });

      // Redirect to analysis results
      setTimeout(() => {
        router.push(`/app/blueprints/${analysisId}`);
      }, 1500);

    } catch (error: any) {
      setMessage({ 
        text: error.message || 'Failed to analyze video. Please try again.', 
        type: 'error' 
      });
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">New Analysis</h1>
          <p className="text-gray-400 text-lg">
            Paste a video URL to analyze its viral potential and get actionable insights.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="videoUrl" className="block text-sm font-medium mb-2">
                Video URL
              </label>
              <EnhancedInput
                id="videoUrl"
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                disabled={isAnalyzing}
                required
              />
              <p className="text-sm text-gray-500 mt-2">
                Supports YouTube, TikTok, Instagram, and other major platforms
              </p>
            </div>

            <EnhancedButton
              type="submit"
              disabled={isAnalyzing || !videoUrl.trim()}
              className="w-full"
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze Video'}
            </EnhancedButton>
          </form>
        </div>

        {isAnalyzing && (
          <div className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Analysis Progress</h2>
            <AIProgressBar isActive={isAnalyzing} duration={3000} />
            <div className="mt-4 text-center">
              <p className="text-gray-400">
                Our AI is analyzing your video for viral elements, engagement patterns, and optimization opportunities...
              </p>
            </div>
          </div>
        )}

        {message && (
          <MessageBox
            message={message.text}
            type={message.type}
            onClose={() => setMessage(null)}
          />
        )}
      </div>
    </div>
  );
} 