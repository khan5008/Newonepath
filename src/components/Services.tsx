"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FooterSection from "./FooterSection";

export default function Services() {
  const serviceCategories = [
    {
      title: "Branding",
      image: "/assets/rectangle 88.png",
      services: [
        "Brand Consulting",
        "Logo Design",
        "Product Design",
        "Graphic Design",
        "2D / 3D Visualization",
        "Video Creation & Editing",
      ],
    },
    {
      title: "Intuitive Design",
      image: "/assets/solution2.jpg",
      services: [
        "UI/UX Design",
        "Website Design",
        "Mobile Experience",
        "Commerce Experience",
        "Prototypes",
      ],
    },
    {
      title: "Technology",
      image: "/assets/solution1.jpg",
      services: [
        "AI & Machine Learning",
        "Data & Analytics",
        "Web Development",
        "Mobile App Development",
        "E-Commerce",
        "Quality Assurance & Testing",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-white pt-16" data-header-color="white">
      {/* Hero Section with Background Video */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/services.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-20">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-light max-w-2xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Our Services
          </motion.h1>
        </div>
      </div>

      {/* Service Categories */}
      <div className="bg-white py-20">
        {serviceCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            className={`px-6 md:px-12 lg:px-20 py-16 ${
              categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  categoryIndex % 2 === 0 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={categoryIndex % 2 === 0 ? "lg:col-start-2" : ""}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </motion.div>

                {/* Services List */}
                <motion.div
                  initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={categoryIndex % 2 === 0 ? "lg:col-start-1 lg:row-start-1" : ""}
                >
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl text-black font-normal mb-8"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {category.title}
                  </h2>

                  <div className="space-y-4">
                    {category.services.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-center justify-between py-4 border-b border-gray-200 group cursor-pointer hover:border-gray-400 transition-colors"
                      >
                        <span
                          className="text-lg md:text-xl text-gray-800 group-hover:text-black transition-colors"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {service}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    ))}
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
