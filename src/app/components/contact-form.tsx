"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedButton } from "./animated-button"
import { Check, Loader2 } from "lucide-react"
import { submitContactForm } from "../actions/contact-form"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string> | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setErrors(null)

    const formData = new FormData(event.currentTarget)
    const result = await submitContactForm(formData)

    setIsSubmitting(false)
    result.success ? setSubmitted(true) : (setErrors(result.errors ?? null), setMessage(result.message ?? null))
  }

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  if (submitted) {
    return (
      <motion.div
        className="bg-white/60 backdrop-blur-xl p-8 rounded-xl shadow-xl text-center border border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Mesajınız Ulaştı 🎉</h3>
        <p className="text-gray-600 mb-6">Size en kısa sürede dönüş yapacağız. İlginiz için teşekkür ederiz.</p>
        <AnimatedButton onClick={() => setSubmitted(false)} className="bg-black text-white">
          Yeni Mesaj Gönder
        </AnimatedButton>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-8 bg-white/60 backdrop-blur-lg p-8 rounded-xl border border-white/30"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Ad Soyad & Email */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Ad Soyad <span className="text-red-500">*</span></label>
          <input
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black transition"
            placeholder="Örn. Meryem Çakal"
          />
          {errors?.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">E-posta <span className="text-red-500">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black transition"
            placeholder="ornek@eposta.com"
          />
          {errors?.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </motion.div>

      {/* Telefon & Konu */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Telefon (İsteğe Bağlı)</label>
          <input
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black transition"
            placeholder="+90 500 000 0000"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">Konu <span className="text-red-500">*</span></label>
          <input
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black transition"
            placeholder="Örn. Düğün Organizasyonu"
          />
          {errors?.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>
      </motion.div>

      {/* İlgi Alanı */}
      <motion.div variants={itemVariants}>
        <label className="text-sm font-medium mb-2 block">İlgilendiğiniz Hizmetler</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Söz & Nişan Organizasyonu",
            "Düğün Planlama",
            "Kına & Bekarlığa Veda",
            "After Party",
          ].map((service, idx) => (
            <label key={idx} className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                name="services"
                value={service}
                className="h-4 w-4 text-black mr-2 border-gray-300 rounded"
              />
              {service}
            </label>
          ))}
        </div>
      </motion.div>

      {/* Mesaj */}
      <motion.div className="space-y-2" variants={itemVariants}>
        <label htmlFor="message" className="text-sm font-medium">Mesajınız <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black transition"
          placeholder="Bize organizasyon detaylarınızı anlatabilirsiniz..."
        />
        {errors?.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </motion.div>

      {/* Uyarı + Gönder Butonu */}
      {message && (
        <motion.div variants={itemVariants}>
          <div className="bg-red-50 text-red-600 p-4 rounded-lg">{message}</div>
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <AnimatedButton
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white w-full sm:w-auto px-8 py-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            "Mesajı Gönder"
          )}
        </AnimatedButton>
      </motion.div>
    </motion.form>
  )
}
