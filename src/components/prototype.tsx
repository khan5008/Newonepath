"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ChevronRight, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import FooterSection from "./FooterSection";
import { getServiceRoute } from "../utils/navigationUtils";

export default function Prototype() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const prototypeServices = [
    {
      icon: "🎨",
      title: "Interactive Prototypes",
      description: "Create high-fidelity interactive prototypes that simulate real user interactions and provide stakeholders with a tangible preview of the final product"
    },
    {
      icon: "📱",
      title: "Mobile App Prototypes",
      description: "Design and develop mobile app prototypes with native interactions, gestures, and animations to validate user experience before development"
    },
    {
      icon: "💻",
      title: "Web Application Prototypes",
      description: "Build responsive web application prototypes that demonstrate functionality, user flows, and interface behaviors across different devices"
    },
    {
      icon: "🔄",
      title: "Rapid Prototyping",
      description: "Quick iteration and testing of design concepts through rapid prototyping techniques to validate ideas and gather feedback early in the process"
    },
    {
      icon: "🎯",
      title: "User Testing Prototypes",
      description: "Create prototypes specifically designed for user testing sessions to gather valuable insights and validate design decisions with real users"
    },
    {
      icon: "⚡",
      title: "Clickable Wireframes",
      description: "Transform static wireframes into clickable, interactive prototypes that demonstrate user journeys and information architecture"
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Requirements Analysis",
      description: "We analyze your project requirements, user needs, and business objectives to define the scope and functionality of the prototype."
    },
    {
      id: 2,
      title: "Wireframe Creation",
      description: "Develop detailed wireframes and user flow diagrams to establish the foundation and structure of the interactive prototype."
    },
    {
      id: 3,
      title: "Interactive Design",
      description: "Create high-fidelity interactive prototypes with realistic interactions, animations, and micro-interactions that simulate the final product."
    },
    {
      id: 4,
      title: "User Testing",
      description: "Conduct user testing sessions with the prototype to gather feedback, identify usability issues, and validate design decisions."
    },
    {
      id: 5,
      title: "Iteration & Refinement",
      description: "Refine and iterate the prototype based on user feedback and testing results to optimize user experience and functionality."
    },
    {
      id: 6,
      title: "Handoff & Documentation",
      description: "Provide detailed documentation and specifications to development teams for accurate implementation of the final product."
    },
    {
      id: 7,
      title: "Validation & Approval",
      description: "Final validation of the prototype with stakeholders and approval for development phase with clear specifications and guidelines."
    }
  ];

  const relatedIndustries = [
    {
      title: "SaaS Platforms",
      description: "Interactive prototypes for software-as-a-service applications.",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile application prototypes.",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "E-learning",
      description: "Educational platform prototypes with interactive elements.",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "FinTech",
      description: "Financial technology prototypes with complex user flows.",
      image: "/assets/Rectangle 88 (3).png"
    }
  ];

  const prototypeCaseStudies = [
    {
      title: "SaaS Dashboard Prototype",
      category: "Enterprise Software",
      image: "/assets/Rectangle 88 (4).png"
    },
    {
      title: "Mobile Banking App Prototype",
      category: "FinTech",
      image: "/assets/Rectangle 88 (5).png"
    },
    {
      title: "E-learning Platform Prototype",
      category: "Education",
      image: "/assets/portfoliodetail2.png"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is the difference between wireframes and prototypes?",
      answer: "Wireframes are static blueprints showing layout and structure, while prototypes are interactive models that simulate user interactions and demonstrate functionality. Prototypes provide a more realistic preview of the final product."
    },
    {
      id: 2,
      question: "How long does it take to create a prototype?",
      answer: "Prototype development typically takes 2-6 weeks depending on complexity, number of screens, interactions, and level of fidelity required. Simple clickable prototypes can be completed faster than high-fidelity interactive ones."
    },
    {
      id: 3,
      question: "Can prototypes be used for user testing?",
      answer: "Yes, prototypes are excellent for user testing as they allow users to interact with the design and provide feedback on usability, functionality, and user experience before development begins."
    },
    {
      id: 4,
      question: "What tools do you use for prototyping?",
      answer: "We use industry-leading tools like Figma, Adobe XD, Principle, Framer, and InVision to create interactive prototypes that best suit your project requirements and complexity level."
    }
  ];

  const relatedServices = [
    {
      title: "UI/UX Design",
      description: "Comprehensive UI/UX design services that complement your prototype development.",
      image: "/assets/Rectangle 84.png"
    },
    {
      title: "Website Design",
      description: "Professional website design services based on validated prototype concepts.",
      image: "/assets/Rectangle 84 (1).png"
    },
    {
      title: "Mobile Experience",
      description: "Mobile app design and development services following prototype validation.",
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
      
      {/* Hero Section with Auto-playing Video */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/uiuxdesignvideo.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-20">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-light max-w-2xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Prototypes
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
                  Interactive Prototype Services That Bring Ideas to Life
                </h2>
                
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    We specialize in creating interactive prototypes that bridge the gap between concept and reality. 
                    Our comprehensive prototyping services combine user research, interaction design, and cutting-edge 
                    tools to create realistic previews of your digital products. From clickable wireframes to 
                    high-fidelity interactive prototypes, we help validate ideas, test user experiences, and 
                    ensure successful product development.
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
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors font-medium text-sm"
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

      {/* Prototype Services Section */}
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
              Prototype Services We Offer
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              From interactive wireframes to high-fidelity prototypes, we create realistic previews 
              that help validate concepts, test user experiences, and ensure successful product development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prototypeServices.map((service, index) => (
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

      {/* Our Process Section */}
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
                  alt="Our Prototyping Process"
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
                Our Prototyping Process
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
                      className="w-full flex items-center justify-between py-4 text-left hover:text-green-600 transition-colors"
                    >
                      <h3
                        className="text-lg md:text-xl font-medium text-black"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        {activeProcess === item.id ? (
                          <Minus className="w-6 h-6 text-green-600" />
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
              className="flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors"
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
            <button className="inline-flex items-center gap-2 text-green-500 border-2 border-green-500 rounded-lg px-6 py-3 hover:bg-green-50 transition-colors">
              <span>View all industries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Our Prototype Case Studies Section */}
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
              Our Prototype Case Studies
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prototypeCaseStudies.map((caseStudy, index) => (
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
            <button className="inline-flex items-center gap-2 text-green-500 border-2 border-green-500 rounded-lg px-6 py-3 hover:bg-green-50 transition-colors">
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
                  className="w-full flex items-center justify-between py-6 text-left hover:text-green-600 transition-colors"
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
                    className="inline-flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors"
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
                  Ready to bring your ideas to life with interactive prototypes? Our expert team is here to help you 
                  validate concepts, test user experiences, and ensure your product development success.
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number*
                    </label>
                    <div className="flex">
                      <select className="px-3 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white">
                        <option>🇮🇳</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="+91"
                        className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    placeholder="Brief about your prototype project"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
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