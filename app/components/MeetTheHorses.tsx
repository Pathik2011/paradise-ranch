import ScrollReveal from './ScrollReveal'

export default function MeetTheHorses() {
  const horses = [
    {
      name: 'Duke',
      breed: 'Quarter Horse',
      age: 8,
      personality: 'Gentle giant. Loves kids and slow trail walks.',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&q=80',
    },
    {
      name: 'Bella',
      breed: 'Tennessee Walker',
      age: 6,
      personality: 'Smooth gait, calm spirit. Perfect for beginners.',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&q=80',
    },
    {
      name: 'Rusty',
      breed: 'Appaloosa',
      age: 12,
      personality: 'Wise and patient. The ranch favorite.',
      image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=400&q=80',
    },
    {
      name: 'Willow',
      breed: 'Arabian Mix',
      age: 5,
      personality: 'Energetic but gentle. Loves the lake trail.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80',
    },
  ]

  return (
    <section id="horses" className="py-20 px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-3">The Herd</p>
          <h2 className="text-4xl font-bold text-stone-800">Meet Our Horses</h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Every horse at Paradise Ranch is hand-raised, gentle, and ready to make your ride unforgettable.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {horses.map((horse, i) => (
          <ScrollReveal key={i} delay={i + 1}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition hover:-translate-y-1 group">
              <div className="h-56 bg-cover bg-center group-hover:scale-105 transition duration-500" style={{ backgroundImage: `url('${horse.image}')` }} />
              <div className="p-5">
                <h3 className="text-lg font-bold text-stone-800">{horse.name}</h3>
                <p className="text-amber-600 text-sm font-medium">{horse.breed} &middot; {horse.age} years old</p>
                <p className="text-stone-500 text-sm mt-2">{horse.personality}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
