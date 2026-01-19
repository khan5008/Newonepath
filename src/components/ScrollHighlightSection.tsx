"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  "We empower people and businesses",
  "through technology that creates seamless solutions",
  "simplifying challenges and sparking innovation",
  "to help you shape what’s next",
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

  const allWords = lines.join(" ").split(" ");
  let globalIndex = 0;

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
          <p
            className="text-[32px] leading-[1.5] md:text-[40px] lg:text-[48px]"
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 200,
            }}
          >
            {lines.map((line, lineIdx) => (
              <span
                key={lineIdx}
                className="block mb-4 whitespace-nowrap"
              >
                {line.split(" ").map((word, wordIdx) => {
                  const start = (globalIndex / allWords.length) * 0.4;
                  const end = Math.min(1, start + 0.12);

                  const opacity = useTransform(
                    smoothProgress,
                    [start, end],
                    [0.18, 1],
                  );

                  globalIndex++;

                  return (
                    <motion.span
                      key={`${word}-${wordIdx}`}
                      style={{ opacity }}
                      whileHover={{
                        scale: 1.02,
                        textShadow: "0 0 18px rgba(255,255,255,0.35)",
                      }}
                      className="mr-[0.2em] inline-block"
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
