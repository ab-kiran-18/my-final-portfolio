"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useMobile } from "@/hooks/use-mobile";

const jobs = [
  {
    company: "Zeko AI",
    url: "https://zeko.ai/",
    title: "Product Engineer - Frontend",
    range: "2023 - Present",
    duties: [
      "Led the end-to-end development of Zeko’s AI Interview platform, improving user engagement and boosting NPS by 25% through refined UX and real-time interaction workflows",
      "Owned the complete frontend architecture for Interview, Dashboard, and LinkedIn Hunt, ensuring a unified, accessible, and high-performant experience across all products",
      "Migrated legacy systems to a Turborepo-powered Next.js + TypeScript architecture, reducing load times by 55% and sustaining Lighthouse scores above 90.",
      "Built and standardized a robust atomic design system, increasing developer velocity by 30%, elevating reusability, and aligning UI/UX across the product ecosystem",
      "Engineered real-time, interactive modules using WebSockets, SSE, and dynamic Implemented scalable CI/CD pipelines with SST + GitHub Actions, enabling automated, reliable, and zero-downtime deployments to staging and production, style, and ship high-quality websites, design systems, and digital experiences",
      "Optimized Core Web Vitals through bundle splitting, lazy loading, CDN caching, and advanced performance techniques—achieving high-performant, enterprise-grade frontend delivery",
      "Integrated REST and GraphQL APIs using React Query-based caching, ensuring resilient data flows, reduced API overhead, and a smoother experience across complex workflows.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Javascript",
      "Tailwind",
      "Styled-components",
      "Web Performance",
      "User Experience",
      "Code Reusability",
      "Shadcn",
      "MUI",
      "Turbo Repo",
      "MongoDB",
      "Node.js",
      "Python",
      "AWS Lambda",
      "AWS S3",
      "DynamoDB",
    ],
  },
];

export function Experience() {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState<number | null>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMobile();

  useEffect(() => {
    if (tabFocus !== null) {
      tabsRef.current[tabFocus]?.focus();
    }
  }, [tabFocus]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      e.preventDefault();

      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setTabFocus((prev) =>
          prev === null || prev === 0 ? (jobs?.length ?? 1) - 1 : prev - 1
        );
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setTabFocus((prev) =>
          prev === null || prev === (jobs?.length ?? 0) - 1 ? 0 : prev + 1
        );
      }
    }
  };

  return (
    <section id="experience" ref={ref} className="py-16 sm:py-24">
      <motion.h2
        className="numbered-heading text-xl sm:text-2xl font-bold mb-10 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 font-mono text-green">02.</span> Where I've Worked
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-4xl mx-auto">
        <motion.div
          className="relative flex overflow-x-auto md:block md:overflow-visible mb-6 md:mb-0 md:w-max"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
        >
          <div className="flex md:flex-col min-w-full w-max">
            {jobs?.map((job, i) => (
              <button
                key={i}
                ref={(el) => {
                  if (el) {
                    tabsRef.current[i] = el;
                  }
                }}
                className={`px-4 sm:px-5 py-2 sm:py-3 font-mono text-xs sm:text-sm whitespace-nowrap focus-ring rounded transition-all duration-300 ${
                  activeTabId === i
                    ? "text-green bg-light-navy/50 relative"
                    : "text-slate hover:text-green hover:bg-light-navy/30"
                }`}
                onClick={() => setActiveTabId(i)}
                onFocus={() => setTabFocus(i)}
                id={`tab-${i}`}
                role="tab"
                tabIndex={activeTabId === i ? 0 : -1}
                aria-selected={activeTabId === i}
                aria-controls={`panel-${i}`}
              >
                {job.company}
                {activeTabId === i && (
                  <motion.span
                    className={`absolute ${
                      isMobile
                        ? "bottom-0 left-0 right-0 h-0.5"
                        : "left-0 top-0 bottom-0 w-0.5"
                    } bg-green rounded-full`}
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative flex-1 min-h-[300px] sm:min-h-[550px]">
          <AnimatePresence mode="wait">
            {jobs?.map(
              (job, i) =>
                activeTabId === i && (
                  <motion.div
                    key={i}
                    className="space-y-4 sm:space-y-6 relative w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    id={`panel-${i}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${i}`}
                    tabIndex={0}
                  >
                    <h3 className="text-lg sm:text-xl font-medium text-lightest-slate">
                      <span>{job?.title}</span>{" "}
                      <span className="text-green">
                        @{" "}
                        <Link
                          href={job?.url || "#"}
                          className="link inline-flex items-center group"
                          target="_blank"
                        >
                          {job?.company}
                          <ExternalLink
                            size={16}
                            className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </Link>
                      </span>
                    </h3>

                    <p className="font-mono text-xs sm:text-sm text-light-slate">
                      {job?.range}
                    </p>

                    <ul className="space-y-3">
                      {job?.duties?.map((duty, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + j * 0.1 }}
                        >
                          <ChevronRight
                            size={18}
                            className="text-green shrink-0 mt-1 mr-2"
                          />
                          <span className="text-light-slate text-sm sm:text-base">
                            {duty}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {job?.tech?.map((tech, j) => (
                        <motion.span
                          key={j}
                          className="px-2 sm:px-3 py-1 rounded-full bg-light-navy text-green text-xs font-mono border border-green/20 shadow-sm"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.3 + j * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
