"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ChevronRight, ArrowRight, BarChart3, TrendingUp, Database, Brain, Target, Zap } from "lucide-react";
import Header from "./Header";
import FooterSection from "./FooterSection";

export default function DataAnalytics() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const analyticsServices = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with comprehensive BI solutions that drive strategic decision-making and operational excellence.",
      features: ["Interactive Dashboards", "Real-time Reporting", "KPI Monitoring", "Data Visualization"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Leverage advanced statistical models and machine learning to forecast trends, identify opportunities, and mitigate risks before they impact your business.",
      features: ["Trend Forecasting", "Risk Assessment", "Customer Behavior", "Market Analysis"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure that ensure your data is clean, accessible, and ready for analysis at enterprise scale.",
      features: ["Data Pipelines", "ETL Processes", "Data Warehousing", "Cloud Integration"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Apply cutting-edge techniques including AI, machine learning, and statistical modeling to uncover hidden patterns and insights in your data.",
      features: ["Machine Learning", "Statistical Modeling", "Pattern Recognition", "Anomaly Detection"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer Analytics",
      description: "Understand your customers better with comprehensive analytics that reveal preferences, behaviors, and lifetime value insights.",
      features: ["Customer Segmentation", "Lifetime Value", "Churn Prediction", "Personalization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Make instant decisions with real-time data processing and analytics that provide immediate insights as events happen.",
      features: ["Stream Processing", "Live Dashboards", "Alert Systems", "Instant Insights"]
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Data Discovery & Assessment",
      description: "We analyze your current data landscape, identify sources, assess quality, and understand your business objectives to create a comprehensive analytics strategy."
    },
    {
      id: 2,
      title: "Data Architecture Design",
      description: "Design scalable data architecture including data lakes, warehouses, and processing pipelines optimized for your specific analytics needs."
    },
    {
      id: 3,
      title: "Data Integration & Preparation",
      description: "Implement robust ETL processes to clean, transform, and integrate data from multiple sources into a unified analytics-ready format."
    },
    {
      id: 4,
      title: "Analytics Model Development",
      description: "Build custom analytics models, dashboards, and reporting solutions tailored to your business requirements and user needs."
    },
    {
      id: 5,
      title: "Deployment & Optimization",
      description: "Deploy analytics solutions with proper monitoring, performance optimization, and user training for maximum adoption and value."
    },
    {
      id: 6,
      title: "Continuous Improvement",
      description: "Ongoing monitoring, model refinement, and enhancement to ensure your analytics solutions evolve with your business needs."
    }
  ];

  const industries = [
    {
      title: "Financial Services",
      description: "Risk analytics, fraud detection, and regulatory compliance solutions",
      image: "/assets/Rectangle 88.png",
      metrics: ["99.5% Fraud Detection", "40% Risk Reduction", "Real-time Processing"]
    },
    {
      title: "Healthcare",
      description: "Patient analytics, operational efficiency, and clinical insights",
      image: "/assets/Rectangle 88 (1).png",
      metrics: ["30% Cost Reduction", "95% Accuracy", "HIPAA Compliant"]
    },
    {
      title: "Retail & E-commerce",
      description: "Customer insights, inventory optimization, and sales forecasting",
      image: "/assets/Rectangle 88 (2).png",
      metrics: ["25% Sales Increase", "50% Better Targeting", "Real-time Inventory"]
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      image: "/assets/Rectangle 88 (3).png",
      metrics: ["60% Less Downtime", "35% Quality Improvement", "Predictive Maintenance"]
    }
  ];

  const analyticsTools = [
    { name: "Tableau", category: "Visualization", logo: "📊" },
    { name: "Power BI", category: "Business Intelligence", logo: "📈" },
    { name: "Apache Spark", category: "Big Data", logo: "⚡" },
    { name: "Python", category: "Analytics", logo: "🐍" },
    { name: "R", category: "Statistics", logo: "📉" },
    { name: "SQL", category: "Database", logo: "🗄️" },
    { name: "Snowflake", category: "Data Warehouse", logo: "❄️" },
    { name: "AWS", category: "Cloud", logo: "☁️" }
  ];

  const caseStudies = [
    {
      title: "E-commerce Revenue Optimization",
      category: "Retail Analytics",
      description: "Increased online revenue by 45% through advanced customer segmentation and personalized recommendations",
      image: "/assets/Rectangle 88 (4).png",
      results: ["45% Revenue Increase", "60% Better Conversion", "Real-time Personalization"],
      tags: ["Customer Analytics", "ML", "Real-time"]
    },
    {
      title: "Predictive Maintenance System",
      category: "Manufacturing",
      description: "Reduced equipment downtime by 70% using IoT sensors and predictive analytics",
      image: "/assets/Rectangle 88 (5).png",
      results: ["70% Less Downtime", "$2M Annual Savings", "99% Prediction Accuracy"],
      tags: ["IoT", "Predictive Analytics", "Cost Reduction"]
    },
    {
      title: "Financial Risk Management",
      category: "Finance",
      description: "Enhanced risk assessment and fraud detection with real-time analytics and ML models",
      image: "/assets/portfoliodetail2.png",
      results: ["99.8% Fraud Detection", "50% Risk Reduction", "Real-time Processing"],
      tags: ["Risk Analytics", "Fraud Detection", "Real-time"]
    }
  ];

  const dataTypes = [
    { type: "Structured Data", description: "Databases, spreadsheets, CRM systems", icon: "🗃️" },
    { type: "Unstructured Data", description: "Text, images, videos, social media", icon: "📄" },
    { type: "Semi-structured Data", description: "JSON, XML, log files", icon: "🔗" },
    { type: "Streaming Data", description: "IoT sensors, real-time feeds", icon: "📡" }
  ];

  const faqs = [
    {
      id: 1,
      question: "What types of data can you analyze?",
      answer: "We work with all types of data including structured (databases, spreadsheets), unstructured (text, images, videos), semi-structured (JSON, XML), and streaming data from IoT devices and real-time feeds. Our solutions are designed to handle data from any source and format."
    },
    {
      id: 2,
      question: "How long does it take to implement a data analytics solution?",
      answer: "Implementation timelines vary based on complexity and scope. Simple dashboard projects may take 4-8 weeks, while comprehensive analytics platforms can take 3-6 months. We provide detailed project timelines during the discovery phase."
    },
    {
      id: 3,
      question: "Do you provide training for our team?",
      answer: "Yes, we provide comprehensive training programs including user training for dashboards and reports, technical training for data teams, and executive briefings for leadership. We ensure your team can effectively use and maintain the analytics solutions."
    },
    {
      id: 4,
      question: "How do you ensure data security and compliance?",
      answer: "We implement enterprise-grade security measures including data encryption, access controls, audit trails, and compliance with regulations like GDPR, HIPAA, and SOX. All solutions are designed with security and privacy by design principles."
    },
    {
      id: 5,
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We specialize in integrating with existing systems including ERP, CRM, databases, cloud platforms, and third-party APIs. Our solutions are designed to work seamlessly with your current technology stack."
    }
  ];

  const toggleProcess = (id: number) => {
    setActiveProcess(activeProcess === id ? null : id);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-white" data-header-color="white">
      <Header />
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/dataanalytics.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Floating Data Visualization Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 opacity-20"
          >
            <BarChart3 className="w-16 h-16 text-blue-400" />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 opacity-20"
          >
            <TrendingUp className="w-20 h-20 text-purple-400" />
          </motion.div>
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-1/6 opacity-20"
          >
            <Database className="w-18 h-18 text-cyan-400" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light mb-8 leading-tight"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Transform Data Into
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Strategic Insights
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Unlock the power of your data with advanced analytics, machine learning, and business intelligence 
              solutions that drive growth, optimize operations, and create competitive advantages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg">
                Start Your Analytics Journey
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium text-lg backdrop-blur-sm">
                View Case Studies
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Banner */}
      <div className="relative py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/solutiondetail.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Analytics Projects" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10PB+", label: "Data Processed" },
              { number: "24/7", label: "Real-time Monitoring" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
                className="text-white"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.3 + 0.2 
                  }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.3 + 0.4,
                      ease: "easeOut"
                    }}
                  >
                    {stat.number}
                  </motion.span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.3 + 0.6 
                  }}
                  className="text-white/90 text-sm md:text-base"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Analytics Services */}
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
              Comprehensive Data Analytics Services
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              From data engineering to advanced analytics, we provide end-to-end solutions 
              that transform your data into actionable business insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold text-black mb-4 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed mb-6"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Types We Handle */}
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
              We Handle All Types of Data
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataTypes.map((dataType, index) => (
              <motion.div
                key={dataType.type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {dataType.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{dataType.type}</h3>
                <p className="text-gray-600 text-sm">{dataType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Tools & Technologies */}
      <div className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/solutiondetail.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl text-white font-light mb-4"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Powered by Industry-Leading Tools
            </h2>
            <p
              className="text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              We leverage the best analytics tools and technologies to deliver powerful insights
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {analyticsTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tool.logo}
                </div>
                <p className="text-sm font-medium text-white">{tool.name}</p>
                <p className="text-xs text-white/70">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process Section */}
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
                  src="/assets/portfoliodetail5.jpg"
                  alt="Data Analytics Process"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Analytics Methodology</h3>
                  <p className="text-white/90">From data to insights</p>
                </div>
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
                Our Analytics Process
              </h2>

              <div className="space-y-4">
                {processSteps.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-colors"
                  >
                    <button
                      onClick={() => toggleProcess(item.id)}
                      className="w-full flex items-center justify-between text-left hover:text-blue-600 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {item.id}
                        </div>
                        <h3
                          className="text-lg md:text-xl font-medium text-black"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {item.title}
                        </h3>
                      </div>
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
                        className="mt-4 ml-14"
                      >
                        <p
                          className="text-gray-700 leading-relaxed"
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

      {/* Industries Section */}
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
              Analytics Solutions Across Industries
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{industry.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
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
              Analytics Success Stories
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              <span>View All Cases</span>
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
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                    className="text-lg font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {study.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section with Video Background */}
      <div className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/network.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white font-light mb-6"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Ready to Unlock Your Data&apos;s Potential?
            </h2>
            <p
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Let&apos;s transform your data into actionable insights that drive growth, optimize operations, and create competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium text-lg">
                Start Your Analytics Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg">
                Download Analytics Guide
              </button>
            </div>
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
            className="text-3xl md:text-4xl lg:text-5xl text-black font-light mb-12 text-center"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left hover:text-blue-600 transition-colors"
                >
                  <h3
                    className="text-lg md:text-xl font-medium text-black pr-4"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaq === faq.id ? (
                      <Minus className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
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

      <FooterSection />
    </section>
  );
}