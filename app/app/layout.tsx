'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../../components/Sidebar';
import MessageBox from '../../components/MessageBox';
import { AuthProvider, useAuth } from '@/lib/auth';

function AppContent({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'info' | 'success' | 'error' | 'warning'>('info');
  const { user, loading } = useAuth();

  // Global message handler
  const handleGlobalMessage = (msg: string, type: 'info' | 'success' | 'error' | 'warning') => {
    setMessageType(type);
    setMessage(msg);
    
    // Auto-hide success and info messages after 5 seconds
    if (type === 'success' || type === 'info') {
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  // Expose message handler globally
  useEffect(() => {
    (window as any).setGlobalMessage = handleGlobalMessage;
    return () => {
      delete (window as any).setGlobalMessage;
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-charcoal flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-warm-gold mx-auto mb-4"></div>
          <p className="text-pure-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-deep-charcoal flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pure-white mb-4">
            Please log in to access the app
          </h2>
          <button
            onClick={() => window.location.href = '/login'}
            className="px-6 py-3 rounded-lg font-semibold bg-warm-gold text-deep-charcoal hover:bg-yellow-400 transition-colors duration-200"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-deep-charcoal">
      {/* Sidebar */}
      <Sidebar user={user} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Global MessageBox */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <MessageBox
              message={message}
              type={messageType}
              onClose={() => setMessage(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AppContent>{children}</AppContent>
    </AuthProvider>
  );
} 