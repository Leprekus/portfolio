export interface Link {
  label: string;
  href: string;
}

export interface HeroContent {
  name: string;
  title: string;
  tagline: string;
  location: string;
  availability: string;
  summary: string;
  actions: Link[];
}

export interface Highlight {
  label: string;
  value: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  focus: string;
  achievements: string[];
}

export interface ProjectInterface {
  title: string;
  description: string;
  img_url: string;
  url: string;
  stack: string[];
}

export interface ContactContent {
  email: string;
  socials: Link[];
}

export interface HomeContent {
  hero: HeroContent;
  highlights: Highlight[];
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  projects: ProjectInterface[];
  contact: ContactContent;
}

export const homeContent: HomeContent = {
  hero: {
    name: "Raul Rodriguez",
    title: "Product-Focused Software Engineer",
    tagline: "Ensuring every written line of code is secure and robust since 2023",
    location: "Victoria, BC",
    availability: "Open to systems roles, Q1 2026",
    summary:
        "Iterating with passionate teams to deliver fast, memory safe systems, with Rust and C", 
    actions: [
      { label: "View Resume", href: "/resume.pdf" },
      { label: "Email Me", href: "mailto:hello@raul.rc02@gmail.com" },
    ],
  },
  highlights: [
    { label: "Experience", value: "Intern at Go Up Investments" },
    { label: "Core Stack", value: "Rust • C • Next.js • TypeScript" },
    { label: "Focus", value: "Systems & Networks" },
  ],
  skills: [
    {
      title: "Systems",
      items: ["Rust", "C",],
    },
    {
      title: "Network",
      items: ["TCP", "UDP", "HTTPS"],
    },
    {
      title: "Collaboration",
      items: ["Technical Discovery", "Mentorship", "Async-first workflows"],
    },
  ],
  experience: [
    {
      role: "Big Data Programmer",
      company: "Go Up Investments",
      period: "2025 — Present",
      focus: "Scaled a design system powering the backend to process gigabytes of stock tickers per second",
      achievements: [
        "Devised and implemented a backend architechture processing to 3.7gb of information under 2 seconds",
        "Architechted the backend with infrastructure as code principles to ensure replicability across systems",
      ],
    },
  ],
  projects: [
    {
      title: "Mite! 「見て!」 — Algorithm Visualizer",
      description:
        "Interactive graph canvas with step-through playback for DFS, BFS, and Dijkstra. Focused on clarity for interviews and classroom demos.",
      img_url: "",
      url: "https://mite.app",
      stack: ["Next.js", "TypeScript", "D3.js"],
    },
  ],
  contact: {
    email: "raul.rc02@gmail.com",
    socials: [
      { label: "GitHub", href: "https://github.com/leprekus" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/leprekus" },
    ],
  },
};

export const projects = homeContent.projects;
