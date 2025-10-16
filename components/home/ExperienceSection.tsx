import { ExperienceEntry } from "@/skeleton/home";
import { SectionFrame } from "./SectionFrame";

interface ExperienceSectionProps {
  experience: ExperienceEntry[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <SectionFrame title="Experience">
      <div className="flex flex-col gap-6">
        {experience.map((entry) => (
          <article
            key={`${entry.company}-${entry.role}`}
            className="border border-black px-4 py-4 md:px-6 md:py-6"
          >
            <header className="flex flex-col gap-1 text-black">
              <p className="text-xs uppercase tracking-[0.3em]">
                {entry.period}
              </p>
              <h3 className="text-lg font-medium uppercase tracking-[0.2em]">
                {entry.role}
              </h3>
              <p className="text-sm uppercase tracking-[0.2em]">
                {entry.company}
              </p>
            </header>
            <p className="mt-4 text-sm leading-relaxed text-black">
              {entry.focus}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-black">
              {entry.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="px-3 py-2 leading-relaxed font-mono font-semibold bg-zinc-100 text-gray-800"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
