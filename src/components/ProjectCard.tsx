"use client";

import Image from "next/image";
import { type ChangeEvent, type CSSProperties, Fragment, useEffect, useId, useRef, useState } from "react";
import type { Project, ProjectTextSegment } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

function ProjectText({ segments }: { segments: ProjectTextSegment[] }) {
  return segments.map((segment, index) => {
    const key = `${segment.text}-${index}`;
    const content = segment.style === "strong" ? (
      <strong>{segment.text}</strong>
    ) : (
      <span className={segment.style ? `project-detail-${segment.style}` : undefined}>
        {segment.text}
      </span>
    );

    return (
      <Fragment key={key}>
        {segment.breakBefore ? <br /> : null}
        {content}
      </Fragment>
    );
  });
}

function formatVideoTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const wholeSeconds = Math.floor(seconds);
  const minutes = Math.floor(wholeSeconds / 60);
  const remainder = wholeSeconds % 60;

  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      dialog.focus({ preventScroll: true });
      const video = videoRef.current;
      if (video) {
        video.preload = "auto";
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!prefersReducedMotion) {
          void video.play().catch(() => setIsVideoPlaying(false));
        }
      }
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
    videoRef.current?.pause();
    setIsVideoPlaying(false);
    setIsOpen(false);
  }

  function warmDemo() {
    const video = videoRef.current;
    if (!video || video.preload === "auto") return;

    video.preload = "auto";
    video.load();
  }

  function openDialog() {
    warmDemo();
    setIsOpen(true);
  }

  function toggleDemo() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().catch(() => setIsVideoPlaying(false));
    } else {
      video.pause();
    }
  }

  function seekDemo(event: ChangeEvent<HTMLInputElement>) {
    const video = videoRef.current;
    if (!video) return;

    const nextTime = Number(event.target.value);
    video.currentTime = nextTime;
    setVideoCurrentTime(nextTime);
  }

  return (
    <>
      <article className={`project-card project-card--${project.slug}`}>
        <button
          aria-haspopup="dialog"
          aria-label={`Open details for ${project.name}`}
          className="project-card-trigger"
          onClick={openDialog}
          onFocus={warmDemo}
          onPointerEnter={warmDemo}
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
            {project.demoVideo ? (
              <video
                aria-label={`${project.name} demo video`}
                loop
                muted
                onClick={toggleDemo}
                onDurationChange={(event) => setVideoDuration(event.currentTarget.duration)}
                onLoadedMetadata={(event) => {
                  setVideoDuration(event.currentTarget.duration);
                  setVideoCurrentTime(event.currentTarget.currentTime);
                }}
                onPause={() => setIsVideoPlaying(false)}
                onPlay={() => setIsVideoPlaying(true)}
                onTimeUpdate={(event) => setVideoCurrentTime(event.currentTarget.currentTime)}
                playsInline
                poster={project.demoImage}
                preload="none"
                ref={videoRef}
              >
                <source src={project.demoVideo} type="video/mp4" />
                Your browser does not support this project demo video.
              </video>
            ) : (
              <Image
                alt={project.demoImageAlt}
                className="project-dialog-preview-image"
                fill
                sizes="(max-width: 720px) calc(100vw - 2rem), 650px"
                src={project.demoImage}
              />
            )}
            {project.demoVideo ? (
              <div
                className={`project-video-controls${isVideoPlaying ? " project-video-controls--playing" : ""}`}
              >
                <button
                  aria-label={isVideoPlaying ? `Pause ${project.name} demo` : `Play ${project.name} demo`}
                  className="project-video-toggle"
                  onClick={toggleDemo}
                  type="button"
                >
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="project-video-control-icon"
                    height={48}
                    key={isVideoPlaying ? "pause" : "play"}
                    src={isVideoPlaying ? "/assets/projects/play-button.png" : "/assets/projects/pause-button.png"}
                    width={48}
                  />
                </button>
                <input
                  aria-label={`Seek through ${project.name} demo`}
                  aria-valuetext={`${formatVideoTime(videoCurrentTime)} of ${formatVideoTime(videoDuration)}`}
                  className="project-video-progress"
                  max={videoDuration || 0.01}
                  min="0"
                  onChange={seekDemo}
                  step="0.01"
                  style={{
                    "--video-progress": `${videoDuration ? (videoCurrentTime / videoDuration) * 100 : 0}%`,
                  } as CSSProperties}
                  type="range"
                  value={Math.min(videoCurrentTime, videoDuration || 0)}
                />
                <span aria-hidden="true" className="project-video-time">
                  {formatVideoTime(videoCurrentTime)} / {formatVideoTime(videoDuration)}
                </span>
              </div>
            ) : null}
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
