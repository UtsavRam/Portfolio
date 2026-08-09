import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "algo-trading-platform",
    title: "Algo Trading & Multi-Client Portal",
    shortDescription:
      "Real-time automated trading execution and multi-account client management platform built for low-latency operations.",
    fullDescription:
      "A high-frequency algo-trading dashboard and client management platform designed for managing multi-broker API connections, executing rule-based algorithmic strategies, and visualizing real-time portfolio P&L streaming.",
    category: "Full Stack / FinTech",
    role: "Lead Full Stack Developer",
    duration: "9 Months",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "WebSocket",
      "Angel One SmartAPI",
      "Tailwind CSS",
    ],
    features: [
      "Real-time P&L streaming over bi-directional WebSocket connections.",
      "Multi-account strategy order execution with sub-millisecond execution logs.",
      "Custom algorithmic strategy builder with visual indicator configuration.",
      "Comprehensive risk management engine with automated stop-loss triggers.",
      "Secure JWT-based multi-factor authentication & granular role permissions.",
    ],
    challenges: [
      {
        problem:
          "Handling high-frequency market data streams without overwhelming client browser rendering.",
        solution:
          "Implemented Web Worker data throttling and optimized state updates with Redux Toolkit and WebSockets to decouple rendering from inbound tick rates.",
      },
      {
        problem:
          "Ensuring atomic order execution across multiple client broker accounts during volatile market movements.",
        solution:
          "Architected an async queue processing pipeline using Node.js event loops and MongoDB transaction locks to guarantee order idempotency.",
      },
    ],
    screenshots: [
      "/images/projects/algo-trading-1.jpg",
      "/images/projects/algo-trading-2.jpg",
      "/images/projects/algo-trading-3.jpg",
    ],
    demoVideo: "/videos/AlgoTrding_3iweb.mp4",
    status: "private",
    architecture:
      "Client Next.js SPA → Node.js/Express API Gateway → Async Queue Pipeline → Broker REST/WebSocket APIs & MongoDB Cluster",
    results: [
      "Successfully processed over 50,000 daily strategy ticks with 99.9% uptime.",
      "Reduced client dashboard re-render latency by 65%.",
    ],
    featured: true,
  },
  {
    slug: "sqlmagic",
    title: "SQLMagic",
    shortDescription:
      "An AI-powered SQL data exploration platform that allows users to upload SQL files or connect live databases for automated schema processing.",
    fullDescription:
      "I built SQLMagic to simplify how developers and non-technical users interact with databases. The platform lets users upload SQL files or directly connect to live databases to automatically extract and process the schema. To make querying easier, I integrated a natural language chat interface using Gemini AI. This allows users to ask questions in plain English, manage multiple chat sessions, and analyze complex datasets without having to write manual SQL scripts.",
    category: "AI Data Tool",
    role: "Full Stack Developer",
    duration: "3 Months",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Gemini AI"
    ],
    features: [
      "Upload SQL files or connect live databases directly for automated schema extraction.",
      "Natural language chat interface integrated with Gemini AI for querying databases.",
      "Multi-session chat management to easily track different data exploration workflows.",
      "Automated database conversion and schema processing without requiring manual SQL scripting."
    ],
    challenges: [
      {
        problem:
          "Passing complex relational schemas to the AI model efficiently so it understands the database structure without hitting prompt limits.",
        solution:
          "Built a schema extraction layer that processes and condenses the database metadata before feeding it to Gemini AI, ensuring fast and accurate natural language-to-SQL conversions."
      }
    ],
    screenshots: [
      "/images/projects/sqlmagic-1.jpg",
      "/images/projects/sqlmagic-2.jpg"
    ],
    demoVideo: "/videos/Sqlmagic_3iweb.mp4",
    status: "private",
    architecture:
      "Next.js Frontend & API Routes → MongoDB Data Store → Gemini AI LLM Integration",
    results: [
      "Significantly enhanced data accessibility and insight generation by removing the SQL learning curve.",
      "Enabled seamless, chat-based interaction with complex datasets."
    ],
    featured: true
  },
  {
    slug: "telecaller-ai-platform",
    title: "Telecaller AI Platform",
    shortDescription:
      "An AI-powered automated outbound calling platform integrating multiple LLMs and telephony services for dynamic voice interactions.",
    fullDescription:
      "I engineered a comprehensive AI telecalling system designed to automate outbound customer interactions. By integrating telephony services like Twilio and Telnyx with multiple LLM providers including OpenAI, Gemini, and Claude, I built a platform capable of handling intelligent, dynamic conversations. The system is highly flexible, supporting various workflows like lead qualification, conducting surveys, and making follow-up calls without manual intervention.",
    category: "AI / Telephony",
    role: "Full Stack Developer",
    duration: "6 Days",
    technologies: [
      "Next.js",
      "REST APIs",
      "OpenAI",
      "Gemini",
      "Claude",
      "Twilio",
      "Telnyx"
    ],
    features: [
      "Dynamic AI-driven conversations enabling intelligent and natural customer interactions.",
      "Automated workflows specifically designed for lead qualification, surveys, and follow-ups.",
      "Scalable multi-provider architecture that lets businesses dynamically switch between AI models based on their operational budget.",
      "Seamless integration with multiple telephony providers to meet specific project routing requirements."
    ],
    challenges: [
      {
        problem:
          "Managing latency and maintaining conversational context during live phone calls while routing data between telephony webhooks and third-party AI models.",
        solution:
          "Built a highly optimized Express.js REST API backend to process audio streams and webhook events efficiently, ensuring fast response times for a natural conversational flow."
      }
    ],
    screenshots: [
      "/images/projects/telecaller-1.jpg",
      "/images/projects/telecaller-2.jpg"
    ],
    demoVideo: "/videos/Telecaller_3iweb.mp4",
    status: "private",
    architecture:
      "Next.js Frontend → Node.js/Express.js REST APIs → SQL Database & Multi-LLM / Telephony Integration",
    results: [
      "Successfully created an architecture where AI models and telephony providers can be dynamically selected on the fly.",
      "Automated complex voice interaction workflows, significantly reducing the need for manual outbound calling teams."
    ],
    featured: true
  },
  {
    slug: "pixel-ai-virtual-try-on",
    title: "Pixel AI - Virtual Try-On",
    shortDescription:
      "A React-based Shopify application that uses AI to let customers visualize products on themselves directly from the product page.",
    fullDescription:
      "I built Pixel AI to solve a common e-commerce challenge: helping customers visualize how a product will actually look on them before buying. It's a React widget that embeds seamlessly into Shopify product pages without disrupting the storefront's natural flow. Customers can upload their photo, enter basic dimensions, and the app communicates with the Pixel AI API to generate a realistic composite image of them interacting with the product. I also built a session-based gallery feature so users can manage and review their previously generated looks.",
    category: "Shopify App / AI",
    role: "Frontend Developer",
    duration: "1 Month",
    technologies: [
      "React.js",
      "Shopify",
      "Pixel AI API",
      "Tailwind CSS",
      "JavaScript"
    ],
    features: [
      "AI-powered virtual try-on experience integrated directly into live Shopify storefronts.",
      "Interactive modal UI for seamless photo uploads, physical attribute inputs, and viewing outputs.",
      "Real-time state handling for image processing, API loading states, and error management.",
      "Built-in session history gallery allowing users to view or delete their past generated images."
    ],
    challenges: [
      {
        problem:
          "Handling complex async API calls and large image uploads without slowing down the main Shopify product page or disrupting the user's shopping flow.",
        solution:
          "Engineered a lightweight embedded React widget with optimized state management. Used interactive modals and clear loading transitions to keep the user engaged while the AI processed the images in the background."
      }
    ],
    screenshots: [
      "/images/projects/pixel-ai-1.jpg",
      "/images/projects/pixel-ai-2.jpg"
    ],
    demoVideo: "/videos/PixelAI_3iweb.mp4",
    status: "private",
    architecture:
      "React.js Embedded Widget → Shopify Storefront Ecosystem → Pixel AI Backend API",
    results: [
      "Created a highly personalized shopping journey that boosts customer engagement.",
      "Helped users make confident purchasing decisions by providing realistic product visualizations."
    ],
    featured: true
  },
];
