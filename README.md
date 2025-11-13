# Syntorak Portfolio

**Modern portfolio website showcasing full-stack web applications**

## What This Is

This is my personal portfolio site, built to showcase the web applications I've developed. Rather than just listing projects, each portfolio piece includes detailed case studies highlighting the technical decisions, challenges overcome, and skills demonstrated.

**Current featured projects:**
- [PlateWise](/portfolio/platewise) - AI recipe manager with multi-provider comparison
- [Prompt Builder](/portfolio/prompt-builder) - AI prompt management platform

## Why Built This Way

**Technology Choices:**
I chose bleeding-edge technologies to demonstrate comfort working with the latest tools and staying current with modern web development practices. The site uses Next.js 16 (released January 2025), React 19, and Tailwind CSS 4 - all representing the current state of frontend development.

**Philosophy:**
Clean, fast, accessible. Every component is built with mobile users in mind first, using semantic HTML and proper heading hierarchy for accessibility. The design system is consistent and professional without being flashy.

## Tech Stack

**Framework:** Next.js 16 with App Router and Turbopack (2-5x faster builds)

**Frontend:** React 19, TypeScript, Tailwind CSS 4 (new @theme syntax)

**UI Components:** shadcn/ui (accessible, customizable components)

**Optimization:** React Compiler 1.0 for automatic performance optimization

**Hosting:** Vercel with edge deployment

## Key Features

**1. Mobile-First Design**
Fully responsive with optimized layouts for all screen sizes. Interactive hamburger menu, touch-friendly navigation, and readable typography on mobile devices.

**2. Dark Mode Support**
Complete light/dark theme system with persistent user preference. Smooth transitions and carefully chosen colors for readability in both modes.

**3. Performance Optimized**
- Turbopack dev server for instant hot module replacement
- React Compiler for automatic memoization
- Self-hosted fonts for zero network requests
- Optimized images and assets

**4. SEO Ready**
Auto-generated sitemap, proper robots.txt, Open Graph images for social sharing, semantic HTML structure, and descriptive meta tags.

**5. Interactive Portfolio Pages**
Each project includes screenshots with lightbox viewing, detailed case studies, tech stack breakdowns, and links to live demos.

## Design System

**Colors:** Orange (#F7931E) and Green (#4CAF50) gradient palette

**Typography:** Lora for headings (elegant serif), Poppins for body text (clean sans-serif)

**Components:** Consistent 10px border radius, subtle shadows, smooth transitions

**Layout:** Maximum content width for readability, generous whitespace, clear visual hierarchy

## Skills Demonstrated

**Modern Web Development:**
Using latest Next.js features (App Router, Server Components), React 19 concurrent features, and Turbopack tooling

**Type Safety:**
Full TypeScript implementation with proper type definitions and interfaces

**Responsive Design:**
Mobile-first CSS, flexible layouts, accessible navigation patterns

**Component Architecture:**
Reusable UI components, proper separation of concerns, maintainable code structure

**Performance:**
Code splitting, lazy loading, optimized assets, React Compiler integration

**SEO & Social:**
Structured data, meta tags, Open Graph images, sitemaps

## Project Structure

```
syntorak/
├── frontend/
│   ├── src/
│   │   ├── app/              # Pages and routing
│   │   │   ├── portfolio/    # Portfolio project pages
│   │   │   ├── sitemap.ts    # Auto-generated sitemap
│   │   │   └── robots.ts     # Crawler configuration
│   │   ├── components/       # Reusable UI
│   │   │   ├── ui/           # shadcn components
│   │   │   └── layout/       # Header, Footer
│   │   ├── contexts/         # Theme management
│   │   └── lib/              # Utilities
│   ├── public/               # Static assets & screenshots
│   └── package.json
└── README.md
```

## Local Development

**Prerequisites:**
- Node.js 20.9.0+ (required for Next.js 16)
- npm or pnpm

**Quick Start:**
```bash
git clone https://github.com/web3at50/syntorak.git
cd syntorak/frontend
npm install
npm run dev
```

Visit `http://localhost:3000` to see the site.

## What's Next

As I build more applications, they'll be added to the portfolio section with detailed case studies. Future additions might include:
- More SaaS applications demonstrating different tech stacks
- Open source projects and contributions
- Technical writing samples
- Interactive demos and code examples

## About

This portfolio demonstrates my ability to:
- Build production-ready applications with modern JavaScript frameworks
- Make thoughtful technology choices based on project requirements
- Create accessible, responsive user interfaces
- Write clean, maintainable TypeScript code
- Stay current with rapidly evolving web technologies
- Present technical work in an accessible way

---

**Live Site:** syntorak.com | **GitHub:** github.com/web3at50/syntorak | **Contact:** support@syntorak.com
