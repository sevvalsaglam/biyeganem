"use client"

import { useState, useTransition } from "react"
import { motion } from "framer-motion"
import { Check, Loader2 } from "lucide-react"
import { submitContactForm } from "../actions/contact-form"
import { AnimatedButton } from "./animated-button"

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [submitted, setSubmitted] = useState(false)
  const [state, setState] = useState<any>(null)

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm(formData)
      setState(result)
      if (result.success) setSubmitted(true)
    })
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay },
    }),
    hidden: { opacity: 0, y: 20 },
  }

  if (submitted) {
    return (
      <motion.div
        className="bg-white p-8 rounded-xl shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
        <AnimatedButton onClick={() => setSubmitted(false)} className="bg-black text-white">
          Send Another Message
        </AnimatedButton>
      </motion.div>
    )
  }

  return (
    <motion.form action={handleSubmit} className="space-y-6" variants={formVariants} initial="hidden" animate="visible">
      {/* input alanları aynı kalabilir */}
      {/* ... yukarıda verdiğin inputlar burada */}
      <motion.div variants={itemVariants}>
        {state && !state.success && state.message && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">{state.message}</div>
        )}

        <AnimatedButton
          type="submit"
          className="bg-black text-white w-full sm:w-auto px-8 py-3"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </AnimatedButton>
      </motion.div>
    </motion.form>
  )
}
