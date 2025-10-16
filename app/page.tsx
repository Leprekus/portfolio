import {
  homeContent,
} from "@/skeleton/home";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  const { hero, highlights, skills, experience, projects, contact } =
    homeContent;

  return (
    <main className="min-h-screen bg-white font-sans text-black">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-12 md:px-10 md:py-16">
        <HeroSection hero={hero} highlights={highlights} />
        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
        </div>
        <ExperienceSection experience={experience} />
        <ContactSection contact={contact} />
      </div>
    </main>
  );
}
