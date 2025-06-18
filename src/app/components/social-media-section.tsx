"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export function SocialMediaSection() {
  return (
    <section className="w-full bg-[#f0efe6] py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* SOL – Büyük Görsel */}
        <motion.div
          className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-xl border border-white/30"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/media/instagram-showcase.jpg"
            alt="Instagram Paylaşımları"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* SAĞ – Başlık, paragraf ve takip butonu */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sosyal Medyada Biz
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-md">
            Etkinliklerimizin sahne arkasına, yaratıcı anlara ve ilham verici detaylara göz atmak için bizi Instagram'da takip edin.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <Instagram className="w-14 h-14 text-green-900" />

            <Link
              href="https://instagram.com/biyeganem"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-900 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-medium transition"
            >
              Takip Et
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
