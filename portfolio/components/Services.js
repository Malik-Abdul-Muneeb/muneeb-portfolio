import { Check } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section border-t border-line">
      <div className="container-page">
        <SectionHeading
          id="services-heading"
          eyebrow="04 / Services"
          title="How I Can Help"
          description="Frontend-focused services for businesses that need a clear, modern website."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.map(({ title, icon: Icon, description, points }, i) => (
            <Reveal
              key={title}
              as="article"
              delay={(i % 2) * 80}
              className="rounded-xl border border-line bg-card p-7 transition-colors hover:border-accent/60"
            >
              <span className="mb-5 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              <p className="mb-5 text-muted">{description}</p>
              <ul className="space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
