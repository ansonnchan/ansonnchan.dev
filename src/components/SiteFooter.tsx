import Link from "next/link";

const links = [
  { label: "email", href: "mailto:ananryry180@gmail.com" },
  { label: "linkedin", href: "https://www.linkedin.com/in/ansonnchan" },
  { label: "github", href: "https://github.com/ansonnchan" },
  { label: "résumé", href: "/resume" }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p>© 2026 Anson Chan</p>
        <p className="footer-note">built with care & a suspicious number of penguins</p>
      </div>
      <nav aria-label="Footer navigation">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.label}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            target={link.href.startsWith("http") || link.href === "/resume" ? "_blank" : undefined}
          >
            {link.label}
          </a>
        ))}
        <Link aria-label="Back to the beginning" className="footer-penguin" href="/">
          🐧
        </Link>
      </nav>
    </footer>
  );
}

