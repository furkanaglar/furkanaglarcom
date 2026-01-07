"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { getContent } from "../../lib/content";
import { Card } from "./ui/card";
import { useRef } from "react";
import { useLanguage } from "../contexts/language-context";

export function Experience() {
  const { language } = useLanguage();
  const { experience, ui } = getContent(language);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden"
    >
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
            <span className="text-sm font-bold mono text-cyan-600 dark:text-cyan-400 tracking-wider uppercase">
              {ui.experience.eyebrow}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            {ui.experience.heading}
            <br />
            <span className="text-muted-foreground">
              {ui.experience.subheading}
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-background shadow-xl"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-blue-500"
                    />
                  </motion.div>
                </div>

                {/* Card */}
                <Card
                  className={`p-8 bg-card border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 ${
                    index % 2 === 0 ? "lg:mr-auto lg:w-[calc(50%-3rem)]" : "lg:ml-auto lg:w-[calc(50%-3rem)]"
                  }`}
                >
                  <div className="flex flex-col-reverse sm:flex-row lg:flex-col-reverse xl:flex-row flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold mb-2 leading-tight">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-blue-500" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <span className="opacity-50">•</span>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-cyan-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
                      <Calendar className="h-3.5 w-3.5 text-blue-500" />
                      <span className="text-xs font-bold mono text-blue-600 dark:text-blue-400">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-foreground/80 leading-relaxed text-sm">
                          {achievement}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
