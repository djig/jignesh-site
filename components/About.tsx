import { certification, education, person } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-5 py-24 md:px-8 md:py-36"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-page">
        <SectionHeader title="About" id="about-heading" />
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div>
            <p className="max-w-prose text-lg leading-relaxed text-mute">
              Frontend engineer based in {person.location}. Fourteen years
              building product UI — now focused on agentic and generative
              interfaces, from streaming notebooks to production copilot
              surfaces.
            </p>
            <p className="mt-5 max-w-prose leading-relaxed text-mute">
              Also keeps a small engineering toolkit at{" "}
              <a
                href={person.site}
                className="text-ink underline decoration-gold/30 underline-offset-4 hover:decoration-gold"
              >
                {person.siteLabel}
              </a>
              .
            </p>
          </div>
          <dl className="space-y-8 border-t border-white/[0.08] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <div>
              <dt className="text-[11px] uppercase tracking-widest text-dim">
                Education
              </dt>
              <dd className="mt-2 text-ink">{education.degree}</dd>
              <dd className="text-sm text-mute">{education.school}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-widest text-dim">
                Certification
              </dt>
              <dd className="mt-2 text-ink">{certification.name}</dd>
              <dd className="text-sm tabular-nums text-mute">{certification.date}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
