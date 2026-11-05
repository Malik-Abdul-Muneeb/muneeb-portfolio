"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Highlight the link of the section currently in the middle of the screen.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkClass = (id) =>
    `rounded-md px-3 py-2 text-sm transition-colors ${
      activeId === id ? "text-ink" : "text-muted hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95">
      <nav
        aria-label="Main navigation"
        className="container-page flex h-16 items-center justify-between"
      >
        <a href="#home" className="font-mono text-base font-semibold tracking-tight">
          MUNEEB<span className="text-accent">.DEV</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={linkClass(link.href.slice(1))}
                aria-current={activeId === link.href.slice(1) ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-accent-hover active:scale-[0.98] md:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu: height animates via grid rows */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden" inert={!open}>
          <ul className="container-page flex flex-col gap-1 border-t border-line pb-5 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block ${linkClass(link.href.slice(1))} py-3 text-base`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-white"
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
