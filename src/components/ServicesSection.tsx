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
  const fixedContainerRef = useRef<HTMLDivElement>(null);
  
  // Video refs
  const designVideoRef = useRef<HTMLVideoElement>(null);
  const buildVideoRef = useRef<HTMLVideoElement>(null);
  const marketVideoRef = useRef<HTMLVideoElement>(null);
  
  // Section refs
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // Content refs
  const content1Ref = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);
  const content3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const videos = [designVideoRef.current, buildVideoRef.current, marketVideoRef.current];
    const sections = [section1Ref.current, section2Ref.current, section3Ref.current];
    const contents = [content1Ref.current, content2Ref.current, content3Ref.current];
    
    if (!videos.every(v => v) || !sections.every(s => s) || !contents.every(c => c)) return;

    // Set initial states - all hidden initially
    // On mobile, start videos from center/top position, not bottom
    const isMobile = window.innerWidth < 1024;
    gsap.set(contents, { opacity: 0, y: isMobile ? 20 : 50 });
    gsap.set(videos, { opacity: 0, visibility: "hidden", y: isMobile ? 0 : 30 });
    gsap.set(sections, { opacity: 0 });
    
    // Ensure fixed container starts hidden
    if (fixedContainerRef.current) {
      gsap.set(fixedContainerRef.current, { opacity: 0, visibility: "hidden" });
    }

    // Create main scroll trigger for smooth transitions
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onEnter: () => {
        if (fixedContainerRef.current) {
          gsap.set(fixedContainerRef.current, { opacity: 1, visibility: "visible" });
        }
        // Show first section when entering
        gsap.set([sections[0], contents[0], videos[0]], { opacity: 1 });
        gsap.set(videos[0], { visibility: "visible", y: 0 });
        gsap.set(contents[0], { y: 0 });
      },
      onLeave: () => {
        if (fixedContainerRef.current) {
          gsap.set(fixedContainerRef.current, { opacity: 0, visibility: "hidden" });
        }
      },
      onEnterBack: () => {
        if (fixedContainerRef.current) {
          gsap.set(fixedContainerRef.current, { opacity: 1, visibility: "visible" });
        }
      },
      onLeaveBack: () => {
        if (fixedContainerRef.current) {
          gsap.set(fixedContainerRef.current, { opacity: 0, visibility: "hidden" });
        }
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSections = 3;
        const sectionProgress = progress * (totalSections - 1); // 0 to 2
        const currentSectionIndex = Math.floor(sectionProgress);
        const localProgress = sectionProgress - currentSectionIndex;
        const isMobile = window.innerWidth < 1024;

        // Fade between sections
        sections.forEach((section, index) => {
          let sectionOpacity = 0;
          let contentOpacity = 0;
          let videoOpacity = 0;
          let contentY = isMobile ? 20 : 50;
          let videoY = 0;

          if (index === currentSectionIndex) {
            // Current section - fade in
            sectionOpacity = 1;
            contentOpacity = Math.max(0, 1 - localProgress * 2);
            videoOpacity = Math.max(0, 1 - localProgress * 1.5);
            contentY = localProgress * (isMobile ? -15 : -30);
            videoY = 0; // Keep videos stable on mobile
          } else if (index === currentSectionIndex + 1 && localProgress > 0.3) {
            // Next section - fade in
            const fadeProgress = (localProgress - 0.3) / 0.7;
            sectionOpacity = 1;
            contentOpacity = fadeProgress;
            videoOpacity = fadeProgress;
            contentY = (isMobile ? 20 : 50) - (fadeProgress * (isMobile ? 20 : 50));
            videoY = 0;
          }

          // Apply animations smoothly
          gsap.to(section, {
            opacity: sectionOpacity,
            duration: 0.1,
            ease: "none"
          });

          gsap.to(contents[index], {
            opacity: contentOpacity,
            y: contentY,
            duration: 0.1,
            ease: "none"
          });

          gsap.to(videos[index], {
            opacity: videoOpacity,
            y: videoY,
            visibility: videoOpacity > 0.1 ? "visible" : "hidden",
            duration: 0.1,
            ease: "none"
          });

          // Video management
          if (videoOpacity > 0.5 && videos[index]) {
            if (videos[index].paused) {
              videos[index].currentTime = 0;
              videos[index].play().catch(() => {});
            }
          } else if (videoOpacity < 0.3 && videos[index]) {
            if (!videos[index].paused) {
              videos[index].pause();
            }
          }
        });

        // Update "Up Next" indicator on mobile
        if (isMobile) {
          const upNextElement = document.getElementById('up-next-text');
          if (upNextElement) {
            const sectionNames = ['Build', 'Market', 'Design'];
            const nextIndex = (currentSectionIndex + 1) % 3;
            upNextElement.textContent = sectionNames[nextIndex];
          }
        }
      }
    });

    // Play first video initially
    if (videos[0]) {
      videos[0].currentTime = 0;
      videos[0].play().catch(() => {});
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative bg-black isolate overflow-hidden"
      style={{ height: "300vh" }} // 3x height for smooth scrolling
    >
      {/* Fixed container for all sections - clipped to section bounds */}
      <div ref={fixedContainerRef} className="fixed inset-0 w-full h-screen pointer-events-none opacity-0 invisible" style={{ zIndex: 1, willChange: 'transform' }}>
        
        {/* Section 1: Design */}
        <div 
          ref={section1Ref}
          className="absolute inset-0 flex flex-col lg:flex-row items-center overflow-hidden opacity-0 pointer-events-auto"
        >
          {/* Video background - Full screen on mobile, right side on desktop */}
          <div className="absolute lg:right-0 top-0 w-full lg:w-1/2 h-full lg:h-full overflow-hidden z-0">
            <video
              ref={designVideoRef}
              src="/assets/design.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-0 pointer-events-none"
            />
          </div>
          
          {/* Content - Centered on mobile, left side on desktop */}
          <div className="relative z-10 w-full lg:w-1/2 px-4 md:px-8 lg:px-16 xl:px-24 flex items-center justify-center lg:justify-start h-full lg:h-full pointer-events-auto bg-gradient-to-b from-black/60 via-black/40 to-black/60 lg:bg-transparent">
            <div ref={content1Ref} className="max-w-sm lg:max-w-2xl opacity-0 text-center lg:text-left w-full">
              <div className="mb-6 lg:mb-8">
                <div className="w-12 lg:w-12 h-0.5 bg-white/30 mb-4 lg:mb-6 mx-auto lg:mx-0"></div>
                <h1 className="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extralight text-white mb-4 lg:mb-8 leading-none tracking-tight">
                  Design
                </h1>
              </div>
              <p className="text-gray-300 text-sm lg:text-xl xl:text-2xl leading-relaxed mb-8 lg:mb-12 font-light">
                Intelligent design is the essence of nature; 
                that&apos;s our inspiration in crafting 
                tomorrow&apos;s tech realm
              </p>
              <a 
                href="/design"
                className="group inline-flex items-center justify-center lg:justify-start gap-3 lg:gap-4 text-white/80 hover:text-white transition-all duration-300 text-sm lg:text-lg mx-auto lg:mx-0"
              >
                <span className="relative">
                  Learn more
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
                </span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="group-hover:translate-x-2 transition-transform duration-300 lg:w-6 lg:h-6"
                >
                  <path 
                    d="M5 12h14m-7-7l7 7-7 7" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Build */}
        <div 
          ref={section2Ref}
          className="absolute inset-0 flex flex-col lg:flex-row items-center overflow-hidden opacity-0 pointer-events-auto"
        >
          {/* Video background - Full screen on mobile, left side on desktop */}
          <div className="absolute lg:left-0 top-0 w-full lg:w-1/2 h-full lg:h-full overflow-hidden z-0">
            <video
              ref={buildVideoRef}
              src="/assets/build (2).mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-0 pointer-events-none"
            />
          </div>
          
          {/* Content - Centered on mobile, right side on desktop */}
          <div className="relative z-10 w-full lg:w-1/2 lg:ml-auto px-4 md:px-8 lg:px-16 xl:px-24 flex items-center justify-center lg:justify-start h-full lg:h-full pointer-events-auto bg-gradient-to-b from-black/60 via-black/40 to-black/60 lg:bg-transparent">
            <div ref={content2Ref} className="max-w-sm lg:max-w-2xl opacity-0 text-center lg:text-left w-full">
              <div className="mb-6 lg:mb-8">
                <div className="w-12 lg:w-12 h-0.5 bg-white/30 mb-4 lg:mb-6 mx-auto lg:mx-0"></div>
                <h1 className="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extralight text-white mb-4 lg:mb-8 leading-none tracking-tight">
                  Build
                </h1>
              </div>
              <p className="text-gray-300 text-sm lg:text-xl xl:text-2xl leading-relaxed mb-8 lg:mb-12 font-light">
                Constantly adopting cutting edge technology 
                for your enterprise to harness its endless 
                possibilities and leave a global imprint
              </p>
              <a 
                href="/build"
                className="group inline-flex items-center justify-center lg:justify-start gap-3 lg:gap-4 text-white/80 hover:text-white transition-all duration-300 text-sm lg:text-lg mx-auto lg:mx-0"
              >
                <span className="relative">
                  Learn more
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
                </span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="group-hover:translate-x-2 transition-transform duration-300 lg:w-6 lg:h-6"
                >
                  <path 
                    d="M5 12h14m-7-7l7 7-7 7" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Market */}
        <div 
          ref={section3Ref}
          className="absolute inset-0 flex flex-col lg:flex-row items-center overflow-hidden opacity-0 pointer-events-auto"
        >
          {/* Video background - Full screen on mobile, right side on desktop */}
          <div className="absolute lg:right-0 top-0 w-full lg:w-1/2 h-full lg:h-full overflow-hidden z-0">
            <video
              ref={marketVideoRef}
              src="/assets/newmarket.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-0 pointer-events-none"
            />
          </div>
          
          {/* Content - Centered on mobile, left side on desktop */}
          <div className="relative z-10 w-full lg:w-1/2 px-4 md:px-8 lg:px-16 xl:px-24 flex items-center justify-center lg:justify-start h-full lg:h-full pointer-events-auto bg-gradient-to-b from-black/60 via-black/40 to-black/60 lg:bg-transparent">
            <div ref={content3Ref} className="max-w-sm lg:max-w-2xl opacity-0 text-center lg:text-left w-full">
              <div className="mb-6 lg:mb-8">
                <div className="w-12 lg:w-12 h-0.5 bg-white/30 mb-4 lg:mb-6 mx-auto lg:mx-0"></div>
                <h1 className="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extralight text-white mb-4 lg:mb-8 leading-none tracking-tight">
                  Market
                </h1>
              </div>
              <p className="text-gray-300 text-sm lg:text-xl xl:text-2xl leading-relaxed mb-8 lg:mb-12 font-light">
                Experts in solving the WHY, WHERE 
                and HOW of propelling your 
                business to new frontiers
              </p>
              <a 
                href="/market"
                className="group inline-flex items-center justify-center lg:justify-start gap-3 lg:gap-4 text-white/80 hover:text-white transition-all duration-300 text-sm lg:text-lg mx-auto lg:mx-0"
              >
                <span className="relative">
                  Learn more
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
                </span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="group-hover:translate-x-2 transition-transform duration-300 lg:w-6 lg:h-6"
                >
                  <path 
                    d="M5 12h14m-7-7l7 7-7 7" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Up Next Indicator - Mobile Only */}
        <div className="absolute top-4 right-4 lg:hidden z-20 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs font-medium">
          <div className="flex items-center gap-2">
            <span className="text-white/60">Up Next:</span>
            <span id="up-next-text">Build</span>
          </div>
        </div>

        {/* Scroll Indicator - Mobile Only */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden z-20 flex flex-col items-center text-white/60 text-xs">
          <span className="mb-2">Scroll to explore</span>
          <div className="w-px h-8 bg-white/30 relative">
            <div className="absolute top-0 w-px h-2 bg-white animate-pulse"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}