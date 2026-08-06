import type { Experience } from "@/data/types";

export type WorkExperienceStatus = "current" | "upcoming" | "completed";

export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  dateLabel: string;
  year: string;
  location: string;
  status: WorkExperienceStatus;
  summary: string;
  highlights: string[];
  technologies: string[];
  logo: string;
  logoAlt: string;
  penguin: string;
  penguinAlt: string;
  defaultExpanded?: boolean;
};

export const workExperiences: WorkExperience[] = [
  {
    company: "Atria",
    role: "Software Engineering Intern",
    startDate: "2027-01",
    endDate: "2027-04",
    dateLabel: "Jan. 2027 — Apr. 2027",
    year: "2027",
    location: "Vancouver, BC",
    status: "upcoming",
    summary: "Joining the engineering team to develop full-stack features for a Django and React platform.",
    highlights: [],
    technologies: ["Django", "React"],
    logo: "/assets/experiences/atria.jpg",
    logoAlt: "Atria logo",
    penguin: "/assets/penguin_work_stickers/penguin-atria.png",
    penguinAlt: "A group of penguins gathered around a community board"
  },
  {
    company: "ScalePad",
    role: "Software Engineering Intern",
    startDate: "2026-06",
    endDate: "2026-12",
    dateLabel: "Jun. 2026 — Dec. 2026",
    year: "2026",
    location: "Vancouver, BC",
    status: "current",
    summary: "Building full-stack platform capabilities across Lifecycle Manager’s C#/.NET services and React/TypeScript frontend.",
    highlights: [
      "Modernized Lifecycle Manager’s authorization system for 12,000+ MSPs, replacing binary admin-viewer permissions with role-based access control across C#/.NET services and a React/TypeScript frontend.",
      "Designed and implemented a unified Entity Comments API, consolidating domain-specific implementations into one shared platform capability."
    ],
    technologies: ["C#", ".NET", "React", "TypeScript"],
    logo: "/assets/experiences/scalepad_logo.jpeg",
    logoAlt: "ScalePad logo",
    penguin: "/assets/penguin_work_stickers/penguin-scalepad.png",
    penguinAlt: "A penguin working on a laptop while holding a four-leaf clover",
    defaultExpanded: true
  },
  {
    company: "Borrow’d",
    role: "Software Engineering Intern",
    startDate: "2026-01",
    endDate: "2026-04",
    dateLabel: "Jan. 2026 — Apr. 2026",
    year: "2026",
    location: "Vancouver, BC",
    status: "completed",
    summary: "Built marketplace, analytics, and testing features across a Django and PostgreSQL application.",
    highlights: [
      "Secured private marketplace groups for 150+ users by implementing moderator approval workflows with synchronized Django permission checks.",
      "Reduced manual merchandising analysis from 15 to 5 hours per week with a search analytics pipeline and optimized PostgreSQL queries.",
      "Expanded GitHub Actions with integration and Playwright end-to-end tests, maintaining 90%+ coverage across the features I developed."
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Playwright", "GitHub Actions"],
    logo: "/assets/experiences/borrowd_org_logo.jpeg",
    logoAlt: "Borrow’d logo",
    penguin: "/assets/penguin_work_stickers/penguin-borrowd.png",
    penguinAlt: "Two penguins carrying a box of shared items"
  },
  {
    company: "University of South Australia",
    role: "Undergraduate Research Assistant",
    startDate: "2025-06",
    endDate: "2025-08",
    dateLabel: "Jun. 2025 — Aug. 2025",
    year: "2025",
    location: "Adelaide, Australia",
    status: "completed",
    summary: "Worked on computational modeling under the guidance of Dr. Terence Chan.",
    highlights: [
      "Implemented Conway’s Game of Life while working with Python and MATLAB."
    ],
    technologies: ["Python", "MATLAB"],
    logo: "/assets/experiences/unisa-logo.svg",
    logoAlt: "University of South Australia logo",
    penguin: "/assets/penguin_work_stickers/penguin-university.png",
    penguinAlt: "A penguin reviewing research papers at a desk"
  }
];

// Retained for the archived all-in-one portfolio component.
export const experiences: Experience[] = workExperiences.map((experience) => ({
  title: experience.role,
  organization: experience.company,
  dates: experience.dateLabel,
  location: experience.location,
  image: experience.logo,
  eyebrow: experience.defaultExpanded ? "main chapter" : undefined,
  bullets: experience.highlights.map((highlight) => [{ text: highlight }]),
  defaultOpen: experience.defaultExpanded
}));
