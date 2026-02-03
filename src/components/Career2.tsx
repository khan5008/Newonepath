"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FooterSection from "./FooterSection";
import { getBlogRoute, getInsightsRoute } from "@/utils/navigationUtils";

export default function Career2() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const router = useRouter();

  const handleInsightNavigation = (insightId: number) => {
    const route = getBlogRoute(insightId);
    router.push(route);
  };

  const handleExploreInsights = () => {
    router.push(getInsightsRoute());
  };

  const values = [
    {
      number: "01",
      title: "Growth",
      description:
        "Our vision is to grow together as an organisation while working towards achieving individual and professional goals.",
    },
    {
      number: "02",
      title: "People",
      description:
        "Our people are the driving force behind all our achievements, and we make it a point to give it back to them.",
    },
    {
      number: "03",
      title: "Balance",
      description:
        "We value life and its intricate balance, hence ensuring all our people are well balanced in both personal and professional life.",
    },
  ];

  const openings = [
    { category: "Business Development", count: 4 },
    { category: "Data & Analytics", count: 2 },
    { category: "Design", count: 11 },
    { category: "Engineering", count: 8 },
    { category: "Marketing", count: 3 },
  ];

  // const lifePhotos = [
  //   "/assets/port1.jpg",
  //   "/assets/port2.jpg",
  //   "/assets/port4.jpg",
  //   "/assets/port3.jpg",
  //   "/assets/port5.jpg",
  //   "/assets/port2.jpg",
  // ];

  const insights = [
    {
      id: 1,
      image: "/assets/Rectangle 88.png",
      category: "Blog",
      readTime: "11 mins read",
      date: "January 01, 2026",
      title: "Vibe Coding: The Future Defining AI-Native Engineering",
    },
    {
      id: 2,
      image: "/assets/Rectangle 88 (1).png",
      category: "Blog",
      readTime: "13 mins read",
      date: "December 18, 2025",
      title: "NodeJS vs Python: Choosing the Right Backend Technology in 2026",
    },
    {
      id: 3,
      image: "/assets/Rectangle 88 (2).png",
      category: "Blog",
      readTime: "17 mins read",
      date: "December 09, 2025",
      title: "A Complete Guide to Mobile App Development",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Values We Live By - Full Screen Black Section */}
      <section className="min-h-screen bg-black text-white flex items-center px-6 md:px-12 lg:px-20 py-20" data-header-color="white">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-8"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              The Values
              <br />
              We Live By
            </h2>
            <p
              className="text-gray-400 text-lg mb-12"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              We make it a priority to keep our values up-front, anywhere and everywhere.
            </p>
            <div className="text-9xl font-bold text-white">*</div>
          </motion.div>

          {/* Right Side - Values List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-12"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="border-t border-gray-700 pt-8"
              >
                <div className="text-sm text-gray-500 mb-3">{value.number}</div>
                <h3
                  className="text-4xl md:text-5xl font-light mb-4"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-gray-400 text-base leading-relaxed"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20" data-header-color="white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Current Openings
            </h2>
            <p
              className="text-gray-600 text-lg"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Become part of a high-performing & collaborative team
            </p>
          </motion.div>

          <div className="space-y-0">
            {openings.map((opening, index) => (
              <motion.div
                key={opening.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() =>
                    setOpenSection(
                      openSection === opening.category ? null : opening.category
                    )
                  }
                  className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span
                    className="text-xl md:text-2xl text-black font-normal"
                    style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                  >
                    {opening.category} ({opening.count})
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 transition-transform ${
                      openSection === opening.category ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-black text-black px-8 py-3 text-base font-medium hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              <span>See all openings</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Life @ ONEPATH */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20" data-header-color="white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Life @ ONEPATH
            </h2>
            <p
              className="text-gray-600 text-lg max-w-3xl mx-auto"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              A place where you can realise your full potential, nurture your dreams, and
              follow your passion! All of that with a daily dose of fun and laughter
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Row 1 - Small, Small, Large spanning 2 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              className="relative overflow-hidden aspect-square group cursor-pointer"
            >
              <img
                src="/assets/port1.jpg"
                alt="Life at ONEPATH 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              className="relative overflow-hidden aspect-square group cursor-pointer"
            >
              <img
                src="/assets/port2.jpg"
                alt="Life at ONEPATH 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              className="relative overflow-hidden aspect-[2/1] col-span-2 group cursor-pointer"
            >
              <img
                src="/assets/port3.jpg"
                alt="Life at ONEPATH 3"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            {/* Row 2 - Small, Large, Small, Small with "See More" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 3 * 0.1 }}
              className="relative overflow-hidden aspect-square group cursor-pointer"
            >
              <img
                src="/assets/port4.jpg"
                alt="Life at ONEPATH 4"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 4 * 0.1 }}
              className="relative overflow-hidden aspect-square group cursor-pointer"
            >
              <img
                src="/assets/port5.jpg"
                alt="Life at ONEPATH 5"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 5 * 0.1 }}
              className="relative overflow-hidden aspect-square group cursor-pointer"
            >
              <img
                src="/assets/port1.jpg"
                alt="Life at ONEPATH 6"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 6 * 0.1 }}
              className="relative overflow-hidden aspect-square group cursor-pointer"
            >
              <img
                src="/assets/port2.jpg"
                alt="Life at ONEPATH 7"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-sm font-medium">See More</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20" data-header-color="white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl text-black font-light mb-12"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Insights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleInsightNavigation(insight.id)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
                      {insight.category}
                    </span>
                    <span>·</span>
                    <span style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
                      {insight.readTime}
                    </span>
                    <span>·</span>
                    <span style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
                      {insight.date}
                    </span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl text-black font-normal leading-snug group-hover:text-gray-700 transition-colors"
                    style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                  >
                    {insight.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.a
              href="/insights"
              onClick={(e) => {
                e.preventDefault();
                handleExploreInsights();
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-black text-black px-8 py-3 text-base font-medium hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              <span>Explore all Insights</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}