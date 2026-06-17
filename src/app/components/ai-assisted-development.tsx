"use client";

import { motion } from "motion/react";
import { Bot, Rocket, SearchCheck, Workflow } from "lucide-react";
import { getContent } from "../../lib/content";
import { Card } from "./ui/card";
import { useLanguage } from "../contexts/language-context";

const icons = [Rocket, Workflow, SearchCheck];

export function AiAssistedDevelopment() {
  const { language } = useLanguage();
  const { aiDevelopment, ui } = getContent(language);

  return (
    <section
      id="ai-development"
      className="relative py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-bold mono text-cyan-600 dark:text-cyan-400 tracking-wider uppercase">
                {ui.aiDevelopment.eyebrow}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {ui.aiDevelopment.heading}
              <br />
              <span className="text-muted-foreground">
                {ui.aiDevelopment.subheading}
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 max-w-2xl">
              {aiDevelopment.summary}
            </p>
          </motion.div>

          <div className="grid gap-5">
            {aiDevelopment.points.map((point, index) => {
              const Icon = icons[index] ?? Bot;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="p-6 bg-card border-border/50 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                        <Icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {point.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-foreground/80">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
