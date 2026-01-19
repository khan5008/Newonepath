"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import FooterSection from "./FooterSection";

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = [
    "Charity",
    "E-commerce", 
    "Healthcare",
    "Law & Finance",
    "Education",
    "Real Estate",
    "Tour & Travels",
    "Technology",
    "Food & Restaurants",
    "Religious",
    "Business & Markets",
    "Security",
    "Matrimonial",
    "AutoCare",
    "Rental",
    "Newspapers",
  ];

  const industryData = {
    "Charity": {
      title: "Charity",
      description: "We are guided by technology where possibilities know no bounds, creating digital solutions that empower charitable organizations to make a greater impact. Connectivity weaves a mesmerising tapestry of smart features, seamlessly blending IT services into the very essence of charitable work.",
      projects: [
        {
          id: 1,
          title: "Huda",
          description: "Designed and delivered a multi-audience Islamic learning app with content libraries, live chat with scholars, and an option to take Shahadah.",
          image: "/assets/solution1.jpg"
        },
        {
          id: 2,
          title: "Hajj Path",
          description: "End-to-end Hajj and Umrah booking with secure payments, package selection, and real-time itinerary management.",
          image: "/assets/solution2.jpg"
        },
        {
          id: 3,
          title: "Ershad",
          description: "Accessible student and staff management for special needs schools with scheduling, allocations, and role-based control.",
          image: "/assets/solution3.jpg"
        },
        {
          id: 4,
          title: "AllSafar",
          description: "Travel marketplace for comparing, bidding, and booking curated packages with agent dashboards and secure checkout.",
          image: "/assets/solution4.jpg"
        },
        {
          id: 5,
          title: "Basaier",
          description: "Donation platform for campaigns, recurring giving, Zakat and Sadaqah options, and live impact reporting.",
          image: "/assets/solution5.jpg"
        }
      ]
    },
    "AutoCare": {
      title: "Automobile",
      description: "We are guided by technology where possibilities know no bounds, autonomous driving takes the wheel, guided by sophisticated IT systems, ushering in a new era of mobility. Connectivity weaves a mesmerising tapestry of smart features, seamlessly blending IT services into the very essence of the vehicles.",
      projects: [
        {
          id: 1,
          title: "Turtlewax",
          description: "Achieving glossy greatness for cars with a smooth redefined website",
          image: "/assets/port1.jpg"
        },
        {
          id: 2,
          title: "Tetra Wheels",
          description: "Redefined four wheels meeting open roads with an iconic digital identity",
          image: "/assets/port2.jpg"
        },
        {
          id: 3,
          title: "AlMailem",
          description: "Crafting automotive marvels with web designing for witnessing a thrilling future",
          image: "/assets/port3.jpg"
        },
        {
          id: 4,
          title: "Autoversa",
          description: "A complete brand ideation with a futuristic intent and unmatched aesthetic",
          image: "/assets/port4.jpg"
        }
      ]
    }
  };

  const insights = [
    {
      id: 1,
      image: "/assets/Rectangle 88.png",
      category: "Blog",
      readTime: "11 mins read",
      date: "January 01, 2026",
      title: "Vibe Coding: The Future Defining AI-Native Engineering",
    },
    {
      id: 2,
      image: "/assets/Rectangle 88 (1).png",
      category: "Blog",
      readTime: "13 mins read",
      date: "December 18, 2025",
      title: "NodeJS vs Python: Choosing the Right Backend Technology in 2026",
    },
    {
      id: 3,
      image: "/assets/Rectangle 88 (2).png",
      category: "Blog",
      readTime: "17 mins read",
      date: "December 09, 2025",
      title: "A Complete Guide to Mobile App Development",
    },
  ];

  return (
    <section className="min-h-screen bg-white" data-header-color="white">
      {/* Hero Section - Full Screen */}
      <div className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-20">
        <div className="w-full max-w-7xl">
          {/* Main Content Layout */}
          <div className="flex items-center justify-between gap-8 w-full mb-20">
            {/* Left Side - Title and Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-4xl"
            >
              <h1
                className="text-5xl md:text-6xl lg:text-7xl text-black font-light leading-tight mb-8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Accelerating Success
                <br />
                Across Industries
              </h1>
              <p
                className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Serving across a variety of industries and leaving our mark in every one of them
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-blue-500 font-medium text-base border-2 border-blue-500 rounded-lg px-6 py-3 hover:bg-blue-50 transition-colors"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                <span>Let's talk</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Right Side - 16+ Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-shrink-0"
            >
              <div
                className="text-[140px] md:text-[160px] lg:text-[180px] font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '0.8' }}
              >
                16+
              </div>
            </motion.div>
          </div>

          {/* Industries List - Professional Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-0"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="group cursor-pointer border-b border-gray-200 hover:border-gray-400 transition-all duration-300"
                onClick={() => setSelectedIndustry(industry)}
              >
                <div className="flex items-center justify-between py-6 px-4 hover:px-8 transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="w-2 h-2 rounded-full bg-black transition-colors duration-300"></div>
                    <h3
                      className="text-2xl md:text-3xl text-black font-light hover:text-gray-700 transition-colors duration-300"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {industry}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                      Explore
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                      <ArrowRight className="w-5 h-5 text-black transition-colors duration-300" />
                    </div>
                  </div>
                </div>
                
                {/* Subtle background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/0 to-gray-50/0 group-hover:from-gray-50/30 group-hover:to-gray-50/30 transition-all duration-300 -z-10 rounded-lg"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl text-black font-light mb-12"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Insights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      {insight.category}
                    </span>
                    <span>·</span>
                    <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      {insight.readTime}
                    </span>
                    <span>·</span>
                    <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      {insight.date}
                    </span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl text-black font-normal leading-snug group-hover:text-gray-700 transition-colors"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {insight.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explore All Insights Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-500 text-blue-500 px-8 py-3 text-base font-medium hover:bg-blue-50 transition-colors"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <span>Explore all Insights</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />

      {/* Industry Popup Modal */}
      <AnimatePresence>
        {selectedIndustry && industryData[selectedIndustry as keyof typeof industryData] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center"
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white w-full max-w-6xl h-[98vh] rounded-t-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Close Button */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                  <h2
                    className="text-2xl md:text-3xl font-light text-black"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {industryData[selectedIndustry as keyof typeof industryData].title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto h-[calc(98vh-100px)] px-8 py-8">
                {/* Hero Image */}
                <div className="relative w-full h-96 md:h-[28rem] rounded-2xl overflow-hidden mb-8">
                  <img
                    src="/assets/services.jpg"
                    alt={industryData[selectedIndustry as keyof typeof industryData].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3
                      className="text-white text-3xl md:text-4xl font-light"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {industryData[selectedIndustry as keyof typeof industryData].title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-12">
                  <p
                    className="text-gray-700 text-lg leading-relaxed"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {industryData[selectedIndustry as keyof typeof industryData].description}
                  </p>
                </div>

                {/* Projects Section */}
                <div className="mb-8">
                  <h3
                    className="text-3xl md:text-4xl font-light text-black mb-8"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    Projects
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {industryData[selectedIndustry as keyof typeof industryData].projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <div className="relative overflow-hidden rounded-2xl mb-4">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="space-y-2">
                          <h4
                            className="text-xl md:text-2xl font-medium text-black group-hover:text-blue-600 transition-colors"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                          >
                            {project.title}
                          </h4>
                          <p
                            className="text-gray-600 text-base leading-relaxed"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                          >
                            {project.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* View All Works Button */}
                <div className="flex justify-center py-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-500 text-blue-500 px-8 py-3 text-base font-medium hover:bg-blue-50 transition-colors"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    <span>View all works</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Work with us Section */}
                <div className="bg-gray-50 rounded-2xl p-8 mt-8">
                  <h3
                    className="text-3xl md:text-4xl font-light text-black mb-4"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    Work with us
                  </h3>
                  <p
                    className="text-gray-600 text-base mb-6"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    To find out more about our work or any of our other brands, get in touch. Mail us on{' '}
                    <span className="text-black font-medium">info@webandcrafts.com</span> or call{' '}
                    <span className="text-black font-medium">+91 480 2733 555</span>
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-500 text-blue-500 px-6 py-3 text-base font-medium hover:bg-blue-50 transition-colors"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    <span>Let's talk</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
