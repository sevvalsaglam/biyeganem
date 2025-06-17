"use client"

export function PhotographerSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0efe6]">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm mb-4">
          Fotoğrafçımız
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Özel Günlerinizi Ölümsüzleştirin</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
          Anların içindeki duyguyu yakalayan bir göz… Profesyonel çekimlerle her anınızı ölümsüzleştiriyoruz.
        </p>
        <p className="text-gray-500 font-semibold">
          📸 Fotoğrafçı: <span className="text-black">Elif Yılmaz</span>
        </p>
      </div>
    </section>
  )
}
