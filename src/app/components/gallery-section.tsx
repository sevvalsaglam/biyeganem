"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  { src: "/images/gallery/galeri1.jpg", alt: "Nişan Masası" },
  { src: "/images/gallery/galeri2.jpg", alt: "Söz Organizasyonu" },
  { src: "/images/gallery/galeri3.jpg", alt: "Kına Gecesi" },
  { src: "/images/gallery/galeri4.jpg", alt: "After Party" },
  { src: "/images/gallery/galeri5.jpg", alt: "Düğün Detayları" },
  { src: "/images/gallery/galeri6.jpg", alt: "Mekan Süslemesi" },
]

export function GallerySection() {
  return (
    <section className="py-24 bg-[#f0efe6]" id="galeri">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Organizasyon Galerisi
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm px-3 py-2">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
