"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  {
    id: 1,
    image: "/assets/Rectangle 84 (1).png",
    category: "Food & Beverage",
    description: "Transforming a leading coffee chain's digital presence with an intuitive mobile app experience",
  },
  {
    id: 2,
    image: "/assets/image 3.png",
    category: "Retail",
    description: "Building seamless e-commerce solutions that connect brands with customers worldwide",
  },
  {
    id: 3,
    image: "/assets/Rectangle 84.png",
    category: "Technology",
    description: "Creating innovative platforms that drive digital transformation and business growth",
  },
  {
    id: 4,
    image: "/assets/Rectangle 85.png",
    category: "Healthcare",
    description: "Developing patient-centric digital solutions that improve care delivery and accessibility",
  },
  {
    id: 5,
    image: "/assets/Rectangle 84 (1).png",
    category: "Finance",
    description: "Designing secure financial applications that simplify transactions and enhance user trust",
  },
  {
    id: 6,
    image: "/assets/image 3.png",
    category: "Education",
    description: "Crafting engaging learning platforms that make education accessible and interactive",
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  const sectionOpacity = useTransform(
    smoothProgress,
    [0, 0.02, 0.85, 1],
    [0, 1, 1, 0],
  );

  // Card animations - faster rendering
  const cardProgress = useTransform(smoothProgress, [0.1, 0.4], [0, 1]);
  const cardOpacity = useTransform(
    [sectionOpacity, cardProgress],
    ([so, cp]) => (so as number) * (cp as number)
  );
  const cardY = useTransform(smoothProgress, [0.1, 0.4], [60, 0]);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-[200vh] bg-white text-black overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* White background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50/30" />

      <div className="sticky top-0 flex min-h-screen items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto w-full">
          {/* Case Studies Heading - smaller, black */}
          <motion.h2
            style={{ opacity: sectionOpacity }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-light text-black mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            Case Studies
          </motion.h2>

          {/* Cards Grid - 2 rows, 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full mb-12 justify-items-center">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                style={{
                  opacity: cardOpacity,
                  y: cardY,
                  width: '100%',
                  maxWidth: '340px',
                  height: '480px',
                }}
                className="relative"
              >
                <motion.div 
                  className="relative w-full h-full rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: '#F5F5F5',
                    border: '1px solid #E5E5E5',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  }}
                  whileHover={{ 
                    y: -4,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[280px] overflow-hidden bg-gray-200">
                    <img
                      src={study.image}
                      alt={study.category}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Blue circular icon with arrow - top right */}
                    <div className="absolute top-3 right-3 z-20">
                      <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 13L13 7M13 7H7M13 7V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 flex flex-col h-[200px] justify-between" style={{ backgroundColor: '#F5F5F5' }}>
                    {/* Category Label */}
                    <motion.p
                      style={{ 
                        opacity: cardOpacity,
                        fontFamily: "var(--font-poppins)", 
                        fontWeight: 400,
                        fontSize: '21px',
                      }}
                      className="text-black mb-2"
                    >
                      {study.category}
                    </motion.p>

                    {/* Description - thinner and lighter color */}
                    <motion.p
                      style={{ 
                        opacity: cardOpacity,
                        fontFamily: "var(--font-poppins)", 
                        fontWeight: 300,
                        fontSize: '21px',
                      }}
                      className="text-black/60 leading-[1.4]"
                    >
                      {study.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Free Consultation Button */}
          <motion.div
            style={{ opacity: sectionOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 rounded-full px-8 py-4 flex items-center gap-3 text-white font-medium text-lg transition-all shadow-lg"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span>Free Consultation</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

