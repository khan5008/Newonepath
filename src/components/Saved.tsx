"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Saved() {
  return (
    <section className="min-h-screen bg-white" data-header-color="white">
      {/* Main Content */}
      <div className="pt-40 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="text-center max-w-md">
              {/* Folder Illustration */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  {/* Main folder */}
                  <div className="w-32 h-24 bg-blue-100 rounded-lg relative transform rotate-12">
                    <div className="absolute top-2 left-2 w-4 h-4 bg-black rounded-sm"></div>
                    <div className="absolute bottom-2 left-2 right-2 h-1 bg-blue-200 rounded"></div>
                    <div className="absolute bottom-4 left-2 right-2 h-1 bg-blue-200 rounded"></div>
                  </div>
                  
                  {/* Side elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-gray-300 rounded-full bg-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-gray-300 rounded bg-white"></div>
                  
                  <div className="absolute top-4 -right-6 w-8 h-1 bg-gray-300 rounded"></div>
                  <div className="absolute top-6 -right-4 w-6 h-1 bg-gray-300 rounded"></div>
                  
                  <div className="absolute -bottom-4 right-4 w-1 h-8 bg-gray-300 rounded"></div>
                  <div className="absolute -bottom-2 right-6 w-1 h-6 bg-gray-300 rounded"></div>
                </div>
              </div>

              <h2 className="text-3xl font-normal text-black mb-3">You have no saved pages!</h2>
              <p className="text-gray-600 mb-8">Make use of the Save Folder to store and share our pages!</p>
              
              <motion.a
                href="/"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                Back to home
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}