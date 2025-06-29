'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

interface CookieConsentProps {
  onAccept: (categories: string[]) => void;
  onDecline: () => void;
}

export default function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState({
    essential: true, // Always required
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('helixar-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const categories = Object.entries(selectedCategories)
      .filter(([_, selected]) => selected)
      .map(([category]) => category);
    
    localStorage.setItem('helixar-cookie-consent', JSON.stringify({
      categories,
      timestamp: new Date().toISOString()
    }));
    
    onAccept(categories);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('helixar-cookie-consent', JSON.stringify({
      categories: ['essential'],
      timestamp: new Date().toISOString()
    }));
    
    onDecline();
    setIsVisible(false);
  };

  const toggleCategory = (category: keyof typeof selectedCategories) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    setSelectedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <Cookie className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 
                  id="cookie-consent-title"
                  className="text-lg font-semibold text-gray-900 mb-2"
                >
                  We use cookies to enhance your experience
                </h3>
                <p 
                  id="cookie-consent-description"
                  className="text-sm text-gray-600 mb-4"
                >
                  We use cookies to analyze site traffic, personalize content, and provide social media features. 
                  You can choose which cookies to accept.
                </p>
                
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="space-y-3 mb-4"
                  >
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                        <p className="text-sm text-gray-600">Required for the website to function properly</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedCategories.essential}
                        disabled
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                        <p className="text-sm text-gray-600">Help us understand how visitors interact with our website</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedCategories.analytics}
                        onChange={() => toggleCategory('analytics')}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                        <p className="text-sm text-gray-600">Used to deliver personalized advertisements</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedCategories.marketing}
                        onChange={() => toggleCategory('marketing')}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                  </motion.div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-sm text-blue-600 hover:text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    {showDetails ? 'Hide details' : 'Customize preferences'}
                  </button>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label="Close cookie consent"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Accept Selected
            </button>
            <button
              onClick={handleDecline}
              className="px-4 py-2 bg-gray-200 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Decline All
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 