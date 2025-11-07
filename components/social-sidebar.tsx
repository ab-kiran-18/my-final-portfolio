"use client";

import { motion } from "framer-motion";
import { SocialIcons } from "@/components/social-icons";
import { useMobile } from "@/hooks/use-mobile";

export function SocialSidebar() {
  const isMobile = useMobile();

  if (isMobile) return null;

  return (
    <motion.div
      className="hidden md:flex fixed bottom-0 left-6 lg:left-12 right-auto z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex flex-col items-center">
        <SocialIcons orientation="vertical" />
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
