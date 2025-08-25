"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, Folder, ArrowUpRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const featuredProjects = [
  {
    title: "AI Interview",
    description:
      "Executed a comprehensive redesign of the AI Interview - a voice-based conversational AI product by conducting in-depth UX research and competitive analysis, resulting in a 26% increase in Net Promoter Score (NPS).",
    tech: ["Next.js", "Tailwind CSS", "Shadcn", "Websockets", "Real-time data streaming", "Monaco Editor"],
    github: "https://github.com",
    external: "https://example.com",
    image:
      "/assets/projects/ai-interview.png"
  },
  {
    title: "Linkedin Talent Discovery",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tech: ["React.js", "Styled-components", "Material UI", "Tanstack Table", "Websockets"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/placeholder.svg?height=400&width=600&query=code editor with dark blue theme",
  },
  {
    title: "AI Driven Client Dashboard",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tech: ["Server Side Events", "React DND", "Framer Motion", "React Markdown Renderer", "puppeteer"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/placeholder.svg?height=400&width=600&query=code editor with dark blue theme",
  },
  {
    title: "Myways Component Library",
    description:
      "A comprehensive component library and design system that powers enterprise applications. Features accessible, reusable components with thorough documentation and examples.",
    tech: ["Next.js", "Javascript", "Styled-components", "Material UI"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/placeholder.svg?height=400&width=600&query=component library with dark theme showing various UI elements",
  },
]

const otherProjects = [
  {
    title: "AI Onboarding System",
    description:
      "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, size, or most recently pushed to.",
    tech: ["Next.js", "Framer Motion", "GitHub API"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Coding Platform",
    description:
      "A full-featured, open-source markdown editor with live preview and syntax highlighting. Supports GitHub Flavored Markdown, math expressions, and custom plugins.",
    tech: ["TypeScript", "React", "Monaco editor", "Tailwind CSS"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Dynamic Data Grid",
    description:
      "A beautiful weather application with animated visualizations, hourly and weekly forecasts, and location search. Uses OpenWeather API for accurate data.",
    tech: ["React", "D3.js", "OpenWeather API"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Form Builder",
    description:
      "A tool that helps developers create beautiful portfolio websites without writing code. Features customizable templates, themes, and content sections.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Presentation Builder", // for employer branding
    description:
      "A comprehensive financial dashboard for tracking investments, expenses, and income. Features interactive charts, budget planning tools, and financial insights.",
    tech: ["React", "Redux", "D3.js", "Firebase"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "PDF Report Generator", // using puppeteer
    description:
      "An application that generates unique images based on text prompts using AI. Features style customization, resolution options, and image history.",
    tech: ["Next.js", "OpenAI API", "Vercel"],
    github: "https://github.com",
    external: "https://example.com",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const isMobile = useMobile()

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-24">
      <motion.h2
        className="numbered-heading text-xl sm:text-2xl font-bold mb-10 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 font-mono text-green">03.</span> Some Things I've Built
      </motion.h2>

      <div className="space-y-20 sm:space-y-32">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={i}
            className={`relative grid md:grid-cols-12 gap-5 sm:gap-6 items-center ${i % 2 === 0 ? "" : "md:text-right"}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          >
            <div
              className={`relative md:col-span-5 rounded-lg overflow-hidden shadow-2xl ${i % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              onTouchStart={() => setHoveredProject(i)}
              onTouchEnd={() => setHoveredProject(null)}
            >
              <Link href={project.external} target="_blank" rel="noopener noreferrer" className="block">
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
              className={`md:col-span-7 md:col-start-1 md:row-start-1 ${i % 2 === 0 ? "md:order-1" : "md:order-2 md:col-start-6"
                } z-10`}
            >
              <motion.p
                className="font-mono text-green text-xs sm:text-sm mb-1 sm:mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              >
                Featured Project
              </motion.p>

              <motion.h3
                className="text-xl sm:text-2xl font-bold text-lightest-slate mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
              >
                {project.title}
              </motion.h3>

              <motion.div
                className="bg-light-navy p-4 sm:p-6 rounded-lg shadow-xl mb-4 sm:mb-6 backdrop-blur-sm bg-opacity-80 border border-lightest-navy/50"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              >
                <p className="text-light-slate text-sm sm:text-base">{project.description}</p>
              </motion.div>

              <motion.ul
                className={`flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 text-xs sm:text-sm font-mono ${i % 2 === 0 ? "" : "md:justify-end"
                  }`}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
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
                className={`flex gap-4 sm:gap-5 ${i % 2 === 0 ? "" : "md:justify-end"}`}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
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


    </section>
  )
}
