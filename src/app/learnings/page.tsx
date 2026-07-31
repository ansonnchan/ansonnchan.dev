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

  return (
    <div className="portfolio-shell min-h-screen text-[var(--foreground)]">
      <Navbar />

      <main className="px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <header className="max-w-3xl">
            <p className="handwritten-display text-xl text-emerald-700 dark:text-emerald-400">
              Anson&apos;s learning logs
            </p>
            <h1 className="handwritten-display mt-3 text-5xl text-zinc-950 sm:text-6xl dark:text-white">
              Engineering Notes
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg dark:text-zinc-300">
              Concepts I&apos;m studying, explanations I want to remember, and practical
              lessons collected while building software.
            </p>
          </header>

          <section
            aria-labelledby="ai-engineering-title"
            className="mt-14 border-y border-zinc-950/10 py-6 dark:border-white/10 sm:py-7"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-start gap-4 sm:items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <BookOpen aria-hidden="true" className="h-6 w-6" />
                </div>
                <div>
                  <h2
                    className="text-2xl font-black text-zinc-950 dark:text-white"
                    id="ai-engineering-title"
                  >
                    {aiEngineeringSource.title}
                  </h2>
                  <p className="mt-1 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
                    {aiEngineeringSource.description}
                  </p>
                </div>
              </div>

              <a
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-md py-2 font-semibold text-zinc-600 transition hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-300 sm:self-auto"
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
                GitHub
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </section>

          {notes.length > 0 ? (
            <section aria-labelledby="published-notes-title" className="mt-14">
              <div className="mb-4 flex items-end justify-between gap-4">
                <h2
                  className="handwritten-display text-3xl text-zinc-950 sm:text-4xl dark:text-white"
                  id="published-notes-title"
                >
                  Published Notes
                </h2>
                <span className="pb-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {notes.length} {notes.length === 1 ? "entry" : "entries"}
                </span>
              </div>

              <div className="divide-y divide-zinc-950/10 border-y border-zinc-950/10 dark:divide-white/10 dark:border-white/10">
                {notes.map((note) => (
                  <Link
                    className="group flex flex-col gap-4 py-6 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 sm:flex-row sm:items-center sm:justify-between"
                    href={`/learnings/ai-engineering/${note.slug}`}
                    key={note.slug}
                  >
                    <div className="min-w-0 max-w-3xl">
                      <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                        {getCategoryLabel(note.category)}
                      </p>
                      <h3 className="mt-1 text-xl font-black text-zinc-950 transition group-hover:text-emerald-700 sm:text-2xl dark:text-white dark:group-hover:text-emerald-300">
                        {note.title}
                      </h3>
                      <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-300">
                        {note.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400 sm:justify-end">
                      <time dateTime={note.updated}>{formatNoteDate(note.updated)}</time>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-300"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
    </div>
  );
}
