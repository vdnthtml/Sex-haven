'use client';

import React, { useCallback } from 'react';
import CookieConsent from '@/components/CookieConsent';
import FeedbackWidget from '@/components/FeedbackWidget';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const handleCookieAccept = useCallback((categories: string[]) => {
    if (categories.includes('analytics') && GA_MEASUREMENT_ID) {
      // Google Analytics will be loaded via Script component
    }
  }, []);

  const handleCookieDecline = useCallback(() => {
  }, []);

  return (
    <>
      {children}
      <CookieConsent onAccept={handleCookieAccept} onDecline={handleCookieDecline} />
      <FeedbackWidget />
    </>
  );
} 