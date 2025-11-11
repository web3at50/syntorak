import Link from "next/link";
import Image from "next/image";
import { ImageLightbox } from "@/components/ImageLightbox";

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
            Custom AI-powered recipe app that helps British home cooks plan meals in seconds, not hours
          </p>

          {/* Demo Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border-2 border-amber-500/20 text-amber-600 dark:text-amber-400 mb-8">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Portfolio Demo Only - Not for Production Use</span>
          </div>

        </div>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              You're staring at the fridge wondering "what's for dinner?" for the third time this week. Most recipe apps use American measurements and ingredients, making them frustrating for UK cooks. Meal planning feels like a chore that takes hours every week.
            </p>
            <p>
              Beyond the measurement conversion hassle, US-centric apps assume ingredient availability that doesn't match UK supermarkets, use unfamiliar terminology (zucchini vs courgette), and provide oven temperatures in Fahrenheit. For British home cooks, this creates friction at every step of the cooking process.
            </p>
          </div>
        </section>

        {/* The Solution I Built */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution I Built</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              A web application where you enter your available ingredients, dietary needs, and preferences. Within 30 seconds, you receive four different personalized recipe suggestions—all using British measurements (grams, ml, °C), UK ingredient names (courgette, not zucchini), and references to UK supermarkets.
            </p>
            <p>
              Beyond just recipes, the app includes a complete meal planning experience:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Weekly meal planner</strong> with calendar view for organizing breakfast, lunch, and dinner</li>
              <li><strong>Automatic shopping list generation</strong> that aggregates ingredients across your planned meals</li>
              <li><strong>Pantry staples tracker</strong> so you can exclude items you always have on hand</li>
              <li><strong>Smart allergen handling</strong> to ensure recipes are safe for your dietary restrictions</li>
              <li><strong>Recipe variety</strong> with four different AI-generated styles to choose from</li>
            </ul>
          </div>
        </section>

        {/* What Users Can Do */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Users Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Get Recipe Variety & Choice",
                description: "Every search generates four different recipe styles to choose from. Whether you prefer detailed instructions or quick overviews, you'll find a recipe that matches your cooking style.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Cook with British Standards",
                description: "All recipes use British measurements (grams, ml, °C), proper UK ingredient names (courgette, aubergine), and reference ingredients available at UK supermarkets. No more converting cups to grams.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Stay Safe with Allergen Handling",
                description: "Indicate your dietary restrictions and allergens when searching. The app handles all 14 major allergens as per Natasha's Law (including celery, gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, peanuts, sesame, soya, sulphites, and tree nuts), automatically ensuring recipes are safe and suitable for your specific needs.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
              {
                title: "Plan Your Entire Week",
                description: "Beyond just finding recipes: organize your meals with a weekly calendar planner, automatically generate shopping lists that combine all your planned meals, and track pantry staples to avoid buying what you already have.",
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

        {/* Demo Video Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See It In Action</h2>
          <div className="rounded-lg border-4 border-primary/20 overflow-hidden shadow-2xl mb-4 ring-2 ring-primary/10">
            <div className="aspect-video bg-black">
              <iframe
                src="https://player.vimeo.com/video/1135668926?h=de283f1d18"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center italic mb-12">
            Watch how the app generates four different recipe styles in real-time
          </p>

          {/* Screenshot 1: Recipe Generation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Recipe Variety - Choose Your Style</h3>
            <div className="rounded-lg border-2 border-border overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/platewise/01-recipe-generation.png"
                alt="Recipe generation interface showing four different recipe styles displayed side-by-side for user comparison"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-muted-foreground">
              Every search generates four different styles: Balanced (comprehensive), Guided (step-by-step), Streamlined (efficient), and Essential (quick reference). Choose the one that matches your cooking preference. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>

          {/* Screenshot 2: Meal Planner */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Weekly Meal Planning Made Simple</h3>
            <div className="rounded-lg border-2 border-border overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/platewise/04-meal-planner.png"
                alt="Weekly meal planning calendar with recipe scheduling for breakfast, lunch, and dinner across the week"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Organize your entire week with the calendar view. Plan breakfast, lunch, and dinner, then automatically generate a shopping list for all your planned meals. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>
        </section>

        {/* Why This Matters For Your Business */}
        <section className="mb-16">
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why This Example Matters For Your Business</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                You might be thinking: "I don't need a recipe app—I need a booking system for my business" or "I need an inventory tracker" or "I need a customer portal."
              </p>
              <p className="font-semibold text-foreground">
                That's exactly the point. This project demonstrates transferable skills:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Building custom web applications from scratch</strong> that solve specific problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Creating user-friendly interfaces</strong> that people actually want to use</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Integrating complex services</strong> (payments, calendars, authentication, APIs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Thinking about the complete user journey</strong>, not just individual features</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Shipping finished, professional products</strong> that are ready to use</span>
                </li>
              </ul>
              <p className="text-foreground font-semibold pt-4">
                If I can build a recipe app with meal planning, shopping lists, and AI integration—I can build your booking system, inventory tracker, or customer portal. The industry changes, the skills don't.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://platewise.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              Visit Platewise Live Site
            </a>
            <a
              href="https://www.platewise.xyz/recipes/dinner/creamy-herb-fish-cakes-with-cheese"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors font-semibold"
            >
              See Example Recipe
            </a>
          </div>
        </section>

        {/* Important Disclaimer */}
        <section className="mb-16">
          <div className="p-6 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800">
            <h3 className="text-lg font-semibold mb-2 text-amber-900 dark:text-amber-200">⚠️ Important Notice</h3>
            <p className="text-amber-800 dark:text-amber-300">
              This is a portfolio demonstration. The app is fully functional, but recipes haven't been tested in real kitchens. Development is paused pending implementation of proper safety testing before any commercial launch.
            </p>
          </div>
        </section>

        {/* Technical Implementation Divider */}
        <div className="my-16 border-t-4 border-primary/20"></div>
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

        {/* Technical Project Overview */}
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

        {/* Technical Architecture Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Architecture</h2>

          {/* GitHub Link */}
          <div className="mb-6">
            <a
              href="https://github.com/web3at50/recipe-app"
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
                title: "Multi-AI Provider Integration",
                description: "Integrated 4 AI providers (OpenAI, Anthropic, Google Gemini, XAI) with parallel processing and intelligent routing. Each provider generates unique recipe styles simultaneously, with error handling and fallback mechanisms.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Sophisticated AI Prompt Engineering",
                description: "Custom prompts.ts configuration provides each AI with comprehensive UK food safety documentation, including all 14 Natasha's Law allergens with detailed guidance. Combines domain expertise with AI capabilities to ensure culturally-appropriate British recipes with proper allergen handling and safety prioritization.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Comprehensive Cost Tracking",
                description: "Every AI request is logged with token counts, costs, and performance metrics. Admin dashboard shows total costs, average per recipe, and provider comparison analytics for data-driven optimization.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Complexity-Based Request Prioritization",
                description: "Requests with allergens or complex dietary needs get higher priority scores, ensuring safety-critical requests use more capable AI models. Demonstrates intelligent routing logic and risk management.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
              {
                title: "Admin Review & Publishing Workflow",
                description: "Admin users can review AI-generated recipes, edit SEO metadata and allergen tags, and manage publication. Uses Clerk user metadata for role-based access control with JWT session claims.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

          {/* Screenshot 1: Analytics Dashboard */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">AI Cost Analytics Dashboard</h3>
            <div className="rounded-lg border-2 border-border overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/platewise/02-analytics-dashboard.png"
                alt="AI usage analytics dashboard showing cost tracking, provider performance comparison, and token usage metrics"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Real-time tracking of AI usage costs, token consumption, and provider performance. Shows total costs, average cost per recipe, and identifies the most cost-effective providers for data-driven decision making. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>

          {/* Screenshot 2: Admin Review */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Admin Recipe Review & Publishing Workflow</h3>
            <div className="rounded-lg border-2 border-border overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/platewise/03-admin-review.png"
                alt="Admin recipe review dashboard with SEO metadata editing, allergen tag management, and publication controls"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Comprehensive admin dashboard for reviewing AI-generated recipes, editing SEO metadata, managing allergen tags, and controlling publication to public recipe pages. Demonstrates role-based access control implementation. <span className="text-sm italic">(Click image to enlarge)</span>
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
          <div className="max-w-2xl mx-auto">
            <a
              href="https://platewise.xyz"
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
                Experience the full application at platewise.xyz - create recipes, plan meals, and generate shopping lists (portfolio demonstration only)
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
