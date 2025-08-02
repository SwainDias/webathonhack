import { useState } from "react"

export default function LoopingMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  const collections = [
    {
      id: "photo1",
      title: "Collection V1",
      image: "/src/assets/orangecounty-big.jpg",
    },
    {
      id: "photo2",
      title: "Collection V2",
      image: "/src/assets/images.jpeg",
    },
    {
      id: "photo3",
      title: "Collection V3",
      image: "/src/assets/iphone_6_sample_photo_566464.jpg",
    },
    {
      id: "photo4",
      title: "Collection V4",
      image: "/src/assets/Nikon-1-V3-sample-photo.jpg",
    },
    {
      id: "photo5",
      title: "Collection V5",
      image: "/src/assets/images (1).jpeg",
    },
    {
      id: "photo6",
      title: "Collection V6",
      image: "/src/assets/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d34342e6a7067.jpeg",
    },
  ]

  const duplicatedCollections = [...collections, ...collections]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden w-full">
      <div className="pt-20 pb-12 px-8 w-full">
        <h1 className="text-4xl font-medium text-gray-200 text-left">Looping Marquee (Pause on Hover)</h1>
      </div>

      <div className="relative overflow-hidden w-full">
        <div
          className={`flex animate-marquee w-full ${isPaused ? "pause-animation" : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedCollections.map((collection, index) => (
            <div key={`${collection.id}-${index}`} className="flex items-center flex-shrink-0">
              <div className="flex-shrink-0 group cursor-pointer px-8 transition-transform duration-300 hover:scale-95">
                <div className="relative w-80 h-80 overflow-hidden bg-gray-800 transition-all duration-300">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="mt-4 px-2">
                  <h3 className="text-lg font-bold text-gray-300 text-left">{collection.title}</h3>
                </div>
              </div>
              {index < duplicatedCollections.length - 1 && <div className="w-px h-96 bg-gray-600 flex-shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}