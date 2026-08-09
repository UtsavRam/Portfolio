import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight, Code } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "@/data/site";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-12 text-gray-400">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Intro */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold font-mono tracking-tight text-white"
            >
              <Image
                src="/Images/Utsav_logo_3.png"
                alt="Utsav Logo"
                width={250}
                height={250}
                className="w-24 h-24 object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Full Stack Developer specializing in React, Next.js, Node.js, Express, and MongoDB/SQL. Building scalable, production-grade applications with clean architecture and exceptional UX.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-dark-800 text-gray-300 hover:text-gold-accent hover:border-gold-primary/40 border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-dark-800 text-gray-300 hover:text-gold-accent hover:border-gold-primary/40 border border-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.socialLinks.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-dark-800 text-gray-300 hover:text-gold-accent hover:border-gold-primary/40 border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-gold-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-gold-accent transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-gold-accent transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold-accent transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Status */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-400">
              Open for full-time opportunities, high-impact contracts, and client collaborations.
            </p>
            <a
              href={`mailto:${siteConfig.socialLinks.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-accent hover:underline"
            >
              <span>{siteConfig.socialLinks.email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {siteConfig.availability}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} Utsav. All rights reserved.</p>
          <p className="font-mono">Built with Next.js App Router, TypeScript & Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
};
