'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { getUserAnalyses } from '@/lib/firestore';
import AnalysisCard from '@/components/AnalysisCard';
import EnhancedButton from '@/components/EnhancedButton';
import { Plus, TrendingUp, BarChart3, Zap } from 'lucide-react';

export default function DashboardPage() {
  const [analyses, setAnalyses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const loadAnalyses = async () => {
      if (user) {
        try {
          const userAnalyses = await getUserAnalyses(user.uid);
          setAnalyses(userAnalyses);
        } catch (error) {
          console.error('Error loading analyses:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadAnalyses();
  }, [user]);

  const stats = {
    totalAnalyses: analyses.length,
    completedAnalyses: analyses.filter(a => a.status === 'completed').length,
    averageScore: analyses.length > 0 
      ? Math.round(analyses.reduce((sum, a) => {
          try {
            const data = JSON.parse(a.machineBlueprint || '{}');
            return sum + (data.analysis?.viralScore || 0);
          } catch {
            return sum;
          }
        }, 0) / analyses.length)
      : 0
  };

  const handleViewBlueprint = (analysisId: string) => {
    router.push(`/app/blueprints/${analysisId}`);
  };

  const handleDeleteAnalysis = async (analysisId: string) => {
    // Demo mode: just remove from local state
    setAnalyses(prev => prev.filter(a => a.id !== analysisId));
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Welcome to Helixar</h1>
            <p className="text-gray-400 text-lg mb-8">
              Please log in to access your dashboard and start analyzing videos.
            </p>
            <EnhancedButton
              onClick={() => router.push('/login')}
              className="px-8 py-3"
            >
              Log In
            </EnhancedButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400 text-lg">
            Welcome back, {user.displayName || user.email}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Analyses</p>
                <p className="text-3xl font-bold">{stats.totalAnalyses}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Completed</p>
                <p className="text-3xl font-bold">{stats.completedAnalyses}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg. Viral Score</p>
                <p className="text-3xl font-bold">{stats.averageScore}/100</p>
              </div>
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-8">
          <EnhancedButton
            onClick={() => router.push('/app/new-analysis')}
            className="px-6 py-3"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Analysis
          </EnhancedButton>
        </div>

        {/* Analyses List */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Analyses</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading your analyses...</p>
            </div>
          ) : analyses.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-900 rounded-2xl p-8 max-w-md mx-auto">
                <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No analyses yet</h3>
                <p className="text-gray-400 mb-6">
                  Start by analyzing your first video to see insights and recommendations.
                </p>
                <EnhancedButton
                  onClick={() => router.push('/app/new-analysis')}
                  className="w-full"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create Your First Analysis
                </EnhancedButton>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analyses.map((analysis) => (
                <AnalysisCard
                  key={analysis.id}
                  analysis={analysis}
                  onViewBlueprint={handleViewBlueprint}
                  onDelete={handleDeleteAnalysis}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 