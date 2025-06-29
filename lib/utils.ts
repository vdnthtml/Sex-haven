'use client';

// Validate video URL format
export const validateVideoUrl = (url: string): boolean => {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
  const tiktokRegex = /^(https?:\/\/)?(www\.)?(tiktok\.com)\/.+/;
  const instagramRegex = /^(https?:\/\/)?(www\.)?(instagram\.com)\/.+/;
  
  return youtubeRegex.test(url) || tiktokRegex.test(url) || instagramRegex.test(url);
};

// Format date for display
export const formatDate = (date: Date | any): string => {
  if (!date) return 'Unknown';
  
  const d = date instanceof Date ? date : date.toDate ? date.toDate() : new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Get status color for analysis
export const getStatusColor = (status: 'processing' | 'completed' | 'failed'): string => {
  switch (status) {
    case 'processing':
      return 'text-warm-gold';
    case 'completed':
      return 'text-green-500';
    case 'failed':
      return 'text-alert-red';
    default:
      return 'text-medium-grey';
  }
};

// Get status background color for analysis
export const getStatusBgColor = (status: 'processing' | 'completed' | 'failed'): string => {
  switch (status) {
    case 'processing':
      return 'bg-warm-gold/10';
    case 'completed':
      return 'bg-green-500/10';
    case 'failed':
      return 'bg-alert-red/10';
    default:
      return 'bg-medium-grey/10';
  }
};

// Truncate text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Generate a random ID
export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  // This would check Firebase auth state
  // For now, return false as placeholder
  return false;
};

// Get user ID from auth
export const getUserId = (): string | null => {
  // This would get the current user's ID from Firebase auth
  // For now, return null as placeholder
  return null;
};

// Performance monitoring utilities (development only)
export const performanceUtils = {
  // Log component render time
  logRenderTime: (componentName: string, startTime: number) => {
    if (process.env.NODE_ENV === 'development') {
      const renderTime = performance.now() - startTime;
      console.log(`[PERF] ${componentName} render: ${renderTime.toFixed(2)}ms`);
    }
  },

  // Log API call performance
  logApiCall: (endpoint: string, startTime: number, success: boolean) => {
    if (process.env.NODE_ENV === 'development') {
      const duration = performance.now() - startTime;
      const status = success ? 'SUCCESS' : 'FAILED';
      console.log(`[PERF] API ${endpoint}: ${duration.toFixed(2)}ms (${status})`);
    }
  },

  // Log page load performance
  logPageLoad: (pageName: string) => {
    if (process.env.NODE_ENV === 'development') {
      const loadTime = performance.now();
      console.log(`[PERF] ${pageName} load time: ${loadTime.toFixed(2)}ms`);
      
      // Log Core Web Vitals if available
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'largest-contentful-paint') {
                console.log(`[PERF] LCP: ${entry.startTime.toFixed(2)}ms`);
              }
              if (entry.entryType === 'first-input') {
                const firstInputEntry = entry as PerformanceEventTiming;
                console.log(`[PERF] FID: ${firstInputEntry.processingStart - firstInputEntry.startTime}ms`);
              }
            }
          });
          observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
        } catch (error) {
          console.log('[PERF] Core Web Vitals not available');
        }
      }
    }
  },

  // Log animation performance
  logAnimationFrame: (animationName: string, frameTime: number) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[PERF] Animation ${animationName}: ${frameTime.toFixed(2)}ms`);
    }
  }
}; 