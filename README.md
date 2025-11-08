# Syntorak Portfolio

A modern portfolio website showcasing web applications and sites built with cutting-edge technologies.

## Tech Stack

- **Next.js 16.0.1** - React framework with App Router and Turbopack
- **React 19.2** - Latest React with enhanced features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework with new @theme syntax
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Icon library
- **React Compiler 1.0** - Automatic optimization

## Project Structure

```
syntorak/
├── frontend/             # Next.js application
│   ├── src/             # Source directory
│   │   ├── app/         # App router pages and layouts
│   │   ├── components/  # Reusable components
│   │   │   ├── ui/      # shadcn/ui components
│   │   │   └── layout/  # Header, Footer
│   │   └── lib/         # Utilities and helpers
│   ├── public/          # Static assets
│   ├── package.json
│   └── tailwind.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20.9.0+ (required for Next.js 16)
- npm (or pnpm, yarn, bun)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/web3at50/syntorak.git
cd syntorak
```

2. Install dependencies:
```bash
cd frontend
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Features

- **Mobile-First Design** - Responsive hamburger menu and optimized layouts
- **Dark Mode Support** - Complete light/dark theme system
- **Font Optimization** - Self-hosted Google Fonts (Lora + Poppins)
- **Type Safety** - Full TypeScript coverage
- **Modern Tooling** - Turbopack for 2-5x faster builds

## SEO

### Sitemap

The site includes an automatically generated sitemap following Next.js 16 best practices:

- **Location**: `frontend/src/app/sitemap.ts`
- **URL**: Accessible at `/sitemap.xml`
- **Type**: Static generation with `force-static`
- **Updates**: Regenerated on each build

**Included Pages:**
- Home (`/`) - Priority: 1.0
- Portfolio (`/portfolio`) - Priority: 0.9
- Platewise (`/portfolio/platewise`) - Priority: 0.8
- Prompt Builder (`/portfolio/prompt-builder`) - Priority: 0.8

### Robots.txt

- **Location**: `frontend/src/app/robots.ts`
- **URL**: Accessible at `/robots.txt`
- **Configuration**: Allows all crawlers, references sitemap

### Open Graph Images

The site includes a dynamically generated Open Graph image for social media sharing:

- **Location**: `frontend/src/app/opengraph-image.tsx`
- **Technology**: Next.js `ImageResponse` API
- **Size**: 1200x630px (optimized for Facebook, Twitter, LinkedIn, Discord)
- **Design**: On-brand gradient (Orange to Green), "Syntorak" title, tagline
- **Generation**: Automatically created at build time
- **Caching**: Statically optimized for fast loading

**Platforms Supported:**
- Facebook/Meta
- Twitter/X
- LinkedIn
- Discord
- Slack
- WhatsApp

**Preview URL**: `/opengraph-image` (or auto-embedded in social shares)

## Deployment

This project is configured for deployment on Vercel:

1. Import the repository in Vercel
2. Configure project settings:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
3. Deploy!

### Environment Variables

For local development, create a `.env.local` file:

```bash
# Site URL for sitemap generation
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production deployment on Vercel, add:
- `NEXT_PUBLIC_SITE_URL` - Your custom domain (e.g., `https://syntorak.com`)

## Featured Projects

- **Platewise** - Recipe management application with intelligent pantry tracking and meal planning
- **Prompt Builder** - AI-powered prompt engineering tool for optimizing workflows

## Brand Design

The site uses a custom design system from `Setup/brand-design-tokens.md`:

- **Primary Color**: Orange (#F7931E)
- **Secondary Color**: Green (#4CAF50)
- **Typography**: Lora (serif, headings) and Poppins (sans-serif, body)
- **Border Radius**: 10px base
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## License

All rights reserved © 2025 Syntorak
