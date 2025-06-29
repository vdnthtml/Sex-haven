'use client';

export interface GeminiResponse {
  humanBlueprint: string;
  machineBlueprint: string;
}

export interface GeminiRequest {
  videoUrl: string;
  userId: string;
  analysisId: string;
}

export interface AnalysisRequest {
  videoUrl: string;
  userId: string;
}

export interface AnalysisResponse {
  id: string;
  status: 'processing' | 'completed' | 'failed';
  humanBlueprint?: string;
  machineBlueprint?: string;
  error?: string;
}

export interface TallyResponse {
  success: boolean;
  message: string;
}

// DEMO MODE: Set to true to use mock data instead of real APIs
const DEMO_MODE = true;

// Mock Gemini AI analysis
export async function analyzeVideo(request: AnalysisRequest): Promise<AnalysisResponse> {
  // DEMO MODE: Use mock analysis
  if (DEMO_MODE) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Demo analysis results
    const humanBlueprint = `Human Blueprint Analysis

Video URL: ${request.videoUrl}

🎯 VIRAL ELEMENTS IDENTIFIED:
• Hook: Strong opening with immediate value proposition
• Storytelling: Personal narrative with emotional connection
• Visual Appeal: High-quality, engaging visuals
• Call-to-Action: Clear and compelling

📊 ENGAGEMENT PATTERNS:
• Peak engagement at 0:15-0:45 seconds
• Strong retention through first 60 seconds
• Effective use of text overlays
• Good pacing and rhythm

💡 OPTIMIZATION SUGGESTIONS:
• Add more text overlays for better accessibility
• Include trending hashtags in description
• Create follow-up content to build on this momentum
• Test different thumbnail variations

🔥 VIRAL POTENTIAL: HIGH (85/100)`;

    const machineBlueprint = JSON.stringify({
      analysis: {
        viralScore: 85,
        engagementRate: 0.78,
        retentionScore: 0.82,
        shareability: 0.91
      },
      elements: [
        "strong_hook",
        "emotional_storytelling", 
        "visual_appeal",
        "clear_cta"
      ],
      recommendations: [
        "add_text_overlays",
        "use_trending_hashtags",
        "create_follow_up_content",
        "test_thumbnails"
      ],
      timestamp: new Date().toISOString()
    }, null, 2);

    return {
      id: `demo-analysis-${Date.now()}`,
      status: 'completed',
      humanBlueprint,
      machineBlueprint
    };
  }

  // Real API call would go here
  throw new Error('Real API not implemented in demo mode');
}

// Mock Tally.so form submission
export async function submitFeedback(data: any): Promise<TallyResponse> {
  // DEMO MODE: Use mock submission
  if (DEMO_MODE) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: 'Demo: Feedback submitted successfully!'
    };
  }

  // Real API call would go here
  throw new Error('Real API not implemented in demo mode');
}

// Mock user data
export const mockUserData = {
  analyses: [
    {
      id: 'demo-analysis-1',
      videoUrl: 'https://www.youtube.com/watch?v=demo1',
      status: 'completed',
      createdAt: new Date(Date.now() - 86400000), // 1 day ago
      humanBlueprint: `Demo Analysis #1

🎯 VIRAL ELEMENTS:
• Compelling hook in first 3 seconds
• Strong visual storytelling
• Clear value proposition

📊 SCORE: 87/100`,
      machineBlueprint: JSON.stringify({
        viralScore: 87,
        engagementRate: 0.81,
        recommendations: ['optimize_thumbnail', 'add_captions']
      })
    },
    {
      id: 'demo-analysis-2', 
      videoUrl: 'https://www.youtube.com/watch?v=demo2',
      status: 'completed',
      createdAt: new Date(Date.now() - 172800000), // 2 days ago
      humanBlueprint: `Demo Analysis #2

🎯 VIRAL ELEMENTS:
• Emotional connection established early
• High-quality production value
• Effective call-to-action

📊 SCORE: 92/100`,
      machineBlueprint: JSON.stringify({
        viralScore: 92,
        engagementRate: 0.89,
        recommendations: ['create_series', 'cross_promote']
      })
    }
  ]
};

// Input sanitization utility
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets to prevent XSS
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .substring(0, 1000); // Limit length
};

// URL validation utility
export const isValidUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// Tally.so form submission (conceptual)
export const submitContactForm = async (formData: {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> => {
  // DEMO MODE: Use mock submission
  if (DEMO_MODE) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return Promise.resolve();
  }

  // Real implementation would go here
  await new Promise(resolve => setTimeout(resolve, 1000));
};

// Newsletter signup (conceptual)
export const subscribeToNewsletter = async (email: string): Promise<void> => {
  // DEMO MODE: Use mock subscription
  if (DEMO_MODE) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return Promise.resolve();
  }

  // Real implementation would go here
  await new Promise(resolve => setTimeout(resolve, 1000));
}; 