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

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Founder />
      <Services />
      <MeetTheHorses />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTABanner />
      <Footer />
    </main>
  )
}