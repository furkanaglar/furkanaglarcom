"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Layers3, Maximize2, MonitorSmartphone } from "lucide-react";
import { getContent } from "../../lib/content";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { useLanguage } from "../contexts/language-context";

export function WordPressShowcase() {
  const { language } = useLanguage();
  const { wordpressShowcase, ui } = getContent(language);
  const [selectedSite, setSelectedSite] = useState<
    (typeof wordpressShowcase.sites)[number] | null
  >(null);
  const commonTags = new Set(["WordPress", "Elementor"]);

  return (
    <Dialog
      open={Boolean(selectedSite)}
      onOpenChange={(open) => {
        if (!open) {
          setSelectedSite(null);
        }
      }}
    >
      <section
        id="wordpress-showcase"
        className="relative py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-bold mono text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                  {ui.wordpressShowcase.eyebrow}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                {ui.wordpressShowcase.heading}
                <br />
                <span className="text-muted-foreground">
                  {ui.wordpressShowcase.subheading}
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80 max-w-2xl">
                {wordpressShowcase.summary}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid gap-3 sm:grid-cols-3"
            >
              {wordpressShowcase.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border/50 bg-gradient-to-br from-card via-card to-emerald-50/50 dark:to-emerald-950/20 p-5"
                >
                  <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 max-w-3xl text-sm leading-relaxed text-muted-foreground"
          >
            {ui.wordpressShowcase.description}
          </motion.p>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {wordpressShowcase.sites.map((site, index) => (
              <motion.div
                key={site.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="group h-full overflow-hidden rounded-lg border-border/50 bg-card transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10">
                  <button
                    type="button"
                    onClick={() => setSelectedSite(site)}
                    aria-label={`${ui.wordpressShowcase.openScreenshot}: ${site.title}`}
                    className="relative block aspect-[16/10] w-full overflow-hidden border-b border-border/50 bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <img
                      src={site.thumbnail}
                      alt={`${site.title} screenshot`}
                      loading="lazy"
                      width={640}
                      height={400}
                      className="absolute inset-x-0 bottom-0 top-7 h-[calc(100%-1.75rem)] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 top-7 bg-gradient-to-b from-black/5 via-transparent to-black/30" />
                    <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-border/50 bg-background/90 px-4 shadow-sm backdrop-blur-sm">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                      <div className="inline-flex min-w-0 max-w-full items-center rounded-md border border-white/30 bg-background/85 px-3 py-1.5 shadow-sm backdrop-blur-sm dark:border-white/10">
                        <p className="truncate text-sm font-bold">{site.title}</p>
                      </div>
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-white/30 bg-background/85 shadow-sm backdrop-blur-sm transition-transform group-hover:scale-105 dark:border-white/10">
                        <Maximize2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </div>
                  </button>

                  <div className="flex h-auto flex-col gap-5 p-5">
                    <div>
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="text-xl font-bold leading-tight">
                            {site.title}
                          </h3>
                          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                            <Layers3 className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                            <span>{site.category}</span>
                          </div>
                        </div>
                        <MonitorSmartphone className="h-5 w-5 flex-shrink-0 text-cyan-500" />
                      </div>

                      <p className="text-sm leading-relaxed text-foreground/80">
                        {site.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {site.tags.filter((tag) => !commonTags.has(tag)).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="border border-border/50 bg-muted/50 px-2.5 py-1 text-[11px] mono"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto pt-1">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-center gap-2"
                      >
                        <a href={site.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          {ui.wordpressShowcase.visitSite}
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DialogContent className="h-[96vh] max-h-[96vh] w-[96vw] max-w-[96vw] overflow-hidden p-0 sm:w-[96vw] sm:max-w-[96vw]">
        {selectedSite && (
          <div className="grid h-full grid-rows-[auto_minmax(0,1fr)]">
            <div className="border-b border-border/50 p-4 pr-12">
              <DialogTitle>{selectedSite.title}</DialogTitle>
              <DialogDescription className="mt-1">
                {ui.wordpressShowcase.fullSizeScreenshot}
              </DialogDescription>
            </div>
            <div className="overflow-auto bg-muted/40 p-2 sm:p-4">
              <img
                src={selectedSite.image}
                alt={`${selectedSite.title} ${ui.wordpressShowcase.fullSizeScreenshot}`}
                className="mx-auto h-auto w-full max-w-none rounded-md border border-border/50 bg-background object-contain shadow-2xl"
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
