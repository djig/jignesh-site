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
  title: "For Managers — Jignesh Dhamecha",
  robots: { index: false, follow: false },
};

const card =
  "rounded-2xl border b-line bg-card p-5 transition-transform duration-300 hover:-translate-y-0.5";

export default function ManagersPage() {
  return (
    <ThemeScope variant="v1" defaultMode="dark">
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-6 md:px-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          {/* Intro */}
          <section className={`${card} md:col-span-8`} aria-label="Intro">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] t-dim">
              {person.location} / Senior Frontend / Agentic UI
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.25rem)] font-medium leading-[0.95] tracking-tightest t-tx">
              {person.first} {person.last}
              <span className="t-acc">.</span>
            </h1>
            <p className="mt-4 max-w-xl font-display text-lg italic leading-snug t-mut md:text-xl">
              {person.positioning}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`mailto:${person.email}`}
                className="rounded-full bg-acc px-4 py-2 text-[13px] font-medium text-[color:var(--bg)] transition-opacity hover:opacity-85"
              >
                Email me
              </a>
              <a
                href="/resume.pdf"
                className="rounded-full border b-line px-4 py-2 text-[13px] t-mut transition-colors hover:t-tx"
              >
                Resume PDF
              </a>
            </div>
          </section>

          {/* Now */}
          <section className={`${card} md:col-span-4`} aria-label="Now">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] t-dim">
              Now
            </p>
            <p className="mt-3 font-display text-xl font-medium t-tx">
              {experience[0].company}
            </p>
            <p className="mt-1 text-[13px] t-mut">{experience[0].title}</p>
            <p className="mt-1 font-mono text-[11px] tabular-nums t-dim">
              {experience[0].dates} · {experience[0].place}
            </p>
            <p className="mt-4 border-t b-line pt-4 text-[13px] leading-relaxed t-mut">
              {person.summary}
            </p>
          </section>

          {/* Work cards */}
          {cases.map((item) => (
            <article
              key={item.index}
              className={`${card} group md:col-span-6`}
              aria-label={item.title}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl font-medium tracking-tightest t-tx transition-colors group-hover:t-acc">
                  {item.title}
                </h2>
                <span className="font-mono text-[11px] tabular-nums t-dim">
                  {item.index}
                </span>
              </div>
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] t-acc">
                {item.subtitle}
              </p>
              <p className="mt-2 text-xs t-dim">
                {item.role} · {item.company}
                {item.place ? ` · ${item.place}` : ""} · {item.dates}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed t-mut line-clamp-3">
                {item.built}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border b-line px-2 py-0.5 font-mono text-[10px] t-mut"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* Experience */}
          <section className={`${card} md:col-span-7`} aria-label="Experience">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] t-dim">
              Experience
            </p>
            <ol className="mt-3">
              {experience.map((job) => (
                <li
                  key={job.company + job.dates}
                  className="flex items-baseline justify-between gap-4 border-b b-line py-2.5 last:border-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium t-tx">
                      {job.company}
                    </p>
                    {job.title && (
                      <p className="truncate text-xs t-mut">{job.title}</p>
                    )}
                  </div>
                  <p className="shrink-0 font-mono text-[11px] tabular-nums t-dim">
                    {job.dates}
                  </p>
                </li>
              ))}
              {earlier.map((job) => (
                <li
                  key={job.company}
                  className="flex items-baseline justify-between gap-4 border-b b-line py-2.5 last:border-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm t-mut">{job.company}</p>
                    <p className="truncate text-xs t-dim">{job.summary}</p>
                  </div>
                  <p className="shrink-0 font-mono text-[11px] tabular-nums t-dim">
                    {job.dates}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Skills + credentials column */}
          <div className="flex flex-col gap-3 md:col-span-5">
            <section className={card} aria-label="Skills">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] t-dim">
                Skills
              </p>
              <div className="mt-3 space-y-3">
                {skills.map((group) => (
                  <div key={group.group}>
                    <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] t-acc">
                      {group.group}
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border b-line px-2 py-0.5 text-[11px] t-mut"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className={card} aria-label="Education and certification">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] t-dim">
                Education / Certification
              </p>
              <p className="mt-3 text-sm t-tx">{education.degree}</p>
              <p className="text-xs t-mut">{education.school}</p>
              <p className="mt-3 text-sm t-tx">{certification.name}</p>
              <p className="font-mono text-[11px] tabular-nums t-mut">
                {certification.date}
              </p>
            </section>
          </div>

          {/* Contact */}
          <section className={`${card} md:col-span-12`} aria-label="Contact">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <a
                href={`mailto:${person.email}`}
                className="font-display text-2xl font-medium tracking-tightest t-tx transition-colors hover:t-acc md:text-4xl"
              >
                {person.email}
              </a>
              <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs">
                <a href={person.phoneHref} className="t-mut hover:t-acc">
                  {person.phone}
                </a>
                <a href={person.site} className="t-mut hover:t-acc">
                  {person.siteLabel}
                </a>
                <a href="/resume.pdf" className="t-mut hover:t-acc">
                  Resume PDF
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <VariantSwitcher current="/managers" />
    </ThemeScope>
  );
}
