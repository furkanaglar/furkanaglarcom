"use client";

import { motion } from "motion/react";
import { ExternalLink, Zap } from "lucide-react";
import { getContent } from "../../lib/content";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "../contexts/language-context";

export function Projects() {
  const { language } = useLanguage();
  const { projects, ui } = getContent(language);

  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-bold mono text-teal-600 dark:text-teal-400 tracking-wider uppercase">
              {ui.projects.eyebrow}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            {ui.projects.heading}
            <br />
            <span className="text-muted-foreground">
              {ui.projects.subheading}
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              layout
            >
              <Card className="overflow-hidden border-border/50 hover:border-teal-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 bg-gradient-to-br from-card via-card to-teal-50/30 dark:to-teal-950/20">
                <div className="grid lg:grid-cols-5 gap-8 p-8 md:p-10">
                  {/* Left Column - Main Info */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Project Header */}
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <motion.div
                              animate={{
                                rotate: [0, 360],
                              }}
                              transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="p-2 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl"
                            >
                              <Zap className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                            </motion.div>
                            <h3 className="text-3xl md:text-4xl font-bold">
                              {project.title}
                            </h3>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="font-semibold">{project.role}</span>
                            <span className="opacity-50">•</span>
                            <span className="mono">{project.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Impact Badge */}
                      {project.impact && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="inline-block"
                        >
                          <div className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full">
                            <p className="text-sm font-bold text-teal-600 dark:text-teal-400">
                              🚀 {project.impact}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Summary */}
                    <p className="text-lg leading-relaxed text-foreground/80">
                      {project.summary}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 group-hover:scale-150 transition-transform" />
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            {highlight}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.link && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            asChild
                            className="bg-foreground text-background hover:bg-foreground/90"
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              {ui.projects.viewProject}
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Right Column - Tech Stack */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-bold mono text-muted-foreground uppercase tracking-wider mb-4">
                        {ui.projects.techStack}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                          >
                            <Badge
                              variant="secondary"
                              className="px-3 py-1 text-xs mono font-medium bg-muted/50 hover:bg-muted border border-border/50"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Categories */}
                    <div>
                      <h4 className="text-sm font-bold mono text-muted-foreground uppercase tracking-wider mb-4">
                        {ui.projects.categories}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.category.map((cat, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-full"
                          >
                            <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                              {cat}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="hidden lg:block mt-8 w-32 h-32 mx-auto opacity-10 dark:opacity-5"
                    >
                      <div className="w-full h-full border-8 border-current rounded-3xl rotate-45" />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
