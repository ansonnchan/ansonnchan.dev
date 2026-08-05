import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <section className="home-hero">
        <div className="home-copy">
          <img
            alt=""
            aria-hidden="true"
            className="home-sticker"
            src="/assets/stickers/corner_sticker.png"
          />
          <p className="home-kicker">+ building software that makes people’s days a little easier +</p>
          <h1>
            hi there! I’m <span className="home-name">Anson</span>{" "}
            <img
              alt=""
              aria-hidden="true"
              className="home-penguin-icon"
              src="/assets/penguin/penguin-icon.png"
            />
          </h1>
          <ul className="quick-facts">
            <li>
              <span aria-hidden="true">✦</span> computer engineering @{" "}
              <a className="hand-link" href="https://www.ubc.ca" rel="noreferrer" target="_blank">UBC</a>
            </li>
            <li>
              <span aria-hidden="true">✦</span> software engineering @{" "}
              <a className="hand-link" href="https://www.scalepad.com" rel="noreferrer" target="_blank">ScalePad</a>
            </li>
          </ul>
          <div className="home-actions">
            <Link className="text-button primary" href="/work">view my work <span>→</span></Link>
            <Link className="text-button" href="/projects">explore projects <span>→</span></Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
