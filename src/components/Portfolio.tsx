"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import FooterSection from "./FooterSection";

export default function Portfolio() {
  const router = useRouter();

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
                className="text-3xl md:text-4xl lg:text-5xl text-black font-light"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Case Studies
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex gap-4"
            >
              <button
                className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Industries ▼
              </button>
              <button
                className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Expertise ▼
              </button>
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
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
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
