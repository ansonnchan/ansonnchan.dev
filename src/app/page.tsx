import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contactCards } from "@/data/contacts";
import { professionalExperiences, volunteerExperiences } from "@/data/experiences";
import { visibleProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Anson Chan — Software Engineer",
  description:
    "Anson Chan is a UBC Computer Engineering student and software engineer building thoughtful products and dependable systems."
};

const experienceTags: Record<string, string[]> = {
  ScalePad: ["TypeScript", "React", "C#", "RBAC"],
  Atria: ["Django", "React", "System design"],
  "Borrow’d": ["Full stack", "Authorization", "Analytics"]
};

const allExperiences = [...professionalExperiences, ...volunteerExperiences];

function PlainText({ segments }: { segments: { text: string }[] }) {
  return <>{segments.map((segment) => segment.text).join("")}</>;
}

export default function Home() {
  return (
    <div className="v2-page" id="top">
      <header className="v2-header">
        <Link className="v2-wordmark" href="#top">
          anson<span>.</span>
        </Link>
        <nav aria-label="Page sections" className="v2-nav">
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#about">about</a>
        </nav>
      </header>

      <main className="v2-main">
        <section className="v2-hero" aria-labelledby="intro-heading">
          <div className="v2-hero-copy">
            <p className="v2-eyebrow">hello, I&apos;m</p>
            <h1 id="intro-heading">Anson Chan</h1>
            <p className="v2-tagline">building thoughtful software, one noot at a time.</p>
            <div className="v2-availability">
              <span aria-hidden="true" />
              software engineer @ ScalePad
            </div>
          </div>
          <div className="v2-hero-art" aria-hidden="true">
            <Image alt="" height={500} priority src="/assets/penguin/penguin_pic-6-removebg-preview.png" width={500} />
          </div>
        </section>

        <section className="v2-section" aria-labelledby="education-heading">
          <div className="v2-section-heading">
            <p>01</p>
            <h2 id="education-heading">Education</h2>
          </div>
          <article className="v2-education-card v2-card">
            <div>
              <h3>University of British Columbia</h3>
              <p>BASc, Computer Engineering · third year</p>
            </div>
            <span className="v2-card-note">Vancouver, BC</span>
          </article>
        </section>

        <section className="v2-section" id="experience" aria-labelledby="experience-heading">
          <div className="v2-section-heading">
            <p>02</p>
            <h2 id="experience-heading">Experience</h2>
            <Link href="/work">the longer version ↗</Link>
          </div>
          <div className="v2-experience-list">
            {allExperiences.map((experience) => (
              <article className="v2-experience-card v2-card" key={experience.company}>
                <div className="v2-experience-topline">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                  </div>
                  <time dateTime={experience.startDate}>{experience.dateLabel}</time>
                </div>
                <p className="v2-experience-summary"><PlainText segments={experience.summary} /></p>
                <ul className="v2-tags" aria-label={`${experience.company} technologies`}>
                  {experienceTags[experience.company]?.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="v2-section" id="projects" aria-labelledby="projects-heading">
          <div className="v2-section-heading">
            <p>03</p>
            <h2 id="projects-heading">Selected projects</h2>
            <Link href="/projects">project details ↗</Link>
          </div>
          <div className="v2-project-grid">
            {visibleProjects.map((project) => (
              <article className={`v2-project v2-project--${project.slug}`} key={project.slug}>
                <div className="v2-project-art">
                  <Image alt={project.imageAlt} fill sizes="(max-width: 720px) calc(100vw - 3rem), 330px" src={project.image} />
                </div>
                <div className="v2-project-copy">
                  <div className="v2-project-title">
                    <h3>{project.name}</h3>
                    <div className="v2-project-links">
                      {project.liveUrl ? <a href={project.liveUrl} rel="noreferrer" target="_blank">live ↗</a> : null}
                      <a href={project.githubUrl} rel="noreferrer" target="_blank">code ↗</a>
                    </div>
                  </div>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="v2-section v2-about" id="about" aria-labelledby="about-heading">
          <div className="v2-section-heading">
            <p>04</p>
            <h2 id="about-heading">A little about me</h2>
          </div>
          <div className="v2-about-layout">
            <div className="v2-about-copy">
              <p>I&apos;m a third-year Computer Engineering student at UBC, currently building software at ScalePad. I grew up in Australia, was born in Hong Kong, and now call Vancouver home.</p>
              <p>I like products that make everyday life easier, better, or simply a little more fun. Away from the keyboard, you&apos;ll usually find me playing racquet sports, practicing Cantonese, or recommending Cyberpunk: Edgerunners.</p>
              <Link className="v2-text-link" href="/about">more about me ↗</Link>
            </div>
            <Image alt="Anson standing in front of Kinkaku-ji in Kyoto" className="v2-portrait" height={1254} src="/assets/pfp.png" width={1254} />
          </div>
        </section>

        <section className="v2-connect" aria-labelledby="connect-heading">
          <Image alt="" aria-hidden="true" height={403} src="/assets/penguin/penguin_pic-5-removebg-preview.png" width={594} />
          <div>
            <p className="v2-eyebrow">have something in mind?</p>
            <h2 id="connect-heading">Let&apos;s build something good.</h2>
            <a className="v2-email-link" href="mailto:ac1800@student.ubc.ca">ac1800@student.ubc.ca ↗</a>
          </div>
        </section>

        <footer className="v2-footer">
          <p>© 2026 Anson Chan</p>
          <p>built with curiosity + an unreasonable number of penguins</p>
        </footer>
      </main>

      <aside aria-label="Contact Anson" className="v2-contact-dock">
        <span className="v2-contact-label">say hello</span>
        {contactCards.map((contact) => (
          <a aria-label={`${contact.label}: ${contact.value}`} className={`v2-contact-icon ${contact.iconClassName}`} href={contact.href} key={contact.label} rel={contact.openInNewTab ? "noreferrer" : undefined} target={contact.openInNewTab ? "_blank" : undefined}>
            <img alt="" aria-hidden="true" src={contact.icon} />
            <span>{contact.label}</span>
          </a>
        ))}
      </aside>
    </div>
  );
}
