import { projects } from "@/data/projects";

export type ProjectCase = {
  slug: string;
  title: string;
  mark: string;
  description: string;
  status: string;
  image: string;
  icon: string;
  gallery: (typeof projects)[number]["gallery"];
  techStack: string[];
  github: string;
  live?: string;
  overview: string;
  build: string[];
  result: string[];
  tone?: "soft";
};

const projectByTitle = new Map(projects.map((project) => [project.title, project]));

function sourceProject(title: string) {
  const project = projectByTitle.get(title);

  if (!project) {
    throw new Error(`Missing project data for ${title}`);
  }

  return project;
}

const pear = sourceProject("Pear Programming");
const jukebox = sourceProject("Jukebox");
const deadCode = sourceProject("Dead Code Explorer");
const portfolio = sourceProject("Personal Portfolio");

export const projectCases: ProjectCase[] = [
  {
    slug: "pear-programming",
    title: pear.title,
    mark: "🍐",
    description: "A collaborative browser IDE built for fast, resilient pair programming.",
    status: "flagship · live",
    image: pear.image,
    icon: pear.icon,
    gallery: pear.gallery,
    techStack: pear.techStack,
    github: pear.github,
    live: pear.live,
    overview:
      "Pear Programming brings real-time editing, shared workspaces, code execution, and context-aware AI assistance into one browser-based workspace.",
    build: [
      "Monaco and Yjs synchronize concurrent edits through Redis Pub/Sub, with persisted snapshots and update logs available when clients reconnect.",
      "A Redis-backed Judge0 worker pipeline uses atomic idempotency, renewable worker leases, and bounded retries to prevent duplicate execution submissions.",
      "CRDT updates are decoupled from presence events so editing remains responsive as people join and leave a room."
    ],
    result: [
      "Reached approximately 40 ms p95 edit latency with five concurrent users.",
      "Added fallback syncing, room-state persistence, stale-session cleanup, and cross-instance fanout for recovery."
    ]
  },
  {
    slug: "jukebox",
    title: "Jukebox",
    mark: "♫",
    description: "A privacy-first place to talk with five distinctly human AI personalities.",
    status: "live · personal",
    image: jukebox.image,
    icon: jukebox.icon,
    gallery: jukebox.gallery,
    techStack: jukebox.techStack,
    github: jukebox.github,
    live: jukebox.live,
    overview:
      "Jukebox began with a softer question: can an AI conversation feel expressive without asking someone to give up their privacy? Five personalities respond to different moods, from ancient wisdom to tiger-mom energy.",
    build: [
      "Conversation data stays client-side and is cleared when the session ends rather than being stored in a persistent user database.",
      "Long-running inference is offloaded to a fault-tolerant Redis Streams worker pipeline with idempotent jobs and automatic worker recovery.",
      "Responses stream over server-sent events and context is progressively compressed to keep conversations responsive."
    ],
    result: [
      "Used by more than 40 people.",
      "Reached approximately 450 ms time-to-first-visible-token."
    ],
    tone: "soft"
  },
  {
    slug: "dead-code-explorer",
    title: deadCode.title,
    mark: "⌕",
    description: "A VS Code extension for finding unreachable code with ranked evidence.",
    status: "open source",
    image: deadCode.image,
    icon: deadCode.icon,
    gallery: deadCode.gallery,
    techStack: deadCode.techStack,
    github: deadCode.github,
    overview:
      "Dead Code Explorer flags unreachable files, functions, classes, types, and exports before runtime, while showing enough evidence for a developer to make a confident cleanup decision.",
    build: [
      "Compiler-resolved file and symbol dependency graphs model reachability across an entire TypeScript project.",
      "The analysis handles path aliases, barrel re-exports, literal dynamic imports, and chains made entirely of dead dependencies.",
      "A single-pass compiler index feeds an O(V+E) graph traversal."
    ],
    result: [
      "Processed more than 400,000 lines of code across 3,000+ files in 22 seconds p95.",
      "Turns a vague cleanup hunch into a reviewable set of confidence-ranked findings."
    ]
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    mark: "✦",
    description: "This quiet, penguin-filled corner of the internet.",
    status: "ongoing",
    image: portfolio.image,
    icon: portfolio.icon,
    gallery: portfolio.gallery,
    techStack: portfolio.techStack,
    github: portfolio.github,
    live: portfolio.live,
    overview:
      "A personal site that balances recruiter-friendly engineering work with the scrapbook details that make it feel like mine.",
    build: portfolio.details,
    result: [
      "Compressed oversized media and preloaded key gallery images to improve hard-refresh performance.",
      "Uses a server-side route for GitHub contribution data rather than exposing the API interaction in the browser."
    ]
  }
];

export const projectBySlug = new Map(projectCases.map((project) => [project.slug, project]));
