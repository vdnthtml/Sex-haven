// Analytics utility for cost-controlled event tracking
// Only logs high-value conversion events to stay within free tier limits

interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

class Analytics {
  private isInitialized = false;
  private consentGiven = false;

  // Initialize analytics (called after cookie consent)
  init(consentCategories: string[]) {
    if (consentCategories.includes('analytics')) {
      this.consentGiven = true;
      this.isInitialized = true;
      
      // Initialize Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // Removed all console.log statements for production polish
      }
    }
  }

  // Track page views (only if consent given)
  trackPageView(page: string) {
    if (!this.consentGiven) return;
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: page,
        page_title: document.title
      });
    }
  }

  // Track conversion events (sparingly used)
  trackEvent(event: AnalyticsEvent) {
    if (!this.consentGiven) return;
    
    // Only track high-value events to stay within free limits
    const highValueEvents = [
      'signup_complete',
      'login_success', 
      'analysis_started',
      'blueprint_viewed',
      'copy_blueprint',
      'contact_form_submit'
    ];
    
    if (!highValueEvents.includes(event.event)) {
      return;
    }
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.event, {
        event_category: event.category || 'engagement',
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }
  }

  // Track signup completion
  trackSignup(method: 'email' | 'google') {
    this.trackEvent({
      event: 'signup_complete',
      category: 'user_engagement',
      action: 'signup',
      label: method,
      custom_parameters: {
        signup_method: method
      }
    });
  }

  // Track login success
  trackLogin(method: 'email' | 'google') {
    this.trackEvent({
      event: 'login_success',
      category: 'user_engagement',
      action: 'login',
      label: method,
      custom_parameters: {
        login_method: method
      }
    });
  }

  // Track analysis start
  trackAnalysisStart(platform?: string) {
    this.trackEvent({
      event: 'analysis_started',
      category: 'content_analysis',
      action: 'start_analysis',
      label: platform,
      custom_parameters: {
        platform: platform || 'unknown'
      }
    });
  }

  // Track blueprint view
  trackBlueprintView(analysisId: string) {
    this.trackEvent({
      event: 'blueprint_viewed',
      category: 'content_analysis',
      action: 'view_blueprint',
      label: analysisId,
      custom_parameters: {
        analysis_id: analysisId
      }
    });
  }

  // Track blueprint copy
  trackBlueprintCopy(analysisId: string, type: 'human' | 'machine') {
    this.trackEvent({
      event: 'copy_blueprint',
      category: 'content_analysis',
      action: 'copy_blueprint',
      label: type,
      custom_parameters: {
        analysis_id: analysisId,
        blueprint_type: type
      }
    });
  }

  // Track contact form submission
  trackContactSubmit() {
    this.trackEvent({
      event: 'contact_form_submit',
      category: 'user_engagement',
      action: 'submit_form',
      label: 'contact'
    });
  }

  // Get analytics status
  getStatus() {
    return {
      initialized: this.isInitialized,
      consentGiven: this.consentGiven,
      gtagAvailable: typeof window !== 'undefined' && !!(window as any).gtag
    };
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Export convenience functions
export const trackPageView = (page: string) => analytics.trackPageView(page);
export const trackSignup = (method: 'email' | 'google') => analytics.trackSignup(method);
export const trackLogin = (method: 'email' | 'google') => analytics.trackLogin(method);
export const trackAnalysisStart = (platform?: string) => analytics.trackAnalysisStart(platform);
export const trackBlueprintView = (analysisId: string) => analytics.trackBlueprintView(analysisId);
export const trackBlueprintCopy = (analysisId: string, type: 'human' | 'machine') => analytics.trackBlueprintCopy(analysisId, type);
export const trackContactSubmit = () => analytics.trackContactSubmit(); 