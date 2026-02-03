"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import FooterSection from "./FooterSection";
import { getServiceRoute, getBlogRoute, getInsightsRoute } from "@/utils/navigationUtils";
import RelatedIndustries from "./RelatedIndustries";

export default function AIMLPage() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const aiServices = [
    {
      icon: "🤖",
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms that learn from your data to automate processes, predict outcomes, and drive intelligent decision-making across your business operations."
    },
    {
      icon: "🧠",
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, chatbots, language translation, and content generation to enhance customer interactions."
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description: "Image and video analysis solutions including object detection, facial recognition, quality inspection, and automated visual content processing."
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description: "Data-driven forecasting and predictive modeling to anticipate market trends, customer behavior, and business outcomes for strategic planning."
    },
    {
      icon: "🔍",
      title: "AI-Powered Automation",
      description: "Intelligent process automation using AI to streamline workflows, reduce manual tasks, and optimize operational efficiency across departments."
    },
    {
      icon: "💡",
      title: "AI Consulting & Strategy",
      description: "Strategic AI implementation consulting to identify opportunities, develop roadmaps, and ensure successful AI adoption aligned with business goals."
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Assessment",
      description: "We analyze your business processes, data infrastructure, and identify AI opportunities that can drive the most value for your organization."
    },
    {
      id: 2,
      title: "Data Strategy & Preparation",
      description: "Developing comprehensive data strategies, cleaning and preparing datasets, and establishing data pipelines for optimal AI model performance."
    },
    {
      id: 3,
      title: "Model Development",
      description: "Creating custom AI/ML models using cutting-edge algorithms and frameworks, tailored to your specific business requirements and use cases."
    },
    {
      id: 4,
      title: "Testing & Validation",
      description: "Rigorous testing and validation of AI models to ensure accuracy, reliability, and performance before deployment in production environments."
    },
    {
      id: 5,
      title: "Integration & Deployment",
      description: "Seamless integration of AI solutions into your existing systems and workflows with minimal disruption to ongoing operations."
    },
    {
      id: 6,
      title: "Monitoring & Optimization",
      description: "Continuous monitoring of AI performance, model retraining, and optimization to maintain peak efficiency and adapt to changing conditions."
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "AI solutions for medical diagnosis, drug discovery, and patient care optimization.",
      image: "/assets/Rectangle 88.png",
      features: ["Medical Imaging", "Predictive Diagnostics", "Drug Discovery"]
    },
    {
      title: "Finance",
      description: "Intelligent fraud detection, risk assessment, and algorithmic trading solutions.",
      image: "/assets/Rectangle 88 (1).png",
      features: ["Fraud Detection", "Risk Analysis", "Algorithmic Trading"]
    },
    {
      title: "Retail & E-commerce",
      description: "Personalized recommendations, inventory optimization, and customer insights.",
      image: "/assets/Rectangle 88 (2).png",
      features: ["Recommendation Systems", "Demand Forecasting", "Price Optimization"]
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization.",
      image: "/assets/Rectangle 88 (3).png",
      features: ["Predictive Maintenance", "Quality Control", "Process Optimization"]
    }
  ];

  const caseStudies = [
    {
      title: "AI-Powered Customer Service Platform",
      category: "Customer Service",
      description: "Reduced response time by 80% with intelligent chatbot and sentiment analysis",
      image: "/assets/Rectangle 88 (4).png",
      results: ["80% faster response", "95% accuracy", "60% cost reduction"]
    },
    {
      title: "Predictive Maintenance System",
      category: "Manufacturing",
      description: "Prevented equipment failures and reduced downtime by 70%",
      image: "/assets/Rectangle 88 (5).png",
      results: ["70% less downtime", "$2M saved annually", "99% prediction accuracy"]
    },
    {
      title: "Fraud Detection Engine",
      category: "Finance",
      description: "Real-time fraud detection with 99.5% accuracy and minimal false positives",
      image: "/assets/portfoliodetail2.png",
      results: ["99.5% accuracy", "0.1% false positives", "Real-time detection"]
    }
  ];

  const technologies = [
    { name: "TensorFlow", logo: "🔥" },
    { name: "PyTorch", logo: "⚡" },
    { name: "OpenAI GPT", logo: "🤖" },
    { name: "AWS AI/ML", logo: "☁️" },
    { name: "Google Cloud AI", logo: "🌐" },
    { name: "Azure AI", logo: "💙" },
    { name: "Scikit-learn", logo: "🔬" },
    { name: "Keras", logo: "🧠" }
  ];

  const faqs = [
    {
      id: 1,
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary based on complexity, but typically range from 3-12 months. Simple automation projects may take 6-12 weeks, while complex ML models can take 6-12 months including data preparation, model development, and deployment."
    },
    {
      id: 2,
      question: "What data do I need for AI implementation?",
      answer: "The data requirements depend on your specific use case. Generally, you need clean, relevant, and sufficient historical data. We help assess your data readiness and can work with various data types including structured, unstructured, text, images, and sensor data."
    },
    {
      id: 3,
      question: "How do you ensure AI model accuracy and reliability?",
      answer: "We use rigorous testing methodologies including cross-validation, A/B testing, and continuous monitoring. Our models undergo extensive validation before deployment, and we implement feedback loops for continuous improvement and retraining."
    },
    {
      id: 4,
      question: "Can AI solutions integrate with existing systems?",
      answer: "Yes, our AI solutions are designed for seamless integration with existing enterprise systems through APIs, cloud platforms, and custom connectors. We ensure minimal disruption to your current workflows while maximizing the benefits of AI."
    },
    {
      id: 5,
      question: "What ROI can I expect from AI implementation?",
      answer: "ROI varies by use case, but our clients typically see 15-30% efficiency improvements, 20-50% cost reductions in automated processes, and significant revenue increases through better decision-making and customer insights within the first year."
    }
  ];

  const toggleProcess = (id: number) => {
    setActiveProcess(activeProcess === id ? null : id);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-black" data-header-color="white">
      <Header />
      <section className="relative min-h-screen bg-black overflow-hidden pt-16">
        {/* Full Screen Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/AIML.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light mb-8 leading-tight"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              AI & Machine Learning
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Build business accelerations for your digital workflows with exceptional AI-powered 
              products that align with the promise of advanced technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <button 
                onClick={() => router.push('/contact')}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg"
              >
                <span>I&apos;m Interested</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"/>
                  <path d="M12 5l7 7-7 7"/>
                </svg>
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
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm font-light">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* AI Services Section */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20" data-header-color="white">
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
              Our AI & Machine Learning Services
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Transform your business with cutting-edge AI solutions designed to automate processes, 
              enhance decision-making, and unlock new opportunities for growth and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-blue-200"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3
                  className="text-xl font-semibold text-black mb-4 group-hover:text-blue-600 transition-colors"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {service.description}
                </p>
                <div className="w-full h-px bg-gradient-to-r from-blue-500 to-purple-500 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Banner */}
      <div className="relative py-16 px-6 md:px-12 lg:px-20 overflow-hidden" data-header-color="white">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl text-white font-light mb-4"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Powered by Leading AI Technologies
            </h2>
            <p
              className="text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              We leverage the most advanced AI frameworks and platforms to deliver cutting-edge solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{tech.logo}</div>
                <p className="text-white text-sm font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20" data-header-color="white">
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
                  src="/assets/Rectangle 88 (2).png"
                  alt="AI Development Process"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">AI Development Process</h3>
                  <p className="text-white/90">From concept to deployment</p>
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
                Our AI Development Process
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
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
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
                        className="mt-4 ml-12"
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
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20" data-header-color="white">
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
              AI Solutions Across Industries
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Our AI expertise spans multiple industries, delivering tailored solutions that address 
              specific challenges and unlock new opportunities for growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{industry.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20" data-header-color="white">
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
              AI Success Stories
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
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden" data-header-color="white">
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
              Ready to Transform Your Business with AI?
            </h2>
            <p
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Let&apos;s discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/contact')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={() => router.push('/contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-lg"
              >
                Download AI Guide
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20" data-header-color="white">
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