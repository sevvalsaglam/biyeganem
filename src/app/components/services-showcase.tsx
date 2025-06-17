"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedButton } from "./animated-button"
import { services } from "../data/services-data"
import { getIcon } from "@/lib/get-icon"

export function ServicesShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay },
    }),
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <section ref={ref} className="py-20 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto px-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            custom={index * 0.2} // delay'i index bazlı veriyoruz
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-6 inline-block p-4 rounded-full bg-white/10">
              {getIcon(service.icon, "sm")}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <AnimatedButton
              href={`/organizasyon/${service.slug}`}
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Detayları Gör
            </AnimatedButton>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
