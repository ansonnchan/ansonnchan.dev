import type { SocialLink } from "@/data/types";

export const hero = {
  greeting: "Hello, World!",
  title: "Welcome to Anson’s corner of the internet",
  phrases: [
    "Software Engineer",
    "Computer Engineering Student @ UBC",
    "Boba Addict"
  ]
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/ansonnchan",
    icon: "/assets/about/github_icon.png"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ansonnchan",
    icon: "/assets/about/linkedin.png"
  },
  {
    label: "Email",
    href: "mailto:ac1800@student.ubc.ca",
    icon: "/assets/about/mail_icon.png"
  },
  {
    label: "Resume",
    href: "/resume",
    icon: "/assets/about/document.png"
  }
];

export const githubActivity = {
  username: "ansonnchan",
  profileUrl: "https://github.com/ansonnchan",
  year: 2026
};

