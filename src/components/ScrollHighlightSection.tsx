"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const paragraph =
  "We exist to empower people and businesses with technology,creating seamless solutions that simplify challenges, spark innovation, and help you shape what’s next";

export default function ScrollHighlightSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
    [0, 0.05, 0.85, 1],
    [0, 1, 1, 0],
  );

  const words = paragraph.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-[220vh] bg-black text-white"
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center px-6 md:px-20 lg:px-32">
        <motion.div
          style={{ opacity: sectionOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p
            className="text-[24px] leading-[1.5] text-white md:text-[30px] md:leading-[1.6] lg:text-[40px] lg:leading-[1.7]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 200 }}
          >
            {words.map((word, index) => {
              const start = (index / words.length) * 0.9;
              const end = Math.min(1, start + 0.12);

              const opacity = useTransform(
                smoothProgress,
                [start, end],
                [0.18, 1],
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
          </p>
        </motion.div>
      </div>
    </section>
  );
}
