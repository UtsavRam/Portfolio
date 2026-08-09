"use client";

import React from "react";
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { CodeVisual } from "./CodeVisual";
import { FadeIn } from "../animations/MotionContainer";
import { siteConfig } from "@/data/site";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center bg-grid-pattern bg-gold-radial overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-primary/10 rounded-full blur-[120px] pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Calls to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Indicator Badge */}
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900 border border-gold-primary/30 text-xs font-mono text-gold-accent shadow-gold-glow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{siteConfig.availability}</span>
              </div>
            </FadeIn>

            {/* Main Greeting & Title */}
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I&apos;m <span className="text-gold-gradient">{siteConfig.name}</span>
                <br />
                <span className="text-gray-200 text-3xl sm:text-4xl lg:text-5xl font-bold font-sans">
                  {siteConfig.role}
                </span>
              </h1>
            </FadeIn>

            {/* Headline Description */}
            <FadeIn direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed font-normal">
                {siteConfig.headline}
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/projects"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  View My Projects
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Me
                </Button>
                <Button
                  href={siteConfig.resumeUrl}
                  external
                  variant="outline"
                  size="lg"
                  leftIcon={<FileText className="w-4 h-4 text-gold-primary" />}
                >
                  Download Resume
                </Button>
              </div>
            </FadeIn>

            {/* Social Links Bar */}
            <FadeIn direction="up" delay={0.5}>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10 max-w-md">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Connect:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2.5 rounded-lg bg-dark-900 text-gray-300 hover:text-gold-accent hover:border-gold-primary/40 border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 rounded-lg bg-dark-900 text-gray-300 hover:text-gold-accent hover:border-gold-primary/40 border border-white/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${siteConfig.socialLinks.email}`}
                    aria-label="Send Email"
                    className="p-2.5 rounded-lg bg-dark-900 text-gray-300 hover:text-gold-accent hover:border-gold-primary/40 border border-white/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Code IDE Terminal Visual */}
          <div className="lg:col-span-5">
            <FadeIn direction="left" delay={0.3}>
              <CodeVisual />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};
