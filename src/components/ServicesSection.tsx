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

    // Set initial states - only first section visible
    gsap.set(contents, { opacity: 0, y: 50 });
    gsap.set(videos, { opacity: 0, visibility: "hidden" });
    gsap.set(sections, { opacity: 0 });
    
    // Show first section initially
    gsap.set([sections[0], contents[0], videos[0]], { opacity: 1 });
    gsap.set(videos[0], { visibility: "visible" });
    gsap.set(contents[0], { y: 0 });

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

        // Fade between sections
        sections.forEach((section, index) => {
          let sectionOpacity = 0;
          let contentOpacity = 0;
          let videoOpacity = 0;
          let contentY = 50;

          if (index === currentSectionIndex) {
            // Current section - fade in
            sectionOpacity = 1;
            contentOpacity = Math.max(0, 1 - localProgress * 2);
            videoOpacity = Math.max(0, 1 - localProgress * 1.5);
            contentY = localProgress * -30;
          } else if (index === currentSectionIndex + 1 && localProgress > 0.3) {
            // Next section - fade in
            const fadeProgress = (localProgress - 0.3) / 0.7;
            sectionOpacity = 1;
            contentOpacity = fadeProgress;
            videoOpacity = fadeProgress;
            contentY = 50 - (fadeProgress * 50);
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
      <div ref={fixedContainerRef} className="fixed inset-0 w-full h-screen pointer-events-none" style={{ zIndex: 1, willChange: 'transform' }}>
        
        {/* Section 1: Design */}
        <div 
          ref={section1Ref}
          className="absolute inset-0 flex items-center overflow-hidden opacity-0 pointer-events-auto"
        >
          {/* Full-screen video background - Right side */}
          <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
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
          
          {/* Content - Left side */}
          <div className="relative z-10 w-1/2 px-8 md:px-16 lg:px-24 flex items-center h-full pointer-events-auto">
            <div ref={content1Ref} className="max-w-2xl opacity-0">
              <div className="mb-8">
                <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-white mb-8 leading-none tracking-tight">
                  Design
                </h1>
              </div>
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-12 font-light">
                Intelligent design is the essence of nature; 
                that's our inspiration in crafting 
                tomorrow's tech realm
              </p>
              <button className="group flex items-center gap-4 text-white/80 hover:text-white transition-all duration-300 text-lg">
                <span className="relative">
                  Learn more
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
                </span>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="group-hover:translate-x-2 transition-transform duration-300"
                >
                  <path 
                    d="M5 12h14m-7-7l7 7-7 7" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Build */}
        <div 
          ref={section2Ref}
          className="absolute inset-0 flex items-center overflow-hidden opacity-0 pointer-events-auto"
        >
          {/* Full-screen video background - Left side */}
          <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
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
          
          {/* Content - Right side */}
          <div className="relative z-10 w-1/2 ml-auto px-8 md:px-16 lg:px-24 flex items-center h-full pointer-events-auto">
            <div ref={content2Ref} className="max-w-2xl opacity-0">
              <div className="mb-8">
                <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-white mb-8 leading-none tracking-tight">
                  Build
                </h1>
              </div>
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-12 font-light">
                Constantly adopting cutting edge technology 
                for your enterprise to harness its endless 
                possibilities and leave a global imprint
              </p>
              <button className="group flex items-center gap-4 text-white/80 hover:text-white transition-all duration-300 text-lg">
                <span className="relative">
                  Learn more
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
                </span>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="group-hover:translate-x-2 transition-transform duration-300"
                >
                  <path 
                    d="M5 12h14m-7-7l7 7-7 7" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Market */}
        <div 
          ref={section3Ref}
          className="absolute inset-0 flex items-center overflow-hidden opacity-0"
        >
          {/* Full-screen video background - Right side */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <video
              ref={marketVideoRef}
              src="/assets/newmarket.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-0"
            />
          </div>
          
          {/* Content - Left side */}
          <div className="relative z-10 w-1/2 px-8 md:px-16 lg:px-24 flex items-center h-full">
            <div ref={content3Ref} className="max-w-2xl opacity-0">
              <div className="mb-8">
                <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-white mb-8 leading-none tracking-tight">
                  Market
                </h1>
              </div>
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-12 font-light">
                Experts in solving the WHY, WHERE 
                and HOW of propelling your 
                business to new frontiers
              </p>
              <button className="group flex items-center gap-4 text-white/80 hover:text-white transition-all duration-300 text-lg">
                <span className="relative">
                  Learn more
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
                </span>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="group-hover:translate-x-2 transition-transform duration-300"
                >
                  <path 
                    d="M5 12h14m-7-7l7 7-7 7" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}