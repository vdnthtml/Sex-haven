// DEMO MODE: Mock Firebase for demonstration purposes
// This file provides mock Firebase objects to run the app without real Firebase

// Mock Firebase configuration
const mockFirebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "demo-project.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:demo123"
};

// Mock Firebase app
const mockApp = {
  name: '[DEFAULT]',
  options: mockFirebaseConfig
};

// Mock auth object
const mockAuth = {
  currentUser: null,
  onAuthStateChanged: (callback: (user: any) => void) => {
    // Simulate no user logged in initially
    callback(null);
    return () => {};
  },
  signInWithEmailAndPassword: async () => {
    throw new Error('Demo mode: Authentication disabled');
  },
  signInWithPopup: async () => {
    throw new Error('Demo mode: Authentication disabled');
  },
  signOut: async () => {
    // Mock successful sign out
  },
  sendPasswordResetEmail: async () => {
    // Mock successful password reset
  },
  updatePassword: async () => {
    // Mock successful password update
  }
};

// Mock Firestore object
const mockFirestore = {
  collection: () => ({
    doc: () => ({
      set: async () => ({ id: 'demo-analysis-id' }),
      get: async () => ({
        exists: true,
        data: () => ({
          id: 'demo-analysis-id',
          videoUrl: 'https://www.youtube.com/watch?v=demo',
          status: 'completed',
          createdAt: new Date(),
          humanBlueprint: 'Demo Human Blueprint\n\nThis is a sample analysis result for demonstration purposes.\n\nKey Insights:\n- Sample viral elements\n- Demo engagement patterns\n- Mock optimization suggestions',
          machineBlueprint: 'Demo Machine Blueprint\n\n{"analysis": "demo", "elements": ["sample"], "score": 85}'
        })
      }),
      update: async () => ({})
    }),
    add: async () => ({ id: 'demo-analysis-id' })
  })
};

// Export mock objects
export const auth = mockAuth;
export const db = mockFirestore;
export const demoAuth = mockAuth;
export const demoDb = mockFirestore;

export default mockApp; 