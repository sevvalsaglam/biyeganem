"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface Props {
  image: {
    src: string
    alt: string
    description: string
    details: string[]
  }
}

export function GalleryImageView({ image }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        layoutId="main-image"
        className="w-full h-[400px] relative rounded-2xl overflow-hidden bg-white/30 backdrop-blur-md shadow-xl"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-all duration-300"
        />
      </motion.div>

      <div className="bg-white/40 backdrop-blur-xl rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">{image.alt}</h2>
        <p className="text-gray-700 mb-4">{image.description}</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
          {image.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
