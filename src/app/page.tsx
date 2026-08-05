import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <section className="home-hero">
        <div className="home-penguin" aria-hidden="true">
          <span className="penguin-note">noot noot!</span>
          <img src="/assets/penguin/penguin_pic-6-removebg-preview.png" alt="" />
        </div>
        <div className="home-copy">
          <p className="eyebrow">welcome to my little corner of the internet</p>
          <h1>hi there! I’m <span>Anson</span> <span aria-hidden="true" className="smile">☺</span></h1>
          <p className="home-lead">I’m a UBC Computer Engineering student and software engineer who enjoys building thoughtful products and dependable systems.</p>
          <ul className="quick-facts">
            <li><span aria-hidden="true">✦</span> currently building at ScalePad</li>
            <li><span aria-hidden="true">✦</span> from Hong Kong, raised in Australia, now in Vancouver</li>
            <li><span aria-hidden="true">✦</span> usually coding, playing racquet sports, or thinking about penguins</li>
          </ul>
          <div className="home-actions">
            <Link className="text-button primary" href="/work">view my work <span>→</span></Link>
            <Link className="text-button" href="/projects">explore projects <span>→</span></Link>
          </div>
          <p className="tiny-link">or <a href="mailto:ananryry180@gmail.com">say hello</a> — I’d love to hear from you.</p>
        </div>
      </section>
    </SiteShell>
  );
}
