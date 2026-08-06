"use client";

import { useEffect, useId, useState } from "react";
import type { WorkExperience, WorkExperienceStatus } from "@/data/experiences";

const statusLabels: Record<WorkExperienceStatus, string> = {
  upcoming: "next stop",
  current: "currently here",
  completed: "chapter complete"
};

type ExperienceEntryProps = {
  experience: WorkExperience;
};

export default function ExperienceEntry({ experience }: ExperienceEntryProps) {
  const detailsId = useId();
  const headingId = useId();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (experience.defaultExpanded && window.matchMedia("(min-width: 721px)").matches) {
      setIsExpanded(true);
    }
  }, [experience.defaultExpanded]);

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
        <img
          alt={experience.imageAlt}
          className="work-illustration"
          height="500"
          src={experience.image}
          width="500"
        />
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

        <p className="work-summary">{experience.summary}</p>

        <div aria-label="Technologies used" className="work-tech-list">
          {experience.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {hasDetails ? (
          <>
            <button
              aria-controls={detailsId}
              aria-expanded={isExpanded}
              className="work-details-button"
              onClick={() => setIsExpanded((current) => !current)}
              type="button"
            >
              <span>{isExpanded ? "hide details" : "read what I worked on"}</span>
              <span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span>
            </button>

            <div
              aria-hidden={!isExpanded}
              aria-labelledby={headingId}
              className={`work-details${isExpanded ? " is-expanded" : ""}`}
              id={detailsId}
              role="region"
            >
              <div className="work-details-inner">
                <p className="work-details-label">selected engineering work</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <p className="work-upcoming-note">more to come once this chapter begins 〰</p>
        )}
      </div>
    </article>
  );
}
