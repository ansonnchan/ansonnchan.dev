import Image from "next/image";

export default function GettingFirstCoop() {
  return (
    <article className="v2-blog-post">
      <header className="v2-blog-post-intro">
        <p className="v2-blog-eyebrow">career notes</p>
        <h1>Getting the First Co-op</h1>
        <p className="v2-blog-lead">
          Co-op is a college program where students alternate academic terms with full-time, paid
          work in their career field. Think of it as a free trial of full-time employment—except the
          trial can last 4, 8, 12, or even 16 months, and you actually get paid. Each individual work
          term is usually three to four months long.
        </p>
        <p>
          Co-op is not unique to UBC. The University of Waterloo, the University of Toronto, Simon
          Fraser University, and many schools outside Canada run their own programs. How is it
          different from an internship? In practice, <strong className="v2-blog-highlight">not by much</strong>.
          A co-op is simply tied to a formal university program, while an internship can exist entirely
          outside one.
        </p>
      </header>

      <nav className="v2-blog-toc" aria-label="Post sections">
        <ul>
          <li><a href="#ubc-engineering-coop">UBC Engineering Co-op: how it works, pros and cons</a></li>
          <li><a href="#job-search-statistics">Job Search Statistics</a></li>
          <li><a href="#my-experience">My Experience</a></li>
          <li><a href="#tips">Tips</a></li>
        </ul>
      </nav>

      <div className="v2-coop-sections">
        <section className="v2-coop-section" id="ubc-engineering-coop" aria-labelledby="coop-program-heading">
          <h2 id="coop-program-heading">UBC Engineering Co-op</h2>

          <div className="v2-coop-copy">
            <h3>How it works</h3>
            <p>
              The program provides a private job board where companies from Canada and the United
              States post internship roles. Roughly half of the opportunities are local, while the
              other half are elsewhere in Canada. A smaller number are based in the United States or
              other countries—I&apos;ve seen postings in New Zealand and Australia. During the peak
              January-to-March recruiting season, there are usually around
              <strong className="v2-blog-highlight"> 200 active postings</strong> at a time.
            </p>
          </div>

          <div className="v2-coop-pros-cons">
            <div>
              <h3>Pros</h3>
              <ul>
                <li>
                  Many local employers hire co-op students exclusively through the university job
                  board, including some roles that never appear publicly.
                </li>
                <li>
                  The Engineering Co-op office handles much of the employer-side administration and
                  provides support if workplace issues come up.
                </li>
                <li>
                  Every student has an advisor, plus access to résumé and cover-letter reviews,
                  one-on-one appointments, employer networking sessions, and career fairs.
                </li>
              </ul>
            </div>
            <div>
              <h3>Cons</h3>
              <ul>
                <li>
                  The main drawback is cost: joining and workshop fees total roughly
                  <strong> $200</strong>, followed by approximately <strong>$900 per work term</strong>.
                </li>
                <li>
                  If you do not use the advising, workshops, employer network, or job board, the
                  program may not feel very different from finding internships independently.
                </li>
              </ul>
            </div>
          </div>

          <blockquote className="v2-coop-quote">
            <p>
              <strong>One easy-to-miss detail:</strong> you need at least three approved work terms to
              graduate with the Co-op designation. If you find an internship outside the program and
              want it to count, the Co-op office still needs to approve it—and the roughly $900
              work-term fee still applies, even when they did not help you find the role.
            </p>
          </blockquote>
        </section>

        <section className="v2-coop-section" id="job-search-statistics" aria-labelledby="statistics-heading">
          <h2 id="statistics-heading">Job Search Statistics</h2>
          <dl className="v2-job-statistics">
            <div>
              <dt>Job applications</dt>
              <dd>~300 <span>(I stopped counting after 200)</span></dd>
            </div>
            <div><dt>Interviews</dt><dd>4</dd></div>
            <div><dt>Offers</dt><dd>2</dd></div>
            <div><dt>Search started</dt><dd><time dateTime="2025-12-22">December 22, 2025</time></dd></div>
            <div><dt>Search ended</dt><dd><time dateTime="2026-05-28">May 28, 2026</time></dd></div>
          </dl>
        </section>

        <section className="v2-coop-section" id="my-experience" aria-labelledby="experience-heading">
          <h2 id="experience-heading">My Experience</h2>
          <div className="v2-experience-story">
            <h3>Starting the search</h3>
            <p>
              On December 22, 2025—roughly when my last exam ended—I started my first serious
              internship search. I did not really know what to expect, but I knew what I wanted:
              software roles, and software engineering in particular. Computer engineering can lead
              toward hardware, software, embedded systems, or some mixture of the three. I had already
              learned that hardware was not for me.
            </p>
            <p>
              I also knew the market was rough, especially for computer science students. As a
              second-year student without prior industry experience, landing a first co-op felt close
              to impossible—especially without referrals. All roughly 300 of my applications were
              cold applications. I would not recommend relying on that approach: referrals help much
              more than many students realize, and getting them usually starts with networking. That
              is one place where the Co-op program&apos;s employer events can genuinely help.
            </p>

            <figure className="v2-blog-figure">
              <Image
                src="/assets/blogs/first%20co-op/rejections.png"
                alt="An inbox filled with rejection emails from internship applications"
                width={2294}
                height={1256}
                sizes="(max-width: 720px) 100vw, 720px"
              />
              <figcaption>A small sample of the “unfortunately” collection.</figcaption>
            </figure>

            <h3>The application routine</h3>
            <p>
              At first, I spent a lot of time on every application, tailoring both my résumé and a
              cover letter. After the first few, I stopped: it took too long, and speed and timing
              matter in this market. Companies on average can
              receive hundreds or thousands of applications within hours. By the time a recruiter has
              enough strong candidates to shortlist, they may never even reach your résumé.
            </p>
            <p>
              From day one, I aimed to submit five applications every day. I usually had at least two
              one-hour gaps between classes, so I used those breaks to apply, preferably in the morning
              while I still had energy. It was repetitive, but consistency kept the search moving.
            </p>

            <h3>Interview one: a Richmond startup</h3>
            <p>
              My first interview came after roughly 50 to 100 applications. It was with a small startup
              in Richmond, and the Co-op coordinator emailed me to book a time that same week. With only
              four days to prepare, I put schoolwork on pause, opened <em>Cracking the Coding
              Interview</em>, and worked through some easy LeetCode problems.
            </p>
            <p>
              Because it was my first technical interview, I had no idea what to expect. I overprepared
              for behavioural questions, but the interview was mostly technical. One question asked me
              to write a program that calculates the angle between two clock hands from a digital time.
              I did not answer it well, and I did not get the job. I remember feeling pretty crushed,
              but there was nothing to do except keep going.
            </p>

            <h3>Interview two: an unexpected offer</h3>
            <p>
              My second interview arrived near the end of March with a small company in Adelaide,
              Australia, where I used to live. An old high-school friend helped put me in contact with
              them. This time I prepared for LeetCode-style questions, only for the interview to become
              a technical discussion about React. At that point, I barely knew more than a couple of
              hooks, so I felt completely out of my depth.
            </p>
            <p>
              Still, I must have come across as eager and willing to learn because they extended an
              offer. Unfortunately, they needed me to start in early April while I was still in classes
              and preparing for exams, so I had to decline. We stayed in touch, though—and maintaining
              those relationships matters.
            </p>

            <h3>Interviews three and four: ScalePad</h3>
            <p>
              My third and fourth interviews were both with ScalePad, where I work now (as of the time
              of writing). Fun fact: I actually missed the deadline to book the initial recruiter call.
              Luckily, the team was willing to reschedule it—shout-out to Mia for giving me a second
              chance.
            </p>
            <p>
              The recruiter call was a fairly standard behavioural and culture-fit conversation. We
              talked about my background, a few of my projects, how I work with other people, and how
              I use AI while building software. It was much more conversational than technical and
              gave both sides a chance to see whether the role felt like a good fit.
            </p>
            <p>
              The second round was a one-on-one with my future manager and a deeper discussion about
              my projects. Instead of asking me to solve an isolated coding problem, he wanted to
              understand the decisions behind what I had built: how I structured each project, why I
              chose one approach over another, which trade-offs I considered, and what I would change
              if I built it again. Explaining those decisions under pressure was nerve-racking,
              especially when a follow-up question pushed beyond the parts I had rehearsed. In
              hindsight, it was also a much better test of how I actually think about software.
            </p>
            <p>
              Another fun fact: once that interview ended, I was so nervous that I walked out and left
              behind both my résumé and my prepared list of questions. I was stuttering, struggled to
              explain myself concisely, and finished a one-hour interview in about 40 minutes. I walked
              away convinced that it was over.
            </p>
            <blockquote className="v2-story-quote">
              <p>
                The next business day, I received the offer. The interview I thought I had blown became
                the job I accepted.
              </p>
            </blockquote>
            <p>
              The entire process—from recruiter screen, to project round, to offer—finished within one
              week. The next day, I accepted.
            </p>
          </div>
        </section>

        <section className="v2-coop-section" id="tips" aria-labelledby="tips-heading">
          <h2 id="tips-heading">Tips</h2>
          <div className="v2-tips-list">
            <article>
              <h3>Persistence beats everything</h3>
              <p>
                I kept applying until the end of May—well past the usual recruiting window, and after
                some summer internships had already started. Fewer roles were available, but there
                were also fewer students still applying. You only need one opportunity to work out.
              </p>
            </article>
            <article>
              <h3>Apply early</h3>
              <p>
                Speed matters. A posting can collect hundreds of applications within hours, so apply
                while it is still fresh instead of saving it for later. A solid application submitted
                early is often more useful than a perfect one submitted after the shortlist is full.
              </p>
            </article>
            <article>
              <h3>Referrals, referrals, referrals</h3>
              <p>
                A referral does not guarantee an interview, but it can help your application reach a
                real person. Build genuine relationships before you need something: attend employer
                events, talk to people in the field, and stay in touch.
              </p>
            </article>
            <article>
              <h3>You cannot predict the outcome</h3>
              <p>
                My ScalePad interview felt terrible, yet I received an offer the next business day.
                Other interviews can feel perfect and still end in rejection. Once an interview is
                finished, there is nothing useful to gain from replaying every sentence—learn what you
                can, then keep moving forward.
              </p>
            </article>
          </div>
        </section>
      </div>
    </article>
  );
}
