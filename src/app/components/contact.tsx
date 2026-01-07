"use client";

import { Mail, Globe, Linkedin, Send } from "lucide-react";
import { personalInfo } from "../../lib/content";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CopyButton } from "./copy-button";
import { motion } from "motion/react";

export function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyText: personalInfo.email,
      color: "from-[#EA4335] to-[#EA4335]",
      bgColor: "from-[#EA4335]/10 to-[#EA4335]/10",
      iconColor: "text-[#EA4335]",
      borderColor: "hover:border-[#EA4335]/50",
      shadowColor: "hover:shadow-[#EA4335]/20",
    },
    {
      icon: Globe,
      label: "Website",
      value: personalInfo.website,
      href: `https://${personalInfo.website}`,
      copyText: personalInfo.website,
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-500/10 to-green-500/10",
      iconColor: "text-teal-600 dark:text-teal-400",
      borderColor: "hover:border-teal-500/50",
      shadowColor: "hover:shadow-teal-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: personalInfo.linkedin,
      href: personalInfo.linkedinUrl,
      copyText: personalInfo.linkedinUrl,
      color: "from-[#0A66C2] to-[#0A66C2]",
      bgColor: "from-[#0A66C2]/10 to-[#0A66C2]/10",
      iconColor: "text-[#0A66C2]",
      borderColor: "hover:border-[#0A66C2]/50",
      shadowColor: "hover:shadow-[#0A66C2]/20",
    },
  ];

  return (
    <section
      id="contact"
      className="py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[60px] border-blue-500/5 rounded-full"
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-bold mono text-green-600 dark:text-green-400 tracking-wider uppercase">
              // Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Let's Connect
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, opportunities, or
            collaborations. Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className={`h-full p-6 text-center bg-card border-border/50 ${item.borderColor} transition-all duration-300 hover:shadow-2xl ${item.shadowColor} group relative overflow-hidden`}>
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto mb-4"
                      >
                        <div className={`inline-flex p-4 bg-gradient-to-br ${item.bgColor} rounded-2xl`}>
                          <Icon className={`h-8 w-8 ${item.iconColor}`} />
                        </div>
                      </motion.div>

                      {/* Label */}
                      <h3 className="text-sm font-bold mono text-muted-foreground uppercase tracking-wider mb-2">
                        {item.label}
                      </h3>

                      {/* Value */}
                      <p className="font-semibold mb-4 break-all text-sm">
                        {item.value}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center justify-center gap-2">
                        <CopyButton text={item.copyText} label={item.label} />
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="text-xs"
                          >
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              Visit
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12 bg-card border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden">
            {/* Animated Background Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: Icon and Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <div className="inline-flex p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Send className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Ready to start a project?
                  </h3>
                </div>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                  Let's discuss how we can work together to bring your ideas to life.
                </p>
              </div>

              {/* Right: CTA Button */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    asChild
                    className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base md:text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Send a Message
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}