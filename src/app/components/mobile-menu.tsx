"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { SmoothScrollLink } from "./smooth-scroll-link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const menuItems = [
    { label: "Organizasyonlar", href: "/organizasyon/dugun" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Trendler", href: "/trendler" },
    { label: "Galeri", href: "/galeri" },
    { label: "İletişim", href: "/iletisim" },
    { label: "BiKids", href: "/bikidsevent" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" inset-0 z-50 bg-white/50 text-black flex flex-col justify-between px-6 py-8"
        >
          {/* Kapat Butonu */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-black p-2 rounded-full hover:bg-black/10 transition"
              aria-label="Menüyü Kapat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menü Linkleri */}
          <nav className="flex-1 flex flex-col justify-center items-center space-y-6 text-xl font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="hover:underline transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          
        </motion.div>
      )}
    </AnimatePresence>
  )
}
