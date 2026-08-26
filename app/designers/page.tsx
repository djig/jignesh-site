import type { Metadata } from "next";
import {
  cases,
  certification,
  earlier,
  education,
  experience,
  person,
  skills,
} from "@/lib/data";
import { ThemeScope } from "@/components/variants/ThemeScope";
import { VariantSwitcher } from "@/components/variants/VariantSwitcher";

export const metadata: Metadata = {
  title: "For Designers — Jignesh Dhamecha",
  robots: { index: false, follow: false },
};

function Rule() {
  return <div className="h-px w-full border-t b-line" aria-hidden="true" />;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.3em] t-acc">
      {children}
    </p>
  );
}

export default function DesignersPage() {
  return (
    <ThemeScope variant="v3" defaultMode="light">
      <main className="mx-auto max-w-5xl px-5 pb-28 pt-8 md:px-8">
        {/* Masthead */}
        <header className="border-b-2 pb-4 b-line">
          <div className="flex flex-wrap items-baseline justify-between gap-4 pr-12">
            <p className="font-display text-lg font-medium italic t-tx">
              {person.name}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] t-dim">
              {person.location} — Est. 2006 in production
            </p>
          </div>
        </header>

        {/* Hero */}
        <section className="grid gap-8 border-b b-line py-10 md:grid-cols-[2fr_1fr] md:py-14">
          <div>
            <h1 className="font-display text-[clamp(2.5rem,6.5vw,5rem)] font-medium leading-[0.98] tracking-tightest t-tx">
              Fourteen years of product UI —{" "}
              <em className="t-acc">now shipping agentic and generative interfaces.</em>
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-2 text-sm t-mut md:border-l md:b-line md:pl-8">
            <p>{person.role}</p>
            <p>
              <a
                href={`mailto:${person.email}`}
                className="t-tx underline decoration-[var(--acc)] decoration-1 underline-offset-4 hover:t-acc"
              >
                {person.email}
              </a>
            </p>
            <p>
              <a
                href="/resume.pdf"
                className="t-tx underline decoration-[var(--acc)] decoration-1 underline-offset-4 hover:t-acc"
              >
                Resume PDF
              </a>
            </p>
          </div>
        </section>

        {/* Work — dense expandable rows */}
        <section className="py-10 md:py-12" aria-labelledby="v3-work">
          <div className="mb-6 flex items-baseline justify-between">
            <h2
              id="v3-work"
              className="font-display text-3xl font-medium tracking-tightest t-tx"
            >
              Selected work
            </h2>
            <Kicker>01 — 04</Kicker>
          </div>
          {cases.map((item) => (
            <details key={item.index} className="group border-t b-line">
              <summary className="grid cursor-pointer grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-4 transition-colors hover:bg-[var(--bg2)]">
                <span className="font-display text-xl t-dim">{item.index}</span>
                <span className="min-w-0">
                  <span className="font-display text-xl font-medium tracking-tightest t-tx group-hover:t-acc md:text-2xl">
                    {item.title}
                  </span>
                  <span className="ml-3 hidden font-mono text-[10px] uppercase tracking-[0.2em] t-acc md:inline">
                    {item.subtitle}
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tabular-nums t-dim">
                    {item.dates}
                  </span>
                  <span
                    className="t-acc transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="grid gap-6 pb-6 pl-0 md:grid-cols-3 md:pl-[3.5rem]">
                <div>
                  <Kicker>Problem</Kicker>
                  <p className="mt-2 text-sm leading-relaxed t-mut">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <Kicker>Built</Kicker>
                  <p className="mt-2 text-sm leading-relaxed t-mut">
                    {item.built}
                  </p>
                </div>
                <div>
                  <Kicker>Role / Stack</Kicker>
                  <p className="mt-2 text-sm t-mut">
                    {item.role} · {item.company}
                    {item.place ? ` · ${item.place}` : ""}
                  </p>
                  <p className="mt-2 text-sm t-dim">{item.stack.join(" · ")}</p>
                </div>
              </div>
            </details>
          ))}
          <Rule />
        </section>

        {/* Experience — two columns */}
        <section className="py-8" aria-labelledby="v3-exp">
          <div className="mb-6 flex items-baseline justify-between">
            <h2
              id="v3-exp"
              className="font-display text-3xl font-medium tracking-tightest t-tx"
            >
              Experience
            </h2>
            <Kicker>2006 — Present</Kicker>
          </div>
          <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
            {experience.map((job) => (
              <article key={job.company + job.dates} className="border-t b-line pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-medium t-tx">
                    {job.company}
                  </h3>
                  <p className="font-mono text-[11px] tabular-nums t-dim">
                    {job.dates}
                  </p>
                </div>
                {job.title && <p className="text-xs t-mut">{job.title}</p>}
                <ul className="mt-2.5 space-y-1.5">
                  {job.points.map((point) => (
                    <li key={point} className="text-[13px] leading-relaxed t-mut">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 border-t b-line pt-4">
            <Kicker>Earlier — 2006–2021</Kicker>
            <div className="mt-3 grid gap-x-12 gap-y-2 md:grid-cols-2">
              {earlier.map((job) => (
                <p key={job.company} className="text-[13px] t-mut">
                  <span className="font-mono text-[11px] tabular-nums t-dim">
                    {job.dates}
                  </span>{" "}
                  <span className="font-medium t-tx">{job.company}</span> —{" "}
                  {job.summary}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Skills + credentials, print-style index */}
        <section className="border-t-2 py-8 b-line" aria-labelledby="v3-skills">
          <h2 id="v3-skills" className="sr-only">
            Skills
          </h2>
          <div className="space-y-2.5">
            {skills.map((group) => (
              <p key={group.group} className="text-[13px] leading-relaxed">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-acc">
                  {group.group}
                </span>{" "}
                <span className="t-mut">— {group.items.join(", ")}</span>
              </p>
            ))}
            <p className="text-[13px] leading-relaxed">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-acc">
                Credentials
              </span>{" "}
              <span className="t-mut">
                — {education.degree}, {education.school} · {certification.name}{" "}
                ({certification.date})
              </span>
            </p>
          </div>
        </section>

        {/* Contact colophon */}
        <footer className="border-t-2 pt-8 b-line">
          <a
            href={`mailto:${person.email}`}
            className="font-display text-[clamp(1.6rem,4.5vw,3rem)] font-medium italic tracking-tightest t-tx transition-colors hover:t-acc"
          >
            {person.email}
          </a>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em]">
            <a href={person.phoneHref} className="t-mut hover:t-acc">
              {person.phone}
            </a>
            <a href={person.site} className="t-mut hover:t-acc">
              {person.siteLabel}
            </a>
            <a href="/resume.pdf" className="t-mut hover:t-acc">
              Resume PDF
            </a>
            <span className="t-dim">© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </main>
      <VariantSwitcher current="/designers" />
    </ThemeScope>
  );
}
