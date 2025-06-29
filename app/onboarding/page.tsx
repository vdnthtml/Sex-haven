'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingLayout from './layout';
import WelcomeScreen from './welcome-screen';
import ProcessingScreen from './processing-screen';

type OnboardingStep = 'welcome' | 'processing';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [videoUrl, setVideoUrl] = useState('');
  const router = useRouter();

  const handleStartAnalysis = (url: string) => {
    setVideoUrl(url);
    setCurrentStep('processing');
  };

  const handleAnalysisComplete = (blueprintId: string) => {
    // Navigate to the blueprint viewer in the app
    router.push(`/app/blueprints/${blueprintId}`);
  };

  const handleAnalysisError = (error: string) => {
    console.error('Analysis error:', error);
    // Could implement error handling logic here
    // For now, we'll let the processing screen handle the error display
  };

  return (
    <OnboardingLayout>
      {currentStep === 'welcome' && (
        <WelcomeScreen onStartAnalysis={handleStartAnalysis} />
      )}
      
      {currentStep === 'processing' && (
        <ProcessingScreen
          videoUrl={videoUrl}
          onComplete={handleAnalysisComplete}
          onError={handleAnalysisError}
        />
      )}
    </OnboardingLayout>
  );
} 