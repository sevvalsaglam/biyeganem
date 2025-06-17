"use client"

import { Gem, Heart, PartyPopper, Sparkles } from "lucide-react"
import { ServiceDetail } from "./service-detail"

export function ServicesDetailSection() {
  const services = [
    {
      id: 1,
      slug: "soz",
      title: "Söz & Nişan Organizasyonu",
      description:
        "Söz ve nişan törenlerinizi unutulmaz kılmak için özel konseptler ve detaylı planlama sunuyoruz. Ailelerin bir araya geldiği bu özel günde, her ayrıntı bizden sorulur.",
      features: [
        "Özel masa ve arka plan süslemeleri",
        "Canlı çiçek aranjmanları ve aksesuarlar",
        "Işıklandırma ve fotoğraf alanı",
        "Söz tepsisi, yüzük yastığı ve dekoratif detaylar",
      ],
      image: "/images/service-soz-nisan.jpg",
      icon: <Gem className="h-6 w-6" />,
    },
    {
      id: 2,
      slug: "dugun",
      title: "Düğün Planlama",
      description:
        "Hayalinizdeki düğünü baştan sona tasarlıyoruz. Konsept belirleme, mekan süslemesi, teknik altyapı ve tüm detayları profesyonelce yönetiyoruz.",
      features: [
        "Kapsamlı düğün planlama ve koordinasyon",
        "Masa-sandalye süsleme ve sahne kurulumu",
        "DJ/bando/ses-ışık ekipleriyle tam hizmet",
        "Gelin-damat karşılama alanı konsepti",
      ],
      image: "/images/service-dugun.jpg",
      icon: <Heart className="h-6 w-6" />,
      reverse: true,
    },
    {
      id: 3,
      slug: "after-party",
      title: "After Party Organizasyonu",
      description:
        "Düğün sonrası eğlence için konseptli after party organizasyonları. DJ performansı, ışık ve ses sistemleri, kokteyl sunumlarıyla enerjik geceler sunuyoruz.",
      features: [
        "DJ kabini ve canlı performanslar",
        "Dans alanı ışıklandırması",
        "Kokteyl setup ve bar hizmetleri",
        "After party temalı dekor ve aksesuarlar",
      ],
      image: "/images/service-after-party.jpg",
      icon: <PartyPopper className="h-6 w-6" />,
    },
    {
      id: 4,
      slug: "nisan",
      title: "Kına Gecesi & Özel Günler",
      description:
        "Kültürel mirasımız olan kına gecelerinin yanı sıra baby shower, doğum günü gibi etkinlikler için de konsept organizasyonlar sunuyoruz.",
      features: [
        "Kına tahtı ve nedime kostümleri",
        "Davul-zurna, oryantal gibi eğlenceler",
        "Geleneksel kına malzemeleri ve sunumlar",
        "Doğum günü/baby shower masa konseptleri",
      ],
      image: "/images/service-kina.jpg",
      icon: <Sparkles className="h-6 w-6" />,
      reverse: true,
    },
  ]

  return (
    <section className="py-16 bg-[#f0efe6]">
      <div className="container mx-auto px-4 space-y-16">
        {services.map((service) => (
          <ServiceDetail
            key={service.id}
            {...service}
          />
        ))}
      </div>
    </section>
  )
}
