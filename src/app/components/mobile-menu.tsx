"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { SmoothScrollLink } from "./smooth-scroll-link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [orgOpen, setOrgOpen] = useState(false)

  const orgRoutes = [
    { name: "Söz", href: "/organizasyon/soz" },
    { name: "Nişan", href: "/organizasyon/nisan" },
    { name: "Düğün", href: "/organizasyon/dugun" },
    { name: "After Party", href: "/organizasyon/after-party" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            closed: { opacity: 0, x: "100%" },
            open: { opacity: 1, x: 0 },
          }}
          transition={{ type: "spring", damping: 20, stiffness: 250 }}
          className="fixed inset-0 z-50 bg-white/30 backdrop-blur-lg flex flex-col overflow-y-auto"
        >
          {/* Logo + Close */}
          <div className="flex items-center justify-between p-6 border-b border-white/20 bg-white/10">
            <Logo variant="header" size="md" />
            <button onClick={onClose} className="text-black p-2 rounded-full hover:bg-black/10 transition" aria-label="Kapat">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col p-6 space-y-6 text-black font-medium">
            {/* Dropdown */}
            <div className="pb-4 border-b border-white/20">
              <button
                onClick={() => setOrgOpen(!orgOpen)}
                className="flex items-center justify-between w-full text-xl p-3 rounded-xl bg-white/20 hover:bg-white/30 transition"
              >
                <span>Organizasyonlar</span>
                <ChevronDown className={cn("h-5 w-5 transition-transform", orgOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {orgOpen && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      closed: { height: 0, opacity: 0 },
                      open: { height: "auto", opacity: 1 },
                    }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 space-y-2 pl-4 overflow-hidden"
                  >
                    {orgRoutes.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className="block text-lg p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Static Pages */}
            {[
              { label: "Hakkımızda", href: "/hakkimizda" },
              { label: "Trendler", href: "/trendler" },
              { label: "Galeri", href: "/galeri" },
              { label: "İletişim", href: "/iletisim" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block text-xl p-3 rounded-xl bg-white/20 hover:bg-white/30 transition border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-auto p-6 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {isHome ? (
                <SmoothScrollLink
                  href="#iletisim"
                  onClick={onClose}
                  className="bg-black text-white py-3 px-6 rounded-full text-center font-medium hover:bg-black/90 transition"
                >
                  İletişime Geç
                </SmoothScrollLink>
              ) : (
                <Link
                  href="/#iletisim"
                  onClick={onClose}
                  className="bg-black text-white py-3 px-6 rounded-full text-center font-medium hover:bg-black/90 transition"
                >
                  İletişime Geç
                </Link>
              )}
              <Link
                href="/contact"
                className="border border-black/70 py-3 px-6 rounded-full text-center font-medium hover:bg-black/10 transition"
                onClick={onClose}
              >
                Bizimle Çalışın
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
