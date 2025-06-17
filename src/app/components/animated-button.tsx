"use client"

import { useState, type ReactNode, type ButtonHTMLAttributes } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "link"
  size?: "default" | "sm" | "lg"
  href?: string
}

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  href,
  disabled,
  ...props
}: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false)

  const base = {
    default: "bg-black text-white hover:bg-black/90",
    outline: "border border-white bg-transparent hover:bg-white/10",
    link: "bg-transparent p-0 hover:underline",
  }

  return (
    <motion.div
      className="relative inline-block"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatePresence>
        {hovered && !disabled && (
          <motion.div
            className="absolute inset-0 rounded-full bg-black/10 dark:bg-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <Button
        className={cn(
          base[variant],
          "relative rounded-full px-6 py-2 font-medium transition",
          hovered && "shadow-md",
          disabled && "opacity-50 pointer-events-none",
          className
        )}
        variant={variant}
        size={size}
        disabled={disabled}
        {...props}
      >
        {href ? <a href={href}>{children}</a> : children}
      </Button>
    </motion.div>
  )
}
