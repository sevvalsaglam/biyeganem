"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { AnimatedButton } from "./animated-button"

interface HeroSectionProps {
  opacity: any
  scale: any
  y: any
}

export const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ opacity, scale, y }, ref) => {
    return (
      <section
        ref={ref}
        className="relative min-h-screen pt-24 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero.png')` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          style={{ opacity, scale, y }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hayal Ettiklerinizin Ötesinde
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Zarif tasarımlar, etkileyici mekanlar ve unutulmaz anılar... Her detayı sizin için kurguluyoruz.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatedButton
              className="bg-white text-black hover:bg-gray-200"
              href="/galeri"
            >
              Organizasyonlara Göz At
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              href="/iletisim"
            >
              Bize Ulaşın
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </section>
    )
  }
)

HeroSection.displayName = "HeroSection"
