export type Project = {
  slug: string;
  name: string;
  description: string;
  demoVideo?: string;
  demoImage?: string;
  liveUrl?: string;
  releaseUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "nemu",
    name: "nemu · ねむ",
    description: "Built a desktop telemetry agent in Go that tracks time spent in foreground apps and turns it into structured usage summaries.",
    demoVideo: "/assets/videos/nemu.mp4",
    liveUrl: "https://nemu-landing.vercel.app/",
    githubUrl: "https://github.com/ansonnchan/nemu"
  },
  {
    slug: "pear-programming",
    name: "Pear Programming",
    description: "Built a collaborative browser IDE for real-time pair programming using Spring Boot and React. Supports code execution through Judge0 and shared workspace features.",
    demoVideo: "/assets/videos/pear-programming.m4v",
    liveUrl: "https://pear-programming.vercel.app/",
    githubUrl: "https://github.com/ansonnchan/PearProgramming"
  },
  {
    slug: "sloth",
    name: "Sloth · HTTP Performance Diagnostics",
    description: "Built a Go CLI that breaks down HTTP latency across DNS, TCP/TLS, first-byte, and transfer phases, benchmarks reuse and concurrency, and fails CI on regressions.",
    demoImage: "/assets/videos/sloth-demo.png",
    releaseUrl: "https://github.com/ansonnchan/sloth/releases/tag/v1.0.0",
    githubUrl: "https://github.com/ansonnchan/sloth"
  },
  {
    slug: "personal-portfolio",
    name: "Personal Portfolio",
    description: "Built my corner of the internet with Next.js, React, and TypeScript. I think this is the fourth iteration of my portfolio.",
    demoVideo: "/assets/videos/portfolio.m4v",
    liveUrl: "https://www.ansonnchan.dev/",
    githubUrl: "https://github.com/ansonnchan/ansonnchan.dev"
  }
];
