
import type { Metadata } from "next"
import { ContactForm } from "../components/contact-form"
import { ContactInfo } from "../components/contact-info"
import { RevealText } from "../components/reveal-text"

export const metadata: Metadata = {
  title: "İletişim | Biyeganem Organizasyon",
  description: "Bize ulaşın. Soru, teklif veya destek için ekibimizle iletişime geçin.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f0efe6]">
      {/* Header boşluğu */}
      <div className="h-24" />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <RevealText delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Organizasyonunuzla ilgili her türlü sorunuz için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
              </p>
            </RevealText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-xl">
                <ContactForm />
              </div>
            </div>
            <div>
              <div className="bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-xl h-full">
                <h2 className="text-2xl font-bold mb-6">İletişim Bilgilerimiz</h2>
                <ContactInfo />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Bizi Nerede Bulabilirsiniz?</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0927348951344!2d-122.39663492392031!3d37.78289791144097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0x9cdf304c4c6c1ba!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1str!2str!4v1653308145357!5m2!1str!2str"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Biyeganem organizasyon ofis konumu"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer boşluğu */}
      <div className="h-16" />
    </div>
  )
}