"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const caseStudies = [
  {
    id: 1,
    image: "/assets/Rectangle 84 (1).png",
    category: "Food",
    title: "Caribou: Helping a reputed coffee chain go digital with a powerful app in their Kuwait chapter",
  },
  {
    id: 2,
    image: "/assets/image 3.png",
    category: "Retail",
    title: "Lul u Hypermarket: Building a one-click path for a search-intensive, high volume big brand store",
  },
  {
    id: 3,
    image: "/assets/hajjpath2.webp",
    category: "Education",
    title: "Middlesex University: Revamping the digital face of a world-class university for better visual impact",
  },
  {
    id: 4,
    image: "/assets/bekhaas1.png",
    category: "Technology",
    title: "Digital transformation for a leading tech company with innovative solutions",
  },
  {
    id: 5,
    image: "/assets/hajjpathimage.png",
    category: "Healthcare",
    title: "Healthcare platform revolutionizing patient care with seamless digital experience",
  },
  {
    id: 6,
    image: "/assets/Malomati-App-1.webp",
    category: "Finance",
    title: "Financial services app providing secure and intuitive banking solutions",
  },
];

export default function CaseStudiesSection() {
  const router = useRouter();

  const handleCardClick = () => {
    router.push('/portfoliodetail');
  };

  return (
    <section className="bg-white py-20 md:py-32 min-h-screen" data-section="case-studies" data-header-color="white">
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20">
        {/* Case Studies Heading - positioned on left side */}
        <div className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-black text-left max-w-4xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Case Studies
          </motion.h2>
        </div>

        {/* Cards Grid - full width with large gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24 md:gap-x-20 md:gap-y-32 lg:gap-x-24 lg:gap-y-36">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              className="group cursor-pointer"
              onClick={handleCardClick}
            >
              {/* Image Container - clean rounded corners */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-gray-100">
                {index === 0 ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  >
                    <source src="/assets/Mysalah.mp4" type="video/mp4" />
                  </video>
                ) : index === 1 ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  >
                    <source src="/assets/THE GLOBAL V.mp4" type="video/mp4" />
                  </video>
                ) : index === 3 ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  >
                    <source src="/assets/Chicago Eats.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={study.image}
                    alt={study.category}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
              </div>

              {/* Content Section - minimal and clean */}
              <div className="space-y-4">
                {/* Category Label - small and subtle */}
                <p 
                  className="text-sm text-gray-500 font-normal tracking-wide uppercase"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {study.category}
                </p>

                {/* Title - clean typography matching reference */}
                <h3 
                  className="text-xl md:text-2xl font-normal text-black leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {study.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}