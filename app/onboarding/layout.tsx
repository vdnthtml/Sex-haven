import { ReactNode } from 'react';

interface OnboardingLayoutProps {
  children: ReactNode;
}

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <div 
      className="min-h-screen w-full bg-deep-charcoal flex items-center justify-center"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
      }}
    >
      <div className="w-full max-w-4xl px-4">
        {children}
      </div>
    </div>
  );
} 