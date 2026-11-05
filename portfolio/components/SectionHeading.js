import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </Reveal>
  );
}
