"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { projects, type Project } from "@/data/projects";

const projectTechnologies: Record<string, string[]> = {
  nemu: ["Go", "TypeScript", "React", "AWS"],
  "pear-programming": ["Java", "Spring Boot", "React", "PostgreSQL"],
  "personal-portfolio": ["Next.js", "React", "TypeScript"]
};

export default function V2Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus({ preventScroll: true });

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedProject(null);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  function openPreview(project: Project) {
    setSelectedProject(project);
  }

  function closePreview() {
    setSelectedProject(null);
  }

  return (
    <>
      <div className="v2-project-grid">
        {projects.map((project) => (
          <article className="v2-project" key={project.slug}>
            {project.demoVideo ? (
              <button
                aria-label={`Open a larger ${project.name} demo`}
                className="v2-project-video-button"
                onClick={() => openPreview(project)}
                type="button"
              >
                <video autoPlay loop muted playsInline preload="metadata" src={project.demoVideo} />
              </button>
            ) : null}
            <div className="v2-project-copy">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="v2-project-footer">
                <div aria-label={`${project.name} links`} className="v2-project-links">
                  {project.liveUrl ? (
                    <a aria-label={`Open live ${project.name}`} href={project.liveUrl} rel="noreferrer" target="_blank">
                      <Image alt="" aria-hidden="true" height={48} src="/assets/icons/live.png" width={48} />
                      <span>live</span>
                    </a>
                  ) : null}
                  <a aria-label={`Open ${project.name} source code`} href={project.githubUrl} rel="noreferrer" target="_blank">
                    <Image alt="" aria-hidden="true" height={48} src="/assets/icons/github.png" width={48} />
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

      {selectedProject?.demoVideo && typeof document !== "undefined"
        ? createPortal(
          <div
            className="v2-project-dialog-backdrop"
            onClick={(event) => {
              if (event.target === event.currentTarget) closePreview();
            }}
          >
            <div
              aria-label={`${selectedProject.name} video demo`}
              aria-modal="true"
              className="v2-project-dialog"
              role="dialog"
            >
              <div className="v2-project-dialog-inner">
                <button
                  aria-label="Close video"
                  className="v2-project-dialog-close"
                  onClick={closePreview}
                  ref={closeButtonRef}
                  type="button"
                >
                  <Image alt="" aria-hidden="true" height={24} src="/assets/icons/cancel.png" width={24} />
                </button>
                <video autoPlay controls loop muted playsInline src={selectedProject.demoVideo} />
              </div>
            </div>
          </div>
          , document.body)
        : null}
    </>
  );
}
