export type ProjectTextStyle = "handwritten" | "highlight" | "strong" | "blue";

export type ProjectTextSegment = {
  text: string;
  style?: ProjectTextStyle;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  demoImage: string;
  demoImageAlt: string;
  overview: ProjectTextSegment[];
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "pear-programming",
    name: "Pear Programming",
    description: "coding is better with company (or not)",
    image: "/assets/penguin_project_stickers/penguin-pear-programming.png",
    imageAlt: "Two penguins pair programming together on a pear-decorated laptop",
    demoImage: "/assets/projects/pear-programming/pear-program-pic2.webp",
    demoImageAlt:
      "Pear Programming workspace with a shared C++ editor, output console, and room chat",
    overview: [
      { text: "Built a " },
      { text: "collaborative browser IDE", style: "highlight" },
      { text: " for real-time pair programming with " },
      { text: "Spring Boot, React, Yjs, Redis, Monaco, and Judge0", style: "strong" },
      { text: ". This was my first proper dive into multiplayer state—syncing edits, cursor presence, chat, shared rooms, and code execution without everything stepping on everything else. " },
      { text: "Pair programming, except the pear pun is mandatory.", style: "handwritten" }
    ],
    liveUrl: "https://pear-programming.vercel.app/",
    githubUrl: "https://github.com/ansonnchan/PearProgramming"
  },
  {
    slug: "personal-portfolio",
    name: "Personal Portfolio",
    description: "my little corner of the internet, penguins included",
    image: "/assets/penguin_project_stickers/penguin-portfolio.png",
    imageAlt: "A penguin in a propeller hat holding a sign that reads this is Anson",
    demoImage: "/assets/projects/personal-portfolio/portfolio_pic1.webp",
    demoImageAlt: "An illustrated earlier version of Anson's portfolio landing page",
    overview: [
      { text: "Built this portfolio with " },
      { text: "Next.js, React, and TypeScript", style: "strong" },
      { text: "—plus far more penguin illustrations than any reasonable design system needs. I wanted somewhere that could show the engineering work without reading like a résumé, so I focused on " },
      { text: "reusable components, responsive layouts, accessibility, and small interactions", style: "highlight" },
      { text: " that make the site feel like mine. " },
      { text: "It is almost certainly never finished.", style: "handwritten" }
    ],
    liveUrl: "https://www.ansonnchan.dev/",
    githubUrl: "https://github.com/ansonnchan/portfolio"
  },
  {
    slug: "juke-box",
    name: "Jukebox",
    description: "for when your imaginary friend needs coworkers",
    image: "/assets/penguin_project_stickers/penguin-jukebox.png",
    imageAlt: "Two penguins having a thoughtful conversation from armchairs",
    demoImage: "/assets/projects/hear-me-out/vent.ai_pic1.webp",
    demoImageAlt: "Juke Box personality picker showing five AI conversation styles",
    overview: [
      { text: "Built an " },
      { text: "AI reflection app", style: "highlight" },
      { text: " where five personalities offer completely different takes on whatever is on your mind. I used " },
      { text: "Next.js, Groq, Redis, and server-sent events", style: "strong" },
      { text: " to keep conversations responsive while client-side sessions disappear when you leave. The fun part was making each personality feel genuinely distinct instead of like the same chatbot wearing five hats. " },
      { text: "Your imaginary friend has coworkers now.", style: "handwritten" }
    ],
    liveUrl: "https://my-jukebox-web.vercel.app/",
    githubUrl: "https://github.com/ansonnchan/jukebox"
  },
  {
    slug: "dead-code-explorer",
    name: "Dead Code Explorer",
    description: "some code was never meant to make it",
    image: "/assets/penguin_project_stickers/penguin-dead-code-explorer.png",
    imageAlt: "A detective penguin inspecting code on a laptop with a magnifying glass",
    demoImage: "/assets/projects/dead-code-explorer/dead-code-explorer-pic-2.webp",
    demoImageAlt:
      "Dead Code Explorer marking an unused TypeScript function with a confidence explanation",
    overview: [
      { text: "Built a " },
      { text: "VS Code extension", style: "highlight" },
      { text: " that finds files, functions, types, and exports nobody can actually reach. It was my first time getting properly acquainted with the " },
      { text: "TypeScript Compiler API, ts-morph, and dependency graphs", style: "strong" },
      { text: ", including the fun edge cases: aliases, barrel exports, dynamic imports, and chains made entirely of other dead code. " },
      { text: "Basically detective work, but the suspects are unused functions.", style: "handwritten" }
    ],
    githubUrl: "https://github.com/ansonnchan/dead-code-explorer"
  }
];
