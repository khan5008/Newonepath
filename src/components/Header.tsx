"use client";

import { PhoneCall, Search, ChevronRight, ArrowRight, X, Menu, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  // Global scroll position for header color change
  const [headerIsWhite, setHeaderIsWhite] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mobile Services accordion state
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [expandedServiceCategory, setExpandedServiceCategory] = useState<string | null>(null);

  // Service categories for mobile accordion
  const serviceCategories = [
    {
      name: "Overview",
      href: "/services",
      isOverview: true
    },
    {
      name: "Branding",
      services: [
        { name: "Brand Consulting", href: "/brandconsulting" },
        { name: "Logo Design", href: "/logo" },
        { name: "Product Design", href: "/product" },
        { name: "Graphic Design", href: "/graphicdesign" },
        { name: "2D / 3D Visualization", href: "/2dvisualization" },
        { name: "Video Creation & Editing", href: "/videocreation" },
      ]
    },
    {
      name: "Experience Design",
      services: [
        { name: "UI/UX Design", href: "/uiux-design" },
        { name: "Website Design", href: "/websitedesign" },
        { name: "Mobile Experience", href: "/mobileexperience" },
        { name: "Commerce Experience", href: "/commerceexperience" },
        { name: "Prototypes", href: "/prototypes" },
      ]
    },
    {
      name: "Technology",
      services: [
        { name: "AI & Machine Learning", href: "/aiml" },
        { name: "Data & Analytics", href: "/dataanalytics" },
        { name: "Web Development", href: "/webdevelopment" },
        { name: "Mobile App Development", href: "/mobileappdevelopment" },
        { name: "E-Commerce", href: "/ecommerce" },
        { name: "Quality Assurance & Testing", href: "/quality-assurance" },
        { name: "Cloud Services", href: "/cloud-services" },
        { name: "Cyber Security", href: "/cyber-security" },
      ]
    },
    {
      name: "Digital Marketing",
      services: [
        { name: "Search Engine Optimization", href: "/seo" },
        { name: "Social Media Management", href: "/social-media" },
        { name: "Performance Marketing", href: "/performance-marketing" },
        { name: "Content Marketing", href: "/content-marketing" },
        { name: "Marketing Automation", href: "/marketing-automation" },
        { name: "Analytics", href: "/analytics" },
      ]
    }
  ];
  
  // Add timeout ref for hover debouncing
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Improved hover handlers with debouncing
  const handleServicesMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 150); // 150ms delay to prevent flickering
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

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

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.contact-dropdown') && !target.closest('.contact-trigger')) {
        setIsContactDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsContactDropdownOpen(false);
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
        // Clear services hover state and timeout
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
        setIsServicesHovered(false);
        // Reset mobile accordion states
        setIsServicesExpanded(false);
        setExpandedServiceCategory(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navItems = [
    "Services",
    "Solutions", 
    "Industries",
    "Works",
    "About",
    "Careers",
    "Contact",
  ];

  // Handle hover over other nav items - should close services dropdown
  const handleOtherNavHover = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsServicesHovered(false);
  };

  // Mobile navigation handler
  const handleMobileNavigation = (item: string) => {
    const routes: { [key: string]: string } = {
      "Services": "/services",
      "Solutions": "/solutions",
      "Industries": "/industries", 
      "Works": "/portfolio",
      "About": "/about",
      "Careers": "/career2",
      "Contact": "/contact"
    };
    
    if (routes[item]) {
      window.location.href = routes[item];
    }
    setIsMobileMenuOpen(false);
    // Reset accordion states
    setIsServicesExpanded(false);
    setExpandedServiceCategory(null);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 transition-colors duration-300 ${
          (headerIsWhite || isServicesHovered) ? "py-2 sm:py-2 md:py-1" : "py-3 sm:py-3 md:py-2"
        }`}
        style={{
          zoom: 'reset',
          transform: 'scale(1)',
          transformOrigin: 'top left',
          minHeight: 'auto',
          position: 'fixed'
        }}
        animate={{
          backgroundColor: headerIsWhite || isServicesHovered ? "white" : "transparent",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center z-10 flex-shrink-0"
        >
          <motion.img
            src={(headerIsWhite || isServicesHovered) ? "/assets/logo.png" : "/assets/wlogo3.png"}
            alt="OnePath Solutions"
            className={`w-auto object-contain transition-all duration-300 ${
              (headerIsWhite || isServicesHovered) 
                ? "h-10 sm:h-11 md:h-12 lg:h-16" 
                : "h-12 sm:h-13 md:h-16 lg:h-24"
            }`}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={(headerIsWhite || isServicesHovered) ? "logo-colored" : "logo-white"}
          />
        </motion.div>

        {/* Desktop Navigation - Centered */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12 text-base lg:text-lg xl:text-xl font-medium tracking-wide absolute left-1/2 transform -translate-x-1/2"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          {navItems.map((item, index) => {
            if (item === "Services") {
              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <motion.a
                    href="/services"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      color: (headerIsWhite || isServicesHovered) ? "#000000" : "rgba(255, 255, 255, 0.95)",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + index * 0.05,
                      ease: "easeOut",
                    }}
                    className="bg-transparent transition-colors hover:opacity-100 font-medium text-[18px] tracking-wide block py-2"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {item}
                  </motion.a>

                  {/* Services Dropdown */}
                  <AnimatePresence>
                    {isServicesHovered && (
                      <>
                        {/* Invisible bridge to prevent hover gaps */}
                        <div 
                          className="absolute top-full left-0 right-0 h-4 bg-transparent z-[54]"
                          onMouseEnter={handleServicesMouseEnter}
                          onMouseLeave={handleServicesMouseLeave}
                        />
                        
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="fixed left-0 right-0 w-screen bg-black bg-gradient-to-r from-black to-[#0a1a1f] z-[55] max-h-[80vh] overflow-y-auto"
                          style={{ 
                            marginLeft: 0, 
                            marginRight: 0,
                            top: '80px', // Start below the header
                            willChange: 'transform, opacity'
                          }}
                          onMouseEnter={handleServicesMouseEnter}
                          onMouseLeave={handleServicesMouseLeave}
                        >
                        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 lg:py-16">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
                            {/* Left Side - Large Heading + Button */}
                            <div className="lg:col-span-4 space-y-6 lg:space-y-8">
                              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight" style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif', fontWeight: 400 }}>
                                Building
                                <br />
                                strong
                                <br />
                                Capabilities to
                                <br />
                                Empower Your
                                <br />
                                Brand
                              </h2>
                              <a href="/services" className="flex items-center gap-3 lg:gap-4 group cursor-pointer">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                  <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                                </div>
                                <span className="text-white text-sm md:text-base font-normal">
                                  Go to Overview
                                </span>
                              </a>
                            </div>

                            {/* Right Side - Service Categories */}
                            <div className="lg:col-span-8">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                                {/* Column 1 - Branding */}
                                <div className="space-y-6">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-sm md:text-base font-semibold">
                                      Branding
                                    </h3>
                                    <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/brandconsulting">Brand Consulting</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/logo">Logo Design</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/product">Product Design</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/graphicdesign">Graphic Design</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/2dvisualization">2D / 3D Visualization</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/videocreation">Video Creation & Editing</a>
                                    </li>
                                  </ul>

                                  {/* ERP Section - moved under Branding */}
                                  <div className="space-y-6 pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-2 group">
                                      <h3 className="text-white text-sm md:text-base font-semibold">
                                        ERP
                                      </h3>
                                      <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                                    </div>
                                    <ul className="space-y-3">
                                      <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                        <a href="/microsoftdynamics">Microsoft Dynamics</a>
                                      </li>
                                      <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                        <a href="/odoo">Odoo</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                {/* Column 2 - Intuitive Design */}
                                <div className="space-y-6">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-sm md:text-base font-semibold">
                                      Intuitive Design
                                    </h3>
                                    <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/uiuxdesign">UI/UX Design</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/websitedesign">Website Design</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/mobileexperience">Mobile Experience</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/commerceexperience">Commerce Experience</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/prototype">Prototypes</a>
                                    </li>
                                  </ul>

                                  {/* Digital Marketing Section - moved under Intuitive Design */}
                                  <div className="space-y-6 pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-2 group">
                                      <h3 className="text-white text-sm md:text-base font-semibold">
                                        Digital Marketing
                                      </h3>
                                      <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                                    </div>
                                    <ul className="space-y-3">
                                      <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                        <a href="/searchengine">Search Engine Optimization</a>
                                      </li>
                                      <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                        <a href="/socialmedia">Social Media Management</a>
                                      </li>
                                      <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                        <a href="/performancemarketing">Performance Marketing</a>
                                      </li>
                                      <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                        <a href="/contentmarketing">Content Marketing</a>
                                      </li>
                                      <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                        <a href="/marketingautomation">Marketing Automation</a>
                                      </li>
                                      <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                        <a href="/analytics">Analytics</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                {/* Column 3 - Technology */}
                                <div className="space-y-6">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-sm md:text-base font-semibold">
                                      Technology
                                    </h3>
                                    <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/aiml">AI & Machine Learning</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/dataanalytics">Data & Analytics</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/webdevelopment">Web Development</a>
                                    </li>
                                    <li className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer">
                                      <a href="/mobileappdevelopment">Mobile App Development</a>
                                    </li>
                                    <li 
                                      className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                                      onClick={() => window.location.href = '/ecommerce'}
                                    >
                                      E-Commerce
                                    </li>
                                    <li 
                                      className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                                      onClick={() => window.location.href = '/quality-assurance'}
                                    >
                                      Quality Assurance & Testing
                                    </li>
                                    <li 
                                      className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                                      onClick={() => window.location.href = '/cloud-services'}
                                    >
                                      Cloud Services
                                    </li>
                                    <li 
                                      className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                                      onClick={() => window.location.href = '/cyber-security'}
                                    >
                                      Cyber Security
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <motion.a
                key={item}
                href={item === "Solutions" ? "/solutions" :
                      item === "Industries" ? "/industries" :
                      item === "Works" ? "/portfolio" :
                      item === "About" ? "/about" :
                      item === "Careers" ? "/career2" :
                      item === "Contact" ? "/contact" : "#"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  color: (headerIsWhite || isServicesHovered) ? "#000000" : "rgba(255, 255, 255, 0.95)",
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + index * 0.05,
                  ease: "easeOut",
                }}
                className="bg-transparent transition-colors hover:opacity-100 font-medium text-[18px] tracking-wide block py-2"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                onMouseEnter={handleOtherNavHover}
              >
                {item}
              </motion.a>
            );
          })}
        </motion.nav>

        {/* Right Side Actions - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-1 md:gap-3 z-50 relative flex-shrink-0"
        >
          {/* Desktop Contact Dropdown - Hidden on mobile */}
          <div className="relative hidden lg:block">
            <motion.button
              onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
              animate={{
                color: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
              }}
              className="contact-trigger p-2 hover:bg-black/10 rounded-full transition-colors"
            >
              <PhoneCall className="h-5 w-5" />
            </motion.button>

            {/* Contact Dropdown */}
            <AnimatePresence>
              {isContactDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 z-[70] contact-dropdown max-w-[calc(100vw-2rem)] mr-2 sm:mr-0"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-black">Talk to a sales advisor</h3>
                    <p className="text-gray-600 text-sm">
                      We have a team of specialists available 24/7 to help you find the best solution for your business.
                    </p>
                    
                    <div className="flex items-center gap-3 text-blue-500">
                      <PhoneCall className="h-5 w-5" />
                      <span className="text-lg font-medium">+91 480 2733 555</span>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <PhoneCall className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-black">Request a call back</h4>
                          <p className="text-sm text-gray-600">Call backs typically happen in a few minutes or less</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Contact Dropdown - Now visible on mobile */}
          <div className="relative lg:hidden">
            <motion.button
              onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
              animate={{
                color: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
              }}
              className="p-1.5 md:p-2 hover:bg-black/10 rounded-full transition-colors"
            >
              <PhoneCall className="h-5 w-5" />
            </motion.button>

            {/* Mobile Contact Dropdown */}
            <AnimatePresence>
              {isContactDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 right-0 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 z-[70] contact-dropdown max-w-[calc(100vw-2rem)] mr-2 sm:mr-0"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-black">Get in Touch</h3>
                    <div className="space-y-3">
                      <a
                        href="tel:+914802733555"
                        className="flex items-center gap-3 text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <PhoneCall className="h-5 w-5" />
                        <span className="font-medium">+91 480 2733 555</span>
                      </a>
                      <a
                        href="mailto:info@onepathsolutions.com"
                        className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">info@onepathsolutions.com</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Icon - Modern UI */}
          <motion.button
            onClick={() => setIsSearchOpen(true)}
            animate={{
              color: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
            }}
            className="p-1.5 md:p-2 hover:bg-black/10 rounded-full transition-colors"
          >
            <Search className="h-5 w-5" />
          </motion.button>

          {/* Saved Icon */}
          <motion.a
            href="/saved"
            animate={{
              color: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
            }}
            className="transition-colors duration-300 p-1.5 md:p-2 hover:bg-black/10 rounded-full"
          >
            <svg
              width="20"
              height="24"
              viewBox="0 0 17 21"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M13.6465 0.25C14.7959 0.25025 15.75 1.16282 15.75 2.29492V19.8828C15.75 20.0447 15.7041 20.1997 15.6201 20.334L15.5469 20.4512H15.5439L15.585 20.4912L15.2725 20.6504C15.0521 0.7625 14.854 20.7652 14.6973 20.7305C14.6222 20.7138 14.5599 20.6889 14.5156 20.6699C14.4993 20.6629 14.47 20.6497 14.4648 20.6475C14.4502 20.6411 14.4532 20.6429 14.4629 20.6455L14.4307 20.6367L14.4014 20.6201L7.99902 16.8428L1.59863 20.6201L1.59961 20.6211C1.27034 20.8159 0.865203 20.7801 0.582031 20.5576L0.542969 20.5967L0.379883 20.334C0.29593 20.1997 0.25 20.0457 0.25 19.8838V2.29492C0.25009 1.83327 0.405977 1.47358 0.560547 1.22949C0.637765 1.10761 0.715306 1.01358 0.773438 0.949219C0.780554 0.941341 0.787463 0.933724 0.793945 0.926758V0.920898L0.870117 0.84668C1.25078 0.47828 1.77663 0.250094 2.35449 0.25H13.6465ZM2.35352 1.77539C2.20258 1.7755 2.06562 1.83608 1.9668 1.93164L1.95605 1.94043C1.86396 2.03495 1.8087 2.16008 1.80859 2.29492V18.7168L7.87305 15.1406L8 15.0654L8.12695 15.1406L14.1895 18.7178V2.29492C14.1892 2.01513 13.9538 1.77544 13.6445 1.77539H2.35352Z"
                strokeWidth="0.5"
              />
            </svg>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            animate={{
              color: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
            }}
            className="lg:hidden p-1.5 md:p-2 hover:bg-black/10 rounded-full transition-colors"
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </motion.header>

      {/* Modern Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-16 sm:top-20 left-2 right-2 sm:left-4 sm:right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-full md:max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Search Header */}
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 border-b border-gray-100">
                  <Search className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-base sm:text-lg placeholder-gray-400 focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                {/* Search Results/Suggestions */}
                <div className="p-4 sm:p-6">
                  {searchQuery ? (
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500 mb-4">Search results for "{searchQuery}"</p>
                      {/* Add actual search results here */}
                      <div className="text-center py-8 text-gray-500">
                        <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
                        <p>Search functionality coming soon...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-500 mb-4">Popular searches</p>
                      {[
                        { term: 'UI/UX Design', href: '/uiux-design' },
                        { term: 'Web Development', href: '/webdevelopment' },
                        { term: 'Digital Marketing', href: '/digital-marketing' },
                        { term: 'Brand Consulting', href: '/brandconsulting' },
                        { term: 'Mobile App Development', href: '/mobileappdevelopment' },
                        { term: 'E-Commerce', href: '/ecommerce' }
                      ].map((item) => (
                        <button
                          key={item.term}
                          className="block w-full text-left p-3 hover:bg-gray-50 rounded-xl transition-colors group"
                          onClick={() => {
                            window.location.href = item.href;
                            setIsSearchOpen(false);
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                              <Search className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <span className="text-gray-900 font-medium">{item.term}</span>
                              <p className="text-sm text-gray-500">Service</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Press ESC to close</span>
                    <span>Enter to search</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Working Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[70] lg:hidden"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsServicesExpanded(false);
                setExpandedServiceCategory(null);
              }}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[80] lg:hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsServicesExpanded(false);
                    setExpandedServiceCategory(null);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Navigation Items - Scrollable Container */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-2">
                  {navItems.map((item, index) => {
                    if (item === "Services") {
                      return (
                        <div key={item}>
                          {/* Services Main Button */}
                          <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group text-left"
                          >
                            <span className="text-lg font-medium text-gray-900">
                              Services
                            </span>
                            <motion.div
                              animate={{ rotate: isServicesExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors transform rotate-90" />
                            </motion.div>
                          </motion.button>

                          {/* Services Accordion Content */}
                          <AnimatePresence>
                            {isServicesExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-2 space-y-1">
                                  {serviceCategories.map((category, categoryIndex) => (
                                    <div key={category.name}>
                                      {category.isOverview ? (
                                        // Overview - Direct Link
                                        <motion.button
                                          initial={{ opacity: 0, x: 10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: categoryIndex * 0.03 }}
                                          onClick={() => handleMobileNavigation("Services")}
                                          className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                          <span className="text-base text-gray-700 hover:text-gray-900">
                                            {category.name}
                                          </span>
                                        </motion.button>
                                      ) : (
                                        // Category with Sub-services
                                        <div>
                                          <motion.button
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: categoryIndex * 0.03 }}
                                            onClick={() => setExpandedServiceCategory(
                                              expandedServiceCategory === category.name ? null : category.name
                                            )}
                                            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                                          >
                                            <span className="text-base text-gray-700 group-hover:text-gray-900">
                                              {category.name}
                                            </span>
                                            <motion.div
                                              animate={{ rotate: expandedServiceCategory === category.name ? 180 : 0 }}
                                              transition={{ duration: 0.2 }}
                                            >
                                              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors transform rotate-90" />
                                            </motion.div>
                                          </motion.button>

                                          {/* Sub-services */}
                                          <AnimatePresence>
                                            {expandedServiceCategory === category.name && category.services && (
                                              <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                              >
                                                <div className="ml-4 mt-1 space-y-1">
                                                  {category.services.map((service, serviceIndex) => (
                                                    <motion.button
                                                      key={service.name}
                                                      initial={{ opacity: 0, x: 10 }}
                                                      animate={{ opacity: 1, x: 0 }}
                                                      transition={{ delay: serviceIndex * 0.02 }}
                                                      onClick={() => {
                                                        window.location.href = service.href;
                                                        setIsMobileMenuOpen(false);
                                                      }}
                                                      className="w-full text-left p-2 hover:bg-gray-50 rounded-md transition-colors"
                                                    >
                                                      <span className="text-sm text-gray-600 hover:text-gray-800">
                                                        {service.name}
                                                      </span>
                                                    </motion.button>
                                                  ))}
                                                </div>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    // Other navigation items
                    return (
                      <motion.button
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleMobileNavigation(item)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group text-left"
                      >
                        <span className="text-lg font-medium text-gray-900">
                          {item}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8 p-6 bg-gray-50 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+914802733555"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>+91 480 2733 555</span>
                  </a>
                  <a
                    href="mailto:info@onepathsolutions.com"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>info@onepathsolutions.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}