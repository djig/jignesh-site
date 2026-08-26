import { person } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-page flex-col items-start justify-between gap-3 text-sm text-dim md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
        <p>Foster City, CA</p>
      </div>
    </footer>
  );
}
