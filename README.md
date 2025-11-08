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

## Deployment

This project is configured for deployment on Vercel:

1. Import the repository in Vercel
2. Configure project settings:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
3. Deploy!

### Environment Variables

No environment variables required for initial deployment.

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
