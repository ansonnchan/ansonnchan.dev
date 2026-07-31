import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Anson Chan's Portfolio",
  description: "Notes on software engineering, system design, and AI engineering."
};

export default function LearningsPage() {
  return (
    <div className="portfolio-shell min-h-screen text-[var(--foreground)]">
      <Navbar />
      <main className="flex min-h-screen items-center justify-center px-6 pb-16 pt-28">
        <section className="mx-auto max-w-3xl text-center">
          <p className="handwritten-display text-xl text-emerald-700 dark:text-emerald-400">
            Anson&apos;s Learning Logs
          </p>
          <h1 className="handwritten-display mt-3 text-5xl text-zinc-950 sm:text-7xl dark:text-white">
            Notes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Deep dives into AI engineering, system design, design patterns, and the
            software engineering ideas I&apos;m learning along the way.
          </p>
          <p className="mt-8 text-base text-zinc-500 dark:text-zinc-400">
            Notes are coming soon! 
          </p>
        </section>
      </main>
    </div>
  );
}
