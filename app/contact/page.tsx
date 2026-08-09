import React from "react";
import type { Metadata } from "next";
import { Mail, Github, Linkedin, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/animations/MotionContainer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Utsav for full-stack software development roles, project contracts, or technical inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen bg-gold-radial">
      <Container>
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <FadeIn direction="up">
              <span className="text-xs font-mono text-gold-accent tracking-widest uppercase px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20">
                // Direct Communication
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Let&apos;s Connect & Collaborate
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Whether you have a full-stack position available, a custom application to build, or a technical question, send a message below.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn direction="up" delay={0.3}>
                <div className="p-6 rounded-xl bg-dark-900 border border-white/10 space-y-6">
                  <h2 className="text-lg font-bold text-white font-mono border-b border-white/10 pb-3">
                    Contact Information
                  </h2>

                  <div className="space-y-4 text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-gold-primary/10 border border-gold-primary/20 text-gold-accent shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-gray-400">Email Address</div>
                        <a
                          href={`mailto:${siteConfig.socialLinks.email}`}
                          className="font-semibold text-white hover:text-gold-accent transition-colors"
                        >
                          {siteConfig.socialLinks.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-gold-primary/10 border border-gold-primary/20 text-gold-accent shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-gray-400">Location</div>
                        <div className="font-semibold text-white">{siteConfig.location}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-gold-primary/10 border border-gold-primary/20 text-gold-accent shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-gray-400">Availability</div>
                        <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          {siteConfig.availability}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      Social Profiles
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={siteConfig.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 rounded-lg bg-dark-950 border border-white/10 hover:border-gold-primary/40 flex items-center justify-center gap-2 text-xs font-medium text-gray-300 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4 text-gold-primary" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={siteConfig.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 rounded-lg bg-dark-950 border border-white/10 hover:border-gold-primary/40 flex items-center justify-center gap-2 text-xs font-medium text-gray-300 hover:text-white transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-gold-primary" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="left" delay={0.3}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
