import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PageIntro from "@/components/PageIntro";
import SiteShell from "@/components/SiteShell";
import { professionalExperiences, volunteerExperiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Anson Chan",
  description: "Software engineering experience across full-stack development, backend systems, APIs, authorization, testing, and developer tooling."
};

export default function WorkPage() {
  return (
    <SiteShell>
      <div className="page-wrap work-page">
        <PageIntro eyebrow="a little older, a little wiser ᝰ" title="experience">
          <p>I&apos;ve had the pleasure of working with some amazing teams over the years. Each one has taught me something new and has made me a better engineer. ⭐</p>
        </PageIntro>

        <section className="experience-section" aria-labelledby="work-experience-heading">
          <h2 className="experience-section-heading" id="work-experience-heading">work experience</h2>
          <ExperienceTimeline experiences={professionalExperiences} label="Work experience" />
        </section>

        <section className="experience-section" aria-labelledby="volunteering-heading">
          <h2 className="experience-section-heading" id="volunteering-heading">volunteering</h2>
          <ExperienceTimeline experiences={volunteerExperiences} label="Volunteering experience" />
        </section>
      </div>
    </SiteShell>
  );
}
