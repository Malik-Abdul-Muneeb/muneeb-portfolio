import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import GitHubIcon from "./GitHubIcon";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section border-t border-line bg-surface">
      <div className="container-page">
        <SectionHeading
          id="projects-heading"
          eyebrow="03 / Projects"
          title="Selected Work"
          description="Projects I've built while learning and practising. Each one is labelled with its current status."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12">
          <Button href={siteConfig.github} variant="secondary" external>
            <GitHubIcon className="h-4 w-4" /> More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
