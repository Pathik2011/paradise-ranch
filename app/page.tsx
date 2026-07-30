'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Founder from './components/Founder'
import Services from './components/Services'
import MeetTheHorses from './components/MeetTheHorses'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import FloatingBookButton from './components/FloatingBookButton'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingService, setBookingService] = useState<string | null>(null)

  const handleOpenBooking = (service: string | null = null) => {
    setBookingService(service)
    setIsBookingOpen(true)
  }

  const handleCloseBooking = () => {
    setIsBookingOpen(false)
    setBookingService(null)
  }

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Navbar onBook={() => handleOpenBooking(null)} />
      <Hero onBook={() => handleOpenBooking(null)} />
      <Stats />
      <About />
      <Founder />
      <Services onBook={(service) => handleOpenBooking(service)} />
      <MeetTheHorses />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTABanner onBook={() => handleOpenBooking(null)} />
      <Footer />

      {/* Floating Scroll Book Now Button */}
      <FloatingBookButton onClick={() => handleOpenBooking(null)} />

      {/* Interactive Booking Wizard Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        initialService={bookingService} 
      />
    </main>
  )
}