import PageIntro from "@/components/PageIntro";
import SiteShell from "@/components/SiteShell";
import { workExperiences } from "@/data/experiences";

export default function WorkPage() {
  return (
    <SiteShell>
      <div className="page-wrap">
        <PageIntro eyebrow="where I’ve learned & contributed" title="places I’ve worked">
          <p>A concise record of the teams, systems, and problems that have shaped how I build.</p>
        </PageIntro>

        <section aria-label="Professional experience" className="experience-list">
          {workExperiences.map((experience, index) => (
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
