"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ChevronRight, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import FooterSection from "./FooterSection";
import { getBlogRoute, getInsightsRoute } from "../utils/navigationUtils";

export default function Design() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const designCategories = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that deliver exceptional user experiences across all digital platforms.",
      link: "/uiuxdesign"
    },
    {
      icon: "🌐",
      title: "Website Design",
      description: "Crafting visually stunning and responsive websites that captivate audiences and drive business growth.",
      link: "/websitedesign"
    },
    {
      icon: "📱",
      title: "Mobile Experience",
      description: "Designing seamless mobile experiences that engage users and provide optimal functionality on any device.",
      link: "/mobileexperience"
    },
    {
      icon: "🛍️",
      title: "Commerce Experience",
      description: "Building compelling e-commerce experiences that convert visitors into customers and drive sales.",
      link: "/commerceexperience"
    },
    {
      icon: "🔧",
      title: "Prototypes",
      description: "Rapid prototyping solutions that bring ideas to life and validate concepts before full development.",
      link: "/prototype"
    },
    {
      icon: "🎯",
      title: "Brand Identity",
      description: "Creating cohesive brand identities that resonate with audiences and establish strong market presence.",
      link: "/brandconsulting"
    }
  ];

  const clients = [
    "Microsoft", "Google", "Apple", "Amazon", "Meta", "Netflix", 
    "Adobe", "Spotify", "Tesla", "Uber", "Airbnb", "Slack"
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Redesign",
      category: "UI/UX Design",
      image: "/assets/port1.jpg",
      description: "Complete redesign of a major e-commerce platform resulting in 40% increase in conversions."
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Design",
      image: "/assets/port2.jpg",
      description: "Intuitive mobile banking experience serving over 2 million users daily."
    },
    {
      title: "SaaS Dashboard Design",
      category: "Web Design",
      image: "/assets/port3.jpg",
      description: "Complex data visualization dashboard that simplified user workflows by 60%."
    }
  ];

  const featuredStories = [
    {
      id: 4,
      title: "The Future of Design Systems",
      excerpt: "How we're building scalable design systems that adapt to evolving user needs and business requirements.",
      image: "/assets/port4.jpg",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Accessibility in Modern Design",
      excerpt: "Creating inclusive digital experiences that work for everyone, regardless of their abilities or circumstances.",
      image: "/assets/port5.jpg",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Design Thinking in Practice",
      excerpt: "Real-world applications of design thinking methodology in solving complex business challenges.",
      image: "/assets/portfoliodetail.jpg",
      readTime: "6 min read"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is your design process?",
      answer: "Our design process follows a human-centered approach: Research & Discovery → Ideation & Concept Development → Prototyping & Testing → Design & Refinement → Implementation & Launch. We involve stakeholders at every stage to ensure alignment with business goals."
    },
    {
      id: 2,
      question: "How long does a typical design project take?",
      answer: "Project timelines vary based on complexity and scope. Simple website designs may take 4-6 weeks, while comprehensive digital product designs can take 3-6 months. We provide detailed timelines during the initial consultation."
    },
    {
      id: 3,
      question: "Do you provide design systems and style guides?",
      answer: "Yes, we create comprehensive design systems including style guides, component libraries, and design tokens. This ensures consistency across all touchpoints and makes future updates more efficient."
    },
    {
      id: 4,
      question: "Can you work with our existing brand guidelines?",
      answer: "Absolutely! We can work within your existing brand guidelines or help evolve them as needed. Our team is experienced in adapting designs to align with established brand identities while enhancing user experience."
    },
    {
      id: 5,
      question: "What tools and technologies do you use?",
      answer: "We use industry-leading tools including Figma, Adobe Creative Suite, Sketch, Principle, and various prototyping tools. Our choice of tools depends on project requirements and client preferences."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-white" data-header-color="white">
      <Header />
      
      {/* Animated Hero Title Section with Video */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-screen flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                >
                  Creative
                </motion.h1>
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8"
                  style={{ 
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    background: 'linear-gradient(45deg, #a855f7, #ec4899, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                >
                  Design
                </motion.h1>
              </motion.div>
              
              <motion.p
                className="text-lg text-gray-300 max-w-lg leading-relaxed text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Where imagination meets innovation. We craft digital experiences that inspire, 
                engage, and transform the way people interact with technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                className="flex justify-center lg:justify-start"
              >
                <button className="group inline-flex items-center gap-3 text-white hover:text-purple-300 transition-all duration-300 text-base font-medium">
                  <span className="relative">
                    Explore Our Work
                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-purple-300 transition-all duration-300 group-hover:w-full"></div>
                  </span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path 
                      d="M5 12h14m-7-7l7 7-7 7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Large Video */}
            <motion.div
              className="flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            >
              <div className="relative">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                  onEnded={(e) => {
                    e.currentTarget.pause();
                  }}
                >
                  <source src="/assets/design2.mp4" type="video/mp4" />
                </video>
                
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 blur-xl -z-10 scale-110"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-2xl -z-20 scale-125"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Design Categories Section */}
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
              Design Services We Offer
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              From concept to creation, we provide comprehensive design services that transform 
              ideas into compelling digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designCategories.map((category, index) => (
              <motion.a
                key={category.title}
                href={category.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3
                  className="text-xl font-semibold text-black mb-4 group-hover:text-purple-600 transition-colors"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {category.title}
                </h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-purple-600 group-hover:gap-4 transition-all duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2
              className="text-2xl md:text-3xl text-gray-900 font-medium mb-4"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Trusted by Industry Leaders
            </h2>
            <p
              className="text-gray-600 max-w-xl mx-auto"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              We partner with forward-thinking companies to create exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-gray-400 hover:text-gray-700 transition-colors duration-300 text-lg font-medium">
                  {client}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
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
              Featured Case Studies
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors"
            >
              <span>View All</span>
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
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span
                    className="text-sm text-purple-500 mb-2 block"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {study.category}
                  </span>
                  <h3
                    className="text-lg font-medium text-black leading-tight mb-3"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {study.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Stories Section */}
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
              Featured Stories
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Insights, trends, and stories from the world of design and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => router.push(getBlogRoute(story.id))}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>{story.readTime}</span>
                  </div>
                  <h3
                    className="text-lg font-medium text-black leading-tight mb-3"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {story.title}
                  </h3>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {story.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Explore All Insights Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button 
              onClick={() => router.push(getInsightsRoute())}
              className="inline-flex items-center gap-2 text-purple-500 border-2 border-purple-500 rounded-lg px-6 py-3 hover:bg-purple-50 transition-colors"
            >
              <span>Explore all Insights</span>
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

      {/* CTA Banner Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Let&apos;s collaborate to create exceptional design experiences that captivate your audience 
              and drive meaningful results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
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
                  Let&apos;s Create Something Amazing
                </h2>
                
                <p
                  className="text-gray-600 leading-relaxed mb-8"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Ready to bring your vision to life? Our design experts are here to help you create 
                  exceptional digital experiences that resonate with your audience and achieve your business goals.
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
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                    <option>Select project type</option>
                    <option>UI/UX Design</option>
                    <option>Website Design</option>
                    <option>Mobile App Design</option>
                    <option>Brand Identity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your design needs and project goals"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  ></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">0/1000</div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Start Your Design Journey</span>
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