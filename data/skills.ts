import { Skill } from "@/types";

export const skillsData: Skill[] = [
  // Frontend
  {
    name: "TypeScript",
    category: "Frontend",
    iconName: "Code2",
    level: "Expert",
    description: "Strong static typing, generics, interfaces, and clean architecture",
  },
  {
    name: "React.js",
    category: "Frontend",
    iconName: "Atom",
    level: "Expert",
    description: "Hooks, custom hooks, performance optimization, and context API",
  },
  {
    name: "Next.js",
    category: "Frontend",
    iconName: "Layers",
    level: "Expert",
    description: "App Router, SSR, SSG, Server Components, Server Actions & Metadata API",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    iconName: "FileCode",
    level: "Expert",
    description: "Async/await, closures, promises, event loop, and DOM manipulation",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    iconName: "Palette",
    level: "Expert",
    description: "Utility-first design, custom design tokens, animations & dark mode",
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    iconName: "Layout",
    level: "Expert",
    description: "Semantic markup, CSS Grid, Flexbox, responsive layouts & accessibility",
  },
  {
    name: "SCSS / SASS",
    category: "Frontend",
    iconName: "Sparkles",
    level: "Advanced",
    description: "Nested rules, mixins, variables, and modular style architecture",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    iconName: "Boxes",
    level: "Advanced",
    description: "Responsive grid layout system and component customization",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    iconName: "Server",
    level: "Expert",
    description: "Event-driven runtime, non-blocking I/O, streams & backend services",
  },
  {
    name: "Express.js",
    category: "Backend",
    iconName: "Cpu",
    level: "Expert",
    description: "REST API architecture, middleware pipelines, routing & error handling",
  },
  {
    name: "REST APIs",
    category: "Backend",
    iconName: "Globe",
    level: "Expert",
    description: "API design, status codes, endpoint versioning & OpenAPI specs",
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    iconName: "Database",
    level: "Expert",
    description: "Document schemas, Mongoose ORM, aggregation pipelines & indexing",
  },
  {
    name: "SQL (PostgreSQL/MySQL)",
    category: "Database",
    iconName: "Table",
    level: "Advanced",
    description: "Relational schema design, normalization, complex joins & indexing",
  },

  // State Management
  {
    name: "Redux / Redux Toolkit",
    category: "State Management",
    iconName: "Workflow",
    level: "Advanced",
    description: "Centralized state management, RTK Query, slices & async thunks",
  },
  // {
  //   name: "Zustand",
  //   category: "State Management",
  //   iconName: "Zap",
  //   level: "Advanced",
  //   description: "Lightweight, unopinionated client-side state management",
  // },

  // Auth & APIs
  {
    name: "JWT Authentication",
    category: "Auth & APIs",
    iconName: "ShieldCheck",
    level: "Expert",
    description: "Token-based security, access/refresh token rotation & RBAC",
  },
  {
    name: "WebSocket",
    category: "Auth & APIs",
    iconName: "Activity",
    level: "Advanced",
    description: "Bi-directional real-time communication, events & heartbeat checks",
  },
  {
    name: "Third-Party API Integrations",
    category: "Auth & APIs",
    iconName: "Plug",
    level: "Expert",
    description: "Payment gateways, email services, cloud storage & webhook handlers",
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "Tools",
    iconName: "GitBranch",
    level: "Expert",
    description: "Version control, feature branching, pull requests & code review",
  },
  {
    name: "Postman",
    category: "Tools",
    iconName: "Send",
    level: "Expert",
    description: "API testing, automated request collections & mock servers",
  },
  // {
  //   name: "VS Code",
  //   category: "Tools",
  //   iconName: "Terminal",
  //   level: "Expert",
  //   description: "Advanced debugging, linting configuration & workspace optimization",
  // },
];
