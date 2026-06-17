"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { SimpleIconLinkedin } from "./simple-icons";
import { getContent } from "../../lib/content";
import { useRef } from "react";
import { useLanguage } from "../contexts/language-context";
import { useIsMobile } from "./ui/use-mobile";

export function Hero() {
  const { language } = useLanguage();
  const { personalInfo, ui } = getContent(language);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, 250]);
  const parallaxStyle = isMobile ? undefined : { opacity, y };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"
    >
      <motion.div style={parallaxStyle} className="container mx-auto max-w-7xl">
        {/* Split Screen Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-7 order-2 md:order-1">
            {/* Label Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full bg-card/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium mono">
                  {ui.hero.availability}
                </span>
              </div>
            </motion.div>

            {/* Main Positioning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground mono">
                {personalInfo.name}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  {ui.hero.headline}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-foreground/80">
                {ui.hero.subheadline}
              </p>
            </motion.div>

            {/* Proof Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {ui.hero.proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-lg border border-border/60 bg-card/60 px-4 py-3 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-foreground">
                    {point.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {point.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Location & Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <span className="text-sm opacity-50">•</span>
              <span className="text-sm">{personalInfo.tagline}</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-colors hover:bg-foreground/90"
              >
                <Mail className="h-4 w-4" />
                {ui.hero.ctaPrimary}
              </motion.a>
              <motion.a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium transition-colors hover:bg-[#0A66C2] hover:text-white"
              >
                <SimpleIconLinkedin className="h-4 w-4" />
                {ui.hero.ctaSecondary}
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden lg:flex items-center gap-3 text-sm text-muted-foreground pt-8"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>
              <span className="mono">{ui.hero.scrollHint}</span>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative max-w-full px-4">
              <div className="relative w-72 sm:w-80 lg:w-96 xl:w-[28rem]">
                <div className="absolute -inset-4 rounded-3xl border border-border/60 bg-card/35 shadow-2xl shadow-blue-950/5 dark:shadow-black/20" />
                <div className="absolute -right-3 top-10 h-32 w-1 rounded-full bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500" />

                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/70 bg-card p-2 shadow-xl shadow-blue-950/10 dark:shadow-black/30">
                  <div className="h-full w-full overflow-hidden rounded-xl bg-muted">
                    <img
                      src="/images/furkanaglar.jpg"
                      alt={personalInfo.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
