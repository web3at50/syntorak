import Link from "next/link";

export default function Platewise() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
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

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Platewise
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive recipe management application with intelligent pantry tracking and meal planning features.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              Platewise is a modern recipe management application designed to help home cooks organize their recipes,
              track pantry inventory, and plan meals efficiently. Built with a focus on user experience and performance,
              it demonstrates advanced frontend development techniques and seamless backend integration.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Recipe Management",
                description: "Create, organize, and search recipes with rich metadata including cuisines, dietary preferences, and cooking times.",
              },
              {
                title: "Smart Pantry Tracking",
                description: "Keep track of pantry items with automatic low-stock alerts and shopping list generation.",
              },
              {
                title: "Meal Planning",
                description: "Plan weekly meals with drag-and-drop functionality and automated grocery lists.",
              },
              {
                title: "Responsive Design",
                description: "Beautiful, mobile-first interface that works seamlessly across all devices.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-lg border-2 border-border bg-card p-6">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Technical Highlights</h2>
          <div className="rounded-lg border-2 border-border bg-card p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Built with Next.js 15 App Router for optimal performance and SEO</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Fully typed with TypeScript for enhanced developer experience</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Custom design system with Tailwind CSS and shadcn/ui components</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Supabase backend with PostgreSQL for robust data management</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Status */}
        <section>
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="text-2xl mb-3">Project Status</h3>
            <p className="text-muted-foreground mb-4">
              This project is currently in active development. More details, screenshots, and live demo links will be added soon.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              In Development
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
