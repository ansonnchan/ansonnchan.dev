import PageIntro from "@/components/PageIntro";
import SiteShell from "@/components/SiteShell";

const experiences = [
  {
    company: "Atria",
    role: "Incoming Software Engineering Intern",
    dates: "Jan. — Apr. 2027",
    location: "Vancouver, BC",
    logo: null,
    accent: false,
    bullets: [
      "Joining the engineering team to develop full-stack features for a Django and React platform."
    ],
    tech: ["Django", "React"]
  },
  {
    company: "ScalePad",
    role: "Software Engineering Intern",
    dates: "Jun. — Dec. 2026",
    location: "Vancouver, BC",
    logo: "/assets/experiences/scalepad_logo_black.png",
    accent: true,
    bullets: [
      "Modernized Lifecycle Manager’s authorization system for 12,000+ MSPs, replacing binary admin-viewer permissions with role-based access control across C#/.NET services and a React/TypeScript frontend.",
      "Designed and implemented a unified Entity Comments API, consolidating domain-specific implementations into one shared platform capability."
    ],
    tech: ["C#", ".NET", "React", "TypeScript"]
  },
  {
    company: "Borrow’d",
    role: "Software Engineering Intern",
    dates: "Jan. — Apr. 2026",
    location: "Vancouver, BC",
    logo: "/assets/experiences/borrowd_org_logo.jpeg",
    accent: false,
    bullets: [
      "Secured private marketplace groups for 150+ users by implementing moderator approval workflows with synchronized Django permission checks.",
      "Reduced manual merchandising analysis from 15 to 5 hours per week with a search analytics pipeline and optimized PostgreSQL queries.",
      "Expanded GitHub Actions with integration and Playwright end-to-end tests, maintaining 90%+ coverage across the features I developed."
    ],
    tech: ["Python", "Django", "PostgreSQL", "Playwright"]
  },
  {
    company: "University of South Australia",
    role: "Undergraduate Research Assistant",
    dates: "Jun. — Aug. 2025",
    location: "Adelaide, Australia",
    logo: "/assets/experiences/unisa-logo.svg",
    accent: false,
    bullets: [
      "Worked on computational modeling under the guidance of Dr. Terence Chan.",
      "Implemented Conway’s Game of Life while working with Python and MATLAB."
    ],
    tech: ["Python", "MATLAB"]
  }
];

export default function WorkPage() {
  return (
    <SiteShell>
      <div className="page-wrap">
        <PageIntro eyebrow="where I’ve learned & contributed" title="places I’ve worked">
          <p>A concise record of the teams, systems, and problems that have shaped how I build.</p>
        </PageIntro>

        <section aria-label="Professional experience" className="experience-list">
          {experiences.map((experience, index) => (
            <article className={`experience-row${experience.accent ? " featured" : ""}`} key={experience.company}>
              <div className="experience-index">0{index + 1}</div>
              <div className="company-lockup">
                {experience.logo ? (
                  <div className="company-logo">
                    <img alt={`${experience.company} logo`} src={experience.logo} />
                  </div>
                ) : (
                  <div aria-hidden="true" className="company-logo company-letter">a.</div>
                )}
                <div>
                  <h2>{experience.company}</h2>
                  {experience.accent ? <span className="feature-label">main chapter</span> : null}
                </div>
              </div>
              <div className="experience-body">
                <div className="experience-heading">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.location}</p>
                  </div>
                  <time>{experience.dates}</time>
                </div>
                <ul>
                  {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="tag-row">
                  {experience.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="page-note">
          <img alt="" aria-hidden="true" src="/assets/penguin/penguin_pic-1-removebg-preview.png" />
          <p><span>still learning, always building.</span><br />For the one-page version, my full résumé is <a href="/resume" rel="noreferrer" target="_blank">over here ↗</a></p>
        </aside>
      </div>
    </SiteShell>
  );
}

