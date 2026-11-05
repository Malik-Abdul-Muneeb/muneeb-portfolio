import { Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import GitHubIcon from "./GitHubIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-mono text-base font-semibold">
              MUNEEB<span className="text-accent">.DEV</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Frontend developer building modern, responsive websites for businesses.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-3 text-xs uppercase tracking-wider text-muted">Navigate</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-xs uppercase tracking-wider text-muted">Connect</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
                >
                  <GitHubIcon className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
