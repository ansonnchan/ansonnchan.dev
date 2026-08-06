import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${project.slug}`}>
      <div className="project-preview">
        <Image
          alt={project.imageAlt}
          className="project-preview-image"
          fill
          priority={priority}
          sizes="(max-width: 720px) calc(100vw - 3rem), (max-width: 1040px) calc(50vw - 2.75rem), 475px"
          src={project.image}
        />
      </div>

      <div className="project-card-content">
        <p className="project-label">
          {project.slug === "pear-programming" ? <span aria-hidden="true">✦ </span> : null}
          {project.label}
        </p>

        <div className="project-title-row">
          <Image alt="" aria-hidden="true" height={36} src={project.icon} width={36} />
          <h2>{project.name}</h2>
        </div>

        <p className="project-description">{project.description}</p>

        <ul aria-label={`${project.name} technologies`} className="project-tags">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <p className="project-highlight">
          <span aria-hidden="true">✦</span>
          {project.highlight}
        </p>

        <div className="project-links">
          {project.liveUrl ? (
            <a
              aria-label={`View ${project.name} live project (opens in a new tab)`}
              href={project.liveUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              view project <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          <a
            aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
            href={project.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
