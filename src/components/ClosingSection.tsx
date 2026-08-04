export default function ClosingSection() {
  return (
    <section
      className="closing-section responsive-section scroll-fade scroll-mt-24 px-4 sm:px-6 lg:px-8"
      id="goodbyes"
    >
      <div className="mx-auto max-w-5xl">
        <header className="closing-header relative text-center">
          <p className="handwritten-display closing-kicker">last section :(</p>
          <h2 className="closing-title hero-greeting text-emerald-700 dark:text-emerald-300">
            Bye Bye!<span aria-hidden="true"></span>
          </h2>
        </header>

        <div className="closing-copy mx-auto mt-8 max-w-3xl space-y-4 text-center text-base leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg sm:leading-8">
          <p>Thank you for stopping by my little corner of the internet. 🌸</p>
          <p>I hope you found something interesting, or at least worth your time.</p>
          <p>Take care, and keep waddling. 🐧✨</p>
        </div>

        <div className="closing-video-frame relative mx-auto mt-10">
          <img
            alt="Animated goodbye penguin"
            className="closing-video"
            src="/assets/closing/goodbye.gif"
          />
        </div>

        <p className="handwritten-display mt-20 text-center text-2xl leading-8 text-zinc-800 dark:text-zinc-100 sm:text-4xl sm:leading-tight">
          “Penguins may stumble, but they always get back up and waddle on”
        </p>
      </div>
    </section>
  );
}
