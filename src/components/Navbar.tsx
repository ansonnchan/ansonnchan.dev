import type { LucideIcon } from "lucide-react";
import { Mail } from "lucide-react";
import { socials } from "@/data/portfolio";

type ContactLink =
  | {
      label: string;
      href: string;
      icon: LucideIcon;
      iconSrc?: never;
    }
  | {
      label: string;
      href: string;
      icon?: never;
      iconSrc: string;
    };

const socialByLabel = new Map(socials.map((social) => [social.label, social]));

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: socialByLabel.get("Email")?.href ?? "mailto:ananryry180@gmail.com",
    icon: Mail
  },
  {
    label: "GitHub",
    href: socialByLabel.get("GitHub")?.href ?? "https://github.com/ansonnchan",
    iconSrc: socialByLabel.get("GitHub")?.icon ?? "/assets/about/github_icon.png"
  },
  {
    label: "LinkedIn",
    href: socialByLabel.get("LinkedIn")?.href ?? "https://www.linkedin.com/in/ansonnchan",
    iconSrc: socialByLabel.get("LinkedIn")?.icon ?? "/assets/about/linkedin.png"
  }
];

const mainLinks = [
  { label: "Home", href: "/", iconSrc: "/assets/icons/home.svg" },
  { label: "Notes", href: "/learnings", iconSrc: "/assets/icons/notes.svg" },
  {
    label: "View Resume",
    href: "/resume",
    iconSrc: "/assets/icons/resume_download.svg"
  }
];

function getLinkTarget(href: string) {
  return href.startsWith("http") || href === "/resume" ? "_blank" : undefined;
}

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-950/10 bg-[#fffefb] dark:border-white/10 dark:bg-[#10140f]">
      <div className="flex h-[4.5rem] w-full items-center justify-between gap-3 px-3 sm:h-[4.75rem] sm:px-11">
        <nav aria-label="Contact links" className="flex min-w-0 items-center gap-0">
          {contactLinks.map((link) => (
            <a
              aria-label={link.label}
              className="group inline-flex h-12 w-9 shrink-0 items-center justify-center rounded-md text-zinc-700 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-zinc-200 sm:h-[3.25rem] sm:w-11"
              href={link.href}
              key={link.label}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              target={getLinkTarget(link.href)}
              title={link.label}
            >
              {link.icon ? (
                <link.icon
                  aria-hidden="true"
                  className="h-[1.8rem] w-[1.8rem]"
                  strokeWidth={1.8}
                />
              ) : (
                <img
                  alt=""
                  aria-hidden="true"
                  className={`h-[1.75rem] w-[1.75rem] object-contain transition group-hover:opacity-100 ${
                    link.label === "GitHub" ? "opacity-80 dark:invert" : "opacity-100"
                  }`}
                  src={link.iconSrc}
                />
              )}
            </a>
          ))}
        </nav>

        <nav
          aria-label="Main navigation"
          className="handwritten-display flex shrink-0 items-stretch gap-1 text-zinc-700 sm:gap-4 dark:text-zinc-200"
        >
          {mainLinks.map((link) => (
            <a
              aria-label={link.label}
              className="group flex min-w-[2.75rem] flex-col items-center justify-center gap-1 rounded-md px-0.5 py-1 text-center text-xs leading-none transition hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:min-w-[4rem] sm:px-2 sm:text-base dark:hover:text-emerald-300"
              href={link.href}
              key={link.label}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              target={getLinkTarget(link.href)}
            >
              <img
                alt=""
                aria-hidden="true"
                className="h-6 w-6 object-contain opacity-80 transition group-hover:opacity-100 dark:invert"
                src={link.iconSrc}
              />
              <span className="whitespace-nowrap">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
