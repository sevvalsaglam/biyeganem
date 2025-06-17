import { OrganizationGallery } from "@/app/components/organization-gallery"

const data = {
  soz: {
    title: "Söz Organizasyonu",
    description: "Sade ve şık söz törenleri için romantik dekorasyonlar, pastel renkler ve özel detaylar.",
    images: [
      {
        src: "/images/soz1.jpg",
        alt: "Söz Masası",
        description: "Pastel renklerde tasarlanmış masa düzeni.",
        details: ["Güller", "Ahşap masa", "Altın detaylar", "Minimalist arka plan"],
      },
      {
        src: "/images/soz2.jpg",
        alt: "Yüzük Töreni",
        description: "Yüzüklerin takıldığı özel an.",
        details: ["Cam tepsi", "Işıklandırma", "Aile sandalyeleri"],
      },
    ],
  },
  nisan: {
    title: "Nişan Organizasyonu",
    description: "Gösterişli nişan dekorları, ışık şovları ve özgün aksesuarlarla unutulmaz anlar.",
    images: [
      {
        src: "/images/nisan1.jpg",
        alt: "Nişan Tagı",
        description: "Çiçekli nişan tagı arka planı.",
        details: ["Orkide", "Led ışıklar", "Gümüş detaylar"],
      },
    ],
  },
  dugun: {
    title: "Düğün Organizasyonu",
    description: "Hayalinizdeki düğün için kusursuz konseptler ve estetik detaylar.",
    images: [
      {
        src: "/images/dugun1.jpg",
        alt: "Açık Hava Düğünü",
        description: "Gün batımında yapılan açık hava düğünü.",
        details: ["Beyaz gül", "Rustik sandalye", "Masa örtüsü"],
      },
    ],
  },
  "after-party": {
    title: "After Party",
    description: "Enerjisi yüksek after party’ler için DJ kabini, ışık gösterileri ve dans alanı.",
    images: [
      {
        src: "/images/after1.jpg",
        alt: "DJ Performansı",
        description: "DJ kabini ve lazer şovlarıyla unutulmaz bir gece.",
        details: ["DJ deck", "LED sahne", "Sis makinesi"],
      },
    ],
  },
}

export default function OrganizationPage({ params }: { params: { slug: string } }) {
  const content = data[params.slug as keyof typeof data]

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Aradığınız organizasyon bulunamadı.
      </div>
    )
  }

  return (
    <OrganizationGallery
      title={content.title}
      description={content.description}
      images={content.images}
    />
  )
}
