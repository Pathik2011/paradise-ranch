'use client'

import { useState, useEffect } from 'react'

interface FloatingBookButtonProps {
  onClick: () => void
}

export default function FloatingBookButton({ onClick }: FloatingBookButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past 500px (past the hero section)
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once initially to check state
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 left-6 z-40 bg-[#5c3d35] hover:bg-[#482e28] text-white px-6 py-3.5 rounded-full shadow-2xl font-serif font-bold text-sm tracking-wider flex items-center gap-2 transition-all duration-500 transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-12 opacity-0 scale-90 pointer-events-none'
      } hover:-translate-y-0.5 active:scale-95`}
      aria-label="Book a ride now"
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
      </svg>
      Book Now
    </button>
  )
}
