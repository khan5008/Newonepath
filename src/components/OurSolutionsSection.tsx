"use client";

import { motion } from "framer-motion";

const solutions = [
  "Student Information System",
  "HRM Payroll",
  "Queuing Management",
  "Document Management System",
  "Project Management System",
];

export default function OurSolutionsSection() {
  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background network video full screen */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src="/assets/network.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-5"
        >
          <h2
            className="text-[32px] md:text-[44px] lg:text-[52px] font-light"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            Our Solutions
          </h2>

          <p
            className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-white/85"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            We exist to empower people and businesses with technology, creating
            seamless solutions that simplify challenges and scale with you.
          </p>
        </motion.div>

        {/* Glassy solution pills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-10 flex flex-col gap-4"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {solutions.map((label, index) => (
              <motion.button
                // eslint-disable-next-line react/no-array-index-key
                key={`${label}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 18px 45px rgba(15,23,42,0.55)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 md:px-7 py-2 md:py-2.5 text-sm md:text-[15px] text-white backdrop-blur-2xl shadow-[0_12px_35px_rgba(15,23,42,0.7)]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                <span>{label}</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black text-xs">
                  ↴
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}


