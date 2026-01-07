"use client"; import { motion, useScroll, useTransform } from "motion/react"; import { ArrowDown, Mail, MapPin } from "lucide-react"; import { SimpleIconLinkedin } from "./simple-icons"; import { personalInfo, quickFacts } from "../../lib/content"; import { TypewriterEffect } from "./typewriter-effect"; import { useRef } from "react"; export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null); const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"], }); const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]); const y = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, 250]); return (<section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24" > <motion.div style={{ opacity, y }} className="container mx-auto max-w-7xl"> {/* Split Screen Layout */} <div className="grid md:grid-cols-2 gap-12 md:gap-12 lg:gap-20 items-center"> {/* Left Side - Text Content */} <div className="space-y-8 order-2 md:order-1"> {/* Label Tag */} <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="inline-block" >
    <div className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full bg-card/50 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span className="text-sm font-medium mono">Available for Opportunities</span>
    </div>
  </motion.div>

    {/* Name */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
        {personalInfo.name.split(" ")[0]}
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
          {personalInfo.name.split(" ")[1]}
        </span>
      </h1>
    </motion.div>

    {/* Dynamic Title with Typewriter */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-2xl md:text-3xl font-medium text-muted-foreground h-[2.5rem] md:h-[3rem]"
    >
      <TypewriterEffect
        words={quickFacts}
        className="text-foreground"
        typeSpeed={80}
        deleteSpeed={40}
        delayBetweenWords={1000}
      />
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
        Get in Touch
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
        LinkedIn
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
      <span className="mono">Scroll to explore</span>
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
        {/* Decorative Elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-teal-500/10 rounded-3xl blur-2xl"
        />

        {/* Main Image Container */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
          {/* Border Animation */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />
          </motion.div>

          {/* Image */}
          <div className="absolute inset-2 rounded-3xl overflow-hidden bg-card">
            <img
              src="/images/furkanaglar.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Code Snippets Decorations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -right-10 lg:-right-4 -top-3 lg:top-8 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-2 sm:p-3 shadow-xl"
          >
            <code className="text-xs mono text-green-500">
              <span className="text-blue-500">const</span> status ={" "}
              <span className="text-orange-500">"Available"</span>
            </code>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -left-8 lg:-left-4 -bottom-3 lg:bottom-8 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-2 sm:p-3 shadow-xl"
          >
            <code className="text-xs mono">
              <span className="text-purple-500">experience</span>
              <span className="text-muted-foreground">.</span>
              <span className="text-blue-500">years</span>
              <span className="text-muted-foreground"> {">"}= </span>
              <span className="text-orange-500">3</span>
            </code>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
  </motion.div>
  </section>
  );
}
