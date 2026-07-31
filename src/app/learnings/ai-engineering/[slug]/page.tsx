import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import MarkdownNote from "@/components/MarkdownNote";
import Navbar from "@/components/Navbar";
import {
  formatNoteDate,
  getAiEngineeringNote,
  getAiEngineeringNotes,
  getCategoryLabel
} from "@/lib/learning-notes";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const notes = await getAiEngineeringNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = await getAiEngineeringNote(slug);

  if (!note) {
    return { title: "Note not found | Anson Chan" };
  }

  return {
    title: `${note.title} | Anson Chan`,
    description: note.description,
    alternates: {
      canonical: `/learnings/ai-engineering/${note.slug}`
    }
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = await getAiEngineeringNote(slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="portfolio-shell min-h-screen text-[var(--foreground)]">
      <Navbar />

      <main className="px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <Link
            className="inline-flex items-center gap-2 rounded-md py-2 font-semibold text-zinc-600 transition hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-300"
            href="/learnings"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            All engineering notes
          </Link>

          <header className="mt-8 border-b border-black/10 pb-8 dark:border-white/10">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              <span>{note.source.title}</span>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">
                /
              </span>
              <span>{getCategoryLabel(note.category)}</span>
            </div>

            <h1 className="handwritten-display mt-4 text-4xl leading-tight text-zinc-950 sm:text-6xl dark:text-white">
              {note.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              {note.description}
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <time className="mr-1 text-sm text-zinc-500 dark:text-zinc-400" dateTime={note.updated}>
                  Updated {formatNoteDate(note.updated)}
                </time>
                {note.tags.map((tag) => (
                  <span className="sticker-tag px-2.5 py-1 text-xs" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-zinc-950/10 bg-white px-3.5 py-2 font-semibold text-zinc-700 transition hover:border-emerald-700/25 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:text-emerald-300"
                href={note.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4 object-contain opacity-80 dark:invert"
                  src="/assets/about/github_icon.png"
                />
                View on GitHub
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </header>

          <MarkdownNote note={note} />
        </article>
      </main>
    </div>
  );
}
