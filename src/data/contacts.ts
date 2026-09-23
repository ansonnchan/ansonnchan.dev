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
    value: "ansonnchan905@gmail.com",
    href: "mailto:ansonnchan905@gmail.com",
    icon: "/assets/icons/mail.png",
    iconClassName: "contact-card-mail"
  },
  {
    label: "github",
    value: "github.com/ansonnchan",
    href: "https://github.com/ansonnchan",
    icon: "/assets/icons/github.png",
    iconClassName: "contact-card-github",
    openInNewTab: true
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/ansonnchan",
    href: "https://www.linkedin.com/in/ansonnchan",
    icon: "/assets/icons/linkedin.png",
    iconClassName: "contact-card-linkedin",
    openInNewTab: true
  }
];
