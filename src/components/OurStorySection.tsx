"use client";

import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <motion.section
      data-section="our-story"
      data-header-color="black"
      className="relative min-h-screen bg-black text-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background gradient to deep teal/black */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#0b4260_0,#020617_55%,#000000_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-16 lg:px-28 py-12 md:py-16">
        {/* Left text block */}
        <div className="w-full lg:w-1/2 max-w-2xl space-y-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[34px] md:text-[44px] lg:text-[52px] font-light text-white"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            Our Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-[18px] leading-relaxed md:text-[22px] md:leading-[1.7] lg:text-[24px] lg:leading-[1.7] text-white/80 max-w-2xl"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            We exist to empower people and businesses with technology—creating
            seamless solutions that simplify challenges,&nbsp;
            <span className="text-white/60 font-normal">
              spark innovation
            </span>
            , and help you shape what&apos;s next.
          </motion.p>

          {/* Learn more pill button */}
          <motion.a
            href="/about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(255,255,255,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-sm md:text-[14px] font-normal text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-lg border border-white/30 cursor-pointer"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span>Learn More</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black text-sm font-semibold">
              ↓
            </span>
          </motion.a>
        </div>

        {/* Right globe / earth video */}
        <div className="hidden lg:flex w-1/2 justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative h-[520px] w-[520px] xl:h-[580px] xl:w-[580px] -mt-10"
          >
            {/* Outer glow */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-cyan-500/25 blur-3xl" />

            {/* Circular video mask - only earth visible, no black ring */}
            <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
              <video
                src="/assets/earth.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover scale-125"
              />

              {/* Subtle radial overlay for depth */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,transparent_0,transparent_35%,rgba(0,0,0,0.65)_80%,rgba(0,0,0,0.9)_100%)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}


