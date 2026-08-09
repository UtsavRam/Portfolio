import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Mail, Github, Linkedin } from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/MotionContainer";
import { projectsData } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Skills Section */}
      <SkillsSection />

      {/* 4. Experience Section */}
      <ExperienceTimeline />

      {/* 5. Featured Projects Section */}
      <section id="projects" className="py-24 bg-dark-900 border-t border-white/10 relative">
        <Container>
          <div className="space-y-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <FadeIn direction="up">
                  <span className="text-xs font-mono text-gold-accent tracking-widest uppercase px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20">
                    // Highlighted Work
                  </span>
                </FadeIn>
                <FadeIn direction="up" delay={0.1}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Featured Case Studies
                  </h2>
                </FadeIn>
                <FadeIn direction="up" delay={0.2}>
                  <p className="text-gray-400 text-base">
                    Selected full-stack web applications featuring real-time architecture, microservices, and client management.
                  </p>
                </FadeIn>
              </div>

              <FadeIn direction="left" delay={0.3}>
                <Button
                  href="/projects"
                  variant="secondary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  View All Projects ({projectsData.length})
                </Button>
              </FadeIn>
            </div>

            {/* Featured Projects Grid */}
            <ProjectGrid projects={featuredProjects} />
          </div>
        </Container>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="py-24 bg-dark-950 border-t border-white/10 relative bg-gold-radial">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn direction="up">
                <span className="text-xs font-mono text-gold-accent tracking-widest uppercase px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20">
                  // Get in Touch
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Let&apos;s Build Something Great Together
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-gray-300 text-base leading-relaxed">
                  Have a project inquiry, software engineering role, or technical collaboration in mind? Feel free to reach out directly through the form or social channels.
                </p>
              </FadeIn>

              {/* Direct Info Cards */}
              <FadeIn direction="up" delay={0.3}>
                <div className="space-y-4 pt-4">
                  <a
                    href={`mailto:${siteConfig.socialLinks.email}`}
                    className="p-4 rounded-xl bg-dark-900 border border-white/10 hover:border-gold-primary/40 flex items-center gap-4 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-gold-primary/10 border border-gold-primary/20 text-gold-accent group-hover:bg-gold-primary group-hover:text-dark-950 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400">Direct Email</div>
                      <div className="text-sm font-semibold text-white group-hover:text-gold-accent transition-colors">
                        {siteConfig.socialLinks.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <a
                      href={siteConfig.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-4 rounded-xl bg-dark-900 border border-white/10 hover:border-gold-primary/40 flex items-center gap-3 transition-colors text-gray-300 hover:text-white"
                    >
                      <Github className="w-5 h-5 text-gold-primary" />
                      <span className="text-sm font-medium">GitHub Profile</span>
                    </a>
                    <a
                      href={siteConfig.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-4 rounded-xl bg-dark-900 border border-white/10 hover:border-gold-primary/40 flex items-center gap-3 transition-colors text-gray-300 hover:text-white"
                    >
                      <Linkedin className="w-5 h-5 text-gold-primary" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <FadeIn direction="left" delay={0.3}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
