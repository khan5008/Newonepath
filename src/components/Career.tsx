"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Person images that will rotate every 2 seconds
const personImages = [
  "/assets/emp1.jpg",
  "/assets/emp2.jpg", 
  "/assets/emp3.png"
];

export default function Career() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate person images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % personImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      data-section="career"
      data-header-color="white"
      className="relative bg-white text-black overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-tight"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              You Will Like It Here!
            </h2>
            
            <p
              className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-lg"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              At One Path Solutions , we are all about creating a habitat that lets you grow stronger roots and larger branches. Together let's make a fruitful journey!
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 border border-black px-8 py-3 text-base font-medium text-black hover:bg-black hover:text-white transition-all duration-300"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <span>Explore opportunities</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path 
                  d="M5 12h14m-7-7l7 7-7 7" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Side - Person Image Card with Rotating Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] overflow-hidden rounded-2xl bg-black shadow-2xl">
                <motion.img
                  key={currentImageIndex}
                  src={personImages[currentImageIndex]}
                  alt="Team member"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                
                {/* Circular Text Overlay */}
                <div className="absolute bottom-8 right-8">
                  <div className="relative w-24 h-24 md:w-28 md:h-28">
                    {/* Rotating circular text */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                          <path
                            id="circle"
                            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                          />
                        </defs>
                        <text className="text-[8px] fill-white font-medium tracking-wider">
                          <textPath href="#circle" className="uppercase">
                            JOIN OUR TEAM • JOIN OUR TEAM • 
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>
                    
                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}