import Link from "next/link";
import type { ProjectCase } from "@/data/project-cases";

export default function ProjectPreview({ project, flagship = false }: { project: ProjectCase; flagship?: boolean }) {
  return (
    <Link className={`project-preview${flagship ? " flagship" : ""}`} href={`/projects/${project.slug}`}>
      <div className="project-media">
        <img alt={`${project.title} interface`} src={project.image} />
        {flagship ? <span className="flagship-note">start here ↘</span> : null}
      </div>
      <div className="project-summary">
        <div className="project-title-row">
          <h2><span aria-hidden="true">{project.mark}</span> {project.title}</h2>
          <span>{project.status}</span>
        </div>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.techStack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <span className="open-cue">open case study <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
