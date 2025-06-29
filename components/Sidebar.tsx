'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Plus, 
  Settings, 
  Menu,
  X 
} from 'lucide-react';

interface SidebarProps {
  user?: {
    email?: string | null;
    uid?: string;
  } | null;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/app/dashboard' },
  { id: 'new-analysis', label: 'New Analysis', icon: Plus, path: '/app/new-analysis' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/app/settings' },
];

export default function Sidebar({ user }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileOpen(false);
  };

  const getCurrentView = () => {
    if (pathname.includes('/dashboard')) return 'dashboard';
    if (pathname.includes('/new-analysis')) return 'new-analysis';
    if (pathname.includes('/settings')) return 'settings';
    if (pathname.includes('/blueprints')) return 'dashboard';
    return 'dashboard';
  };

  const currentView = getCurrentView();

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-obsidian-black rounded-lg border border-medium-grey"
      >
        {isMobileOpen ? (
          <X className="w-6 h-6 text-pure-white" />
        ) : (
          <Menu className="w-6 h-6 text-pure-white" />
        )}
      </button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -256 }}
        animate={{ x: isMobileOpen ? 0 : -256 }}
        className={`fixed lg:relative lg:translate-x-0 top-0 left-0 h-full w-64 bg-obsidian-black rounded-r-lg shadow-lg z-40 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-warm-gold">Helixar</h1>
            <p className="text-sm mt-1 text-medium-grey">AI Video Intelligence</p>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                        isActive
                          ? 'bg-warm-gold/20 text-warm-gold font-semibold'
                          : 'text-pure-white hover:bg-warm-gold/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Info Section */}
          <div className="mt-auto p-4 rounded-lg bg-deep-charcoal">
            <label className="text-xs text-medium-grey block mb-1">
              Logged in as:
            </label>
            <p className="font-semibold text-sm text-pure-white mb-2">
              {user?.email || 'N/A'}
            </p>
            <p className="text-xs break-all text-medium-grey">
              Full ID: {user?.uid || 'N/A'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
} 