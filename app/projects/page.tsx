import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { FadeIn } from "@/components/animations/MotionContainer";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Explore full-stack web applications, real-time trading dashboards, multi-tenant SaaS systems, and microservice architectures built by Utsav.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <FadeIn direction="up">
              <span className="text-xs font-mono text-gold-accent tracking-widest uppercase px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20">
                // Portfolio Showcase
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Projects & Technical Case Studies
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Detailed breakdowns of professional software projects, architecture decisions, video walkthroughs, and problem-solving methodologies.
              </p>
            </FadeIn>
          </div>

          {/* Projects Catalog Grid with Filter */}
          <ProjectGrid projects={projectsData} showFilter />
        </div>
      </Container>
    </div>
  );
}
