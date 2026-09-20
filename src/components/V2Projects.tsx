"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { visibleProjects, type Project } from "@/data/projects";

const projectTechnologies: Record<string, string[]> = {
  nemu: ["Go", "TypeScript", "React", "AWS"],
  "pear-programming": ["Java", "Spring Boot", "React", "PostgreSQL", "Yjs"],
  "personal-portfolio": ["Next.js", "React", "TypeScript"]
};

function projectDescription(project: Project) {
  return project.overview
    .filter((segment) => segment.style !== "handwritten")
    .map((segment) => segment.text)
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

export default function V2Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedProject && dialog && !dialog.open) dialog.showModal();
  }, [selectedProject]);

  function closePreview() {
    dialogRef.current?.close();
    setSelectedProject(null);
  }

  return (
    <>
      <div className="v2-project-grid">
        {visibleProjects.map((project) => (
          <article className="v2-project" key={project.slug}>
            {project.demoVideo ? (
              <button
                aria-label={`Open a larger ${project.name} demo`}
                className="v2-project-video-button"
                onClick={() => setSelectedProject(project)}
                type="button"
              >
                <video autoPlay loop muted playsInline preload="metadata" src={project.demoVideo} />
              </button>
            ) : null}
            <div className="v2-project-copy">
              <h3>{project.name}</h3>
              <p>{projectDescription(project)}</p>
              <div className="v2-project-footer">
                <div aria-label={`${project.name} links`} className="v2-project-links">
                  {project.liveUrl ? (
                    <a aria-label={`Open live ${project.name}`} href={project.liveUrl} rel="noreferrer" target="_blank">
                      <Image alt="" aria-hidden="true" height={48} src="/assets/projects/live_button.png" width={48} />
                      <span>live</span>
                    </a>
                  ) : null}
                  <a aria-label={`Open ${project.name} source code`} href={project.githubUrl} rel="noreferrer" target="_blank">
                    <Image alt="" aria-hidden="true" height={48} src="/assets/icons/github_icon.png" width={48} />
                    <span>code</span>
                  </a>
                </div>
                <ul aria-label={`${project.name} technologies`} className="v2-project-tech">
                  {projectTechnologies[project.slug]?.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <dialog
        aria-label={selectedProject ? `${selectedProject.name} video demo` : "Project video demo"}
        className="v2-project-dialog"
        onCancel={closePreview}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePreview();
        }}
        onClose={() => setSelectedProject(null)}
        ref={dialogRef}
      >
        {selectedProject?.demoVideo ? (
          <div className="v2-project-dialog-inner">
            <button aria-label="Close video" className="v2-project-dialog-close" onClick={closePreview} type="button">×</button>
            <video autoPlay controls loop muted playsInline src={selectedProject.demoVideo} />
          </div>
        ) : null}
      </dialog>
    </>
  );
}
