import { ExternalLink } from "lucide-react";
import GitHubIcon from "./GitHubIcon";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";

const statusStyles = {
  Completed: "border-emerald-500/30 text-emerald-400",
  "In Progress": "border-amber-500/30 text-amber-400",
  "Academic Project": "border-accent/30 text-accent",
};

const linkClass =
  "inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent";

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, tech, status, image, imageAlt, liveUrl, repoUrl } = project;

  return (
    <Reveal
      as="article"
      delay={(index % 3) * 80}
      className="flex flex-col overflow-hidden rounded-xl border border-line bg-card transition duration-300 hover:-translate-y-1 hover:border-accent/60"
    >
      <div className="relative aspect-[16/10] border-b border-line">
        <ProjectImage src={image} alt={imageAlt || title} title={title} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs ${
              statusStyles[status] || "border-line text-muted"
            }`}
          >
            {status}
          </span>
        </div>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mb-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-xs text-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons only render when a real link has been provided */}
        {(liveUrl || repoUrl) && (
          <div className="flex gap-5 border-t border-line pt-4">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live demo
                <span className="sr-only"> of {title} (opens in a new tab)</span>
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <GitHubIcon className="h-4 w-4" />
                Source code
                <span className="sr-only"> of {title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}
