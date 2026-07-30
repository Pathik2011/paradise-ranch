import ScrollReveal from './ScrollReveal'

export default function Testimonials() {
  const testimonials = [
    {
      text: "Took my daughter for her first ride. The staff was incredibly patient and the horses were so calm. The lake views were breathtaking — we'll definitely be back!",
      author: "Sarah M.",
    },
    {
      text: "Best trail riding experience in North Alabama. The guides know every path and the horses are clearly well cared for. Highly recommend the Mentone tour!",
      author: "James K.",
    },
  ]

  const Star = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )

  return (
    <section className="bg-stone-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3">Testimonials</p>
          <h2 className="text-4xl font-bold mb-12">What Riders Say</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="bg-stone-800 rounded-2xl p-8 hover:bg-stone-750 transition">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} />
                  ))}
                </div>
                <p className="text-stone-300 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="text-amber-400 font-semibold">— {t.author}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
