"use client";

import { useState, useEffect } from 'react';

export function useMobileNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'main' | 'services'>('main');
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(null);

  // Close all menus
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setCurrentView('main');
    setActiveServiceCategory(null);
  };

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAllMenus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Reset navigation state when menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setCurrentView('main');
      setActiveServiceCategory(null);
    }
  }, [isMobileMenuOpen]);

  return {
    // State
    isMobileMenuOpen,
    isSearchOpen,
    currentView,
    activeServiceCategory,
    
    // Actions
    setIsMobileMenuOpen,
    setIsSearchOpen,
    setCurrentView,
    setActiveServiceCategory,
    closeAllMenus,
  };
}