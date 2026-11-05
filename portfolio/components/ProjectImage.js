"use client";

import { useState } from "react";
import Image from "next/image";
import { Layers } from "lucide-react";

// Shows the screenshot if one is set and loads; otherwise a neutral placeholder.
export default function ProjectImage({ src, alt, title }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={`${title} - screenshot coming soon`}
        className="flex h-full w-full flex-col items-center justify-center gap-2 bg-surface text-muted"
      >
        <Layers className="h-8 w-8 text-line" aria-hidden="true" />
        <span className="font-mono text-xs">Screenshot coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
