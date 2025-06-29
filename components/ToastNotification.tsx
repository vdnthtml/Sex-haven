'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

interface ToastNotificationProps {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
  isVisible: boolean;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  type,
  duration = 4000,
  onClose,
  isVisible
}) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsShowing(true);
      const timer = setTimeout(() => {
        setIsShowing(false);
        setTimeout(onClose, 300); // Wait for exit animation
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-warm-gold" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-alert-red" />;
      case 'info':
        return <Info className="w-5 h-5 text-warm-gold" />;
      default:
        return <Info className="w-5 h-5 text-warm-gold" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-obsidian-black border border-warm-gold/20';
      case 'error':
        return 'bg-obsidian-black border border-alert-red/20';
      case 'info':
        return 'bg-obsidian-black border border-warm-gold/20';
      default:
        return 'bg-obsidian-black border border-warm-gold/20';
    }
  };

  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.3 
          }}
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full mx-4 ${getBackgroundColor()} rounded-lg shadow-2xl backdrop-blur-sm`}
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              {getIcon()}
              <span className="text-pure-white text-sm font-medium">{message}</span>
            </div>
            <button
              onClick={() => {
                setIsShowing(false);
                setTimeout(onClose, 300);
              }}
              className="text-medium-grey hover:text-pure-white transition-colors duration-200 p-1 rounded-full hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastNotification; 