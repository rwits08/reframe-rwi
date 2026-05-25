"use client";

import { EditRecipe } from "@/lib/types";
import { Film } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  recipe: EditRecipe;
  onChange: (patch: Partial<EditRecipe>) => void;
}

const FORMAT_OPTIONS = [
  { id: "mp4", label: "MP4", description: "Best compatibility, smaller file size" },
  { id: "webm", label: "WebM", description: "Open format, optimized for web" },
  { id: "mkv", label: "MKV", description: "Container, maximum quality" },
  { id: "gif", label: "GIF", description: "Animated image — keep clips under 10 s" },
] as const;

export default function FormatSelector({ recipe, onChange }: Props) {
  return (
    <div>
     <div className="flex items-center gap-2 mb-4">
  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-film-50 border border-film-200">
    <Film size={12} className="text-film-600" />
  </div>

  <div>
    <h3 className="text-sm font-semibold text-[var(--text)]">
      Output Format
    </h3>

    <p className="text-xs text-[var(--muted)]">
      Choose your export file type
    </p>
  </div>
</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {FORMAT_OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange({ format: option.id as "mp4" | "webm" | "mkv" | "gif" })}
            aria-label={`Select ${option.label} format`}
            aria-pressed={recipe.format === option.id}
            className={cn(
  "relative px-4 py-3 rounded-xl border transition-all duration-200",
  "text-sm font-heading font-semibold tracking-wide",
  "shadow-sm hover:shadow-md hover:-translate-y-0.5",
  recipe.format === option.id
    ? "border-film-600 bg-film-50 text-film-700 shadow-md"
    : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-film-400 hover:bg-film-50/40"
)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-[var(--muted)] mt-3 leading-relaxed">
        {FORMAT_OPTIONS.find((o) => o.id === recipe.format)?.description}
      </p>
    </div>
  );
}