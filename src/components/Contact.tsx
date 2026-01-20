"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    projectDescription: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-white" data-header-color="white">
      {/* Main Content */}
      <div className="pt-40 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-normal text-black leading-tight"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Have a project
                  <br />
                  in mind?
                </h1>
                
                <p 
                  className="text-2xl md:text-3xl text-gray-700 font-light"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Let's make it happen!
                </p>
              </div>

              {/* Download Brochure Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 p-8 bg-gray-100 rounded-2xl cursor-pointer hover:bg-gray-200 transition-colors duration-300 max-w-md"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="w-12 h-14 bg-white rounded-sm shadow-md transform rotate-12 relative">
                    <div className="absolute top-2 left-2 right-2">
                      <div className="h-1 bg-gray-300 rounded mb-1"></div>
                      <div className="h-1 bg-gray-300 rounded mb-1"></div>
                      <div className="h-1 bg-gray-200 rounded"></div>
                    </div>
                    <div className="absolute bottom-2 left-2 text-xs font-bold text-gray-600">
                      PDF
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-medium text-black mb-2"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    Download Our Brochure
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base">PDF 2.0 MB</span>
                    <div className="flex items-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                        <path d="M12 15l-4-4h3V4h2v7h3l-4 4z" fill="currentColor"/>
                        <path d="M2 17h20v2H2v-2z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label 
                      className="text-sm font-medium text-gray-700"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter first name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label 
                      className="text-sm font-medium text-gray-700"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter last name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      required
                    />
                  </div>
                </div>

                {/* Email & Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label 
                      className="text-sm font-medium text-gray-700"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email here"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label 
                      className="text-sm font-medium text-gray-700"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      Phone Number
                    </label>
                    <div className="flex">
                      <select className="px-3 py-3 border border-gray-200 border-r-0 rounded-l-lg bg-gray-50 text-gray-600 focus:outline-none">
                        <option>+62</option>
                        <option>+1</option>
                        <option>+44</option>
                        <option>+91</option>
                      </select>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="8759-4775-7385"
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <label 
                    className="text-sm font-medium text-gray-700"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    Describe Project
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    placeholder="Brief about your project"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    <span>Send Enquiry</span>
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Locations Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-black mb-4"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Our Locations
            </h2>
            <p 
              className="text-xl md:text-2xl text-gray-700 font-normal"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Our branches across the world
            </p>
          </div>

          {/* Locations Grid */}
          <div className="space-y-16">
            {/* India */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
            >
              <div className="space-y-4">
                <div className="w-full h-48 rounded-2xl overflow-hidden">
                  <img 
                    src="/assets/india.png" 
                    alt="India Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-6 bg-orange-500 rounded-sm flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-orange-500"></div>
                    <div className="absolute inset-0 bg-white" style={{clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 33%)'}}></div>
                    <div className="absolute inset-0 bg-green-600" style={{clipPath: 'polygon(0 67%, 100% 67%, 100% 100%, 0 100%)'}}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-blue-800 rounded-full bg-transparent"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium text-black">INDIA</h3>
                </div>
                <div className="text-gray-600 space-y-1">
                  <p>Level 1, Mirza Arcade Building, B-1,</p>
                  <p>21/148, Shaikpet, Surya Nagar, Toli</p>
                  <p>Chowki, Hyderabad, Telangana</p>
                  <p>500008, India</p>
                </div>
                <motion.a
                  href="https://maps.google.com/?q=Level+1+Mirza+Arcade+Building+B-1+21/148+Shaikpet+Surya+Nagar+Toli+Chowki+Hyderabad+Telangana+500008+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <span className="font-medium">Get Directions</span>
                </motion.a>
              </div>

              {/* Contact Cards - Two on top, one centered below */}
              <div className="lg:col-span-2 space-y-4">
                {/* Top Row - Two cards side by side */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">General Enquiry</span>
                    </div>
                    <p className="text-lg font-medium text-black">+91 - 86868 36147</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Sales Enquiry</span>
                    </div>
                    <p className="text-lg font-medium text-black">+91 - 86868 36147</p>
                  </div>
                </div>

                {/* Bottom Row - Centered email card */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#3B82F6" strokeWidth="2"/>
                          <polyline points="22,6 12,13 2,6" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Email</span>
                    </div>
                    <p className="text-lg font-medium text-black">info@onepathsolutions.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* UK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
            >
              <div className="space-y-4">
                <div className="w-full h-48 rounded-2xl overflow-hidden">
                  <img 
                    src="/assets/uk.png" 
                    alt="UK Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-6 bg-blue-600 rounded-sm flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-blue-600"></div>
                    <div className="absolute inset-0 bg-red-600" style={{clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)'}}></div>
                    <div className="absolute inset-0 bg-red-600" style={{clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)'}}></div>
                    <div className="absolute inset-0 bg-white" style={{clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)'}}></div>
                  </div>
                  <h3 className="text-2xl font-medium text-black">UK</h3>
                </div>
                <div className="text-gray-600 space-y-1">
                  <p>Level 1, Mirza Arcade Building, B-1,</p>
                  <p>21/148, Shaikpet, Surya Nagar, Toli</p>
                  <p>Chowki, Hyderabad, Telangana</p>
                  <p>500008, India</p>
                </div>
                <motion.a
                  href="https://maps.google.com/?q=Level+1+Mirza+Arcade+Building+B-1+21/148+Shaikpet+Surya+Nagar+Toli+Chowki+Hyderabad+Telangana+500008+UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <span className="font-medium">Get Directions</span>
                </motion.a>
              </div>

              {/* Contact Cards - Two on top, one centered below */}
              <div className="lg:col-span-2 space-y-4">
                {/* Top Row - Two cards side by side */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">General Enquiry</span>
                    </div>
                    <p className="text-lg font-medium text-black">+91 - 86868 36147</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Sales Enquiry</span>
                    </div>
                    <p className="text-lg font-medium text-black">+91 - 86868 36147</p>
                  </div>
                </div>

                {/* Bottom Row - Centered email card */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#3B82F6" strokeWidth="2"/>
                          <polyline points="22,6 12,13 2,6" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Email</span>
                    </div>
                    <p className="text-lg font-medium text-black">info@onepathsolutions.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Saudi Arabia */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
            >
              <div className="space-y-4">
                <div className="w-full h-48 rounded-2xl overflow-hidden">
                  <img 
                    src="/assets/saudi.png" 
                    alt="Saudi Arabia Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-6 bg-green-600 rounded-sm flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-green-600"></div>
                    <div className="absolute inset-y-0 left-0 w-full flex items-center justify-center">
                      <div className="w-4 h-4 text-white">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium text-black">SAUDI ARABIA</h3>
                </div>
                <div className="text-gray-600 space-y-1">
                  <p>Level 1, Mirza Arcade Building, B-1,</p>
                  <p>21/148, Shaikpet, Surya Nagar, Toli</p>
                  <p>Chowki, Hyderabad, Telangana</p>
                  <p>500008, India</p>
                </div>
                <motion.a
                  href="https://maps.google.com/?q=Level+1+Mirza+Arcade+Building+B-1+21/148+Shaikpet+Surya+Nagar+Toli+Chowki+Hyderabad+Telangana+500008+Saudi+Arabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <span className="font-medium">Get Directions</span>
                </motion.a>
              </div>

              {/* Contact Cards - Two on top, one centered below */}
              <div className="lg:col-span-2 space-y-4">
                {/* Top Row - Two cards side by side */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">General Enquiry</span>
                    </div>
                    <p className="text-lg font-medium text-black">+91 - 86868 36147</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Sales Enquiry</span>
                    </div>
                    <p className="text-lg font-medium text-black">+91 - 86868 36147</p>
                  </div>
                </div>

                {/* Bottom Row - Centered email card */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#3B82F6" strokeWidth="2"/>
                          <polyline points="22,6 12,13 2,6" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Email</span>
                    </div>
                    <p className="text-lg font-medium text-black">info@onepathsolutions.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Canada */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
            >
              <div className="space-y-4">
                <div className="w-full h-48 rounded-2xl overflow-hidden">
                  <img 
                    src="/assets/canada.png" 
                    alt="Canada Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-6 bg-red-600 rounded-sm flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-red-600"></div>
                    <div className="absolute inset-0 bg-white" style={{clipPath: 'polygon(0 0, 40% 0, 40% 100%, 0 100%)'}}></div>
                    <div className="absolute inset-0 bg-white" style={{clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 60% 100%)'}}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-4 text-red-600">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium text-black">CANADA</h3>
                </div>
                <div className="text-gray-600 space-y-1">
                  <p>Level 1, Mirza Arcade Building, B-1,</p>
                  <p>21/148, Shaikpet, Surya Nagar, Toli</p>
                  <p>Chowki, Hyderabad, Telangana</p>
                  <p>500008, India</p>
                </div>
                <motion.a
                  href="https://maps.google.com/?q=Level+1+Mirza+Arcade+Building+B-1+21/148+Shaikpet+Surya+Nagar+Toli+Chowki+Hyderabad+Telangana+500008+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <span className="font-medium">Get Directions</span>
                </motion.a>
              </div>

              {/* Contact Cards - Two on top, one centered below */}
              <div className="lg:col-span-2 space-y-4">
                {/* Top Row - Two cards side by side */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">General Enquiry</span>
                    </div>
                    <p className="text-lg font-medium text-black">+91 - 86868 36147</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Sales Enquiry</span>
                    </div>
                    <p className="text-lg font-medium text-black">+91 - 86868 36147</p>
                  </div>
                </div>

                {/* Bottom Row - Centered email card */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#3B82F6" strokeWidth="2"/>
                          <polyline points="22,6 12,13 2,6" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Email</span>
                    </div>
                    <p className="text-lg font-medium text-black">info@onepathsolutions.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
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

          {/* Divider line */}
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
            <p style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}>
              OnePath Solutions © {new Date().getFullYear()} All rights reserved
            </p>
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
    </section>
  );
}