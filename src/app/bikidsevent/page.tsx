"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Category {
  id: number
  slug: string
  title: string
  image: string
}

export default function BiKidsEventPage() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    // Geçici veriler (sonradan API ile değiştirilecek)
    setCategories([
      {
        id: 1,
        slug: "dogum-gunu",
        title: "Doğum Günü",
        image: "/bikids/birthday.jpg",
      },
      {
        id: 2,
        slug: "baby-shower",
        title: "Baby Shower",
        image: "/bikids/babyshower.jpg",
      },
      {
        id: 3,
        slug: "hastane-girisi",
        title: "Hastane Girişi",
        image: "/bikids/hospital.jpg",
      },
      {
        id: 4,
        slug: "cinsiyet-partisi",
        title: "Cinsiyet Partisi",
        image: "/bikids/genderreveal.jpg",
      },
    ])
  }, [])

  return (
    <section className="min-h-screen bg-[#f0efe6] py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Başlık */}
        <motion.h1
          className="text-5xl md:text-6xl font-logo-script text-pink-600 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: '"Allura", cursive' }}
        >
          BiKids
        </motion.h1>

        {/* Tanıtım Paragrafı */}
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          BiKids, çocuklara özel etkinliklerde hayal gücünü gerçeğe dönüştüren tasarımlar sunar. Renkli balonlar, temalı dekorlar ve unutulmaz anılar burada başlar.
        </motion.p>

        {/* Kategoriler */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white/50 backdrop-blur-md border border-white/30"
            >
              <Link href={`/bikidsevent/${cat.slug}`} className="block">
                <div className="relative w-full h-60">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-lg font-semibold text-gray-800 text-center">
                  {cat.title}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
