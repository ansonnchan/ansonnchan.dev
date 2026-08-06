import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PageIntro from "@/components/PageIntro";
import SiteShell from "@/components/SiteShell";
import { workExperiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Work Experience | Anson Chan",
  description: "Software engineering experience across full-stack development, backend systems, APIs, authorization, testing, and developer tooling."
};

export default function WorkPage() {
  return (
    <SiteShell>
      <div className="page-wrap work-page">
        <PageIntro eyebrow="a little timeline of where I’ve worked 〰" title="work experience">
          <p>A few chapters in building dependable systems, thoughtful products, and better ways for people to work.</p>
        </PageIntro>

        <ExperienceTimeline experiences={workExperiences} />
      </div>
    </SiteShell>
  );
}
