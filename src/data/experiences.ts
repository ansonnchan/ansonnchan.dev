import type { Experience } from "@/data/types";

export type WorkExperience = {
  company: string;
  role: string;
  dates: string;
  location: string;
  logo: string | null;
  accent: boolean;
  bullets: string[];
  tech: string[];
};

export const workExperiences: WorkExperience[] = [
  {
    company: "Atria",
    role: "Incoming Software Engineering Intern",
    dates: "Jan. — Apr. 2027",
    location: "Vancouver, BC",
    logo: null,
    accent: false,
    bullets: [
      "Joining the engineering team to develop full-stack features for a Django and React platform."
    ],
    tech: ["Django", "React"]
  },
  {
    company: "ScalePad",
    role: "Software Engineering Intern",
    dates: "Jun. — Dec. 2026",
    location: "Vancouver, BC",
    logo: "/assets/experiences/scalepad_logo_black.png",
    accent: true,
    bullets: [
      "Modernized Lifecycle Manager’s authorization system for 12,000+ MSPs, replacing binary admin-viewer permissions with role-based access control across C#/.NET services and a React/TypeScript frontend.",
      "Designed and implemented a unified Entity Comments API, consolidating domain-specific implementations into one shared platform capability."
    ],
    tech: ["C#", ".NET", "React", "TypeScript"]
  },
  {
    company: "Borrow’d",
    role: "Software Engineering Intern",
    dates: "Jan. — Apr. 2026",
    location: "Vancouver, BC",
    logo: "/assets/experiences/borrowd_org_logo.jpeg",
    accent: false,
    bullets: [
      "Secured private marketplace groups for 150+ users by implementing moderator approval workflows with synchronized Django permission checks.",
      "Reduced manual merchandising analysis from 15 to 5 hours per week with a search analytics pipeline and optimized PostgreSQL queries.",
      "Expanded GitHub Actions with integration and Playwright end-to-end tests, maintaining 90%+ coverage across the features I developed."
    ],
    tech: ["Python", "Django", "PostgreSQL", "Playwright"]
  },
  {
    company: "University of South Australia",
    role: "Undergraduate Research Assistant",
    dates: "Jun. — Aug. 2025",
    location: "Adelaide, Australia",
    logo: "/assets/experiences/unisa-logo.svg",
    accent: false,
    bullets: [
      "Worked on computational modeling under the guidance of Dr. Terence Chan.",
      "Implemented Conway’s Game of Life while working with Python and MATLAB."
    ],
    tech: ["Python", "MATLAB"]
  }
];

export const experiences: Experience[] = workExperiences.map((experience) => ({
  title: experience.role,
  organization: experience.company,
  dates: experience.dates,
  location: experience.location,
  image: experience.logo ?? "/assets/test_favicon.jpg",
  eyebrow: experience.accent ? "main chapter" : undefined,
  bullets: experience.bullets.map((bullet) => [{ text: bullet }])
}));

