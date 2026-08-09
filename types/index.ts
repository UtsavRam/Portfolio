export type ProjectStatus = "live" | "private" | "demo-only";

export type ProjectChallenge = {
  problem: string;
  solution: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  role: string;
  duration?: string;
  technologies: string[];
  features: string[];
  challenges?: ProjectChallenge[];
  screenshots: string[];
  demoVideo?: string;
  githubUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
  architecture?: string;
  results?: string[];
  featured: boolean;
};

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "State Management"
  | "Auth & APIs"
  | "Tools";

export type Skill = {
  name: string;
  category: SkillCategory;
  iconName: string;
  level?: "Expert" | "Advanced" | "Proficient";
  description?: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  location?: string;
  type: string; // e.g. "Full-time" | "Contract" | "Freelance"
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  email: string;
  twitter?: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  headline: string;
  bio: string;
  url: string;
  location: string;
  availability: string;
  socialLinks: SocialLinks;
  resumeUrl: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
};

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  hp_website?: string; // Honeypot field
};
