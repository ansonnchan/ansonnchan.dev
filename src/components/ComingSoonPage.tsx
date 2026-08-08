import Link from "next/link";
import SiteShell from "@/components/SiteShell";

type ComingSoonPageProps = {
  eyebrow?: string;
  message?: string;
};

export default function ComingSoonPage({
  eyebrow = "projects · under construction ᝰ",
  message = "I’m rebuilding this page from the ground up. Everything is safe—it’s just waddling back in a new outfit."
}: ComingSoonPageProps) {
  return (
    <SiteShell>
      <section aria-labelledby="coming-soon-title" className="coming-soon-page">
        <p className="eyebrow">{eyebrow}</p>
        <img
          alt="A penguin waddling"
          className="coming-soon-penguin"
          src="/assets/transition/penguin-transition.gif"
        />
        <h1 id="coming-soon-title">coming soon</h1>
        <p>{message}</p>
        <Link className="coming-soon-link" href="/">waddle back home</Link>
      </section>
    </SiteShell>
  );
}
