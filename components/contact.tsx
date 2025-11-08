"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SocialIcons } from "@/components/social-icons"
import { Send, CheckCircle } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isMobile = useMobile()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e?.target?.name || ""]: e?.target?.value || "",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Handle form submission here (would connect to a real API in production)
    console.log(formState)

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24">
      <motion.h2
        className="numbered-heading text-xl sm:text-2xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 font-mono text-green">04.</span> Get In Touch
      </motion.h2>

      {/* <motion.p
        className="text-center text-light-slate max-w-md mx-auto mb-8 sm:mb-12 text-base sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best
        to get back to you!
      </motion.p> */}

      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {isSubmitted ? (
          <motion.div
            className="bg-light-navy/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 text-center border border-green/20 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className="text-green mx-auto mb-4" size={isMobile ? 40 : 48} />
            <h3 className="text-lg sm:text-xl font-bold text-lightest-slate mb-2">Message Sent!</h3>
            <p className="text-light-slate">Thanks for reaching out. I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <form
            className="space-y-4 sm:space-y-5 bg-light-navy/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-lightest-navy/20 shadow-lg"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-light-slate mb-2 font-mono text-xs sm:text-sm">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="bg-navy/50 border-lightest-navy text-lightest-slate focus:border-green focus-visible:ring-green"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-light-slate mb-2 font-mono text-xs sm:text-sm">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="bg-navy/50 border-lightest-navy text-lightest-slate focus:border-green focus-visible:ring-green"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-light-slate mb-2 font-mono text-xs sm:text-sm">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-navy/50 border-lightest-navy text-lightest-slate focus:border-green focus-visible:ring-green"
              />
            </div>
            <Button type="submit" className="button w-full group relative overflow-hidden" disabled={isSubmitting}>
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message{" "}
                    <Send
                      size={isMobile ? 14 : 16}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-green/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </form>
        )}
      </motion.div>

      <motion.div
        className="mt-12 sm:mt-16 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SocialIcons />
      </motion.div>
    </section>
  )
}
