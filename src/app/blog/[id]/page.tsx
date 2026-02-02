import BlogDetail from "@/components/BlogDetail";
import { getBlogPostById } from "@/data/blogPosts";
import { Metadata } from "next";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const post = getBlogPostById(parseInt(params.id));
  
  if (!post) {
    return {
      title: "Blog Post Not Found - One Path Solutions",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - One Path Solutions Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
    },
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  return <BlogDetail postId={params.id} />;
}