"use client";

import { PhoneCall, Search } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  {
    id: "hero1",
    video: "/assets/hero1.mp4",
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
    tag: "EdTech Experience",
    title: "NGE — Learning reimagined for the next generation.",
    description:
      "An education platform we crafted to make lessons intuitive and immersive.",
  },
  {
    id: "alsafar",
    video: "/assets/Al safar.mp4",
    focus: "82% center",
    tag: "Super App Story",
    title: "Al Safar — From booking to arrival, all in one app.",
    description:
      "Al Safar connects travellers with a frictionless, end‑to‑end digital journey.",
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

  // Rotate hero background + text every 6 seconds
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(id);
  }, []);

  const currentSlide = heroSlides[currentIndex];
  const nextSlide = heroSlides[(currentIndex + 1) % heroSlides.length];

  const navItems = [
    "Services",
    "Solutions",
    "Industries",
    "Works",
    "About",
    "Careers",
    "Contact",
  ];

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity, scale }}
      className="relative min-h-screen text-white overflow-hidden bg-black"
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
            loop
            muted
            playsInline
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

      {/* Sticky Header / Navigation - no blur / overlay, just clean on top of video */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 pt-1 pb-1 bg-transparent md:px-12 lg:px-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <img
            src="/assets/wlogo.png"
            alt="OnePath Solutions"
            className="h-24 w-auto md:h-28 lg:h-32"
          />
        </motion.div>

        {/* Center nav items - moved more to the right */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="hidden items-center gap-12 text-[16px] font-normal tracking-normal text-white md:flex md:ml-auto md:mr-8"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.15 + index * 0.05,
                ease: "easeOut",
              }}
              className="bg-transparent text-white/90 transition-colors hover:text-white"
            >
              {item}
            </motion.button>
          ))}
        </motion.nav>

        {/* Right side actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-6 text-sm text-white/80"
        >
          <button className="hidden rounded-full border border-white/30 bg-black/20 px-4 py-1 text-[14px] font-normal tracking-normal backdrop-blur-md hover:border-white hover:bg-black/40 hover:text-white md:inline-flex">
            Request a quote
          </button>

          <div className="flex items-center gap-4">
            <PhoneCall className="hidden h-4 w-4 text-white md:inline-block" />
            <Search className="h-4 w-4 text-white" />
            {/* Save/Bookmark icon */}
            <svg
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
            >
              <path
                d="M13.6465 0.25C14.7959 0.25025 15.75 1.16282 15.75 2.29492V19.8828C15.75 20.0447 15.7041 20.1997 15.6201 20.334L15.5469 20.4512H15.5439L15.585 20.4912L15.2725 20.6504C15.0521 20.7625 14.854 20.7652 14.6973 20.7305C14.6222 20.7138 14.5599 20.6889 14.5156 20.6699C14.4993 20.6629 14.47 20.6497 14.4648 20.6475C14.4502 20.6411 14.4532 20.6429 14.4629 20.6455L14.4307 20.6367L14.4014 20.6201L7.99902 16.8428L1.59863 20.6201L1.59961 20.6211C1.27034 20.8159 0.865203 20.7801 0.582031 20.5576L0.542969 20.5967L0.379883 20.334C0.29593 20.1997 0.25 20.0457 0.25 19.8838V2.29492C0.25009 1.83327 0.405977 1.47358 0.560547 1.22949C0.637765 1.10761 0.715306 1.01358 0.773438 0.949219C0.780554 0.941341 0.787463 0.933724 0.793945 0.926758V0.920898L0.870117 0.84668C1.25078 0.47828 1.77663 0.250094 2.35449 0.25H13.6465ZM2.35352 1.77539C2.20258 1.7755 2.06562 1.83608 1.9668 1.93164L1.95605 1.94043C1.86396 2.03495 1.8087 2.16008 1.80859 2.29492V18.7168L7.87305 15.1406L8 15.0654L8.12695 15.1406L14.1895 18.7178V2.29492C14.1892 2.01513 13.9538 1.77544 13.6445 1.77539H2.35352Z"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
            {/* Menu icon */}
            <button className="inline-flex flex-col items-center justify-center gap-[3px]">
              <span className="h-[2px] w-5 bg-white" />
              <span className="h-[2px] w-5 bg-white" />
              <span className="h-[2px] w-5 bg-white" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Hero content */}
        <main className="flex flex-1 flex-col justify-end px-8 pb-32 pt-4 md:px-16 lg:px-20 lg:pb-40">
          <div className="max-w-xl space-y-3">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/80">
              {currentSlide.tag}
            </p>

            <h1 className="text-shadow-lg text-[26px] font-normal leading-tight text-white md:text-[36px] lg:text-[42px]">
              {currentSlide.title}
            </h1>

            <p className="max-w-lg text-[12px] md:text-[13px] font-normal text-white/80">
              {currentSlide.description}
            </p>

            <div className="mt-5 flex items-center gap-5">
              <button className="rounded-full border border-white/40 bg-white/5 px-5 py-2 text-[13px] md:text-[14px] font-normal text-white shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-lg hover:bg-white/10 hover:border-white/50">
                Learn more
              </button>
            </div>
          </div>

          {/* Bottom center double chevron - no background, just arrows */}
          <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-0.5 animate-bounce">
              <span className="text-xl text-white">˅</span>
              <span className="text-xl text-white">˅</span>
            </div>
          </div>

          {/* Bottom-right preview card - absolute position, stays within hero, smaller size */}
          <div className="pointer-events-none absolute bottom-32 right-6 z-40 flex flex-col items-end md:right-10 md:bottom-36">
            {/* Preview card - smaller dimensions */}
            <div className="pointer-events-auto flex w-[300px] overflow-hidden rounded-xl border border-white/15 bg-black/70">
              {/* Image container with a single, clear thumbnail - smaller */}
              <div className="relative h-[90px] w-[120px] flex-shrink-0 overflow-hidden">
                <img
                  src="/assets/Rectangle 85.png"
                  alt="App preview"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between px-3 py-2.5 text-left">
                <div className="text-[10px] font-normal uppercase tracking-[0.25em] text-white/70">
                  Up Next
                </div>
                <div className="text-[13px] font-normal text-white line-clamp-2">
                  {nextSlide.title}
                </div>

                {/* Internal slider-style indicator synced with slides */}
                <div className="mt-2 flex gap-1.5">
                  {[0, 1, 2].map((index) => (
                    // eslint-disable-next-line react/no-array-index-key
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


