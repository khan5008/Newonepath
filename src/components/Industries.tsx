"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FooterSection from "./FooterSection";

export default function Industries() {
  const industries = [
    "Automobile",
    "Beauty",
    "Construction",
    "Corporate",
    "Education",
    "Electronics",
    "Fashion",
    "Financial",
    "Food",
    "Healthcare",
    "Hospitality",
    "Information Technology",
  ];

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
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="w-full">
          {/* Bold Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center justify-between gap-20 w-full">
              <div className="flex-1">
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl text-black font-light leading-tight mb-8"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Boosting Growth Across Industries
                </h1>
                <p
                  className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-lg"
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
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[180px] md:text-[220px] lg:text-[280px] font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent flex-shrink-0"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '0.9' }}
              >
                20+
              </motion.div>
            </div>
          </motion.div>

          {/* Industries List */}
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
                className="group cursor-pointer border-b border-gray-200 hover:border-gray-400 transition-colors"
              >
                <div className="flex items-center justify-between py-6">
                  <h3
                    className="text-2xl md:text-3xl text-black font-light group-hover:text-gray-700 transition-colors"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {industry}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
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
    </section>
  );
}
