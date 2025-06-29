'use client';

import { mockUserData } from './api';

export interface Analysis {
  id: string;
  videoUrl: string;
  status: 'processing' | 'completed' | 'failed';
  createdAt: any;
  updatedAt: any;
  humanBlueprint?: string;
  machineBlueprint?: string;
  error?: string;
  userId: string;
}

export interface UserProfile {
  email: string;
  fullName: string;
  createdAt: any;
  updatedAt: any;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mock data storage
let mockAnalyses: Analysis[] = mockUserData.analyses.map(analysis => ({
  ...analysis,
  userId: 'demo-user-id',
  createdAt: analysis.createdAt,
  updatedAt: analysis.createdAt,
  status: analysis.status as 'processing' | 'completed' | 'failed'
}));

let mockUsers: User[] = [
  {
    uid: 'demo-user-id',
    email: 'demo@helixar.com',
    displayName: 'Demo User',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Create a new analysis
export const createAnalysis = async (userId: string, videoUrl: string): Promise<string> => {
  const newAnalysis: Analysis = {
    id: `analysis-${Date.now()}`,
    videoUrl,
    status: 'processing',
    userId,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  mockAnalyses.push(newAnalysis);
  return newAnalysis.id;
};

// Get all analyses for a user
export const getUserAnalyses = async (userId: string): Promise<Analysis[]> => {
  return mockAnalyses.filter(analysis => analysis.userId === userId);
};

// Get a specific analysis
export const getAnalysis = async (userId: string, analysisId: string): Promise<Analysis | null> => {
  const analysis = mockAnalyses.find(a => a.id === analysisId);
  return analysis || null;
};

// Update analysis status and results
export const updateAnalysis = async (
  userId: string, 
  analysisId: string, 
  updates: Partial<Analysis>
): Promise<void> => {
  const index = mockAnalyses.findIndex(a => a.id === analysisId);
  if (index !== -1) {
    mockAnalyses[index] = { 
      ...mockAnalyses[index], 
      ...updates, 
      updatedAt: new Date() 
    };
  }
};

// Delete an analysis
export const deleteAnalysis = async (userId: string, analysisId: string): Promise<void> => {
  mockAnalyses = mockAnalyses.filter(a => a.id !== analysisId);
};

// Subscribe to user's analyses in real-time
export const subscribeToUserAnalyses = (
  userId: string, 
  callback: (analyses: Analysis[]) => void
) => {
  const analyses = mockAnalyses.filter(analysis => analysis.userId === userId);
  callback(analyses);
  
  // Return unsubscribe function
  return () => {};
};

// Get user profile
export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  const user = mockUsers.find(u => u.uid === userId);
  return user ? {
    email: user.email,
    fullName: user.displayName || '',
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  } : null;
};

// Update user profile
export const updateUserProfile = async (
  userId: string, 
  updates: Partial<UserProfile>
): Promise<void> => {
  const index = mockUsers.findIndex(u => u.uid === userId);
  if (index !== -1) {
    mockUsers[index] = { 
      ...mockUsers[index], 
      ...updates, 
      updatedAt: new Date() 
    };
  }
};

// Mock real-time listeners (simplified)
export const onAnalysesSnapshot = (userId: string, callback: (analyses: Analysis[]) => void) => {
  // Simulate real-time updates
  const analyses = mockAnalyses.filter(analysis => analysis.userId === userId);
  callback(analyses);
  
  // Return unsubscribe function
  return () => {};
};

export const onUserSnapshot = (uid: string, callback: (user: User | null) => void) => {
  // Simulate real-time updates
  const user = mockUsers.find(u => u.uid === uid) || null;
  callback(user);
  
  // Return unsubscribe function
  return () => {};
}; 