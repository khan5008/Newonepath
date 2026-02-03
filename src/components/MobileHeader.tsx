"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Search } from "lucide-react";
import MobileNavigation from "./MobileNavigation";

interface MobileHeaderProps {
  headerIsWhite?: boolean;
}

export default function MobileHeader({ headerIsWhite = false }: MobileHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Minimal Mobile Header */}
      <motion.header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 transition-colors duration-300`}
        animate={{
          backgroundColor: headerIsWhite ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center"
        >
          <img
            src={headerIsWhite ? "/assets/logo.png" : "/assets/wlogo3.png"}
            alt="OnePath Solutions"
            className="h-8 w-auto object-contain"
          />
        </motion.div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <motion.button
            onClick={() => setIsSearchOpen(true)}
            animate={{
              color: headerIsWhite ? "#000000" : "#ffffff",
            }}
            className="p-2 hover:bg-black/10 rounded-full transition-colors"
          >
            <Search className="h-5 w-5" />
          </motion.button>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            animate={{
              color: headerIsWhite ? "#000000" : "#ffffff",
            }}
            className="p-2 hover:bg-black/10 rounded-full transition-colors"
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>
      </motion.header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-[80] lg:hidden"
        >
          <div className="flex items-center h-16 px-4 border-b">
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                  autoFocus
                />
              </div>
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <span className="text-gray-600">Cancel</span>
            </button>
          </div>

          {/* Search Results/Suggestions */}
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 mb-4">Popular searches</p>
              {['UI/UX Design', 'Web Development', 'Digital Marketing', 'Brand Consulting'].map((term) => (
                <button
                  key={term}
                  className="block w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => {
                    setSearchQuery(term);
                    // Handle search logic here
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Search className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">{term}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        headerIsWhite={headerIsWhite}
      />
    </>
  );
}