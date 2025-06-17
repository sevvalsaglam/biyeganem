"use client"

import { motion } from "framer-motion"
import { BookOpenCheck, Flower2, Quote } from "lucide-react"

const trends = [
  {
    quote: "2025 yılında gelinlerin tercihi: zarif dokunuşlarla sade şıklık!",
    source: "Modern Wedding Magazine",
    icon: <BookOpenCheck className="w-5 h-5 text-black" />,
  },
  {
    quote: "Anemon çiçeği, kırılganlığın zarafetle birleştiği duygusal bir sembol...",
    source: "Floral Artistry Quarterly",
    icon: <Flower2 className="w-5 h-5 text-black" />,
  },
  {
    quote: "Led yerine gerçek mum ışıkları daha çok tercih ediliyor. Doğallığın sıcaklığı geri dönüyor.",
    source: "Bridal Essence",
    icon: <Quote className="w-5 h-5 text-black" />,
  },
  {
    quote: "Gelin tag’leri artık daha sade, daha anlamlı.",
    source: "Wedding Journal",
    icon: <Quote className="w-5 h-5 text-black" />,
  },
  {
    quote: "Bu iki renk, doğa ile uyumun en estetik ifadesi.",
    source: "Palette for Love",
    icon: <Quote className="w-5 h-5 text-black" />,
  },
  {
    quote: "Poz değil, anı yakalayın.",
    source: "Lens & Love",
    icon: <Quote className="w-5 h-5 text-black" />,
  },
  {
    quote: "2025’in gelinlik modası: tülün şiiri.",
    source: "Bridal Vogue",
    icon: <Quote className="w-5 h-5 text-black" />,
  },
  {
    quote: "Canlı akustik müzik, düğün atmosferini kişiselleştirmenin en zarif yolu.",
    source: "Sound of Love",
    icon: <Quote className="w-5 h-5 text-black" />,
  },
  {
    quote: "Şeker hamurlu pastalar değil, meyveli & çiçekli naked cake’ler zirvede.",
    source: "The Dessert Bride",
    icon: <Quote className="w-5 h-5 text-black" />,
  },
  {
    quote: "İnci, asaletin evrensel dili.",
    source: "Timeless Bride",
    icon: <Quote className="w-5 h-5 text-black" />,
  },
]

export function TrendsSection() {
  return (
    <section
      id="trendler"
      className="py-24 scroll-mt-20 bg-gradient-to-b from-white via-[#f0efe6] to-white"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          2025 Organizasyon Trendleri
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {trends.map((item, index) => (
            <motion.blockquote
              key={index}
              className="relative group bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -top-4 -left-4 bg-white p-2 rounded-full shadow-md">
                {item.icon}
              </div>
              <p className="text-lg italic text-gray-700 mb-4 leading-relaxed">
                “{item.quote}”
              </p>
              <footer className="text-sm text-right text-gray-500">— {item.source}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
