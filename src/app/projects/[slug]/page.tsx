import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { projectBySlug, projectCases } from "@/data/project-cases";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectCases.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug.get(slug);
  return project ? { title: `${project.title} — Anson Chan` } : {};
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectBySlug.get(slug);

  if (!project) notFound();

  const projectIndex = projectCases.findIndex((item) => item.slug === project.slug);
  const previous = projectCases[(projectIndex - 1 + projectCases.length) % projectCases.length];
  const next = projectCases[(projectIndex + 1) % projectCases.length];

  return (
    <SiteShell>
      <article className={`case-study${project.tone === "soft" ? " soft-case" : ""}`}>
        <Link className="back-link" href="/projects">← all projects</Link>
        <header className="case-header">
          <p className="eyebrow">project {String(projectIndex + 1).padStart(2, "0")} · {project.status}</p>
          <h1><span aria-hidden="true">{project.mark}</span> {project.title}</h1>
          <p>{project.description}</p>
          <div className="case-links">
            {project.live ? <a href={project.live} rel="noreferrer" target="_blank">visit live site ↗</a> : null}
            <a href={project.github} rel="noreferrer" target="_blank">view source ↗</a>
          </div>
        </header>

        <figure className="case-hero">
          <img alt={`${project.title} interface`} src={project.image} />
        </figure>

        <div className="case-layout">
          <aside className="case-aside">
            <p>built with</p>
            <ul>{project.techStack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
          </aside>
          <div className="case-copy">
            <section>
              <p className="section-number">01 / overview</p>
              <h2>What it is</h2>
              <p>{project.overview}</p>
            </section>
            <section>
              <p className="section-number">02 / the build</p>
              <h2>What I built</h2>
              <ul>{project.build.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section>
              <p className="section-number">03 / outcome</p>
              <h2>What came from it</h2>
              <ul>{project.result.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>
        </div>

        {project.gallery.images.length > 1 ? (
          <section className="case-gallery" aria-label={`${project.title} gallery`}>
            {project.gallery.images.slice(1).map((media) => (
              <figure key={media.src}>
                {media.mediaType === "video" ? (
                  <video autoPlay loop muted playsInline poster={media.fallbackSrc}>
                    <source src={media.src} />
                  </video>
                ) : <img alt={media.alt} src={media.src} />}
                {media.caption ? <figcaption>{media.caption}</figcaption> : null}
              </figure>
            ))}
          </section>
        ) : null}

        <nav aria-label="More projects" className="case-pagination">
          <Link href={`/projects/${previous.slug}`}><span>← previous</span>{previous.title}</Link>
          <Link href={`/projects/${next.slug}`}><span>next →</span>{next.title}</Link>
        </nav>
      </article>
    </SiteShell>
  );
}
