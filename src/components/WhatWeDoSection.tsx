"use client";

import { motion } from "framer-motion";

const whatWeDoItems = [
  {
    id: 1,
    title: "Branding",
    image: "/assets/w1.jpeg",
    link: "/services", // Navigate to services page for branding section
  },
  {
    id: 2,
    title: "Intuitive Design",
    image: "/assets/w2.jpeg",
    link: "/services", // Navigate to services page for intuitive design section
  },
  {
    id: 3,
    title: "Technology",
    image: "/assets/w3.jpeg",
    link: "/services", // Navigate to services page for technology section
  },
  {
    id: 4,
    title: "ERP",
    image: "/assets/w4.jpg",
    link: "/services", // Navigate to services page for ERP section
  },
  {
    id: 5,
    title: "Digital Marketing",
    image: "/assets/w8.jpg",
    link: "/services", // Navigate to services page for digital marketing section
  },
  {
    id: 6,
    title: "Web Development",
    image: "/assets/w7.jpg",
    link: "/webdevelopment", // Direct link to web development page
  },
];

export default function WhatWeDoSection() {
  return (
    <motion.section
      data-section="what-we-do"
      data-header-color="white"
      className="relative bg-white text-black overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-50 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[32px] md:text-[40px] lg:text-[48px] font-light text-black mb-10 md:mb-12"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
        >
          What We Do
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-10">
          {whatWeDoItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
              className="flex justify-center"
            >
              <a 
                href={item.link}
                className="flex h-[339px] w-full max-w-[403px] flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] border-[1.5px] border-black/40 hover:shadow-[0_15px_50px_rgba(15,23,42,0.12)] transition-shadow duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[230px] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Bottom content */}
                <div className="flex flex-1 items-center justify-between px-6">
                  <p
                    className="text-[21px] text-black"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    {item.title}
                  </p>

                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white shadow-md hover:bg-sky-600 transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 13L13 7M13 7H7M13 7V13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Explore button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3 text-sm md:text-base font-medium text-white shadow-[0_10px_30px_rgba(56,189,248,0.45)] hover:bg-sky-600 transition-colors cursor-pointer"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span>Explore What We Do</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/90 text-white text-xs">
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}


