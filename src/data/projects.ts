export type Project = {
  slug: string;
  name: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  technologies: string[];
  highlight: string;
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "pear-programming",
    name: "Pear Programming",
    label: "featured build",
    description:
      "A collaborative browser IDE for real-time editing, shared workspaces, chat, and live code execution.",
    image: "/assets/projects/pear-programming/pear-program-pic2.webp",
    imageAlt:
      "Pear Programming workspace with a shared C++ editor, output console, and room chat",
    icon: "/assets/projects/pear-programming/pear-programming-favicon.png",
    technologies: ["TypeScript", "Spring Boot", "Redis", "Yjs", "Monaco Editor"],
    highlight: "~40 ms p95 edit latency with five concurrent users",
    liveUrl: "https://pear-programming.vercel.app/",
    githubUrl: "https://github.com/ansonnchan/PearProgramming"
  },
  {
    slug: "personal-portfolio",
    name: "Personal Portfolio",
    label: "design + engineering",
    description:
      "A hand-crafted personal site pairing playful illustrations with reusable components and a responsive editorial system.",
    image: "/assets/projects/personal-portfolio/portfolio_pic1.webp",
    imageAlt:
      "An earlier illustrated landing page for Anson's personal portfolio",
    icon: "/assets/projects/personal-portfolio/portfolio_icon.png",
    technologies: ["Next.js", "React", "TypeScript", "CSS"],
    highlight: "Responsive pages, custom illustrations, and optimized media delivery",
    liveUrl: "https://www.ansonnchan.dev/",
    githubUrl: "https://github.com/ansonnchan/portfolio"
  },
  {
    slug: "juke-box",
    name: "Juke Box",
    label: "AI reflection platform",
    description:
      "A reflective conversation space where five distinct AI personalities respond through different perspectives.",
    image: "/assets/projects/hear-me-out/vent.ai_pic1.webp",
    imageAlt:
      "Juke Box personality picker showing five AI characters with different conversation styles",
    icon: "/assets/projects/hear-me-out/vent.ai_icon.png",
    technologies: ["Next.js", "React", "TypeScript", "Groq", "Redis"],
    highlight: "~450 ms time to first visible streamed token",
    liveUrl: "https://my-jukebox-web.vercel.app/",
    githubUrl: "https://github.com/ansonnchan/jukebox"
  },
  {
    slug: "dead-code-explorer",
    name: "Dead Code Explorer",
    label: "developer tool",
    description:
      "A VS Code extension that traces unreachable code and dependency chains with confidence-ranked evidence.",
    image: "/assets/projects/dead-code-explorer/dead-code-explorer-pic-2.webp",
    imageAlt:
      "Dead Code Explorer marking an unused TypeScript function with a medium-confidence explanation",
    icon: "/assets/projects/dead-code-explorer/dead-code-explorer-icon.png",
    technologies: ["TypeScript", "VS Code API", "Compiler API", "ts-morph"],
    highlight: "400K+ lines across 3,000+ files scanned in 22 seconds p95",
    githubUrl: "https://github.com/ansonnchan/dead-code-explorer"
  }
];
