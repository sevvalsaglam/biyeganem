"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const infoItems = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresimiz",
      content: (
        <>
          İstanbul / Kadıköy <br />
          Ziverbey Mahallesi, Biyeganem Sokak, No:10
        </>
      ),
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      content: (
        <a
          href="tel:+905550001234"
          className="hover:text-black transition"
        >
          +90 555 000 12 34
        </a>
      ),
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-posta",
      content: (
        <a
          href="mailto:iletisim@biyeganem.com"
          className="hover:text-black transition"
        >
          iletisim@biyeganem.com
        </a>
      ),
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Çalışma Saatleri",
      content: (
        <>
          Pazartesi - Cuma: 09:00 - 18:00 <br />
          Cumartesi: 10:00 - 14:00 <br />
          Pazar: Kapalı
        </>
      ),
    },
  ]

  return (
    <motion.div
      className="space-y-8 bg-white/60 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {infoItems.map((item, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="flex items-start space-x-4"
        >
          <div className="p-3 rounded-full bg-black text-white shadow-md">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
