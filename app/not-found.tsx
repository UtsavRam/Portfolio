import React from "react";
import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-16 bg-dark-950 bg-gold-radial">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6 p-8 rounded-2xl bg-dark-900 border border-white/10 shadow-gold-glow-sm">
          <div className="p-4 w-fit mx-auto rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-accent">
            <FileQuestion className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-gold-primary font-bold">404 — PAGE NOT FOUND</span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Route Does Not Exist
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              The page or resource you are looking for might have been moved, renamed, or is temporarily unavailable.
            </p>
          </div>

          <div className="pt-2">
            <Button href="/" variant="primary" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Return to Homepage
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
