import type { RichSegment } from "@/data/types";

export type WorkExperienceStatus = "current" | "upcoming" | "completed";

export type WorkExperiencePhoto = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  dateLabel: string;
  year: string;
  location: string;
  status: WorkExperienceStatus;
  summary: RichSegment[];
  highlights: RichSegment[][];
  logo: string;
  logoAlt: string;
  penguin: string;
  penguinAlt: string;
  photos?: WorkExperiencePhoto[];
};

export const workExperiences: WorkExperience[] = [
  {
    company: "Atria",
    role: "Incoming Software Engineering Intern",
    startDate: "2027-01",
    dateLabel: "Jan. 2027 — Apr. 2027",
    year: "2027",
    location: "Vancouver, BC",
    status: "upcoming",
    summary: [
      { text: "Building software that helps organizations " },
      { text: "collaborate", highlight: true},
      { text: " and"},
      {text: " achieve shared goals", highlight:true },
    ],
    highlights: [],
    logo: "/assets/experiences/atria.jpg",
    logoAlt: "Atria logo",
    penguin: "/assets/penguin_work_stickers/penguin-atria.png",
    penguinAlt: "A group of penguins gathered around a community board"
  },
  {
    company: "ScalePad",
    role: "Software Engineering Intern",
    startDate: "2026-06",
    dateLabel: "Jun. 2026 — Dec. 2026",
    year: "2026",
    location: "Vancouver, BC",
    status: "current",
    summary: [
      { text: "Working on "},
      { text: "Lifecycle Manager", highlight: true},
      { text: " and "},
      {text: "making MSPs’ lives a little easier 🌱", highlight:true },
    ],
    highlights: [
      [
        { text: "Redesigned "},
        {text :"Lifecycle Manager’s authorization system", highlight:true},
        {text: " for " },
        { text: "12,000+ MSPs", highlight: true },
        { text: ", replacing the legacy admin-or-viewer setup with "},
        { text: "role-based access control (RBAC)", highlight:true }
      ],
      [
        { text: "Averaged " },
        { text: "three coffees, fifty-six Slack messages,",highlight:true},
        { text: " and "},
        {text: "fourteen merge conflicts ", highlight: true },
        { text: "for the season (but my offseason trade value is high)" }
      ]
    ],
    logo: "/assets/experiences/scalepad_logo.jpeg",
    logoAlt: "ScalePad logo",
    penguin: "/assets/penguin_work_stickers/penguin-scalepad.png",
    penguinAlt: "A penguin working on a laptop while holding a four-leaf clover",
    photos: [
      {
        src: "/assets/experiences/scalepad_volunteer.webp",
        alt: "Anson with his ScalePad teammates wearing matching Serve Day shirts",
        caption: "Volunteering @ David Lam Park, Vancouver, BC",
        width: 1440,
        height: 1080
      }
    ]
  },
  {
    company: "Borrow’d",
    role: "Software Engineering Intern",
    startDate: "2026-01",
    dateLabel: "Jan. 2026 — Apr. 2026",
    year: "2026",
    location: "Vancouver, BC",
    status: "completed",
    summary: [
      { text: "Making " },
      { text: "community sharing", highlight: true },
      { text: " a little easier (and a lot less awkward) 🐝" }
    ],
    highlights: [
      [
        { text: "Joined as a "},
        {text: "founding intern", highlight: true},
        {text:  " and helped bring the platform to its " },
        { text: "beta launch", highlight: true },
        ],
      [
        { text: "Solely built its " },
        { text: "authorization system from the ground up", highlight: true },
        { text: ", including moderator approval flows and synchronized permission checks for "},
        { text: "150+ users", highlight:true }
      ],
      [
        { text: "Built a " },
        { text: "search analytics pipeline", highlight: true },
        { text: " to understand user search trends and guide " },
        { text: "homepage promotions", highlight: true },
        { text: ", with some PostgreSQL cleanup along the way" }
      ]
    ],
    logo: "/assets/experiences/borrowd_org_logo.jpeg",
    logoAlt: "Borrow’d logo",
    penguin: "/assets/penguin_work_stickers/penguin-borrowd.png",
    penguinAlt: "Two penguins carrying a box of shared items"
  },
  {
    company: "University of South Australia",
    role: "Undergraduate Research Assistant",
    startDate: "2025-06",
    dateLabel: "Jun. 2025 — Aug. 2025",
    year: "2025",
    location: "Adelaide, Australia",
    status: "completed",
    summary: [
      { text: "Worked on " },
      { text: "computational modeling", highlight: true },
      { text: " but never felt more lost "}
    ],
    highlights: [
      [
        { text: "Implemented " },
        { text: "Conway’s Game of Life", highlight: true },
        { text: " (it’s genuinely pretty cool—worth checking out!)" }
      ],
      [
        { text: "Did some modelling work in " },
        { text: "Python and MATLAB", highlight: true },
        { text: ". Python and I are besties; MATLAB on the other hand though ... I'll hit it with the one-two, left-right combo" }
      ],
      [
        { text: "Provided " },
        { text: "moral support for the big leagues", highlight: true },
      ]
    ],
    logo: "/assets/experiences/unisa-logo.svg",
    logoAlt: "University of South Australia logo",
    penguin: "/assets/penguin_work_stickers/penguin-university.png",
    penguinAlt: "A penguin reviewing research papers at a desk"
  }
];
