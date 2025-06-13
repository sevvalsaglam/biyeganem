"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
      },
    }),
    hidden: { opacity: 0, y: 20 },
  }
  

  return (
    <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants} className="flex items-start space-x-4">
        <div className="bg-black text-white p-3 rounded-full">
          <MapPin className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Our Location</h3>
          <p className="text-gray-600">
            123 Tech Avenue, Suite 400
            <br />
            San Francisco, CA 94107
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-start space-x-4">
        <div className="bg-black text-white p-3 rounded-full">
          <Phone className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
          <p className="text-gray-600">
            <a href="tel:+918220123488" className="hover:text-black">
              +91 8220123488
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-start space-x-4">
        <div className="bg-black text-white p-3 rounded-full">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Email Address</h3>
          <p className="text-gray-600">
            <a href="mailto:support@ctrlplustech.com" className="hover:text-black">
              support@ctrlplustech.com
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-start space-x-4">
        <div className="bg-black text-white p-3 rounded-full">
          <Clock className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
          <p className="text-gray-600">
            Monday - Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday - Sunday: Closed
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
