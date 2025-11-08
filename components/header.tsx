"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Contact", url: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY?.getPrevious() ?? 0;

    if (latest > 50) {
      setHidden(latest > previous);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e?.target as HTMLElement;
      if (isOpen && !target?.closest?.("nav")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 px-5 sm:px-6 md:px-12 lg:px-24 backdrop-blur-md transition-all duration-300 ${
        (scrollY?.get() ?? 0) > 50
          ? "bg-navy/90 py-3 shadow-md"
          : "bg-transparent py-4 sm:py-6"
      }`}
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex justify-between items-center max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-green font-mono text-lg sm:text-xl relative group"
          >
            <span className="relative z-10">AB</span>
            <span className="absolute -inset-1 rounded bg-green/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
          </Link>
        </motion.div>

        <motion.div
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ul className="flex space-x-8 font-mono text-sm">
            {navLinks?.map((link, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                  <Link
                    href={link?.url || "#"}
                    className="nav-link focus-ring group relative px-2 py-1"
                  >
                  {/* <span className="text-green mr-1">0{i + 1}.</span>  */}
                  {link?.name}
                  <span className="absolute inset-0 rounded-md bg-green/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Button
              className="bg-green/95 text-navy hover:bg-green rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.5),0_2px_6px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.15)]"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1aCaW97gsMkZsNIcFD659taRPCIfNZ1Ut/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <div className="md:hidden">
          <button
            className="text-lightest-slate focus-ring p-2 rounded-full bg-light-navy/30"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-navy/95 backdrop-blur-md z-40 md:hidden flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="flex flex-col space-y-8 items-center font-mono text-lg">
              {navLinks?.map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  <Link
                    href={link?.url || "#"}
                    className="nav-link focus-ring text-xl flex flex-col items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-green text-sm mb-1">0{i + 1}.</span>
                    <span>{link?.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Button
                className="bg-green/95 text-navy hover:bg-green rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.5),0_2px_6px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.15)]"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
