"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import FooterSection from "./FooterSection";

export default function Portfolio() {
  const router = useRouter();
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  const industries = [
    "Automobile",
    "Beauty", 
    "Construction",
    "Corporate",
    "Education",
    "Electronics",
    "Fashion",
    "Financial",
    "Food",
    "Healthcare",
    "Hospitality",
    "Information Technology"
  ];

  const expertise = [
    "Branding",
    "UI/UX Design", 
    "Web Development",
    "Corporate Website",
    "E-commerce",
    "Web App Development",
    "Mobile App Development",
    "Digital Marketing"
  ];

  const caseStudies = [
    {
      id: 1,
      image: "/assets/image 3.png",
      category: "Food",
      title: "Caribou: Helping a reputed coffee chain go digital with a powerful app in their Kuwait chapter",
    },
    {
      id: 2,
      image: "/assets/Rectangle 84 (1).png",
      category: "Retail / Food",
      title: "IKEA Foods: Delectably designed branded E-commerce store to launch a new sales channel",
    },
    {
      id: 3,
      image: "/assets/Rectangle 84.png",
      category: "Automobile",
      title: "Turtlewax: Achieving glossy greatness for cars with a smooth redefined website",
    },
    {
      id: 4,
      image: "/assets/Rectangle 85.png",
      category: "Technology",
      title: "Tech Solutions: Building innovative platforms for modern businesses",
    },
    {
      id: 5,
      image: "/assets/image 3.png",
      category: "Healthcare",
      title: "MediCare: Transforming patient care with digital health solutions",
    },
    {
      id: 6,
      image: "/assets/Rectangle 84 (1).png",
      category: "Education",
      title: "EduTech: Revolutionizing learning experiences through technology",
    },
    {
      id: 7,
      image: "/assets/Rectangle 84.png",
      category: "Finance",
      title: "FinanceHub: Streamlining financial services with cutting-edge solutions",
    },
    {
      id: 8,
      image: "/assets/Rectangle 85.png",
      category: "E-commerce",
      title: "ShopEasy: Creating seamless shopping experiences for customers",
    },
    {
      id: 9,
      image: "/assets/image 3.png",
      category: "Travel",
      title: "TravelPro: Simplifying travel planning with innovative booking systems",
    },
    {
      id: 10,
      image: "/assets/Rectangle 84 (1).png",
      category: "Real Estate",
      title: "PropertyHub: Modernizing property management and sales platforms",
    },
    {
      id: 11,
      image: "/assets/Rectangle 84.png",
      category: "Entertainment",
      title: "StreamMax: Delivering premium content streaming experiences",
    },
    {
      id: 12,
      image: "/assets/Rectangle 85.png",
      category: "Sports",
      title: "FitTrack: Empowering athletes with performance tracking solutions",
    },
  ];

  return (
    <section className="min-h-screen bg-white" data-header-color="white">
      {/* Hero Section */}
      <div className="pt-32 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-3xl md:text-4xl lg:text-5xl text-black font-normal"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Case Studies
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex gap-4 relative"
            >
              {/* Industries Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIndustriesOpen(!industriesOpen);
                    setExpertiseOpen(false);
                  }}
                  className="px-8 py-3 border-2 border-gray-400 rounded-full text-base font-medium text-gray-700 hover:border-gray-600 transition-colors flex items-center gap-2"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Industries
                  {industriesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50"
                    >
                      <div className="p-4">
                        <input
                          type="text"
                          placeholder="Search"
                          className="w-full p-3 bg-gray-100 rounded-lg text-sm border-none outline-none mb-4"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        />
                        <div className="max-h-80 overflow-y-auto">
                          {industries.map((industry, index) => (
                            <label
                              key={industry}
                              className="flex items-center gap-3 py-3 px-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 border-2 border-gray-300 rounded"
                              />
                              <span
                                className="text-base text-gray-700"
                                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                              >
                                {industry}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Expertise Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setExpertiseOpen(!expertiseOpen);
                    setIndustriesOpen(false);
                  }}
                  className="px-8 py-3 border-2 border-gray-400 rounded-full text-base font-medium text-gray-700 hover:border-gray-600 transition-colors flex items-center gap-2"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Expertise
                  {expertiseOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {expertiseOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50"
                    >
                      <div className="p-4">
                        <input
                          type="text"
                          placeholder="Search"
                          className="w-full p-3 bg-gray-100 rounded-lg text-sm border-none outline-none mb-4"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        />
                        <div className="max-h-80 overflow-y-auto">
                          {expertise.map((skill, index) => (
                            <label
                              key={skill}
                              className="flex items-center gap-3 py-3 px-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 border-2 border-gray-300 rounded"
                              />
                              <span
                                className="text-base text-gray-700"
                                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                              >
                                {skill}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => router.push('/portfoliodetail')}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden mb-6">
                  {index === 0 ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    >
                      <source src="/assets/MySalah.mp4" type="video/mp4" />
                    </video>
                  ) : index === 1 ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    >
                      <source src="/assets/THE GLOBAL V.mp4" type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {study.category}
                  </p>
                  <h3
                    className="text-lg md:text-xl text-black font-normal leading-snug group-hover:text-gray-700 transition-colors"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {study.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </section>
  );
}
