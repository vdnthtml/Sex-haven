'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MessageBoxProps {
  message: string | null;
  onClose: () => void;
  type?: 'info' | 'success' | 'error' | 'warning';
  showConfirm?: boolean;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export default function MessageBox({ 
  message, 
  onClose, 
  type = 'info',
  showConfirm = false,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel'
}: MessageBoxProps) {
  if (!message) return null;

  const getIconColor = () => {
    switch (type) {
      case 'success': return 'text-green-500';
      case 'error': return 'text-alert-red';
      case 'warning': return 'text-yellow-500';
      default: return 'text-warm-gold';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success': return '✓';
      case 'error': return '✕';
      case 'warning': return '⚠';
      default: return 'ℹ';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-obsidian-black border border-gray-700 p-6 rounded-lg shadow-xl max-w-sm w-full text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Icon */}
          <div className={`text-4xl mb-4 ${getIconColor()}`}>
            {getIcon()}
          </div>

          {/* Message */}
          <p className="text-pure-white mb-6 text-lg">
            {message}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            {showConfirm && (
              <button
                onClick={onConfirm}
                className="px-4 py-2 rounded-lg font-semibold bg-warm-gold text-deep-charcoal hover:bg-yellow-400 transition-colors duration-200"
              >
                {confirmText}
              </button>
            )}
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                showConfirm 
                  ? 'bg-gray-600 text-pure-white hover:bg-gray-500' 
                  : 'bg-warm-gold text-deep-charcoal hover:bg-yellow-400'
              }`}
            >
              {showConfirm ? cancelText : 'Close'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 