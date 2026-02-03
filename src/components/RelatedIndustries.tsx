"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ArrowRight, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Industry {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  heroImage: string;
  detailDescription: string;
  projects: {
    title: string;
    description: string;
    image: string;
  }[];
  services: string[];
}

interface RelatedIndustriesProps {
  industries?: Industry[];
  showViewAll?: boolean;
  className?: string;
}

const defaultIndustries: Industry[] = [
  {
    id: "retail",
    name: "Retail",
    title: "Retail & E-commerce",
    description: "Creative graphic design solutions for retail brands and e-commerce businesses.",
    image: "/assets/Rectangle 88.png",
    heroImage: "/assets/portfoliodetail.jpg",
    detailDescription: "We are guided by technology where possibilities know no bounds. E-commerce takes the wheel, guided by sophisticated digital systems, ushering in a new era of retail. Connectivity weaves a mesmerizing tapestry of smart features, seamlessly blending digital services into the very essence of the shopping experience. Discover how we plan to kick off your brand identity to the next level.",
    projects: [
      {
        title: "Modern E-commerce Platform",
        description: "Complete e-commerce solution with advanced features and seamless user experience",
        image: "/assets/portfoliodetail2.jpg"
      },
      {
        title: "Retail Brand Identity",
        description: "Comprehensive brand identity design for modern retail businesses",
        image: "/assets/portfoliodetail3.jpg"
      }
    ],
    services: ["E-commerce Development", "Brand Identity", "UI/UX Design", "Digital Marketing"]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Healthcare & Medical",
    description: "Professional graphic design for medical and healthcare organizations.",
    image: "/assets/Rectangle 88 (1).png",
    heroImage: "/assets/portfoliodetail2.png",
    detailDescription: "Healthcare technology is revolutionizing patient care through innovative digital solutions. We create comprehensive healthcare platforms that prioritize patient safety, data security, and seamless user experiences. Our solutions bridge the gap between healthcare providers and patients through cutting-edge technology.",
    projects: [
      {
        title: "Medical Practice Management",
        description: "Comprehensive practice management system for healthcare providers",
        image: "/assets/portfoliodetail4.png"
      },
      {
        title: "Patient Portal Platform",
        description: "Secure patient portal with appointment scheduling and medical records",
        image: "/assets/portfoliodetail5.jpg"
      }
    ],
    services: ["Healthcare Software", "Medical UI/UX", "HIPAA Compliance", "Telemedicine Solutions"]
  },
  {
    id: "technology",
    name: "Technology",
    title: "Technology & Innovation",
    description: "Modern graphic design solutions for tech companies and startups.",
    image: "/assets/Rectangle 88 (2).png",
    heroImage: "/assets/solution1.jpg",
    detailDescription: "Technology drives innovation in every aspect of modern business. We develop cutting-edge solutions that leverage artificial intelligence, machine learning, and advanced analytics to transform how businesses operate. Our technology solutions are designed to scale and adapt to future needs.",
    projects: [
      {
        title: "AI-Powered Analytics Platform",
        description: "Advanced analytics platform with machine learning capabilities",
        image: "/assets/solution2.jpg"
      },
      {
        title: "Cloud Infrastructure Solution",
        description: "Scalable cloud infrastructure for modern applications",
        image: "/assets/solution3.jpg"
      }
    ],
    services: ["AI Development", "Cloud Solutions", "Data Analytics", "Software Architecture"]
  },
  {
    id: "education",
    name: "Education",
    title: "Education & E-learning",
    description: "Engaging graphic design for educational institutions and e-learning platforms.",
    image: "/assets/Rectangle 88 (3).png",
    heroImage: "/assets/solution4.jpg",
    detailDescription: "Education technology is transforming how we learn and teach. We create engaging digital learning platforms that make education accessible, interactive, and effective. Our solutions support both traditional institutions and modern e-learning initiatives.",
    projects: [
      {
        title: "Interactive Learning Platform",
        description: "Comprehensive e-learning platform with interactive features",
        image: "/assets/solution5.jpg"
      },
      {
        title: "Educational Mobile App",
        description: "Mobile learning application for students and educators",
        image: "/assets/portfoliodetail.jpg"
      }
    ],
    services: ["E-learning Development", "Educational Apps", "LMS Solutions", "Interactive Design"]
  },
  {
    id: "finance",
    name: "Finance",
    title: "Finance & Banking",
    description: "Professional design solutions for financial institutions and fintech companies.",
    image: "/assets/Rectangle 88 (4).png",
    heroImage: "/assets/Rectangle 84.png",
    detailDescription: "Financial technology is reshaping the banking and finance industry. We develop secure, compliant, and user-friendly financial solutions that meet the highest standards of security and regulatory compliance while providing exceptional user experiences.",
    projects: [
      {
        title: "Digital Banking Platform",
        description: "Comprehensive digital banking solution with advanced security",
        image: "/assets/Rectangle 84 (1).png"
      },
      {
        title: "Investment Management App",
        description: "Mobile investment platform with real-time market data",
        image: "/assets/Rectangle 85.png"
      }
    ],
    services: ["Fintech Development", "Banking Solutions", "Payment Systems", "Compliance Design"]
  },
  {
    id: "automotive",
    name: "Automotive",
    title: "Automotive & Transportation",
    description: "Innovative design solutions for automotive and transportation companies.",
    image: "/assets/Rectangle 88 (5).png",
    heroImage: "/assets/port1.jpg",
    detailDescription: "We are guided by technology where possibilities know no bounds. Autonomous driving takes the wheel, guided by sophisticated IT systems, ushering in a new era of mobility. Connectivity weaves a mesmerizing tapestry of smart features, seamlessly blending IT services into the very essence of the vehicles. Discover how we plan to kick off your brand identity to the next level.",
    projects: [
      {
        title: "AlMailem: Crafting automotive marvels with web designing for witnessing a thrilling future",
        description: "Complete automotive website design and digital identity",
        image: "/assets/port2.jpg"
      },
      {
        title: "Autoversa: A complete brand ideation with a futuristic intent and unmatched aesthetic",
        description: "Comprehensive brand identity for automotive company",
        image: "/assets/port3.jpg"
      }
    ],
    services: ["Automotive Design", "Connected Car Solutions", "Fleet Management", "IoT Integration"]
  }
];

