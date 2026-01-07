"use client";

import { motion } from "motion/react";
import { personalInfo, navLinks } from "../../lib/content";

export function Footer() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/50 backdrop-blur-sm relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold mono">
                <span className="text-foreground">&lt;</span>
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  {personalInfo.name.split(" ")[0]}
                </span>
                <span className="text-foreground">/&gt;</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                QA Engineer & Full-Stack Developer building quality software solutions with modern technologies.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-bold mono text-muted-foreground uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    → {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-bold mono text-muted-foreground uppercase tracking-wider mb-4">
                Get In Touch
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {personalInfo.email}
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://${personalInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {personalInfo.website}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-border/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
              <p className="flex items-center gap-2 mono">
                <span className="text-blue-500">&lt;/&gt;</span>
                Built with Next.js + TypeScript
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}