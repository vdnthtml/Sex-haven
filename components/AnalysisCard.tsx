'use client';

import { motion } from 'framer-motion';
import { Eye, Trash2, ExternalLink } from 'lucide-react';

interface Analysis {
  id: string;
  videoUrl: string;
  status: 'processing' | 'completed' | 'failed';
  createdAt: any; // Firestore timestamp
  humanBlueprint?: string;
  machineBlueprint?: string;
}

interface AnalysisCardProps {
  analysis: Analysis;
  onViewBlueprint: (analysisId: string) => void;
  onDelete: (analysisId: string) => void;
}

export default function AnalysisCard({ analysis, onViewBlueprint, onDelete }: AnalysisCardProps) {
  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getVideoTitle = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return 'Invalid URL';
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          bg: 'bg-green-500',
          text: 'text-deep-charcoal',
          label: 'Completed'
        };
      case 'processing':
        return {
          bg: 'bg-warm-gold',
          text: 'text-deep-charcoal',
          label: 'Processing'
        };
      case 'failed':
        return {
          bg: 'bg-alert-red',
          text: 'text-pure-white',
          label: 'Failed'
        };
      default:
        return {
          bg: 'bg-medium-grey',
          text: 'text-deep-charcoal',
          label: 'Unknown'
        };
    }
  };

  const statusConfig = getStatusConfig(analysis.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 rounded-lg shadow-md flex flex-col bg-obsidian-black border border-gray-700 hover:border-warm-gold/50 transition-colors"
    >
      {/* Date */}
      <p className="text-sm font-semibold mb-2 text-medium-grey">
        {formatDate(analysis.createdAt)}
      </p>

      {/* Video Title */}
      <h3 className="text-xl font-bold mb-3 text-pure-white">
        {getVideoTitle(analysis.videoUrl)}
      </h3>

      {/* Video URL */}
      <p className="text-sm mb-4 truncate text-medium-grey">
        {analysis.videoUrl}
      </p>

      {/* Status Badge */}
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${statusConfig.bg} ${statusConfig.text}`}>
        {statusConfig.label}
      </span>

      {/* Action Buttons */}
      <div className="mt-auto flex justify-end space-x-3">
        <button
          onClick={() => onViewBlueprint(analysis.id)}
          disabled={analysis.status !== 'completed'}
          className="px-4 py-2 rounded-lg text-sm font-semibold bg-warm-gold text-deep-charcoal hover:bg-yellow-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <Eye className="w-4 h-4" />
          <span>View Blueprint</span>
        </button>
        
        <button
          onClick={() => onDelete(analysis.id)}
          className="px-4 py-2 rounded-lg text-sm font-semibold bg-alert-red text-pure-white hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
        >
          <Trash2 className="w-4 h-4" />
          <span>Delete</span>
        </button>
      </div>
    </motion.div>
  );
} 