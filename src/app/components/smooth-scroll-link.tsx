"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import type { ReactNode, MouseEvent } from "react"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function SmoothScrollLink({
  href,
  children,
  className,
  onClick,
}: SmoothScrollLinkProps) {
  const router = useRouter()
  const pathname = usePathname()

  const isInternalAnchor = href.startsWith("#")
  const targetId = href.replace("#", "")

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (!isInternalAnchor) return router.push(href)

    if (pathname !== "/") {
      localStorage.setItem("scrollTarget", targetId)
      router.push("/")
    } else {
      const el = document.getElementById(targetId)
      if (el) {
        const yOffset = -80
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
        onClick?.()
      }
    }
  }

  useEffect(() => {
    const scrollTarget = localStorage.getItem("scrollTarget")
    if (scrollTarget && pathname === "/") {
      const el = document.getElementById(scrollTarget)
      if (el) {
        const yOffset = -80
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" })
        }, 300)
      }
      localStorage.removeItem("scrollTarget")
    }
  }, [pathname])

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
