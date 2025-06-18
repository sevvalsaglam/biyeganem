"use client"

import Link from "next/link"

interface LogoProps {
  variant?: "header" | "footer"
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
  showSlogan?: boolean
}

export function Logo({
  variant = "header",
  className = "",
  size = "md",
  showText = true,
  showSlogan = false,
}: LogoProps) {
  const fontSize = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-4xl md:text-5xl",
  }

  return (
    <Link href="/" className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center">
      <span className="font-logo-script text-2xl md:text-4xl text-emerald-800 text-shadow-2xl ">
      Biyegânem
</span>


      </div>

      {showSlogan && (
        <span className="text-xs text-gray-600 mt-0 italic">
          flowers & event
        </span>
      )}
    </Link>
  )
}
