"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    name: "Ayşe & Mehmet",
    text: "Düğünümüz tam hayal ettiğimiz gibiydi. Biyeganem ekibi her detayla özenle ilgilendi.",
  },
  {
    name: "Zeynep",
    text: "Kına gecem mükemmeldi. Her şey kusursuzdu. Teşekkürler Biyeganem!",
  },
  {
    name: "Elif & Murat",
    text: "Söz organizasyonumuzda tüm misafirlerimiz büyülendi. Gerçekten profesyonel bir ekip.",
  },  {
    name: "Ayşe & Mehmet",
    text: "Düğünümüz tam hayal ettiğimiz gibiydi. Biyeganem ekibi her detayla özenle ilgilendi.",
  },
  {
    name: "Zeynep",
    text: "Kına gecem mükemmeldi. Her şey kusursuzdu. Teşekkürler Biyeganem!",
  },
  {
    name: "Elif & Murat",
    text: "Söz organizasyonumuzda tüm misafirlerimiz büyülendi. Gerçekten profesyonel bir ekip.",
  },
]

export function TestimonialsSection() {
    const containerRef = useRef(null)
  
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Müşteri Yorumları</h2>
  
          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] max-w-[320px] snap-center bg-[#f0efe6] border border-gray-200 shadow-md p-6 rounded-xl flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="text-gray-700 mb-4">“{t.text}”</p>
                <div className="text-sm text-gray-500 text-right">— {t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }