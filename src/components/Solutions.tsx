"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import FooterSection from "./FooterSection";

export default function Solutions() {
  const router = useRouter();

  const solutions = [
    {
      id: 1,
      title: "Document Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing",
      image: "/assets/solution1.jpg",
      features: [
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
      ],
      imagePosition: "right",
    },
    {
      id: 2,
      title: "Project Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing",
      image: "/assets/solution2.jpg",
      features: [
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
      ],
      imagePosition: "left",
    },
    {
      id: 3,
      title: "HRM Payroll",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing",
      image: "/assets/solution3.jpg",
      features: [
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
      ],
      imagePosition: "right",
    },
    {
      id: 4,
      title: "Queuing Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing",
      image: "/assets/solution4.jpg",
      features: [
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
      ],
      imagePosition: "left",
    },
    {
      id: 5,
      title: "Student Information System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing",
      image: "/assets/solution5.jpg",
      features: [
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
        "Lorem ipsum dolor sed do",
      ],
      imagePosition: "right",
    },
  ];

  return (
    <section className="min-h-screen bg-white pt-16" data-header-color="white">
      {/* Hero Video Section - Half Screen */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/solution.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay with Title */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-6 md:px-12 lg:px-20">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-light max-w-2xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Solutions We Offer
          </motion.h1>
        </div>
      </div>

      {/* Solutions Cards Section */}
      <div className="bg-white py-12">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`px-6 md:px-12 lg:px-20 py-12 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  solution.imagePosition === "left" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: solution.imagePosition === "right" ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`space-y-4 ${
                    solution.imagePosition === "left" ? "lg:order-2" : ""
                  }`}
                >
                  <h2
                    className="text-2xl md:text-3xl lg:text-4xl text-black font-normal"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {solution.title}
                  </h2>
                  
                  <p
                    className="text-gray-600 text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {solution.description}
                  </p>

                  <motion.button
                    onClick={() => router.push('/solutiondetail')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-cyan-500 font-medium text-sm cursor-pointer"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-white text-sm">
                      →
                    </span>
                    <span>Learn More</span>
                  </motion.button>
                </motion.div>

                {/* Image Side with Features Overlay */}
                <motion.div
                  initial={{ opacity: 0, x: solution.imagePosition === "right" ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`relative ${
                    solution.imagePosition === "left" ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative w-full max-w-md mx-auto">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-80 rounded-2xl shadow-xl object-cover"
                    />
                    
                    {/* Features Card Overlay */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className={`absolute ${
                        solution.imagePosition === "right" ? "-left-6 md:-left-8" : "-right-6 md:-right-8"
                      } top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-4 max-w-[200px]`}
                    >
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                            className="flex items-center gap-2 text-xs text-gray-700"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                          >
                            <span className="flex-shrink-0 w-4 h-4 bg-black rounded-sm"></span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <FooterSection />
    </section>
  );
}
