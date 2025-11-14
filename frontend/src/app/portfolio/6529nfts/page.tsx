import Link from "next/link";
import Image from "next/image";
import { ImageLightbox } from "@/components/ImageLightbox";

export default function NFTCollectionTools() {
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
            NFT Collection Tools
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Built with Next.js & Supabase
          </p>

          {/* Notice Boxes Container */}
          <div className="flex flex-wrap gap-4 mb-8 justify-between items-start">
            {/* Live Users Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border-2 border-green-500/20 text-green-600 dark:text-green-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="font-semibold">Live site: 10,000+ users</span>
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
              src="/images/portfolio/6529nfts/01-portfolio-side-by-side.png"
              alt="Portfolio tracking interface showing desktop and mobile responsive views for NFT collection management"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 text-lg">
            <strong>Real-time portfolio tracking that works everywhere.</strong> Responsive design transforms desktop tables into mobile-friendly cards for 10,000+ collectors. <span className="text-sm italic">(Click to enlarge)</span>
          </p>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              NFT collectors need to track portfolio values, monitor sales history across 94,000+ transactions, and stay updated with real-time market data. Most solutions require manual tracking or offer limited mobile functionality, making it difficult to manage collections on the go.
            </p>
            <p>
              Beyond basic tracking, collectors need automated data synchronization that runs reliably without manual intervention, mobile-responsive interfaces that handle complex data tables, and the ability to search and filter through massive datasets instantly.
            </p>
          </div>
        </section>

        {/* The Solution I Built */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution I Built</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              A personal project for the 6529 NFT community, built over 12 months to help collectors track portfolios, analyze sales, and monitor the market. The platform fetches live data, combines it with automated price updates, and presents everything in a responsive interface that works seamlessly on mobile and desktop.
            </p>
            <p>
              The platform includes a complete data management infrastructure:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Real-time portfolio tracking</strong> - Live holdings combined with database prices updated every 5 minutes</li>
              <li><strong>Complete sales history</strong> - 94,000+ sales since June 2022, searchable and filterable</li>
              <li><strong>Automated data pipeline</strong> - Edge functions sync new sales every 5 minutes without manual intervention</li>
              <li><strong>Responsive design</strong> - Desktop tables transform into mobile cards automatically</li>
              <li><strong>Massive data handling</strong> - 17.5 million records with sub-second search across PostgreSQL</li>
              <li><strong>Production reliability</strong> - 3,100+ daily API requests processed automatically for 6+ months</li>
            </ul>
          </div>
        </section>

        {/* What Users Can Do */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Users Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Track Any Collector's Portfolio in Real-Time",
                description: "Enter any wallet address to see live holdings. The system fetches current ownership from external APIs, combines it with database prices (updated every 5 minutes), and calculates total values automatically.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                title: "Search 94,000+ Sales Instantly",
                description: "Browse complete sales history since June 2022 with instant filtering and search. Sub-second response times across the entire dataset thanks to PostgreSQL indexing and optimized queries.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                title: "Access Anywhere on Any Device",
                description: "Responsive design transforms complex data tables into mobile-friendly card layouts automatically. Desktop shows comprehensive tables, mobile provides scrollable cards—same data, optimized experience.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Rely on Automated Updates",
                description: "Edge functions run every 5 minutes to sync new sales and price updates. Incremental sync only fetches new records, and the system recovers automatically from API failures without manual intervention.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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

        {/* Feature Screenshots */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See It In Action</h2>

          {/* Screenshot 1: Portfolio Tracking */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Live Portfolio Tracking</h3>
            <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/6529nfts/01-portfolio-side-by-side.png"
                alt="Portfolio desktop and mobile views showing responsive design transformation from data tables to card layouts"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-muted-foreground">
              Real-time portfolio tracking for any collector. Fetches live holdings when the page loads, combines with database prices (updated every 5 mins), and calculates totals automatically. Responsive design transforms desktop tables into mobile cards. <strong>Try it:</strong> <a href="https://www.6529nfts.io/6529-portfolio/punk6529" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">6529nfts.io/6529-portfolio/punk6529</a> <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>

          {/* Screenshot 2: Sales History */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Sales History (94,000+ Sales)</h3>
            <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/6529nfts/02-sales-side-by-side.png"
                alt="Sales history desktop and mobile views with instant search and filtering across 94,000 records"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Complete sales history since June 2022. Edge function runs every 5 minutes to fetch new sales (incremental sync only pulls new records). Search and filter 94k+ records instantly with sub-second response. Mobile-friendly card layout for on-the-go tracking. <strong>Live:</strong> <a href="https://www.6529nfts.io/memes/sales-history" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">6529nfts.io/memes/sales-history</a> <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>
        </section>

        {/* Why This Matters For Your Business */}
        <section className="mb-16">
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why This Example Matters For Your Business</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                You might be thinking: "I don't need an NFT tracking tool—I need a real-time dashboard for my SaaS" or "I need an automated data sync for my e-commerce platform" or "I need a mobile-responsive analytics tool."
              </p>
              <p className="font-semibold text-foreground">
                That's exactly the point. This project demonstrates transferable skills:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Building automated data pipelines</strong> that sync external APIs reliably without manual intervention</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Handling massive datasets efficiently</strong> with PostgreSQL optimization for sub-second queries across millions of records</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Creating truly responsive interfaces</strong> that adapt complex data visualizations for mobile devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Architecting for production reliability</strong> with systems that run 24/7 serving thousands of users</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Implementing serverless architecture</strong> with edge functions and scheduled tasks for scalable background processing</span>
                </li>
              </ul>
              <p className="text-foreground font-semibold pt-4">
                If I can build an NFT tracking platform with automated data sync, massive dataset handling, and responsive mobile design—I can build your real-time dashboard, automated data pipeline, or analytics platform. The industry changes, the skills don't.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Button */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.6529nfts.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              Visit 6529nfts.io Live Site
            </a>
          </div>
        </section>

        {/* Important Disclaimer */}
        <section className="mb-16">
          <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-200">ℹ️ Project Note</h3>
            <p className="text-blue-800 dark:text-blue-300">
              This is a personal project with no public GitHub repository. The codebase is private and actively maintained, serving 10,000+ users in production for 6+ months.
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
              For developers and agencies interested in the Supabase architecture, serverless functions, and database design
            </p>
          </div>
        </section>

        {/* Why I Built This */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why I Built This</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              I wanted to demonstrate my ability to build complete backend infrastructure while solving a real problem for the 6529 NFT community. The project showcases Supabase skills specifically: PostgreSQL database design, edge functions for serverless processing, scheduled tasks for automation, and production deployment serving thousands of users.
            </p>
            <p>
              This was my first time building a complete full-stack application with a real backend. The 12-month development timeline reflects learning PostgreSQL, understanding serverless architecture, implementing automated data pipelines, and ensuring production reliability.
            </p>
            <p>
              I chose to focus on automation from day one because manual data updates don't scale. The edge functions run every 5 minutes, syncing new sales and price updates automatically. The system recovers from API failures and keeps running without manual intervention—critical for serving 10,000+ users.
            </p>
          </div>
        </section>

        {/* Technical Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              6529nfts.io helps collectors track NFT portfolios and analyze market data. Users can view any wallet's holdings with real-time values, search through 94,000+ sales, and monitor market trends—all with automated data updates running in the background.
            </p>
            <p>
              This project demonstrates my ability to architect a complete backend infrastructure with Supabase (PostgreSQL + Edge Functions), implement automated data pipelines with scheduled serverless functions, design PostgreSQL databases handling 17.5 million records, build responsive interfaces that work on mobile and desktop, and deploy production-ready applications serving 10,000+ users.
            </p>
            <p>
              <strong>My Role:</strong> Full-stack developer. I designed the database schema (36 tables), built the automated data sync system (20 edge functions), created the responsive frontend, and deployed to production. Built solo over 12 months as a learning project.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Next.js", color: "bg-black dark:bg-white text-white dark:text-black" },
              { name: "TypeScript", color: "bg-blue-600 text-white" },
              { name: "Supabase", color: "bg-green-600 text-white" },
              { name: "PostgreSQL", color: "bg-blue-700 text-white" },
              { name: "Tailwind CSS", color: "bg-cyan-500 text-white" },
              { name: "Edge Functions", color: "bg-purple-600 text-white" },
              { name: "Vercel", color: "bg-black text-white" },
              { name: "React", color: "bg-cyan-600 text-white" },
            ].map((tech) => (
              <div key={tech.name} className={`px-4 py-3 rounded-lg font-semibold text-center ${tech.color}`}>
                {tech.name}
              </div>
            ))}
          </div>
        </section>

        {/* Backend Infrastructure Screenshots */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Backend Infrastructure (Supabase)</h2>

          {/* Screenshot 1: Supabase Overview */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Supabase Backend Overview</h3>
            <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/6529nfts/03-supabase-overview.png"
                alt="Supabase dashboard overview showing database tables, edge functions, and system statistics"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              The backend infrastructure handles all data management and automation: 36 PostgreSQL tables storing collections, sales, prices, holders, and historical data. 20 Edge Functions running scheduled tasks and processing. 17.5 million records in the largest historical data table. 3,100+ API requests processed daily. Automated updates every 5 minutes without manual intervention. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>

          {/* Screenshot 2: Edge Functions */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Serverless Edge Functions</h3>
            <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/6529nfts/04-supabase-edge-functions.png"
                alt="Supabase Edge Functions dashboard showing 20 serverless functions for scheduled tasks"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              20 serverless functions handle scheduled data syncs, API integrations, and background processing. Functions run every 5 minutes to fetch new sales (incremental sync), update prices across all collections, and process historical data. Built-in error handling and retry logic ensures reliability. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>

          {/* Screenshot 3: Database Tables */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">PostgreSQL Database Design</h3>
            <div className="rounded-lg border-4 border-orange-500/30 overflow-hidden shadow-lg mb-4">
              <ImageLightbox
                src="/images/portfolio/6529nfts/05-supabase-database-tables.png"
                alt="Supabase database tables showing 36 PostgreSQL tables with custom functions and indexing"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground">
              36 PostgreSQL tables with custom SQL functions for complex queries, filtering, and calculations. Proper indexing enables sub-second search across 94k+ sales records. Database design includes collections, sales history, price tracking, holder data, and 17.5 million historical records. <span className="text-sm italic">(Click image to enlarge)</span>
            </p>
          </div>
        </section>

        {/* Technical Architecture Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Architecture</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Automated Data Pipeline",
                description: "Edge functions scheduled to run every 5 minutes, syncing external APIs automatically. Incremental sync only fetches new records since last update. Built-in error handling and recovery ensures reliability without manual intervention.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
              {
                title: "PostgreSQL Database with 36 Tables",
                description: "Comprehensive schema storing collections, sales, prices, holders, and 17.5 million historical records. Custom SQL functions handle complex queries and calculations. Proper indexing enables instant search across massive datasets.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
              },
              {
                title: "20 Serverless Edge Functions",
                description: "Scheduled tasks for data sync, API integrations, and background processing. Functions handle sales updates, price tracking, holder analysis, and historical data processing. Serverless architecture scales automatically based on demand.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: "Mobile-First Responsive Design",
                description: "Desktop displays comprehensive data tables. Mobile automatically transforms to scrollable card layouts. Same data, optimized presentation for each device. Critical for serving users tracking portfolios on the go.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Real-Time Data Integration",
                description: "Fetches live holdings from external APIs when page loads. Combines with database prices updated every 5 minutes. Calculates portfolio values in real-time. Demonstrates proper API integration and data combination strategies.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Production-Grade Performance",
                description: "Sub-second search across 94k+ sales records using PostgreSQL optimization. 3,100+ daily API requests handled automatically. Serving 10,000+ users for 6+ months without downtime. Demonstrates proper database indexing and query optimization.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

        {/* What I Learned */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Complete Backend Development</h3>
              <p className="text-muted-foreground">
                This was my first time building a complete full-stack application with a real backend. I learned how to structure a PostgreSQL database, write serverless functions, integrate external APIs, and deploy a production application that people rely on daily.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Data Synchronization at Scale</h3>
              <p className="text-muted-foreground">
                The biggest challenge was handling data synchronization reliably—making sure the system could recover from API failures and keep running without manual intervention. Learned proper error handling, retry logic, and incremental sync strategies.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">PostgreSQL Optimization</h3>
              <p className="text-muted-foreground">
                Working with 17.5 million records taught me database optimization: proper indexing, query optimization, when to use JSONB vs normalized tables, and custom SQL functions for complex calculations. Sub-second queries require thoughtful database design.
              </p>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Production Reliability</h3>
              <p className="text-muted-foreground">
                Serving 10,000+ users for 6+ months taught me the difference between "it works" and "it works reliably in production." Automated monitoring, error recovery, and graceful degradation are essential for real-world applications.
              </p>
            </div>
          </div>
        </section>

        {/* Project Status */}
        <section className="mb-16">
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
            <h2 className="text-2xl font-bold mb-4">Project Status</h2>
            <p className="text-muted-foreground mb-6">
              <strong>Live in production serving 10,000+ users.</strong> The application runs 24/7 with automated data updates every 5 minutes. Active development continues with new features and collections added weekly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>10,000+ users</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>94,000+ sales tracked</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>6+ months in production</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              <strong>Ongoing development:</strong> 426 NFTs currently in database with 3 new collections added weekly. System processes 3,100+ daily API requests automatically without manual intervention.
            </p>
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <a
              href="https://www.6529nfts.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border-2 border-border hover:border-primary bg-card p-6 transition-all hover:shadow-lg block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Visit the Live Site</h3>
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-muted-foreground">
                Experience the full application at 6529nfts.io - track portfolios, browse sales history, and monitor the NFT market (serving 10,000+ collectors)
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
