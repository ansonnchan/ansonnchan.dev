import type { RichSegment } from "@/data/types";

export type ExperienceStatus = "current" | "upcoming" | "completed";

export type ExperiencePhoto = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type Experience = {
  company: string;
  role: string;
  startDate: string;
  dateLabel: string;
  year: string;
  location: string;
  status: ExperienceStatus;
  summary: RichSegment[];
  highlights: RichSegment[][];
  logo: string;
  logoAlt: string;
  penguin: string;
  penguinAlt: string;
  photos?: ExperiencePhoto[];
};

export const professionalExperiences: Experience[] = [
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
  }
];

export const volunteerExperiences: Experience[] = [
  {
    company: "Atria",
    role: "Software Engineer",
    startDate: "2027-01",
    dateLabel: "Starting Jan. 2027",
    year: "2027",
    location: "Vancouver, BC",
    status: "upcoming",
    summary: [
      {
        text: "Joining the engineering team to develop full-stack features for a Django/React platform, participating in technical design reviews, ERD modeling, and implementation planning."
      }
    ],
    highlights: [],
    logo: "/assets/experiences/atria.jpg",
    logoAlt: "Atria logo",
    penguin: "/assets/penguin_work_stickers/penguin-atria.png",
    penguinAlt: "A penguin representing Anson's upcoming software engineering work at Atria"
  },
  {
    company: "Borrow’d",
    role: "Software Engineer",
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
        { text: "Joined as one of the  "},
        {text: "first software engineers ", highlight: true},
        {text:  "on the engineering team and helped bring the platform to its " },
        { text: "initial release ", highlight: true },
        { text: "for " },
        { text: "250+ users", highlight: true }
      ],
      [
        { text: "Solely built its " },
        { text: "authorization system from the ground up", highlight: true },
        { text: ", including moderator approval flows and synchronized permission checks"},
      ],
      [
        { text: "Built a " },
        { text: "search analytics pipeline", highlight: true },
        { text: " to understand user search trends and guide " },
        { text: "homepage promotions.", highlight: true },
      ]
    ],
    logo: "/assets/experiences/borrowd_org_logo.jpeg",
    logoAlt: "Borrow’d logo",
    penguin: "/assets/penguin_work_stickers/penguin-borrowd.png",
    penguinAlt: "Two penguins carrying a box of shared items"
  }
];
