"use client"

import { motion } from "framer-motion"
import { Building2, Handshake, Users2 } from "lucide-react"
import { RevealText } from "./reveal-text"

export function AboutSection() {
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
          Biyeganem, genç bir girişimcinin tutkusu ve emeğiyle doğdu. Kurucumuz <strong>Meryem Çakal</strong>, Yıldız Teknik Üniversitesi mezunu bir öğretmendi. Öğrencilik yıllarında organizasyonlara olan ilgisi, onu insanlarla daha fazla temas kurmaya ve yaratıcı alanlarda var olmaya yöneltti.
        </RevealText>

        <RevealText className="text-lg leading-relaxed mb-6">
          Öğretmenliği bırakıp hayalinin peşinden giden Meryem Hanım, 26 yaşında kendi organizasyon firmasını kurdu. Bugün, onlarca başarılı etkinlik ve yüzlerce mutlu çiftin arkasında onun liderliği ve vizyonu yer alıyor.
        </RevealText>

        <RevealText className="text-lg leading-relaxed mb-6">
          Her detayın önem kazandığı bu sektörde, Biyeganem; sadece bir organizasyon şirketi değil, aynı zamanda anı tasarlayan bir dost gibi çalışır. Her çiftin hikayesini dinler, hayallerini birlikte planlar.
        </RevealText>

        <RevealText className="text-lg leading-relaxed mb-6">
          Biyeganem, yalnızca kendi ekibiyle değil; <span className="font-medium">Mahlas Wedding</span>, <span className="font-medium">Atölye Bloom</span> ve <span className="font-medium">Dekor&Detay</span> gibi sektördeki lider partner firmalarla ortak çalışmalar yürütmektedir.
        </RevealText>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-black text-white">
              <Users2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg">500+ Mutlu Çift</p>
              <p className="text-sm text-gray-500">Her biriyle ayrı ayrı ilgilenildi.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-black text-white">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg">100+ Etkinlik Mekanı</p>
              <p className="text-sm text-gray-500">İstanbul, İzmir ve Bursa dahil.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-black text-white">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg">20+ İş Ortağı</p>
              <p className="text-sm text-gray-500">Fotoğrafçılar, dekoratörler ve catering firmalarıyla çözüm ortaklığı.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
