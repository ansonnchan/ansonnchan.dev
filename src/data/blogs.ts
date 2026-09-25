export type BlogPost = {
  slug: string;
  title: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-the-first-co-op",
    title: "Getting the First Co-op"
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
