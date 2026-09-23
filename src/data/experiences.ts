export type Experience = {
  company: string;
  role: string;
  startDate: string;
  dateLabel: string;
  logo: string;
  logoAlt: string;
};

export const professionalExperiences: Experience[] = [
  {
    company: "ScalePad",
    role: "Software Engineer Intern",
    startDate: "2026-06",
    dateLabel: "June 2026 — December 2026",
    logo: "/assets/logos/scalepad.jpeg",
    logoAlt: "ScalePad logo"
  }
];

export const volunteerExperiences: Experience[] = [
  {
    company: "Atria",
    role: "Software Engineer",
    startDate: "2027-01",
    dateLabel: "Starting January 2027",
    logo: "/assets/logos/atria.jpg",
    logoAlt: "Atria logo"
  },
  {
    company: "Borrow’d",
    role: "Software Engineer",
    startDate: "2026-01",
    dateLabel: "January 2026 — May 2026",
    logo: "/assets/logos/borrowd.jpeg",
    logoAlt: "Borrow’d logo"
  }
];
