"use client";

import React, { useEffect } from "react";
import { AlertOctagon, RefreshCw } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application runtime error boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-16 bg-dark-950">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6 p-8 rounded-2xl bg-dark-900 border border-red-500/30">
          <div className="p-4 w-fit mx-auto rounded-full bg-red-500/10 border border-red-500/30 text-red-400">
            <AlertOctagon className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-red-400 font-bold">500 — UNEXPECTED APPLICATION ERROR</span>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Something Went Wrong
            </h1>
            <p className="text-xs text-gray-400 leading-relaxed">
              An unexpected system exception occurred. Click below to re-initialize the page session.
            </p>
          </div>

          <div className="pt-2">
            <Button
              onClick={() => reset()}
              variant="primary"
              size="md"
              leftIcon={<RefreshCw className="w-4 h-4" />}
            >
              Try Again
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
