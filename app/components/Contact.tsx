'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In production, hook this up to EmailJS, Formspree, or a backend API
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-3">Get in Touch</p>
          <h2 className="text-4xl font-bold text-stone-800">Book Your Adventure</h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Ready to ride? Fill out the form below and we will get back to you within 24 hours to confirm your booking.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Booking Form */}
        <ScrollReveal className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">Booking Request Sent!</h3>
                <p className="text-stone-500">We will call you within 24 hours to confirm your ride.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1">Ride Type</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition bg-white"
                    >
                      <option value="">Select a ride...</option>
                      <option value="lead">Lead Ride — $35 (30 min)</option>
                      <option value="trail">Trail Ride — $60 (1 hour)</option>
                      <option value="mentone">Mentone Tour — $60/person</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1">Preferred Date</label>
                    <input
                      required
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1">Number of Riders</label>
                  <input
                    required
                    type="number"
                    min={1}
                    max={20}
                    placeholder="2"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1">Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Any special requests or questions..."
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-full transition shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Request Booking
                </button>

                <p className="text-xs text-stone-400 text-center">
                  You can also call us directly at{' '}
                  <a href="tel:7273140201" className="text-amber-600 hover:underline">(727) 314-0201</a>
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Contact Info + Map */}
        <ScrollReveal delay={2} className="lg:col-span-2">
          <div className="space-y-6">
            <div className="bg-stone-100 rounded-2xl p-6">
              <h3 className="font-bold text-stone-800 mb-4">Visit the Ranch</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Address</p>
                    <p className="text-stone-600">12359 Co Rd 400<br />Hillsboro, AL 35643</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Phone</p>
                    <p className="text-stone-600"><a href="tel:7273140201" className="hover:text-amber-600 transition">(727) 314-0201</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Hours</p>
                    <p className="text-stone-600">Daily: 8:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-stone-200">
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}