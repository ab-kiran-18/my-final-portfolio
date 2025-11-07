"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useMobile } from "@/hooks/use-mobile";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMobile();

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
    <section className="min-h-screen flex flex-col justify-center pt-16 sm:pt-0">
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
            experiences. Currently, I'm focused on building User-Centric, Pixel
            Perfect, High Performant products at{" "}
            <a href="#" className="text-green hover:underline">
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
                <span className="relative z-10 text-lg">Check out my work</span>
                <span className="absolute inset-0 bg-green/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
