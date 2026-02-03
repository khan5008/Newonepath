"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  {
    id: "home",
    video: "/assets/home.mp4",
    focus: "60% center",
    tag: "Technology & Experiences",
    title: "We build digital products that move people.",
    description:
      "OnePath blends strategy, design, and engineering to power what's next.",
  },
  {
    id: "nge",
    video: "/assets/NGE.mp4",
    focus: "78% center",
    tag: "Digital Innovation",
    title: "Transforming education through technology.",
    description:
      "Creating intuitive learning experiences that engage and inspire students.",
  },
  {
    id: "alsafar",
    video: "/assets/Al safar.mp4",
    focus: "82% center",
    tag: "Mobile Solutions",
    title: "Seamless travel experiences made simple.",
    description:
      "Comprehensive digital solutions that streamline the entire journey.",
  },
];

export default function HeroScreen() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smooth black fade-out (not brown) - more gradual transition
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1, 0.98]);

  // Black overlay that increases as we scroll
  const blackOverlay = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0.3, 1]);

  // Rotate hero background + text based on video completion
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  // Fallback timer in case video events don't fire
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 10000); // 10 seconds fallback

    return () => clearTimeout(fallbackTimer);
  }, [currentIndex]);

  const currentSlide = heroSlides[currentIndex];
  const nextSlide = heroSlides[(currentIndex + 1) % heroSlides.length];

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity, scale }}
      className="relative min-h-screen text-white overflow-hidden bg-black z-20 -mb-1"
    >
      {/* Background video - rotates between hero1, NGE, and Al Safar with a soft crossfade.
          Object position is pushed more to the right for app promos so the left text
          column stays clean and readable. Fixed dimensions to prevent size changes. */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentSlide.id}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            src={currentSlide.video}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            style={{ objectPosition: currentSlide.focus, width: '100%', height: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Dark gradient overlay - pure black, no brown tones */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
      
      {/* Additional black overlay that increases on scroll for smooth fade */}
      <motion.div
        style={{ opacity: blackOverlay }}
        className="pointer-events-none absolute inset-0 bg-black"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Hero content */}
        <main className="flex flex-1 flex-col justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18" style={{ paddingTop: '20rem', paddingBottom: '2rem' }}>
          <div className="max-w-xl space-y-3 sm:space-y-4">
            <p className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/80">
              {currentSlide.tag}
            </p>

            <h1 className="text-shadow-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight text-white">
              {currentSlide.title}
            </h1>

            <p className="max-w-lg text-xs sm:text-sm md:text-base font-normal text-white/80 leading-relaxed">
              {currentSlide.description}
            </p>

            <div className="mt-4 sm:mt-5 flex items-center gap-4 sm:gap-5">
              <a 
                href="/about"
                className="rounded-full border border-white/40 bg-white/5 px-4 sm:px-5 py-2 text-xs sm:text-sm md:text-base font-normal text-white shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-lg hover:bg-white/10 hover:border-white/50 cursor-pointer transition-all duration-300"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Bottom center double chevron - responsive positioning */}
          <div className="pointer-events-none absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-0.5 animate-bounce">
              <span className="text-lg sm:text-xl text-white">˅</span>
              <span className="text-lg sm:text-xl text-white">˅</span>
            </div>
          </div>

          {/* Bottom-right preview card - Hidden on mobile, responsive positioning on desktop */}
          <div className="pointer-events-none absolute bottom-16 sm:bottom-20 right-4 z-40 hidden md:flex flex-col items-end md:right-6 lg:right-10 md:bottom-28 lg:bottom-32 xl:bottom-36">
            {/* Preview card - responsive dimensions */}
            <div className="pointer-events-auto flex w-[260px] md:w-[280px] lg:w-[300px] overflow-hidden rounded-xl border border-white/15 bg-black/70 backdrop-blur-sm">
              {/* Image container - responsive */}
              <div className="relative h-[60px] w-[80px] md:h-[70px] md:w-[90px] lg:h-[90px] lg:w-[120px] flex-shrink-0 overflow-hidden">
                <img
                  src="/assets/Rectangle 85.png"
                  alt="App preview"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between px-2.5 py-2 md:px-3 md:py-2.5 text-left">
                <div className="text-[9px] md:text-[10px] font-normal uppercase tracking-[0.25em] text-white/70">
                  Up Next
                </div>
                <div className="text-[11px] md:text-[13px] font-normal text-white line-clamp-2 leading-tight">
                  {nextSlide.title}
                </div>

                {/* Internal slider-style indicator synced with slides */}
                <div className="mt-1.5 md:mt-2 flex gap-1.5">
                  {[0, 1, 2].map((index) => (
                    <span
                      key={index}
                      className={`h-[2px] flex-1 rounded-full ${
                        index === currentIndex ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.section>
  );
}


