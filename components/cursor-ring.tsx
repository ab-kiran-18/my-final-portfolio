"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export function CursorRing() {
  const [isMounted, setIsMounted] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const isMobile = useMobile()

  // Use spring for smoother cursor movement
  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // State for hover effect
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Only add event listeners on desktop
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
      }

      const handleMouseEnter = () => setIsHovering(true)
      const handleMouseLeave = () => setIsHovering(false)

      window.addEventListener("mousemove", moveCursor)

      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      return () => {
        window.removeEventListener("mousemove", moveCursor)
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
      }
    }
  }, [cursorX, cursorY])

  // Only render on client and on desktop
  if (!isMounted || isMobile) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          height: isHovering ? 64 : 32,
          width: isHovering ? 64 : 32,
          backgroundColor: "rgba(100, 255, 218, 0)",
          border: isHovering ? "2px solid rgba(100, 255, 218, 0.5)" : "1px solid rgba(100, 255, 218, 0.3)",
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          height: isHovering ? 8 : 4,
          width: isHovering ? 8 : 4,
          backgroundColor: "rgba(100, 255, 218, 0.8)",
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  )
}
