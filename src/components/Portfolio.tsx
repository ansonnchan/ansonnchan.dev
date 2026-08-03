import About from "@/components/About";
import ClosingSection from "@/components/ClosingSection";
import ExperienceCard from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SideQuestGallery from "@/components/SideQuestGallery";
import SideQuestList from "@/components/SideQuestList";
import { experiences, projects, sideQuests } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <div className="portfolio-shell min-h-screen text-[var(--foreground)]">
      <Navbar />
      <Hero />

      <main>
        <About />

        <section className="responsive-section scroll-fade scroll-mt-24 px-4 sm:px-6 lg:px-8" id="experience">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              subtitle="I've had the pleasure of working with some amazing teams over the years. Each one has taught me something new and has made me a better engineer. ⭐"
              title="Experience"
            />

            <div className="grid gap-5">
              {experiences.map((experience) => (
                <ExperienceCard
                  experience={experience}
                  key={`${experience.title}-${experience.organization}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section responsive-section scroll-fade scroll-mt-24 px-4 sm:px-6 lg:px-8" id="projects">
          <img
            alt=""
            aria-hidden="true"
            className="section-git-sticker projects-git-sticker"
            draggable={false}
            src="/assets/about/git-reset-transparent.png"
          />
          <div className="mx-auto max-w-7xl">
            <SectionHeading
  title="Projects"
  subtitle={
    <>
      A few things I've built in my spare time. Many more exciting projects to
      come in the future{" "}
      <span className="font-bold text-emerald-700 dark:text-emerald-400">
  #projectmaxxing #notlarping
</span>
    </>
  }
/>

            <div className="grid gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="side-quests-section responsive-section scroll-fade scroll-mt-24 px-4 sm:px-6 lg:px-8" id="side-quests">
          <img
            alt=""
            aria-hidden="true"
            className="section-git-sticker side-quests-git-sticker"
            draggable={false}
            src="/assets/about/git-pull-transparent.png"
          />
          <aside className="side-quest-peak-panel" aria-label="Manga reaction">
            <img
              alt=""
              aria-hidden="true"
              className="side-quest-peak-sticker"
              src="/assets/stickers/peak.png"
            />
            <p className="side-quest-peak-comment">
              <svg
                aria-hidden="true"
                className="side-quest-peak-comment-outline"
                focusable="false"
                preserveAspectRatio="none"
                viewBox="0 0 190 100"
              >
                <path
                  className="side-quest-peak-comment-surface"
                  d="M38 71C16 64 4 52 4 40C4 17 41 4 94 4C149 4 186 19 186 42C186 65 147 78 98 78C79 78 63 76 52 73L29 95Z"
                />
                <path
                  className="side-quest-peak-comment-border-accent"
                  d="M186 42C190 66 150 82 98 82C82 82 68 79 58 75C70 77 82 78 98 78C147 78 186 65 186 42Z"
                />
              </svg>
              <span className="side-quest-peak-comment-copy">
                It&apos;s so <strong>peak!</strong>
              </span>
            </p>
          </aside>
          <div className="mx-auto max-w-6xl">
            <SectionHeading 
            subtitle = "I swear I touch grass and talk to people. I definitely don't doomscroll or lurk on r/csMajors. 😭"
            title="Side Quests" />

            <div className="side-quest-layout mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
              <div className="mx-auto max-w-3xl lg:mx-0">
                <SideQuestList bullets={sideQuests.bullets} />
              </div>
              <SideQuestGallery />
            </div>
          </div>
        </section>

        <ClosingSection />
      </main>

      <Footer />
    </div>
  );
}
