import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

export default function CTABanner() {
  return (
    <section className="bg-amber-700 py-16 px-6 text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Ride?</h2>
        <p className="text-amber-100 text-lg mb-8 max-w-xl mx-auto">
          Weekend slots fill up fast. Book your adventure at Paradise Ranch today and experience Wheeler Lake on horseback.
        </p>
        <Link
          href="/book"
          className="inline-block bg-white text-amber-700 hover:bg-stone-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Book Your Ride Now
        </Link>
      </ScrollReveal>
    </section>
  )
}
