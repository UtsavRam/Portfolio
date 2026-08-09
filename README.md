# Utsav — Production-Ready Full Stack Developer Portfolio

A high-performance, production-grade personal portfolio website built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed specifically for a Full Stack Developer, featuring a premium **Black + Dark Yellow / Gold** visual identity, real-world project case studies, custom video player integration, interactive IDE visualizer, server-side Zod validation, and technical SEO metadata.

---

## 🌟 Key Features

* **Premium Visual Design System**: Sleek black theme (`#050505`) with dark yellow/gold (`#D4A72C` / `#E0B83F`) accents, glassmorphism highlights, technical grid patterns, and desktop cursor spotlight.
* **4 Full-Stack Case Studies**: Structured breakdown of 4 production-grade projects including architecture workflow diagrams, key features, engineering challenges & solutions, video demos, and screenshot galleries.
* **Demo Video & Media Player**: Custom video player component with poster fallback, fullscreen support, volume toggles, and zero crashes when video media files are pending.
* **Data-Driven Architecture**: Clean separation of content in `data/site.ts`, `data/projects.ts`, `data/skills.ts`, and `data/experience.ts`. Update resume details or projects without touching component logic.
* **Contact Form API & Security**: Integrated `/api/contact` route handler with client-side & server-side Zod validation, anti-spam honeypot protection, rate-limit safeguards, and safe console fallback mode.
* **Technical SEO & Metadata**: Built-in JSON-LD structured data (`Person` & `WebSite` schemas), OpenGraph, Twitter card tags, `sitemap.ts`, and `robots.ts`.
* **Accessibility & Performance**: Target WCAG 2.2 AA standards with semantic HTML, keyboard focus management, ARIA landmarks, and `prefers-reduced-motion` animation overrides.

---

## 🛠️ Technology Stack

* **Framework**: Next.js 14+ (App Router)
* **Language**: TypeScript (Strict Mode)
* **Styling**: Tailwind CSS, Custom CSS Variables
* **Icons**: Lucide React
* **Animations**: Framer Motion
* **Forms & Validation**: React Hook Form, Zod
* **Font System**: `next/font` (Inter & JetBrains Mono)

---

## 📁 Project Structure

```text
utsav-portfolio/
│
├── app/
│   ├── layout.tsx              # Root layout with fonts, JSON-LD, metadata & global elements
│   ├── page.tsx                # Homepage assembling Hero, About, Skills, Experience, Featured Work, Contact
│   ├── globals.css             # Base styles, color tokens, custom scrollbar & animations
│   ├── projects/
│   │   ├── page.tsx            # Project catalog with category filtering
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic project case study page
│   ├── experience/
│   │   └── page.tsx            # Full experience timeline page
│   ├── contact/
│   │   └── page.tsx            # Dedicated contact page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form POST handler with Zod & anti-spam validation
│   ├── sitemap.ts              # XML sitemap generator
│   ├── robots.ts               # Robots.txt generator
│   ├── not-found.tsx           # Custom branded 404 page
│   ├── error.tsx               # Global error boundary
│   └── loading.tsx             # Page skeleton loader
│
├── components/
│   ├── layout/                 # Navbar, Footer, Container
│   ├── hero/                   # HeroSection, CodeVisual (interactive terminal IDE)
│   ├── about/                  # AboutSection, stats counters
│   ├── skills/                 # SkillsSection filterable grid
│   ├── experience/             # ExperienceTimeline
│   ├── projects/               # ProjectCard, ProjectGrid, ProjectVideo, ProjectGallery, ArchitectureDiagram
│   ├── contact/                # ContactForm
│   ├── animations/             # MotionContainer, ScrollProgress
│   └── ui/                     # Button, Badge, CursorGlow, BackToTop
│
├── data/
│   ├── site.ts                 # Personal metadata, bio, stats counters & social links
│   ├── projects.ts             # 4 detailed project case studies
│   ├── skills.ts               # Categorized skills (Frontend, Backend, DB, State, Auth, Tools)
│   └── experience.ts           # Career history timeline
│
├── lib/
│   ├── utils.ts                # Class merger helper (`cn()`)
│   ├── validation.ts           # Zod form validation schema
│   └── email.ts                # Email transporter with dev console fallback
│
├── public/                     # Public static media assets
├── types/                      # TypeScript definitions (`Project`, `Skill`, `Experience`, `SiteConfig`)
├── tailwind.config.ts          # Custom gold theme color scale
├── tsconfig.json               # TypeScript compiler config
└── next.config.ts              # Next.js configuration
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure Node.js 18.x or later is installed.

### 2. Installation
Install project dependencies:
```bash
npm install
```

### 3. Environment Configuration
Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Set credentials for live email delivery via Resend/SendGrid/etc.
# If omitted, contact form submissions log safely to your terminal console in dev mode.
CONTACT_EMAIL=utsav.dev@example.com
EMAIL_FROM=portfolio@utsav.dev
EMAIL_API_KEY=
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build Verification

To test compilation and create a production build locally:
```bash
# Type check TypeScript
npx tsc --noEmit

# Production Build
npm run build

# Start Production Server
npm run start
```

---

## 🚀 Vercel Deployment Instructions

1. **Push Code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Utsav full stack portfolio"
   git remote add origin https://github.com/your-username/utsav-portfolio.git
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Log in to your [Vercel Dashboard](https://vercel.com).
   - Click **Add New** > **Project** and select your `utsav-portfolio` repository.

3. **Configure Environment Variables**:
   - In Vercel Project Settings, add `NEXT_PUBLIC_SITE_URL` (e.g. `https://utsav.dev`).
   - (Optional) Add `CONTACT_EMAIL`, `EMAIL_FROM`, and `EMAIL_API_KEY`.

4. **Deploy**:
   - Click **Deploy**. Vercel will automatically run `npm run build` and generate your edge infrastructure.

---

## ✏️ How to Customize Content

All content is managed in the `/data` directory:

1. **Personal Information & Bio**: Edit `data/site.ts` to change your name, title, bio, social profile links, and resume download link.
2. **Projects**: Edit `data/projects.ts` to update project titles, descriptions, video paths, screenshot arrays, architecture summaries, or challenges & solutions.
3. **Skills & Frameworks**: Edit `data/skills.ts` to add or modify technical competencies and category groupings.
4. **Work Experience**: Edit `data/experience.ts` to update roles, dates, responsibilities, and key achievements.
5. **Resume File**: Place your updated PDF resume at `/public/resume/Utsav-Resume.pdf`.
6. **Project Videos & Screenshots**: Place demo video MP4 files under `/public/videos/` (e.g., `project-1-demo.mp4`) and screenshots under `/public/images/projects/`.
