"use client";

import React, { useState } from "react";
import {
  Code2,
  Atom,
  Layers,
  FileCode,
  Palette,
  Layout,
  Sparkles,
  Boxes,
  Server,
  Cpu,
  Globe,
  Database,
  Table,
  Workflow,
  Zap,
  ShieldCheck,
  Activity,
  Plug,
  GitBranch,
  Send,
  Terminal,
} from "lucide-react";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/MotionContainer";
import { skillsData } from "@/data/skills";
import { SkillCategory } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Atom,
  Layers,
  FileCode,
  Palette,
  Layout,
  Sparkles,
  Boxes,
  Server,
  Cpu,
  Globe,
  Database,
  Table,
  Workflow,
  Zap,
  ShieldCheck,
  Activity,
  Plug,
  GitBranch,
  Send,
  Terminal,
};

const categories: ("All" | SkillCategory)[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "State Management",
  "Auth & APIs",
  "Tools",
];

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"All" | SkillCategory>("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-dark-900 border-t border-white/10 relative">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <FadeIn direction="up">
              <span className="text-xs font-mono text-gold-accent tracking-widest uppercase px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20">
                // Technical Stack
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Technologies & Competencies
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-gray-400 text-base">
                Curated skills and frameworks utilized to build robust end-to-end applications.
              </p>
            </FadeIn>
          </div>

          {/* Category Filter Tabs */}
          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 text-xs font-mono font-medium rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-primary",
                    selectedCategory === category
                      ? "bg-gold-primary text-dark-950 border-gold-primary font-bold shadow-gold-glow-sm"
                      : "bg-dark-850 text-gray-300 border-white/10 hover:border-gold-primary/40 hover:text-white"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Skills Grid */}
          <StaggerContainer key={selectedCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, idx) => {
              const IconComponent = iconMap[skill.iconName] || Code2;
              return (
                <StaggerItem key={idx}>
                  <div className="p-5 rounded-xl bg-dark-950 border border-white/10 hover:border-gold-primary/30 gold-card-hover transition-all duration-300 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gold-primary/10 border border-gold-primary/20 text-gold-accent shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-white truncate">{skill.name}</h3>
                        <Badge variant="gold" size="sm">
                          {skill.level || "Proficient"}
                        </Badge>
                      </div>
                      <div className="text-xs font-mono text-gold-muted">{skill.category}</div>
                      {skill.description && (
                        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 pt-0.5">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
};
