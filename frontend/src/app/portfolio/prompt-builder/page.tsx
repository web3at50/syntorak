import Link from "next/link";
import Image from "next/image";
import { ImageLightbox } from "@/components/ImageLightbox";

export default function PromptBuilder() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
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
            PromptBuilder AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Smart AI prompt management platform that helps teams craft better prompts, track costs, and collaborate—with built-in moderation and multi-AI comparison
          </p>

          {/* Notice Boxes Container */}
          <div className="flex flex-wrap gap-4 mb-8 justify-between items-start">
            {/* Demo Disclaimer Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border-2 border-amber-500/20 text-amber-600 dark:text-amber-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Portfolio Demo - Fully Functional Live Application</span>
            </div>

            {/* Technical Teams Callout */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border-2 border-blue-500/20 text-blue-600 dark:text-blue-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">
                Technical teams & agencies: <a href="#technical-details" className="underline hover:text-blue-700 dark:hover:text-blue-300">Jump to implementation details ↓</a>
              </span>
            </div>
          </div>
        </div>

        {/* Hero Screenshot */}
        <section className="mb-16">
          <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-2xl">
            <ImageLightbox
              src="/images/portfolio/promptbuilder/05-version-history.png"
              alt="Complete version history interface showing prompt iterations with one-click restoration capability"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 text-lg">
            <strong>Never lose a good prompt.</strong> Complete version control with full history tracking and one-click restoration. <span className="text-sm italic">(Click to enlarge)</span>
          </p>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              You need AI-generated content, but how do you know if your prompts are actually good? Teams waste time rewriting prompts, can't track what works, have no idea what they're spending on AI, and lack proper moderation to prevent inappropriate content from slipping through.
            </p>
            <p>
              Beyond just writing prompts, every team member has their own approach with no version control or collaboration. There's no way to compare different AI providers, no analytics to understand usage patterns, and no systematic way to share what works across the organization.
            </p>
          </div>
        </section>

        {/* The Solution I Built */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution I Built</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              A platform where teams can create, optimize, and manage AI prompts while comparing results across multiple providers. Within seconds, see side-by-side responses from Claude Sonnet 4.5 and GPT-4o, with comprehensive cost tracking showing exactly what each request costs.
            </p>
            <p>
              Beyond just prompts, the platform includes a complete team collaboration experience:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Compare AI responses side-by-side</strong> - See Claude vs ChatGPT results instantly</li>
              <li><strong>Track every version</strong> - Full history with one-click restoration</li>
              <li><strong>Share the best prompts</strong> - Community library with filtering and discovery</li>
              <li><strong>Know your costs</strong> - Real-time tracking of every AI request with per-token pricing</li>
              <li><strong>Moderate safely</strong> - Automated 11-category content moderation with review workflows</li>
              <li><strong>Analyze usage patterns</strong> - Comprehensive admin dashboard for team insights</li>
            </ul>
          </div>
        </section>

        {/* What Users Can Do */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Users Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Compare Multiple AIs in Real-Time",
                description: "See Claude Sonnet 4.5 and GPT-4o responses side-by-side for the same prompt. Identify which AI works best for your specific use case and make data-driven decisions on AI provider selection.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Never Lose a Good Prompt",
                description: "Complete version history for every prompt you create. One-click restoration of previous versions, markdown editor with live preview, and favorites system for quick access to your best work.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Discover Community Wisdom",
                description: "Browse shared prompts from other users with smart filtering and search. Save favorites, export usage logs to CSV, and learn from the community's best practices.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: "Manage Your Team with Confidence",
                description: "Admin dashboard with real-time analytics, detailed logs, and content moderation queues. Track spending patterns, analyze usage trends, and manage team access with role-based permissions.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

        {/* Demo Video Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See It In Action</h2>
          <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-2xl mb-4">
            <div className="aspect-video bg-black">
              <iframe
                src="https://player.vimeo.com/video/1136497500"
                className="w-full h-full"
                style={{ border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center italic mb-12">
            Watch the comprehensive admin dashboard: analytics, logs, and moderation workflows
          </p>

          {/* Screenshot 1: Dual AI Comparison */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Dual AI Comparison - Claude vs ChatGPT</h3>
            <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/promptbuilder/01-dual-comparison.png"
                alt="Side-by-side comparison of Claude Sonnet 4.5 and GPT-4o responses to the same prompt"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-muted-foreground">
              Compare Claude Sonnet 4.5 and GPT-4o responses side-by-side for the same prompt. See which AI provider works best for your specific use case and make data-driven decisions. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>

          {/* Screenshot 2: Community Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Community Prompt Library</h3>
            <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/promptbuilder/03-community-gallery.png"
                alt="Community prompt library with filtering, search, and discovery features"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Browse and discover prompts shared by the community. Smart filtering, search functionality, and favorites system help you find and save the best prompts for your needs. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>

          {/* Screenshot 3: Version History */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Complete Version Control</h3>
            <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/promptbuilder/05-version-history.png"
                alt="Version history interface showing all prompt iterations with restoration capability"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Every prompt iteration is saved automatically. View complete history, compare versions, and restore previous versions with a single click. Never lose a good prompt again. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>
        </section>

        {/* Why This Matters For Your Business */}
        <section className="mb-16">
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why This Example Matters For Your Business</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                You might be thinking: "I don't need a prompt management tool—I need a customer analytics dashboard" or "I need a content moderation system" or "I need a team collaboration platform."
              </p>
              <p className="font-semibold text-foreground">
                That's exactly the point. This project demonstrates transferable skills:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Building admin dashboards</strong> - Real-time analytics, filtering, data visualization with charts and trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Content moderation systems</strong> - Automated scoring, review queues, approval workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Multi-provider API integration</strong> - Anthropic, OpenAI with intelligent routing and error handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>User analytics & tracking</strong> - Comprehensive logging, cost tracking, trend analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Team collaboration features</strong> - Sharing, discovery, role-based access control</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>SaaS economics</strong> - Per-token cost tracking, usage analytics for sustainability planning</span>
                </li>
              </ul>
              <p className="text-foreground font-semibold pt-4">
                If I can build a prompt management platform with dual-AI comparison, moderation workflows, and cost analytics—I can build your customer dashboard, team collaboration tool, or content management system. The industry changes, the skills don't.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://promptbuilderai.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              Visit PromptBuilder Live Site
            </a>
            <a
              href="https://github.com/web3at50/promptbuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors font-semibold"
            >
              View GitHub Repository
            </a>
          </div>
        </section>

        {/* Important Disclaimer */}
        <section className="mb-16">
          <div className="p-6 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800">
            <h3 className="text-lg font-semibold mb-2 text-amber-900 dark:text-amber-200">⚠️ Important Notice</h3>
            <p className="text-amber-800 dark:text-amber-300">
              This is a fully functional application deployed for showcasing technical capabilities. Free tier includes a 10-prompt usage limit. For increased usage or inquiries, contact <a href="mailto:support@syntorak.com" className="underline font-semibold hover:text-amber-900 dark:hover:text-amber-200">support@syntorak.com</a>
            </p>
          </div>
        </section>

        {/* Technical Implementation Divider */}
        <div id="technical-details" className="my-16 border-t-4 border-primary/20"></div>
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technical Implementation Details
            </h2>
            <p className="text-xl text-muted-foreground">
              For developers and agencies interested in the technical architecture, tools, and lessons learned
            </p>
          </div>
        </section>

        {/* Why I Built This */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why I Built This</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              I wanted to demonstrate my ability to architect a complete SaaS platform while solving a real problem: AI prompt quality and cost management. The multi-AI comparison serves two purposes: it helps users find the best AI for their needs, and it showcases my ability to integrate multiple complex services with intelligent routing.
            </p>
            <p>
              The comprehensive admin dashboard came from research showing that businesses need visibility into AI spending and content safety. Building moderation workflows, cost tracking, and team analytics from day one demonstrates production-ready thinking and business awareness.
            </p>
            <p>
              I chose to implement OpenAI's 11-category moderation API because content safety is critical for any user-generated platform. The automated scoring system (auto-publish below 0.3, review queue 0.3-0.8, auto-reject above 0.8) shows I understand how to balance automation with human oversight.
            </p>
          </div>
        </section>

        {/* Technical Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              PromptBuilder enables users to create, optimize, and manage AI prompts while comparing results across multiple providers. Users can track version history, share prompts with the community, and monitor costs with per-token precision.
            </p>
            <p>
              This project demonstrates my ability to architect a full-stack SaaS application with proper authentication and data security, integrate multiple AI providers (Anthropic, OpenAI) with 11 model variants, build comprehensive admin tools with analytics, advanced logging, and content moderation, implement Row Level Security policies and role-based access control, and deploy production-ready applications with proper monitoring and cost tracking.
            </p>
            <p>
              <strong>My Role:</strong> Technical architect and builder using AI assistance. I made all architectural decisions (database schema design, API structure, feature prioritization, tech stack choices) and configured all services, while using AI tools to assist with code implementation.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Next.js 15", color: "bg-black dark:bg-white text-white dark:text-black" },
              { name: "React 19", color: "bg-cyan-600 text-white" },
              { name: "TypeScript", color: "bg-blue-600 text-white" },
              { name: "Tailwind CSS 4", color: "bg-cyan-500 text-white" },
              { name: "Supabase", color: "bg-green-600 text-white" },
              { name: "PostgreSQL", color: "bg-blue-700 text-white" },
              { name: "Clerk Auth", color: "bg-purple-600 text-white" },
              { name: "OpenAI API", color: "bg-emerald-600 text-white" },
              { name: "Anthropic Claude", color: "bg-orange-600 text-white" },
              { name: "Vercel", color: "bg-black text-white" },
              { name: "Radix UI", color: "bg-gray-700 text-white" },
              { name: "Recharts", color: "bg-blue-500 text-white" },
            ].map((tech) => (
              <div key={tech.name} className={`px-4 py-3 rounded-lg font-semibold text-center ${tech.color}`}>
                {tech.name}
              </div>
            ))}
          </div>
        </section>

        {/* Technical Architecture Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Architecture</h2>

          {/* GitHub Link */}
          <div className="mb-6">
            <a
              href="https://github.com/web3at50/promptbuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-border hover:border-primary hover:text-primary transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Code on GitHub
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Dual AI Provider Integration",
                description: "Side-by-side comparison of Claude Sonnet 4.5 vs GPT-4o. Support for 11 AI models across 2 providers with parallel execution, error handling, and intelligent fallback mechanisms.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Comprehensive Cost Tracking System",
                description: "Per-token pricing precision for every request. Real-time cost calculation across all providers with admin analytics showing spending patterns, usage trends, and provider comparison for data-driven optimization.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "OpenAI Content Moderation Integration",
                description: "11-category automated safety scoring with intelligent workflow: scores below 0.3 auto-publish, 0.3-0.8 require admin review, and above 0.8 face automatic rejection with user notification.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Complete Version Control System",
                description: "Full history tracking for every prompt iteration with one-click restoration to any previous version. 26 database migrations document the schema evolution and demonstrate proper database management practices.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Role-Based Access Control",
                description: "Clerk authentication with JWT session claims for admin access. PostgreSQL Row Level Security policies ensure users access only their data. Admin-only routes protected by middleware.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "RESTful API Architecture",
                description: "34 well-organized API endpoints covering all functionality. 8 core database tables with proper relationships and constraints. Advanced filtering and search across all logged data with CSV export capability.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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

        {/* Technical Screenshots */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Admin Tools & Analytics</h2>

          {/* Screenshot 1: Admin Dashboard */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Admin Analytics Dashboard</h3>
            <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/promptbuilder/04-admin-dashboard.png"
                alt="Admin analytics dashboard showing cost tracking, usage trends, and provider performance metrics"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Real-time tracking of AI usage costs, token consumption, and provider performance. Shows total costs, average cost per prompt, usage trends over time, and identifies the most cost-effective providers for data-driven decision making. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>

          {/* Screenshot 2: Moderation Dashboard */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Content Moderation Dashboard</h3>
            <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/promptbuilder/02-moderation-dashboard.png"
                alt="Content moderation dashboard with OpenAI safety scores and approval workflow controls"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Comprehensive content moderation workflow showing OpenAI's 11-category safety scores with approve/reject controls. Demonstrates proper content governance with automated scoring and human oversight for the review queue. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Multi-Provider API Integration</h3>
              <p className="text-muted-foreground">
                Integrated Anthropic and OpenAI APIs with different authentication methods, rate limiting strategies, and response formats. Built intelligent routing to compare results side-by-side with parallel execution and error handling.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Database Schema Evolution</h3>
              <p className="text-muted-foreground">
                Managed 26 database migrations showing how requirements evolve in real projects. Learned when to use normalized tables vs JSONB for flexible data structures and implemented proper Row Level Security policies.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Production SaaS Economics</h3>
              <p className="text-muted-foreground">
                Built comprehensive cost tracking from day one with per-token precision. Logging every request enables accurate billing simulation, sustainability planning, and data-driven optimization for any SaaS model.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Content Safety Implementation</h3>
              <p className="text-muted-foreground">
                Integrated OpenAI's moderation API with automated workflow balancing efficiency and oversight. Demonstrates understanding that technical completion requires proper safety measures for user-generated content.
              </p>
            </div>
          </div>
        </section>

        {/* Project Status */}
        <section className="mb-16">
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
            <h2 className="text-2xl font-bold mb-4">Project Status</h2>
            <p className="text-muted-foreground mb-6">
              <strong>Production-ready SaaS platform deployed and live.</strong> The application is fully functional at promptbuilderai.xyz with comprehensive admin tools, content moderation workflows, and multi-AI comparison features. Repository available with MIT license for review.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>34 API endpoints</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>26 database migrations</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>11 supported AI models</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>8 core database tables</span>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <a
              href="https://promptbuilderai.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border-2 border-border hover:border-primary bg-card p-6 transition-all hover:shadow-lg block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Try the Live Demo</h3>
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-muted-foreground">
                Experience the full application at promptbuilderai.xyz - compare AI responses, track costs, manage prompts, and explore the community library
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
