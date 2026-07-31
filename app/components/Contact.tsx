'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Input field component with icon
  const Field = ({
    label,
    icon,
    children,
  }: {
    label: string
    icon: React.ReactNode
    children: React.ReactNode
  }) => (
    <div>
      <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-[0.15em] mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
          {icon}
        </div>
        {children}
      </div>
    </div>
  )

  const inputClass =
    'w-full pl-11 pr-4 py-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 placeholder:text-stone-400 text-sm focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all duration-200'

  return (
    <section id="contact" className="bg-stone-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-amber-700 font-semibold tracking-[0.25em] uppercase text-xs mb-3">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Book Your Adventure
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto leading-relaxed">
              Ready to ride? Send us a message and we will get back to you within
              24 hours to confirm your booking.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* LEFT: Form */}
          <ScrollReveal className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
              {/* Form header image strip */}
              <div
                className="h-32 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1508217126498-e0e23c0e80ce?w=800&q=80')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                <div className="absolute bottom-4 left-8 text-white">
                  <p className="text-xs font-medium tracking-wider uppercase opacity-80">
                    Paradise Ranch
                  </p>
                  <p className="text-lg font-serif font-bold">Reserve Your Spot</p>
                </div>
              </div>

              <div className="p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-2">
                      Request Received!
                    </h3>
                    <p className="text-stone-500">
                      We will call you within 24 hours to confirm your ride.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field
                        label="Full Name"
                        icon={
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        }
                      >
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className={inputClass}
                        />
                      </Field>

                      <Field
                        label="Phone Number"
                        icon={
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        }
                      >
                        <input
                          required
                          type="tel"
                          placeholder="(727) 314-0201"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <Field
                      label="Email Address"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      }
                    >
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </Field>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field
                        label="Ride Type"
                        icon={
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                          </svg>
                        }
                      >
                        <select required className={`${inputClass} appearance-none`}>
                          <option value="">Select a ride...</option>
                          <option value="lead">Lead Ride — $35 (30 min)</option>
                          <option value="trail">Trail Ride — $60 (1 hour)</option>
                          <option value="mentone">Mentone Tour — $60/person</option>
                        </select>
                        {/* Custom chevron */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </Field>

                      <Field
                        label="Preferred Date"
                        icon={
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                        }
                      >
                        <input required type="date" className={inputClass} />
                      </Field>
                    </div>

                    <Field
                      label="Number of Riders"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                      }
                    >
                      <input
                        required
                        type="number"
                        min={1}
                        max={20}
                        placeholder="2"
                        className={inputClass}
                      />
                    </Field>

                    <Field
                      label="Message (Optional)"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                        </svg>
                      }
                    >
                      <textarea
                        rows={3}
                        placeholder="Any special requests or questions..."
                        className={`${inputClass} py-3 !top-3`}
                      />
                    </Field>

                    <button
                      type="submit"
                      className="w-full bg-[#5c3d35] hover:bg-[#482e28] text-white font-bold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm tracking-wide uppercase"
                    >
                      Request Booking
                    </button>

                    <p className="text-xs text-stone-400 text-center">
                      Or call us directly at{' '}
                      <a
                        href="tel:7273140201"
                        className="text-amber-700 font-semibold hover:underline"
                      >
                        (727) 314-0201
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Contact Info */}
          <ScrollReveal delay={2} className="lg:col-span-2 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-3xl shadow-lg shadow-stone-200/40 border border-stone-100 p-8">
              <h3 className="font-serif text-xl font-bold text-stone-800 mb-6">
                Visit the Ranch
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-100 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      12359 Co Rd 400<br />Hillsboro, AL 35643
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-100 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-0.5">Phone</p>
                    <a href="tel:7273140201" className="text-stone-700 text-sm hover:text-amber-700 transition font-medium">
                      (727) 314-0201
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-100 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-0.5">Hours</p>
                    <p className="text-stone-700 text-sm font-medium">Daily: 8:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg shadow-stone-200/40 border border-stone-100 h-64 bg-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.0!2d-87.1886!3d34.6389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM4JzIwLjAiTiA4N8KwMTEnMTkuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paradise Ranch Location"
              />
            </div>

            {/* Quick CTA */}
            <div className="bg-[#5c3d35] rounded-3xl p-8 text-white text-center shadow-lg shadow-stone-300/50">
              <p className="font-serif text-xl font-bold mb-2">Need Help?</p>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Not sure which ride is right for you? Give us a call — we are happy to help.
              </p>
              <a
                href="tel:7273140201"
                className="inline-block bg-white text-[#5c3d35] font-bold px-6 py-2.5 rounded-full text-sm hover:bg-stone-100 transition"
              >
                Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}