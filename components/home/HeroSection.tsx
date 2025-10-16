import Link from "next/link";
import { HeroContent, Highlight } from "@/skeleton/home";
import { SectionFrame } from "./SectionFrame";

interface HeroSectionProps {
  hero: HeroContent;
  highlights: Highlight[];
}

export function HeroSection({ hero, highlights }: HeroSectionProps) {
  return (
    <SectionFrame>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-black">
            <span className="border border-black px-3 py-1">
              {hero.location}
            </span>
            <span className="border border-black px-3 py-1">
              {hero.availability}
            </span>
          </div>
          <div className="space-y-2 text-black">
            <p className="text-xs uppercase tracking-[0.3em] text-black">
              {hero.tagline}
            </p>
            <h1 className="text-4xl font-semibold leading-none md:text-5xl">
              {hero.name}
            </h1>
            <p className="text-lg uppercase tracking-[0.2em]">
              {hero.title}
            </p>
          </div>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed md:text-base">
          {hero.summary}
        </p>

        <div className="flex flex-wrap gap-3">
          {hero.actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="h-10 flex items-center justify-center border border-black px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-white"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>

      {highlights.length ? (
        <div className="pt-4 grid gap-3 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="border border-black px-4 py-3 text-center"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-black">
                {highlight.label}
              </p>
              <p className="mt-2 text-sm font-medium text-black">
                {highlight.value}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </SectionFrame>
  );
}
