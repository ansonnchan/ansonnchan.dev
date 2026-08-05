import { about } from "@/data/about";
import AboutText from "@/components/AboutText";
import GitHubContributionGraph from "@/components/GitHubContributionGraph";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section className="responsive-section scroll-fade scroll-mt-24 px-4 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="About Me"
        />

        <div className="grid gap-9 md:grid-cols-[0.82fr_1.18fr] md:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <aside className="mx-auto h-fit w-full max-w-md md:max-w-none">
            <div className="relative aspect-square">
              <img
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full select-none object-contain"
                draggable={false}
                src={about.illustration}
              />
            </div>
          </aside>

          <div className="min-w-0 space-y-5 text-base leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg sm:leading-8">
            <p><AboutText segments={about.introduction} /></p>
            <p>{about.factsHeading}</p>
            <ul className="list-disc space-y-3 pl-5">
              {about.facts.map((fact, index) => (
                <li key={index}><AboutText segments={fact} /></li>
              ))}
            </ul>
            <p className="handwritten-display text-2xl text-zinc-950 dark:text-white">{about.buildLine}</p>
            <p>{about.closing}</p>
            <p>{about.connectionLead} {about.connectionNote}</p>
          </div>
        </div>

        <GitHubContributionGraph />
      </div>
    </section>
  );
}
