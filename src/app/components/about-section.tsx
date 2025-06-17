"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Building2, Handshake, Users2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { RevealText } from "./reveal-text"

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const [counts, setCounts] = useState({ couples: 0, venues: 0, partners: 0 })

  useEffect(() => {
    if (inView) {
      const target = { couples: 500, venues: 100, partners: 20 }
      const duration = 1000
      const interval = 20
      const steps = duration / interval

      let current = { ...counts }
      let count = 0
      const timer = setInterval(() => {
        count++
        setCounts({
          couples: Math.floor((target.couples * count) / steps),
          venues: Math.floor((target.venues * count) / steps),
          partners: Math.floor((target.partners * count) / steps),
        })
        if (count >= steps) clearInterval(timer)
      }, interval)
    }
  }, [inView])

  return (
    <section id="hakkimizda" className="py-24 bg-white text-gray-900 scroll-mt-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
        >
          Biyeganem’in Hikayesi
        </motion.h2>

        <RevealText className="text-lg leading-relaxed mb-6">
          Biyeganem, genç ve vizyon sahibi bir girişimcinin tutkusu ile kuruldu. Kurucumuz <strong>Meryem Çakal</strong>, öğretmenlik mesleğini bırakıp hayalinin peşinden giderek 26 yaşında kendi organizasyon firmasını kurdu. Bugün, birçok başarılı etkinliğe imza atarak çiftlerin en özel anlarına dokunuyor.
        </RevealText>

        <RevealText className="text-lg leading-relaxed mb-6">
          Organizasyon sektöründe detayların ön planda olduğu bu yolculukta, Biyeganem sadece bir hizmet sağlayıcı değil, aynı zamanda bir yol arkadaşıdır. Her çiftin hayalini dinler, en özel günlerini birlikte planlar.
        </RevealText>

        <RevealText className="text-lg leading-relaxed mb-6">
          <span className="font-medium">Mahlas Wedding</span>, <span className="font-medium">Atölye Bloom</span> ve <span className="font-medium">Dekor&Detay</span> gibi alanında öncü firmalarla iş birliği içerisinde çalışıyoruz. Bu sayede, her detayda kalite ve estetik ön planda tutuluyor.
        </RevealText>

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-6 mt-12 text-center"
        >
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/30 backdrop-blur-lg shadow-lg border border-white/20">
            <div className="p-4 rounded-full bg-black text-white mb-4">
              <Users2 className="w-6 h-6" />
            </div>
            <p className="font-semibold text-xl">{counts.couples}+</p>
            <p className="text-sm text-gray-600">Mutlu çiftin hayaline ortak olundu.</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/30 backdrop-blur-lg shadow-lg border border-white/20">
            <div className="p-4 rounded-full bg-black text-white mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <p className="font-semibold text-xl">{counts.venues}+</p>
            <p className="text-sm text-gray-600">Etkinlik mekanı ile iş birlikleri sağlandı.</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/30 backdrop-blur-lg shadow-lg border border-white/20">
            <div className="p-4 rounded-full bg-black text-white mb-4">
              <Handshake className="w-6 h-6" />
            </div>
            <p className="font-semibold text-xl">{counts.partners}+</p>
            <p className="text-sm text-gray-600">Alanında uzman iş ortaklarımız mevcut.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
