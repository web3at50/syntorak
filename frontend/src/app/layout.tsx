import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MaintenanceBanner from "@/components/layout/maintenance-banner";
import { ThemeProvider } from "@/contexts/theme-context";
import { MaintenanceProvider } from "@/contexts/maintenance-context";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syntorak - Portfolio of Web Apps & Sites",
  description: "Showcasing innovative web applications and sites built with modern technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (!theme) {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <MaintenanceProvider>
            <MaintenanceBanner />
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </MaintenanceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
