import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PageIntro from "@/components/PageIntro";
import SiteShell from "@/components/SiteShell";
import { workExperiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Anson Chan's Portfolio",
  description: "Software engineering experience across full-stack development, backend systems, APIs, authorization, testing, and developer tooling."
};

export default function WorkPage() {
  return (
    <SiteShell>
      <div className="page-wrap work-page">
        <PageIntro eyebrow="+1000 corporate aura ᝰ" title="work experience">
          <p>I&apos;ve had the pleasure of working with some amazing teams over the years. Each one has taught me something new and has made me a better engineer. ⭐</p>
        </PageIntro>

        <ExperienceTimeline experiences={workExperiences} />
      </div>
    </SiteShell>
  );
}
