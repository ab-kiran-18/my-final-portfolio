"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, FileText, Code, Lightbulb, BookOpen, Zap } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const articles = [
  {
    year: "2024",
    title: "Building Accessible Web Applications",
    url: "#",
    icon: <FileText className="text-green" size={18} />,
    description: "A comprehensive guide to creating web applications that everyone can use.",
  },
  {
    year: "2024",
    title: "The Power of Server Components in Next.js",
    url: "#",
    icon: <Code className="text-green" size={18} />,
    description: "Exploring the benefits and implementation of React Server Components.",
  },
  {
    year: "2023",
    title: "Optimizing React Performance",
    url: "#",
    icon: <Zap className="text-green" size={18} />,
    description: "Techniques and strategies to make your React applications blazing fast.",
  },
  {
    year: "2023",
    title: "Creating Smooth Animations with Framer Motion",
    url: "#",
    icon: <Code className="text-green" size={18} />,
    description: "A deep dive into creating fluid, engaging animations in React applications.",
  },
  {
    year: "2022",
    title: "The Future of Web Development",
    url: "#",
    icon: <Lightbulb className="text-green" size={18} />,
    description: "Predictions and insights about upcoming trends in web development.",
  },
  {
    year: "2022",
    title: "Mastering TypeScript for Frontend Developers",
    url: "#",
    icon: <BookOpen className="text-green" size={18} />,
    description: "Essential TypeScript patterns and practices for modern frontend development.",
  },
]

export function Writing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useMobile()

  return (
    <section id="writing" ref={ref} className="py-16 sm:py-24">
      <motion.h2
        className="numbered-heading text-xl sm:text-2xl font-bold mb-10 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 font-mono text-green">04.</span> My Writing
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {articles?.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              className="group"
            >
              <Link
                href={article?.url || "#"}
                className="block bg-light-navy/50 backdrop-blur-sm border border-lightest-navy/20 rounded-lg p-4 sm:p-6 h-full hover:bg-light-navy/80 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <span className="mr-2 sm:mr-3">{article?.icon}</span>
                    <span className="font-mono text-light-slate text-xs sm:text-sm">{article?.year}</span>
                  </div>
                  <ArrowUpRight
                    size={isMobile ? 16 : 18}
                    className="text-green opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-lightest-slate mb-2 sm:mb-3 group-hover:text-green transition-colors duration-300">
                  {article?.title}
                </h3>
                <p className="text-light-slate text-xs sm:text-sm">{article?.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <Link
            href="#"
            className="inline-flex items-center font-mono text-green hover:text-green/80 transition-colors duration-300 group text-sm sm:text-base"
          >
            View All Articles
            <ArrowUpRight
              size={isMobile ? 14 : 16}
              className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
