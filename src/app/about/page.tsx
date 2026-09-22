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
    title: "On Repeat",
    icon: "♫",
    items: [
      { label: "Jay Chou", detail: "the permanent favourite" },
      { label: "JJ Lin", detail: "for the ballads" },
      { label: "K-pop", detail: "for energy" },
      { label: "Classical", detail: "for focus" }
    ]
  },
  {
    title: "On Screen",
    icon: "✦",
    items: [
      { label: "Anime", detail: "Cyberpunk: Edgerunners · Link Click" },
      { label: "C-dramas", detail: "Pursuit of Jade · When I Fly Towards You" }
    ]
  },
  {
    title: "Reading List",
    icon: "⌑",
    items: [
      { label: "The Three-Body Problem", detail: "Liu Cixin" },
      { label: "Next up", detail: "always open to a good recommendation" }
    ]
  },
  {
    title: "Hobbies",
    icon: "◌",
    items: [
      { label: "Racket sports", detail: "Tennis · Table tennis · Pickleball" },
      { label: "Chess", detail: "a quieter kind of competition" }
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
        <header className="about-simple-hero">
          <h1 id="about-heading">About Me</h1>
          <div className="about-journey" aria-label="Hong Kong to Australia to Canada">
            <span>🇭🇰</span>
            <span className="about-route-arrow" aria-hidden="true">↝</span>
            <span>🇦🇺</span>
            <span className="about-route-arrow" aria-hidden="true">↝</span>
            <span>🇨🇦</span>
          </div>
        </header>

        <div className="about-sections" aria-labelledby="about-heading">
          {sections.map((section) => (
            <section className="about-topic-section" key={section.title}>
              <div className="about-topic-heading">
                <h2>{section.title}</h2>
                <span aria-hidden="true">{section.icon}</span>
              </div>
              <div className="about-topic-card">
                <ul>
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong>
                      <span>{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <footer className="v2-footer about-footer">
          <p>© 2026 Anson Chan <img alt="" aria-hidden="true" src="/assets/icons/rocket.png" /></p>
        </footer>
      </main>
    </div>
  );
}
