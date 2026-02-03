"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ChevronRight, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import FooterSection from "./FooterSection";
import { getServiceRoute, getBlogRoute, getInsightsRoute } from "@/utils/navigationUtils";
import RelatedIndustries from "./RelatedIndustries";

export default function MobileAppDevelopment() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  const handleServiceNavigation = (serviceName: string) => {
    const route = getServiceRoute(serviceName);
    router.push(route);
  };

  const mobileAppServices = [
    {
      icon: "📱",
      title: "Native iOS Development",
      description: "Build high-performance iOS applications using Swift and Objective-C with native features and optimal user experience."
    },
    {
      icon: "🤖",
      title: "Native Android Development",
      description: "Create powerful Android applications using Kotlin and Java with seamless integration to Google services and Android ecosystem."
    },
    {
      icon: "🔄",
      title: "Cross-Platform Development",
      description: "Develop apps that work on both iOS and Android using React Native, Flutter, or Xamarin for faster time-to-market."
    },
    {
      icon: "⚡",
      title: "Progressive Web Apps",
      description: "Build fast, reliable PWAs that combine the best of web and mobile apps with offline functionality and push notifications."
    },
    {
      icon: "🔧",
      title: "App Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to ensure your mobile app continues to perform optimally."
    },
    {
      icon: "🚀",
      title: "App Store Optimization",
      description: "Optimize your app for better visibility and downloads on App Store and Google Play Store with ASO strategies."
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We analyze your business requirements, target audience, and market research to create a comprehensive mobile app strategy and roadmap."
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Create intuitive and engaging user interfaces with wireframes, prototypes, and visual designs that follow platform-specific guidelines."
    },
    {
      id: 3,
      title: "Architecture & Development",
      description: "Build robust, scalable mobile applications using modern technologies and best practices for optimal performance and security."
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing including functionality, performance, security, and compatibility testing across different devices and OS versions."
    },
    {
      id: 5,
      title: "Deployment & Launch",
      description: "Deploy your mobile app to App Store and Google Play Store with proper configuration, compliance, and launch strategy."
    },
    {
      id: 6,
      title: "Post-Launch Support",
      description: "Ongoing maintenance, updates, performance monitoring, and feature enhancements to ensure continued success."
    }
  ];

  const technologyStack = {
    native: [
      {
        name: "Swift",
        description: "Modern programming language for iOS development with powerful features and excellent performance.",
        logo: "🍎"
      },
      {
        name: "Kotlin",
        description: "Modern programming language for Android development that&apos;s fully interoperable with Java.",
        logo: "🤖"
      },
      {
        name: "Objective-C",
        description: "Established language for iOS development with deep integration to Apple&apos;s frameworks.",
        logo: "📱"
      },
      {
        name: "Java",
        description: "Traditional Android development language with extensive libraries and community support.",
        logo: "☕"
      }
    ],
    crossPlatform: [
      {
        name: "React Native",
        description: "Build native mobile apps using React and JavaScript with code sharing across platforms.",
        logo: "⚛️"
      },
      {
        name: "Flutter",
        description: "Google&apos;s UI toolkit for building natively compiled applications from a single codebase.",
        logo: "💙"
      },
      {
        name: "Xamarin",
        description: "Microsoft&apos;s platform for building native mobile apps using C# and .NET.",
        logo: "🔷"
      },
      {
        name: "Ionic",
        description: "Build hybrid mobile apps using web technologies like HTML, CSS, and JavaScript.",
        logo: "⚡"
      }
    ],
    backend: [
      {
        name: "Node.js",
        description: "JavaScript runtime for building scalable backend services and APIs for mobile apps.",
        logo: "🟢"
      },
      {
        name: "Firebase",
        description: "Google&apos;s platform providing backend services, real-time database, and authentication.",
        logo: "🔥"
      },
      {
        name: "AWS",
        description: "Amazon Web Services for cloud infrastructure, storage, and mobile backend services.",
        logo: "☁️"
      },
      {
        name: "MongoDB",
        description: "NoSQL database perfect for mobile app data storage and real-time synchronization.",
        logo: "🍃"
      }
    ]
  };

  const caseStudies = [
    {
      title: "E-commerce Mobile App with AR Features",
      category: "Retail Technology",
      description: "Revolutionary shopping experience with augmented reality product visualization and seamless checkout.",
      image: "/assets/Rectangle 88 (1).png",
      features: ["AR Product Visualization", "One-Click Checkout", "Real-time Inventory"],
      results: "300% increase in user engagement"
    },
    {
      title: "Healthcare Patient Management App",
      category: "Healthcare Technology",
      description: "HIPAA-compliant mobile app for patient management with telemedicine and appointment scheduling.",
      image: "/assets/Rectangle 88 (2).png",
      features: ["Telemedicine Integration", "Appointment Scheduling", "Secure Messaging"],
      results: "85% improvement in patient satisfaction"
    },
    {
      title: "FinTech Mobile Banking Solution",
      category: "Financial Services",
      description: "Secure mobile banking app with biometric authentication and real-time transaction monitoring.",
      image: "/assets/Rectangle 88 (3).png",
      features: ["Biometric Security", "Real-time Transactions", "Investment Tracking"],
      results: "2M+ active users within 6 months"
    }
  ];

  const relatedIndustries = [
    {
      title: "FinTech",
      description: "Secure mobile banking and payment solutions",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant health and wellness mobile apps",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "E-commerce",
      description: "Mobile shopping apps with advanced features",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "Education",
      description: "Interactive learning and educational mobile platforms",
      image: "/assets/Rectangle 88 (3).png"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Should I choose native or cross-platform development?",
      answer: "The choice depends on your specific needs. Native development offers better performance and platform-specific features, while cross-platform development provides faster time-to-market and cost efficiency. We help you choose the best approach based on your requirements, budget, and timeline."
    },
    {
      id: 2,
      question: "How long does it take to develop a mobile app?",
      answer: "Development timelines vary based on complexity and features. Simple apps take 3-4 months, while complex apps with advanced features can take 6-12 months. We provide detailed project timelines during the planning phase."
    },
    {
      id: 3,
      question: "Do you help with app store submission and approval?",
      answer: "Yes, we handle the complete app store submission process including preparing app store listings, screenshots, descriptions, and ensuring compliance with App Store and Google Play Store guidelines."
    },
    {
      id: 4,
      question: "Can you integrate third-party services and APIs?",
      answer: "Absolutely! We have extensive experience integrating various third-party services including payment gateways, social media APIs, analytics tools, push notification services, and other business applications."
    },
    {
      id: 5,
      question: "Do you provide ongoing maintenance and updates?",
      answer: "Yes, we offer comprehensive maintenance services including regular updates, bug fixes, performance optimization, OS compatibility updates, and feature enhancements to keep your app current and competitive."
    }
  ];

  const relatedServices = [
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create exceptional mobile experiences.",
      image: "/assets/Rectangle 84.png"
    },
    {
      title: "Web Development",
      description: "Responsive web applications that complement your mobile app strategy.",
      image: "/assets/Rectangle 84 (1).png"
    },
    {
      title: "API Development",
      description: "Robust backend APIs and services to power your mobile applications.",
      image: "/assets/Rectangle 85.png"
    }
  ];

  const toggleProcess = (id: number) => {
    setActiveProcess(activeProcess === id ? null : id);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const tabCategories = ["Native", "Cross-Platform", "Backend"];

  return (
    <section className="min-h-screen bg-white pt-16" data-header-color="white">
      <Header />
      
      {/* Hero Section with Half-Screen Image */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/assets/services.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        


        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-20">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-light max-w-2xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Mobile App Development
          </motion.h1>
        </div>
      </div>

      

      {/* Main Content */}
      <section className="py-12 px-4 md:px-8 lg:px-20 bg-white" data-header-color="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Content - Takes 2 columns */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                  Expert Mobile App Development Services That Transform Ideas Into Reality
                </h2>
                
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    We specialize in creating innovative mobile applications that engage users and drive business growth. 
                    Our comprehensive mobile app development services combine cutting-edge technologies, user-centered design, 
                    and scalable architecture to create mobile experiences that stand out in today&apos;s competitive marketplace. 
                    From native iOS and Android apps to cross-platform solutions, we deliver mobile applications that exceed expectations.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8"
                >
                  <button 
                    onClick={() => router.push('/contact')}
                    className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors font-medium text-sm"
                  >
                    Let&apos;s talk →
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Share/Bookmark Icons */}
            <div className="lg:col-span-1 flex justify-start lg:justify-end">
              <div className="flex gap-3">
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                    <polyline points="16,6 12,2 8,6"/>
                    <line x1="12" y1="2" x2="12" y2="15"/>
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Services Section */}
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-black font-light mb-6"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Mobile App Development Services We Offer
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              From native iOS and Android development to cross-platform solutions, we deliver mobile applications 
              that engage users and drive business success across all platforms and devices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileAppServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3
                  className="text-xl font-semibold text-black mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {service.description}
                </p>
                <div className="w-full h-px bg-gray-200 mt-6"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile App Technology Stack */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-black font-light mb-6"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Mobile App Technology Stack
            </h2>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {tabCategories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    activeTab === index
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === 0 ? technologyStack.native :
              activeTab === 1 ? technologyStack.crossPlatform :
              technologyStack.backend).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-center">{tech.logo}</div>
                <h3 className="text-lg font-semibold text-black mb-3 text-center">{tech.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{tech.description}</p>
                <div className="text-center">
                  <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
                    Learn more →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mobile App Development Process Section */}
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/portfoliodetail.jpg"
                  alt="Our Mobile App Development Process"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right Side - Process Items */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <h2
                className="text-2xl md:text-3xl lg:text-4xl text-black font-light mb-8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Our Mobile App Development Process
              </h2>

              <div className="space-y-4">
                {processSteps.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-200 pb-4"
                  >
                    <button
                      onClick={() => toggleProcess(item.id)}
                      className="w-full flex items-center justify-between py-4 text-left hover:text-purple-600 transition-colors"
                    >
                      <h3
                        className="text-lg md:text-xl font-medium text-black"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        {activeProcess === item.id ? (
                          <Minus className="w-6 h-6 text-purple-600" />
                        ) : (
                          <Plus className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {activeProcess === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <p
                          className="text-sm text-gray-700 leading-relaxed"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Mobile App Case Studies */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl text-black font-light"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Featured Mobile App Case Studies
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-medium text-black mb-3 leading-tight"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {study.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {study.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-purple-600">{study.results}</p>
                  </div>
                  
                  <button className="mt-4 inline-flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Industries Section */}
      <RelatedIndustries />

      {/* FAQ Section */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl text-black font-light mb-12"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            FAQ
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left hover:text-purple-600 transition-colors"
                >
                  <h3
                    className="text-lg md:text-xl font-medium text-black pr-4"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaq === faq.id ? (
                      <Minus className="w-6 h-6 text-black" />
                    ) : (
                      <Plus className="w-6 h-6 text-black" />
                    )}
                  </div>
                </button>
                
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-4"
                  >
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl text-black font-light mb-12"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Related Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-semibold text-black mb-3"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm text-gray-600 leading-relaxed mb-4"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {service.description}
                  </p>
                  <button 
                    onClick={() => handleServiceNavigation(service.title)}
                    className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors"
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl text-black font-light mb-6"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  We Are Happy to Help You
                </h2>
                
                <p
                  className="text-gray-600 leading-relaxed mb-8"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Ready to transform your mobile app idea into reality? Our expert team is here to guide you through 
                  every step of the mobile app development journey, from concept to launch and beyond.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src="/assets/Manager.jpeg"
                      alt="Abdul Hameed"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-black"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      Abdul Hameed 
                    </h4>
                    <p
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      Managing Director
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number*
                    </label>
                    <div className="flex">
                      <select className="px-3 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                        <option>🇮🇳</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="+91"
                        className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Tell Us More
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Brief about your mobile app project"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  ></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">0/1000</div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <FooterSection />
    </section>
  );
}