import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div>
            <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-3">Our Story</p>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">Ride Where the Wild Meets the Water</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Nestled along the scenic banks of Wheeler Lake in Hillsboro, Alabama, Paradise Ranch offers an authentic horseback riding experience for riders of all ages and skill levels.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Whether you are looking for a peaceful trail ride through Alabama countryside, a memorable family outing, or a guided tour with breathtaking lake views, our gentle horses and experienced guides ensure a safe, unforgettable adventure.
            </p>
            <div className="flex items-center gap-3 text-amber-700 font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span>Family-owned & operated</span>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div
            className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=800&q=80')" }}
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
