export function SectionHeader({
  title,
  id,
}: {
  title: string;
  id: string;
}) {
  return (
    <div className="mb-14 md:mb-16">
      <h2
        id={id}
        className="font-display text-3xl font-semibold tracking-tightest text-ink md:text-4xl"
      >
        {title}
      </h2>
      <div className="mt-5 h-px w-full bg-white/[0.08]" aria-hidden="true" />
    </div>
  );
}
