import React from "react";
import { CheckCircle2, Code2, Server, Database, Sparkles, Terminal } from "lucide-react";
import { Container } from "../layout/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/MotionContainer";
import { siteConfig } from "@/data/site";

export const AboutSection: React.FC = () => {
  const principles = [
    {
      title: "Clean Architecture",
      description: "Writing maintainable, modular, and strictly-typed code with clear separation of concerns.",
      icon: Code2,
    },
    {
      title: "Performant Backends",
      description: "Designing non-blocking REST APIs, microservices, and optimized database queries.",
      icon: Server,
    },
    {
      title: "Data Integrity",
      description: "Structuring scalable MongoDB document schemas and normalized SQL relational databases.",
      icon: Database,
    },
    {
      title: "User-Centric UX",
      description: "Crafting intuitive, accessible interfaces with dark theme aesthetics and zero unnecessary bloat.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-24 bg-dark-950 border-t border-white/10 relative">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <FadeIn direction="up">
              <span className="text-xs font-mono text-gold-accent tracking-widest uppercase px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20">
                // About Me
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Full Stack Developer Engineer
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-gray-400 text-base leading-relaxed">
                Focused on building reliable full-stack applications with modern web technology stacks.
              </p>
            </FadeIn>
          </div>

          {/* Grid Layout: Bio Text & Statistics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Bio Paragraphs */}
            <div className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-base">
              <FadeIn direction="up" delay={0.3}>
                <div className="p-6 rounded-xl bg-dark-900 border border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-gold-accent font-mono text-sm font-semibold">
                    <Terminal className="w-4 h-4" />
                    <span>Background & Philosophy</span>
                  </div>
                  <p>
                    I’m a Full Stack Developer with hands-on experience building web applications, dashboards, and backend systems. I enjoy working across both frontend and backend, from creating clean and responsive user interfaces to building APIs, database structures, and real-time features.
                  </p>
                  <p>
                    I focus on writing clean, reliable, and maintainable code and solving problems in a practical way. I’ve worked with technologies like React, Next.js, Node.js, Express.js, MongoDB, SQL, and WebSockets, and I’m always looking for better ways to improve performance, scalability, and the overall user experience.
                  </p>
                </div>
              </FadeIn>

              {/* Core Strengths */}
              <FadeIn direction="up" delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "React & Next.js App Router",
                    "TypeScript & Strict Type Safety",
                    "Node.js & Express REST APIs",
                    "MongoDB & SQL Databases",
                    "WebSocket Real-time Data",
                    "Tailwind CSS & Responsive UI",
                  ].map((strength, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Statistics Cards Grid */}
            <div className="lg:col-span-5">
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {siteConfig.stats.map((stat, idx) => (
                  <StaggerItem key={idx}>
                    <div className="p-6 rounded-xl bg-dark-900 border border-white/10 hover:border-gold-primary/30 transition-all duration-300 gold-card-hover text-center space-y-2">
                      <div className="text-3xl sm:text-4xl font-extrabold text-gold-gradient font-mono">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-400">
                        {stat.description}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Development Principles Cards */}
          <div className="pt-8 border-t border-white/10">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <StaggerItem key={idx}>
                    <div className="p-6 rounded-xl bg-dark-900 border border-white/10 hover:border-gold-primary/40 transition-all duration-300 gold-card-hover space-y-3">
                      <div className="p-3 w-fit rounded-lg bg-gold-primary/10 border border-gold-primary/20 text-gold-accent">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
};
