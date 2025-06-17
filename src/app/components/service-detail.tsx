"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedButton } from "./animated-button"

interface ServiceDetailProps {
  id: number
  title: string
  description: string
  features: string[]
  image: string
  icon: React.ReactNode
  slug: string
  reverse?: boolean
}

export function ServiceDetail({
  title,
  description,
  features,
  image,
  icon,
  slug,
  reverse = false,
}: ServiceDetailProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-10 py-16 border-t border-white/20`}
    >
      {/* METİN */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-1 backdrop-blur-lg bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg"
      >
        <div className="bg-white/30 rounded-full p-4 inline-block mb-6">
          {icon}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <ul className="space-y-3 mb-8 text-sm text-gray-600">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-start"
            >
              <ArrowRight className="h-4 w-4 text-black mt-1 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <Link href={`/organizasyon/${slug}`}>
          <AnimatedButton className="bg-black text-white hover:bg-gray-900">
            Detayları Gör
          </AnimatedButton>
        </Link>
      </motion.div>

      {/* GÖRSEL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: reverse ? -60 : 60 }}
        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex-1 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg bg-white/20 backdrop-blur-md"
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  )
}
