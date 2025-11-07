"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const featuredProjects = [
  {
    title: "AI Interview",
    description:
      "Executed a comprehensive redesign of the AI Interview - a voice-based conversational AI product by conducting in-depth UX research and competitive analysis, resulting in a 26% increase in Net Promoter Score (NPS).",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "Websockets",
      "Real-time data streaming",
      "Monaco Editor",
    ],
    github: "https://github.com",
    external: "https://example.com",
    image: "/assets/projects/ai-interview.png",
  },
  {
    title: "Linkedin Talent Discovery",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tech: [
      "React.js",
      "Styled-components",
      "Material UI",
      "Tanstack Table",
      "Websockets",
    ],
    github: "https://github.com",
    external: "https://example.com",
    image: "/assets/projects/interview-list.png",
  },
  {
    title: "AI Driven Client Dashboard",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tech: [
      "Server Side Events",
      "React DND",
      "Framer Motion",
      "React Markdown Renderer",
      "puppeteer",
    ],
    github: "https://github.com",
    external: "https://example.com",
    image: "/assets/projects/ai-driven-client-dashboard.png",
  },
  {
    title: "Candidate Report",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tech: ["Next.js", "Tailwind CSS", "Markdown", "Framer Motion"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/assets/projects/candidate-report.png",
  },
  {
    title: "Myways Component Library",
    description:
      "A comprehensive component library and design system that powers enterprise applications. Features accessible, reusable components with thorough documentation and examples.",
    tech: ["Next.js", "Javascript", "Styled-components", "Material UI"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/assets/projects/landing-page.png",
  },
];

const otherProjects = [
  {
    title: "AI Onboarding System",
    description:
      "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, size, or most recently pushed to.",
    tech: ["Framer Motion", "GitHub API"],
    image: "/assets/projects/ai-onboarding-system.png",
  },
  {
    title: "Code Editor",
    description:
      "A full-featured, open-source markdown editor with live preview and syntax highlighting. Supports GitHub Flavored Markdown, math expressions, and custom plugins.",
    tech: ["Monaco editor", "Tailwind CSS"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/assets/projects/coding-editor.png",
  },
  {
    title: "Advanced Data Grids",
    description:
      "A beautiful weather application with animated visualizations, hourly and weekly forecasts, and location search. Uses OpenWeather API for accurate data.",
    tech: ["React", "OpenWeather API"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/assets/projects/advanced-data-grids.png",
  },
  {
    title: "Kanban Board",
    description:
      "A tool that helps developers create beautiful portfolio websites without writing code. Features customizable templates, themes, and content sections.",
    tech: ["Vue.js", "Firebase"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/assets/projects/data-grid.png",
  },
  {
    title: "Presentation Builder", // for employer branding
    description:
      "A comprehensive financial dashboard for tracking investments, expenses, and income. Features interactive charts, budget planning tools, and financial insights.",
    tech: ["React", "Redux"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/assets/projects/signup-screen.png",
  },
  {
    title: "PDF Report Generator", // using puppeteer
    description:
      "An application that generates unique images based on text prompts using AI. Features style customization, resolution options, and image history.",
    tech: ["Next.js"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/assets/projects/advanced-data-grids.png",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredOtherProject, setHoveredOtherProject] = useState<number | null>(
    null
  );
  const isMobile = useMobile();

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-24">
      <motion.h2
        className="numbered-heading text-xl sm:text-2xl font-bold mb-10 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 font-mono text-green">03.</span> Some Things I've
        Built
      </motion.h2>

      <div className="space-y-20 sm:space-y-32">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={i}
            className={`relative grid md:grid-cols-12 gap-5 sm:gap-6 items-center ${
              i % 2 === 0 ? "" : "md:text-right"
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          >
            <div
              className={`relative md:col-span-5 rounded-lg overflow-hidden shadow-2xl ${
                i % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              onTouchStart={() => setHoveredProject(i)}
              onTouchEnd={() => setHoveredProject(null)}
            >
              <Link
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="absolute inset-0 bg-green/20 z-10 backdrop-blur-[1px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === i ? 0 : 0.8 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="relative overflow-hidden"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredProject === i ? 1.03 : 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500"
                  />
                </motion.div>
              </Link>
            </div>

            <div
              className={`md:col-span-7 md:col-start-1 md:row-start-1 ${
                i % 2 === 0 ? "md:order-1" : "md:order-2 md:col-start-6"
              } z-10`}
            >
              <motion.p
                className="font-mono text-green text-xs sm:text-sm mb-1 sm:mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              >
                Featured Project
              </motion.p>

              <motion.h3
                className="text-xl sm:text-2xl font-bold text-lightest-slate mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
              >
                {project.title}
              </motion.h3>

              <motion.div
                className="bg-light-navy p-4 sm:p-6 rounded-lg shadow-xl mb-4 sm:mb-6 backdrop-blur-sm bg-opacity-80 border border-lightest-navy/50"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              >
                <p className="text-light-slate text-sm sm:text-base">
                  {project.description}
                </p>
              </motion.div>

              <motion.ul
                className={`flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 text-xs sm:text-sm font-mono ${
                  i % 2 === 0 ? "" : "md:justify-end"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
              >
                {project.tech.map((tech, j) => (
                  <li
                    key={j}
                    className="text-light-slate bg-navy px-2 sm:px-3 py-1 rounded-full shadow-sm border border-lightest-navy/30"
                  >
                    {tech}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                className={`flex gap-4 sm:gap-5 ${
                  i % 2 === 0 ? "" : "md:justify-end"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
              >
                <Link
                  href={project.github}
                  className="text-lightest-slate hover:text-green focus-ring p-2 transition-all duration-300 hover:translate-y-[-2px]"
                  aria-label={`GitHub link for ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} className="sm:size-5" />
                </Link>
                <Link
                  href={project.external}
                  className="text-lightest-slate hover:text-green focus-ring p-2 transition-all duration-300 hover:translate-y-[-2px]"
                  aria-label={`External link for ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} className="sm:size-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 sm:mt-32"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.h2
          className="text-xl sm:text-2xl font-bold mb-10 sm:mb-16 text-lightest-slate"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Other Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredOtherProject(index)}
              onMouseLeave={() => setHoveredOtherProject(null)}
            >
              <div className="relative h-[420px] overflow-hidden rounded-xl bg-gradient-to-br from-light-navy/80 to-navy/80 backdrop-blur-md border border-lightest-navy/50 shadow-2xl transition-all duration-500 group-hover:border-green/50 group-hover:shadow-[0_0_30px_rgba(100,255,218,0.1)]">
                <motion.div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(100,255,218,0.05) 0%, transparent 70%)",
                  }}
                  animate={
                    hoveredOtherProject === index
                      ? { scale: [1, 1.2, 1], opacity: [0, 0.3, 0] }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />

                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/90 z-10" />
                  <motion.div
                    className="h-full w-full"
                    animate={
                      hoveredOtherProject === index
                        ? { scale: 1.1 }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                    />
                  </motion.div>
                </div>

                <div className="relative z-10 flex h-[calc(100%-12rem)] flex-col justify-between p-6">
                  <div>
                    <motion.h3
                      className="mb-3 text-xl font-bold text-lightest-slate transition-colors duration-300 group-hover:text-green"
                      animate={
                        hoveredOtherProject === index
                          ? { x: [0, 5, 0] }
                          : { x: 0 }
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-sm leading-relaxed text-slate"
                      initial={{ opacity: 0.8 }}
                      animate={
                        hoveredOtherProject === index
                          ? { opacity: 1 }
                          : { opacity: 0.8 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      hoveredOtherProject === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.9, y: 0 }
                    }
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="rounded-full border border-green/20 bg-green/5 px-3 py-1 font-mono text-xs text-green backdrop-blur-sm transition-all duration-300 group-hover:border-green/40 group-hover:bg-green/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          hoveredOtherProject === index
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0.9, scale: 1 }
                        }
                        transition={{
                          duration: 0.2,
                          delay: techIndex * 0.05,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green to-transparent"
                  initial={{ width: 0 }}
                  animate={
                    hoveredOtherProject === index
                      ? { width: "100%" }
                      : { width: 0 }
                  }
                  transition={{ duration: 0.5 }}
                />
              </div>

              <motion.div
                className="absolute inset-0 -z-10 rounded-xl blur-xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(100,255,218,0.15), transparent 70%)",
                }}
                initial={{ opacity: 0 }}
                animate={
                  hoveredOtherProject === index
                    ? { opacity: 1, scale: 1.05 }
                    : { opacity: 0, scale: 1 }
                }
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
