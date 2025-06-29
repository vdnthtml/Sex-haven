'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getAnalysis } from '@/lib/firestore';
import { useAuth } from '@/lib/auth';
import BlueprintToggle from '@/components/BlueprintToggle';
import EnhancedButton from '@/components/EnhancedButton';
import { ArrowLeft, Copy, Download, Share2 } from 'lucide-react';

export default function BlueprintPage() {
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<'human' | 'machine'>('human');
  const [copied, setCopied] = useState(false);
  const { user } = useAuth();
  const params = useParams();
  const router = useRouter();
  const analysisId = params.id as string;

  useEffect(() => {
    const loadAnalysis = async () => {
      try {
        if (!user) {
          router.push('/login');
          return;
        }
        
        const analysisData = await getAnalysis(user.uid, analysisId);
        if (analysisData) {
          setAnalysis(analysisData);
        } else {
          // Handle not found
          router.push('/app/dashboard');
        }
      } catch (error) {
        console.error('Error loading analysis:', error);
        router.push('/app/dashboard');
      } finally {
        setLoading(false);
      }
    };

    if (analysisId) {
      loadAnalysis();
    }
  }, [analysisId, router, user]);

  const handleCopy = async () => {
    const content = activeView === 'human' 
      ? analysis?.humanBlueprint 
      : analysis?.machineBlueprint;
    
    if (content) {
      try {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  };

  const handleDownload = () => {
    const content = activeView === 'human' 
      ? analysis?.humanBlueprint 
      : analysis?.machineBlueprint;
    
    if (content) {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `blueprint-${analysisId}-${activeView}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Helixar Blueprint',
        text: 'Check out this viral video analysis!',
        url: window.location.href
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading blueprint...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold mb-4">Blueprint Not Found</h1>
            <p className="text-gray-400 mb-8">
              The analysis you're looking for doesn't exist or has been deleted.
            </p>
            <EnhancedButton
              onClick={() => router.push('/app/dashboard')}
              className="px-6 py-3"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </EnhancedButton>
          </div>
        </div>
      </div>
    );
  }

  const getVideoTitle = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return 'Invalid URL';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <EnhancedButton
            onClick={() => router.push('/app/dashboard')}
            variant="ghost"
            className="mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </EnhancedButton>
          
          <h1 className="text-4xl font-bold mb-2">Video Blueprint</h1>
          <p className="text-gray-400 text-lg">
            {getVideoTitle(analysis.videoUrl)}
          </p>
        </div>

        {/* Video Info */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm">Video URL</p>
              <p className="text-white break-all">{analysis.videoUrl}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Analysis Date</p>
              <p className="text-white">
                {new Date(analysis.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Blueprint Toggle */}
        <div className="mb-6">
          <BlueprintToggle
            currentView={activeView}
            onToggle={setActiveView}
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-6">
          <EnhancedButton
            onClick={handleCopy}
            variant="ghost"
            className="flex items-center"
          >
            <Copy className="w-4 h-4 mr-2" />
            {copied ? 'Copied!' : 'Copy'}
          </EnhancedButton>
          
          <EnhancedButton
            onClick={handleDownload}
            variant="ghost"
            className="flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </EnhancedButton>
          
          <EnhancedButton
            onClick={handleShare}
            variant="ghost"
            className="flex items-center"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </EnhancedButton>
        </div>

        {/* Blueprint Content */}
        <div className="bg-gray-900 rounded-2xl p-8">
          <div className="prose prose-invert max-w-none">
            {activeView === 'human' ? (
              <pre className="whitespace-pre-wrap text-white font-mono text-sm leading-relaxed">
                {analysis.humanBlueprint || 'No human blueprint available.'}
              </pre>
            ) : (
              <pre className="whitespace-pre-wrap text-white font-mono text-sm leading-relaxed">
                {analysis.machineBlueprint || 'No machine blueprint available.'}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 