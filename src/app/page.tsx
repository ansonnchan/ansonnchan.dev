import type { Metadata } from "next";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import V2Projects from "@/components/V2Projects";
import { contactCards } from "@/data/contacts";
import { professionalExperiences, volunteerExperiences, type Experience } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Anson Chan — Software Engineer",
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
    label: "résumé",
    value: "view résumé",
    href: "/resume",
    icon: "/assets/icons/resume-download.png",
    iconClassName: "contact-card-resume",
    openInNewTab: true
  }
];

function ExperienceSummary({ experience }: { experience: Experience }) {
  return (
    <>
      <div className="v2-experience-topline">
        <div>
          <h3>{experience.role}</h3>
          <p>
            <a href={companyUrls[experience.company]} rel="noreferrer" target="_blank">
              {experience.company}
            </a>
          </p>
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
      <ThemeToggle />
      <main className="v2-main">
        <section className="v2-hero" aria-labelledby="intro-heading">
          <div className="v2-hero-copy">
            <h1 id="intro-heading">Anson Chan</h1>
            <p className="v2-tagline">Software Engineer</p>
            <p className="v2-flags" aria-label="Hong Kong and Australia">🇭🇰 🇦🇺</p>
            <p className="v2-intro-about">
              Hi! I&apos;m Anson. I was born in <span className="v2-intro-highlight">Hong Kong</span> and
              raised in <span className="v2-intro-highlight">Australia</span> for 15 years. I enjoy building software people use and hope to help
              everyday life become a little easier and a little better. I&apos;m currently studying
              <span className="v2-intro-highlight"> Computer Engineering</span> at the <span className="v2-intro-highlight">University of British Columbia</span> and interning
               at <span className="v2-intro-highlight">ScalePad</span>.

            </p>
          </div>
          <Image
            alt="Anson Chan"
            className="v2-hero-portrait"
            height={1254}
            priority
            src="/assets/pfp.png"
            width={1254}
          />
        </section>

        <section className="v2-section" aria-labelledby="education-heading">
          <div className="v2-section-heading">
            <h2 id="education-heading">Education</h2>
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
          </div>
          <div className="v2-experience-list">
            {allExperiences.map((experience) => (
              <article className="v2-experience-card v2-card" key={experience.company}>
                <ExperienceSummary experience={experience} />
              </article>
            ))}
          </div>
        </section>

        <section className="v2-section" aria-labelledby="projects-heading">
          <div className="v2-section-heading">
            <h2 id="projects-heading">Projects</h2>
          </div>
          <V2Projects />
        </section>

        <section className="v2-section v2-connect-section" aria-labelledby="connect-heading">
          <div className="v2-section-heading">
            <h2 id="connect-heading">Connect</h2>
          </div>
          <div className="v2-connect-card v2-card">
            <p className="v2-seeking">Seeking Summer 2027 internships.</p>
            <p>Have something in mind? I&apos;d love to hear about it.</p>
            <div className="v2-connect-links">
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
            </div>
          </div>
        </section>

        <footer className="v2-footer">
          <p>© 2026 Anson Chan</p>
        </footer>
      </main>
    </div>
  );
}
