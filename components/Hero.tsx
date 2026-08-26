import { person } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-visible px-5 pb-24 pt-16 md:px-8 md:pb-36 md:pt-24"
      aria-labelledby="hero-name"
    >
      <div className="relative mx-auto max-w-page overflow-visible">
        <p className="rise-1 mb-8 text-sm text-mute">
          {person.location}
          <span className="mx-2.5 text-dim">·</span>
          Senior Frontend
          <span className="mx-2.5 text-dim">·</span>
          Agentic UI
        </p>

        <h1
          id="hero-name"
          className="rise-2 overflow-visible break-words font-display text-[clamp(2.75rem,7.2vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-ink"
        >
          {person.first}
          <br />
          <span className="text-ink">{person.last}</span>
          <span className="text-gold">.</span>
        </h1>

        <div className="mt-8 h-px w-12 bg-gold md:mt-10" aria-hidden="true" />

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute md:text-xl">
          {person.positioning}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a
            href={`mailto:${person.email}`}
            className="text-ink underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            Email
          </a>
          <a href="/resume.pdf" className="text-mute hover:text-ink">
            Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}
