"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <motion.footer
      className="relative bg-black text-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 py-14 md:py-16 lg:py-20 space-y-10">
        {/* Top CTA row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2
              className="text-[30px] md:text-[36px] lg:text-[42px] font-light"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Get started now!
            </h2>
            <p
              className="text-[14px] md:text-[16px] text-white/80"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              It takes less than a minute of your time.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-4 rounded-full bg-white text-black px-7 py-3 text-sm md:text-base font-medium shadow-[0_12px_35px_rgba(0,0,0,0.5)]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span>Request a quote</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm">
              ↗
            </span>
          </motion.button>
        </div>

        {/* Divider line using provided SVG */}
        <div className="mt-2">
          <svg
            width="100%"
            height="1"
            viewBox="0 0 1305 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.5"
              x2="1304.5"
              y2="0.5"
              stroke="white"
              strokeLinecap="round"
              strokeOpacity="0.25"
            />
          </svg>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
          {[1, 2, 3, 4].map((col) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={col} className="space-y-3">
              <h3
                className="text-[14px] font-semibold tracking-wide"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Company
              </h3>
              <ul
                className="space-y-1.5 text-white/80"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                <li>About</li>
                <li>Services</li>
                <li>Industries</li>
                <li>Works</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          ))}

          {/* Connect column */}
          <div className="space-y-3">
            <h3
              className="text-[14px] font-semibold tracking-wide"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Connect
            </h3>
            <ul
              className="space-y-1.5 text-white/80 text-sm"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              <li>General Enquiry : +91 480 2733 111</li>
              <li>Sales Enquiry : +91 480 2733 555</li>
              <li>Email : info@onepathsolutions.com</li>
              <li>HR Enquiry : +91 480 2733 999</li>
              <li>Whatsapp : +91 8606 483 399</li>
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-4">
          <svg
            width="100%"
            height="1"
            viewBox="0 0 1305 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.5"
              x2="1304.5"
              y2="0.5"
              stroke="white"
              strokeLinecap="round"
              strokeOpacity="0.15"
            />
          </svg>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2 text-xs md:text-sm text-white/70">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <img
              src="/assets/wlogo3.png"
              alt="OnePath Solutions"
              className="h-26 w-auto md:h-25 lg:h-26"
            />
            <p style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}>
              OnePath Solutions © {new Date().getFullYear()} All rights
              reserved
            </p>
          </div>
          <p
            className="space-x-3"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms &amp; Conditions</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}


