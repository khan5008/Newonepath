"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  headerIsWhite: boolean;
}

export default function MobileNavigation({ isOpen, onClose, headerIsWhite }: MobileNavigationProps) {
  const [currentView, setCurrentView] = useState<'main' | 'services'>('main');
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(null);

  // Reset navigation state when menu closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentView('main');
      setActiveServiceCategory(null);
    }
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const mainNavItems = [
    { name: "Services", hasSubmenu: true },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Works", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/career2" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceCategories = [
    {
      name: "Branding",
      icon: "🎨",
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
      name: "Intuitive Design",
      icon: "💡",
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
      icon: "⚡",
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
      icon: "📈",
      services: [
        { name: "Search Engine Optimization", href: "/seo" },
        { name: "Social Media Management", href: "/social-media" },
        { name: "Performance Marketing", href: "/performance-marketing" },
        { name: "Content Marketing", href: "/content-marketing" },
        { name: "Marketing Automation", href: "/marketing-automation" },
        { name: "Analytics", href: "/analytics" },
      ]
    },
    {
      name: "ERP",
      icon: "🏢",
      services: [
        { name: "Microsoft Dynamics", href: "/microsoft-dynamics" },
        { name: "Odoo", href: "/odoo" },
      ]
    }
  ];

  const handleNavigation = (href: string) => {
    window.location.href = href;
    onClose();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
            onClick={onClose}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[70] lg:hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                {currentView === 'services' && (
                  <button
                    onClick={() => setCurrentView('main')}
                    className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                )}
                <h2 className="text-lg font-semibold text-gray-900">
                  {currentView === 'main' ? 'Menu' : 'Services'}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="wait" custom={currentView === 'services' ? 1 : -1}>
                {currentView === 'main' && (
                  <motion.div
                    key="main"
                    custom={-1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    {/* Main Navigation */}
                    <div className="p-6 space-y-2">
                      {mainNavItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {item.hasSubmenu ? (
                            <button
                              onClick={() => setCurrentView('services')}
                              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group"
                            >
                              <span className="text-lg font-medium text-gray-900">
                                {item.name}
                              </span>
                              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleNavigation(item.href!)}
                              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group"
                            >
                              <span className="text-lg font-medium text-gray-900">
                                {item.name}
                              </span>
                              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors opacity-0 group-hover:opacity-100" />
                            </button>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Contact Information */}
                    <div className="mt-8 p-6 bg-gray-50 border-t border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">Get in Touch</h3>
                      <div className="space-y-3">
                        <a
                          href="tel:+914802733555"
                          className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          <span>+91 480 2733 555</span>
                        </a>
                        <a
                          href="mailto:info@onepathsolutions.com"
                          className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          <span>info@onepathsolutions.com</span>
                        </a>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>Kerala, India</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentView === 'services' && (
                  <motion.div
                    key="services"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    {/* Services Overview */}
                    <div className="p-6">
                      <div className="mb-6">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Comprehensive digital solutions to transform your business and drive growth.
                        </p>
                      </div>

                      {/* Service Categories */}
                      <div className="space-y-3">
                        {serviceCategories.map((category, index) => (
                          <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <button
                              onClick={() => setActiveServiceCategory(
                                activeServiceCategory === category.name ? null : category.name
                              )}
                              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">{category.icon}</span>
                                <span className="text-base font-medium text-gray-900">
                                  {category.name}
                                </span>
                              </div>
                              <motion.div
                                animate={{ rotate: activeServiceCategory === category.name ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                              </motion.div>
                            </button>

                            {/* Sub-services */}
                            <AnimatePresence>
                              {activeServiceCategory === category.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 mt-2 space-y-1">
                                    {category.services.map((service, serviceIndex) => (
                                      <motion.button
                                        key={service.name}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: serviceIndex * 0.03 }}
                                        onClick={() => handleNavigation(service.href)}
                                        className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                                      >
                                        <div className="flex items-center justify-between">
                                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                                            {service.name}
                                          </span>
                                          <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-gray-600 transition-colors opacity-0 group-hover:opacity-100" />
                                        </div>
                                      </motion.button>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </div>

                      {/* Services CTA */}
                      <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                        <h4 className="text-sm font-semibold text-blue-900 mb-2">
                          Need Help Choosing?
                        </h4>
                        <p className="text-xs text-blue-700 mb-3">
                          Let our experts guide you to the right solution for your business.
                        </p>
                        <button
                          onClick={() => handleNavigation('/contact')}
                          className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Get Consultation
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}