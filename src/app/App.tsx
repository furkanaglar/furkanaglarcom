import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";
import { LanguageProvider } from "./contexts/language-context";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { AnimatedBackground } from "./components/animated-background";
import { CustomCursor } from "./components/custom-cursor";
import { personSchema } from "../lib/structured-data";
import { useEffect } from "react";

export default function App() {
  // Add JSON-LD structured data for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(personSchema);
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = "Furkan Ağlar — Portfolio | QA Engineer & Full-Stack Developer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Portfolio of Furkan Ağlar - QA Engineer, WordPress Developer, and AI-Assisted Full-Stack Developer specializing in Next.js, React, and modern web technologies."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Portfolio of Furkan Ağlar - QA Engineer, WordPress Developer, and AI-Assisted Full-Stack Developer specializing in Next.js, React, and modern web technologies.";
      document.head.appendChild(meta);
    }

    return () => {
      script.remove();
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AnimatedBackground />
        <CustomCursor />
        <div className="relative min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}