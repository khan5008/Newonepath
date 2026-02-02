"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark, ThumbsUp, MessageCircle } from "lucide-react";
import Header from "./Header";
import FooterSection from "./FooterSection";
import { getBlogPostById, getRelatedPosts, type BlogPost } from "@/data/blogPosts";

export default function BlogDetail({ postId }: { postId: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    const foundPost = getBlogPostById(parseInt(postId));
    if (foundPost) {
      setPost(foundPost);
      setLikes(Math.floor(Math.random() * 100) + 20); // Random likes for demo
    }
    setIsLoading(false);
  }, [postId]);

  const handleNavigation = (path: string) => {
    try {
      router.push(path);
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to window.location if router fails
      window.location.href = path;
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white" data-header-color="white">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-600 mb-4">Blog post not found</h2>
          <button 
            onClick={() => handleNavigation('/insights')}
            className="text-blue-500 hover:text-blue-600"
          >
            ← Back to Insights
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  return (
    <div className="min-h-screen bg-white" data-header-color="white">
      <Header />
      
      {/* Article Header */}
      <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => handleNavigation('/insights')}
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Insights</span>
            </button>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
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
            </div>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight mb-6"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {post.title}
            </h1>

            <p
              className="text-xl text-gray-600 leading-relaxed mb-8"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="flex items-center gap-4">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3
                    className="font-semibold text-black"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {post.author}
                  </h3>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {post.authorBio}
                  </p>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isLiked 
                      ? 'bg-red-50 text-red-500' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{likes}</span>
                </button>
                
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-lg transition-colors ${
                    isBookmarked 
                      ? 'bg-blue-50 text-blue-500' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
                
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
              className="blog-content"
            />
          </motion.div>

          {/* Tags */}
          {post.tags && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <h4
                className="text-lg font-medium text-black mb-4"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Tags
              </h4>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Comments Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="w-6 h-6 text-gray-600" />
              <h4
                className="text-xl font-medium text-black"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Discussion
              </h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Join the conversation! Share your thoughts and insights about this article.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Start Discussion
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-light text-black mb-8"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Related Articles
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => handleNavigation(`/blog/${relatedPost.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleNavigation(`/blog/${relatedPost.id}`);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Read related article: ${relatedPost.title}`}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {relatedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>

                    <h3
                      className="text-lg font-medium text-black leading-tight group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {relatedPost.title}
                    </h3>

                    <p
                      className="text-sm text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {relatedPost.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors">
                      <span>Read Article</span>
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterSection />

      <style jsx>{`
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 300;
          color: #111827;
          margin: 2rem 0 1rem 0;
          line-height: 1.2;
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 400;
          color: #374151;
          margin: 1.5rem 0 0.75rem 0;
          line-height: 1.3;
        }
        
        .blog-content p {
          color: #4B5563;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }
        
        .blog-content ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        
        .blog-content li {
          color: #4B5563;
          line-height: 1.6;
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
        }
        
        .blog-content strong {
          color: #111827;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}