import { MapPin, GraduationCap, Code2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const facts = [
  { icon: Code2, label: "Role", value: "Frontend Developer" },
  { icon: GraduationCap, label: "Background", value: "Computer Science student" },
  { icon: MapPin, label: "Based in", value: siteConfig.location },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section border-t border-line bg-surface">
      <div className="container-page">
        <SectionHeading id="about-heading" eyebrow="01 / About" title="A Little About Me" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m a computer science student and frontend developer passionate about
              creating useful digital experiences. I enjoy turning ideas and designs into
              functional, responsive websites.
            </p>
            <p>
              My focus is on writing clean code, creating intuitive interfaces and helping
              businesses establish their online presence.
            </p>
            <p>
              I&apos;m continuously improving my development skills through practical
              projects and hands-on learning.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="divide-y divide-line rounded-xl border border-line bg-card">
              {facts.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4 p-5">
                  <span className="rounded-lg bg-accent/10 p-2.5 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
