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

function Prompt({ cmd }: { cmd: string }) {
  return (
    <p className="mb-3 mt-9 first:mt-0">
      <span className="t-acc">❯</span>{" "}
      <span className="font-medium t-tx">{cmd}</span>
    </p>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="t-dim">{children}</span>;
}

export default function HomePage() {
  return (
    <ThemeScope variant="v2" defaultMode="dark">
      <main className="mx-auto max-w-4xl px-4 pb-28 pt-6 font-mono text-[13px] leading-6 md:px-6">
        {/* Window chrome */}
        <div className="rounded-t-xl border b-line bg-card px-4 py-2.5">
          <div className="flex items-center gap-4">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full border b-line" />
              <span className="h-2.5 w-2.5 rounded-full border b-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-acc" />
            </span>
            <p className="text-[11px] t-dim">
              jignesh@foster-city — zsh — portfolio
            </p>
          </div>
        </div>

        <div className="rounded-b-xl border border-t-0 b-line px-4 py-6 md:px-6">
          <Prompt cmd="whoami" />
          <h1 className="text-2xl font-bold t-tx md:text-4xl">
            {person.name}
          </h1>
          <p className="mt-1 t-acc">{person.role}</p>
          <p className="mt-2 max-w-2xl t-mut">{person.positioning}</p>
          <p className="mt-2 text-[12px] t-dim">
            {person.location} ·{" "}
            <a
              href={`mailto:${person.email}`}
              className="t-acc underline underline-offset-4 hover:opacity-80"
            >
              {person.email}
            </a>{" "}
            ·{" "}
            <a
              href="/resume.pdf"
              className="t-acc underline underline-offset-4 hover:opacity-80"
            >
              resume.pdf
            </a>
          </p>

          <Prompt cmd="ls work/" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
            {cases.map((item) => (
              <a
                key={item.index}
                href={`#case-${item.index}`}
                className="t-mut transition-colors hover:t-acc"
              >
                <span className="t-dim">{item.index}_</span>
                {item.title.toLowerCase().replace(/ /g, "-")}/
              </a>
            ))}
          </div>

          {cases.map((item) => (
            <section key={item.index} id={`case-${item.index}`}>
              <Prompt
                cmd={`cat work/${item.index}_${item.title
                  .toLowerCase()
                  .replace(/ /g, "-")}.md`}
              />
              <div className="border-l-2 b-line pl-4">
                <h2 className="font-bold t-tx">
                  {item.title}{" "}
                  <span className="font-normal t-acc"># {item.subtitle}</span>
                </h2>
                <p className="text-[12px] t-dim">
                  {item.role} · {item.company}
                  {item.place ? ` · ${item.place}` : ""} · {item.dates}
                </p>
                <p className="mt-2 t-mut">
                  <Label>problem:</Label> {item.problem}
                </p>
                <p className="mt-1.5 t-mut">
                  <Label>built:</Label> {item.built}
                </p>
                <p className="mt-1.5 t-mut">
                  <Label>stack:</Label>{" "}
                  <span className="t-acc">[{item.stack.join(", ")}]</span>
                </p>
              </div>
            </section>
          ))}

          <Prompt cmd="cat experience.log" />
          <div className="space-y-4">
            {experience.map((job) => (
              <div key={job.company + job.dates}>
                <p>
                  <span className="t-dim">[{job.dates}]</span>{" "}
                  <span className="font-bold t-tx">{job.company}</span>
                  {job.title && <span className="t-mut"> — {job.title}</span>}
                  {job.place && <span className="t-dim"> · {job.place}</span>}
                </p>
                <ul className="mt-1 space-y-0.5">
                  {job.points.map((point) => (
                    <li key={point} className="pl-4 t-mut">
                      <span className="t-dim">-</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Prompt cmd="cat experience.log --before=2021" />
          <div className="space-y-1">
            {earlier.map((job) => (
              <p key={job.company}>
                <span className="t-dim">[{job.dates}]</span>{" "}
                <span className="t-tx">{job.company}</span>
                <span className="t-mut"> — {job.summary}</span>
              </p>
            ))}
          </div>

          <Prompt cmd="grep -r skills ." />
          <div className="space-y-1.5">
            {skills.map((group) => (
              <p key={group.group}>
                <span className="t-acc">{group.group.toLowerCase()}:</span>{" "}
                <span className="t-mut">{group.items.join(", ")}</span>
              </p>
            ))}
          </div>

          <Prompt cmd="cat credentials.txt" />
          <p className="t-mut">
            {education.degree} — {education.school}
          </p>
          <p className="t-mut">
            {certification.name} <span className="t-dim">({certification.date})</span>
          </p>

          <Prompt cmd="open contact" />
          <p>
            <a
              href={`mailto:${person.email}`}
              className="font-bold t-acc underline underline-offset-4 hover:opacity-80"
            >
              {person.email}
            </a>
          </p>
          <p className="mt-1 t-mut">
            <a href={person.phoneHref} className="hover:t-acc">
              {person.phone}
            </a>{" "}
            ·{" "}
            <a href={person.site} className="hover:t-acc">
              {person.siteLabel}
            </a>{" "}
            ·{" "}
            <a href="/resume.pdf" className="hover:t-acc">
              resume.pdf
            </a>
          </p>

          <p className="mt-8">
            <span className="t-acc">❯</span>{" "}
            <span className="cursor-blink inline-block h-4 w-2 translate-y-0.5 bg-acc" />
          </p>
        </div>
      </main>
      <VariantSwitcher current="/" />
    </ThemeScope>
  );
}
