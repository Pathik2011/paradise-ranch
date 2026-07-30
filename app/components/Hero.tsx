'use client'

import { useEffect, useState } from 'react'

export default function Hero({ onBook }: { onBook: () => void }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/Hero.webp')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p
          className={`text-amber-300 tracking-[0.3em] text-sm uppercase mb-4 font-semibold transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          Wheeler Lake, Alabama
        </p>
        <h1
          className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          Paradise Ranch
        </h1>
        <p
          className={`text-lg md:text-xl text-stone-200 mb-2 leading-relaxed transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          Where the trail meets the lake. Experience horseback riding through scenic Alabama countryside along the banks of Wheeler Lake.
        </p>
        <p
          className={`text-amber-300 text-sm md:text-base mb-8 transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          Only 30 minutes from Huntsville, AL
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <button
            onClick={onBook}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a Ride
          </button>
          <a
            href="#about"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}