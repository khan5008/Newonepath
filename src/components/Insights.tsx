"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Header from "./Header";
import FooterSection from "./FooterSection";
import { getFeaturedPost, getBlogPosts } from "@/data/blogPosts";

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const categories = ["All", "Technology", "Design", "Business", "Marketing", "Development"];

  const featuredPost = getFeaturedPost();
  const blogPosts = getBlogPosts();

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleBlogNavigation = (postId: number) => {
    try {
      router.push(`/blog/${postId}`);
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to window.location if router fails
      window.location.href = `/blog/${postId}`;
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white" data-header-color="white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 px-6 md:px-12 lg:px-20" data-header-color="white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Insights & Perspectives
            </h1>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Explore the latest trends, insights, and expert perspectives on technology, 
              design, and business innovation from our team of industry professionals.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-light text-black mb-2"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Featured Article
            </h2>
            <div className="w-20 h-1 bg-blue-500"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group cursor-pointer"
            onClick={() => handleBlogNavigation(featuredPost.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleBlogNavigation(featuredPost.id);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Read full article: ${featuredPost.title}`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h3
                className="text-2xl md:text-3xl font-light text-black leading-tight"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {featuredPost.title}
              </h3>

              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={featuredPost.authorImage}
                  alt={featuredPost.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p
                    className="font-medium text-black"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {featuredPost.author}
                  </p>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    Author
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-blue-500 group-hover:text-blue-600 font-medium transition-colors">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-light text-black mb-2"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Latest Articles
            </h2>
            <div className="w-20 h-1 bg-blue-500"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => handleBlogNavigation(post.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleBlogNavigation(post.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Read article: ${post.title}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-medium text-black leading-tight group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span
                        className="text-sm font-medium text-gray-700"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {post.author}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p
                className="text-gray-500 text-lg"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                No articles found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl font-light text-white mb-6"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Stay Updated with Our Latest Insights
            </h2>
            <p
              className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Subscribe to our newsletter and get the latest articles, trends, and insights 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}