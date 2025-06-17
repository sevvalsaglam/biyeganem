"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const gifts = [
  { name: "Nikah Şekeri", image: "https://via.placeholder.com/300x200" },
  { name: "Kokulu Mum", image: "https://via.placeholder.com/300x200" },
  { name: "Cam Kavanoz Süs", image: "https://via.placeholder.com/300x200" },
  { name: "Mini Sabunlar", image: "https://via.placeholder.com/300x200" },
  { name: "Lavanta Kesesi", image: "https://via.placeholder.com/300x200" },
  { name: "Pleksi Etiketli Hediyelik", image: "https://via.placeholder.com/300x200" },
]

export function GiftsSection() {
  return (
    <section className="py-24 bg-[#f0efe6]" id="hediyelikler">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Hediyelikler</h2>
          <p className="text-gray-600 text-lg">
            Misafirlerinize küçük ama anlamlı sürprizlerle unutulmaz bir gün yaşatın.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg bg-white/30 border border-white/10 p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={gift.image}
                alt={gift.name}
                width={300}
                height={200}
                className="object-cover rounded-md mb-4 w-full h-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">{gift.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
