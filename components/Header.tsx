"use client";

import { useState } from "react";
import { nav, person } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-5 py-4 md:px-8">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-ink"
          aria-label={`${person.name}, home`}
        >
          {person.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[13px] text-mute hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${person.email}`}
          className="hidden text-[13px] text-mute hover:text-gold md:inline"
        >
          Email
        </a>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="font-display text-lg leading-none">
            {open ? "×" : "☰"}
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-white/[0.08] px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 font-display text-lg text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${person.email}`}
                className="block py-2 text-mute"
                onClick={() => setOpen(false)}
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
