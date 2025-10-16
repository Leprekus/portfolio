import { SkillGroup } from "@/skeleton/home";
import { SectionFrame } from "./SectionFrame";

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <SectionFrame title="Capabilities">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-black">
              {group.title}
            </p>
            <ul className="space-y-2 text-sm text-black">
              {group.items.map((item) => (
                <li key={item} className="border border-black px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}
