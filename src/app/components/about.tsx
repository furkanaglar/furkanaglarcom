"use client";

import { motion, useInView } from "motion/react";
import { GraduationCap, Languages, Sparkles } from "lucide-react";
import { about } from "../../lib/content";
import { Card } from "./ui/card";
import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20">
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
            <span className="text-sm font-bold mono text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              // About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Building Quality
            <br />
            <span className="text-muted-foreground">Software Solutions</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Summary - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <Card className="h-full p-8 md:p-10 bg-gradient-to-br from-card via-card to-blue-50/50 dark:to-blue-950/20 border-border/50 hover:border-blue-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl hover:scale-110 transition-transform duration-300"
                >
                  <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Who I Am</h3>
                  <p className="text-muted-foreground text-sm mono">
                    Quality-driven developer
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                {about.summary}
              </p>
              <div className="space-y-3">
                {about.strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <p className="text-foreground/80 leading-relaxed flex-1">
                      {strength}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-6 bg-card border-border/50 hover:border-green-500/30 transition-colors duration-300 group">
              <div className="flex items-start gap-3 mb-4">
                <motion.div
                  className="flex-shrink-0 p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300"
                >
                  <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-1">Education</h3>
                  <p className="text-xs text-muted-foreground mono">
                    Academic Background
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-1">
                <p className="font-semibold text-sm leading-snug">
                  {about.education.degree}
                </p>
                <p className="text-sm text-muted-foreground">
                  {about.education.institution}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-muted-foreground mono">
                    {about.education.period}
                  </p>
                  <div className="px-2 py-1 bg-green-500/10 rounded-md">
                    <p className="text-xs font-bold text-green-600 dark:text-green-400">
                      GPA {about.education.gpa}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-6 bg-gradient-to-br from-card to-purple-50/50 dark:to-purple-950/20 border-border/50 hover:border-purple-500/30 transition-colors duration-300 group">
              <div className="flex items-start gap-3 mb-4">
                <motion.div
                  className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300"
                >
                  <Languages className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-1">Languages</h3>
                  <p className="text-xs text-muted-foreground mono">
                    Communication Skills
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-1">
                {about.languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{lang.name}</span>
                    <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-md mono font-semibold">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Stats/Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-teal-500/5 border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2"
                  >
                    <Counter target={3} suffix="+" />
                  </motion.p>
                  <p className="text-sm text-muted-foreground">
                    Years of Experience
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent mb-2"
                  >
                    <Counter target={50} suffix="+" />
                  </motion.p>
                  <p className="text-sm text-muted-foreground">
                    Projects Delivered
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent mb-2"
                  >
                    <Counter target={100} suffix="%" />
                  </motion.p>
                  <p className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}