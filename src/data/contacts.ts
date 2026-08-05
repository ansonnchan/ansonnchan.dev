export type ContactCard = {
  label: string;
  value: string;
  href: string;
  icon: string;
  iconClassName: string;
  openInNewTab?: boolean;
};

export const contactCards: ContactCard[] = [
  {
    label: "email",
    value: "ac1800@student.ubc.ca",
    href: "mailto:ac1800@student.ubc.ca",
    icon: "/assets/icons/mail-icon.png",
    iconClassName: "contact-card-mail"
  },
  {
    label: "github",
    value: "github.com/ansonnchan",
    href: "https://github.com/ansonnchan",
    icon: "/assets/icons/github_icon.png",
    iconClassName: "contact-card-github",
    openInNewTab: true
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/ansonnchan",
    href: "https://www.linkedin.com/in/ansonnchan",
    icon: "/assets/icons/linkedin-icon.png",
    iconClassName: "contact-card-linkedin",
    openInNewTab: true
  },
  {
    label: "résumé",
    value: "view my résumé",
    href: "/resume",
    icon: "/assets/icons/resume-download.png",
    iconClassName: "contact-card-resume",
    openInNewTab: true
  }
];
