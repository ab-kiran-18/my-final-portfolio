"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const featuredProjects = [
  {
    title: "AI Interview",
    description:
      "Designed and built an AI-driven interview platform with real-time audio/video streaming, live proctoring, and dynamic alerts. Crafted a responsive, multi-layout UI (dark/light modes) optimized for low-end devices, featuring markdown and coding question support with an integrated editor.",
    tech: [
      "Websockets",
      "Server Side Events",
      "React Markdown",
      "Monaco Editor",
    ],
    external: "https://damonsavy.blogspot.com/2025/07/ai-interview-frontend-development.html",
    image: "/assets/projects/ai-interview.png",
  },
  {
    title: "AI-driven Talent Requisition",
    description:
      "The platform delivers an intuitive, modern interface where users can design workflows through drag-and-drop editors, get real-time AI suggestions, and interact with an AI-powered chat assistant. I engineered dynamic dashboards featuring interactive data visualizations, role-based access, and real-time updates via SSE, ensuring a seamless and responsive experience even with large-scale data.",
    tech: ["Server Side Events", "React DND"],
    image: "/assets/projects/ai-driven-client-dashboard.png",
  },
  {
    title: "LinkedIn Talent Discovery",
    description:
      "Developed the frontend of an AI-powered LinkedIn talent discovery tool using React.js, Styled Components, and Material UI. Built intuitive, pixel-perfect interfaces with real-time AI recommendations, WebSocket-based live updates, and multi-stage candidate dashboards, while integrating Chrome extension support and real-time error monitoring for seamless performance.",
    tech: ["React", "Styled-components", "MUI", "Tanstack Table", "WebSocket"],
    external: "https://damonsavy.blogspot.com/2025/08/linkedin-talent-discovery-frontend-case.html",
    image: "/assets/projects/talent-discovery.png",
  },
];

