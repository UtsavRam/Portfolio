"use client";

import React, { useState } from "react";
import { Terminal, CheckCircle2, Copy, FileCode2, Cpu, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "api", name: "route.ts", lang: "TypeScript" },
  { id: "architecture", name: "system.config.ts", lang: "Architecture" },
  { id: "schema", name: "database.prisma", lang: "Database" },
];

const codeSnippets: Record<string, string[]> = {
  api: [
    `// Next.js App Router — Low Latency API Endpoint`,
    `import { NextResponse } from "next/server";`,
    `import { zodValidate, rateLimit } from "@/lib/security";`,
    ``,
    `export async function POST(req: Request) {`,
    `  const clientIp = req.headers.get("x-forwarded-for");`,
    `  const isAllowed = await rateLimit.check(clientIp);`,
    `  if (!isAllowed) return NextResponse.json({ error: "429 Rate Limit Exceeded" });`,
    ``,
    `  const payload = await req.json();`,
    `  const data = await zodValidate(payload);`,
    `  const result = await tradingEngine.executeOrder(data);`,
    ``,
    `  return NextResponse.json({ status: 200, orderId: result.id });`,
    `}`,
  ],
  architecture: [
    `export const FullStackArchitecture = {`,
    `  frontend: "Next.js App Router + TypeScript + Tailwind CSS",`,
    `  realtime: "Bi-directional WebSocket streams (Low Latency)",`,
    `  backend: "Node.js microservices + RESTful API Gateways",`,
    `  databases: ["MongoDB Document Store", "SQL Relational Storage"],`,
    `  security: ["JWT Auth", "RBAC Policy Enforcement", "Zod Validation"],`,
    `  deployment: "Edge network container orchestration + CI/CD",`,
    `} as const;`,
  ],
  schema: [
    `model TradingStrategy {`,
    `  id          String   @id @default(uuid())`,
    `  clientId    String   @index`,
    `  symbol      String`,
    `  tickRateMs  Int      @default(100)`,
    `  parameters  Json`,
    `  active      Boolean  @default(true)`,
    `  createdAt   DateTime @default(now())`,
    `}`,
  ],
};

export const CodeVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("api");
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    const text = codeSnippets[activeTab].join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-dark-900 shadow-gold-glow-sm">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-dark-850 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 ml-3 px-2 py-0.5 rounded bg-dark-950/60 border border-white/5 text-xs text-gray-400 font-mono">
            <Terminal className="w-3.5 h-3.5 text-gold-primary" />
            <span>utsav-developer-environment</span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy snippet"
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-gold-accent transition-colors px-2 py-1 rounded hover:bg-white/5"
        >
          {copied ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center bg-dark-950 border-b border-white/10 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 text-xs font-mono border-r border-white/5 transition-colors whitespace-nowrap",
              activeTab === tab.id
                ? "bg-dark-900 text-gold-accent border-t-2 border-t-gold-primary font-semibold"
                : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
            )}
          >
            {tab.id === "api" && <FileCode2 className="w-3.5 h-3.5 text-blue-400" />}
            {tab.id === "architecture" && <Cpu className="w-3.5 h-3.5 text-gold-primary" />}
            {tab.id === "schema" && <Database className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Code Editor Content Body */}
      <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto min-h-[300px] bg-dark-950/90 text-gray-300 leading-relaxed">
        {codeSnippets[activeTab].map((line, idx) => (
          <div key={idx} className="flex gap-4 hover:bg-white/[0.02] px-1 rounded">
            <span className="w-6 text-right text-gray-600 select-none text-xs">{idx + 1}</span>
            <span className="flex-1">
              {line.startsWith("//") ? (
                <span className="text-gray-500 italic">{line}</span>
              ) : line.includes("export") || line.includes("import") || line.includes("const") || line.includes("return") || line.includes("async") || line.includes("function") ? (
                <span>
                  {line.split(/(\b(?:export|default|import|from|const|async|function|return|if|model|Int|DateTime|Boolean|String)\b)/g).map((part, pIdx) => {
                    if (["export", "default", "import", "from", "const", "async", "function", "return", "if", "model", "Int", "DateTime", "Boolean", "String"].includes(part)) {
                      return <span key={pIdx} className="text-gold-primary font-semibold">{part}</span>;
                    }
                    if (part.startsWith('"') || part.endsWith('"')) {
                      return <span key={pIdx} className="text-emerald-300">{part}</span>;
                    }
                    return part;
                  })}
                </span>
              ) : (
                line
              )}
            </span>
          </div>
        ))}

        {/* Blinking Terminal Cursor */}
        <div className="mt-2 flex items-center gap-2 text-xs text-gold-accent pt-2 border-t border-white/5">
          <span className="text-emerald-400">⚡</span>
          <span>Status: Production Build Ready</span>
          <span className="inline-block w-2 h-4 bg-gold-primary animate-pulse" />
        </div>
      </div>
    </div>
  );
};
