'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { LogOut, User, Shield, Bell, HelpCircle } from 'lucide-react';

export default function SettingsPage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { user, logout, setMessage } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      setMessage('Logged out successfully', 'success');
      // Redirect to marketing site homepage
      router.push('/');
    } catch (error: any) {
      setMessage('Failed to log out', 'error');
      console.error('Logout error:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col h-full p-6">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-pure-white mb-4">
              Please log in to access settings
            </h2>
            <button
              onClick={() => router.push('/login')}
              className="px-6 py-3 rounded-lg font-semibold bg-warm-gold text-deep-charcoal hover:bg-yellow-400 transition-colors duration-200"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-pure-white">
          Settings
        </h1>
        <p className="text-lg text-medium-grey mt-2">
          Manage your account and preferences
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Account Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-obsidian-black border border-medium-grey rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-6 h-6 text-warm-gold" />
            <h2 className="text-xl font-semibold text-pure-white">Account Information</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-medium-grey">Email</label>
              <p className="text-pure-white">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-medium-grey">User ID</label>
              <p className="text-pure-white font-mono text-sm">{user.uid}</p>
            </div>
          </div>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-obsidian-black border border-medium-grey rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-warm-gold" />
            <h2 className="text-xl font-semibold text-pure-white">Security</h2>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg border border-medium-grey hover:border-warm-gold transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pure-white font-medium">Change Password</p>
                  <p className="text-medium-grey text-sm">Update your account password</p>
                </div>
                <div className="text-medium-grey">→</div>
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border border-medium-grey hover:border-warm-gold transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pure-white font-medium">Two-Factor Authentication</p>
                  <p className="text-medium-grey text-sm">Add an extra layer of security</p>
                </div>
                <div className="text-medium-grey">→</div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-obsidian-black border border-medium-grey rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="w-6 h-6 text-warm-gold" />
            <h2 className="text-xl font-semibold text-pure-white">Notifications</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pure-white font-medium">Analysis Complete</p>
                <p className="text-medium-grey text-sm">Get notified when your analysis is ready</p>
              </div>
              <button className="w-12 h-6 bg-warm-gold rounded-full relative">
                <div className="w-4 h-4 bg-deep-charcoal rounded-full absolute right-1 top-1 transition-transform"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pure-white font-medium">Weekly Insights</p>
                <p className="text-medium-grey text-sm">Receive weekly content strategy tips</p>
              </div>
              <button className="w-12 h-6 bg-medium-grey rounded-full relative">
                <div className="w-4 h-4 bg-deep-charcoal rounded-full absolute left-1 top-1 transition-transform"></div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Help & Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-obsidian-black border border-medium-grey rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <HelpCircle className="w-6 h-6 text-warm-gold" />
            <h2 className="text-xl font-semibold text-pure-white">Help & Support</h2>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => router.push('/contact')}
              className="w-full text-left p-3 rounded-lg border border-medium-grey hover:border-warm-gold transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pure-white font-medium">Contact Support</p>
                  <p className="text-medium-grey text-sm">Get help from our team</p>
                </div>
                <div className="text-medium-grey">→</div>
              </div>
            </button>
            <button 
              onClick={() => router.push('/resources')}
              className="w-full text-left p-3 rounded-lg border border-medium-grey hover:border-warm-gold transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pure-white font-medium">Documentation</p>
                  <p className="text-medium-grey text-sm">Learn how to use Helixar</p>
                </div>
                <div className="text-medium-grey">→</div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Logout Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-obsidian-black border border-alert-red/30 rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <LogOut className="w-6 h-6 text-alert-red" />
            <h2 className="text-xl font-semibold text-pure-white">Account</h2>
          </div>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full px-6 py-3 rounded-lg font-semibold bg-alert-red text-pure-white hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {isLoggingOut ? (
              <>
                <div className="w-4 h-4 border-2 border-pure-white border-t-transparent rounded-full animate-spin"></div>
                <span>Logging Out...</span>
              </>
            ) : (
              <>
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
} 