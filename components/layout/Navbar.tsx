"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    if (path.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-dark-950/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold-primary rounded-md px-1 transition-transform hover:scale-105"
          >
            <Image
              src="/Images/Utsav_logo_3.png"
              alt="Utsav Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold-primary",
                  isActive(item.href)
                    ? "text-gold-accent bg-gold-primary/10 border border-gold-primary/30 font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA (Resume) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={siteConfig.resumeUrl}
              external
              variant="outline"
              size="sm"
              leftIcon={<FileText className="w-4 h-4 text-gold-primary" />}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-gold-accent hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-gold-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 md:hidden bg-dark-950/95 backdrop-blur-xl border-t border-white/10 animate-fadeIn flex flex-col justify-between p-6 overflow-y-auto">
          <nav className="flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 text-lg font-medium rounded-lg border transition-all",
                  isActive(item.href)
                    ? "text-gold-accent bg-gold-primary/10 border-gold-primary/30 font-semibold"
                    : "text-gray-200 border-white/5 hover:border-gold-primary/20 hover:bg-white/5"
                )}
              >
                <span>{item.name}</span>
                {isActive(item.href) && <span className="w-2 h-2 rounded-full bg-gold-primary" />}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Button
              href={siteConfig.resumeUrl}
              external
              variant="primary"
              size="lg"
              className="w-full"
              leftIcon={<FileText className="w-5 h-5" />}
            >
              Download Resume
            </Button>

            <div className="text-center text-xs text-gray-400 font-mono">
              ● {siteConfig.availability}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
