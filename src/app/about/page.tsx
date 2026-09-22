import type { Metadata } from "next";
import CursorDots from "@/components/CursorDots";
import NowPlaying from "@/components/NowPlaying";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "About Me · Anson Chan",
  description: "A little more about Anson Chan—what he builds, watches, reads, listens to, and plays."
};

const interests = [
  {
    eyebrow: "on repeat",
    icon: "♫",
    title: "Music",
    copy: "Jay Chou is a constant, with K-pop and classical music filling the spaces in between.",
    tags: ["Jay Chou", "K-pop", "Classical"]
  },
  {
    eyebrow: "on screen",
    icon: "✦",
    title: "Stories",
    copy: "Anime and C-dramas with memorable worlds, warm friendships, and just enough heartbreak.",
    tags: ["Cyberpunk", "Link Click", "Pursuit of Jade", "When I Fly Towards You"]
  },
  {
    eyebrow: "on the shelf",
    icon: "♟",
    title: "Books & chess",
    copy: "Science fiction that makes the universe feel bigger, followed by a quiet game of chess.",
    tags: ["The Three-Body Problem", "Chess"]
  },
  {
    eyebrow: "on the court",
    icon: "◌",
    title: "Racket sports",
    copy: "I will happily pick up almost anything with a racquet and convince someone to play.",
    tags: ["Tennis", "Table tennis", "Pickleball"]
  }
];

const socialLinks = [
  {
    href: "mailto:ac1800@student.ubc.ca",
    icon: "/assets/icons/mail.png",
    label: "email",
    className: "about-social-mail"
  },
  {
    href: "https://github.com/ansonnchan",
    icon: "/assets/icons/github.png",
    label: "github",
    className: ""
  },
  {
    href: "https://www.linkedin.com/in/ansonnchan",
    icon: "/assets/icons/linkedin.png",
    label: "linkedin",
    className: ""
  }
];

export default function AboutPage() {
  return (
    <div className="v2-page about-page">
      <CursorDots />
      <div className="v2-top-controls">
        <ThemeToggle />
        <NowPlaying />
      </div>

      <main className="about-main">
        <section className="about-intro" aria-labelledby="about-heading">
          <span className="about-stamp" aria-hidden="true">a little more ↘</span>
          <p className="about-eyebrow">nice to meet you</p>
          <h1 id="about-heading">Anson Chan <span>(陳雋希)</span></h1>
          <p className="about-subtitle">Software Engineer · 🇭🇰 🇦🇺</p>
          <p className="about-lede">
            I&apos;m Hong Kong-born, Australia-raised, and now based in Vancouver. I study
            <strong> Computer Engineering at UBC</strong> and currently intern at
            <strong> ScalePad</strong>. I like building thoughtful software that people actually use—small,
            practical things that make everyday life a little easier and a little better.
          </p>

          <nav className="about-socials" aria-label="Contact Anson">
            {socialLinks.map((link) => (
              <a
                className={link.className}
                href={link.href}
                key={link.label}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                <span><img alt="" aria-hidden="true" src={link.icon} /></span>
                {link.label}
              </a>
            ))}
          </nav>
        </section>

        <section className="about-interests" aria-labelledby="interests-heading">
          <div className="about-section-heading">
            <p>when I&apos;m away from the keyboard</p>
            <h2 id="interests-heading">A few things I like</h2>
          </div>

          <div className="about-interest-grid">
            {interests.map((interest) => (
              <article className="about-interest-card" key={interest.title}>
                <div className="about-interest-topline">
                  <span className="about-interest-icon" aria-hidden="true">{interest.icon}</span>
                  <small>{interest.eyebrow}</small>
                </div>
                <h3>{interest.title}</h3>
                <p>{interest.copy}</p>
                <ul aria-label={`${interest.title} favourites`}>
                  {interest.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <aside className="about-note">
          <span aria-hidden="true">✎</span>
          <p>Usually found with headphones on, a racquet nearby, or one more chapter left.</p>
        </aside>

        <footer className="v2-footer about-footer">
          <p>© 2026 Anson Chan <img alt="" aria-hidden="true" src="/assets/icons/rocket.png" /></p>
        </footer>
      </main>
    </div>
  );
}
