import Link from "next/link";

export default function PromptBuilder() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Prompt Builder
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            An AI-powered tool for crafting effective prompts, optimizing workflows, and enhancing productivity.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Next.js", "React 19", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary font-medium"
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
              Prompt Builder is an intelligent tool designed to help users craft effective AI prompts through
              structured templates, real-time suggestions, and best practices. It streamlines the prompt engineering
              process and helps users get better results from AI models.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Template Library",
                description: "Pre-built prompt templates for common use cases including content creation, analysis, and problem-solving.",
              },
              {
                title: "AI Suggestions",
                description: "Real-time suggestions and improvements powered by AI to enhance prompt effectiveness.",
              },
              {
                title: "Version Control",
                description: "Track prompt iterations and compare results to continuously improve your prompts.",
              },
              {
                title: "Export & Share",
                description: "Easy export options and sharing functionality for team collaboration.",
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
                <span className="text-muted-foreground">Integration with OpenAI API for intelligent prompt enhancement</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Vercel AI SDK for streaming responses and enhanced UX</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Real-time collaboration features with WebSocket support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Responsive design optimized for desktop and mobile workflows</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Use Cases</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Content creators optimizing prompts for blog posts and marketing copy",
              "Developers building AI-powered applications and needing effective prompts",
              "Researchers conducting systematic AI experiments and comparisons",
              "Teams collaborating on prompt engineering best practices",
            ].map((useCase, index) => (
              <div key={index} className="flex items-start rounded-lg border border-border bg-card p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-semibold mr-4">
                  {index + 1}
                </span>
                <p className="text-muted-foreground pt-1">{useCase}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Status */}
        <section>
          <div className="rounded-lg border-2 border-secondary/20 bg-secondary/5 p-8 text-center">
            <h3 className="text-2xl mb-3">Project Status</h3>
            <p className="text-muted-foreground mb-4">
              This project is currently in active development. More details, screenshots, and live demo links will be added soon.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
              In Development
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
