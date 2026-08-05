import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { home } from "@/data/home";

export default function Home() {
  return (
    <SiteShell>
      <section className="home-hero">
        <div className="home-copy">
          <img
            alt=""
            aria-hidden="true"
            className="home-sticker"
            src={home.sticker}
          />
          <p className="home-kicker">{home.kicker}</p>
          <h1>
            <span className="home-heading-type">{home.greeting} <span className="home-name">{home.name}</span></span>{" "}
            <img
              alt=""
              aria-hidden="true"
              className="home-penguin-icon"
              src={home.penguinIcon}
            />
            <span aria-hidden="true" className="home-heading-cursor" />
          </h1>
          <ul className="quick-facts">
            {home.facts.map((fact) => (
              <li key={fact.linkLabel}>
                <span aria-hidden="true">✦</span> {fact.text}{" "}
                <span className="hand-link">{fact.linkLabel}</span>
              </li>
            ))}
          </ul>
          <div className="home-actions">
            {home.actions.map((action) => (
              <Link
                className={`text-button${action.primary ? " primary" : ""}`}
                href={action.href}
                key={action.href}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
