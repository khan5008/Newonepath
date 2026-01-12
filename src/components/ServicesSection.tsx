"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const designVideoRef = useRef<HTMLVideoElement>(null);
  const buildVideoRef = useRef<HTMLVideoElement>(null);
  const marketVideoRef = useRef<HTMLVideoElement>(null);
  
  // Text content refs
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const designVideo = designVideoRef.current;
    const buildVideo = buildVideoRef.current;
    const marketVideo = marketVideoRef.current;
    
    if (!designVideo || !buildVideo || !marketVideo) return;

    // Create individual ScrollTriggers for each section
    
    // Section 1: Design
    ScrollTrigger.create({
      trigger: section1Ref.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(section1Ref.current, { opacity: 1, x: 0, duration: 0.8 });
        designVideo.currentTime = 0;
        designVideo.play();
      },
      onLeave: () => {
        gsap.to(section1Ref.current, { opacity: 0, x: -50, duration: 0.5 });
        designVideo.pause();
      },
      onEnterBack: () => {
        gsap.to(section1Ref.current, { opacity: 1, x: 0, duration: 0.8 });
        designVideo.currentTime = 0;
        designVideo.play();
      },
      onLeaveBack: () => {
        gsap.to(section1Ref.current, { opacity: 0, x: -50, duration: 0.5 });
        designVideo.pause();
      }
    });

    // Section 2: Build
    ScrollTrigger.create({
      trigger: section2Ref.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(section2Ref.current, { opacity: 1, x: 0, duration: 0.8 });
        buildVideo.currentTime = 0;
        buildVideo.play();
      },
      onLeave: () => {
        gsap.to(section2Ref.current, { opacity: 0, x: 50, duration: 0.5 });
        buildVideo.pause();
      },
      onEnterBack: () => {
        gsap.to(section2Ref.current, { opacity: 1, x: 0, duration: 0.8 });
        buildVideo.currentTime = 0;
        buildVideo.play();
      },
      onLeaveBack: () => {
        gsap.to(section2Ref.current, { opacity: 0, x: 50, duration: 0.5 });
        buildVideo.pause();
      }
    });

    // Section 3: Market
    ScrollTrigger.create({
      trigger: section3Ref.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(section3Ref.current, { opacity: 1, x: 0, duration: 0.8 });
        marketVideo.currentTime = 0;
        marketVideo.play();
      },
      onLeave: () => {
        gsap.to(section3Ref.current, { opacity: 0, x: 50, duration: 0.5 });
        marketVideo.pause();
      },
      onEnterBack: () => {
        gsap.to(section3Ref.current, { opacity: 1, x: 0, duration: 0.8 });
        marketVideo.currentTime = 0;
        marketVideo.play();
      },
      onLeaveBack: () => {
        gsap.to(section3Ref.current, { opacity: 0, x: 50, duration: 0.5 });
        marketVideo.pause();
      }
    });

    // Initial state - all sections hidden
    gsap.set([section1Ref.current, section2Ref.current, section3Ref.current], {
      opacity: 0,
      x: (i) => i === 1 ? 50 : -50 // Build section slides from right, others from left
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative bg-black"
      style={{ zIndex: 1 }}
    >
      {/* Section 1: Design (Content centered, Video on right) */}
      <div className="relative min-h-screen flex items-center" style={{ zIndex: 2 }}>
        {/* Text content - Centered */}
        <div className="w-1/2 flex items-center justify-center">
          <div
            ref={section1Ref}
            className="text-center opacity-0 z-20 relative max-w-lg"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
              Design
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
              Intelligent design is the essence of nature; 
              that's our inspiration in crafting 
              tomorrow's tech realm
            </p>
            <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group mx-auto">
              <span className="text-base">Learn more</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="group-hover:translate-x-1 transition-transform"
              >
                <path 
                  d="M5 12h14m-7-7l7 7-7 7" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Video content - Right side */}
        <div className="w-1/2 h-full flex items-center justify-center relative">
          <video
            ref={designVideoRef}
            src="/assets/design.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            className="w-4/5 h-4/5 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 2: Build (Text on right, Video on left) */}
      <div className="relative min-h-screen flex items-center" style={{ zIndex: 2 }}>
        {/* Video content - Left side */}
        <div className="w-1/2 h-full flex items-center justify-center relative">
          <video
            ref={buildVideoRef}
            src="/assets/build (2).mp4"
            muted
            loop
            playsInline
            preload="metadata"
            className="w-4/5 h-4/5 object-cover rounded-lg"
          />
        </div>
        
        {/* Text content - Right side */}
        <div
          ref={section2Ref}
          className="w-1/2 px-8 md:px-16 lg:px-20 opacity-0 z-20 relative"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
            Build
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
            Constantly adopting cutting edge technology 
            for your enterprise to harness its endless 
            possibilities and leave a global imprint
          </p>
          <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
            <span className="text-base">Learn more</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="group-hover:translate-x-1 transition-transform"
            >
              <path 
                d="M5 12h14m-7-7l7 7-7 7" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Section 3: Market (Content centered, Video on right) */}
      <div className="relative min-h-screen flex items-center" style={{ zIndex: 2 }}>
        {/* Text content - Centered */}
        <div className="w-1/2 flex items-center justify-center">
          <div
            ref={section3Ref}
            className="text-center opacity-0 z-20 relative max-w-lg"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
              Market
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
              Experts in solving the WHY, WHERE 
              and HOW of propelling your 
              business to new frontiers
            </p>
            <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group mx-auto">
              <span className="text-base">Learn more</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="group-hover:translate-x-1 transition-transform"
              >
                <path 
                  d="M5 12h14m-7-7l7 7-7 7" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Video content - Right side */}
        <div className="w-1/2 h-full flex items-center justify-center relative">
          <video
            ref={marketVideoRef}
            src="/assets/market (2).mp4"
            muted
            loop
            playsInline
            preload="metadata"
            className="w-4/5 h-4/5 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}