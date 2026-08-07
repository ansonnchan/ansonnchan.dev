"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { Project, ProjectTextSegment } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

function ProjectText({ segments }: { segments: ProjectTextSegment[] }) {
  return segments.map((segment, index) => {
    const key = `${segment.text}-${index}`;

    if (segment.style === "strong") {
      return <strong key={key}>{segment.text}</strong>;
    }

    return (
      <span className={segment.style ? `project-detail-${segment.style}` : undefined} key={key}>
        {segment.text}
      </span>
    );
  });
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      dialog.focus({ preventScroll: true });
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function closeDialog() {
    setIsOpen(false);
  }

  return (
    <>
      <article className={`project-card project-card--${project.slug}`}>
        <button
          aria-haspopup="dialog"
          aria-label={`Open details for ${project.name}`}
          className="project-card-trigger"
          onClick={() => setIsOpen(true)}
          type="button"
        />

        <div className="project-preview">
          <Image
            alt={project.imageAlt}
            className="project-preview-image"
            fill
            priority={priority}
            sizes="(max-width: 720px) calc(100vw - 3rem), (max-width: 1040px) calc(50vw - 2.75rem), 420px"
            src={project.image}
          />
        </div>

        <div className="project-card-content">
          <div className="project-title-row">
            <h2>{project.name}</h2>
          </div>
          <p className="project-description">{project.description}</p>
        </div>
      </article>

      <dialog
        aria-label={`${project.name} details`}
        aria-describedby={descriptionId}
        className={`project-dialog project-dialog--${project.slug}`}
        onCancel={closeDialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        onClose={() => setIsOpen(false)}
        ref={dialogRef}
        tabIndex={-1}
      >
        <div className="project-dialog-inner">
          <div className="project-dialog-preview">
            <Image
              alt={project.demoImageAlt}
              className="project-dialog-preview-image"
              fill
              sizes="(max-width: 720px) calc(100vw - 2rem), 650px"
              src={project.demoImage}
            />
          </div>

          <div className="project-dialog-body">
            <div className="project-dialog-copy" id={descriptionId}>
              <p className="project-dialog-overview">
                <ProjectText segments={project.overview} />
              </p>
            </div>

            <div aria-label={`${project.name} links`} className="project-dialog-actions">
              {project.liveUrl ? (
                <a
                  aria-label={`Open the live ${project.name} demo in a new tab`}
                  className="project-dialog-action project-dialog-action--live"
                  href={project.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                  <Image
                    alt=""
                    aria-hidden="true"
                    height={48}
                    src="/assets/projects/live_button.png"
                    width={48}
                  />
                  <span>Live</span>
                </a>
              ) : null}
              <a
                aria-label={`Open ${project.name} on GitHub in a new tab`}
                className="project-dialog-action project-dialog-action--source"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  height={28}
                  src="/assets/icons/github_icon.png"
                  width={28}
                />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
