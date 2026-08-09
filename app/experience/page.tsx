import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { FadeIn } from "@/components/animations/MotionContainer";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Explore the career milestones, enterprise roles, and engineering contributions of Full Stack Developer Utsav.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <FadeIn direction="up">
              <span className="text-xs font-mono text-gold-accent tracking-widest uppercase px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20">
                // Career Path
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Work Experience & Engineering Timeline
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Detailed timeline of software engineering roles, team contributions, and full-stack achievements.
              </p>
            </FadeIn>
          </div>

          <ExperienceTimeline />
        </div>
      </Container>
    </div>
  );
}
