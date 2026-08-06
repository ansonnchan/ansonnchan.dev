import PageIntro from "@/components/PageIntro";
import SiteShell from "@/components/SiteShell";
import WorkText from "@/components/WorkText";
import { workExperiences } from "@/data/experiences";

export default function WorkPageArchive() {
  return (
    <SiteShell>
      <div className="page-wrap">
        <PageIntro eyebrow="where I’ve learned & contributed" title="places I’ve worked">
          <p>A concise record of the teams, systems, and problems that have shaped how I build.</p>
        </PageIntro>

        <section aria-label="Professional experience" className="experience-list">
          {workExperiences.map((experience, index) => (
            <article className={`experience-row${experience.defaultExpanded ? " featured" : ""}`} key={experience.company}>
              <div className="experience-index">0{index + 1}</div>
              <div className="company-lockup">
                <div className="company-logo">
                  <img alt={experience.logoAlt} src={experience.logo} />
                </div>
                <div>
                  <h2>{experience.company}</h2>
                  {experience.defaultExpanded ? <span className="feature-label">main chapter</span> : null}
                </div>
              </div>
              <div className="experience-body">
                <div className="experience-heading">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.location}</p>
                  </div>
                  <time>{experience.dateLabel}</time>
                </div>
                <ul>
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}><WorkText segments={highlight} /></li>
                  ))}
                </ul>
                <div className="tag-row">
                  {experience.technologies.map((tech) => <span key={tech}>{tech}</span>)}
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
