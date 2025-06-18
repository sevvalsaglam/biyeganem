"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MobileMenu } from "./components/mobile-menu"
import { HeroSection } from "./components/hero-section"
import { ServicesShowcase } from "./components/services-showcase"
import { ServicesDetailSection } from "./components/services-detail-section"
import { TestimonialsSection } from "./components/testimonials-section"
import { PhotographerSection } from "./components/photographer-section"
import { VenuesShowcaseSection } from "./components/venues-section"
import { GiftsSection } from "./components/gifts-section"
import { SocialMediaSection } from "./components/social-media-section"

export default function Home() {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div className="bg-[#f0efe6]">
      {/* Mobile Menü varsayılan olarak kapalı, açık hali başka komponentten kontrol edilir */}
      <MobileMenu isOpen={false} onClose={() => {}} />

      <main>
        <HeroSection ref={heroRef} opacity={opacity} scale={scale} y={y} />

        {/* HİZMETLER */}
        <section id="hizmetler" className="py-24 bg-green-950 text-white scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-bold">Neler Yapıyoruz?</h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl">
                Söz, nişan, düğün, after party ve kına geceleri için tam kapsamlı planlama ve uygulama hizmeti sunuyoruz.
              </p>
            </div>
            <ServicesShowcase />
          </div>
        </section>

        {/* DETAYLI ORGANİZASYON */}
        <section id="organizasyonlar" className="py-24 bg-white scroll-mt-20">
          <div className=" mx-auto ">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Sizin İçin Ne Yapabiliriz?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Hayalinizdeki günü size özel tasarlıyoruz. Detaylar için aşağıdan keşfetmeye başlayın.
              </p>
            </div>
            <ServicesDetailSection />
          </div>
        </section>

        {/* DİĞER SEKTÖRLER */}
        <SocialMediaSection />
        <TestimonialsSection />
        <PhotographerSection />
        <VenuesShowcaseSection />
        <GiftsSection />
      </main>
    </div>
  )
}
