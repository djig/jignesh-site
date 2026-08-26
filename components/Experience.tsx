import { earlier, experience } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-5 py-24 md:px-8 md:py-36"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-page">
        <SectionHeader title="Experience" id="experience-heading" />

        <ol>
          {experience.map((job) => (
            <li
              key={job.company + job.dates}
              className="border-b border-white/[0.08] py-10 first:pt-0 last:border-0"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  {job.company}
                </h3>
                <p className="text-sm tabular-nums text-mute">{job.dates}</p>
              </div>
              {(job.title || job.place) && (
                <p className="mt-1 text-sm text-mute">
                  {job.title}
                  {job.place ? (
                    <span className="text-dim">
                      {job.title ? " · " : ""}
                      {job.place}
                    </span>
                  ) : null}
                </p>
              )}
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-mute">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <details className="group mt-4 border-t border-white/[0.08] pt-8">
          <summary className="flex cursor-pointer items-center justify-between gap-4 py-2 text-left">
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              Earlier roles
              <span className="ml-3 text-sm font-normal text-dim">2006 – 2021</span>
            </span>
            <span
              className="text-mute transition-transform group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <ol>
            {earlier.map((job) => (
              <li
                key={job.company}
                className="grid gap-1 border-b border-white/[0.06] py-5 last:border-0 md:grid-cols-[11rem_1fr] md:items-baseline md:gap-6"
              >
                <p className="text-sm tabular-nums text-mute">{job.dates}</p>
                <div>
                  <p className="font-display font-semibold text-ink">{job.company}</p>
                  <p className="text-sm text-mute">
                    {[job.title, job.place].filter(Boolean).join(" · ")}
                  </p>
                  <p className="mt-1 text-sm text-dim">{job.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  );
}
