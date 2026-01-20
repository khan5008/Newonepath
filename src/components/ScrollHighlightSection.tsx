"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  "We empower people and businesses",
  "through technology that creates seamless solutions",
  "simplifying challenges and sparking innovation",
  "to help you shape what's next",
];

export default function ScrollHighlightSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    mass: 0.15,
  });

  const sectionOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
  );

  // Create a single transform for the entire text animation
  const textOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3],
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] bg-black text-white -mt-1"
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center px-8">
        <motion.div
          style={{ opacity: sectionOpacity }}
          className="mx-auto w-full max-w-[1400px] text-center"
        >
          <motion.p
            style={{ 
              opacity: textOpacity,
              fontFamily: "var(--font-poppins)",
              fontWeight: 200,
            }}
            className="text-[32px] leading-[1.5] md:text-[40px] lg:text-[48px]"
          >
            {lines.map((line, lineIdx) => (
              <span
                key={lineIdx}
                className="block mb-4 whitespace-nowrap"
              >
                {line.split(" ").map((word, wordIdx) => (
                  <motion.span
                    key={`${word}-${wordIdx}`}
                    whileHover={{
                      scale: 1.02,
                      textShadow: "0 0 18px rgba(255,255,255,0.35)",
                    }}
                    className="mr-[0.2em] inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}