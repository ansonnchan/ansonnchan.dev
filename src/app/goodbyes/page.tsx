import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import SiteShell from "@/components/SiteShell";

export default function GoodbyesPage() {
  return (
    <SiteShell>
      <div className="page-wrap goodbye-page">
        <PageIntro eyebrow="one last page" title="before you go">
          <p>Thanks for spending a little time in my corner of the internet.</p>
        </PageIntro>

        <section className="goodbye-letter">
          <div className="letter-copy">
            <p>Hey, I’m glad you made it all the way here.</p>
            <p>I’m still early in this whole engineering journey, but I know I want to keep making software people actually use—things that make everyday life a little easier, a little better, or simply more fun.</p>
            <p>Between now and graduation, I’d like to join UBC’s symphony orchestra, keep improving my Cantonese and Mandarin, and build a lot more things I’m proud to put my name on.</p>
            <p>If something here made you curious, I’d love to hear from you.</p>
            <p className="signature">keep waddling,<br /><span>Anson</span></p>
          </div>
          <figure className="goodbye-photo">
            <video autoPlay loop muted playsInline poster="/assets/pingu/pingu_7.jpeg">
              <source src="/assets/closing/kiki.mp4" type="video/mp4" />
            </video>
            <figcaption>my favourite kind of coworker</figcaption>
          </figure>
        </section>

        <section className="goodbye-details">
          <div>
            <p className="eyebrow">a tiny to-do list</p>
            <ul className="checklist">
              <li><span>✓</span> make something useful</li>
              <li><span>✓</span> leave room for delight</li>
              <li><span>□</span> finally join the orchestra</li>
              <li><span>□</span> meet more penguins</li>
            </ul>
          </div>
          <div className="connect-block">
            <p className="eyebrow">let’s keep in touch</p>
            <a href="mailto:ananryry180@gmail.com">email me ↗</a>
            <a href="https://www.linkedin.com/in/ansonnchan" rel="noreferrer" target="_blank">linkedin ↗</a>
            <a href="https://github.com/ansonnchan" rel="noreferrer" target="_blank">github ↗</a>
            <a href="/resume" rel="noreferrer" target="_blank">résumé ↗</a>
          </div>
        </section>

        <div className="final-waddle">
          <img alt="A penguin waving goodbye" src="/assets/closing/goodbye.gif" />
          <p>Penguins may stumble, but they always get back up and waddle on.</p>
          <Link href="/">back to the beginning ↑</Link>
        </div>
      </div>
    </SiteShell>
  );
}

