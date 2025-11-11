import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Syntorak
            </h3>
            <p className="text-muted-foreground text-sm">
              Building innovative web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold mb-3">Featured Projects</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portfolio/platewise" className="text-muted-foreground hover:text-primary transition-colors">
                  Platewise
                </Link>
              </li>
              <li>
                <Link href="/portfolio/prompt-builder" className="text-muted-foreground hover:text-primary transition-colors">
                  Prompt Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Get In Touch</h4>
            <a
              href="mailto:support@syntorak.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>support@syntorak.com</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Syntorak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
