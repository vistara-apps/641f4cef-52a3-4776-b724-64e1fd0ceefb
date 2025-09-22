'use client';

import { useState } from 'react';
import { Home, Users, Briefcase, MessageCircle, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
  variant?: 'default' | 'compact';
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'feed', label: 'Feed', icon: Home },
  { id: 'network', label: 'Network', icon: Users },
  { id: 'initiatives', label: 'Initiatives', icon: Briefcase },
  { id: 'chat', label: 'Expert Q&A', icon: MessageCircle },
];

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const [activeTab, setActiveTab] = useState('feed');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isCompact = variant === 'compact';

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-surface shadow-card sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HP</span>
              </div>
              <h1 className={cn(
                "font-bold text-textPrimary",
                isCompact ? "text-lg" : "text-xl"
              )}>
                HealthPulse Hub
              </h1>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-smooth"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-surface shadow-modal">
            <nav className="p-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-smooth",
                      activeTab === item.id
                        ? "bg-primary text-white"
                        : "text-textSecondary hover:bg-gray-100 hover:text-textPrimary"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 pb-20 md:pb-4">
        <div className={cn(
          "py-6",
          isCompact && "py-4"
        )}>
          {children}
        </div>
      </main>

      {/* Bottom Navigation - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-gray-200 md:hidden">
        <div className="grid grid-cols-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex flex-col items-center justify-center py-3 px-2 transition-smooth",
                  activeTab === item.id
                    ? "text-primary"
                    : "text-textSecondary"
                )}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium truncate">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Navigation - Sidebar */}
      <aside className="hidden md:block fixed left-4 top-24 w-64">
        <nav className="bg-surface rounded-lg shadow-card p-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-smooth",
                    activeTab === item.id
                      ? "bg-primary text-white"
                      : "text-textSecondary hover:bg-gray-100 hover:text-textPrimary"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </aside>
    </div>
  );
}
