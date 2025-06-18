"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMobileMenuOpen)
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo variant="header" size="md" showSlogan />

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center space-x-4">
          <DropdownMenu open={isDiscoverOpen} onOpenChange={setIsDiscoverOpen}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-1 text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
                <span>Organizasyonlar</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isDiscoverOpen && "rotate-180"
                  )}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#f0efe6] border-gray-200">
              {["soz", "nisan", "dugun", "after-party"].map((slug) => (
                <DropdownMenuItem key={slug}>
                  <Link href={`/organizasyon/${slug}`} className="w-full capitalize">
                    {slug.replace("-", " ")}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/hakkimizda"
            className="px-4 py-2 text-sm font-medium hover:bg-black hover:text-white rounded-full"
          >
            Hakkımızda
          </Link>
          <Link
            href="/trendler"
            className="px-4 py-2 text-sm font-medium hover:bg-black hover:text-white rounded-full"
          >
            Trendler
          </Link>
          <Link
            href="/galeri"
            className="px-4 py-2 text-sm font-medium hover:bg-black hover:text-white rounded-full"
          >
            Galeri
          </Link>
          <Link
            href="/iletisim"
            className="px-4 py-2 text-sm font-medium hover:bg-black hover:text-white rounded-full"
          >
            İletişim
          </Link>

          {/* BiKids Butonu */}
          <Link
            href="/bikidsevent"
            className=" px-4 py-2 text-3xl text-green-900 font-logo-script  hover:bg-green-900 hover:text-white transition-colors  border-black rounded-full"
          >
            BiKids
          </Link>
        </nav>

        {/* Mobil Menü Butonu */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Menüyü Aç"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}
