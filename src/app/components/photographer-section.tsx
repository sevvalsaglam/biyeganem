"use client"

import { useRef } from "react"
import HTMLFlipBook from "react-pageflip"
import { Camera } from "lucide-react"

const albumPages = [
  {
    left: "/photos/wedding1.jpg",
    right: ["/photos/wedding2.jpg", "/photos/wedding3.jpg"],
  },
  {
    left: "/photos/wedding4.jpg",
    right: ["/photos/wedding5.jpg", "/photos/wedding6.jpg"],
  },
  {
    left: "/photos/wedding7.jpg",
    right: ["/photos/wedding8.jpg", "/photos/wedding9.jpg"],
  },
]

export function PhotographerSection() {
  const bookRef = useRef<any>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0efe6]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Özel Günlerinizi Ölümsüzleştirin
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
          Anların içindeki duyguyu yakalayan bir göz… Profesyonel çekimlerle her anınızı ölümsüzleştiriyoruz.
        </p>

        <div className="flex justify-center items-center gap-2 text-gray-600 font-semibold mb-10">
          <Camera className="w-5 h-5" />
          <span>
            Fotoğrafçı: <span className="text-black">Elif Yılmaz</span>
          </span>
        </div>

        {/* Albüm */}
        <div className="flex justify-center">
          <HTMLFlipBook
            width={800}
            height={500}
            size="stretch"
            minWidth={320}
            maxWidth={1000}
            minHeight={400}
            maxHeight={700}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            className="shadow-xl rounded overflow-hidden"
            ref={bookRef}
          >
            {albumPages.map((page, i) => (
              <div key={i} className="w-full h-full flex bg-white">
                {/* Sol sayfa */}
                <div className="w-1/2 p-4 flex items-center justify-center border-r">
                  <img
                    src={page.left}
                    alt={`Sayfa ${i + 1} - Sol`}
                    className="object-cover rounded shadow-md max-h-[90%] max-w-[90%]"
                  />
                </div>

                {/* Sağ sayfa */}
                <div className="w-1/2 p-4 flex flex-col justify-center gap-4">
                  {page.right.map((src, j) => (
                    <img
                      key={j}
                      src={src}
                      alt={`Sayfa ${i + 1} - Sağ ${j + 1}`}
                      className="object-cover rounded shadow-md w-full h-1/2 max-h-[45%]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </section>
  )
}
