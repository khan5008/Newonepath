"use client";

import { PhoneCall, Search, ChevronRight, ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  // Global scroll position for header color change
  const [headerIsWhite, setHeaderIsWhite] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const servicesMenu = [
    {
      category: "Branding",
      items: [
        "Brand Consulting",
        "Logo Design",
        "Product Design",
        "Graphic Design",
        "2D / 3D Visualization",
        "Video Creation & Editing",
      ],
    },
    {
      category: "ERP",
      items: ["Microsoft Dynamics", "Odoo"],
    },
    {
      category: "Intuitive Design",
      items: [
        "UI/UX Design",
        "Website Design",
        "Mobile Experience",
        "Commerce Experience",
        "Prototypes",
      ],
    },
    {
      category: "Digital Marketing",
      items: [
        "Search Engine Optimization",
        "Social Media Management",
        "Performance Marketing",
        "Content Marketing",
        "Marketing Automation",
        "Analytics",
      ],
    },
    {
      category: "Technology",
      items: [
        "AI & Machine Learning",
        "Data & Analytics",
        "Web Development",
        "Mobile App Development",
        "E-Commerce",
        "Quality Assurance & Testing",
        "Cloud Services",
        "Cyber Security",
      ],
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 lg:px-20 transition-colors duration-300 ${
        (headerIsWhite || isServicesHovered) ? "py-1" : "py-2"
      }`}
      animate={{
        backgroundColor: headerIsWhite || isServicesHovered ? "white" : "transparent",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        <motion.img
          src={(headerIsWhite || isServicesHovered) ? "/assets/logo.png" : "/assets/wlogo3.png"}
          alt="OnePath Solutions"
          className={`w-auto object-contain ${
            (headerIsWhite || isServicesHovered) 
              ? "h-14 md:h-16 lg:h-18" 
              : "h-20 md:h-24 lg:h-28"
          }`}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={(headerIsWhite || isServicesHovered) ? "logo-colored" : "logo-white"}
        />
      </motion.div>

      {/* Center nav items - moved more to the right */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="hidden items-center gap-16 text-[18px] font-medium tracking-wide md:flex md:ml-auto md:mr-8"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        {navItems.map((item, index) => {
          if (item === "Services") {
            return (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
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
                  className="bg-transparent transition-colors hover:opacity-100 font-medium text-[18px] tracking-wide"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {item}
                </motion.a>

                {/* Services Dropdown */}
                <AnimatePresence>
                  {isServicesHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 right-0 top-[72px] w-screen bg-black bg-gradient-to-r from-black to-[#0a1a1f] z-50"
                      style={{ marginLeft: 0, marginRight: 0 }}
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <div className="w-full px-8 md:px-12 lg:px-20 py-16">
                        <div className="grid grid-cols-12 gap-12 items-start">
                          {/* Left Side - Large Heading + Button */}
                          <div className="col-span-12 lg:col-span-4 space-y-8">
                            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight" style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif', fontWeight: 400 }}>
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
                            <a href="/services" className="flex items-center gap-4 group cursor-pointer">
                              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <ArrowRight className="h-6 w-6 text-white" />
                              </div>
                              <span className="text-white text-sm md:text-base font-normal">
                                Go to Overview
                              </span>
                            </a>
                          </div>

                          {/* Right Side - Service Categories */}
                          <div className="col-span-12 lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                              {/* Column 1 */}
                              <div className="space-y-10">
                                <div className="space-y-4">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-sm md:text-base font-semibold">
                                      Branding
                                    </h3>
                                    <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    {servicesMenu[0].items.map((item) => (
                                      <li
                                        key={item}
                                        className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="space-y-4">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-sm md:text-base font-semibold">
                                      ERP
                                    </h3>
                                    <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    {servicesMenu[1].items.map((item) => (
                                      <li
                                        key={item}
                                        className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Column 2 */}
                              <div className="space-y-10">
                                <div className="space-y-4">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-sm md:text-base font-semibold">
                                      Intuitive Design
                                    </h3>
                                    <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    {servicesMenu[2].items.map((item) => (
                                      <li
                                        key={item}
                                        className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="space-y-4">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-sm md:text-base font-semibold">
                                      Digital Marketing
                                    </h3>
                                    <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    {servicesMenu[3].items.map((item) => (
                                      <li
                                        key={item}
                                        className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Column 3 */}
                              <div className="space-y-10">
                                <div className="space-y-4">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-sm md:text-base font-semibold">
                                      Technology
                                    </h3>
                                    <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    {servicesMenu[4].items.map((item) => (
                                      <li
                                        key={item}
                                        className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }
          if (item === "Contact") {
            return (
              <motion.a
                key={item}
                href="/contact"
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
                className="bg-transparent transition-colors hover:opacity-100 font-medium text-[18px] tracking-wide"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {item}
              </motion.a>
            );
          }
          if (item === "About") {
            return (
              <motion.a
                key={item}
                href="/about"
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
                className="bg-transparent transition-colors hover:opacity-100 font-medium text-[18px] tracking-wide"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {item}
              </motion.a>
            );
          }
          if (item === "Solutions") {
            return (
              <motion.a
                key={item}
                href="/solutions"
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
                className="bg-transparent transition-colors hover:opacity-100 font-medium text-[18px] tracking-wide"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {item}
              </motion.a>
            );
          }
          if (item === "Works") {
            return (
              <motion.a
                key={item}
                href="/portfolio"
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
                className="bg-transparent transition-colors hover:opacity-100 font-medium text-[18px] tracking-wide"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {item}
              </motion.a>
            );
          }
          if (item === "Industries") {
            return (
              <motion.a
                key={item}
                href="/industries"
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
                className="bg-transparent transition-colors hover:opacity-100 font-medium text-[18px] tracking-wide"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {item}
              </motion.a>
            );
          }
          if (item === "Careers") {
            return (
              <motion.a
                key={item}
                href="/career2"
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
                className="bg-transparent transition-colors hover:opacity-100 font-medium text-[18px] tracking-wide"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {item}
              </motion.a>
            );
          }
          return (
            <motion.button
              key={item}
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
              className="bg-transparent transition-colors hover:opacity-100 font-medium text-[18px] tracking-wide"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {item}
            </motion.button>
          );
        })}
      </motion.nav>

      {/* Right side actions */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex items-center gap-8 text-sm"
      >
        <div className="flex items-center gap-10">
          {/* Phone/Contact Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
              animate={{
                color: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
              }}
              className="hidden md:inline-block contact-trigger"
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
                  className="absolute top-12 right-0 w-96 bg-white rounded-2xl shadow-2xl p-6 z-50 contact-dropdown"
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

          {/* Search */}
          <motion.button
            onClick={() => setIsSearchOpen(true)}
            animate={{
              color: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
            }}
          >
            <Search className="h-5 w-5" />
          </motion.button>

          {/* Save/Bookmark */}
          <motion.a
            href="/saved"
            animate={{
              fill: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
              stroke: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
            }}
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
                d="M13.6465 0.25C14.7959 0.25025 15.75 1.16282 15.75 2.29492V19.8828C15.75 20.0447 15.7041 20.1997 15.6201 20.334L15.5469 20.4512H15.5439L15.585 20.4912L15.2725 20.6504C15.0521 20.7625 14.854 20.7652 14.6973 20.7305C14.6222 20.7138 14.5599 20.6889 14.5156 20.6699C14.4993 20.6629 14.47 20.6497 14.4648 20.6475C14.4502 20.6411 14.4532 20.6429 14.4629 20.6455L14.4307 20.6367L14.4014 20.6201L7.99902 16.8428L1.59863 20.6201L1.59961 20.6211C1.27034 20.8159 0.865203 20.7801 0.582031 20.5576L0.542969 20.5967L0.379883 20.334C0.29593 20.1997 0.25 20.0457 0.25 19.8838V2.29492C0.25009 1.83327 0.405977 1.47358 0.560547 1.22949C0.637765 1.10761 0.715306 1.01358 0.773438 0.949219C0.780554 0.941341 0.787463 0.933724 0.793945 0.926758V0.920898L0.870117 0.84668C1.25078 0.47828 1.77663 0.250094 2.35449 0.25H13.6465ZM2.35352 1.77539C2.20258 1.7755 2.06562 1.83608 1.9668 1.93164L1.95605 1.94043C1.86396 2.03495 1.8087 2.16008 1.80859 2.29492V18.7168L7.87305 15.1406L8 15.0654L8.12695 15.1406L14.1895 18.7178V2.29492C14.1892 2.01513 13.9538 1.77544 13.6445 1.77539H2.35352Z"
                strokeWidth="0.5"
              />
            </svg>
          </motion.a>
        </div>
      </motion.div>

      {/* Search Overlay - Header Only */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bg-white z-50 shadow-lg"
          >
            {/* Search Header */}
            <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
              <img
                src="/assets/logo.png"
                alt="OnePath Solutions"
                className="h-12 w-auto md:h-14 lg:h-16"
              />
              
              <div className="flex-1 max-w-2xl mx-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 text-lg border-2 border-black rounded-xl focus:outline-none focus:border-black"
                    autoFocus
                  />
                </div>
              </div>

              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Search Results */}
            {searchQuery && (
              <div className="px-6 md:px-12 lg:px-20 pb-6 border-t bg-gray-50">
                <div className="max-w-2xl mx-auto pt-4">
                  <p className="text-gray-600 mb-4">Search results for "{searchQuery}"</p>
                  <div className="space-y-3">
                    <div className="p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h3 className="font-medium text-black">Sample Result 1</h3>
                      <p className="text-sm text-gray-600 mt-1">Description of the search result...</p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h3 className="font-medium text-black">Sample Result 2</h3>
                      <p className="text-sm text-gray-600 mt-1">Description of the search result...</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}