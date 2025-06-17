"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Gem, Heart, PartyPopper, Sparkles } from "lucide-react"
import { AnimatedButton } from "./animated-button"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  delay: number
  slug: string
}

export function ServicesShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services: Service[] = [
    {
      id: 1,
      title: "Söz Organizasyonu",
      description:
        "Romantik söz organizasyonlarıyla çiftlerin en özel anlarını unutulmaz hale getiriyoruz. Masa süslemeleri, arka plan dekorları ve konsept tasarımlarla yanınızdayız.",
      icon: <Gem className="h-10 w-10 text-white" />,
      delay: 0.1,
      slug: "soz",
    },
    {
      id: 2,
      title: "Düğün Planlama",
      description:
        "Hayalinizdeki düğünü gerçeğe dönüştürüyoruz. Mekan seçimi, dekorasyon, ses-ışık sistemleri ve profesyonel organizasyon ekibimizle hizmetinizdeyiz.",
      icon: <Heart className="h-10 w-10 text-white" />,
      delay: 0.3,
      slug: "dugun",
    },
    {
      id: 3,
      title: "After Party Hizmeti",
      description:
        "After party organizasyonları, DJ performansları, ışık şovları ve dans alanlarıyla unutulmaz bir gece yaşayın.",
      icon: <PartyPopper className="h-10 w-10 text-white" />,
      delay: 0.5,
      slug: "after-party",
    },
    {
      id: 4,
      title: "Nişan Organizasyonu",
      description:
        "Kültürel ve geleneksel nişan organizasyonları için profesyonel destek sağlıyoruz.",
      icon: <Sparkles className="h-10 w-10 text-white" />,
      delay: 0.7,
      slug: "nisan",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
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
    <section ref={ref} className="py-20 bg-black text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto px-6"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            custom={service.delay}
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-6 inline-block p-4 rounded-full bg-white/10">{service.icon}</div>
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
