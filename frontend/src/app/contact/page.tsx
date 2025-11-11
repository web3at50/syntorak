import { Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact - Syntorak",
  description: "Get in touch with Syntorak for inquiries about web applications and development projects",
};

export default function Contact() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or interested in working together? Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Email Card */}
          <div className="relative overflow-hidden rounded-xl border-2 border-border bg-card p-8 hover:border-primary transition-all hover:shadow-lg group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>

            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>

              <h2 className="text-2xl font-heading font-bold mb-3">Email</h2>
              <p className="text-muted-foreground mb-4">
                Send us an email and we'll get back to you as soon as possible.
              </p>

              <a
                href="mailto:support@syntorak.com"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                support@syntorak.com
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Future Contact Form Card */}
          <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-border bg-muted/30 p-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h2 className="text-2xl font-heading font-bold mb-3 text-muted-foreground">Contact Form</h2>
              <p className="text-muted-foreground">
                A convenient contact form is coming soon! For now, please use the email address.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center rounded-xl border border-border bg-card p-8">
          <h3 className="text-xl font-heading font-bold mb-4">About Response Times</h3>
          <p className="text-muted-foreground mb-6">
            We typically respond to all inquiries within 24-48 hours during business days.
            We look forward to hearing from you!
          </p>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
