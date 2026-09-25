export type BlogPost = {
  slug: string;
  title: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ubc-course-review-computer-engineering-edition",
    title: "UBC Course Review (Computer Engineering Edition)"
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
