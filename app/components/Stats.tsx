import ScrollReveal from './ScrollReveal'

export default function Stats() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: 'Daily', label: '8AM – 8PM' },
    { value: 'Lake', label: 'Trail Access' },
    { value: 'All', label: 'Skill Levels' },
  ]

  return (
    <section className="bg-stone-900 text-stone-100 py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Open Year Round Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-amber-600 text-white text-sm font-bold px-5 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            Open Year Round
          </div>
        </div>
        {/* Proximity Hook */}
        <p className="text-center text-stone-400 text-sm mb-8">
          Just 30 minutes from Huntsville, AL — your countryside escape is closer than you think.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-sm text-stone-400 mt-1">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}