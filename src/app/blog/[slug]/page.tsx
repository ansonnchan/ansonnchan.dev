import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CursorDots from "@/components/CursorDots";
import NowPlaying from "@/components/NowPlaying";
import ThemeToggle from "@/components/ThemeToggle";
import { blogPosts, getBlogPost } from "@/data/blogs";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = getBlogPost((await params).slug);

  return {
    title: post ? `${post.title} | Anson Chan` : "Blog | Anson Chan"
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  return (
    <div className="v2-page">
      <CursorDots />
      <div className="v2-top-controls">
        <ThemeToggle />
        <NowPlaying />
      </div>
      <main className="v2-main v2-blog-page-main">
        <div className="v2-hero-cartoons" aria-hidden="true">
          <img className="v2-cartoon v2-cartoon-moon" src="/assets/cartoons/moon.png" alt="" />
        </div>
        <header className="v2-blog-page-header">
          <Link href="/">Anson Chan (陳雋希)</Link>
        </header>
        <article className="v2-blog-article" aria-label={post.title} />
      </main>
    </div>
  );
}
