import ExperienceEntry from "@/components/ExperienceEntry";
import type { Experience } from "@/data/experiences";

type ExperienceTimelineProps = {
  experiences: Experience[];
  label: string;
};

export default function ExperienceTimeline({ experiences, label }: ExperienceTimelineProps) {
  return (
    <div aria-label={label} className="work-timeline" role="list">
      {experiences.map((experience) => (
        <ExperienceEntry experience={experience} key={`${experience.company}-${experience.startDate}`} />
      ))}
    </div>
  );
}
