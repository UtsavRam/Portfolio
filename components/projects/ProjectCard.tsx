import React from "react";
import Link from "next/link";
import { Play, ArrowRight, Github, Lock, Film } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative rounded-xl bg-dark-900 border border-white/10 hover:border-gold-primary/40 gold-card-hover overflow-hidden flex flex-col justify-between transition-all duration-300">
      <div className="space-y-4">
        {/* Project Visual Thumbnail Header */}
        <div className="relative aspect-video w-full bg-dark-950 border-b border-white/10 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10" />

          {/* Placeholder graphics pattern */}
          <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-grid-pattern group-hover:scale-105 transition-transform duration-500">
            <div className="p-3.5 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-accent shadow-gold-glow-sm">
              <Film className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-gray-400 mt-2 font-semibold">
              {project.category}
            </span>
          </div>

          {/* Status Badge Tag */}
          <div className="absolute top-3 left-3 z-20">
            <Badge variant="gold" size="sm" className="flex items-center gap-1 bg-dark-950/80 backdrop-blur-sm">
              <Lock className="w-3 h-3 text-gold-primary" />
              <span>Private Project • Demo Available</span>
            </Badge>
          </div>
        </div>

        {/* Project Card Info Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-gold-muted font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-gold-accent transition-colors">
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technologies Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="dark" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="outline" size="sm">
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Action CTA Footer Buttons */}
      <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 mt-4">
        <Button
          href={`/projects/${project.slug}`}
          variant="primary"
          size="sm"
          rightIcon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
        >
          View Case Study
        </Button>

        <div className="flex items-center gap-2">
          {project.demoVideo && (
            <Button
              href={`/projects/${project.slug}#demo`}
              variant="secondary"
              size="sm"
              leftIcon={<Play className="w-3.5 h-3.5 text-gold-primary fill-current" />}
            >
              Watch Demo
            </Button>
          )}

          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              external
              variant="outline"
              size="sm"
              aria-label="Source Code"
            >
              <Github className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
