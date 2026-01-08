"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServicesSection() {
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

  // Card animations - cards appear fully when section is in view (not partially)
  const card1Progress = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const card1Opacity = useTransform(
    [sectionOpacity, card1Progress],
    ([so, cp]) => (so as number) * (cp as number)
  );
  const card1Y = useTransform(smoothProgress, [0.1, 0.3], [80, 0]);

  const card2Progress = useTransform(smoothProgress, [0.15, 0.35], [0, 1]);
  const card2Opacity = useTransform(
    [sectionOpacity, card2Progress],
    ([so, cp]) => (so as number) * (cp as number)
  );
  const card2Y = useTransform(smoothProgress, [0.15, 0.35], [80, 0]);

  const card3Progress = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const card3Opacity = useTransform(
    [sectionOpacity, card3Progress],
    ([so, cp]) => (so as number) * (cp as number)
  );
  const card3Y = useTransform(smoothProgress, [0.2, 0.4], [80, 0]);

  const card4Progress = useTransform(smoothProgress, [0.25, 0.45], [0, 1]);
  const card4Opacity = useTransform(
    [sectionOpacity, card4Progress],
    ([so, cp]) => (so as number) * (cp as number)
  );
  const card4Y = useTransform(smoothProgress, [0.25, 0.45], [80, 0]);

  const card5Progress = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
  const card5Opacity = useTransform(
    [sectionOpacity, card5Progress],
    ([so, cp]) => (so as number) * (cp as number)
  );
  const card5Y = useTransform(smoothProgress, [0.3, 0.5], [80, 0]);

  const card6Progress = useTransform(smoothProgress, [0.35, 0.55], [0, 1]);
  const card6Opacity = useTransform(
    [sectionOpacity, card6Progress],
    ([so, cp]) => (so as number) * (cp as number)
  );
  const card6Y = useTransform(smoothProgress, [0.35, 0.55], [80, 0]);

  const headingText = "Dive Into Limitless Services, Crafted for You";
  const words = headingText.split(" ");

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-[200vh] bg-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Pure black background - no dots */}
      <div className="absolute inset-0 bg-black" />

      <div className="sticky top-0 flex min-h-screen items-center justify-center px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Feature Tag */}
          <motion.div
            style={{ opacity: sectionOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start mb-6"
          >
            <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-1.5">
              <span className="text-blue-300 text-xs md:text-sm font-medium">#1 DESIGN</span>
            </div>
          </motion.div>

          {/* Main Heading with scroll-based word highlighting */}
          <motion.div
            style={{ opacity: sectionOpacity }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-8 md:mb-10"
          >
            <h2
              className="text-[24px] md:text-[32px] lg:text-[40px] font-light text-center md:text-left max-w-3xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              {words.map((word, index) => {
                const start = (index / words.length) * 0.5; // Faster start
                const end = Math.min(1, start + 0.12); // Faster completion

                const opacity = useTransform(
                  smoothProgress,
                  [start, end],
                  [0.15, 1], // Slightly brighter initial state
                );

                return (
                  <motion.span
                    key={`${word}-${index}`}
                    style={{ opacity }}
                    whileHover={{
                      scale: 1.02,
                      textShadow: "0 0 18px rgba(255,255,255,0.35)",
                    }}
                    className="mr-[0.15em] inline-block align-baseline text-white"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h2>
          </motion.div>

          {/* 2x2x2 Grid Layout (3 rows, 2 cards each) */}
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            {/* Row 1: Elevate Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              {/* Card 1 - Butterfly Video (Left) */}
              <motion.div
                style={{
                  opacity: card1Opacity,
                  y: card1Y,
                  height: '380px',
                }}
                className="relative w-full"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black border border-white/10">
                  <video
                    src="/assets/butterfly.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Learn More Button */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ opacity: card1Opacity }}
                      className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors w-fit"
                    >
                      <span className="text-sm md:text-base font-medium">Learn More</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Elevate Text (Right) */}
              <motion.div
                style={{
                  opacity: card2Opacity,
                  y: card2Y,
                  height: '380px',
                }}
                className="relative w-full"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-950/50 to-black p-6 md:p-8 flex flex-col justify-end border border-white/10">
                  {/* #1 DESIGN Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-3 py-1">
                      <span className="text-blue-300 text-xs font-medium">#1 DESIGN</span>
                    </div>
                  </div>
                  
                  <motion.h3
                    style={{
                      opacity: card2Opacity,
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 300,
                    }}
                    className="text-[36px] md:text-[44px] font-light text-white mb-4 relative z-10"
                  >
                    Elevate
                  </motion.h3>
                  <motion.p
                    style={{
                      opacity: card2Opacity,
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 300,
                    }}
                    className="text-gray-300 text-sm md:text-base leading-relaxed relative z-10"
                  >
                    &quot;From identity to impact, design that moves markets.&quot;
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Orchestrate Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              {/* Card 3 - Orchestrate Text (Left) */}
              <motion.div
                style={{
                  opacity: card3Opacity,
                  y: card3Y,
                  height: '380px',
                }}
                className="relative w-full"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-950/50 to-black p-6 md:p-8 flex flex-col justify-end border border-white/10">
                  <motion.h3
                    style={{
                      opacity: card3Opacity,
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 300,
                    }}
                    className="text-[36px] md:text-[44px] font-light text-white mb-4 relative z-10"
                  >
                    Orchestrate
                  </motion.h3>
                  <motion.p
                    style={{
                      opacity: card3Opacity,
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 300,
                    }}
                    className="text-gray-300 text-sm md:text-base leading-relaxed relative z-10"
                  >
                    Seamless tech, data, and cloud—working as one.
                  </motion.p>
                </div>
              </motion.div>

              {/* Card 4 - #1 BUILD Video (Right) */}
              <motion.div
                style={{
                  opacity: card4Opacity,
                  y: card4Y,
                  height: '380px',
                }}
                className="relative w-full"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black border border-white/10">
                  <video
                    src="/assets/bg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50" />
                  
                  {/* #1 BUILD Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-3 py-1">
                      <span className="text-blue-300 text-xs font-medium">#1 BUILD</span>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ opacity: card4Opacity }}
                      className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors w-fit"
                    >
                      <span className="text-sm md:text-base font-medium">Learn More</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Accelerate Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              {/* Card 5 - Earth Video (Left) */}
              <motion.div
                style={{
                  opacity: card5Opacity,
                  y: card5Y,
                  height: '380px',
                }}
                className="relative w-full"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black border border-white/10">
                  <video
                    src="/assets/earth.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* #1 DESIGN Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-3 py-1">
                      <span className="text-blue-300 text-xs font-medium">#1 DESIGN</span>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ opacity: card5Opacity }}
                      className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors w-fit"
                    >
                      <span className="text-sm md:text-base font-medium">Learn More</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Card 6 - Accelerate Text (Right) */}
              <motion.div
                style={{
                  opacity: card6Opacity,
                  y: card6Y,
                  height: '380px',
                }}
                className="relative w-full"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-950/50 to-black p-6 md:p-8 flex flex-col justify-end border border-white/10">
                  <motion.h3
                    style={{
                      opacity: card6Opacity,
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 300,
                    }}
                    className="text-[36px] md:text-[44px] font-light text-white mb-4 relative z-10"
                  >
                    Accelerate
                  </motion.h3>
                  <motion.p
                    style={{
                      opacity: card6Opacity,
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 300,
                    }}
                    className="text-gray-300 text-sm md:text-base leading-relaxed relative z-10"
                  >
                    AI-driven growth, measurable performance, faster outcomes.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
