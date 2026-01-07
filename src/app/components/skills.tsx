"use client";

import { motion } from "motion/react";
import { getContent } from "../../lib/content";
import { Card } from "./ui/card";
import {
  Shield,
  Blocks,
  Code2,
  Sparkles,
  Server,
  Wrench,
} from "lucide-react";
import { useLanguage } from "../contexts/language-context";

const iconMap: Record<string, any> = {
  Shield,
  Blocks,
  Code2,
  Sparkles,
  Server,
  Wrench,
};

export function Skills() {
  const { language } = useLanguage();
  const { skills, ui } = getContent(language);

  return (
    <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20">
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
            <span className="text-sm font-bold mono text-purple-600 dark:text-purple-400 tracking-wider uppercase">
              {ui.skills.eyebrow}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            {ui.skills.heading}
            <br />
            <span className="text-muted-foreground">{ui.skills.subheading}</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2;
            const colors = [
              { from: "from-blue-500", to: "to-cyan-500", text: "text-blue-600 dark:text-blue-400", bg: "from-blue-500/10 to-cyan-500/10", border: "hover:border-blue-500/50", shadow: "hover:shadow-blue-500/20" },
              { from: "from-purple-500", to: "to-pink-500", text: "text-purple-600 dark:text-purple-400", bg: "from-purple-500/10 to-pink-500/10", border: "hover:border-purple-500/50", shadow: "hover:shadow-purple-500/20" },
              { from: "from-teal-500", to: "to-green-500", text: "text-teal-600 dark:text-teal-400", bg: "from-teal-500/10 to-green-500/10", border: "hover:border-teal-500/50", shadow: "hover:shadow-teal-500/20" },
              { from: "from-orange-500", to: "to-red-500", text: "text-orange-600 dark:text-orange-400", bg: "from-orange-500/10 to-red-500/10", border: "hover:border-orange-500/50", shadow: "hover:shadow-orange-500/20" },
              { from: "from-cyan-500", to: "to-blue-500", text: "text-cyan-600 dark:text-cyan-400", bg: "from-cyan-500/10 to-blue-500/10", border: "hover:border-cyan-500/50", shadow: "hover:shadow-cyan-500/20" },
              { from: "from-green-500", to: "to-teal-500", text: "text-green-600 dark:text-green-400", bg: "from-green-500/10 to-teal-500/10", border: "hover:border-green-500/50", shadow: "hover:shadow-green-500/20" },
            ];
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
                  <Card className={`h-full p-6 bg-card border-border/50 ${color.border} transition-all duration-300 hover:shadow-2xl ${color.shadow} group relative overflow-hidden`}>
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`inline-flex p-3 bg-gradient-to-br ${color.bg} rounded-2xl mb-4`}
                      >
                        <Icon className={`h-7 w-7 ${color.text}`} />
                      </motion.div>

                      {/* Category */}
                      <h3 className="text-xl font-bold mb-2">
                        {skill.category}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Items */}
                      <ul className="space-y-2">
                        {skill.items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-sm"
                          >
                            <motion.div
                              whileHover={{ scale: 1.5 }}
                              className={`h-1 w-1 rounded-full bg-gradient-to-r ${color.from} ${color.to}`}
                            />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="inline-block p-8 bg-gradient-to-r from-card via-blue-50/50 dark:via-blue-950/20 to-card border-border/50">
            <p className="text-lg text-foreground/80 mb-4">
              {ui.skills.ctaTitle}
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5" />
              </motion.div>
              <span className="font-bold mono">{ui.skills.ctaSubtitle}</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
