"use client"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [discoverOpen, setDiscoverOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  }

  const dropdownVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed inset-0 z-50 bg-[#f0efe6] flex flex-col overflow-y-auto"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Logo variant="header" size="md" />
            <button
              onClick={onClose}
              className="text-black p-2 rounded-full hover:bg-black/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-6">
            {/* Discover Dropdown */}
            <div className="border-b border-gray-200 pb-6">
              <button
                onClick={() => setDiscoverOpen(!discoverOpen)}
                className="flex items-center justify-between w-full text-xl font-medium p-2 rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                <span>Discover</span>
                <ChevronDown className={cn("h-5 w-5 transition-transform", discoverOpen ? "rotate-180" : "")} />
              </button>

              <AnimatePresence>
                {discoverOpen && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                    className="mt-4 pl-4 space-y-4 overflow-hidden"
                  >
                    <Link
                      href="#"
                      className="block text-lg p-2 rounded-lg hover:bg-black hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      Web Design
                    </Link>
                    <Link
                      href="#"
                      className="block text-lg p-2 rounded-lg hover:bg-black hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      App Development
                    </Link>
                    <Link
                      href="#"
                      className="block text-lg p-2 rounded-lg hover:bg-black hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      E-commerce
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Our Story Link */}
            <Link
              href="#"
              className="block text-xl font-medium p-2 rounded-lg hover:bg-black hover:text-white transition-colors border-b border-gray-200 pb-6"
              onClick={onClose}
            >
              Our Story
            </Link>

            {/* Trends Link */}
            <Link
              href="#"
              className="block text-xl font-medium p-2 rounded-lg hover:bg-black hover:text-white transition-colors border-b border-gray-200 pb-6"
              onClick={onClose}
            >
              Trends
            </Link>

            {/* Support Dropdown */}
            <div className="border-b border-gray-200 pb-6">
              <button
                onClick={() => setSupportOpen(!supportOpen)}
                className="flex items-center justify-between w-full text-xl font-medium p-2 rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                <span>Support</span>
                <ChevronDown className={cn("h-5 w-5 transition-transform", supportOpen ? "rotate-180" : "")} />
              </button>

              <AnimatePresence>
                {supportOpen && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                    className="mt-4 pl-4 space-y-4 overflow-hidden"
                  >
                    <Link
                      href="#"
                      className="block text-lg p-2 rounded-lg hover:bg-black hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      Help Center
                    </Link>
                    <Link
                      href="#"
                      className="block text-lg p-2 rounded-lg hover:bg-black hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      FAQ
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="block text-xl font-medium p-2 rounded-lg hover:bg-black hover:text-white transition-colors border-b border-gray-200 pb-6"
              onClick={onClose}
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-auto p-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/contact"
                className="bg-black text-white py-3 px-6 rounded-full text-center font-medium hover:bg-black/90 transition-colors"
                onClick={onClose}
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="border border-black py-3 px-6 rounded-full text-center font-medium hover:bg-black/5 transition-colors"
                onClick={onClose}
              >
                Join us
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
