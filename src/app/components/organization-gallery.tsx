"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ImageData {
  src: string
  alt: string
  description: string
  details: string[]
}

interface Props {
  title: string
  description: string
  images: ImageData[]
}

export function OrganizationGallery({ title, description, images }: Props) {
  const [activeImage, setActiveImage] = useState<ImageData>(images[0])

  return (
    <section className="min-h-screen px-6 md:px-20 py-20 bg-[#f0efe6]">
      {/* Başlık ve Açıklama */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{title}</h1>
        <p className="text-lg text-gray-600 mt-4">{description}</p>
      </motion.div>

      {/* Büyük Fotoğraf ve Açıklama */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          key={activeImage.src}
          layoutId="main-image"
          className="w-full h-[400px] relative rounded-2xl overflow-hidden bg-white/30 backdrop-blur-md shadow-xl transition-all duration-300"
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          className="bg-white/60 backdrop-blur-xl rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">{activeImage.alt}</h2>
          <p className="text-gray-700 mb-4 text-sm">{activeImage.description}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            {activeImage.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Küçük Fotoğraf Kutuları */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">
        {images.map((img) => (
          <motion.div
            key={img.src}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveImage(img)}
            className={`cursor-pointer rounded-xl overflow-hidden transition border-2 ${
              img.src === activeImage.src ? "border-black" : "border-transparent"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={200}
              className="object-cover w-full h-32"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
