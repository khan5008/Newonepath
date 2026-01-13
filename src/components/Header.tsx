"use client";

import { PhoneCall, Search, ChevronRight, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  // Global scroll position for header color change
  const [headerIsWhite, setHeaderIsWhite] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the CaseStudiesSection position
      const caseStudiesSection = document.querySelector('[data-section="case-studies"]');
      if (caseStudiesSection) {
        const rect = caseStudiesSection.getBoundingClientRect();
        // Change to white header when CaseStudiesSection comes into view
        setHeaderIsWhite(rect.top <= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 pt-1 pb-1 md:px-12 lg:px-20 transition-colors duration-300"
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
          src={(headerIsWhite || isServicesHovered) ? "/assets/logo.png" : "/assets/wlogo2.png"}
          alt="OnePath Solutions"
          className={(headerIsWhite || isServicesHovered) ? "h-24 w-auto md:h-28 lg:h-32" : "h-32 w-auto md:h-36 lg:h-40"}
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
                <motion.button
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

                {/* Services Dropdown */}
                <AnimatePresence>
                  {isServicesHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 right-0 top-[100px] w-screen bg-black bg-gradient-to-r from-black to-[#0a1a1f] z-50"
                      style={{ marginLeft: 0, marginRight: 0 }}
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <div className="w-full px-8 md:px-12 lg:px-20 py-16">
                        <div className="grid grid-cols-12 gap-12 items-start">
                          {/* Left Side - Large Heading + Button */}
                          <div className="col-span-12 lg:col-span-4 space-y-8">
                            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight" style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif', fontWeight: 400 }}>
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
                            <div className="flex items-center gap-4 group cursor-pointer">
                              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <ArrowRight className="h-6 w-6 text-white" />
                              </div>
                              <span className="text-white text-base md:text-lg font-normal">
                                Go to Overview
                              </span>
                            </div>
                          </div>

                          {/* Right Side - Service Categories */}
                          <div className="col-span-12 lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                              {/* Column 1 */}
                              <div className="space-y-10">
                                <div className="space-y-4">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-lg md:text-xl font-semibold">
                                      Branding
                                    </h3>
                                    <ChevronRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    {servicesMenu[0].items.map((item) => (
                                      <li
                                        key={item}
                                        className="text-white/80 text-sm md:text-base hover:text-white transition-colors cursor-pointer"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="space-y-4">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-lg md:text-xl font-semibold">
                                      ERP
                                    </h3>
                                    <ChevronRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    {servicesMenu[1].items.map((item) => (
                                      <li
                                        key={item}
                                        className="text-white/80 text-sm md:text-base hover:text-white transition-colors cursor-pointer"
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
                                    <h3 className="text-white text-lg md:text-xl font-semibold">
                                      Intuitive Design
                                    </h3>
                                    <ChevronRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    {servicesMenu[2].items.map((item) => (
                                      <li
                                        key={item}
                                        className="text-white/80 text-sm md:text-base hover:text-white transition-colors cursor-pointer"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="space-y-4">
                                  <div className="flex items-center gap-2 group">
                                    <h3 className="text-white text-lg md:text-xl font-semibold">
                                      Digital Marketing
                                    </h3>
                                    <ChevronRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    {servicesMenu[3].items.map((item) => (
                                      <li
                                        key={item}
                                        className="text-white/80 text-sm md:text-base hover:text-white transition-colors cursor-pointer"
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
                                    <h3 className="text-white text-lg md:text-xl font-semibold">
                                      Technology
                                    </h3>
                                    <ChevronRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                                  </div>
                                  <ul className="space-y-3">
                                    {servicesMenu[4].items.map((item) => (
                                      <li
                                        key={item}
                                        className="text-white/80 text-sm md:text-base hover:text-white transition-colors cursor-pointer"
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
          <motion.div
            animate={{
              color: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
            }}
          >
            <PhoneCall className="hidden h-5 w-5 md:inline-block" />
          </motion.div>
          <motion.div
            animate={{
              color: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
            }}
          >
            <Search className="h-5 w-5" />
          </motion.div>
          {/* Save/Bookmark icon */}
          <motion.svg
            width="20"
            height="24"
            viewBox="0 0 17 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            animate={{
              fill: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
              stroke: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
            }}
          >
            <path
              d="M13.6465 0.25C14.7959 0.25025 15.75 1.16282 15.75 2.29492V19.8828C15.75 20.0447 15.7041 20.1997 15.6201 20.334L15.5469 20.4512H15.5439L15.585 20.4912L15.2725 20.6504C15.0521 20.7625 14.854 20.7652 14.6973 20.7305C14.6222 20.7138 14.5599 20.6889 14.5156 20.6699C14.4993 20.6629 14.47 20.6497 14.4648 20.6475C14.4502 20.6411 14.4532 20.6429 14.4629 20.6455L14.4307 20.6367L14.4014 20.6201L7.99902 16.8428L1.59863 20.6201L1.59961 20.6211C1.27034 20.8159 0.865203 20.7801 0.582031 20.5576L0.542969 20.5967L0.379883 20.334C0.29593 20.1997 0.25 20.0457 0.25 19.8838V2.29492C0.25009 1.83327 0.405977 1.47358 0.560547 1.22949C0.637765 1.10761 0.715306 1.01358 0.773438 0.949219C0.780554 0.941341 0.787463 0.933724 0.793945 0.926758V0.920898L0.870117 0.84668C1.25078 0.47828 1.77663 0.250094 2.35449 0.25H13.6465ZM2.35352 1.77539C2.20258 1.7755 2.06562 1.83608 1.9668 1.93164L1.95605 1.94043C1.86396 2.03495 1.8087 2.16008 1.80859 2.29492V18.7168L7.87305 15.1406L8 15.0654L8.12695 15.1406L14.1895 18.7178V2.29492C14.1892 2.01513 13.9538 1.77544 13.6445 1.77539H2.35352Z"
              strokeWidth="0.5"
            />
          </motion.svg>
          {/* Menu icon */}
          <motion.button className="inline-flex flex-col items-center justify-center gap-[4px]">
            <motion.span
              className="h-[2.5px] w-6"
              animate={{
                backgroundColor: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
              }}
            />
            <motion.span
              className="h-[2.5px] w-6"
              animate={{
                backgroundColor: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
              }}
            />
            <motion.span
              className="h-[2.5px] w-6"
              animate={{
                backgroundColor: (headerIsWhite || isServicesHovered) ? "#000000" : "#ffffff",
              }}
            />
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
}