export default function RelatedIndustries({ 
  industries = defaultIndustries, 
  showViewAll = true,
  className = ""
}: RelatedIndustriesProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const router = useRouter();

  const handleIndustryClick = (industry: Industry) => {
    setSelectedIndustry(industry);
  };

  const handleClosePanel = () => {
    setSelectedIndustry(null);
  };

  const handleViewAllIndustries = () => {
    router.push('/industries');
  };

  return (
    <>
      <div className={`bg-white py-20 px-6 md:px-12 lg:px-20 ${className}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl text-black font-light"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Related Industries
            </motion.h2>
            {showViewAll && (
              <motion.button
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onClick={handleViewAllIndustries}
                className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.slice(0, 4).map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleIndustryClick(industry)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3
                  className="text-xl font-semibold text-black mb-2"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {industry.name}
                </h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>

          {showViewAll && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <button 
                onClick={handleViewAllIndustries}
                className="inline-flex items-center gap-2 text-blue-500 border-2 border-blue-500 rounded-lg px-6 py-3 hover:bg-blue-50 transition-colors"
              >
                <span>View all industries</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Right Side Panel */}
      <AnimatePresence>
        {selectedIndustry && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={handleClosePanel}
            />
            
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-2xl bg-white shadow-xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <h2
                  className="text-2xl font-light text-black"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {selectedIndustry.title}
                </h2>
                <button
                  onClick={handleClosePanel}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Hero Image */}
                <div className="relative overflow-hidden rounded-2xl mb-8">
                  <img
                    src={selectedIndustry.heroImage}
                    alt={selectedIndustry.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p
                    className="text-gray-700 leading-relaxed text-base"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {selectedIndustry.detailDescription}
                  </p>
                </div>

                {/* Services */}
                <div className="mb-8">
                  <h3
                    className="text-xl font-medium text-black mb-4"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    Our Services
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedIndustry.services.map((service, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-8">
                  <h3
                    className="text-xl font-medium text-black mb-6"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    Projects
                  </h3>
                  <div className="space-y-6">
                    {selectedIndustry.projects.map((project, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h4
                            className="text-lg font-medium text-black mb-2 leading-tight"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                          >
                            {project.title}
                          </h4>
                          <p
                            className="text-sm text-gray-600 leading-relaxed"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                          >
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View All Works Button */}
                <div className="text-center mb-8">
                  <button 
                    onClick={() => router.push('/portfolio')}
                    className="inline-flex items-center gap-2 text-blue-500 border-2 border-blue-500 rounded-lg px-6 py-3 hover:bg-blue-50 transition-colors"
                  >
                    <span>View all works</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Work with us */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3
                    className="text-xl font-medium text-black mb-4"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    Work with us
                  </h3>
                  <p
                    className="text-gray-600 mb-4 leading-relaxed"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    To find out more about our work or any of our other brands, get in touch. Mail us on{" "}
                    <a href="mailto:info@onepathsolutions.com" className="text-blue-500 hover:underline">
                      info@onepathsolutions.com
                    </a>{" "}
                    or call{" "}
                    <a href="tel:+914802733555" className="text-blue-500 hover:underline">
                      +91 480 2733 555
                    </a>
                  </p>
                  <button 
                    onClick={() => router.push('/contact')}
                    className="inline-flex items-center gap-2 text-blue-500 border-2 border-blue-500 rounded-lg px-6 py-3 hover:bg-blue-50 transition-colors"
                  >
                    <span>Let's talk</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}