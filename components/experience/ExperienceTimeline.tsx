import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/MotionContainer";
import { experienceData } from "@/data/experience";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-950 border-t border-white/10 relative">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <FadeIn direction="up">
              <span className="text-xs font-mono text-gold-accent tracking-widest uppercase px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20">
                // Career History
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Professional Experience
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-gray-400 text-base">
                Engineering roles and key achievements building production full-stack systems.
              </p>
            </FadeIn>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Vertical Line Accent */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold-primary via-gold-muted to-white/10 -translate-x-1/2" />

            <StaggerContainer className="space-y-12">
              {experienceData.map((exp, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <StaggerItem key={exp.id}>
                    <div className="relative flex flex-col md:flex-row items-center">
                      {/* Timeline Dot Node (Desktop) */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-gold-primary items-center justify-center text-gold-accent shadow-gold-glow-sm z-10">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>

                      {/* Content Card Layout */}
                      <div
                        className={`w-full md:w-[calc(50%-2rem)] ${
                          isEven ? "md:mr-auto" : "md:ml-auto"
                        }`}
                      >
                        <div className="p-6 rounded-xl bg-dark-900 border border-white/10 hover:border-gold-primary/30 gold-card-hover space-y-4">
                          {/* Role & Company Header */}
                          <div className="space-y-1.5">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                              <Badge variant="gold" size="sm">
                                {exp.type}
                              </Badge>
                            </div>

                            <div className="text-base font-semibold text-gold-accent">
                              {exp.company}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 pt-1">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-gold-primary" />
                                {exp.duration}
                              </span>
                              {exp.location && (
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                                  {exp.location}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Responsibilities */}
                          <div className="space-y-2 pt-2 border-t border-white/5">
                            <h4 className="text-xs font-mono text-gray-300 uppercase tracking-wider">
                              Responsibilities & Impact:
                            </h4>
                            <ul className="space-y-1.5 text-xs text-gray-300">
                              {exp.responsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-primary shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Achievements */}
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="space-y-2 pt-2 border-t border-white/5 bg-gold-primary/[0.03] p-3 rounded-lg border border-gold-primary/10">
                              <div className="flex items-center gap-1.5 text-xs font-mono text-gold-accent font-semibold">
                                <Award className="w-3.5 h-3.5" />
                                <span>Key Achievements:</span>
                              </div>
                              <ul className="space-y-1 text-xs text-gray-300">
                                {exp.achievements.map((ach, aIdx) => (
                                  <li key={aIdx} className="list-disc list-inside">
                                    {ach}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="dark" size="sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
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
