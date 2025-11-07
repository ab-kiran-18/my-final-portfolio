"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useMobile } from "@/hooks/use-mobile";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "Web Performance",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMobile();

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24">
      <motion.h2
        className="numbered-heading text-xl sm:text-2xl font-bold mb-10 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 font-mono text-green">01.</span> About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
        <motion.div
          className="col-span-1 md:col-span-2 order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4 sm:space-y-5 text-slate text-base sm:text-lg">
            <p>
              My love for Web development started back in my 2nd year of
              college. One day, I stumbled upon a youtube video on a CSS
              challenge by{" "}
              <a href="#" className="link">
                Kevin Powell
              </a>{" "}
              and that just hooked me! I got fascinated with how you can style
              things and even create complex shapes using just CSS. I spent a
              lot of time experimenting and making all sorts of designs, which
              really made me fall in love with Frontend.
            </p>
            <p>
              Now, I’m{" "}
              <a href="#" className="link">
                Leading the Frontend at Zeko AI
              </a>{" "}
              , a startup where I get to turn ideas into reality every day. I
              love working with new tech, creating smooth User Experiences,
              User-centric and Pixel Perfect web .
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-center font-mono text-xs sm:text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <span className="text-green mr-2">▹</span> {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto order-1 md:order-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-md overflow-hidden group">
            <div className="absolute inset-0 bg-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
              src="/assets/about/profile-img.png"
              alt="Profile picture"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 md:h-64 rounded-md border-2 border-green transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
        </motion.div>
      </div>
    </section>
  );
}
