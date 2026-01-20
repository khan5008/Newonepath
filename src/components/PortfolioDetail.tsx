"use client";

import { motion } from "framer-motion";
import { Bookmark, Share2, Image as ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";
import FooterSection from "./FooterSection";

export default function PortfolioDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = ["/assets/portfoliodetail2.jpg", "/assets/hajjpath.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    "Student Information System",
    "HRM Payroll",
    "Queuing Management",
    "Document Management System",
    "Project Management System",
  ];

  const projectDetails = [
    { label: "Language / Technology Used", value: "React / Node JS / MongoDB" },
    { label: "Timescale", value: "20 Weeks" },
    { label: "Delivered", value: "20 JAN 2025" },
    { label: "Other", value: "-" },
  ];

  return (
    <section className="min-h-screen bg-white" data-header-color="white">
      {/* Hero Image Section */}
      <div className="relative w-full h-screen">
        {heroImages.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            alt="Portfolio Detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p
              className="text-white text-sm md:text-base mb-4"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Industry: Donation
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Basaier&apos;s Digital Takeoff With Web App Portal
            </h1>
          </motion.div>

          {/* Action Buttons - Moved to Middle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 lg:right-20 flex flex-col gap-4"
          >
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
              <Bookmark className="w-5 h-5 text-black" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
              <Share2 className="w-5 h-5 text-black" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Services Provided Section */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl text-black font-light text-center mb-12"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Services Provided
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 border-2 border-gray-300 rounded-full text-sm md:text-base text-gray-700 hover:border-gray-500 hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {service} →
              </motion.button>
            ))}
          </div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Left Column - Description */}
            <div>
              <h3
                className="text-2xl md:text-3xl text-black font-normal mb-6"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Title Lorem ipsum dolor sit amet
              </h3>
              <p
                className="text-gray-600 text-base leading-relaxed"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>

            {/* Right Column - Project Info */}
            <div className="space-y-6">
              {projectDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex justify-between items-center pb-4 border-b border-gray-200"
                >
                  <span
                    className="text-gray-600 text-sm md:text-base"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {detail.label}
                  </span>
                  <span
                    className="text-black text-sm md:text-base font-medium text-right"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {detail.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Screen Video Card */}
      <div className="relative w-full h-screen bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center p-8 md:p-12 lg:p-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Phone Mockup Container - Landscape */}
          <div className="relative mx-auto">
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

      {/* Objectives Section */}
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl text-black font-light mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Objectives
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed mb-16"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </motion.p>

          {/* Objective Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl md:text-2xl text-black font-normal mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Objective {item}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Detail 4 - Card Form */}
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="/assets/portfoliodetail4.png"
              alt="Portfolio Detail 4"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl text-black font-light mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Challenges
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed mb-16"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </motion.p>

          {/* Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl md:text-2xl text-black font-normal mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Challenge
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Detail 5 - Card Form */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="/assets/portfoliodetail5.jpg"
              alt="Portfolio Detail 5"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl text-black font-light mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Result
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed mb-16"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </motion.p>

          {/* Result Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl md:text-2xl text-black font-normal mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Result
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </section>
  );
}
