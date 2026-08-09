import React from "react";
import { Layout, Server, Database, ShieldCheck, ArrowRight } from "lucide-react";

interface ArchitectureDiagramProps {
  architecture?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ architecture }) => {
  return (
    <div className="p-6 sm:p-8 rounded-xl bg-dark-900 border border-white/10 space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold-primary" />
          System Architecture Workflow
        </h3>
        <span className="text-xs font-mono text-gold-accent px-2.5 py-1 rounded bg-gold-primary/10 border border-gold-primary/20">
          Production Topography
        </span>
      </div>

      {/* Visual Workflow Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {/* Step 1: Client Tier */}
        <div className="p-4 rounded-lg bg-dark-950 border border-white/10 space-y-2 text-center relative group hover:border-gold-primary/40 transition-colors">
          <div className="p-2.5 w-fit mx-auto rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Layout className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono font-bold text-white">Client Frontend</div>
          <div className="text-[11px] text-gray-400">Next.js App Router / React SPA</div>
        </div>

        {/* Step 2: API Gateway */}
        <div className="p-4 rounded-lg bg-dark-950 border border-white/10 space-y-2 text-center relative group hover:border-gold-primary/40 transition-colors">
          <div className="p-2.5 w-fit mx-auto rounded-lg bg-gold-primary/10 text-gold-accent border border-gold-primary/20">
            <Server className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono font-bold text-white">API Gateway</div>
          <div className="text-[11px] text-gray-400">Node.js Express / WebSocket Hub</div>
        </div>

        {/* Step 3: Security & Validation */}
        <div className="p-4 rounded-lg bg-dark-950 border border-white/10 space-y-2 text-center relative group hover:border-gold-primary/40 transition-colors">
          <div className="p-2.5 w-fit mx-auto rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono font-bold text-white">Auth & Validation</div>
          <div className="text-[11px] text-gray-400">JWT Security & Zod Schemas</div>
        </div>

        {/* Step 4: Data Layer */}
        <div className="p-4 rounded-lg bg-dark-950 border border-white/10 space-y-2 text-center relative group hover:border-gold-primary/40 transition-colors">
          <div className="p-2.5 w-fit mx-auto rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Database className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono font-bold text-white">Persistence Tier</div>
          <div className="text-[11px] text-gray-400">MongoDB / SQL Cluster</div>
        </div>
      </div>

      {/* Text summary description if provided */}
      {architecture && (
        <div className="pt-2 text-xs font-mono text-gray-400 bg-dark-950 p-4 rounded-lg border border-white/5 leading-relaxed">
          <span className="text-gold-accent font-semibold">Architecture Pipeline: </span>
          {architecture}
        </div>
      )}
    </div>
  );
};
