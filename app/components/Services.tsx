import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Lead Ride',
      desc: 'Perfect for beginners and kids. A gentle, guided introduction to horseback riding.',
      price: '$35',
      duration: '30 minutes',
      popular: false,
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: 'Trail Ride',
      desc: 'Scenic guided ride along Wheeler Lake trails. Great views, gentle pace, all skill levels.',
      price: '$60',
      duration: '1 hour',
      popular: true,
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
      title: 'Mentone Tour',
      desc: 'Extended guided tour through the beautiful Mentone, AL area. A true adventure.',
      price: '$60',
      duration: 'per person',
      popular: false,
    },
  ]

  return (
    <section id="services" className="bg-stone-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-3">Adventures</p>
            <h2 className="text-4xl font-bold text-stone-800">Choose Your Ride</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-amber-600 relative group hover:-translate-y-1">
                {s.popular && (
                  <div className="absolute -top-3 right-6 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <div className="text-amber-600 mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">{s.title}</h3>
                <p className="text-stone-500 text-sm mb-4">{s.desc}</p>
                <div className="text-3xl font-bold text-amber-700 mb-1">{s.price}</div>
                <div className="text-stone-400 text-sm mb-6">{s.duration}</div>
                <Link
                  href={`/book?service=${encodeURIComponent(s.title)}`}
                  className="block w-full text-center bg-[#5c3d35] hover:bg-[#482e28] text-white text-sm font-semibold py-2.5 rounded-xl transition shadow hover:shadow-md"
                >
                  Book Now
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
