import { skills } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-5 py-24 md:px-8 md:py-36"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-page">
        <SectionHeader title="Skills" id="skills-heading" />
        <div>
          {skills.map((group) => (
            <div
              key={group.group}
              className="border-b border-white/[0.08] py-6 first:pt-0 last:border-0"
            >
              <h3 className="mb-2 font-display text-sm font-semibold tracking-tight text-ink">
                {group.group}
              </h3>
              <p className="text-sm leading-relaxed text-mute">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
