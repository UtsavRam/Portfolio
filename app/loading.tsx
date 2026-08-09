import React from "react";
import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-dark-950 flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-gold-primary/20" />
            <div className="absolute inset-0 rounded-full border-2 border-gold-primary border-t-transparent animate-spin" />
          </div>
          <span className="text-xs font-mono text-gold-accent tracking-widest uppercase animate-pulse">
            Loading Portfolio Session...
          </span>
        </div>
      </Container>
    </div>
  );
}
