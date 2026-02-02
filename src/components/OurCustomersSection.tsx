"use client";

import { motion } from "framer-motion";

const customers = [
  {
    id: 1,
    name: "Sarah Johnson",
    sector: "Senior Developer",
    description:
      "Working at One Path Solutions has been an incredible journey. The collaborative environment and cutting-edge projects keep me motivated every day.",
    image: "/assets/emp1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    sector: "Product Manager",
    description:
      "The company's commitment to innovation and employee growth is outstanding. I've been able to lead amazing projects and develop my skills.",
    image: "/assets/emp2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    sector: "UX Designer",
    description:
      "One Path Solutions values creativity and provides the perfect platform to bring innovative design ideas to life. It's truly inspiring.",
    image: "/assets/emp3.png",
  },
];

export default function OurCustomersSection() {
  return (
    <motion.section
      data-section="our-customers"
      data-header-color="white"
      className="relative bg-[#f5f6f8] text-black overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">
        {/* Heading + subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl space-y-4 mb-10 md:mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[48px] font-light text-[#111827]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            Hear from our Customers
          </h2>
          <p
            className="text-[16px] md:text-[18px] leading-relaxed text-[#111827]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            We exist to empower people and businesses with technology, creating
            seamless solutions that simplify challenges.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {customers.map((customer, index) => (
            <motion.article
              key={customer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              className="flex justify-center"
            >
              <div className="flex h-[569px] w-full max-w-[403px] flex-col overflow-hidden rounded-[40px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                {/* Image with top rounded corners and subtle bottom wave/fade */}
                <div className="relative h-[320px] w-full overflow-hidden rounded-t-[40px]">
                  {customer.video ? (
                    <video
                      src={customer.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="h-full w-full object-cover"
                    />
                  )}

                  {/* Finance pill */}
                  <div className="absolute bottom-4 left-5">
                    <div className="rounded-full bg-black/40 px-4 py-1 text-white text-xs md:text-sm backdrop-blur-md">
                      {customer.sector}
                    </div>
                  </div>

                  {/* Blue arrow top-right */}
                  <div className="absolute top-4 right-4">
                    <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white shadow-md hover:bg-sky-600 transition-colors">
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
                    </button>
                  </div>

                  {/* Subtle white wave/fade at bottom of image */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Text content */}
                <div className="flex flex-1 flex-col px-6 pt-6 pb-8 space-y-3">
                  <h3
                    className="text-[20px] md:text-[22px] text-black"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                  >
                    {customer.name}
                  </h3>
                  <p
                    className="text-[16px] leading-relaxed text-black/80"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    {customer.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all stories button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="/career2"
            className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3 text-sm md:text-base font-medium text-white shadow-[0_10px_30px_rgba(56,189,248,0.45)] hover:bg-sky-600 transition-colors"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span>View all stories</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/90 text-white text-xs">
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}


