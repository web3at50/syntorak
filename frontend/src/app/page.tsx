import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Syntorak
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Building innovative web applications and sites with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View Portfolio
              </Link>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 text-lg font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">About Syntorak</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Syntorak is a showcase of carefully crafted web applications and sites,
              each built with attention to detail, modern best practices, and user experience in mind.
            </p>
            <p className="text-lg text-muted-foreground">
              From recipe management to AI-powered tools, explore a diverse range of projects
              that demonstrate expertise across the full stack of web development.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of the innovative applications in the portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Platewise Card */}
            <Link
              href="/portfolio/platewise"
              className="group relative overflow-hidden rounded-lg border-2 border-border bg-card p-8 hover:border-primary transition-all hover:shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
              <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">Platewise</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive recipe management application with intelligent pantry tracking and meal planning features.
              </p>
              <span className="text-primary font-semibold group-hover:underline">
                View Project →
              </span>
            </Link>

            {/* Prompt Builder Card */}
            <Link
              href="/portfolio/prompt-builder"
              className="group relative overflow-hidden rounded-lg border-2 border-border bg-card p-8 hover:border-secondary transition-all hover:shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary to-primary opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
              <h3 className="text-2xl mb-3 group-hover:text-secondary transition-colors">Prompt Builder</h3>
              <p className="text-muted-foreground mb-4">
                An AI-powered tool for crafting effective prompts, optimizing workflows, and enhancing productivity.
              </p>
              <span className="text-secondary font-semibold group-hover:underline">
                View Project →
              </span>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border-2 border-border px-8 py-3 text-lg font-semibold hover:bg-accent transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
