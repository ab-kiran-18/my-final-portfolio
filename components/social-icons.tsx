"use client"

import { Github, Linkedin, Codepen, Twitter } from "lucide-react"
import { motion } from "framer-motion"

interface SocialIconsProps {
  orientation?: "horizontal" | "vertical"
}

export function SocialIcons({ orientation = "horizontal" }: SocialIconsProps) {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com",
    },
    {
      name: "CodePen",
      icon: <Codepen size={20} />,
      url: "https://codepen.io",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://twitter.com",
    },
  ]

  return (
    <ul className={`flex ${orientation === "vertical" ? "flex-col space-y-6" : "space-x-6"}`}>
      {socialLinks.map((social, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * i }}
          whileHover={{ y: -3 }}
        >
          <a
            href={social.url}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green transition-colors duration-300 focus-ring inline-block p-2"
          >
            {social.icon}
          </a>
        </motion.li>
      ))}
    </ul>
  )
}
