'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthUser {
  uid: string;
  email: string;
  displayName?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserPassword: (newPassword: string) => Promise<void>;
  setMessage: (message: string, type: 'info' | 'success' | 'error' | 'warning') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // AUTO-LOGIN DEMO USER - BYPASSING LOGIN REQUIREMENTS
    const demoUser: AuthUser = {
      uid: 'demo-user-id',
      email: 'demo@helixar.com',
      displayName: 'Demo User'
    };
    
    // Simulate loading delay
    setTimeout(() => {
      setUser(demoUser);
      setLoading(false);
    }, 1000);
  }, []);

  const signIn = async (email: string, password: string) => {
    // Auto-login demo user regardless of credentials
    const demoUser: AuthUser = {
      uid: 'demo-user-id',
      email: email || 'demo@helixar.com',
      displayName: 'Demo User'
    };
    setUser(demoUser);
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    // Auto-create demo user
    const demoUser: AuthUser = {
      uid: 'demo-user-id',
      email: email,
      displayName: fullName
    };
    setUser(demoUser);
  };

  const signInWithGoogle = async () => {
    // Auto-login demo Google user
    const demoUser: AuthUser = {
      uid: 'demo-google-user-id',
      email: 'demo@gmail.com',
      displayName: 'Demo Google User'
    };
    setUser(demoUser);
  };

  const logout = async () => {
    // Auto-login demo user again after logout
    setTimeout(() => {
      const demoUser: AuthUser = {
        uid: 'demo-user-id',
        email: 'demo@helixar.com',
        displayName: 'Demo User'
      };
      setUser(demoUser);
    }, 1000);
  };

  const resetPassword = async (email: string) => {
    // Mock successful password reset
  };

  const updateUserPassword = async (newPassword: string) => {
    // Mock successful password update
    if (!user) throw new Error('No user logged in');
  };

  const setMessage = (message: string, type: 'info' | 'success' | 'error' | 'warning') => {
    // This will be connected to the global MessageBox component
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    logout,
    resetPassword,
    updateUserPassword,
    setMessage
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 