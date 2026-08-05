import Link from "next/link";
import SiteShell from "@/components/SiteShell";

type ComingSoonPageProps = {
  section: "work" | "projects";
};

export default function ComingSoonPage({ section }: ComingSoonPageProps) {
  return (
    <SiteShell>
      <section aria-labelledby="coming-soon-title" className="coming-soon-page">
        <p className="eyebrow">{section} · under construction ᝰ</p>
        <img
          alt="A penguin waddling"
          className="coming-soon-penguin"
          src="/assets/closing/goodbye.gif"
        />
        <h1 id="coming-soon-title">coming soon</h1>
        <p>
          I&apos;m rebuilding this page from the ground up. Everything is safe—it&apos;s
          just waddling back in a new outfit.
        </p>
        <Link className="coming-soon-link" href="/">waddle back home</Link>
      </section>
    </SiteShell>
  );
}
