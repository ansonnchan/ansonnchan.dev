export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
  active: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-the-first-co-op",
    title: "Getting the First Co-op",
    publishedAt: "2026-09-24",
    publishedLabel: "September 24, 2026",
    readingTime: "5 min read",
    active: false
  }
];

export const activeBlogPosts = blogPosts.filter((post) => post.active);

export function getBlogPost(slug: string) {
  return activeBlogPosts.find((post) => post.slug === slug);
}
