import Image from "next/image";
import Link from "next/link";
import { SectionFrame } from "./SectionFrame";
import { ProjectInterface } from "@/skeleton/home";

interface ProjectsSectionProps {
  projects: ProjectInterface[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionFrame title="Selected Work">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col border border-black bg-white"
          >
            <div className="relative aspect-video w-full border-b border-black bg-black">
              {project.img_url ? (
                <Image
                  src={project.img_url}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.3em] text-white">
                  Preview Coming Soon
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-between px-5 py-5">
              <div className="flex flex-col gap-3">
                <header className="flex flex-col gap-1 text-black">
                  <h3 className="text-base font-semibold uppercase tracking-[0.2em]">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em]">
                    {project.stack.join(" • ")}
                  </p>
                </header>
                <p className="text-sm leading-relaxed text-black">
                  {project.description}
                </p>
              </div>
              <footer className="mt-4">
                <Link
                  href={project.url}
                  className="inline-flex border border-black px-3 py-2 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-white"
                >
                  View Project
                </Link>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
