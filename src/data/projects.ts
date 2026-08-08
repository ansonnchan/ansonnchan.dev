export type ProjectTextStyle = "handwritten" | "highlight" | "strong" | "blue";

export type ProjectTextSegment = {
  breakBefore?: boolean;
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
  demoVideo?: string;
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
    demoImage: "/assets/penguin_project_stickers/penguin-pear-programming.png",
    demoImageAlt:
      "Pear Programming workspace with a shared C++ editor, output console, and room chat",
    demoVideo: "/assets/projects/pear-programming-demo.m4v",
    overview: [
      { text: "Built a " },
      { text: "collaborative browser IDE", style: "highlight" },
      { text: " for real-time pair programming using " },
      { text: "Spring Boot", style: "strong" },
      { text: " on the backend and " },
      { text: "React", style: "strong" },
      { text: " on the frontend. Code execution runs through " },
      { text: "Judge0", style: "strong" },
      { text: ", while " },
      { text: "Yjs", style: "strong" },
      { text: " keeps code, files, and chat synchronized across everyone in the room. " },
      { breakBefore: true, text: ""}, //new line
      { breakBefore: true, text: "Pair programming, except the pear pun is legally required.", style: "handwritten" }
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
    demoImage: "/assets/penguin_project_stickers/penguin-portfolio.png",
    demoImageAlt: "An illustrated earlier version of Anson's portfolio landing page",
    demoVideo: "/assets/projects/portfolio-demo.m4v",
    overview: [
      { text: "Built my corner of the internet with " },
      { text: "Next.js, React, and TypeScript", style: "strong" },
      { text: ". There are far too many penguins for a sane person. " },
      { text: "Luckily, I’m not sane. *micdrop*", style: "handwritten" },
      { breakBefore: true, text: ""},
      {
        breakBefore: true,
        text: "If you're a recruiter, please kindly discard that last sentence. I am very much sane and employable.",
        style: "handwritten"
      }
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
    demoImage: "/assets/penguin_project_stickers/penguin-jukebox.png",
    demoImageAlt: "Juke Box personality picker showing five AI conversation styles",
    demoVideo: "/assets/projects/jukebox-demo.m4v",
    overview: [
      { text: "Built an " },
      { text: "AI reflection app", style: "highlight" },
      { text: " where five personalities give wildly different takes on whatever’s on your mind. I used " },
      { text: "Next.js, Groq, Redis, and server-sent events", style: "strong" },
      { text: " to keep conversations snappy while sessions quietly disappear when you leave." },
      { breakBefore: true, text: ""},
      { breakBefore: true, text: ""},
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
        { text: " that finds files, functions, types, and exports nobody can actually reach. Turns out " },
        { text: "graphs", style: "strong" },
        { text: " do have a use outside of class—mainly proving that some code is contributing absolutely nothing. " },
        { breakBefore: true, text: ""},
        { breakBefore: true, text: ""},
        { text: "I'm coming for you linked lists.", style: "handwritten" }
        ],

    githubUrl: "https://github.com/ansonnchan/dead-code-explorer"
  }
];
