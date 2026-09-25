import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CursorDots from "@/components/CursorDots";
import GettingFirstCoop from "@/components/blog/GettingFirstCoop";
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
    title: post?.title ?? "Blog"
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  return (
    <div className="v2-page">
      <CursorDots />
      <div className="v2-top-controls">
        <Link aria-label="Return to home page" className="v2-home-link" href="/">
          <img alt="" aria-hidden="true" src="/assets/icons/home.svg" />
        </Link>
        <ThemeToggle />
        <NowPlaying />
      </div>
      <main className="v2-main v2-blog-page-main">
        <div className="v2-hero-cartoons" aria-hidden="true">
          <img className="v2-cartoon v2-cartoon-moon" src="/assets/cartoons/moon.png" alt="" />
        </div>
        <header className="v2-blog-page-header">
          <Link href="/">Anson Chan (陳雋希)</Link>
          <p className="v2-tagline">Software Engineer</p>
          <p className="v2-flags" aria-label="Hong Kong and Australia">🇭🇰 🇦🇺</p>
        </header>
        {post.slug === "getting-the-first-co-op" ? (
          <GettingFirstCoop />
        ) : (
          <article className="v2-blog-article" aria-label={post.title} />
        )}
        <footer className="v2-footer">
          <p>© 2026 Anson Chan <img alt="" aria-hidden="true" src="/assets/icons/rocket.png" /></p>
        </footer>
      </main>
    </div>
  );
}
