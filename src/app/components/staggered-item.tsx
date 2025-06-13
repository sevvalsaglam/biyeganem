"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

interface StaggeredItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggeredItem({ children, className = "" }: StaggeredItemProps) {
  const isMobile = useMobile()

  const itemVariants = {
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
      },
    }),
    hidden: { opacity: 0, y: 20 },
  }
  

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
