import AboutText from "@/components/AboutText";
import PageIntro from "@/components/PageIntro";
import SiteShell from "@/components/SiteShell";
import { about } from "@/data/about";

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="page-wrap about-page">
        <div className="about-heading">
          <PageIntro eyebrow="one for me, one for you ᝰ" title="noot noot!" />
          <img
            alt=""
            aria-hidden="true"
            className="about-penguin"
            src={about.illustration}
          />
        </div>
        <div className="about-layout">
          <figure className="about-portrait">
            <img
              alt="Anson standing in front of Kinkaku-ji in Kyoto"
              height="1254"
              src="/assets/pfp.png"
              width="1254"
            />
          </figure>
          <div className="about-copy">
            <p className="about-introduction"><AboutText segments={about.introduction} /></p>
            <p className="about-facts-heading">{about.factsHeading}</p>
            <ul className="about-facts">
              {about.facts.map((fact, index) => (
                <li key={index}><AboutText segments={fact} /></li>
              ))}
            </ul>
            <p className="about-build-line">{about.buildLine}</p>
            <p className="about-closing">
              {about.closing}
              <span className="about-connection-line">
                {about.connectionLead} <span>{about.connectionNote}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
