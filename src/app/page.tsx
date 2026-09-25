import type { Metadata } from "next";
import Link from "next/link";
import CursorDots from "@/components/CursorDots";
import NowPlaying from "@/components/NowPlaying";
import SpinningPortrait from "@/components/SpinningPortrait";
import ThemeToggle from "@/components/ThemeToggle";
import V2Projects from "@/components/V2Projects";
import { blogPosts } from "@/data/blogs";
import { contactCards } from "@/data/contacts";
import { professionalExperiences, volunteerExperiences, type Experience } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Anson Chan",
  description:
    "Anson Chan is a UBC Computer Engineering student and software engineer building thoughtful products and dependable systems."
};

const experienceTags: Record<string, string[]> = {
  Atria: ["TypeScript", "React", "Django"],
  ScalePad: ["C#", ".NET", "React", "TypeScript", "AWS", "Go", "Python", "MariaDB"],
  "Borrow’d": ["Python", "Django", "CI/CD (GitHub Actions)", "PostgreSQL"]
};

const experienceOrder = ["Atria", "ScalePad", "Borrow’d"];
const companyUrls: Record<string, string> = {
  Atria: "https://www.atriacommunity.com/",
  ScalePad: "https://www.scalepad.com/",
  "Borrow’d": "https://borrowd.org/"
};
const allExperiences = [...professionalExperiences, ...volunteerExperiences].sort(
  (a, b) => experienceOrder.indexOf(a.company) - experienceOrder.indexOf(b.company)
);

const contactLinks = [
  ...contactCards,
  {
    label: "resume",
    value: "view résumé",
    href: "/resume",
    icon: "/assets/icons/resume.png",
    iconClassName: "contact-card-resume",
    openInNewTab: true
  }
];

function ContactLinks({ className = "", label }: { className?: string; label: string }) {
  return (
    <nav className={`v2-connect-links ${className}`.trim()} aria-label={label}>
      {contactLinks.map((contact) => (
        <a
          aria-label={`${contact.label}: ${contact.value}`}
          className={contact.iconClassName}
          href={contact.href}
          key={contact.label}
          rel={contact.openInNewTab ? "noreferrer" : undefined}
          target={contact.openInNewTab ? "_blank" : undefined}
        >
          <span className="v2-connect-icon"><img alt="" aria-hidden="true" src={contact.icon} /></span>
          <span>{contact.label}</span>
        </a>
      ))}
    </nav>
  );
}

function ExperienceSummary({ experience }: { experience: Experience }) {
  return (
    <>
      <div className="v2-experience-topline">
        <span className="v2-experience-logo">
          <img alt={experience.logoAlt} src={experience.logo} />
        </span>
        <div className="v2-experience-info">
          <h3>{experience.role}</h3>
          <p>{experience.company}</p>
        </div>
        <time dateTime={experience.startDate}>{experience.dateLabel}</time>
      </div>
      <ul className="v2-tags" aria-label={`${experience.company} technologies`}>
        {experienceTags[experience.company]?.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </>
  );
}

export default function Home() {
  return (
    <div className="v2-page">
      <CursorDots />
      <div className="v2-top-controls">
        <ThemeToggle />
        <NowPlaying />
      </div>
      <main className="v2-main">
        <div className="v2-hero-cartoons" aria-hidden="true">
          <img className="v2-cartoon v2-cartoon-moon" src="/assets/cartoons/moon.png" alt="" />
        </div>
        <section className="v2-hero" aria-labelledby="intro-heading">
          <div className="v2-hero-copy">
            <h1 id="intro-heading">Anson Chan (陳雋希)</h1>
            <p className="v2-tagline">Software Engineer</p>
            <p className="v2-flags" aria-label="Hong Kong and Australia">🇭🇰 🇦🇺</p>
            <p className="v2-intro-about">
              Hi! I&apos;m Anson. I was born in <span className="v2-intro-highlight">Hong Kong</span> and
              raised in <span className="v2-intro-highlight">Australia</span> for 15 years before moving to <span className="v2-intro-highlight">Vancouver, Canada</span> in 2021. I enjoy building software to make daily life
              easier and better, even in just a small way.

              <br></br>
              <br></br>
              I&apos;m currently studying
              <span className="v2-intro-highlight"> Computer Engineering</span> at the <span className="v2-intro-highlight">University of British Columbia</span> and interning
               at <span className="v2-intro-highlight">ScalePad</span>.

            </p>
          </div>
          <SpinningPortrait />
        </section>

        <ContactLinks className="v2-intro-contact-links" label="Contact links" />

        <section className="v2-section" aria-labelledby="education-heading">
          <div className="v2-section-heading">
            <h2 id="education-heading">Education</h2>
            <img alt="" aria-hidden="true" src="/assets/icons/education.svg" />
          </div>
          <a
            className="v2-education-card v2-card"
            href="https://ece.ubc.ca/about/"
            rel="noreferrer"
            target="_blank"
          >
            <div>
              <h3>University of British Columbia</h3>
              <p>BASc Computer Engineering · Co-op Program · Dean&apos;s List</p>
            </div>
            <span className="v2-card-note">2024 – 2029</span>
          </a>
        </section>

        <section className="v2-section" aria-labelledby="experience-heading">
          <div className="v2-section-heading">
            <h2 id="experience-heading">Experience</h2>
            <img alt="" aria-hidden="true" src="/assets/icons/work.svg" />
          </div>
          <div className="v2-experience-list">
            {allExperiences.map((experience) => (
              <a
                aria-label={`Visit ${experience.company}`}
                className="v2-experience-card v2-card"
                href={companyUrls[experience.company]}
                key={experience.company}
                rel="noreferrer"
                target="_blank"
              >
                <ExperienceSummary experience={experience} />
              </a>
            ))}
          </div>
        </section>

        <section className="v2-section" aria-labelledby="projects-heading">
          <div className="v2-section-heading">
            <h2 id="projects-heading">Projects</h2>
            <img alt="" aria-hidden="true" src="/assets/icons/projects.svg" />
          </div>
          <V2Projects />
        </section>

        <section className="v2-section" aria-labelledby="blog-heading">
          <div className="v2-section-heading">
            <h2 id="blog-heading">Blog</h2>
          </div>
          <div className="v2-blog-list">
            {blogPosts.map((post) => (
              <Link className="v2-blog-entry" href={`/blog/${post.slug}`} key={post.slug}>
                <h3>{post.title}</h3>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="v2-section v2-connect-section" aria-labelledby="connect-heading">
          <div className="v2-section-heading">
            <h2 id="connect-heading">Connect</h2>
            <img alt="" aria-hidden="true" src="/assets/icons/connect.svg" />
          </div>
          <div className="v2-connect-card v2-card">
            <p className="v2-seeking">Seeking Summer 2027 internships.</p>
            <p>Have something in mind? Whether it’s an internship opportunity, a coffee chat, or an overly competitive game of pickleball, I’d love to hear from you! </p>
            <ContactLinks label="Connect with Anson" />
          </div>
        </section>

        <footer className="v2-footer">
          <p>© 2026 Anson Chan <img alt="" aria-hidden="true" src="/assets/icons/rocket.png" /></p>
        </footer>
      </main>
    </div>
  );
}
