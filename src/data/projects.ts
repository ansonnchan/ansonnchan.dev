export type Project = {
  slug: string;
  name: string;
  description: string;
  demoVideo: string;
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "nemu",
    name: "nemu · ねむ",
    description: "Built a desktop telemetry agent in Go that tracks time spent in foreground apps and turns it into structured usage summaries.",
    demoVideo: "/assets/projects/nemu-demo.mp4",
    liveUrl: "https://nemu-landing.vercel.app/",
    githubUrl: "https://github.com/ansonnchan/nemu"
  },
  {
    slug: "pear-programming",
    name: "Pear Programming",
    description: "Built a collaborative browser IDE for real-time pair programming using Spring Boot and React. Supports code execution through Judge0 and shared workspace features.",
    demoVideo: "/assets/projects/pear-programming-demo.m4v",
    liveUrl: "https://pear-programming.vercel.app/",
    githubUrl: "https://github.com/ansonnchan/PearProgramming"
  },
  {
    slug: "personal-portfolio",
    name: "Personal Portfolio",
    description: "Built my corner of the internet with Next.js, React, and TypeScript. I think this is the fourth iteration of my portfolio.",
    demoVideo: "/assets/projects/portfolio-demo.m4v",
    liveUrl: "https://www.ansonnchan.dev/",
    githubUrl: "https://github.com/ansonnchan/ansonnchan.dev"
  }
];
