import Link from "next/link";
import { ContactContent } from "@/skeleton/home";
import { SectionFrame } from "./SectionFrame";

interface ContactSectionProps {
  contact: ContactContent;
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <SectionFrame title="Connect">
      <div className="flex flex-col gap-4 text-black">
        <p className="text-sm uppercase tracking-[0.2em]">
          Email me at{" "}
          <Link
            className="transition-colors hover:underline"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </Link>
        </p>
        <ul className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
          {contact.socials.map((social) => (
            <li key={social.href}>
              <Link
                href={social.href}
                className="border border-black px-3 py-2 transition-colors hover:bg-black hover:text-white"
              >
                {social.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionFrame>
  );
}
