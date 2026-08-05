import PageIntro from "@/components/PageIntro";
import ProjectPreview from "@/components/ProjectPreview";
import SiteShell from "@/components/SiteShell";
import { projectCases } from "@/data/site";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <div className="page-wrap">
        <PageIntro eyebrow="things I’ve built" title="selected projects">
          <p>Experiments in collaboration, developer tooling, conversation, and the occasional delightful detail.</p>
        </PageIntro>
        <section aria-label="Selected projects" className="project-grid">
          {projectCases.map((project, index) => (
            <ProjectPreview flagship={index === 0} key={project.slug} project={project} />
          ))}
        </section>
        <p className="project-footnote">More ideas are waddling over. <span aria-hidden="true">🐧</span></p>
      </div>
    </SiteShell>
  );
}