const otherProjects = [
  {
    title: "Zeko Design System",
    description:
      "A comprehensive design system with reusable components, built using atomic structural design to ensure consistency across applications.",
    tech: ["Atomic Structural Design"],
    image: "/assets/projects/zeko-design-system.png",
  },
  {
    title: "Kanban Board",
    description:
      "An interactive candidate management board with drag-and-drop functionality for tracking candidates through different stages of the hiring process.",
    tech: ["React DND"],
    image: "/assets/projects/candidate-board.png",
  },
  {
    title: "AI Hiring Workflows",
    description:
      "A tool for creating AI Hiring workflows for the company, improving efficiency and productivity by automating the hiring process.",
    tech: [],
    image: "/assets/projects/workflow-creator.png",
  },
  {
    title: "Candidate Report",
    description:
      "A detailed comprehension of candidate assessment report. Features data visualization, skill analysis and performance metrics for hiring decisions.",
    tech: [],
    image: "/assets/projects/candidate-report.png",
  },
  {
    title: "AI Client Onboarding",
    description:
      "An intelligent onboarding system that automates and personalizes the new client experience. Conversation based onboarding process.",
    tech: ["Framer Motion"],
    image: "/assets/projects/ai-onboarding-system.png",
  },
  {
    title: "Code Editor",
    description:
      "A powerful in-browser code editor built with Monaco Editor, supporting multiple programming languages with inbuilt compiler.",
    tech: ["Monaco editor"],
    image: "/assets/projects/coding-editor.png",
  },
  {
    title: "Zeko Landing Page",
    description:
      "Built multiple landing pages for the company, improving conversion rate and user engagement.",
    tech: ["Framer Motion", "Tailwind"],
    image: "/assets/projects/landing-page.png",
  },
  {
    title: "Presentation Builder",
    description:
      "A creative tool for building employer branding presentations. Features customizable templates, and preview options to showcase company culture.",
    tech: ["React"],
    image: "/assets/projects/presenetation-creator.png",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredOtherProject, setHoveredOtherProject] = useState<number | null>(
    null
  );
  const [showAllProjects, setShowAllProjects] = useState(false);

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
        {featuredProjects?.map((project, i) => (
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
              className={`relative md:col-span-5 rounded-xl overflow-hidden shadow-2xl ${
                i % 2 === 0 ? "md:order-2" : "md:order-1"
              } ${project?.external ? "cursor-pointer" : "cursor-default"}`}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              onTouchStart={() => setHoveredProject(i)}
              onTouchEnd={() => setHoveredProject(null)}
            >
              {project?.external ? (
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
                      src={project?.image || "/placeholder.svg"}
                      alt={`${project?.title || "Project"} - Screenshot`}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover transition-transform duration-500"
                      quality={85}
                      priority={i === 0}
                    />
                  </motion.div>
                </Link>
              ) : (
                <div className="block">
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
                      src={project?.image || "/placeholder.svg"}
                      alt={`${project?.title || "Project"} - Screenshot`}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover transition-transform duration-500"
                      quality={85}
                      priority={i === 0}
                    />
                  </motion.div>
                </div>
              )}
            </div>

            <div
              className={`md:col-span-7 md:col-start-1 md:row-start-1 ${
                i % 2 === 0 ? "md:order-1" : "md:order-2 md:col-start-6"
              } z-10`}
            >
              {project?.external ? (
                <Link
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold text-lightest-slate mb-4 sm:mb-6 cursor-pointer hover:text-green transition-colors duration-300 flex items-center gap-2 group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <span>{project?.title}</span>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-green opacity-70 group-hover:opacity-100 group-hover:text-green transition-all duration-300" />
                  </motion.h3>
                </Link>
              ) : (
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-lightest-slate mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                >
                  {project?.title}
                </motion.h3>
              )}

              <motion.div
                className="bg-light-navy p-4 sm:p-6 rounded-xl mb-4 sm:mb-6 shadow-xl backdrop-blur-sm bg-opacity-80 border border-lightest-navy/50"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              >
                <p className="text-light-slate text-sm sm:text-base">
                  {project?.description}
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
                {project?.tech?.map((tech, j) => (
                  <li
                    key={j}
                    className="text-light-slate bg-navy px-2 sm:px-3 py-1 rounded-full shadow-sm border border-lightest-navy/30"
                  >
                    {tech}
                  </li>
                ))}
              </motion.ul>
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
          Other Works
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(showAllProjects ? otherProjects : otherProjects?.slice(0, 6))?.map(
            (project, index) => (
              <motion.div
                key={index}
                className="group relative cursor-default"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
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
                        src={project?.image || "/placeholder.svg"}
                        alt={`${project?.title || "Project"} - Project screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                        quality={80}
                        loading="lazy"
                      />
                    </motion.div>
                  </div>

                  <div className="relative z-10 flex h-[calc(100%-12rem)] flex-col justify-between p-6">
                    <div>
                      {'external' in project && project.external ? (
                        <Link
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <motion.h3
                            className="mb-3 text-xl font-bold text-lightest-slate transition-colors duration-300 group-hover:text-green cursor-pointer flex items-center gap-2"
                            animate={
                              hoveredOtherProject === index
                                ? { x: [0, 5, 0] }
                                : { x: 0 }
                            }
                            transition={{ duration: 0.5 }}
                          >
                            <span>{project?.title}</span>
                            <ExternalLink className="w-4 h-4 text-green opacity-70 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
                          </motion.h3>
                        </Link>
                      ) : (
                        <motion.h3
                          className="mb-3 text-xl font-bold text-lightest-slate transition-colors duration-300 group-hover:text-green"
                          animate={
                            hoveredOtherProject === index
                              ? { x: [0, 5, 0] }
                              : { x: 0 }
                          }
                          transition={{ duration: 0.5 }}
                        >
                          {project?.title}
                        </motion.h3>
                      )}

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
                        {project?.description}
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
                      {project?.tech?.map((tech, techIndex) => (
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
            )
          )}
        </div>

        {/* Show All Button */}
        {!showAllProjects && otherProjects?.length > 6 && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              onClick={() => setShowAllProjects(true)}
              className="px-8 py-3 rounded-lg bg-transparent text-green font-mono text-sm hover:bg-green/10 transition-all duration-300 hover:border-green hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show All
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
