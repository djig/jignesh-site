import { cases } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 px-5 py-24 md:px-8 md:py-36"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-page">
        <SectionHeader title="Work" id="work-heading" />
        <div className="flex flex-col">
          {cases.map((item) => (
            <article
              key={item.index}
              className="border-b border-white/[0.08] py-12 first:pt-0 last:border-0 md:py-16"
            >
              <p className="mb-4 font-display text-[11px] tabular-nums text-white/20">
                {item.index}
              </p>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-1.5 text-gold">{item.subtitle}</p>
              <p className="mt-2 text-sm text-mute">
                {item.role}
                <span className="mx-2 text-dim">·</span>
                {item.company}
                {item.place ? (
                  <>
                    <span className="mx-2 text-dim">·</span>
                    {item.place}
                  </>
                ) : null}
                <span className="mx-2 text-dim">·</span>
                {item.dates}
              </p>

              <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-12">
                <div>
                  <h4 className="mb-3 text-[11px] uppercase tracking-widest text-dim">
                    Problem
                  </h4>
                  <p className="text-sm leading-relaxed text-mute">{item.problem}</p>
                </div>
                <div>
                  <h4 className="mb-3 text-[11px] uppercase tracking-widest text-dim">
                    Built
                  </h4>
                  <p className="text-sm leading-relaxed text-mute">{item.built}</p>
                </div>
                <div>
                  <h4 className="mb-3 text-[11px] uppercase tracking-widest text-dim">
                    Stack
                  </h4>
                  <p className="text-sm leading-relaxed text-mute">
                    {item.stack.join(" · ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
