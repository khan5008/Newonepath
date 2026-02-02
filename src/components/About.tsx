"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import FooterSection from "./FooterSection";

export default function About() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const employees = [
    { id: 1, image: "/assets/emp1.jpg", name: "Name Lorem", role: "DESIGNER" },
    { id: 2, image: "/assets/emp2.jpg", name: "Name Lorem", role: "DEVELOPER" },
    { id: 3, image: "/assets/emp3.png", name: "Name Lorem", role: "DESIGNER" },
    { id: 4, image: "/assets/Manager.jpeg", name: "Name Lorem", role: "MANAGER" },
    { id: 5, image: "/assets/emp1.jpg", name: "Name Lorem", role: "DESIGNER" },
    { id: 6, image: "/assets/emp2.jpg", name: "Name Lorem", role: "DEVELOPER" },
    { id: 7, image: "/assets/emp3.png", name: "Name Lorem", role: "DESIGNER" },
    { id: 8, image: "/assets/Manager.jpeg", name: "Name Lorem", role: "MANAGER" },
    { id: 9, image: "/assets/emp1.jpg", name: "Name Lorem", role: "DESIGNER" },
    { id: 10, image: "/assets/emp2.jpg", name: "Name Lorem", role: "DEVELOPER" },
    { id: 11, image: "/assets/emp3.png", name: "Name Lorem", role: "DESIGNER" },
    { id: 12, image: "/assets/Manager.jpeg", name: "Name Lorem", role: "MANAGER" },
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
      readTime: "12 mins read",
      date: "December 09, 2025",
      title: "A Complete Guide to Mobile App Development",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen bg-white" data-header-color="white">
      {/* Main Content */}
      <div className="pt-20 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* About Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-4"
          >
            {/* Small Title */}
            <h2 
              className="text-[40px] text-black font-normal"
              style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif', fontWeight: 400 }}
            >
              About Us
            </h2>

            {/* Main Heading */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl text-gray-700 font-light leading-relaxed max-w-5xl mx-auto"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </h1>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-6 relative"
            >
              <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/About.png" 
                  alt="About Us Office"
                  className="w-full h-auto object-cover"
                />
                {/* Optional overlay text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-6xl md:text-8xl font-bold opacity-20">
                    OnePath
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Black Background Section with Video and Stats */}
      <div className="relative w-full bg-black">
        {/* Video Background */}
        <div className="relative w-full h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="/assets/About.mp4" type="video/mp4" />
          </video>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center text-xl md:text-2xl lg:text-3xl max-w-4xl mb-20"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Every innovation that happens here is out of a quest to get better at what we are already doing. We deliver ideas that make a difference, create experiences that transform lives and build ecosystems that foster progress.
            </motion.p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full max-w-6xl">
              {/* Stat 1 - 700+ */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.h3
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  700+
                </motion.h3>
                <p 
                  className="text-white text-base md:text-lg lg:text-xl"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Projects launched
                  <br />
                  successfully across the globe
                </p>
              </motion.div>

              {/* Stat 2 - 10M */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.h3
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  10M
                </motion.h3>
                <p 
                  className="text-white text-base md:text-lg lg:text-xl"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Daily customer engagement
                  <br />
                  through our projects
                </p>
              </motion.div>

              {/* Stat 3 - 100+ */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.h3
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  100+
                </motion.h3>
                <p 
                  className="text-white text-base md:text-lg lg:text-xl"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Digital transformation stories
                  <br />
                  that made a difference
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            {/* Title */}
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl text-black font-light"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Our Story
            </h2>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden"
            >
              <img 
                src="/assets/About.png" 
                alt="Our Story"
                className="w-full h-auto object-cover"
              />
              {/* Optional overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-4xl md:text-6xl font-bold opacity-20">
                  OnePath
                </span>
              </div>
            </motion.div>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-700 text-left text-lg md:text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto pt-4"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Employee Cards Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl text-black font-light"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              The Creative Team
              <br />
              Behind The Door
            </motion.h2>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Scroll right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {employees.map((employee, index) => (
              <motion.div
                key={employee.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 bg-black rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="relative h-96">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-white">
                  <h3
                    className="text-xl font-medium mb-1"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {employee.name}
                  </h3>
                  <p
                    className="text-sm text-gray-400"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {employee.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Our Team Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-full bg-black text-white px-8 py-4 text-base font-medium shadow-lg"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <span>Join our Team</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 text-black text-sm">
                ↗
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Clients Section */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Clients
            </h2>
            <p
              className="text-gray-400 text-lg"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Our clients are everything to us; so are we to them.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {[
              { name: "IKEA", logo: "IKEA" },
              { name: "Marriott", logo: "Marriott" },
              { name: "Garmin", logo: "GARMIN" },
              { name: "Federal Bank", logo: "FEDERAL BANK" },
              { name: "Synthite", logo: "Synthite" },
              { name: "Alyasra", logo: "alyasra" },
              { name: "GEOJIT", logo: "GEOJIT" },
              { name: "Nestle", logo: "Nestlé" },
              { name: "Microsoft", logo: "Microsoft" },
              { name: "Apple", logo: "Apple" },
              { name: "Google", logo: "Google" },
              { name: "Amazon", logo: "Amazon" },
              { name: "Tesla", logo: "Tesla" },
              { name: "Netflix", logo: "Netflix" },
              { name: "Spotify", logo: "Spotify" },
              { name: "Adobe", logo: "Adobe" },
              { name: "Samsung", logo: "Samsung" },
              { name: "Sony", logo: "Sony" },
              { name: "Nike", logo: "Nike" },
              { name: "Coca Cola", logo: "Coca Cola" },
              { name: "McDonald's", logo: "McDonald's" },
              { name: "Starbucks", logo: "Starbucks" },
              { name: "BMW", logo: "BMW" },
              { name: "Mercedes", logo: "Mercedes" },
            ].map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center py-4 hover:opacity-70 transition-opacity group cursor-pointer"
              >
                <span
                  className="text-white text-lg font-medium group-hover:scale-105 transition-transform inline-block"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  {client.logo}
                </span>
              </motion.div>
            ))}
          </div>

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
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white text-white px-8 py-3 text-base font-medium hover:bg-white hover:text-black transition-colors"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              <span>View all clients</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Insights Section */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl text-black font-light mb-12"
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
            <motion.a
              href="/insights"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-black text-black px-8 py-3 text-base font-medium hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <span>Explore all Insights</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </section>
  );
}