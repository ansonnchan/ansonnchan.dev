import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  aiEngineeringSource,
  formatNoteDate,
  getAiEngineeringNotes,
  getCategoryLabel
} from "@/lib/learning-notes";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Engineering Notes | Anson Chan",
  description:
    "An evolving collection of notes on AI engineering, system design, software patterns, and delivery."
};

export default async function LearningsPage() {
  const notes = await getAiEngineeringNotes();
  const notesByCategory = aiEngineeringSource.categories
    .map((category) => ({
      category,
      notes: notes.filter((note) => note.category === category)
    }))
    .filter((group) => group.notes.length > 0);

  return (
    <div className="portfolio-shell min-h-screen text-[var(--foreground)]">
      <Navbar />

      <main className="px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto max-w-3xl text-center">
            <p className="handwritten-display text-xl text-emerald-700 dark:text-emerald-400">
              Anson&apos;s learning logs
            </p>
            <h1 className="handwritten-display mt-3 text-5xl text-zinc-950 sm:text-7xl dark:text-white">
              Engineering Notes
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg dark:text-zinc-300">
              Concepts I&apos;m studying, explanations I want to remember, and practical
              lessons collected while building software.
            </p>
          </header>

          <section
            aria-labelledby="ai-engineering-title"
            className="comic-card surface-card mt-14 overflow-hidden p-5 sm:p-7"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex min-w-0 gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-700/15 bg-emerald-50 text-emerald-700 dark:border-emerald-300/15 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <BookOpen aria-hidden="true" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.13em] text-emerald-700 dark:text-emerald-400">
                    Learning collection
                  </p>
                  <h2
                    className="mt-1 text-2xl font-black text-zinc-950 sm:text-3xl dark:text-white"
                    id="ai-engineering-title"
                  >
                    {aiEngineeringSource.title}
                  </h2>
                  <p className="mt-2 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
                    {aiEngineeringSource.description}
                  </p>
                </div>
              </div>

              <a
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-zinc-950/10 bg-white px-4 py-2.5 font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-emerald-700/25 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:text-emerald-300"
                href={aiEngineeringSource.repositoryUrl}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 object-contain opacity-80 dark:invert"
                  src="/assets/about/github_icon.png"
                />
                View repository
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-black/10 pt-5 dark:border-white/10">
              {aiEngineeringSource.categories.map((category) => (
                <span
                  className="sticker-tag px-3 py-1.5 text-sm font-semibold text-emerald-800 dark:text-emerald-200"
                  key={category}
                >
                  {getCategoryLabel(category)}
                </span>
              ))}
            </div>
          </section>

          {notes.length === 0 ? (
            <section className="mt-10 rounded-xl border border-dashed border-zinc-950/20 px-6 py-12 text-center dark:border-white/20">
              <h2 className="text-xl font-black text-zinc-900 dark:text-white">
                Repository connected ✓
              </h2>
              <p className="mx-auto mt-2 max-w-xl leading-7 text-zinc-600 dark:text-zinc-300">
                There are no published notes yet. Notes marked as published in the AI
                Engineering repository will appear here after the next deployment.
              </p>
            </section>
          ) : (
            <div className="mt-14 space-y-14">
              {notesByCategory.map((group) => (
                <section aria-labelledby={`${group.category}-title`} key={group.category}>
                  <div className="mb-5 flex items-end justify-between gap-4">
                    <h2
                      className="handwritten-display text-3xl text-zinc-950 sm:text-4xl dark:text-white"
                      id={`${group.category}-title`}
                    >
                      {getCategoryLabel(group.category)}
                    </h2>
                    <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                      {group.notes.length} {group.notes.length === 1 ? "note" : "notes"}
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {group.notes.map((note) => (
                      <Link
                        className="comic-card surface-card group flex h-full flex-col p-5 transition hover:-translate-y-1 hover:border-emerald-700/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-600 sm:p-6"
                        href={`/learnings/ai-engineering/${note.slug}`}
                        key={note.slug}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-black text-zinc-950 transition group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
                            {note.title}
                          </h3>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="mt-1 h-5 w-5 shrink-0 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-300"
                          />
                        </div>
                        <p className="mt-3 flex-1 leading-7 text-zinc-600 dark:text-zinc-300">
                          {note.description}
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                          <time dateTime={note.updated}>{formatNoteDate(note.updated)}</time>
                          {note.tags.slice(0, 3).map((tag) => (
                            <span className="sticker-tag px-2.5 py-1 text-xs" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
