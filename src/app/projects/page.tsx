import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";
import SiteShell from "@/components/SiteShell";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Anson Chan",
  description:
    "Selected software engineering projects spanning real-time collaboration, AI platforms, developer tooling, and interactive web experiences."
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <div className="page-wrap projects-page">
        <div className="projects-heading">
          <PageIntro
            eyebrow="made with curiosity and questionable sleep schedules ᝰ"
            title="projects"
          />
          <Image
            alt=""
            aria-hidden="true"
            className="projects-penguin"
            height={240}
            src="/assets/penguin/penguin_pic-3-removebg-preview.png"
            width={300}
          />
        </div>

        <section aria-label="Selected projects" className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} priority={index < 2} project={project} />
          ))}
        </section>
      </div>
    </SiteShell>
  );
}
