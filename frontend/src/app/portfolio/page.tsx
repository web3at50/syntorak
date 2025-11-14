import Link from "next/link";

const projects = [
  {
    title: "Platewise",
    slug: "platewise",
    description: "A comprehensive recipe management application with intelligent pantry tracking, meal planning, and shopping list features.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "Prompt Builder",
    slug: "prompt-builder",
    description: "An AI-powered tool for crafting effective prompts, optimizing workflows, and enhancing productivity with intelligent suggestions.",
    tech: ["Next.js", "React", "TypeScript", "OpenAI API", "Tailwind CSS"],
    gradient: "from-secondary to-primary",
  },
  {
    title: "NFT Collection Tools",
    slug: "6529nfts",
    description: "Real-time NFT portfolio tracking and market analysis platform serving 10,000+ collectors with automated data pipelines and Supabase backend.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Edge Functions"],
    gradient: "from-primary to-secondary",
  },
];

export default function Portfolio() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            A collection of web applications and sites showcasing modern development practices,
            innovative features, and thoughtful user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group relative overflow-hidden rounded-xl border-2 border-border bg-card p-8 hover:border-primary transition-all hover:shadow-xl"
            >
              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}></div>

              {/* Content */}
              <div className="relative">
                <h2 className="text-3xl mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-primary font-semibold group-hover:underline inline-flex items-center">
                  View Project
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
