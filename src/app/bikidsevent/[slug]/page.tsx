"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"

interface CategoryDetail {
  title: string
  description: string
  images: string[]
}

const mockData: Record<string, CategoryDetail> = {
  "dogum-gunu": {
    title: "Doğum Günü Kutlaması",
    description:
      "Renkli balonlar, eğlenceli temalar ve mutlu yüzler... Çocuklara özel doğum günü partileriyle unutulmaz anlar yaratıyoruz.",
    images: [
      "/bikids/birthday1.jpg",
      "/bikids/birthday2.jpg",
      "/bikids/birthday3.jpg",
    ],
  },
  "baby-shower": {
    title: "Baby Shower Etkinliği",
    description:
      "Yeni bir hayata hazırlanırken sevdiklerinizle eğlenceli bir kutlama düzenlemek ister misiniz? BiKids yanınızda.",
    images: [
      "/bikids/baby1.jpg",
      "/bikids/baby2.jpg",
      "/bikids/baby3.jpg",
    ],
  },
  "hastane-girisi": {
    title: "Hastane Girişi Karşılama",
    description:
      "Yeni doğan bebeğinizi hastane odasında sıcak ve özenli bir dekorasyonla karşılayın.",
    images: [
      "/bikids/hospital1.jpg",
      "/bikids/hospital2.jpg",
    ],
  },
  "cinsiyet-partisi": {
    title: "Cinsiyet Partisi",
    description:
      "Mavi mi pembe mi? Cinsiyet partisi organizasyonlarımızla heyecan dolu anlar yaşatıyoruz.",
    images: [
      "/bikids/gender1.jpg",
      "/bikids/gender2.jpg",
    ],
  },
}

export default function BiKidsCategoryPage() {
  const { slug } = useParams()
  const data = mockData[slug as string]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Etkinlik bilgisi bulunamadı.
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-[#f0efe6] py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          {data.title}
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {data.description}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {data.images.map((img, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white/50 backdrop-blur-md border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Image
                src={img}
                alt={`Etkinlik Görseli ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
