"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useMobile } from "@/hooks/use-mobile";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 sm:pt-0 overflow-hidden">
      {/* Full-width Animated Gradient Background */}
      <div className="absolute inset-0 w-full -z-10">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-light-navy opacity-100" />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-2 left-2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-2 right-2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Content Container - matches page padding */}
      <div className="px-6 md:px-12 lg:px-24 mx-auto max-w-7xl w-full relative z-10">
        {isMounted && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5 sm:space-y-6 md:pt-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-lightest-slate"
            >
              AB Kiran
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate"
            >
              I build great web experiences.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-slate text-base sm:text-lg"
            >
              I'm a Product Engineer specializing in building exceptional web
              experiences. Currently, I'm focused on building User-Centric,
              Pixel Perfect, High Performant products at{" "}
              <a href="https://www.linkedin.com/company/zekoai/" className="text-green hover:underline">
                Zeko AI
              </a>
              .
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
              <Button
                className="bg-green/95 text-navy hover:bg-green transition-all duration-200 hover:scale-105 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.5),0_2px_6px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.15)]"
                asChild
              >
                <a href="#projects" className="group relative overflow-hidden">
                  <span className="relative z-10 text-lg">
                    Check out my work
                  </span>
                  <span className="absolute inset-0 bg-green/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
