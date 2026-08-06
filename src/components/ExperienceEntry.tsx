import type { WorkExperience, WorkExperienceStatus } from "@/data/experiences";
import WorkText from "@/components/WorkText";

const statusLabels: Record<WorkExperienceStatus, string> = {
  upcoming: "next stop",
  current: "currently here",
  completed: "chapter complete"
};

type ExperienceEntryProps = {
  experience: WorkExperience;
};

export default function ExperienceEntry({ experience }: ExperienceEntryProps) {
  const headingId = `experience-${experience.startDate}-${experience.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const hasDetails = experience.highlights.length > 0;

  return (
    <article className={`work-entry work-entry--${experience.status}`} aria-labelledby={headingId}>
      <div aria-hidden="true" className="work-timeline-mark">
        <span>✦</span>
      </div>

      <aside className="work-support">
        <div className="work-support-copy">
          <p className="work-year">{experience.year}</p>
          <p className="work-status">{statusLabels[experience.status]}</p>
        </div>
        <div className="work-company-logo">
          <img
            alt={experience.logoAlt}
            height="200"
            src={experience.logo}
            width="200"
          />
        </div>
      </aside>

      <div className="work-main">
        <header className="work-heading">
          <h2 id={headingId}>{experience.company}</h2>
          <p className="work-role">{experience.role}</p>
          <p className="work-meta">
            <span>{experience.dateLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{experience.location}</span>
          </p>
        </header>

        <div className="work-entry-overview">
          <div className="work-entry-copy">
            <p className="work-summary"><WorkText segments={experience.summary} /></p>
          </div>

          <img
            alt={experience.penguinAlt}
            className="work-entry-penguin"
            height="500"
            src={experience.penguin}
            width="500"
          />
        </div>

        {hasDetails ? (
          <section aria-label={`Selected engineering work at ${experience.company}`} className="work-highlights">
            <h3><span>selected engineering work</span></h3>
            <ul>
              {experience.highlights.map((highlight, index) => (
                <li key={index}><WorkText segments={highlight} /></li>
              ))}
            </ul>
          </section>
        ) : (
          <p className="work-upcoming-note">more to come once this iceberg floats 〰</p>
        )}
      </div>
    </article>
  );
}
