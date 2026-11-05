import { siteConfig } from "@/data/site";

// Decorative code-style card. It only states facts already on the site.
const lines = [
  [["text-muted", "const "], ["text-accent", "developer"], ["text-muted", " = {"]],
  [["pl-5 text-muted", "name: "], ["text-ink", `"${siteConfig.name}",`]],
  [["pl-5 text-muted", "role: "], ["text-ink", '"Frontend Developer",']],
  [["pl-5 text-muted", "stack: "], ["text-ink", '["React", "Next.js", "Tailwind"],']],
  [["pl-5 text-muted", "location: "], ["text-ink", `"${siteConfig.location}",`]],
  [["pl-5 text-muted", "available: "], ["text-accent", "true"], ["text-muted", ","]],
  [["text-muted", "};"]],
];

export default function CodeCard() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-line bg-card shadow-xl shadow-black/30 lg:max-w-none"
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 font-mono text-xs text-muted">developer.js</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
        <code>
          {lines.map((parts, i) => (
            <div key={i} className="flex gap-4 whitespace-pre">
              <span className="w-4 select-none text-right text-line">{i + 1}</span>
              <span>
                {parts.map(([cls, text], j) => (
                  <span key={j} className={cls}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
