import ExperienceEntry from "@/components/ExperienceEntry";
import type { WorkExperience } from "@/data/experiences";

type ExperienceTimelineProps = {
  experiences: WorkExperience[];
};

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section aria-label="Professional experience" className="work-timeline">
      {experiences.map((experience) => (
        <ExperienceEntry experience={experience} key={`${experience.company}-${experience.startDate}`} />
      ))}
    </section>
  );
}
