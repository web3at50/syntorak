import Link from "next/link";
import Image from "next/image";

export default function Platewise() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
            Platewise
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            UK-focused AI recipe generation platform with multi-provider comparison and intelligent cost tracking
          </p>

          {/* Demo Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border-2 border-amber-500/20 text-amber-600 dark:text-amber-400 mb-8">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Portfolio Demo Only - Not for Production Use</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://platewise.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              View Live Demo
            </a>
            <a
              href="https://github.com/web3at50/recipe-app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-border hover:border-primary hover:text-primary transition-colors font-semibold"
            >
              View Code on GitHub
            </a>
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="mb-12 p-6 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800">
          <h3 className="text-lg font-semibold mb-2 text-amber-900 dark:text-amber-200">⚠️ Important Notice</h3>
          <p className="text-amber-800 dark:text-amber-300">
            This is a technical demonstration project. AI-generated recipes have not been tested in real kitchens and should not be used for actual cooking or relied upon for allergen safety. The application is fully functional but paused pending implementation of human testing protocols required before commercial use.
          </p>
        </div>

        {/* Hero Screenshot */}
        <div className="mb-16">
          <div className="rounded-lg border-2 border-border overflow-hidden shadow-xl">
            {/* TODO: Replace with actual screenshot */}
            <div className="aspect-video bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Recipe Generation Screenshot (4 AI Providers Side-by-Side)</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3 text-center italic">
            Four different AI models (OpenAI, Anthropic, Gemini, XAI) generating unique recipe variations from the same input
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Platewise generates personalized recipes using artificial intelligence, specifically targeting UK home cooks. Users input available ingredients and dietary restrictions, then receive four different recipe styles in approximately 30 seconds from different AI providers, allowing them to compare and choose their preferred approach.
            </p>
            <p>
              This project demonstrates my ability to architect and direct a full-stack SaaS application, integrate multiple AI providers with intelligent routing, implement proper authentication and data security, build comprehensive admin tools and analytics, and deploy a production-ready application.
            </p>
            <p>
              <strong>My Role:</strong> Technical product builder using AI assistance. I made all architectural decisions (which AI providers, complexity scoring design, feature prioritization, tech stack choices) and configured all services, while using AI tools to assist with code implementation.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Next.js 15", color: "bg-black dark:bg-white text-white dark:text-black" },
              { name: "TypeScript", color: "bg-blue-600 text-white" },
              { name: "Tailwind CSS", color: "bg-cyan-500 text-white" },
              { name: "Supabase", color: "bg-green-600 text-white" },
              { name: "PostgreSQL", color: "bg-blue-700 text-white" },
              { name: "Clerk Auth", color: "bg-purple-600 text-white" },
              { name: "OpenAI", color: "bg-emerald-600 text-white" },
              { name: "Anthropic Claude", color: "bg-orange-600 text-white" },
              { name: "Google Gemini", color: "bg-blue-500 text-white" },
              { name: "XAI Grok", color: "bg-gray-800 text-white" },
              { name: "Vercel", color: "bg-black text-white" },
              { name: "React 19", color: "bg-cyan-600 text-white" },
            ].map((tech) => (
              <div key={tech.name} className={`px-4 py-3 rounded-lg font-semibold text-center ${tech.color}`}>
                {tech.name}
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Multi-AI Recipe Generation",
                description: "Integrated 4 AI providers (OpenAI, Anthropic, Google Gemini, XAI) that generate different recipe styles simultaneously, giving users variety to choose their preferred approach.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Intelligent Cost Tracking",
                description: "Every AI request is logged with token counts, costs, and performance metrics. Admin dashboard shows total costs, average per recipe, and provider comparison.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Complexity-Based Prioritization",
                description: "Requests with allergens or complex dietary needs get higher priority scores, ensuring safety-critical requests use more capable AI models.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
              {
                title: "Admin Review Workflow",
                description: "Admin users can review AI-generated recipes, edit SEO metadata and allergen tags, and manage publication. Uses Clerk user metadata for role-based access control.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "UK Market Focus",
                description: "All recipes use British measurements (grams, ml, °C), ingredient names (courgette, aubergine), and references to UK supermarkets. Designed for the underserved UK market.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Complete User Journey",
                description: "Beyond recipe generation: weekly meal planner with calendar view, auto-generated shopping lists with ingredient aggregation, and pantry staples tracking.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-lg border-2 border-border bg-card p-6 hover:border-primary transition-colors">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Screenshots</h2>

          {/* Screenshot 1: Recipe Generation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Recipe Generation (4 AI Styles)</h3>
            <div className="rounded-lg border-2 border-border overflow-hidden shadow-lg mb-4">
              {/* TODO: Replace with actual screenshot */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Screenshot: 01-recipe-generation.png</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Four different AI providers generate unique variations of the same dish (Balanced, Guided, Streamlined, Essential), allowing users to compare and choose their preferred style.
            </p>
          </div>

          {/* Screenshot 2: Analytics Dashboard */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">AI Cost Analytics Dashboard</h3>
            <div className="rounded-lg border-2 border-border overflow-hidden shadow-lg mb-4">
              {/* TODO: Replace with actual screenshot */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Screenshot: 02-analytics-dashboard.png</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Real-time tracking of AI usage costs, token consumption, and provider performance. Shows total costs, average cost per recipe, and identifies the most cost-effective providers.
            </p>
          </div>

          {/* Screenshot 3: Admin Review */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Admin Recipe Review Workflow</h3>
            <div className="rounded-lg border-2 border-border overflow-hidden shadow-lg mb-4">
              {/* TODO: Replace with actual screenshot */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Screenshot: 03-admin-review.png</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Admin dashboard for reviewing AI-generated recipes, editing SEO metadata, managing allergen tags, and controlling publication to public pages.
            </p>
          </div>

          {/* Screenshot 4: Meal Planner */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Weekly Meal Planner</h3>
            <div className="rounded-lg border-2 border-border overflow-hidden shadow-lg mb-4">
              {/* TODO: Replace with actual screenshot */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Screenshot: 04-meal-planner.png</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Weekly calendar view for meal planning with breakfast, lunch, and dinner scheduling. Demonstrates complete user journey from recipe generation to meal organization.
            </p>
          </div>
        </section>

        {/* Optional: Demo Video Section (commented out - uncomment when video is ready) */}
        {/*
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Demo Walkthrough</h2>
          <div className="rounded-lg border-2 border-border overflow-hidden shadow-xl">
            <div className="aspect-video">
              <iframe
                src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3 text-center italic">
            60-second walkthrough showing recipe generation, cost tracking, and admin features
          </p>
        </section>
        */}

        {/* Why I Built This */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why I Built This</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              I wanted to demonstrate my ability to architect and ship a complete SaaS application while solving a real problem I personally experienced: dinner decision fatigue. The multi-AI approach serves two purposes: it gives users variety (different recipe styles), and it showcases my ability to integrate multiple complex services.
            </p>
            <p>
              The UK market focus came from research showing most recipe apps are US-centric with American measurements, ingredient names, and availability assumptions. British users represent an underserved market segment, and localizing for them demonstrates market research and product thinking skills.
            </p>
            <p>
              I chose to build cost tracking from day one because understanding AI economics is critical for any production application. The analytics dashboard helps make data-driven decisions about which providers to use and when.
            </p>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Service Integration</h3>
              <p className="text-muted-foreground">
                Configured Clerk authentication with Supabase using the 2025 recommended integration method. Set up Google SSO, managed JWT session claims for admin access, and implemented Row-Level Security policies.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Database Evolution</h3>
              <p className="text-muted-foreground">
                Managed 31 database migrations showing how schemas evolve as requirements become clearer. Learned when to use JSONB for flexible data structures vs. normalized tables.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Cost Awareness</h3>
              <p className="text-muted-foreground">
                Built comprehensive usage tracking from day one. Logging tokens, costs, and performance metrics enables data-driven optimization and sustainability planning for SaaS economics.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Professional Judgment</h3>
              <p className="text-muted-foreground">
                Paused development when I realized AI-generated recipes require human testing before commercial use. Technical completion doesn't equal readiness for public deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Project Status */}
        <section className="mb-16">
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
            <h2 className="text-2xl font-bold mb-4">Project Status</h2>
            <p className="text-muted-foreground mb-6">
              <strong>Feature-complete MVP deployed for demonstration purposes.</strong> The application is fully functional and live in production, but not commercially available. Development is paused pending implementation of human testing protocols required before AI-generated recipes can be safely published.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>134 commits</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>31 database migrations</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>88.1% TypeScript</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              <strong>Next steps if resuming:</strong> Implement human testing workflow for recipe validation, add chef review notes and approval system, verify allergen safety with qualified professionals.
            </p>
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://platewise.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border-2 border-border hover:border-primary bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Live Demo</h3>
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-muted-foreground">
                Try the live application at platewise.xyz (demo only - see disclaimer)
              </p>
            </a>

            <a
              href="https://github.com/web3at50/recipe-app"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border-2 border-border hover:border-primary bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">GitHub Repository</h3>
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-muted-foreground">
                Explore the complete source code, database migrations, and technical documentation
              </p>
            </a>
          </div>
        </section>

        {/* Back to Portfolio */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
