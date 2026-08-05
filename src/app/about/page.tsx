import PageIntro from "@/components/PageIntro";
import RichText from "@/components/RichText";
import SiteShell from "@/components/SiteShell";
import { about } from "@/data/about";

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="page-wrap about-page">
        <PageIntro eyebrow="a little more about me" title="nice to meet you">
          <p>The person behind the projects, pull requests, and penguin stickers.</p>
        </PageIntro>
        <div className="about-layout">
          <figure className="about-photo">
            <img alt="Anson Chan" src={about.profileImage} />
            <figcaption>hi from my corner of the internet</figcaption>
          </figure>
          <div className="about-copy">
            <p className="about-greeting">{about.greeting}</p>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}><RichText segments={paragraph} /></p>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
