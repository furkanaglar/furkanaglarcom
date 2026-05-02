import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";
import { LanguageProvider } from "./contexts/language-context";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { WordPressShowcase } from "./components/wordpress-showcase";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { AnimatedBackground } from "./components/animated-background";
import { CustomCursor } from "./components/custom-cursor";
import { personSchema } from "../lib/structured-data";
import { getContent } from "../lib/content";
import { useEffect } from "react";
import { useLanguage } from "./contexts/language-context";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function AppShell() {
  const { language } = useLanguage();
  const { ui } = getContent(language);

  // Add JSON-LD structured data for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(personSchema);
    script.id = "person-schema";
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    document.title = ui.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", ui.meta.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = ui.meta.description;
      document.head.appendChild(meta);
    }
  }, [ui.meta.description, ui.meta.title]);

  return (
    <>
      <AnimatedBackground />
      <CustomCursor />
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <WordPressShowcase />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}
