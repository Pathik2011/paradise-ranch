import ScrollReveal from './ScrollReveal'

export default function FAQ() {
  const faqs = [
    {
      q: 'Do I need riding experience?',
      a: 'Not at all! Our guides match you with a horse suited to your skill level. Beginners are welcome and we provide a full safety briefing before every ride.',
    },
    {
      q: 'What should I wear?',
      a: 'We recommend long pants (jeans are perfect) and closed-toe shoes with a small heel. Avoid sandals, flip-flops, or shorts. Helmets are provided.',
    },
    {
      q: 'Is there an age limit?',
      a: 'Our lead rides are great for kids as young as 4. For trail rides, we generally recommend ages 8 and up. Call us if you have questions about younger riders.',
    },
    {
      q: 'What if it rains?',
      a: 'Light rain is fine — we ride in most weather! For heavy storms or unsafe conditions, we will reschedule your ride at no charge.',
    },
    {
      q: 'How early should I arrive?',
      a: 'Please arrive 15 minutes before your scheduled ride. This gives you time to check in, meet your horse, and get fitted for a helmet.',
    },
    {
      q: 'Can I bring my phone or camera?',
      a: 'Yes! We encourage photos. Just make sure your phone is secured. Our guides are also happy to take group photos at scenic spots along the trail.',
    },
  ]

  return (
    <section id="faq" className="bg-stone-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-3">Questions</p>
            <h2 className="text-4xl font-bold text-stone-800">What to Know Before You Ride</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={(i % 2) + 1}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition h-full">
                <h3 className="font-bold text-stone-800 mb-3 flex items-start gap-3">
                  <span className="text-amber-600 text-lg shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-stone-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}