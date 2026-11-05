import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section border-t border-line">
      <div className="container-page">
        <SectionHeading
          id="skills-heading"
          eyebrow="02 / Skills"
          title="Technologies I Work With"
          description="The tools I use to build websites, grouped by purpose."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map(({ title, icon: Icon, skills }, i) => (
            <Reveal
              key={title}
              as="article"
              delay={i * 80}
              className="rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent/60"
            >
              <span className="mb-5 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mb-4 text-lg font-semibold">{title}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-muted"
                  >
                    {skill}
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
