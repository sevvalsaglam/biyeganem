import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Biyeganem | Özel Günlerin Mimarı",
  description: "Zarif organizasyonlar, unutulmaz anılar. Biyeganem ile özel günlerinize dokunuş katın.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Google Font (Opsiyonel Özel Yazı Tipi) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        
        {/* ✅ Sekme İkonu */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Alternatif PNG destekli favicon (isteğe bağlı) */}
        {/* <link rel="icon" href="/icon.png" type="image/png" /> */}
      </head>
      <body className={`${inter.className} scroll-smooth`}>
        <Header />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
