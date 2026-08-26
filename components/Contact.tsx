import { person } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 py-24 md:px-8 md:py-36"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-page">
        <SectionHeader title="Contact" id="contact-heading" />
        <p className="max-w-xl text-mute">
          Foster City, CA. Best reached by email.
        </p>
        <a
          href={`mailto:${person.email}`}
          className="mt-8 block font-display text-[clamp(1.6rem,5vw,3.4rem)] font-semibold tracking-tight text-ink transition-colors hover:text-gold"
        >
          {person.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a
            href={person.phoneHref}
            className="text-mute transition-colors hover:text-gold"
          >
            {person.phone}
          </a>
          <a
            href={person.site}
            className="text-mute transition-colors hover:text-gold"
          >
            {person.siteLabel}
          </a>
          <a
            href="/resume.pdf"
            className="text-mute transition-colors hover:text-gold"
          >
            Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}
