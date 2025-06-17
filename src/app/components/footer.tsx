"use client"

import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Logo variant="footer" size="md" showSlogan />
        </div>
        <div>
          <h3 className="font-semibold mb-4">Hızlı Erişim</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#hizmetler" className="hover:text-white">Hizmetler</a></li>
            <li><a href="#organizasyonlar" className="hover:text-white">Organizasyonlar</a></li>
            <li><a href="#mekanlar" className="hover:text-white">Mekanlar</a></li>
            <li><a href="#galeri" className="hover:text-white">Galeri</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">İletişim</h3>
          <p className="text-gray-400 text-sm">info@biyeganem.com</p>
          <p className="text-gray-400 text-sm">+90 555 555 55 55</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Sosyal Medya</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white text-gray-400">Instagram</a>
            <a href="#" className="hover:text-white text-gray-400">TikTok</a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Biyeganem Organizasyon. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}
