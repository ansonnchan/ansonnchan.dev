import type { Project } from "@/data/types";

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description: "You’re on it now silly. This site has changed a lot since its first version.",
    image: "/assets/projects/personal-portfolio/portfolio_pic1.webp",
    icon: "/assets/test_favicon.jpg",
    gallery: {
      images: [
        { src: "/assets/projects/personal-portfolio/portfolio_pic1.webp", alt: "Personal portfolio home page" },
        { src: "/assets/projects/personal-portfolio/portfolio_pic2.webp", alt: "Personal portfolio projects section" }
      ]
    },
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub GraphQL API"],
    github: "https://github.com/ansonnchan/portfolio",
    live: "https://www.ansonnchan.dev/",
    details: [
      "Added a server-side API route that calls GitHub’s GraphQL contributionCalendar API.",
      "Optimized hard-refresh gallery performance by compressing oversized media and preloading key accordion images."
    ]
  },
  {
    title: "Pear Programming",
    description: "A collaborative coding editor with real-time editing, shared workspaces, and AI-assisted coding features.",
    image: "/assets/projects/pear-programming/pear-program-pic2.webp",
    icon: "/assets/projects/pear-programming/pear-programming-favicon.png",
    gallery: {
      images: [
        { src: "/assets/projects/pear-programming/pear-program-pic3.webp", alt: "Pear Programming collaborative code editor" },
        {
          src: "/assets/projects/pear-programming/pear-program-demo.mp4",
          alt: "Pear Programming shared workspace demo",
          mediaType: "video",
          fallbackSrc: "/assets/projects/pear-programming/pear-program-demo.gif"
        }
      ]
    },
    techStack: ["Java", "TypeScript", "Spring Boot", "Redis", "Yjs", "Monaco Editor", "Groq", "Judge0"],
    github: "https://github.com/ansonnchan/PearProgramming",
    live: "https://pear-programming.vercel.app/",
    details: [
      "Supports multi-user code editing, shared workspaces, live code execution, and context-aware AI assistance.",
      "Includes recovery mechanisms such as fallback syncing, room state persistence, stale-session cleanup, and cross-instance fanout."
    ]
  },
  {
    title: "Jukebox",
    description: "Drop a coin in the jukebox of your feelings. Five AI personalities are ready to spin whatever mood you’re in.",
    image: "/assets/projects/hear-me-out/vent.ai_pic1.webp",
    icon: "/assets/projects/hear-me-out/vent.ai_icon.png",
    gallery: {
      images: [
        { src: "/assets/projects/hear-me-out/vent.ai_pic1.webp", alt: "Hear Me Out AI personality selection screen" },
        {
          src: "/assets/projects/hear-me-out/hear-me-out-demo.mp4",
          alt: "Hear Me Out AI conversation demo",
          mediaType: "video",
          fallbackSrc: "/assets/projects/hear-me-out/vent.ai_pic2.webp"
        }
      ]
    },
    techStack: ["TypeScript", "React", "Next.js", "Groq", "Redis"],
    github: "https://github.com/ansonnchan/jukebox",
    live: "https://my-jukebox-web.vercel.app/",
    details: [
      "Supports five AI personalities powered by Groq, ranging from ancient wisdom to straight-up tiger mom energy.",
      "Stores conversations in memory and clears them after the session ends.",
      "Uses Upstash Redis rate limiting and progressive context compression to keep conversations responsive."
    ]
  },
  {
    title: "Dead Code Explorer",
    description: "A VS Code extension that identifies dead code with confidence-ranked evidence.",
    image: "/assets/projects/dead-code-explorer/dead-code-explorer-pic-1.webp",
    icon: "/assets/projects/dead-code-explorer/dead-code-explorer-icon.png",
    gallery: {
      images: [
        {
          src: "/assets/projects/dead-code-explorer/dead-code-explorer-pic-2.webp",
          alt: "Dead Code Explorer findings",
          fit: "fill"
        },
        {
          src: "/assets/projects/dead-code-explorer/dead-code-explorer-pic-1.webp",
          alt: "Dead Code Explorer extension",
          fit: "natural"
        }
      ]
    },
    github: "https://github.com/ansonnchan/dead-code-explorer",
    techStack: ["TypeScript", "VS Code API", "TypeScript Compiler API", "ts-morph"],
    details: [
      "Detects potentially unreachable files, functions, classes, types, and exports using compiler-backed dependency graphs.",
      "Handles path aliases, barrel re-exports, dynamic imports, and dead dependency chains across 400K+ LOC and 3,000+ files."
    ]
  }
];

