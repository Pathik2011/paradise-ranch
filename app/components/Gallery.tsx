import ScrollReveal from './ScrollReveal'

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
    'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=400&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80',
    'https://images.unsplash.com/photo-1511497584788-876760111969?w=400&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80',
  ]

  return (
    <section id="gallery" className="py-20 px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-3">Gallery</p>
          <h2 className="text-4xl font-bold text-stone-800">Moments at the Ranch</h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <ScrollReveal key={i} delay={(i % 4) + 1}>
            <div
              className="rounded-xl overflow-hidden h-48 bg-cover bg-center hover:scale-105 transition duration-500 cursor-pointer"
              style={{ backgroundImage: `url('${src}')` }}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
