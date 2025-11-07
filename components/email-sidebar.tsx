"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

export function EmailSidebar() {
  const isMobile = useMobile();

  if (isMobile) return null;

  return (
    <motion.div
      className="hidden md:flex fixed bottom-0 right-6 lg:right-12 left-auto z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex flex-col items-center">
        <motion.a
          href="mailto:bhargavakiran18.w@gmail.com"
          className="font-mono text-light-slate hover:text-green transition-colors duration-300 tracking-widest"
          style={{ writingMode: "vertical-rl" }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          bhargavakiran18.w@gmail.com
        </motion.a>
        <motion.div
          className="h-24 w-px bg-light-slate mt-6"
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </div>
    </motion.div>
  );
}
