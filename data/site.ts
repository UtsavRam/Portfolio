import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Utsav",
  role: "Full Stack Developer",
  headline: "I build modern, scalable, and production-ready web applications with clean architecture, great UX, and reliable backend systems.",
  bio: "Passionate Full Stack Developer with 2+ years of experience engineering high-performance web applications, robust backend microservices, real-time client dashboards, and scalable databases. Specialized in modern React/Next.js architectures, TypeScript, Node.js, and MongoDB/SQL ecosystem.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://utsav.dev",
  location: "India",
  availability: "Available for opportunities",
  socialLinks: {
    github: "https://github.com/UtsavRam",
    linkedin: "https://www.linkedin.com/in/utsav-ram-70301a281/",
    email: "ramutsav702@gmail.com",
  },
  resumeUrl: "/resume/Utsav-Resume.pdf",
  stats: [
    {
      label: "Years Experience",
      value: "2+",
      description: "Hands-on full-stack development experience",
    },
    {
      label: "Major Projects",
      value: "4+",
      description: "Production & client-ready web applications",
    },
    {
      label: "Tech Stack",
      value: "Full Stack",
      description: "End-to-end frontend & backend architecture",
    },
    {
      label: "APIs & Databases",
      value: "Real-World",
      description: "REST, WebSockets & scalable DB schemas",
    },
  ],
};
