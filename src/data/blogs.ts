export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-the-first-co-op",
    title: "Getting the First Co-op",
    publishedAt: "2026-09-24",
    publishedLabel: "September 24, 2026",
    readingTime: "5 min read"
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
