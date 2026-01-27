"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ChevronRight, ArrowRight } from "lucide-react";
import Header from "./Header";
import FooterSection from "./FooterSection";

export default function WebDevelopment() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const webDevelopmentServices = [
    {
      icon: "🌐",
      title: "Custom Web Applications",
      description: "Build scalable, high-performance web applications tailored to your business needs with modern frameworks and technologies."
    },
    {
      icon: "📱",
      title: "Responsive Web Design",
      description: "Create stunning, mobile-first websites that provide optimal user experience across all devices and screen sizes."
    },
    {
      icon: "🛒",
      title: "E-commerce Development",
      description: "Develop powerful e-commerce platforms with secure payment integration, inventory management, and user-friendly interfaces."
    },
    {
      icon: "⚡",
      title: "Progressive Web Apps",
      description: "Build fast, reliable PWAs that combine the best of web and mobile apps with offline functionality and push notifications."
    },
    {
      icon: "🔧",
      title: "API Development & Integration",
      description: "Design and develop robust APIs and integrate third-party services to enhance your web application's functionality."
    },
    {
      icon: "☁️",
      title: "Cloud-Based Solutions",
      description: "Deploy and manage web applications on cloud platforms for scalability, reliability, and optimal performance."
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Requirement Gathering",
      description: "We conduct thorough analysis of your business requirements, target audience, and project goals to create a comprehensive development strategy."
    },
    {
      id: 2,
      title: "Wireframe and Prototyping",
      description: "Create detailed wireframes and interactive prototypes to visualize the user interface and user experience before development begins."
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Design intuitive and visually appealing user interfaces that provide excellent user experience and align with your brand identity."
    },
    {
      id: 4,
      title: "Development",
      description: "Build robust, scalable web applications using modern technologies, following best practices and coding standards for optimal performance."
    },
    {
      id: 5,
      title: "Quality Assurance",
      description: "Comprehensive testing including functionality, performance, security, and compatibility testing across different browsers and devices."
    },
    {
      id: 6,
      title: "Deployment",
      description: "Deploy your web application to production environment with proper configuration, security measures, and performance optimization."
    },
    {
      id: 7,
      title: "Maintenance and Support",
      description: "Ongoing maintenance, updates, and technical support to ensure your web application continues to perform optimally and stays secure."
    }
  ];

  const technologyStack = {
    frontend: [
      {
        name: "React",
        description: "Build fast-loading and optimized web applications with rapid page rendering features from the constructive and interactive technology of React.",
        logo: "⚛️"
      },
      {
        name: "Next.js",
        description: "Utilize applications of bespoke quality and quick loading times with the exceptional performance of the Next.js technology framework.",
        logo: "▲"
      },
      {
        name: "Vue.js",
        description: "Transform your customer engagement with visually stunning, scalable and reliable interfaces for web applications through the boundless possibilities of Vue.js.",
        logo: "💚"
      },
      {
        name: "Angular",
        description: "Transform your industry with the combination of agile concepts and the broad expertise of our Angular developers to give life to thoughtful web applications.",
        logo: "🅰️"
      }
    ],
    backend: [
      {
        name: "Node.js",
        description: "Scalable server-side applications with JavaScript runtime built on Chrome's V8 engine.",
        logo: "🟢"
      },
      {
        name: "Python",
        description: "Powerful backend development with Django and Flask frameworks for robust web applications.",
        logo: "🐍"
      },
      {
        name: "PHP",
        description: "Dynamic web development with Laravel and CodeIgniter for feature-rich applications.",
        logo: "🐘"
      },
      {
        name: "Java",
        description: "Enterprise-grade applications with Spring Boot and robust Java ecosystem.",
        logo: "☕"
      }
    ],
    database: [
      {
        name: "MongoDB",
        description: "NoSQL database for flexible, scalable data storage and retrieval.",
        logo: "🍃"
      },
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database with powerful features.",
        logo: "🐘"
      },
      {
        name: "MySQL",
        description: "Reliable and widely-used relational database management system.",
        logo: "🗄️"
      },
      {
        name: "Redis",
        description: "In-memory data structure store for caching and session management.",
        logo: "🔴"
      }
    ]
  };

  const caseStudies = [
    {
      title: "Empowering the Business with Actionable Insights",
      category: "Business Intelligence",
      description: "Comprehensive dashboard solution providing real-time analytics and business intelligence.",
      image: "/assets/Rectangle 88 (4).png",
      features: ["Real-time Analytics", "Custom Dashboard", "Data Visualization"],
      results: "40% increase in decision-making speed"
    },
    {
      title: "Providing the Best for the Users Through Data",
      category: "Data Analytics Platform",
      description: "Advanced analytics platform with comprehensive customer insights and demographic integration.",
      image: "/assets/Rectangle 88 (5).png",
      features: ["Insightful Data Analytics", "Comprehensive Customer Insights", "Demographic & RDBMS Integration"],
      results: "60% improvement in user engagement"
    },
    {
      title: "Intuitive Webapp for Flexible Workspaces",
      category: "Workspace Management",
      description: "High-performing efficient website with global standard UI/UX and seamless webapp experience.",
      image: "/assets/portfoliodetail2.png",
      features: ["High-Performing Efficient Website", "Global Standard UI/UX", "Seamless Webapp Experience"],
      results: "50% increase in workspace efficiency"
    }
  ];

  const relatedIndustries = [
    {
      title: "E-commerce",
      description: "Custom online stores and marketplace solutions",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant web applications for healthcare providers",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "Finance",
      description: "Secure financial platforms and fintech solutions",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "Education",
      description: "Learning management systems and educational platforms",
      image: "/assets/Rectangle 88 (3).png"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies including React, Next.js, Vue.js, Angular for frontend, Node.js, Python, PHP, Java for backend, and various databases like MongoDB, PostgreSQL, MySQL. We choose the best technology stack based on your project requirements."
    },
    {
      id: 2,
      question: "How long does it take to develop a web application?",
      answer: "Development timelines vary based on complexity and features. Simple websites take 4-8 weeks, while complex web applications can take 3-6 months. We provide detailed project timelines during the planning phase."
    },
    {
      id: 3,
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance and support services including regular updates, security patches, performance optimization, and technical support to ensure your web application runs smoothly."
    },
    {
      id: 4,
      question: "Can you integrate third-party services and APIs?",
      answer: "Absolutely! We have extensive experience integrating various third-party services including payment gateways, social media APIs, analytics tools, CRM systems, and other business applications."
    },
    {
      id: 5,
      question: "Do you ensure mobile responsiveness?",
      answer: "Yes, all our web applications are built with mobile-first approach ensuring optimal performance and user experience across all devices including desktops, tablets, and smartphones."
    }
  ];

  const relatedServices = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      image: "/assets/Rectangle 84.png"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create exceptional digital experiences.",
      image: "/assets/Rectangle 84 (1).png"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with advanced features and integrations.",
      image: "/assets/Rectangle 85.png"
    }
  ];

  const toggleProcess = (id: number) => {
    setActiveProcess(activeProcess === id ? null : id);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const tabCategories = ["Frontend", "Backend", "Database"];

  return (
    <section className="min-h-screen bg-white pt-16" data-header-color="white">
      <Header />
      
      {/* Hero Section with Half-Screen Image */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/assets/solution1.jpg')",
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
            Web Development
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
                  Professional Web Development Services That Drive Digital Success
                </h2>
                
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    We adopt a rapid and reliable approach with the best Web Development services for 
                    organizations to achieve their business goals. Eager to know what our expertise can 
                    contribute to your business? Here we go! Our comprehensive web development services 
                    combine cutting-edge technologies, user-centered design, and scalable architecture 
                    to create web applications that drive growth and deliver exceptional user experiences.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8"
                >
                  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors font-medium text-sm">
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

      {/* Web Development Services Section */}
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
              Web Development Services We Offer
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              We adopt a rapid and reliable approach with the best Web Development services for 
              organizations to achieve their business goals. Eager to know what our expertise can 
              contribute to your business? Here we go!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevelopmentServices.map((service, index) => (
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

      {/* Web Development Technology Stack */}
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
              Web Development Technology Stack
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
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === 0 ? technologyStack.frontend :
              activeTab === 1 ? technologyStack.backend :
              technologyStack.database).map((tech, index) => (
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
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                    Learn more →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Web Development Process Section */}
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
                  src="/assets/hajjpath.png"
                  alt="Our Web Development Process"
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
                Our Web Development Process
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
                      className="w-full flex items-center justify-between py-4 text-left hover:text-blue-600 transition-colors"
                    >
                      <h3
                        className="text-lg md:text-xl font-medium text-black"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        {activeProcess === item.id ? (
                          <Minus className="w-6 h-6 text-blue-600" />
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

      {/* Featured Web Development Case Studies */}
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
              Featured Web Development Case Studies
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
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
                    <p className="text-sm font-medium text-blue-600">{study.results}</p>
                  </div>
                  
                  <button className="mt-4 inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
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
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
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
              Related Industries
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedIndustries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3
                  className="text-xl font-semibold text-black mb-2"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {industry.title}
                </h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center gap-2 text-blue-500 border-2 border-blue-500 rounded-lg px-6 py-3 hover:bg-blue-50 transition-colors">
              <span>View all industries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

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
                  className="w-full flex items-center justify-between py-6 text-left hover:text-blue-600 transition-colors"
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
                  <button className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
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
                  With touchpoints across numerous verticals and a passionate team at the helm, we have what it takes to give your brand the digital evolution.
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number*
                    </label>
                    <div className="flex">
                      <select className="px-3 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                        <option>🇮🇳</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="+91"
                        className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    placeholder="Brief about your project"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
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