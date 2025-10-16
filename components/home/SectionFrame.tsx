import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionFrameProps {
  title?: string;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
}

export function SectionFrame({
  title,
  children,
  className,
  footer,
}: SectionFrameProps) {
  return (
    <section
      className={cn(
        "border-2 border-black bg-white px-6 py-6 md:px-8 md:py-8",
        "flex flex-col gap-6",
        className,
      )}
    >
      {title ? (
        <header className="flex items-center justify-between border-b border-black pb-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-black">
            {title}
          </h2>
        </header>
      ) : null}
      <div className="text-black">{children}</div>
      {footer ? <footer className="pt-4">{footer}</footer> : null}
    </section>
  );
}
