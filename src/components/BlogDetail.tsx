"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Tag, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import FooterSection from "./FooterSection";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  authorImage: string;
  authorBio: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface BlogDetailProps {
  post: BlogPost;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/insights');
  };

  const relatedPosts = [
    {
      id: 2,
      title: "NodeJS vs Python: Choosing the Right Backend Technology in 2026",
      image: "/assets/Rectangle 88 (1).png",
      category: "Development",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Complete Guide to Mobile App Development in 2026",
      image: "/assets/Rectangle 88 (2).png",
      category: "Development", 
      readTime: "15 min read"
    },
    {
      id: 4,
      title: "Design Systems: Building Consistent User Experiences",
      image: "/assets/Rectangle 88 (3).png",
      category: "Design",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white" data-header-color="white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={handleBackClick}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Back to Insights
            </span>
          </motion.button>

          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6"
          >
            <span className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            {post.title}
          </motion.h1>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-4">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p
                  className="font-medium text-black"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {post.author}
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Author
                </p>
              </div>
            </div>

            {/* Share Actions */}
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Share2 className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Bookmark className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 md:px-12 lg:px-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <div
              className="text-gray-700 leading-relaxed space-y-6"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <h3
                className="text-lg font-medium text-black mb-4"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 p-6 bg-gray-50 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3
                  className="text-lg font-medium text-black mb-2"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  About {post.author}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {post.authorBio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-light text-black mb-12"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Related Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => router.push(`/blog/${relatedPost.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {relatedPost.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Clock className="w-3 h-3" />
                    {relatedPost.readTime}
                  </div>

                  <h3
                    className="text-lg font-medium text-black leading-tight group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {relatedPost.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}