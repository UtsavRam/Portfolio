"use client";

import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types";
import { StaggerContainer, StaggerItem, FadeIn } from "../animations/MotionContainer";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
  showFilter?: boolean;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, showFilter = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      {showFilter && (
        <FadeIn direction="up">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-1.5 text-xs font-mono font-medium rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-primary",
                  selectedCategory === cat
                    ? "bg-gold-primary text-dark-950 border-gold-primary font-bold shadow-gold-glow-sm"
                    : "bg-dark-900 text-gray-300 border-white/10 hover:border-gold-primary/40 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      )}

      <StaggerContainer key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};
