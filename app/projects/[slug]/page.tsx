import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  User,
  ShieldCheck,
  Play,
  Layers,
  Cpu,
  CheckCircle2,
  Lock,
  Award,
  AlertTriangle,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProjectVideo } from "@/components/projects/ProjectVideo";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/MotionContainer";
import { projectsData } from "@/data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
  };
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      <Container>
        <div className="space-y-16 max-w-5xl mx-auto">
          {/* Top Navigation */}
          <FadeIn direction="up">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-gold-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </FadeIn>

          {/* Project Hero Header */}
          <div className="space-y-6 border-b border-white/10 pb-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="gold" size="md">
                  {project.category}
                </Badge>
                <Badge variant="status" size="md" className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Private Project • Recorded Demo Available</span>
                </Badge>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {project.title}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
                {project.fullDescription}
              </p>
            </FadeIn>

            {/* Project Quick Metadata Bar */}
            <FadeIn direction="up" delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-dark-900 border border-white/10 text-xs font-mono">
                <div>
                  <span className="text-gray-500 block">My Role:</span>
                  <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                    <User className="w-3.5 h-3.5 text-gold-primary" />
                    {project.role}
                  </span>
                </div>

                {project.duration && (
                  <div>
                    <span className="text-gray-500 block">Duration:</span>
                    <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-primary" />
                      {project.duration}
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-gray-500 block">Project Status:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Private / Internal
                  </span>
                </div>

                <div>
                  <span className="text-gray-500 block">Video Walkthrough:</span>
                  <span className="text-gold-accent font-semibold flex items-center gap-1 mt-0.5">
                    <Play className="w-3.5 h-3.5 text-gold-primary fill-current" />
                    Demo Available
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Confidentiality Explanation Note */}
            <FadeIn direction="up" delay={0.5}>
              <div className="p-4 rounded-lg bg-dark-900/60 border border-white/10 text-xs text-gray-400 leading-relaxed flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-200">Confidentiality Note: </span>
                  This project was developed as part of professional client work. The production database and live URL are restricted, so a recorded video demonstration is provided to illustrate system features, backend integration, and real-time workflows.
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Demo Video Section */}
          <div id="demo" className="space-y-4">
            <FadeIn direction="up">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Play className="w-5 h-5 text-gold-primary fill-current" />
                Video Demo Walkthrough
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <ProjectVideo src={project.demoVideo} title={`${project.title} Video Demo`} />
            </FadeIn>
          </div>

          {/* Key Features Section */}
          <div className="space-y-6">
            <FadeIn direction="up">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-gold-primary" />
                Key Features & Capabilities
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-5 rounded-xl bg-dark-900 border border-white/10 hover:border-gold-primary/30 flex items-start gap-3 gold-card-hover">
                    <CheckCircle2 className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200 leading-relaxed">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Technology Stack Section */}
          <div className="space-y-4">
            <FadeIn direction="up">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-gold-primary" />
                Technology Stack Utilized
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-wrap gap-2 p-6 rounded-xl bg-dark-900 border border-white/10">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="gold" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Architecture Workflow Section */}
          {/* <div className="space-y-4">
            <FadeIn direction="up">
              <ArchitectureDiagram architecture={project.architecture} />
            </FadeIn>
          </div> */}

          {/* Technical Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-6">
              <FadeIn direction="up">
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-gold-primary" />
                  Engineering Challenges & Solutions
                </h2>
              </FadeIn>

              <div className="space-y-6">
                {project.challenges.map((challenge, idx) => (
                  <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                    <div className="p-6 rounded-xl bg-dark-900 border border-white/10 space-y-4">
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold">
                          Challenge #{idx + 1}
                        </div>
                        <p className="text-sm font-semibold text-white">{challenge.problem}</p>
                      </div>

                      <div className="space-y-2 pt-3 border-t border-white/10">
                        <div className="text-xs font-mono text-gold-accent uppercase tracking-wider font-semibold">
                          Engineering Solution
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">{challenge.solution}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}

          {/* Screenshots Gallery */}
          {/* {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-4">
              <FadeIn direction="up">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Screenshot Previews
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <ProjectGallery images={project.screenshots} title={project.title} />
              </FadeIn>
            </div>
          )} */}

          {/* Results & Impact Metrics */}
          {project.results && project.results.length > 0 && (
            <div className="space-y-4 p-6 rounded-xl bg-gold-primary/[0.04] border border-gold-primary/20">
              <FadeIn direction="up">
                <h3 className="text-lg font-bold text-gold-accent flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Results & Business Impact
                </h3>
              </FadeIn>

              <ul className="space-y-2 text-sm text-gray-200">
                {project.results.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Action CTAs */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <Button href="/projects" variant="outline" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Projects
            </Button>
            <Button href="/contact" variant="primary" size="md">
              Discuss Similar Project
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
