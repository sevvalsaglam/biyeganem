"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const venues = [
  { name: "Boğaz Garden", image: "/images/venue1.jpg" },
  { name: "Villa Beyaz", image: "/images/venue2.jpg" },
  { name: "Flora Davet", image: "/images/venue3.jpg" },
  { name: "Kır Bahçesi", image: "/images/venue4.jpg" },
  { name: "Deniz Kır Evi", image: "/images/venue5.jpg" },
  { name: "Yakamoz Etkinlik", image: "/images/venue6.jpg" },
  { name: "Altın Salon", image: "/images/venue7.jpg" },
  { name: "Mavi Düş Düğün", image: "/images/venue8.jpg" },
]

export function VenuesShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="mekanlar" className="py-24 bg-[#f0efe6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Anlaşmalı Mekanlarımız</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {venues.map((venue, index) => {
            const isActive = activeIndex === index
            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.4 }}
                className={`relative rounded-xl overflow-hidden cursor-pointer bg-white/30 backdrop-blur-lg border border-white/10 ${
                  isActive ? "col-span-2 row-span-2 w-full h-[400px] z-10" : "h-40"
                }`}
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              >
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 w-full text-center bg-black/40 text-white py-2 font-semibold">
                  {venue.name}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
