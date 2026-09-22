import type { Metadata } from "next";
import CursorDots from "@/components/CursorDots";
import NowPlaying from "@/components/NowPlaying";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "About Me · Anson Chan",
  description: "A little more about Anson Chan—what he builds, watches, reads, listens to, and plays."
};

const sections = [
  {
    number: "01",
    title: "Right now",
    note: "the short version",
    items: [
      { label: "Home", detail: "Vancouver, Canada" },
      { label: "Studying", detail: "Computer Engineering at UBC" },
      { label: "Working", detail: "Software Engineering Intern at ScalePad" }
    ]
  },
  {
    number: "02",
    title: "Listening",
    note: "headphones on",
    items: [
      { label: "Jay Chou", detail: "A permanent fixture in the queue" },
      { label: "K-pop", detail: "For energy" },
      { label: "Classical", detail: "For slower, quieter work" }
    ]
  },
  {
    number: "03",
    title: "Watching",
    note: "one more episode",
    items: [
      { label: "Anime", detail: "Cyberpunk: Edgerunners · Link Click" },
      { label: "C-dramas", detail: "Pursuit of Jade · When I Fly Towards You" }
    ]
  },
  {
    number: "04",
    title: "Reading list",
    note: "shelf in progress",
    items: [
      { label: "The Three-Body Problem", detail: "Liu Cixin" },
      { label: "Next up", detail: "Always open to a good recommendation" }
    ]
  },
  {
    number: "05",
    title: "Hobbies",
    note: "away from the desk",
    items: [
      { label: "On court", detail: "Tennis · Table tennis · Pickleball" },
      { label: "At the board", detail: "Chess" },
      { label: "Default state", detail: "Headphones on, racquet nearby" }
    ]
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
        <header className="about-index-hero">
          <span className="about-margin-note" aria-hidden="true">the non-code bits ↘</span>
          <p className="about-eyebrow">a little more about me</p>
          <h1 id="about-heading">Hello, I&apos;m Anson.</h1>
          <p>
            Hong Kong-born, Australia-raised, and now in Vancouver. This page is the quieter side of
            the portfolio: what I&apos;m enjoying, learning, and doing when I step away from the keyboard.
          </p>
          <span className="about-flags" aria-label="Hong Kong and Australia">🇭🇰 🇦🇺</span>
        </header>

        <div className="about-directory" aria-labelledby="about-heading">
          {sections.map((section) => (
            <section className="about-directory-section" key={section.number}>
              <span className="about-section-number" aria-hidden="true">{section.number}</span>
              <div className="about-directory-heading">
                <h2>{section.title}</h2>
                <p>{section.note}</p>
              </div>
              <ul>
                {section.items.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <nav className="about-elsewhere" aria-label="Find Anson elsewhere">
          <span>elsewhere</span>
          <a href="mailto:ac1800@student.ubc.ca">email</a>
          <a href="https://github.com/ansonnchan" rel="noreferrer" target="_blank">github</a>
          <a href="https://www.linkedin.com/in/ansonnchan" rel="noreferrer" target="_blank">linkedin</a>
        </nav>

        <footer className="v2-footer about-footer">
          <p>© 2026 Anson Chan <img alt="" aria-hidden="true" src="/assets/icons/rocket.png" /></p>
        </footer>
      </main>
    </div>
  );
}
