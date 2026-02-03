"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

export default function ResponsiveNavigation() {
  const [headerIsWhite, setHeaderIsWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections with data-header-color attribute
      const sections = Array.from(document.querySelectorAll('section[data-header-color]'));
      
      let shouldBeWhite = false;
      
      // If no sections found, check if we're on contact page
      if (sections.length === 0) {
        shouldBeWhite = window.location.pathname === '/contact';
      } else {
        // Find the section currently in view (checking from top to bottom)
        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          // Check if section is in viewport (top is above 150px and bottom is below 150px)
          if (rect.top <= 150 && rect.bottom > 150) {
            const headerColor = section.getAttribute('data-header-color');
            shouldBeWhite = headerColor === 'white';
            break; // Use the first matching section
          }
        }
      }
      
      setHeaderIsWhite(shouldBeWhite);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Header - Hidden on mobile */}
      <div className="hidden lg:block">
        <Header />
      </div>
      
      {/* Mobile Header - Hidden on desktop */}
      <div className="lg:hidden">
        <MobileHeader headerIsWhite={headerIsWhite} />
      </div>
    </>
  );
}