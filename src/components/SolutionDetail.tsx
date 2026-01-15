"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import FooterSection from "./FooterSection";

export default function SolutionDetail() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const services = [
    {
      id: 1,
      title: "Service 1 Lorem Ipsum dol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      image: "/assets/solution1.jpg",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Service 2 Lorem Ipsum dol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      image: "/assets/solution2.jpg",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Service 3 Lorem Ipsum dol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      image: "/assets/solution3.jpg",
      imagePosition: "left",
    },
  ];

  const insights = [
    {
      id: 1,
      image: "/assets/Rectangle 88.png",
      category: "Blog",
      readTime: "8 mins read",
      date: "Oct 18, 2025",
      title: "How to Start App Development for Startups Successfully",
    },
    {
      id: 2,
      image: "/assets/Rectangle 88 (1).png",
      category: "Blog",
      readTime: "9 mins read",
      date: "Oct 18, 2025",
      title: "How to Start App Development for Startups Successfully",
    },
    {
      id: 3,
      image: "/assets/Rectangle 88 (2).png",
      category: "Blog",
      readTime: "8 mins read",
      date: "Oct 16, 2025",
      title: "How to Start App Development for Startups Successfully",
    },
  ];

  return (
    <section className="min-h-screen bg-white" data-header-color="white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl text-black font-normal mb-6"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Student Information System
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-full bg-black text-white px-8 py-4 text-base font-medium shadow-lg mb-12"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            <span>Join our Team</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 text-black text-sm">
              ↗
            </span>
          </motion.button>

          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-4xl mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl p-8 md:p-10"
          >
            {/* Phone Mockup Container - Landscape */}
            <div className="relative mx-auto max-w-3xl">
              {/* Phone Frame */}
              <div className="relative bg-black rounded-[2.5rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>
                
                {/* Screen - Landscape aspect ratio */}
                <div className="relative bg-white rounded-[2rem] overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  {/* Video Content */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/assets/baisierweb.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-3xl md:text-4xl text-black font-normal leading-snug"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="text-gray-600 text-base leading-relaxed"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              </p>
            </motion.div>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-16"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  service.imagePosition === "right" ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: service.imagePosition === "left" ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={service.imagePosition === "right" ? "lg:col-start-2" : ""}
                >
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-lg p-8">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: service.imagePosition === "left" ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={service.imagePosition === "right" ? "lg:col-start-1 lg:row-start-1" : ""}
                >
                  <h3
                    className="text-2xl md:text-3xl text-black font-normal mb-4"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-gray-600 text-base leading-relaxed"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blue CTA Section with Video Background */}
      <div className="relative w-full py-20 overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/solutiondetail.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl text-white font-normal mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Ready to Transform Your Student Portal?
          </motion.h2>

          <motion.button
            onClick={() => router.push('/contact')}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-base font-medium shadow-xl cursor-pointer"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            <span>Talk to Our Experts</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm">
              →
            </span>
          </motion.button>
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-full bg-cyan-500 text-white px-8 py-4 text-base font-medium shadow-lg"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <span>Explore all Insights</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm">
                →
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </section>
  );
}
