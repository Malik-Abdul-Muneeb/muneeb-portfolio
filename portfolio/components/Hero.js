import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import Button from "./Button";
import GitHubIcon from "./GitHubIcon";
import CodeCard from "./CodeCard";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Subtle grid decoration, fades out towards the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(#273244_1px,transparent_1px),linear-gradient(90deg,#273244_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Frontend Developer · {siteConfig.location}
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building Digital Experiences That Help{" "}
            <span className="text-accent">Businesses Grow.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m {siteConfig.name}, a frontend developer focused on building modern,
            responsive and user-friendly websites using React, Next.js and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              View My Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="secondary">
              Let&apos;s Talk
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="rounded-lg border border-line p-2.5 text-muted transition hover:border-accent hover:text-accent"
            >
              <GitHubIcon />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send an email"
              className="rounded-lg border border-line p-2.5 text-muted transition hover:border-accent hover:text-accent"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <CodeCard />
      </div>
    </section>
  );
}
