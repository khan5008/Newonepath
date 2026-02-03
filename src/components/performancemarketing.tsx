"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ChevronRight, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import FooterSection from "./FooterSection";
import { getServiceRoute } from "../utils/navigationUtils";

export default function PerformanceMarketing() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const performanceMarketingServices = [
    {
      icon: "🎯",
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Strategic PPC campaigns across Google Ads, Bing Ads, and social media platforms to drive targeted traffic and maximize ROI with data-driven optimization."
    },
    {
      icon: "📊",
      title: "Conversion Rate Optimization",
      description: "Systematic testing and optimization of landing pages, user flows, and conversion funnels to increase conversion rates and improve campaign performance."
    },
    {
      icon: "📱",
      title: "Social Media Advertising",
      description: "Targeted advertising campaigns on Facebook, Instagram, LinkedIn, Twitter, and other social platforms to reach your ideal audience and drive conversions."
    },
    {
      icon: "🛒",
      title: "E-commerce Marketing",
      description: "Specialized performance marketing strategies for online stores including shopping ads, product feed optimization, and remarketing campaigns."
    },
    {
      icon: "📈",
      title: "Display & Remarketing",
      description: "Strategic display advertising and remarketing campaigns to re-engage website visitors and increase brand awareness across the web."
    },
    {
      icon: "🔍",
      title: "Performance Analytics",
      description: "Comprehensive tracking, measurement, and reporting of campaign performance with actionable insights for continuous optimization and growth."
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Campaign Strategy & Planning",
      description: "Develop comprehensive performance marketing strategies based on business goals, target audience analysis, and competitive research."
    },
    {
      id: 2,
      title: "Platform Setup & Configuration",
      description: "Set up and configure advertising accounts, tracking pixels, conversion tracking, and campaign structures across relevant platforms."
    },
    {
      id: 3,
      title: "Creative Development",
      description: "Create compelling ad creatives, landing pages, and marketing assets that drive engagement and conversions."
    },
    {
      id: 4,
      title: "Campaign Launch & Monitoring",
      description: "Launch campaigns with proper targeting, bidding strategies, and continuous monitoring for optimal performance."
    },
    {
      id: 5,
      title: "Performance Optimization",
      description: "Continuous testing, optimization, and refinement of campaigns based on performance data and market insights."
    },
    {
      id: 6,
      title: "Reporting & Analysis",
      description: "Detailed performance reporting with actionable insights and recommendations for future campaign improvements."
    },
    {
      id: 7,
      title: "Scale & Growth",
      description: "Scale successful campaigns and explore new opportunities for growth while maintaining cost efficiency and ROI."
    }
  ];

  const relatedIndustries = [
    {
      title: "E-commerce",
      description: "Performance marketing strategies for online retail and product sales.",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "SaaS",
      description: "Lead generation and customer acquisition for software companies.",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "Finance",
      description: "Compliant performance marketing for financial services and fintech.",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant marketing campaigns for healthcare providers.",
      image: "/assets/Rectangle 88 (3).png"
    }
  ];

  const performanceCaseStudies = [
    {
      title: "E-commerce ROI Growth",
      category: "Retail",
      image: "/assets/Rectangle 88 (4).png"
    },
    {
      title: "SaaS Lead Generation",
      category: "Technology",
      image: "/assets/Rectangle 88 (5).png"
    },
    {
      title: "Healthcare Patient Acquisition",
      category: "Healthcare",
      image: "/assets/portfoliodetail2.png"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is performance marketing and how is it different from traditional marketing?",
      answer: "Performance marketing is a results-driven approach where you only pay for specific actions like clicks, leads, or sales. Unlike traditional marketing, every dollar spent is measurable and tied to specific outcomes, making it more cost-effective and accountable."
    },
    {
      id: 2,
      question: "How quickly can I see results from performance marketing campaigns?",
      answer: "Initial results can be seen within 24-48 hours of campaign launch. However, optimal performance typically develops over 2-4 weeks as we gather data and optimize campaigns. Long-term success builds over 3-6 months with continuous optimization."
    },
    {
      id: 3,
      question: "What platforms do you use for performance marketing?",
      answer: "We work across all major platforms including Google Ads, Facebook Ads, Instagram, LinkedIn, Twitter, TikTok, Amazon Advertising, and programmatic display networks. Platform selection depends on your target audience and business objectives."
    },
    {
      id: 4,
      question: "How do you measure and report campaign performance?",
      answer: "We track key metrics like CPC, CTR, conversion rate, ROAS, and customer lifetime value. You'll receive detailed monthly reports with performance insights, optimization recommendations, and transparent ROI calculations."
    }
  ];

  const relatedServices = [
    {
      title: "Social Media Management",
      description: "Organic social media strategies that complement your paid performance campaigns.",
      image: "/assets/Rectangle 84.png"
    },
    {
      title: "Search Engine Optimization",
      description: "SEO strategies that work alongside paid campaigns for maximum visibility.",
      image: "/assets/Rectangle 84 (1).png"
    },
    {
      title: "Content Marketing",
      description: "Content strategies that support and enhance your performance marketing efforts.",
      image: "/assets/Rectangle 85.png"
    }
  ];

  const toggleProcess = (id: number) => {
    setActiveProcess(activeProcess === id ? null : id);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-white pt-16" data-header-color="white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/assets/performancemarketing.webp')",
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
            className="text-4xl md:text-5xl lg:text-6xl text-white font-light max-w-4xl whitespace-nowrap"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Performance Marketing
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
                  Data-Driven Performance Marketing Services That Deliver Results
                </h2>
                
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    We adopt a results-focused and data-driven approach with the best Performance Marketing 
                    services for organizations to achieve measurable business growth. Our comprehensive performance 
                    marketing strategies combine advanced targeting, creative optimization, and continuous testing 
                    to maximize ROI and drive qualified leads, sales, and conversions across all digital channels.
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
                    className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors font-medium text-sm"
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

      {/* Performance Marketing Services Section */}
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
              Performance Marketing Services We Offer
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              From PPC advertising to conversion optimization, we provide comprehensive 
              performance marketing services that drive measurable results and maximize your marketing ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceMarketingServices.map((service, index) => (
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

      {/* Our Performance Marketing Process Section */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
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
                  src="/assets/Rectangle 88 (5).png"
                  alt="Our Performance Marketing Process"
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
                Our Performance Marketing Process
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
                      className="w-full flex items-center justify-between py-4 text-left hover:text-orange-600 transition-colors"
                    >
                      <h3
                        className="text-lg md:text-xl font-medium text-black"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        {activeProcess === item.id ? (
                          <Minus className="w-6 h-6 text-orange-600" />
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
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
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
            <button className="inline-flex items-center gap-2 text-orange-500 border-2 border-orange-500 rounded-lg px-6 py-3 hover:bg-orange-50 transition-colors">
              <span>View all industries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Our Performance Marketing Case Studies Section */}
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
              Our Performance Marketing Case Studies
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span
                    className="text-sm text-gray-500 mb-2 block"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {caseStudy.category}
                  </span>
                  <h3
                    className="text-lg font-medium text-black leading-tight"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {caseStudy.title}
                  </h3>
                </div>
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
            <button className="inline-flex items-center gap-2 text-orange-500 border-2 border-orange-500 rounded-lg px-6 py-3 hover:bg-orange-50 transition-colors">
              <span>View all works</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
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
                  className="w-full flex items-center justify-between py-6 text-left hover:text-orange-600 transition-colors"
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
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
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
                onClick={() => router.push(getServiceRoute(service.title))}
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
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(getServiceRoute(service.title));
                    }}
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
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
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
                  Ready to drive measurable results with performance marketing? Our experts are here to help you 
                  create data-driven campaigns that maximize ROI and accelerate your business growth.
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
              className="bg-white rounded-2xl p-8 shadow-lg"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number*
                    </label>
                    <div className="flex">
                      <select className="px-3 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white">
                        <option>🇮🇳</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="+91"
                        className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    placeholder="Brief about your performance marketing goals"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
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