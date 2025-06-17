import { Gem, Sparkles, Heart, PartyPopper } from "lucide-react"

export function getIcon(name: string, size: "sm" | "lg" = "lg") {
  const sizeClass = size === "sm" ? "h-6 w-6" : "h-10 w-10 text-white"

  const icons = {
    Gem: <Gem className={sizeClass} />,
    Sparkles: <Sparkles className={sizeClass} />,
    Heart: <Heart className={sizeClass} />,
    PartyPopper: <PartyPopper className={sizeClass} />,
  }

  return icons[name as keyof typeof icons] || null
}
