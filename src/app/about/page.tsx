import AboutText from "@/components/AboutText";
import PageIntro from "@/components/PageIntro";
import SiteShell from "@/components/SiteShell";
import { about } from "@/data/about";

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="page-wrap about-page">
        <PageIntro eyebrow="a little more about me" title="nice to meet you" />
        <div className="about-layout">
          <div className="about-illustration" aria-hidden="true">
            <img alt="" src={about.illustration} />
          </div>
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
