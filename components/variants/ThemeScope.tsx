"use client";

import { useEffect, useState } from "react";

export function ThemeScope({
  variant,
  defaultMode,
  children,
}: {
  variant: string;
  defaultMode: "dark" | "light";
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"dark" | "light">(defaultMode);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`theme-${variant}`);
      if (saved === "dark" || saved === "light") setMode(saved);
    } catch {}
  }, [variant]);

  const toggle = () =>
    setMode((m) => {
      const next = m === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(`theme-${variant}`, next);
      } catch {}
      return next;
    });

  return (
    <div
      data-v={variant}
      data-mode={mode}
      className="vscope min-h-screen"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} theme`}
        className="fixed right-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-full border b-line bg-card text-sm t-mut transition-colors hover:t-acc"
      >
        <span aria-hidden="true">{mode === "dark" ? "☀" : "☾"}</span>
      </button>
      {children}
    </div>
  );
}
