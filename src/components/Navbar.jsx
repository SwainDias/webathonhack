import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredSection, setHoveredSection] = useState(null)

  const sections = [
    { id: "about", label: "ABOUT US" },
    { id: "works", label: "WORKS" },
    { id: "services", label: "SERVICES" },
    { id: "contacts", label: "CONTACTS" },
  ]

  const getHeightClass = (sectionId) => {
    if (!hoveredSection) return "h-32"
    if (hoveredSection === sectionId) return "h-48"
    return "h-24"
  }

  const getBackgroundClass = (sectionId) => {
    if (hoveredSection === sectionId) {
      switch (sectionId) {
        case "about":
          return "bg-orange-400"
        case "works":
          return "bg-yellow-400"
        case "services":
          return "bg-orange-200"
        case "contacts":
          return "bg-red-400"
        default:
          return "bg-gray-100"
      }
    }
    return "bg-white hover:bg-gray-50"
  }

  return (
    <>
      {/* Navbar Button - Always visible (hidden when navbar is open) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-6 right-6 z-50 rounded-full px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black bg-transparent transition-all duration-300"
        >
          NAVBAR
        </button>
      )}

      {/* Popup Navbar Overlay - 2/3 screen width */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          
          {/* Popup Content - Right side */}
          <div className="absolute right-0 top-0 h-full w-2/3 bg-white rounded-l-3xl border-l-2 border-gray-300">
            {/* Header Section */}
            <div className="bg-gray-50 px-8 py-12 relative rounded-tl-3xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 rounded-full px-6 py-2 border-2 border-black hover:bg-black hover:text-white bg-transparent transition-all duration-300"
              >
                CLOSE ✕
              </button>

              <div className="max-w-2xl text-left">
                <h1 className="text-4xl md:text-5xl font-normal leading-tight text-black">
                  We make digital products for complex challenges: from mobile apps
                  <br />
                  to enterprise systems.
                </h1>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="flex flex-col h-[calc(100vh-300px)]">
              {sections.map((section, index) => (
                <div key={section.id} className="relative">
                  {index > 0 && <div className="absolute top-0 left-0 right-0 h-px bg-black z-10" />}

                  <div
                    className={`
                      px-8 cursor-pointer relative overflow-hidden
                      transition-all duration-500 ease-in-out
                      ${getHeightClass(section.id)}
                      ${getBackgroundClass(section.id)}
                    `}
                    onMouseEnter={() => setHoveredSection(section.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    <div className="absolute inset-0 flex items-start justify-center pt-4">
                      <h2 className="text-8xl md:text-9xl font-black text-black tracking-tight text-center leading-none">
                        {section.label}
                      </h2>
                    </div>
                    <button
                      className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full border-2 border-black hover:bg-black hover:text-white w-12 h-12 bg-transparent z-10 flex items-center justify-center transition-all duration-300"
                    >
                      →
                    </button>
                  </div>
                </div>
              ))}
              <div className="h-px bg-black" />
            </div>
          </div>
        </div>
      )}
    </>
  )
} 