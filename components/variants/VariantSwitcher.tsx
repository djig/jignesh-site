const items = [
  { href: "/", label: "Engineers" },
  { href: "/managers", label: "Managers" },
  { href: "/designers", label: "Designers" },
] as const;

export function VariantSwitcher({ current }: { current: string }) {
  return (
    <nav
      aria-label="Choose a view"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 rounded-full border b-line bg-card px-1.5 py-1 font-mono text-[11px] shadow-lg"
    >
      <span className="hidden px-2 t-dim sm:inline">For:</span>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-current={item.href === current ? "page" : undefined}
          className={
            item.href === current
              ? "rounded-full bg-acc px-2.5 py-1 font-medium text-[color:var(--bg)]"
              : "rounded-full px-2.5 py-1 t-mut transition-colors hover:t-tx"
          }
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
