"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface RevealTextProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export function RevealText({
  children,
  className = "",
  delay = 0,
  threshold = 0.4,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useInView(ref, { once: true, amount: threshold })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
